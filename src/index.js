import * as Tone from "tone";
import XTone from "./xtone";
import Midi from "./midi";
import * as Nexus from "nexusui";
import * as CodeBuffers from "./code-buffers";

import svg from "../node_modules/nexusui/lib/util/svg";

window.Tone = Tone;
window.XTone = XTone;
window.Midi = Midi;
window.Nexus = Nexus;

Nexus.context = Tone.context;

//-------------------------------------------------------------------------------------------------
// Transport

let play = new Nexus.TextButton("#play-pause", {
    'size': [50,50],
    'state': false,
    'text': '▶',
    'alternateText': '‖',
});

play.on("change", (state) => {
    if (state) {
        Tone.Transport.start();
    } else {
        Tone.Transport.pause();
    }
});

function updatePlayState(state) {
    if (play.state !== state) {
        play.state = state;
    }
}

Tone.Transport.on("start", () => updatePlayState(true));
Tone.Transport.on("stop", () => updatePlayState(false));
Tone.Transport.on("pause", () => updatePlayState(false));

updatePlayState(Tone.Transport.state === "started");

//-------------------------------------------------------------------------------------------------
// Metronome

let metroSounds = new Tone.Players({
    beat: "/assets/metronome/synth-beat.wav",
    measure: "/assets/metronome/synth-measure.wav"
}).toMaster();

let metro = document.getElementById("metronome");
let metroText = metro.querySelector("div");
metroText.textContent = '●○ ';


let playTicks = false;
metro.onclick = () => { playTicks = ! playTicks };

let odd = true;
Tone.Transport.scheduleRepeat((time) => {
    odd = !odd;

    let ttime = new Tone.TransportTime(Tone.Transport.seconds);

    // Extracted from Tone.Time.prototype.toBarsBeatsSixteenths
    let quarterTime = ttime._beatsToUnits(1);
    let quarters = ttime.valueOf() / quarterTime;
    let measures = Math.floor(quarters / ttime._getTimeSignature());
    quarters = Math.floor(quarters) % ttime._getTimeSignature();

    if (playTicks) {
        metroSounds.get(quarters === 0 ? "measure" : "beat").start(time);
    }

    Tone.Draw.schedule(() => {
        metroText.textContent = odd ? '○● ' : '●○ ';
        //metroText.textContent = odd ? '◯⬤' : '⬤◯';
        if (quarters === 0) {
            metro.classList.remove("nx-inactive");
            metro.classList.add("nx-active");
            window.requestAnimationFrame(() => {
                metro.classList.remove("nx-active");
                metro.classList.add("nx-inactive");
            })
        }
    });
}, "4n", "@1m");

// Exposed to allow changing metronome attributes (e.g. volume)
XTone.Metronome = {
    start: () => playTicks = true,
    stop: () => playTicks = false,
};

//-------------------------------------------------------------------------------------------------
// Meter, scope, spectrogram

let osc = new Nexus.Oscilloscope("#scope", {
    'size': [100,50],
});
osc.connect(Tone.Master);

let spectr = new Nexus.Spectrogram("#spectr", {
    'size': [100,50],
});
spectr.connect(Tone.Master);

//-------------------------------------------------------------------------------------------------
// Visual MIDI control

class BaseMidiControl {
    constructor() {
        this._ui = undefined;
        /** @type {Midi.Control} */
        this._control = undefined;
    }

    // Forward methods to Nexus dial & Midi control
    connect(target) { this._control.connect(target); }
    disconnect(target) {
        this._control.disconnect(target);
        if (!target) { this._control.connect(this._ui) } // reconnect ui
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
        super();
        this._ui = Nexus.add("Dial", "#dials", { size: [60, 60]});
        this._control = new Midi.Control(number, options);
        this._control.connect(this._ui);

        // Publish a synthetic midi event on change.
        this._ui.on("change", value => {
            Midi.dispatchEvent({
                type: "controlchange", channel: 0, number: number, value: value, target: {manufacturer: "Nexus"}
            })
        });
    }

    connect(target, min, max) {
        this._control.connect(target, min, max);
    }
}

class MidiSlider extends BaseMidiControl {
    constructor(number, options) {
        super();
        this._ui = Nexus.add("Slider", "#dials", {size: [20, 70], mode: 'absolute'});
        this._control = new Midi.Control(number, options);
        this._control.connect(this._ui);

        // Publish a synthetic midi event on change.
        this._ui.on("change", value => {
            Midi.dispatchEvent({
                type: "controlchange", channel: 0, number: number, value: value, target: {manufacturer: "Nexus"}
            })
        });
    }

    connect(target, min, max) {
        this._control.connect(target, min, max);
    }
}

class MidiToggle extends BaseMidiControl {
    constructor(number) {
        super();
        this._ui = Nexus.add("Button", "#toggles", { mode: "toggle", size: [30, 30] });
        this._control = new Midi.ToggleControl(number);
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
    constructor(number, position) {
        super();
        this._ui = Nexus.add("Button", "#buttons", { mode: "button", size: [30, 30] });
        this._control = new Midi.ToggleControl(number);
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

Midi.Dial = MidiDial;
Midi.Button = MidiButton;
Midi.Toggle = MidiToggle;
Midi.Slider = MidiSlider;
Midi.Fader = MidiSlider;

// and wire the transport and metronome buttons
// (this is my Korg nanoKontrol's config)
new Midi.ToggleControl(42).connect({
    start: () => Tone.Transport.start(),
    stop: () => Tone.Transport.pause()
});

new Midi.ToggleControl(46).connect(XTone.Metronome);

new Midi.ToggleControl(45).connect({
    start: () => Tone.Master.mute = true,
    stop: () => Tone.Master.mute = false,
});
