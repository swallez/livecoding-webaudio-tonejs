// A higher-level wrapper around the WebMIDI API, and easy connection to Tone.js
//
// I initially started using https://github.com/djipco/webmidi but found it cumbersome to use in a live coding
// environment:
// - There's no way to register callbacks to all MIDI interfaces and have them registered/deregistered as devices come
//   and go.
// - There's no way to have callbacks that listen to all midi events, except by listening to 'midimessage' that skips
//   message parsing.
// - And reading the code there is some very inefficient code for things I do not need (e.g. controller names)

/**
 * All MIDI inputs. Updated automatically.
 * @type {Map<string, MIDIInput>}
 */
const Inputs = new Map();

/**
 * All MIDI outputs. Updated automatically.
 * @type {Map<string, MIDIOutput>}
 */
const Outputs = new Map();

navigator.requestMIDIAccess && navigator.requestMIDIAccess()
    .then(function(access) {
        // Get lists of available MIDI controllers
        access.inputs.forEach(input => Inputs.set(input.name, setupListener(input)));
        access.outputs.forEach(output => Outputs.set(output.name, output));

        access.onstatechange = function(e) {
            let port = e.port;
            if (port.type === "input") {
                if (port.state === "connected") {
                    Inputs.set(port.name, setupListener(port));
                } else {
                    Inputs.delete(port.name);
                }
            } else {
                if (port.state === "disconnected") {
                    Outputs.set(port.name, port);
                } else {
                    Outputs.delete(port.name);
                }
            }
            let event = {
                type: e.type,
                port: e.port,
                timeStamp: e.timeStamp,
                target: e.target
            };
            MIDI_LISTENERS.dispatchEvent(event);
        };

        /**
         *
         * @param input {WebMidi.MIDIInput}
         * @return {WebMidi.MIDIInput}
         */
        function setupListener(input) {
            input.onmidimessage = (midiEvent => {
                let event = parseEvent(midiEvent);
                MIDI_LISTENERS.dispatchEvent(event);
            });

            return input;
        }

        let MIDI_CHANNEL_MODE_MESSAGES = {
            120: "allsoundoff",
            121: "resetallcontrollers",
            122: "localcontrol",
            123: "allnotesoff",
            124: "omnimodeoff",
            125: "omnimodeon",
            126: "monomodeon",
            127: "polymodeon"
        };

        function parseEvent(midiEvent) {
            let data = midiEvent.data;
            let event = {
                type: "midimessage"
            };

            // See https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message
            let msgType = data[0] & 0xF0;
            if (msgType !== 0xF0) {
                // A channel message
                event.channel = data[0] & 0x0F;

                switch (data[0] & 0xF0) {
                    case 0x80:
                        event.type = "noteoff";
                        event.number = data[1];
                        event.value = data[2] / 127;
                        break;

                    case 0x90:
                        event.type = "noteon";
                        event.number = data[1];
                        event.value = data[2] / 127;

                        // Velocity 0 should be considered as note off. Mostly legacy, but part of the standard
                        if (data[2] === 0) {
                            event.type = "noteoff";
                        }
                        break;

                    case 0xA0:
                        event.type = "keyaftertouch";
                        event.value = data[1] / 127;
                        break;

                    case 0xB0:
                        let ctrlNumber = data[1];
                        if (ctrlNumber < 120) {
                            event.type = "controlchange";
                            event.number = data[1];
                            event.value = data[2] / 127;
                        } else {
                            event.type = "channelmode";
                            event.number = data[1];
                            event.name = MIDI_CHANNEL_MODE_MESSAGES[event.number];
                            event.value = data[2];
                        }
                        break;

                    case 0xC0:
                        event.type = "programchange";
                        event.value = data[1];
                        break;

                    case 0xD0:
                        event.type = "channelaftertouch";
                        event.value = data[1] / 127;
                        break;

                    case 0xE0:
                        event.type = "pitchbend";
                        event.value = (((data[2] << 7) + data[1]) - 0x2000) / 0x2000;
                        break;

                    default:
                        event.type = "unknownchannelmessage";
                }
            } else {
                // System messages
                switch (data[0]) {
                    case 0xF0:
                        event.type = "sysex";
                        break;

                    case 0xF1:
                        event.type = "timecode";
                        event.number = data[1];
                        event.value = data[2];
                        break;

                    case 0xF2:
                        event.type = "songposition";
                        event.value = (data[2] << 7) + data[1];
                        break;

                    case 0xF3:
                        event.type = "songselect";
                        event.value = data[1];
                        break;

                    // F4 & F5: undefined (reserved)

                    case 0xF6:
                        event.type = "tuningrequest";
                        break;

                    case 0xF7:
                        event.type = "sysexend";
                        break;

                    case 0xF8:
                        event.type = "clock";
                        break;

                    // FA: undefined (reserved)

                    case 0xFA:
                        event.type = "start";
                        break;

                    case 0xFB:
                        event.type = "continue";
                        break;

                    case 0xFC:
                        event.type = "stop";
                        break;

                    // FD: undefined (reserved)

                    case 0xFE:
                        event.type = "activesensing";
                        break;

                    case 0xFF:
                        event.type = "reset";
                        break;

                    default:
                        event.type = "unknownsystemmessage";
                }
            }

            // Add these properties at the end so that "more interesting" properties parsed
            // above appear first in a console.log() call.
            event.timeStamp = midiEvent.timeStamp;
            event.target = midiEvent.target;
            event.data = midiEvent.data;

            return event;
        }
    });

class MidiListeners {
    constructor() {
        /** @type { Map<string, Set<function>> } */
        this.listenersByType = new Map();
    }

