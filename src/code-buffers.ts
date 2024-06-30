/**
 * Handle code buffers: load, save, restore, download as zip, etc.
 */

import Editor from "./editor";
import { saveAs } from "file-saver";
import JSZip from "jszip";

export function start() {
}

/**
 * Built-in code buffers for the live demo talk.
 * Users can also add local buffers.
 */
let serverSources = [
    "Welcome",
    "Make some noise!",
    "WebAudio - Play notes the hard way",
    "ToneJS - Play notes the easy way",
    "Drums",
    "Chords & Arpeggios",
    "Putting it all together",
];

/** @type {HTMLSelectElement} */
// @ts-ignore
let bufferSelect: HTMLSelectElement = document.getElementById("buffer-select");
// @ts-ignore
let deleteOption: HTMLOptionElement = bufferSelect?.querySelector("option[value='action:delete']");

let allBuffers = listBuffers();

const CURRENT_BUFFER_KEY = "buffer:current";
let currentBuffer = window.localStorage.getItem(CURRENT_BUFFER_KEY) || "";
if (!allBuffers.includes(currentBuffer)) {
    currentBuffer = allBuffers[0];
}

fillSelect();
updateDeleteOption();
loadBuffer(currentBuffer, true);

/**
 * List all existing buffers. Includes server-side buffers and those present in the local storage
 * @return {Array<string>} sorted list of buffers
 */
function listBuffers() {
    let localSources: Set<string> = new Set();
    for (let i = 0; i < window.localStorage.length; i++) {
        for (let localStorageKey in window.localStorage) {

        }
        let key = window.localStorage.key(i) ?? "";
        if (key.startsWith("code:")) {
            localSources.add(key.substring("code:".length));
        }
    }

    serverSources.forEach(name => localSources.delete(name));

    return serverSources.concat(Array.from(localSources).sort());
}

/**
 * Fill the select element with a list of buffer names
 */
function fillSelect() {
    let namesList = Array.from(allBuffers).reverse();

    // Remove all buffer names and keep actions
    let choices = bufferSelect.options;
    while (!choices.item(0)?.value.startsWith("action:")) {
        choices.remove(0)
    }

    namesList.forEach(name => bufferSelect.insertBefore(
            new Option(name, name, false),
            bufferSelect.firstChild
    ));

    bufferSelect.value = currentBuffer;
}

function updateDeleteOption() {
    deleteOption.innerText = serverSources.includes(currentBuffer) ? "Revert..." : "Delete...";
}

function updateBuffersAndSelect() {
    allBuffers = listBuffers();
    fillSelect();
    updateDeleteOption();
}

let actions = {
    "action:new": newBuffer,
    "action:delete": deleteBuffer,
    "action:download": download,
};

bufferSelect.onchange = function(evt) {
    // @ts-ignore
    let value = evt.target.value;

    if (value.startsWith("action:")) {
        actions[value] && actions[value]();
        updateBuffersAndSelect();
    } else {
        loadBuffer(value);
        updateDeleteOption();
    }
};

function newBuffer() {
    let name = window.prompt("Name this little puppy!");
    if (name) {
        loadBuffer(name);
    }
}

function deleteBuffer() {
    if (serverSources.includes(currentBuffer)) {
        if (window.confirm("Revert to server version?")) {
            window.localStorage.removeItem("code:" + currentBuffer);
            loadBuffer(currentBuffer, true);
        }
    } else {
        if (window.confirm('Really want "' + currentBuffer + '" to go away?')) {
            window.localStorage.removeItem("code:" + currentBuffer);
            allBuffers = allBuffers.filter(name => name !== currentBuffer);
            loadBuffer(allBuffers[0]);
        }
    }
}

/**
 * Build a zip file with all code buffers. Meant to easily update the
 * 'src-livecoding' directory.
 */
function download() {
    let zip = new JSZip();
    let folder = zip.folder("src-livecoding");
    allBuffers.forEach(name => {
        let code = window.localStorage.getItem("code:" + name);
        if (code) {
            // @ts-ignore
            folder.file(name + ".js", code);
        }
    });
    zip.generateAsync({type:"blob"})
        .then(function (blob) {
            saveAs(blob, "src-livecoding.zip");
        });
}

function checkResponseOk(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function loadBuffer(name: string, reload?: boolean) {
    bufferSelect.value = name;
    if (currentBuffer === name && !reload) {
        return;
    }

    currentBuffer = name;
    window.localStorage.setItem(CURRENT_BUFFER_KEY, name);

    let storageName = "code:" + name;
    let code = window.localStorage.getItem(storageName);

    if (code) {
        Editor.edit(storageName, code);
    } else {
        if (serverSources.includes(name)) {
            fetch("src-livecoding/" + name + ".js")
                .then(checkResponseOk)
                .then(response => response.text())
                .then(text => {
                    Editor.edit(storageName, text);
                })
                .catch(err => {
                    console.log(`Error fetching "${name}"`, err);
                    Editor.edit(storageName, "");
                })
        } else {
            window.localStorage.setItem("code:" + name, "");
            Editor.edit(storageName, "");
        }
    }
}
