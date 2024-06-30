// autoexec
var context = Tone.context;
var master = Tone.Master;
Tone.Transport.start();
if (!masterFader) {
    var masterFader = new Midi.Slider(19);
    masterFader.connect(master.volume, -50, 10);
}


















/*

    Building next summer's hit in 5 minutes?

    Challenge accepted!

*/

















// ---- Let's build our mixing console!

var drumGain = new Tone.Gain().connect(master);
//
var bassGain = new Tone.Gain().connect(master);
//
var padGain = new Tone.Gain().connect(master);
//
var melodyGain = new Tone.Gain().connect(master);

// Wire it!
//
let faderNo = 11;
//
[drumGain, bassGain, padGain, melodyGain].forEach(gain => {
    let fader = new Midi.Slider(faderNo++);
    fader.connect(gain.gain, 0, 1);
});














// ----- Drums

// Make that room bigger!
//
var reverb = new Tone.Reverb().connect(drumGain);
reverb.decay = 1.5
reverb.generate();
reverb.wet.value = 0.1
//
var drumOutput = reverb;

// Load samples
//
var kickSound = new Tone.Player("assets/drums/kick.wav").connect(drumOutput);
var bassSound = new Tone.Player("assets/drums/bass.wav").connect(drumOutput);
var snareSound = new Tone.Player("assets/drums/snare.wav").connect(drumOutput);
var openhhSound = new Tone.Player("assets/drums/oh.wav").connect(drumOutput);
var closehhSound = new Tone.Player("assets/drums/ch.wav").connect(drumOutput);
//
// and sequence all the things
//
var kick = new XTone.BeatSequence(kickSound);
var bass = new XTone.BeatSequence(bassSound);
var snare = new XTone.BeatSequence(snareSound);
var openhh = new XTone.BeatSequence(openhhSound);
var closehh = new XTone.BeatSequence(closehhSound);

// Add buttons to start/stop sequences
// (remember to start them)
//
var toggle1 = new Midi.Toggle(21).connect(kick);
var toggle2 = new Midi.Toggle(22).connect(bass);
var toggle3 = new Midi.Toggle(23).connect(snare);
var toggle4 = new Midi.Toggle(24).connect(openhh);
var toggle5 = new Midi.Toggle(25).connect(closehh);

// Check
kickSound.start()

// Let's rock!

kick.pattern = "x"
kick.pattern = "x-x-"
kick.pattern = "x-[xx]-"
kick.pattern = "x"

bass.pattern = "x-"
bass.pattern = "[xx]-x-[xx]-x-"
bass.pattern = "[xx]-x-[xx]---"

snare.pattern = "-x-[xx]"
snare.pattern = "-x"
snare.pattern = "-x-[xx]-x"
snare.pattern = "-x-[xx][-x]"

openhh.pattern = "[-x][-x]-[xx]"

closehh.pattern = "[XX]-X-"






















// ----- Song structure: chords

var scale = [0, 2, 4, 5, 7, 9, 11] // major scale
//
function chord(chordNo, noteCount) {
    let result = [];
    for (let i = 0; i < noteCount * 2; i += 2) {
        result.push(scale[(i + (chordNo - 1)) % scale.length])
    }
    return result;
}
//
// Most popular chord progression
//
var chords = [1, 5, 6, 4]















// ----- Bass: play chords

MonoSynth_BassGuitar = {
    "oscillator": { "type": "fmsquare5", "modulationType": "triangle", "modulationIndex": 2, "harmonicity": 0.501 },
    "filter": { "Q": 1, "type": "lowpass", "rolloff": -24 },
    "envelope": { "attack": 0.01, "decay": 0.1, "sustain": 0.6, "release": 2 },
    "filterEnvelope": { "attack": 0.01, "decay": 0.1, "sustain": 0.8, "release": 1.5, "baseFrequency": 50, "octaves": 4.4 }
};
//
var bassCompressor = new Tone.Compressor().connect(bassGain);
//
var bassDelay = new Tone.FeedbackDelay("16n", 0.2).connect(bassCompressor);
bassDelay.wet.value = 0.2;
//
var bassChorus = new Tone.Chorus(4, 0.3, 0.5).connect(bassDelay);
//
var bassGuitar = new Tone.PolySynth(Tone.MonoSynth, MonoSynth_BassGuitar).connect(bassChorus);


