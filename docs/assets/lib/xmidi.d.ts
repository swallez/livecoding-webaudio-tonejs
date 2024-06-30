import * as Midi from './midi';
export declare function start(): void;
declare class BaseMidiControl {
    protected _ui: any;
    protected _control: Midi.MidiBase;
    constructor(control: Midi.MidiBase);
    connect(target: any, min: any, max: any): void;
    disconnect(): void;
    set value(value: any);
    get value(): any;
    destroy(): void;
}
declare class MidiDial extends BaseMidiControl {
    constructor(number: any, options: any);
}
declare class MidiFader extends BaseMidiControl {
    constructor(number: any, options: any);
}
declare class MidiMasterFader extends MidiFader {
    constructor(number: any, options: any);
}
declare class MidiToggle extends BaseMidiControl {
    constructor(number: any);
}
declare class MidiButton extends BaseMidiControl {
    constructor(number: any);
}
declare const Exports: {
    Dial: typeof MidiDial;
    Button: typeof MidiButton;
    Toggle: typeof MidiToggle;
    Slider: typeof MidiFader;
    Fader: typeof MidiFader;
    MasterFader: typeof MidiMasterFader;
    Inputs: Map<string, WebMidi.MIDIInput>;
    Notes: typeof Midi.MidiNotes;
    log: typeof Midi.log;
    addListener: typeof Midi.addListener;
};
export default Exports;
