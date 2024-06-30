import * as Tone from "tone";
import XTone from "./xtone";
import * as Nexus from "nexusui";
import * as CodeBuffers from "./code-buffers";
import * as Editor from "./editor";
import * as XMidi from './xmidi';
import * as Midi from "./midi";

(<any>window).Tone = Tone;
(<any>window).XTone = XTone;
(<any>window).Nexus = Nexus;

Nexus.context = (<any>Tone.getContext().rawContext)._nativeContext;

// Init editor
Editor.start();
CodeBuffers.start();
Midi.start();
XMidi.start();

//-------------------------------------------------------------------------------------------------
// Transport

let play = new Nexus.TextButton("#play-pause", {
    'size': [50,50],
    'state': false,
    'text': '▶',
    'alternateText': '‖',
});

play.on("change", (state) => {
    if (state) {
        Tone.Transport.start();
    } else {
        Tone.Transport.pause();
    }
});

function updatePlayState(state) {
    if (play.state !== state) {
        play.state = state;
    }
}

Tone.Transport.on("start", () => updatePlayState(true));
Tone.Transport.on("stop", () => updatePlayState(false));
Tone.Transport.on("pause", () => updatePlayState(false));

updatePlayState(Tone.Transport.state === "started");

//-------------------------------------------------------------------------------------------------
// Metronome

let metroSounds = new Tone.Players({
    beat: "/assets/metronome/synth-beat.wav",
    measure: "/assets/metronome/synth-measure.wav"
}).toDestination();

let metro = document.getElementById("metronome")!;
let metroText = metro.querySelector("div")!;
metroText.textContent = '●○ ';

Tone.Transport.timeSignature

let playTicks = false;
metro.onclick = () => { playTicks = ! playTicks };

let odd = true;
Tone.Transport.scheduleRepeat((time) => {
    odd = !odd;

    let ttime = new Tone.TransportTimeClass(Tone.getContext(), Tone.Transport.seconds);

    // Extracted from Tone.Time.prototype.toBarsBeatsSixteenths
    let attime = <any>ttime; // hack to call protected methods from TS
    let quarterTime = attime._beatsToUnits(1);
    let quarters = ttime.valueOf() / quarterTime;
    let measures = Math.floor(quarters / attime._getTimeSignature());
    quarters = Math.floor(quarters) % attime._getTimeSignature();

    if (playTicks) {
        metroSounds.player(quarters === 0 ? "measure" : "beat").start(time);
    }

    Tone.getDraw().schedule(() => {
        metroText.textContent = odd ? '○● ' : '●○ ';
        //metroText.textContent = odd ? '◯⬤' : '⬤◯';
        if (quarters === 0) {
            metro.classList.remove("nx-inactive");
            metro.classList.add("nx-active");
            window.requestAnimationFrame(() => {
                metro.classList.remove("nx-active");
                metro.classList.add("nx-inactive");
            })
        }
    }, time);
}, "4n", "@1m");

// Exposed to allow changing metronome attributes (e.g. volume)
XTone.Metronome = {
    start: () => playTicks = true,
    stop: () => playTicks = false,
};

//-------------------------------------------------------------------------------------------------
// Meter, scope, spectrogram

let osc = new Nexus.Oscilloscope("#scope", {
    'size': [100,50],
});
osc.connect(Tone.Master);

let spectr = new Nexus.Spectrogram("#spectr", {
    'size': [100,50],
});
spectr.connect(Tone.Master);

//-------------------------------------------------------------------------------------------------
// Wire the transport and metronome buttons (this is my Korg nanoKontrol's config)

new Midi.ToggleControl(42).connect({
    start: () => Tone.getTransport().start(),
    stop: () => Tone.getTransport().pause()
});

new Midi.ToggleControl(46).connect(XTone.Metronome);

new Midi.ToggleControl(45).connect({
    start: () => Tone.getDestination().mute = true,
    stop: () => Tone.getDestination().mute = false,
});
