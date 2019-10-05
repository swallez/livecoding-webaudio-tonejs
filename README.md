## Live coding music with WebAudio, WebMidi &amp; ToneJS

This is a musical live coding environment built for a talk at [DevFest Toulouse 2019](https://devfesttoulouse.fr/) and the source code used for the talk.

The goal of this talk is to walk the audience in 45 minutes through the concepts of WebAudio and ToneJS and go from a raw oscillator producing a sine wave to a complete song with drums, bass line, pad and lead melody and effects that can be tuned live with a MIDI controller.

Challenge accepted, it worked 🎶😊

### How to use it?

You can head to https://swallez.github.io/livecoding-webaudio-tonejs/ and start live-coding/playing!

To run locally, run `npm run build && npm run serve`: it builds to the `doc` directory and serves it on http://localhost:8080/

If you want to tweak the live-coding environment's code (not the music code, use the live-coding environment for that), run `npm serve-dev`: it starts the live-reloading Webpack server on http://localhost:8080/

### License

Apache Licence 2.0
