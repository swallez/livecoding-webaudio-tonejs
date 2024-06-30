import * as Tone from 'tone';
import { Source } from 'tone/build/esm/source/Source'
import { Time, TransportTime } from 'tone/build/esm/core/type/Units'
import { defaultArg } from "tone/Tone/core/util/Defaults";
import {optionsFromArguments, Sequence, ToneEvent } from "tone";

// Monkey-patch Tone.Sequence so that it starts at the measure by default
{
    let seqStart = Sequence.prototype.start;

    Sequence.prototype.start = function(time, offset) {
        time = time ?? atTransportTime("@1m");
        seqStart.call(this, time, offset);
        return this;
    }

    let patternStart = Tone.Pattern.prototype.start;
    Tone.Pattern.prototype.start = function(time) {
        time = time ?? atTransportTime("@1m");
        patternStart.call(this, time);
        return this;
    }
}

class BeatSequence<ValueType = any> extends ToneEvent<ValueType> {
    readonly name: string = "BeatSequence";

    private _source: Source<any>;
    private _pattern: string;
    private _sequence: Sequence;
    private _subdivision: string = "4n";

    constructor(source: Source<any>, pattern?: string) {
        super(() => {}); // Do nothing on tick()
        this._source = source;
        if (pattern) {
            this._pattern = pattern;
            this._sequence = createSequence(pattern, source, this._subdivision);
        }
    }

    get pattern(): string {
        return this._pattern;
    }

    set pattern(p: string) {
        let started = this.state === "started"
        if (started) this.stop();
        this._pattern = p;
        this._sequence = createSequence(p, this._source, this._subdivision);
        if (started) this.start();
    }

    start(time?: TransportTime): this {
        time = time ?? atTransportTime("@1m");
        super.start(time);
        if (this._sequence) {
            this._sequence.start(time)
        }
        return this;
    }

    stop(time?: TransportTime): this {
        time = time ?? atTransportTime("@1m");
        super.stop(time);
        if (this._sequence) {
            this._sequence.stop(time);
        }
        return this;
    }

    get subdivision() {
        return this._subdivision;
    }

    set subdivision(v) {
        this._subdivision = v;
        this.pattern = this._pattern; // recreate sequence
    }
}

function createSequence(pattern: string, source: Source<any>, subdivision: string): Sequence {
    return new Tone.Sequence((time, note) => {
        if (note === "x") {
            source.volume.value = -3;
            source.start(time);
        }
        else if (note === "X") {
            source.volume.value = 0;
            source.start(time);
        }
        else if (note === "r" && Math.random() > 0.5) {
            source.volume.value = -3;
            source.start(time);
        }
        else if (note === "R" && Math.random() > 0.5) {
            source.volume.value = 0;
            source.start(time);
        }
    }, parsePattern(pattern), subdivision);
}

function parsePattern(str: string): string[] {
    str = str.replace(/ /g, '');
    str = JSON.stringify(str.split(''));
    str = str.replace(/,"\[",/g, ', [');
    str = str.replace(/"\[",/g, '[');
    str = str.replace(/,"]"/g, ']');
    return JSON.parse(str);
}

function atTransportTime(time) {
    if (Tone.isUndef(time)) {
        time = "@1m";
    }

    let transportOffset = Tone.getTransport().seconds - Tone.now(); // always negative
    return Tone.Time(time).valueOf() + transportOffset;
}

const XTone = {
    BeatSequence: BeatSequence,
    atMeasure: () => atTransportTime("@1m"),
    atTime: atTransportTime,
    Metronome: (<any>undefined),
    AudioContext: Tone.getContext().rawContext,
    MasterNode: Tone.getDestination().input.input.input
};

export default XTone;
