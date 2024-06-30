// autoexec
var context = Tone.context;
var master = Tone.Master;
if (!masterFader) {
    var masterFader = new Midi.Slider(19);
    masterFader.connect(master.volume, -50, 10); // Volume in dB
}



















/*

    Let's build the same synthesizer in a simpler way!
    

    ToneJS: https://tonejs.github.io/ - the JQuery of WebAudio

    - higher level instruments with a collection of presets
    - useful filters: reverb, distorsion, wah-wah...
    - transport: powerful scheduler

*/

























// Neat: we don't have to program our envelope ourselves!
var options = {
	"envelope" : {
		"attack" : 0.1,  // Time to reach full volume
		"decay" : 0,     // Time to reach sustain value
		"sustain" : 1,   //
		"release" : 0.2, // Time to go to silence
	}   
}
//
var synth = new Tone.Synth(options).connect(master);

// No more frequencies!
synth.triggerAttack("A4");

synth.triggerRelease();

// Durations as beat-relative values
synth.triggerAttackRelease("A4", "2n");
























// Fun with conversions (check console)

Tone.Frequency("A4").toFrequency();

Tone.Frequency("A4").toMidi();

Tone.Midi(69).toFrequency();

Tone.Midi(69).toNote();




















// Connect the keyboard

var keyboard = new Midi.Notes({velocity: 1});

keyboard.connect(synth);
























// This is a monophonic synth. Let's add portamento so that
// frequency glides from note to note

synth.portamento = 0.1;
























// Slide the glide, because why not?

var portaSlider = new Midi.Slider(11);
portaSlider.connect((v) => synth.portamento = v, 0, 0.5)






















// A polyphonic synth


// Put a compressor in front of it to keep volume under control as we play
// many notes at the same time and avoid saturation.
var compressor = new Tone.Compressor();
compressor.connect(master);

// Polyphonic synth. Takes care of creating synths and tracking notes
var psynth = new Tone.PolySynth(Tone.Synth, options).connect(compressor);

// Accepts an array of notes
psynth.triggerAttackRelease(["C4", "E4", "G4"], "2n")

// Let's play
keyboard.disconnect();
keyboard.connect(psynth)
















































// Let's build a chord progression sequencer!

var chords = [
    [60, 64 ,67],
    [64, 67, 71],
    [62, 65, 69],
    [65, 67, 71],
];

var transpose = -12;

// Play the first chord
psynth.triggerAttackRelease(chords[0].map(n => new Tone.Midi(n + transpose)), "2n")


var i = 0;
Tone.Transport.scheduleRepeat(
    (time) => {
        psynth.triggerAttackRelease(chords[i].map(n => new Tone.Midi(n + transpose)), "2n", time)
        i = (i+1) % chords.length;
    }, "2n"
)

Tone.Transport.start()

// Slow down! (we're at 120 bpm)
Tone.Transport.bpm.value = 80

// Stop it
Tone.Transport.cancel()
























// Experiment with speed
var tempoSlider = new Midi.Slider(12)

tempoSlider.connect(Tone.Transport.bpm, 50, 300)
tempoSlider.connect(console.log, 50, 300)





















var filter = new Tone.Filter(1000, "lowpass").connect(compressor);
psynth.disconnect();
psynth.connect(filter);

var dial1 = new Midi.Dial(1);
var dial2 = new Midi.Dial(2);
dial1.connect(filter.frequency, 100, 2000, "exp")
dial2.connect(filter.Q, 0, 100);

// kthxby
Tone.Transport.cancel()

