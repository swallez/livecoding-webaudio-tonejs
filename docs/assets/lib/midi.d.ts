export declare function start(): void;
export declare const Inputs: Map<string, WebMidi.MIDIInput>;
export declare const Outputs: Map<string, WebMidi.MIDIOutput>;
export declare function log(v: boolean): void;
export declare class MidiEvent {
    type: string;
    name?: string;
    channel?: number;
    value?: number;
    number?: number;
    timeStamp: DOMHighResTimeStamp;
    port: WebMidi.MIDIPort;
    target: any;
    data?: Uint8Array;
}
export declare class MidiBase {
    protected options: any;
    protected _targets: Set<any>;
    protected _eventTypes: any[];
    protected _handler: (event: any) => void;
    constructor(options: any);
    _handleMidiEvent(event: any): void;
    _discardEvent(event: any): boolean;
    connect(param: any, min?: any, max?: any, scale?: any): this;
    disconnect(target?: any): void;
}
export declare class MidiNotes extends MidiBase {
    private _noteCount;
    constructor(options: any);
    _handleMidiEvent(event: any): void;
}
export declare class MidiControl extends MidiBase {
    private _bounds;
    private _number;
    private _lastValue;
    constructor(number: any, options: any);
    connect(param: AudioParam, min?: number, max?: number, scale?: string): this;
    disconnect(param?: any): void;
    _handleMidiEvent(event: any): void;
}
export declare class ToggleControl extends MidiBase {
    private _bounds;
    private _number;
    constructor(number: any, options?: any);
    connect(part: any): this;
    disconnect(part: any): void;
    _handleMidiEvent(event: any): void;
}
export declare function dispatchEvent(event: any): void;
export declare function addListener(eventType: any, listener: any): void;
