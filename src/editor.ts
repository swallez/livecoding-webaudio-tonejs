import * as monaco from "monaco-editor";
import _ from "lodash";

import { renderMarkdown} from "monaco-editor/esm/vs/base/browser/markdownRenderer"
// const htmlResult = renderMarkdown({
//     value: samplemarkdownData
// }).innerHTML;

export function start() {

}

let storageName = "code:Default";

["Tone.d.ts", "WebMIDI.d.ts"].forEach((name) => {
    fetch("assets/" + name).then(response => response.text().then((text) => {
        monaco.languages.typescript.javascriptDefaults.addExtraLib(text, response.url);
    }));
});

let editorElt = document.getElementById("editor")!;

let editor = monaco.editor.create(editorElt, {
    value: "",
    language: "javascript",
    minimap: { enabled: false},
    automaticLayout: true,
});

// // Relayout editor when window is resized
// window.onresize = _.throttle((event) => {
//     editor.layout()
// }, 250);

(<any>window).editor = editor;
(<any>window).monaco = monaco;


// I'm an IntelliJ user and want to use my muscle memory during the presentation rather than struggle with
// VS-Code key bindings. If you're like me, just eval this and reload the editor:
//     `window.localStorage.setItem("use-intellij-bindings", "true")`
//
if (localStorage.getItem("use-intellij-bindings")) {
    // Custom (IntelliJ-like) custom bindings. Actions are visible in editor._actions (and pasted at the end of this file)
    monaco.editor.addKeybindingRules([
        {
            command: "editor.action.copyLinesDownAction",
            keybinding: monaco.KeyCode.KeyD + monaco.KeyMod.CtrlCmd,
        },
        {
            command: "editor.action.deleteLines",
            keybinding: monaco.KeyCode.Backspace + monaco.KeyMod.CtrlCmd
        },
        {
            command: "editor.action.commentLine",
            keybinding: monaco.KeyCode.KeyC + monaco.KeyMod.CtrlCmd + monaco.KeyMod.Shift
        },
        {
            command: "editor.action.showHover",
            keybinding: monaco.KeyCode.F1
        },
        {
            command: "editor.action.quickCommand",
            keybinding: monaco.KeyCode.KeyP + monaco.KeyMod.CtrlCmd
        }
    ]);
}

// Auto save editor content every second
editor.onDidChangeModelContent(_.throttle(() => {
    window.localStorage.setItem(storageName, editor.getValue())
}, 1000, {leading: false}));

function getBlockRange(editor, selectionStartLine, selectionEndLine) {
    let emptyLine = /^\s*$/;

    let model = editor.getModel();

    let startLine = selectionStartLine;
    let endLine = selectionEndLine;

    while (startLine >= 1 && !emptyLine.test(model.getLineContent(startLine))) {
        startLine--;
    }
    // Move to beginning of actual content
    if (startLine !== selectionStartLine) startLine++;

    let lineCount = model.getLineCount();
    while (endLine <= lineCount && !emptyLine.test(model.getLineContent(endLine))) {
        endLine++;
    }
    if (endLine !== selectionEndLine) endLine--;

    return new monaco.Range(startLine, 1, endLine, model.getLineMaxColumn(endLine));
}

// Run block on cmd/ctrl+enter
editor.addCommand(monaco.KeyCode.Enter + monaco.KeyMod.CtrlCmd, function() {
    let selection = editor.getSelection();
    if (selection) {
        let range = getBlockRange(editor, selection.startLineNumber, selection.endLineNumber);
        evalCode(editor, range);
    }
});

// Run selected lines on cmd/ctrl+enter
editor.addCommand(monaco.KeyCode.Enter + monaco.KeyMod.CtrlCmd + monaco.KeyMod.Alt, function() {

    let selection = editor.getSelection();
    let model = editor.getModel()!;

    if (selection) {
        let range = new monaco.Range(
            selection.startLineNumber, 1,
            selection.endLineNumber, model.getLineMaxColumn(selection.endLineNumber)
        );

        evalCode(editor, range);
    }
});


let decorations = [];
let evalBlocks = [];
function evalCode(editor, range) {
    let code = editor.getModel().getValueInRange(range);

    let success = true;
    try {
        console.log(window.eval(code));
    } catch (e) {
        success = false;
        console.log("Error evaluating...", e);
    }

    // Flash selection
    decorations = editor.deltaDecorations(decorations, [{
        range: range,
        options: {isWholeLine: true, className: success ? 'code-eval' : 'code-eval-error'}
    }]);

    window.setTimeout(
        () => {decorations = editor.deltaDecorations(decorations, [])},
        250
    );

    if (success) {
        evalBlocks = editor.deltaDecorations([], [{
            range, options: {
                linesDecorationsClassName: "code-eval-success"
            } 
        }]);
    }
    else {
        editor.deltaDecorations(evalBlocks, []);
    }
}

