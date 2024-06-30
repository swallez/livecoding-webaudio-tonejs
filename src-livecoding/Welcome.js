/*

How to use this tool

To evaluate:
- the code block (code between empty lines) around the cursor position, press cmd-enter (Mac) or ctrl-enter (Windows/Linux)
- the current line, presse cmd-option-enter (Mac) or ctrl-alt-enter (Windows/Linux)

Top-level `var` statements in the code evaluated will be attached to the global `window` object
and can be referenced across code block evaluations.

The play/pause button at the top-right acts on the ToneJS transport. Click on the metronome to hear it!

Switching to a different code buffer (you're currently in the "Make some noise" buffer) keeps the current context.
It's sometimes (often) useful to clear it. Just reload the page for that.

Code modifications are automatically saved in the browser's local storage, and you can download everything
as a zip file for archival by selecting "Download..." in the buffer drop down.

Code: https://github.com/swallez/livecoding-webaudio-tonejs

Companion slides: https://docs.google.com/presentation/d/e/2PACX-1vRhSRpYapZhyfdgiJKx3gYOklNG11OKqHzGWItVd8RAdAHZzpEea1gWq88ZLPP09acAebXPuMcxe54D/pub


Now go to the next code buffer and start evaluating blocks and tweaking the code.
This editor is the one from VS-Code, so you should feel at home if you use it.

Don't be afraid to experiment and break things: just reload the page to clear the current mess,
and select "Revert" in the code buffer drop down to go back to its original version.

Browser compatibility: sound works on Chrome and Firefox. Midi controls only work on Chrome
which is the only browser currently to support WebMIDI.

*/