    addListener(eventType, listener) {
        /** @type { Set<function> } */
        let listeners = this.listenersByType.get(eventType);
        if (!listeners) {
            listeners = new Set();
            this.listenersByType.set(eventType, listeners);
        }

        listeners.add(listener);
    }

    removeListener(eventType, listener) {
        let listeners = this.listenersByType.get(eventType);
        if (listeners) {
            listeners.delete(listener);
        }
    }

    dispatchEvent(event) {
        if (Midi.log) console.log("MIDI event", event);
        this._dispatchEvent(event, event.type);
        this._dispatchEvent(event, 'all');
    }

    _dispatchEvent(event, eventType) {
        let listeners = this.listenersByType.get(eventType);
        if (listeners) {
            listeners.forEach(listener => listener(event));
        }
    }

    clear() {
        this.listenersByType.clear();
    }
}

const MIDI_LISTENERS = new MidiListeners();

//----------------------------------------------------------------------------------------------------------------------

class MidiBase {
    constructor(options) {
        this.options = options;
        this._targets = new Set();
        this._eventTypes = []; // defined in subclasses
        this._handler = (event) => {
            if (!this._discardEvent(event)) {
                this._handleMidiEvent(event);
            }
        };
    }

    _handleMidiEvent(event) {}

    _discardEvent(event) {
        return (this._targets.size === 0) ||
            !!(this.options.channel && (event.channel !== this.options.channel)) ||
            !!(this.options.port && (event.target.name !== this.options.port));
    }

    connect(target) {
        if (this._targets.has(target)) {
            return;
        }

        this._targets.add(target);
        if (this._targets.size === 1) {
            // We added our first target
            this._eventTypes.forEach(type =>
                MIDI_LISTENERS.addListener(type, this._handler)
            );
        }

        return this;
    }

    disconnect(target) {
        if (target) {
            this._targets.delete(target);
        } else {
            this._targets.clear();
        }

        if (this._targets.size === 0) {
            this._eventTypes.forEach(type =>
                MIDI_LISTENERS.removeListener(type, this._handler)
            );
        }
    }
}

class MidiNotes extends MidiBase {
    constructor(options) {
        options = options || {};
        options.detune = options.detune || 200;
        super(options);
        this._noteCount = 0;
        this._eventTypes = ["noteon", "noteoff", "pitchbend"];
    }

    /**
     * @param event {WebMidi.MIDIMessageEvent}
     * @private
     */
    _handleMidiEvent(event) {
        if (event.type === "noteon") {
            let freq = Tone.Midi(event.number);
            let velocity = this.options.velocity || event.value;
            this._noteCount++;

            this._targets.forEach(target => {
                if (this._noteCount > 1 && target.portamento > 0) {
                    target.setNote(freq);
                } else {
                    target.triggerAttack(freq, Tone.now(), velocity)
                }
            })

        } else if (event.type === "noteoff") {
            let freq = Tone.Midi(event.number);
            this._noteCount--;

            this._targets.forEach(target => {
                if (target.triggerRelease.length === 2) {
                    // PolySynth or DrumKit
                    target.triggerRelease(freq, Tone.now())
                } else {
                    if (this._noteCount === 0) {
                        // Only release if there are no active notes
                        target.triggerRelease(Tone.now())
                    }
                }
            })

        } else if (event.type === "pitchbend") {
            this._targets.forEach(target => {
                if (target.detune) {
                    target.detune.value = event.value * this.options.detune;
                }
            });
        }
    }
}

class MidiControl extends MidiBase {
    constructor(number, options) {
        options = options || {};
        super(options);

        this._bounds = new Map();
        this._number = number;
        this._eventTypes = ["controlchange"];
        this._lastValue = -1;
    }

    /**
     * @param param {AudioParam|function}
     * @param min {number}
     * @param max {number}
     */
    connect(param, min, max, scale) {
        this._bounds.set(param, {min: min || 0, max: max || 1.0, scale: scale || "lin"});
        return super.connect(param);
    }

    disconnect(param) {
        super.disconnect(param);
        if (param) {
            this._bounds.delete(param);
        } else {
            this._bounds.clear();
        }
    }

    _handleMidiEvent(event) {
        if (event.number === this._number && event.value !== this._lastValue) {
            this._lastValue = event.value;
            this._targets.forEach(param => {
                let {min, max, scale} = this._bounds.get(param);
                let value = event.value; // 0 to 1
                if (scale === "exp") {
                    let lmin = Math.log(min);
                    let lmax = Math.log(max);
                    value = Math.exp(value * (lmax - lmin) + lmin);
                } else {
                    value = value * (max - min) + min;
                }
                if (Tone.isDefined(param.value)) {
                    param.value = value;
                } else {
                    param(value); // assume it's a function
                }
            });
        }
    }
}

class MidiToggle extends MidiBase {
    constructor(number, options) {
        options = options || {};
        super(options);

        this._bounds = new Map();
        this._number = number;
        this._eventTypes = ["controlchange"];
    }

    connect(part) {
        return super.connect(part);
    }

    disconnect(part) {
        super.disconnect(part);
    }

    _handleMidiEvent(event) {
        if (event.number === this._number) {
            let method = event.value === 1 ? "start" : "stop";
            this._targets.forEach(param => param[method]());
        }
    }
}

const Midi = {
    Inputs: Inputs,
    Outputs: Outputs,
    Notes: MidiNotes,
    Control: MidiControl,
    ToggleControl: MidiToggle,
    dispatchEvent: MidiListeners.prototype.dispatchEvent.bind(MIDI_LISTENERS),
    addListener: MidiListeners.prototype.addListener.bind(MIDI_LISTENERS),
    log: false,
};

export default Midi;
