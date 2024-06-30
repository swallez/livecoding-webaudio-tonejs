// autoexec
var context = XTone.AudioContext;
var master = XTone.MasterNode;















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

// An oscillator
var oscillator = context.createOscillator()
oscillator.connect(master);
oscillator.start();

// Master volume
master.gain.value = 0.5

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
































// Easier with a fader!
// 19 is the control change number on my Korg nanoKontrol. Adapt it to your device.
var masterFader = new Midi.MasterFader(19);

masterFader.connect(master.gain, 0, 1);

// Saturation: let's turn sine into square by pushing the volume up.
masterFader.disconnect();
masterFader.connect(master.gain, 0, 4);




















/*

    WebMIDI: https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess

    MIDI: Musical Digital Instrument Interface

    Defined in 1984 and still widely used!



    Low level API (byte arrays)... So I built a nice wrapper :-)

    With the help of NexusUI for visuals - https://nexus-js.github.io/ui/

*/
















// Show me some midi
Midi.Inputs

Midi.log(true);

// Turn knobs and press notes to see MIDI events in the console.

// Stop the flood!
Midi.log(false);

















// Let's play with the oscillator frequency

var freqDial = new Midi.Dial(1)

freqDial.connect(oscillator.frequency, 50, 1000, "exp")


















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

