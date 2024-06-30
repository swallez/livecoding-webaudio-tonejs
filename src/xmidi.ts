import * as Midi from './midi';
import * as Nexus from 'nexusui';
import svg from "nexusui/lib/util/svg";
import * as Tone from "tone";
import XTone from "./xtone";
import {MidiNotes} from "./midi";

//-------------------------------------------------------------------------------------------------
// Visual MIDI control

export function start() {}

class BaseMidiControl {
    protected _ui: any;
    protected _control: Midi.MidiBase;
    //protected _target?: any;

    constructor(control: Midi.MidiBase) {
        this._ui = undefined;
        this._control = control;
    }

    // Forward methods to Nexus dial & Midi control
    connect(target, min, max) {
        this._control.connect(target, min, max);
    }

    disconnect() {
        this._control.disconnect();
        this._control.connect(this._ui); // reconnect ui
    }

    set value(value) { this._ui.value = value; }
    get value() { return this._ui.value; }

    destroy() {
        this._ui.destroy();
        this._control.disconnect();
    }
}

class MidiDial extends BaseMidiControl {

    constructor(number, options) {
        super(new Midi.MidiControl(number, options));
        this._ui = Nexus.Add.Dial("#dials", { size: [60, 60]});
        this._control.connect(this._ui);

        // Publish a synthetic midi event on change.
        this._ui.on("change", value => {
            Midi.dispatchEvent({
                type: "controlchange", channel: 0, number: number, value: value, target: {manufacturer: "Nexus"}
            })
        });
    }
}

class MidiFader extends BaseMidiControl {
    constructor(number, options) {
        let target = options?.target ?? "#dials";
        super(new Midi.MidiControl(number, options));
        this._ui = Nexus.Add.Slider(target, {size: [20, 70], mode: 'absolute'});
        this._control.connect(this._ui);

        // Publish a synthetic midi event on change.
        this._ui.on("change", value => {
            Midi.dispatchEvent({
                type: "controlchange", channel: 0, number: number, value: value, target: {manufacturer: "Nexus"}
            })
        });
    }
}

class MidiMasterFader extends MidiFader {
    constructor(number, options) {
        options = options ?? {};
        options.target = "#master";
        super(number, options);
    }
}

class MidiToggle extends BaseMidiControl {
    constructor(number) {
        super(new Midi.ToggleControl(number));
        this._ui = Nexus.Add.Button("#toggles", { mode: "toggle", size: [30, 30] });
        this._control.connect({
            start: () => {this._ui.turnOn(false)},
            stop: () => {this._ui.turnOff(false)},
        });

        // Publish a synthetic midi event on change.
        this._ui.on("change", on => {
            Midi.dispatchEvent({
                type: "controlchange", channel: 0, number: number, value: (on ? 1 : 0), target: {manufacturer: "Nexus"}
            })
        });
    }
}

class MidiButton extends BaseMidiControl {
    constructor(number) {
        super(new Midi.ToggleControl(number));
        this._ui = Nexus.Add.Button("#buttons", { mode: "button", size: [30, 30] });
        this._control.connect({
            start: () => {this._ui.turnOn(false)},
            stop: () => {this._ui.turnOff(false)},
        });
    }
}

//----- Monkey patch Nexus button to be square instead of round. That's how I like it :-)

Nexus.Button.prototype.buildInterface = function() {
    this.pad = svg.create('rect');
    this.element.appendChild(this.pad);
    this.interactionTarget = this.pad;

    // only used if in 'aftertouch' mode
    this.defs = svg.create('defs');
    this.element.appendChild(this.defs);

    this.gradient = svg.radialGradient(this.defs,2);
    this.gradient.stops[0].setAttribute('offset', '30%');
    this.gradient.stops[1].setAttribute('offset', '100%');

};

Nexus.Button.prototype.sizeInterface = function() {
    let strokeWidth = this.width/10;
    this.pad.setAttribute('x', strokeWidth/2);
    this.pad.setAttribute('y', strokeWidth/2);
    this.pad.setAttribute('width',this.width - strokeWidth);
    this.pad.setAttribute('height',this.height - strokeWidth);
    this.pad.setAttribute('stroke-width', strokeWidth);
    this.pad.setAttribute('rx', strokeWidth);
};

let superRender = Nexus.Button.prototype.render;
Nexus.Button.prototype.render = function() {
    superRender.apply(this);
    if (this.state) {
        //this.pad.setAttribute("fill", this.colors.accent);
        this.pad.setAttribute("fill-opacity", 0.3);
    } else {
        this.pad.removeAttribute("fill-opacity");
    }
};

//----- Add our UI+control widgets to midi

const Exports = {
    Dial: MidiDial,
    Button: MidiButton,
    Toggle: MidiToggle,
    Slider: MidiFader,
    Fader: MidiFader,
    MasterFader: MidiMasterFader,
    Inputs: Midi.Inputs,
    Notes: MidiNotes,
    log: Midi.log,
    addListener: Midi.addListener,
};

export default Exports;

(<any>window).Midi = Exports;
