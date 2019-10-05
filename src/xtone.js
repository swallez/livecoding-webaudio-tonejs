import * as Tone from 'tone';

class BeatSequence extends Tone.Source {
    constructor(source, pattern) {
        let options = Tone.defaults(arguments, ["source", "pattern"], BeatSequence);
        super(options);

        this._source = source;
        this._subdivision = "4n";
        if (pattern) {
            this._sequence = this._createSequence(pattern);
        }
    }

    /**
     *
     * @param str {string}
     * @return {Array<string>}
     * @private
     */
    static _parsePattern(str) {
        str = str.replace(/ /g, '');
        str = JSON.stringify(str.split(''));
        str = str.replace(/,"\[",/g, ', [');
        str = str.replace(/"\[",/g, '[');
        str = str.replace(/,"\]"/g, ']');
        return JSON.parse(str);
    };

    /**
     * @param pattern {string}
     * @return {Tone.Part}
     * @private
     */
    _createSequence(pattern) {
        if (!pattern) return undefined;

        let source = this._source;
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
        }, BeatSequence._parsePattern(pattern), this._subdivision);
    }

    _toTransportTime(time) {
        if (Tone.isUndef(time)) {
            time = "@1m";
        }

        let transportOffset = Tone.Transport.seconds - Tone.now(); // always negative
        let ttime = new Tone.Time(time).valueOf() + transportOffset;
        return ttime;
    }

    /**
     *
     * @param  time {Time} [time=now] When the source should be started.
     * @param offset
     * @param duration
     * @private
     */
    _start(time, offset, duration) {
        if (this._sequence) {
            time = this._toTransportTime(time);
            this._sequence.start(time, offset);
        }
    }

    _stop(time) {
        if (this._sequence) {
            time = this._toTransportTime(time);
            this._sequence.stop(time);
        }
    };

    restart(time, offset, duration) {
        time = this._toTransportTime(time);
        this._stop(time);
        this._start(time, offset, duration);
    }

    get pattern() {
        return this._pattern;
    }

    set pattern(p) {
        let started = this.state === "started";
        if (started) this.stop();
        this._pattern = p;
        this._sequence = this._createSequence(p);
        if (started) this.start();
    }

    get subdivision() {
        return this._subdivision;
    }

    set subdivision(v) {
        this._subdivision = v;
        this.pattern = this._pattern; // recreate sequence
    }
}

class DrumKit extends Tone.Instrument {
    /**
     *
     * @param config {Array<Object>}
     */
    constructor(config) {
        super(config);

        this.mapping = new Map();

        // TODO: handle defaults
        if (config && config.kit) {
            config.kit.forEach(obj => this.add(obj));
        }
    }

    add(obj) {
        let source;
        if (obj.instrument) {
            // play note
            source = new SynthSource(obj.instrument, obj.play || obj.note);
        }

        if (obj.source) {
            if (Tone.isString(obj.source)) {
                // A simple player
                // handle playbackRate
                source = new Tone.Player(obj.source);
                source.connect(this.output);
            }
        }

        if (obj.note) {
            this.mapping.set(Tone.Frequency(obj.note).toMidi(), source);
        }

        if (obj.name) {
            this.mapping.set(obj.name, source);
        }

        // Duration (fixed)
        // Volume
        // Pan
    }

    triggerAttack(freq, time, velocity) {
        // Accept either name or note/freq
        let source = this.mapping.get(freq) || this.mapping.get(Tone.Frequency(freq).toMidi());

        if (source) {
            source.start(time);
        }
    }

    triggerRelease(freq, time) {
        let source = this.mapping.get(freq) || this.mapping.get(Tone.Frequency(freq).toMidi());

        if (source) {
            source.stop(time);
        }
    }
}

function TransportTime(time) {
    if (Tone.isUndef(time)) {
        time = "@1m";
    }

    let transportOffset = Tone.Transport.seconds - Tone.now(); // always negative
    let ttime = new Tone.Time(time).valueOf() + transportOffset;
    return ttime;
}


const XTone = {
    BeatSequence: BeatSequence,
    TransportTime: TransportTime,
    atMeasure: () => TransportTime("@1m"),
    DrumKit: DrumKit
};

export default XTone;
