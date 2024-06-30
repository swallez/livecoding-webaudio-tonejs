// autoexec
var context = XTone.AudioContext;
var master = XTone.MasterNode;
if (!masterFader) {
    var masterFader = new Midi.MasterFader(19);
    masterFader.connect(master.gain, 0, 1);
}


















// Let's build a synthesizer!





















// Midi note 69 is 440 Hz, an octave multiplies freq by 2 and has 12 semitones
function frequencyFromNoteNumber(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
}
//
// Where the sound will go
var synthOutput = master;

// Track notes currently playing, so that we can stop them
var runningNotes = {};

var synth = {};
//
synth.triggerAttack = function (note) {
    if (!runningNotes[note]) {
        let osc = context.createOscillator(context);
        osc.type = "sawtooth";
        osc.connect(synthOutput);
        //
        osc.frequency.value = frequencyFromNoteNumber(note);
        osc.start();
        //
        runningNotes[note] = osc;
    }
}
//
synth.triggerRelease = function (note) {
    if (runningNotes[note]) {
        let osc = runningNotes[note];
        osc.stop();
        delete runningNotes[note];
    }
}


// Play a C4:
synth.triggerAttack(60);

synth.triggerRelease(60);

// Play with a MIDI keyboard
Midi.addListener('noteon', evt => synth.triggerAttack(evt.number))
Midi.addListener('noteoff', evt => synth.triggerRelease(evt.number))















// Let's add an envelope to smooth things up

synth.triggerAttack = function (note) {
    if (!runningNotes[note]) {
        //
        let envelope = context.createGain();
        envelope.connect(synthOutput);
        //
        let osc = context.createOscillator();
        osc.type = "sawtooth";
        osc.connect(envelope);
        //
        osc.frequency.value = frequencyFromNoteNumber(note);
        //
        envelope.gain.value = 0;
        envelope.gain.linearRampToValueAtTime(1.0, context.currentTime + 0.2)
        osc.start();
        //
        runningNotes[note] = { osc: osc, envelope: envelope };
    }
}
//
synth.triggerRelease = function (note) {
    if (runningNotes[note]) {
        let { osc, envelope } = runningNotes[note];
        envelope.gain.linearRampToValueAtTime(0.0, context.currentTime + 0.5);
        delete runningNotes[note];
    }
}

// Play a C4:
synth.triggerAttack(60);

synth.triggerRelease(60);
























// My first chord sequencer!

var chords = [
    [60, 64 ,67],
    [64, 67, 71],
    [62, 65, 69],
    [65, 67, 71],
];
var duration = 2000;

function playChords() {
    chords.forEach((chord, i) => {
        window.setTimeout(
            () => chord.forEach(note => synth.triggerAttack(note - 12)),
            (i) * duration
        );
        window.setTimeout(
            () => chord.forEach(note => synth.triggerRelease(note - 12)),
            (i+1) * duration - 200
        );
    })
};

playChords();
var loop = window.setInterval(playChords, chords.length * duration);

// Stop
window.clearInterval(loop);




















// Add a filter

//var filter = new BiquadFilterNode(context);
var filter = context.createBiquadFilter();
filter.connect(master);
synthOutput = filter;
//
filter.frequency.value = 1000
filter.Q.value = 1;
filter.type = "lowpass";

var dial1 = new Midi.Dial(1);
var dial2 = new Midi.Dial(2);

dial1.connect(filter.frequency, 100, 1000, "exp")
dial2.connect(filter.Q, 0, 100);

// Try again
playChords();
var loop = window.setInterval(playChords, chords.length * duration);

// Stop
window.clearInterval(loop);























// Avoid distortion caused by clipping
//
var compressor = context.createDynamicsCompressor(context);
compressor.connect(master);
//
filter.disconnect();
filter.connect(compressor);
//
synthOutput = filter;



playChords();
var loop = window.setInterval(playChords, chords.length * duration);

// Stop
window.clearInterval(loop);