// Check & tune
//
bassGuitar.triggerAttackRelease(["C4", "E4"], "2n");


// Chord progression
//
var bassProgression = new Tone.Sequence(
    (time, chordNo) => {
        let notes = chord(chordNo, 3)
            .map(note => new Tone.Midi(60 + note));
        //
        bassGuitar.triggerAttackRelease(notes, "1m", time);
    },
    chords,
    "1m"
);

// Starts at the next measure
bassProgression.start();

// Stop it for now
bassProgression.stop()












// ----- Pad: add some texture

// Compress & filter
var padCompressor = new Tone.Compressor().connect(padGain);
//
var padFilter = new Tone.Filter(1000, "lowpass").connect(padCompressor);
//
// Add dials to play with the filter
var filterFreqDial = new Midi.Dial(1);
var filterQDial = new Midi.Dial(2);
//
filterFreqDial.connect(padFilter.frequency, 100, 2000, "exp")
filterQDial.connect(padFilter.Q, 0, 100);

var padOptions = {
    "oscillator" : {
        type : "sawtooth"
    },
	"envelope" : {
		"attack" : 0.1,
		"decay" : 0,
		"sustain" : 1,
		"release" : 0.2
	}   
}
//
var pad = new Tone.Synth(padOptions).connect(padFilter);

// Check
pad.triggerAttackRelease("C2", "2n")


// Pad progression: play the first note of the chord
//
var padProgression = new Tone.Sequence(
    (time, chordNo) => {
        let note = chord(chordNo, 1)
            .map(note => new Tone.Midi(60 + note - 24))[0];
        //
        pad.triggerAttackRelease(note, "1m", time);
    },
    chords,
    "1m"
);

// Remember to play with filter knobs!
padProgression.start()

padProgression.stop()

// Start both bass & pad.
bassProgression.start()
padProgression.start()

// Stop them for now
bassProgression.stop()
padProgression.stop()











// ----- Melody: play random arpeggios with chord notes

var lead = new Tone.Synth({
    "oscillator": {
        "partials": [ 1, 0, 2, 0, 3 ]
    },
    "envelope": {
        "attack": 0.001,
        "decay": 1.2,
        "sustain": 0,
        "release": 1.2
    }
}).connect(melodyGain);

// Check
lead.triggerAttackRelease("C4", "1m")

// Creates and starts an arpeggio to be played in a measure
//
function playArp(notes, time) {
    let arp = new Tone.Pattern(
        (time, note) => lead.triggerAttackRelease(new Tone.Midi(60 + 12 + note), "8n", time),
        notes, "randomWalk"
    );
    arp.interval = "8n"
    arp.probability = 0.6 // Don't play all notes
    arp.iterations = 8;
    arp.start();
}

//Check
playArp(chord(1, 4))

// Melody: at every measure, play an arpegio with that measure's chord
var leadProgression = new Tone.Sequence(
    (time, chordNo) => {
        playArp(chord(chordNo, 3), time);
    },
    chords,
    "1m"
);

leadProgression.start()

leadProgression.stop()

// Start everything. Remember to play with filter knobs!
bassProgression.start()
padProgression.start()
leadProgression.start()


// Change drums, teak sliders and knobs... Enjoy!

kick.pattern = ""
kick.pattern = "x"
kick.pattern = "-x"
kick.pattern = "x-x-"
kick.pattern = "x-[xx]-"
kick.pattern = "-x-[xx]"

bass.pattern = ""
bass.pattern = "x"
bass.pattern = "x-"
bass.pattern = "[xx]-x-[xx]-x-"
bass.pattern = "[xx]-x-[xx]---"

snare.pattern = ""
snare.pattern = "-x-[xx]"
snare.pattern = "-x"
snare.pattern = "-x-[xx]-x"
snare.pattern = "-x-[xx][-x]"

openhh.pattern = ""
openhh.pattern = "[-x][-x]-[xx]"

