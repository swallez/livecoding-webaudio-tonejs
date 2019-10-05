// autoexec
var context = Tone.context;
var master = Tone.Master;
Tone.Transport.start()
if (!masterFader) {
    var masterFader = new Midi.Slider(19);
    masterFader.connect(master.volume, -50, 10);
    master.volume = -8;
}























// Let's experiment something new. Lots of presets at https://github.com/Tonejs/Presets

MonoSynth_BassGuitar = {
    "oscillator": {
        "type": "fmsquare5",
        "modulationType" : "triangle",
        "modulationIndex" : 2,
        "harmonicity" : 0.501
    },
    "filter": {
        "Q": 1,
        "type": "lowpass",
        "rolloff": -24
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0.6,
        "release": 2
    },
    "filterEnvelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0.8,
        "release": 1.5,
        "baseFrequency": 50,
        "octaves": 4.4
    }
};

// Create some effects to give depth to the sound
var feedbackDelay = new Tone.FeedbackDelay("16n", 0.2).toMaster();
feedbackDelay.wet.value = 0.2;
//
var chorus = new Tone.Chorus(4, 0.3, 0.5).connect(feedbackDelay);
//
var synth = new Tone.MonoSynth(MonoSynth_BassGuitar).connect(chorus);


synth.triggerAttackRelease("C4", "8n");

var kbd = new Midi.Notes();
kbd.connect(synth);


















// Scales: they're just a list of intervals

var scale = [0, 2, 4, 5, 7, 9, 11] // major scale: white notes starting at C

var scale = [0, 2, 3, 5, 7, 8, 10] // natural minor scale: white notes starting at A


// Play the scale
//
var loop = new Tone.Sequence(
    (time, note) => { synth.triggerAttackRelease(new Tone.Midi(60 + note), "8n", time) },
    scale.concat([12]),
    "8n"
).start();
loop.loop = false;























// Some chords are super popular: https://www.hooktheory.com/theorytab/common-chord-progressions
//
// and even have their Wikipedia page https://en.wikipedia.org/wiki/List_of_songs_containing_the_I%E2%80%93V%E2%80%93vi%E2%80%93IV_progression


// Chords are built by picking every other note in the scale.
// For more chords start are other notes in the scale.

function chord(chordNo, noteCount) {
    let result = [];
    for (let i = 0; i < noteCount*2; i += 2) {
        result.push(scale[(i + (chordNo - 1)) % scale.length])
    }
    return result;
}

// What do they look like?
console.log(scale)
console.log(chord(1, 3))
console.log(chord(2, 3))

// We need a polyphonic synth to play chords!
//
var compressor = new Tone.Compressor().connect(master);
var psynth = new Tone.PolySynth(6, Tone.MonoSynth, MonoSynth_BassGuitar).connect(compressor);

// Play a chord progression

var progression = new Tone.Sequence(
    (time, n) => {
        psynth.triggerAttackRelease(
            chord(n, 3).map(v => new Tone.Midi(60 + v)),
            "1n", time);
    },
    // [1, 2, 3, 4, 5, 6, 7],
    [1, 5, 6, 4], // Most popular
    // [1, 4, 5, 1],
    "1n"
);
progression.loop = false;
progression.start()





























// Arpeggio: chords, one note at a time

var arp = new Tone.Pattern(
    (time, note) => synth.triggerAttackRelease(new Tone.Midi(60 + 12 + note), "8n", time),
    chord(1, 4),
    "randomWalk"
);
arp.interval = "8n"   // Scheduling rate
arp.probability = 1 // Probability of playing a note

arp.start(XTone.atMeasure())

arp.start()

arp.stop()

// "randomWalk" can be also "up" "down" "upDown" "downUp" "alternateUp" "alternateDown" "random" "randomOnce"