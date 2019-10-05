// autoexec
var context = Tone.context;
var master = Tone.Master;
if (!masterFader) {
    var masterFader = new Midi.Slider(19);
    masterFader.connect(master.volume, -50, 10);
}



















/*

    Drums

    Loading samples & playing sequences

*/


















// Route drums to a gain node (will be useful to reroute sound below)
var drumGain = new Tone.Gain().connect(master);
//
// Load drum samples
var kickSound = new Tone.Player("assets/drums/kick.wav").connect(drumGain);
var bassSound = new Tone.Player("assets/drums/bass.wav").connect(drumGain);
var snareSound = new Tone.Player("assets/drums/snare.wav").connect(drumGain);
var openhhSound = new Tone.Player("assets/drums/oh.wav").connect(drumGain);
var closehhSound = new Tone.Player("assets/drums/ch.wav").connect(drumGain);

// Play them!

kickSound.start();

bassSound.start();

snareSound.start();

openhhSound.start();

closehhSound.start();

















// Make that room bigger!

var reverb = new Tone.Reverb().toMaster();
reverb.decay = 1.5
reverb.generate()
//
reverb.wet.value = 0.2
//
drumGain.disconnect();
drumGain.connect(reverb);

// Add a knob to change the size of the room
let reverbDial = new Midi.Dial(1);
reverbDial.connect(reverb.wet, 0, 1)


kickSound.start();

bassSound.start();

snareSound.start();

openhhSound.start();

closehhSound.start();




















// My first sequencer

var sequence = new Tone.Sequence(
    (time, v) => {
        if (v === "x") kickSound.start(time);
    },
    ["x", "-", ["x", "x"], "-"],
    "4n"
);

// Start the sequence. Make sure transport is started.
Tone.Transport.start()
sequence.start()

sequence.stop()


























// XTone: my own tools on top of ToneJS
// BeatSequence is similar to the above, allowing live change to the pattern

var kick = new XTone.BeatSequence(kickSound);
kick.start()

// Try those one at a time.
kick.pattern = "x"
kick.pattern = "x-x-"
kick.pattern = "x-[xx]-"

kick.stop()
















// Sequence all the things
//
var bass = new XTone.BeatSequence(bassSound);
var snare = new XTone.BeatSequence(snareSound);
var openhh= new XTone.BeatSequence(openhhSound);
var closehh= new XTone.BeatSequence(closehhSound);

// Add buttons to start/stop sequences
// Beware: they all start stopped, so click on those buttons!
//
var toggle1 = new Midi.Toggle(21).connect(kick);
var toggle2 = new Midi.Toggle(22).connect(bass);
var toggle3 = new Midi.Toggle(23).connect(snare);
var toggle4 = new Midi.Toggle(24).connect(openhh);
var toggle5 = new Midi.Toggle(25).connect(closehh);


















// Now we can play!

kick.pattern = "x"
kick.pattern = "x-x-"
kick.pattern = "x-[xx]-"

bass.pattern = "x-"
bass.pattern = "[xx]-x-[xx]-x-"
bass.pattern = "[xx]-x-[xx]---"

snare.pattern = "-x-[xx]"
snare.pattern = "-x"
snare.pattern = "-x-[xx]-x"
snare.pattern = "-x-[xx][-x]"

openhh.pattern = "[-x][-x]-[xx]"

closehh.pattern = "[XX]-X-"