function edit(name, code) {
    storageName = name;
    editor.setValue(code);
    // Auto exec header code 1 sec after loading
    if (code.startsWith('// autoexec')) {
        window.setTimeout(() => {
            evalCode(editor, getBlockRange(editor, 1, 1));
        }, 1000);
    }
}

const Editor = {
    edit: edit,
    saveTo: undefined
};

export default Editor;


/*

All Monaco editor actions:

actions.find
actions.findWithSelection
cursorUndo
deleteAllLeft
deleteAllRight
editor.action.addCommentLine
editor.action.addCursorsToBottom
editor.action.addCursorsToTop
editor.action.addSelectionToNextFindMatch
editor.action.addSelectionToPreviousFindMatch
editor.action.autoFix
editor.action.blockComment
editor.action.changeAll
editor.action.clipboardCopyAction
editor.action.clipboardCopyWithSyntaxHighlightingAction
editor.action.clipboardCutAction
editor.action.commentLine
editor.action.copyLinesDownAction
editor.action.copyLinesUpAction
editor.action.deleteLines
editor.action.diffReview.next
editor.action.diffReview.prev
editor.action.fixAll
editor.action.fontZoomIn
editor.action.fontZoomOut
editor.action.fontZoomReset
editor.action.forceRetokenize
editor.action.formatDocument
editor.action.formatSelection
editor.action.goToImplementation
editor.action.goToTypeDefinition
editor.action.gotoLine
editor.action.inPlaceReplace.down
editor.action.inPlaceReplace.up
editor.action.indentLines
editor.action.insertCursorAbove
editor.action.insertCursorAtEndOfEachLineSelected
editor.action.insertCursorBelow
editor.action.insertLineAfter
editor.action.insertLineBefore
editor.action.inspectTokens
editor.action.joinLines
editor.action.jumpToBracket
editor.action.marker.next
editor.action.marker.nextInFiles
editor.action.marker.prev
editor.action.marker.prevInFiles
editor.action.moveCarretLeftAction
editor.action.moveCarretRightAction
editor.action.moveLinesDownAction
editor.action.moveLinesUpAction
editor.action.moveSelectionToNextFindMatch
editor.action.moveSelectionToPreviousFindMatch
editor.action.nextMatchFindAction
editor.action.nextSelectionMatchFindAction
editor.action.openLink
editor.action.organizeImports
editor.action.outdentLines
editor.action.peekDeclaration
editor.action.peekDefinition
editor.action.peekImplementation
editor.action.peekTypeDefinition
editor.action.previousMatchFindAction
editor.action.previousSelectionMatchFindAction
editor.action.quickCommand
editor.action.quickFix
editor.action.quickOutline
editor.action.refactor
editor.action.referenceSearch.trigger
editor.action.removeCommentLine
editor.action.rename
editor.action.revealDeclaration
editor.action.revealDefinition
editor.action.revealDefinitionAside
editor.action.selectHighlights
editor.action.selectToBracket
editor.action.showAccessibilityHelp
editor.action.showContextMenu
editor.action.showHover
editor.action.smartSelect.expand
editor.action.smartSelect.shrink
editor.action.sortLinesAscending
editor.action.sortLinesDescending
editor.action.sourceAction
editor.action.startFindReplaceAction
editor.action.toggleHighContrast
editor.action.toggleTabFocusMode
editor.action.transformToLowercase
editor.action.transformToTitlecase
editor.action.transformToUppercase
editor.action.transpose
editor.action.transposeLetters
editor.action.triggerParameterHints
editor.action.triggerSuggest
editor.action.trimTrailingWhitespace
editor.action.wordHighlight.next
editor.action.wordHighlight.prev
editor.action.wordHighlight.trigger
editor.fold
editor.foldAll
editor.foldAllBlockComments
editor.foldAllMarkerRegions
editor.foldLevel1
editor.foldLevel2
editor.foldLevel3
editor.foldLevel4
editor.foldLevel5
editor.foldLevel6
editor.foldLevel7
editor.foldRecursively
editor.unfold
editor.unfoldAll
editor.unfoldAllMarkerRegions
editor.unfoldRecursively

 */
