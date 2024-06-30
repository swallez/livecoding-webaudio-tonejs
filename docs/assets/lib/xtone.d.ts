import { Source } from 'tone/build/esm/source/Source';
import { TransportTime } from 'tone/build/esm/core/type/Units';
import { ToneEvent } from "tone";
declare class BeatSequence<ValueType = any> extends ToneEvent<ValueType> {
    readonly name: string;
    private _source;
    private _pattern;
    private _sequence;
    private _subdivision;
    constructor(source: Source<any>, pattern?: string);
    get pattern(): string;
    set pattern(p: string);
    start(time?: TransportTime): this;
    stop(time?: TransportTime): this;
    get subdivision(): string;
    set subdivision(v: string);
}
declare function atTransportTime(time: any): number;
declare const XTone: {
    BeatSequence: typeof BeatSequence;
    atMeasure: () => number;
    atTime: typeof atTransportTime;
    Metronome: any;
    AudioContext: import("tone/build/esm/core/context/AudioContext").AnyAudioContext;
    MasterNode: GainNode;
};
export default XTone;
