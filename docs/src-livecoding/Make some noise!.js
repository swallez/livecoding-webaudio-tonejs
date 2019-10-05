// How to use this tool
//
// To evaluate:
// - the code block (code between empty lines) around the cursor position, press cmd-enter (Mac) or ctrl-enter (Windows/Linux)
// - the current line, presse cmd-alt-enter (Mac) or ctrl-alt-enter (Windows/Linux)
//
// Top-level `var` statements in the code evaluated will be attached to the global `window` object
// and can be referenced across code block evaluations.
//
// The play/pause button at the top-right acts on the ToneJS transport. Click on the metronome to hear it!
//
// Switching to a different code buffer (you're currently in the "Make some noise" buffer) keeps the current context.
// It's sometimes (often) useful to clear it. Just reload the page for that.
//
// Code modifications are automatically saved in the browser's local storage, and you can download everything
// as a zip file for archival by selecting "Download..." in the buffer drop down.
//
// Code: https://github.com/swallez/livecoding-webaudio-tonejs
//
// Companion slides: https://docs.google.com/presentation/d/e/2PACX-1vRhSRpYapZhyfdgiJKx3gYOklNG11OKqHzGWItVd8RAdAHZzpEea1gWq88ZLPP09acAebXPuMcxe54D/pub
//
//
// Now scroll down and start evaluating blocks and tweaking the code, and then move to other code buffers.
// This editor is the one from VS-Code, so you should feel at home if you use it.
//
// Don't be afraid to experiment and break things: just reload the page to clear the current mess,
// and select "Revert" in the code buffer drop down to go back to its original version.
//
// Browser compatibility: sound works on Chrome and Firefox. Midi controls only work on Chrome
// which is the only browser currently to support WebMIDI.














/*


    WebAudio: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

    Base principles: build a graph of audio nodes:
    - sources: oscillators, sound files, wave tables
    - transformations: filters, gain, reverb, compressor, chorus...
    - destinations: speakers, files...


*/
















// Create audio context and master gain
var context = new AudioContext();
var master = context.createGain();
master.connect(context.destination);
//
//
// The above is what you'd normally do. But let's override it to wire the rest of the code to the
// builtin elements that allow having nice visuals on the top right of this live coding environment.
var context = Tone.context.rawContext;
var master = Tone.Master.input;


// An oscillator
var oscillator = context.createOscillator()
oscillator.connect(master);
oscillator.start();

// What's playing now? Result is displayed in the developer tool's console.
oscillator.frequency.value

oscillator.type

// Octaves: multiply/divide by 2
// Evaluate one line at a time with cmd/ctrl+alt+enter.
//
oscillator.frequency.value = 1760;
oscillator.frequency.value = 880;
oscillator.frequency.value = 440;
oscillator.frequency.value = 220;
oscillator.frequency.value = 110;
oscillator.frequency.value = 55;

// Barely audible
oscillator.frequency.value = 22.5;































// Master volume
master.gain.value = 0.5

// Easier with a fader!
// 19 is the control change number on my Korg nanoKontrol. Adapt it to your device.
var masterFader = new Midi.Slider(19);
masterFader.connect(master.gain, 0, 1);

// Saturation: let's turn sine into square by pushing the volume up.
masterFader.connect(master.gain, 0, 4);






















/*

    WebMIDI: https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess - Chrome only for now :-/

    MIDI: Musical Digital Instrument Interface

    Defined in 1984 and still widely used!



    Low level API (byte arrays)... So I built a nice wrapper :-)

    With the help of NexusUI for visuals - https://nexus-js.github.io/ui/

*/
















// Show me some midi
Midi.Inputs
Midi.log = true;

// Turn knobs and press notes to see MIDI events in the console.

// Stop the flood!
Midi.log = false;

















// Let's play with the oscillator frequency

var freqDial = new Midi.Dial(1)

freqDial.connect(oscillator.frequency, 50, 500, "exp")

freqDial.connect(console.log, 50, 500, "exp")


















// Waveforms
oscillator.type = "sine";
oscillator.type = "triangle";
oscillator.type = "square";
oscillator.type = "sawtooth";




























// Interferences
var osc2 = context.createOscillator();
osc2.connect(master);
osc2.frequency.value = oscillator.frequency.value;
oscillator.type = "sawtooth"
osc2.type = "sawtooth"
osc2.start()

// Let it follow our first oscillator
freqDial.connect(osc2.frequency, 50, 500, "exp")

var detuneDial = new Midi.Dial(2);

detuneDial.connect(osc2.detune, -100, 100)


// Ok, enough
oscillator.stop();
osc2.stop();

