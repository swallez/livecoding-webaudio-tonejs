(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main.js ***!
  \**************************************************************************************************/
/*! exports provided: Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, Diagnostic, Command, TextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolInformation, DocumentSymbol, CodeActionKind, CodeActionContext, CodeAction, CodeLens, FormattingOptions, DocumentLink, EOL, TextDocument, TextDocumentSaveReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationLink", function() { return LocationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInformation", function() { return ColorInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPresentation", function() { return ColorPresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeKind", function() { return FoldingRangeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRange", function() { return FoldingRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticRelatedInformation", function() { return DiagnosticRelatedInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticSeverity", function() { return DiagnosticSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnostic", function() { return Diagnostic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEdit", function() { return TextEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentEdit", function() { return TextDocumentEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFile", function() { return CreateFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameFile", function() { return RenameFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFile", function() { return DeleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceEdit", function() { return WorkspaceEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceChange", function() { return WorkspaceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentIdentifier", function() { return TextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionedTextDocumentIdentifier", function() { return VersionedTextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentItem", function() { return TextDocumentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupKind", function() { return MarkupKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupContent", function() { return MarkupContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemKind", function() { return CompletionItemKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertTextFormat", function() { return InsertTextFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItem", function() { return CompletionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionList", function() { return CompletionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedString", function() { return MarkedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hover", function() { return Hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterInformation", function() { return ParameterInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureInformation", function() { return SignatureInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightKind", function() { return DocumentHighlightKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlight", function() { return DocumentHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolKind", function() { return SymbolKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInformation", function() { return SymbolInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbol", function() { return DocumentSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionKind", function() { return CodeActionKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionContext", function() { return CodeActionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeAction", function() { return CodeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLens", function() { return CodeLens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingOptions", function() { return FormattingOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentLink", function() { return DocumentLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOL", function() { return EOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocument", function() { return TextDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentSaveReason", function() { return TextDocumentSaveReason; });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

/**
 * The Position namespace provides helper functions to work with
 * [Position](#Position) literals.
 */
var Position;
(function (Position) {
    /**
     * Creates a new Position literal from the given line and character.
     * @param line The position's line.
     * @param character The position's character.
     */
    function create(line, character) {
        return { line: line, character: character };
    }
    Position.create = create;
    /**
     * Checks whether the given liternal conforms to the [Position](#Position) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.number(candidate.line) && Is.number(candidate.character);
    }
    Position.is = is;
})(Position || (Position = {}));
/**
 * The Range namespace provides helper functions to work with
 * [Range](#Range) literals.
 */
var Range;
(function (Range) {
    function create(one, two, three, four) {
        if (Is.number(one) && Is.number(two) && Is.number(three) && Is.number(four)) {
            return { start: Position.create(one, two), end: Position.create(three, four) };
        }
        else if (Position.is(one) && Position.is(two)) {
            return { start: one, end: two };
        }
        else {
            throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
        }
    }
    Range.create = create;
    /**
     * Checks whether the given literal conforms to the [Range](#Range) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
    }
    Range.is = is;
})(Range || (Range = {}));
/**
 * The Location namespace provides helper functions to work with
 * [Location](#Location) literals.
 */
var Location;
(function (Location) {
    /**
     * Creates a Location literal.
     * @param uri The location's uri.
     * @param range The location's range.
     */
    function create(uri, range) {
        return { uri: uri, range: range };
    }
    Location.create = create;
    /**
     * Checks whether the given literal conforms to the [Location](#Location) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
    }
    Location.is = is;
})(Location || (Location = {}));
/**
 * The LocationLink namespace provides helper functions to work with
 * [LocationLink](#LocationLink) literals.
 */
var LocationLink;
(function (LocationLink) {
    /**
     * Creates a LocationLink literal.
     * @param targetUri The definition's uri.
     * @param targetRange The full range of the definition.
     * @param targetSelectionRange The span of the symbol definition at the target.
     * @param originSelectionRange The span of the symbol being defined in the originating source file.
     */
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri: targetUri, targetRange: targetRange, targetSelectionRange: targetSelectionRange, originSelectionRange: originSelectionRange };
    }
    LocationLink.create = create;
    /**
     * Checks whether the given literal conforms to the [LocationLink](#LocationLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri)
            && (Range.is(candidate.targetSelectionRange) || Is.undefined(candidate.targetSelectionRange))
            && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
    }
    LocationLink.is = is;
})(LocationLink || (LocationLink = {}));
/**
 * The Color namespace provides helper functions to work with
 * [Color](#Color) literals.
 */
var Color;
(function (Color) {
    /**
     * Creates a new Color literal.
     */
    function create(red, green, blue, alpha) {
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha,
        };
    }
    Color.create = create;
    /**
     * Checks whether the given literal conforms to the [Color](#Color) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.number(candidate.red)
            && Is.number(candidate.green)
            && Is.number(candidate.blue)
            && Is.number(candidate.alpha);
    }
    Color.is = is;
})(Color || (Color = {}));
/**
 * The ColorInformation namespace provides helper functions to work with
 * [ColorInformation](#ColorInformation) literals.
 */
var ColorInformation;
(function (ColorInformation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(range, color) {
        return {
            range: range,
            color: color,
        };
    }
    ColorInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Range.is(candidate.range) && Color.is(candidate.color);
    }
    ColorInformation.is = is;
})(ColorInformation || (ColorInformation = {}));
/**
 * The Color namespace provides helper functions to work with
 * [ColorPresentation](#ColorPresentation) literals.
 */
var ColorPresentation;
(function (ColorPresentation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(label, textEdit, additionalTextEdits) {
        return {
            label: label,
            textEdit: textEdit,
            additionalTextEdits: additionalTextEdits,
        };
    }
    ColorPresentation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate.label)
            && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate))
            && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
    }
    ColorPresentation.is = is;
})(ColorPresentation || (ColorPresentation = {}));
/**
 * Enum of known range kinds
 */
var FoldingRangeKind;
(function (FoldingRangeKind) {
    /**
     * Folding range for a comment
     */
    FoldingRangeKind["Comment"] = "comment";
    /**
     * Folding range for a imports or includes
     */
    FoldingRangeKind["Imports"] = "imports";
    /**
     * Folding range for a region (e.g. `#region`)
     */
    FoldingRangeKind["Region"] = "region";
})(FoldingRangeKind || (FoldingRangeKind = {}));
/**
 * The folding range namespace provides helper functions to work with
 * [FoldingRange](#FoldingRange) literals.
 */
var FoldingRange;
(function (FoldingRange) {
    /**
     * Creates a new FoldingRange literal.
     */
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
            result.kind = kind;
        }
        return result;
    }
    FoldingRange.create = create;
    /**
     * Checks whether the given literal conforms to the [FoldingRange](#FoldingRange) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.number(candidate.startLine) && Is.number(candidate.startLine)
            && (Is.undefined(candidate.startCharacter) || Is.number(candidate.startCharacter))
            && (Is.undefined(candidate.endCharacter) || Is.number(candidate.endCharacter))
            && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
    }
    FoldingRange.is = is;
})(FoldingRange || (FoldingRange = {}));
/**
 * The DiagnosticRelatedInformation namespace provides helper functions to work with
 * [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) literals.
 */
var DiagnosticRelatedInformation;
(function (DiagnosticRelatedInformation) {
    /**
     * Creates a new DiagnosticRelatedInformation literal.
     */
    function create(location, message) {
        return {
            location: location,
            message: message
        };
    }
    DiagnosticRelatedInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
    }
    DiagnosticRelatedInformation.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
/**
 * The diagnostic's severity.
 */
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    /**
     * Reports an error.
     */
    DiagnosticSeverity.Error = 1;
    /**
     * Reports a warning.
     */
    DiagnosticSeverity.Warning = 2;
    /**
     * Reports an information.
     */
    DiagnosticSeverity.Information = 3;
    /**
     * Reports a hint.
     */
    DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
/**
 * The Diagnostic namespace provides helper functions to work with
 * [Diagnostic](#Diagnostic) literals.
 */
var Diagnostic;
(function (Diagnostic) {
    /**
     * Creates a new Diagnostic literal.
     */
    function create(range, message, severity, code, source, relatedInformation) {
        var result = { range: range, message: message };
        if (Is.defined(severity)) {
            result.severity = severity;
        }
        if (Is.defined(code)) {
            result.code = code;
        }
        if (Is.defined(source)) {
            result.source = source;
        }
        if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
        }
        return result;
    }
    Diagnostic.create = create;
    /**
     * Checks whether the given literal conforms to the [Diagnostic](#Diagnostic) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate)
            && Range.is(candidate.range)
            && Is.string(candidate.message)
            && (Is.number(candidate.severity) || Is.undefined(candidate.severity))
            && (Is.number(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code))
            && (Is.string(candidate.source) || Is.undefined(candidate.source))
            && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
    }
    Diagnostic.is = is;
})(Diagnostic || (Diagnostic = {}));
/**
 * The Command namespace provides helper functions to work with
 * [Command](#Command) literals.
 */
var Command;
(function (Command) {
    /**
     * Creates a new Command literal.
     */
    function create(title, command) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var result = { title: title, command: command };
        if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
        }
        return result;
    }
    Command.create = create;
    /**
     * Checks whether the given literal conforms to the [Command](#Command) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
    }
    Command.is = is;
})(Command || (Command = {}));
/**
 * The TextEdit namespace provides helper function to create replace,
 * insert and delete edits more easily.
 */
var TextEdit;
(function (TextEdit) {
    /**
     * Creates a replace text edit.
     * @param range The range of text to be replaced.
     * @param newText The new text.
     */
    function replace(range, newText) {
        return { range: range, newText: newText };
    }
    TextEdit.replace = replace;
    /**
     * Creates a insert text edit.
     * @param position The position to insert the text at.
     * @param newText The text to be inserted.
     */
    function insert(position, newText) {
        return { range: { start: position, end: position }, newText: newText };
    }
    TextEdit.insert = insert;
    /**
     * Creates a delete text edit.
     * @param range The range of text to be deleted.
     */
    function del(range) {
        return { range: range, newText: '' };
    }
    TextEdit.del = del;
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate)
            && Is.string(candidate.newText)
            && Range.is(candidate.range);
    }
    TextEdit.is = is;
})(TextEdit || (TextEdit = {}));
/**
 * The TextDocumentEdit namespace provides helper function to create
 * an edit that manipulates a text document.
 */
var TextDocumentEdit;
(function (TextDocumentEdit) {
    /**
     * Creates a new `TextDocumentEdit`
     */
    function create(textDocument, edits) {
        return { textDocument: textDocument, edits: edits };
    }
    TextDocumentEdit.create = create;
    function is(value) {
        var candidate = value;
        return Is.defined(candidate)
            && VersionedTextDocumentIdentifier.is(candidate.textDocument)
            && Array.isArray(candidate.edits);
    }
    TextDocumentEdit.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));
var CreateFile;
(function (CreateFile) {
    function create(uri, options) {
        var result = {
            kind: 'create',
            uri: uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    CreateFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'create' && Is.string(candidate.uri) &&
            (candidate.options === void 0 ||
                ((candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))));
    }
    CreateFile.is = is;
})(CreateFile || (CreateFile = {}));
var RenameFile;
(function (RenameFile) {
    function create(oldUri, newUri, options) {
        var result = {
            kind: 'rename',
            oldUri: oldUri,
            newUri: newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    RenameFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) &&
            (candidate.options === void 0 ||
                ((candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))));
    }
    RenameFile.is = is;
})(RenameFile || (RenameFile = {}));
var DeleteFile;
(function (DeleteFile) {
    function create(uri, options) {
        var result = {
            kind: 'delete',
            uri: uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    DeleteFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) &&
            (candidate.options === void 0 ||
                ((candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))));
    }
    DeleteFile.is = is;
})(DeleteFile || (DeleteFile = {}));
var WorkspaceEdit;
(function (WorkspaceEdit) {
    function is(value) {
        var candidate = value;
        return candidate &&
            (candidate.changes !== void 0 || candidate.documentChanges !== void 0) &&
            (candidate.documentChanges === void 0 || candidate.documentChanges.every(function (change) {
                if (Is.string(change.kind)) {
                    return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                }
                else {
                    return TextDocumentEdit.is(change);
                }
            }));
    }
    WorkspaceEdit.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));
var TextEditChangeImpl = /** @class */ (function () {
    function TextEditChangeImpl(edits) {
        this.edits = edits;
    }
    TextEditChangeImpl.prototype.insert = function (position, newText) {
        this.edits.push(TextEdit.insert(position, newText));
    };
    TextEditChangeImpl.prototype.replace = function (range, newText) {
        this.edits.push(TextEdit.replace(range, newText));
    };
    TextEditChangeImpl.prototype.delete = function (range) {
        this.edits.push(TextEdit.del(range));
    };
    TextEditChangeImpl.prototype.add = function (edit) {
        this.edits.push(edit);
    };
    TextEditChangeImpl.prototype.all = function () {
        return this.edits;
    };
    TextEditChangeImpl.prototype.clear = function () {
        this.edits.splice(0, this.edits.length);
    };
    return TextEditChangeImpl;
}());
/**
 * A workspace change helps constructing changes to a workspace.
 */
var WorkspaceChange = /** @class */ (function () {
    function WorkspaceChange(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                workspaceEdit.documentChanges.forEach(function (change) {
                    if (TextDocumentEdit.is(change)) {
                        var textEditChange = new TextEditChangeImpl(change.edits);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            }
            else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function (key) {
                    var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                    _this._textEditChanges[key] = textEditChange;
                });
            }
        }
    }
    Object.defineProperty(WorkspaceChange.prototype, "edit", {
        /**
         * Returns the underlying [WorkspaceEdit](#WorkspaceEdit) literal
         * use to be returned from a workspace edit operation like rename.
         */
        get: function () {
            return this._workspaceEdit;
        },
        enumerable: true,
        configurable: true
    });
    WorkspaceChange.prototype.getTextEditChange = function (key) {
        if (VersionedTextDocumentIdentifier.is(key)) {
            if (!this._workspaceEdit) {
                this._workspaceEdit = {
                    documentChanges: []
                };
            }
            if (!this._workspaceEdit.documentChanges) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var textDocument = key;
            var result = this._textEditChanges[textDocument.uri];
            if (!result) {
                var edits = [];
                var textDocumentEdit = {
                    textDocument: textDocument,
                    edits: edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[textDocument.uri] = result;
            }
            return result;
        }
        else {
            if (!this._workspaceEdit) {
                this._workspaceEdit = {
                    changes: Object.create(null)
                };
            }
            if (!this._workspaceEdit.changes) {
                throw new Error('Workspace edit is not configured for normal text edit changes.');
            }
            var result = this._textEditChanges[key];
            if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange.prototype.createFile = function (uri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(CreateFile.create(uri, options));
    };
    WorkspaceChange.prototype.renameFile = function (oldUri, newUri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(RenameFile.create(oldUri, newUri, options));
    };
    WorkspaceChange.prototype.deleteFile = function (uri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(DeleteFile.create(uri, options));
    };
    WorkspaceChange.prototype.checkDocumentChanges = function () {
        if (!this._workspaceEdit || !this._workspaceEdit.documentChanges) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
    };
    return WorkspaceChange;
}());

/**
 * The TextDocumentIdentifier namespace provides helper functions to work with
 * [TextDocumentIdentifier](#TextDocumentIdentifier) literals.
 */
var TextDocumentIdentifier;
(function (TextDocumentIdentifier) {
    /**
     * Creates a new TextDocumentIdentifier literal.
     * @param uri The document's uri.
     */
    function create(uri) {
        return { uri: uri };
    }
    TextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentIdentifier](#TextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
    }
    TextDocumentIdentifier.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
/**
 * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
 * [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) literals.
 */
var VersionedTextDocumentIdentifier;
(function (VersionedTextDocumentIdentifier) {
    /**
     * Creates a new VersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param uri The document's text.
     */
    function create(uri, version) {
        return { uri: uri, version: version };
    }
    VersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.number(candidate.version));
    }
    VersionedTextDocumentIdentifier.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
/**
 * The TextDocumentItem namespace provides helper functions to work with
 * [TextDocumentItem](#TextDocumentItem) literals.
 */
var TextDocumentItem;
(function (TextDocumentItem) {
    /**
     * Creates a new TextDocumentItem literal.
     * @param uri The document's uri.
     * @param languageId The document's language identifier.
     * @param version The document's version number.
     * @param text The document's text.
     */
    function create(uri, languageId, version, text) {
        return { uri: uri, languageId: languageId, version: version, text: text };
    }
    TextDocumentItem.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentItem](#TextDocumentItem) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.number(candidate.version) && Is.string(candidate.text);
    }
    TextDocumentItem.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
/**
 * Describes the content type that a client supports in various
 * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
 *
 * Please note that `MarkupKinds` must not start with a `$`. This kinds
 * are reserved for internal usage.
 */
var MarkupKind;
(function (MarkupKind) {
    /**
     * Plain text is supported as a content format
     */
    MarkupKind.PlainText = 'plaintext';
    /**
     * Markdown is supported as a content format
     */
    MarkupKind.Markdown = 'markdown';
})(MarkupKind || (MarkupKind = {}));
(function (MarkupKind) {
    /**
     * Checks whether the given value is a value of the [MarkupKind](#MarkupKind) type.
     */
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
    }
    MarkupKind.is = is;
})(MarkupKind || (MarkupKind = {}));
var MarkupContent;
(function (MarkupContent) {
    /**
     * Checks whether the given value conforms to the [MarkupContent](#MarkupContent) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
    }
    MarkupContent.is = is;
})(MarkupContent || (MarkupContent = {}));
/**
 * The kind of a completion entry.
 */
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind.Text = 1;
    CompletionItemKind.Method = 2;
    CompletionItemKind.Function = 3;
    CompletionItemKind.Constructor = 4;
    CompletionItemKind.Field = 5;
    CompletionItemKind.Variable = 6;
    CompletionItemKind.Class = 7;
    CompletionItemKind.Interface = 8;
    CompletionItemKind.Module = 9;
    CompletionItemKind.Property = 10;
    CompletionItemKind.Unit = 11;
    CompletionItemKind.Value = 12;
    CompletionItemKind.Enum = 13;
    CompletionItemKind.Keyword = 14;
    CompletionItemKind.Snippet = 15;
    CompletionItemKind.Color = 16;
    CompletionItemKind.File = 17;
    CompletionItemKind.Reference = 18;
    CompletionItemKind.Folder = 19;
    CompletionItemKind.EnumMember = 20;
    CompletionItemKind.Constant = 21;
    CompletionItemKind.Struct = 22;
    CompletionItemKind.Event = 23;
    CompletionItemKind.Operator = 24;
    CompletionItemKind.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
/**
 * Defines whether the insert text in a completion item should be interpreted as
 * plain text or a snippet.
 */
var InsertTextFormat;
(function (InsertTextFormat) {
    /**
     * The primary text to be inserted is treated as a plain string.
     */
    InsertTextFormat.PlainText = 1;
    /**
     * The primary text to be inserted is treated as a snippet.
     *
     * A snippet can define tab stops and placeholders with `$1`, `$2`
     * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
     * the end of the snippet. Placeholders with equal identifiers are linked,
     * that is typing in one will update others too.
     *
     * See also: https://github.com/Microsoft/vscode/blob/master/src/vs/editor/contrib/snippet/common/snippet.md
     */
    InsertTextFormat.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
/**
 * The CompletionItem namespace provides functions to deal with
 * completion items.
 */
var CompletionItem;
(function (CompletionItem) {
    /**
     * Create a completion item and seed it with a label.
     * @param label The completion item's label
     */
    function create(label) {
        return { label: label };
    }
    CompletionItem.create = create;
})(CompletionItem || (CompletionItem = {}));
/**
 * The CompletionList namespace provides functions to deal with
 * completion lists.
 */
var CompletionList;
(function (CompletionList) {
    /**
     * Creates a new completion list.
     *
     * @param items The completion items.
     * @param isIncomplete The list is not complete.
     */
    function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
    }
    CompletionList.create = create;
})(CompletionList || (CompletionList = {}));
var MarkedString;
(function (MarkedString) {
    /**
     * Creates a marked string from plain text.
     *
     * @param plainText The plain text.
     */
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&"); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
    }
    MarkedString.fromPlainText = fromPlainText;
    /**
     * Checks whether the given value conforms to the [MarkedString](#MarkedString) type.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate) || (Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value));
    }
    MarkedString.is = is;
})(MarkedString || (MarkedString = {}));
var Hover;
(function (Hover) {
    /**
     * Checks whether the given value conforms to the [Hover](#Hover) interface.
     */
    function is(value) {
        var candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
            MarkedString.is(candidate.contents) ||
            Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
    }
    Hover.is = is;
})(Hover || (Hover = {}));
/**
 * The ParameterInformation namespace provides helper functions to work with
 * [ParameterInformation](#ParameterInformation) literals.
 */
var ParameterInformation;
(function (ParameterInformation) {
    /**
     * Creates a new parameter information literal.
     *
     * @param label A label string.
     * @param documentation A doc string.
     */
    function create(label, documentation) {
        return documentation ? { label: label, documentation: documentation } : { label: label };
    }
    ParameterInformation.create = create;
    ;
})(ParameterInformation || (ParameterInformation = {}));
/**
 * The SignatureInformation namespace provides helper functions to work with
 * [SignatureInformation](#SignatureInformation) literals.
 */
var SignatureInformation;
(function (SignatureInformation) {
    function create(label, documentation) {
        var parameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
        }
        var result = { label: label };
        if (Is.defined(documentation)) {
            result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
            result.parameters = parameters;
        }
        else {
            result.parameters = [];
        }
        return result;
    }
    SignatureInformation.create = create;
})(SignatureInformation || (SignatureInformation = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind.Text = 1;
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind.Read = 2;
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * DocumentHighlight namespace to provide helper functions to work with
 * [DocumentHighlight](#DocumentHighlight) literals.
 */
var DocumentHighlight;
(function (DocumentHighlight) {
    /**
     * Create a DocumentHighlight object.
     * @param range The range the highlight applies to.
     */
    function create(range, kind) {
        var result = { range: range };
        if (Is.number(kind)) {
            result.kind = kind;
        }
        return result;
    }
    DocumentHighlight.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
/**
 * A symbol kind.
 */
var SymbolKind;
(function (SymbolKind) {
    SymbolKind.File = 1;
    SymbolKind.Module = 2;
    SymbolKind.Namespace = 3;
    SymbolKind.Package = 4;
    SymbolKind.Class = 5;
    SymbolKind.Method = 6;
    SymbolKind.Property = 7;
    SymbolKind.Field = 8;
    SymbolKind.Constructor = 9;
    SymbolKind.Enum = 10;
    SymbolKind.Interface = 11;
    SymbolKind.Function = 12;
    SymbolKind.Variable = 13;
    SymbolKind.Constant = 14;
    SymbolKind.String = 15;
    SymbolKind.Number = 16;
    SymbolKind.Boolean = 17;
    SymbolKind.Array = 18;
    SymbolKind.Object = 19;
    SymbolKind.Key = 20;
    SymbolKind.Null = 21;
    SymbolKind.EnumMember = 22;
    SymbolKind.Struct = 23;
    SymbolKind.Event = 24;
    SymbolKind.Operator = 25;
    SymbolKind.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
var SymbolInformation;
(function (SymbolInformation) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the location of the symbol.
     * @param uri The resource of the location of symbol, defaults to the current document.
     * @param containerName The name of the symbol containing the symbol.
     */
    function create(name, kind, range, uri, containerName) {
        var result = {
            name: name,
            kind: kind,
            location: { uri: uri, range: range }
        };
        if (containerName) {
            result.containerName = containerName;
        }
        return result;
    }
    SymbolInformation.create = create;
})(SymbolInformation || (SymbolInformation = {}));
/**
 * Represents programming constructs like variables, classes, interfaces etc.
 * that appear in a document. Document symbols can be hierarchical and they
 * have two ranges: one that encloses its definition and one that points to
 * its most interesting range, e.g. the range of an identifier.
 */
var DocumentSymbol = /** @class */ (function () {
    function DocumentSymbol() {
    }
    return DocumentSymbol;
}());

(function (DocumentSymbol) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param detail The detail of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the symbol.
     * @param selectionRange The selectionRange of the symbol.
     * @param children Children of the symbol.
     */
    function create(name, detail, kind, range, selectionRange, children) {
        var result = {
            name: name,
            detail: detail,
            kind: kind,
            range: range,
            selectionRange: selectionRange
        };
        if (children !== void 0) {
            result.children = children;
        }
        return result;
    }
    DocumentSymbol.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentSymbol](#DocumentSymbol) interface.
     */
    function is(value) {
        var candidate = value;
        return candidate &&
            Is.string(candidate.name) && Is.number(candidate.kind) &&
            Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
            (candidate.detail === void 0 || Is.string(candidate.detail)) &&
            (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) &&
            (candidate.children === void 0 || Array.isArray(candidate.children));
    }
    DocumentSymbol.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
/**
 * A set of predefined code action kinds
 */
var CodeActionKind;
(function (CodeActionKind) {
    /**
     * Base kind for quickfix actions: 'quickfix'
     */
    CodeActionKind.QuickFix = 'quickfix';
    /**
     * Base kind for refactoring actions: 'refactor'
     */
    CodeActionKind.Refactor = 'refactor';
    /**
     * Base kind for refactoring extraction actions: 'refactor.extract'
     *
     * Example extract actions:
     *
     * - Extract method
     * - Extract function
     * - Extract variable
     * - Extract interface from class
     * - ...
     */
    CodeActionKind.RefactorExtract = 'refactor.extract';
    /**
     * Base kind for refactoring inline actions: 'refactor.inline'
     *
     * Example inline actions:
     *
     * - Inline function
     * - Inline variable
     * - Inline constant
     * - ...
     */
    CodeActionKind.RefactorInline = 'refactor.inline';
    /**
     * Base kind for refactoring rewrite actions: 'refactor.rewrite'
     *
     * Example rewrite actions:
     *
     * - Convert JavaScript function to class
     * - Add or remove parameter
     * - Encapsulate field
     * - Make method static
     * - Move method to base class
     * - ...
     */
    CodeActionKind.RefactorRewrite = 'refactor.rewrite';
    /**
     * Base kind for source actions: `source`
     *
     * Source code actions apply to the entire file.
     */
    CodeActionKind.Source = 'source';
    /**
     * Base kind for an organize imports source action: `source.organizeImports`
     */
    CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
})(CodeActionKind || (CodeActionKind = {}));
/**
 * The CodeActionContext namespace provides helper functions to work with
 * [CodeActionContext](#CodeActionContext) literals.
 */
var CodeActionContext;
(function (CodeActionContext) {
    /**
     * Creates a new CodeActionContext literal.
     */
    function create(diagnostics, only) {
        var result = { diagnostics: diagnostics };
        if (only !== void 0 && only !== null) {
            result.only = only;
        }
        return result;
    }
    CodeActionContext.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeActionContext](#CodeActionContext) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string));
    }
    CodeActionContext.is = is;
})(CodeActionContext || (CodeActionContext = {}));
var CodeAction;
(function (CodeAction) {
    function create(title, commandOrEdit, kind) {
        var result = { title: title };
        if (Command.is(commandOrEdit)) {
            result.command = commandOrEdit;
        }
        else {
            result.edit = commandOrEdit;
        }
        if (kind !== void null) {
            result.kind = kind;
        }
        return result;
    }
    CodeAction.create = create;
    function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.title) &&
            (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) &&
            (candidate.kind === void 0 || Is.string(candidate.kind)) &&
            (candidate.edit !== void 0 || candidate.command !== void 0) &&
            (candidate.command === void 0 || Command.is(candidate.command)) &&
            (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
    }
    CodeAction.is = is;
})(CodeAction || (CodeAction = {}));
/**
 * The CodeLens namespace provides helper functions to work with
 * [CodeLens](#CodeLens) literals.
 */
var CodeLens;
(function (CodeLens) {
    /**
     * Creates a new CodeLens literal.
     */
    function create(range, data) {
        var result = { range: range };
        if (Is.defined(data))
            result.data = data;
        return result;
    }
    CodeLens.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeLens](#CodeLens) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
    }
    CodeLens.is = is;
})(CodeLens || (CodeLens = {}));
/**
 * The FormattingOptions namespace provides helper functions to work with
 * [FormattingOptions](#FormattingOptions) literals.
 */
var FormattingOptions;
(function (FormattingOptions) {
    /**
     * Creates a new FormattingOptions literal.
     */
    function create(tabSize, insertSpaces) {
        return { tabSize: tabSize, insertSpaces: insertSpaces };
    }
    FormattingOptions.create = create;
    /**
     * Checks whether the given literal conforms to the [FormattingOptions](#FormattingOptions) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.number(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions.is = is;
})(FormattingOptions || (FormattingOptions = {}));
/**
 * A document link is a range in a text document that links to an internal or external resource, like another
 * text document or a web site.
 */
var DocumentLink = /** @class */ (function () {
    function DocumentLink() {
    }
    return DocumentLink;
}());

/**
 * The DocumentLink namespace provides helper functions to work with
 * [DocumentLink](#DocumentLink) literals.
 */
(function (DocumentLink) {
    /**
     * Creates a new DocumentLink literal.
     */
    function create(range, target, data) {
        return { range: range, target: target, data: data };
    }
    DocumentLink.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentLink](#DocumentLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
    }
    DocumentLink.is = is;
})(DocumentLink || (DocumentLink = {}));
var EOL = ['\n', '\r\n', '\r'];
var TextDocument;
(function (TextDocument) {
    /**
     * Creates a new ITextDocument literal from the given uri and content.
     * @param uri The document's uri.
     * @param languageId  The document's language Id.
     * @param content The document's content.
     */
    function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument.create = create;
    /**
     * Checks whether the given literal conforms to the [ITextDocument](#ITextDocument) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.number(candidate.lineCount)
            && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument.is = is;
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function (a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        var lastModifiedOffset = text.length;
        for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
                text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            }
            else {
                throw new Error('Overlapping edit');
            }
            lastModifiedOffset = startOffset;
        }
        return text;
    }
    TextDocument.applyEdits = applyEdits;
    function mergeSort(data, compare) {
        if (data.length <= 1) {
            // sorted
            return data;
        }
        var p = (data.length / 2) | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
                // smaller_equal -> take left to preserve order
                data[i++] = left[leftIdx++];
            }
            else {
                // greater -> take right
                data[i++] = right[rightIdx++];
            }
        }
        while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
        }
        return data;
    }
})(TextDocument || (TextDocument = {}));
/**
 * Represents reasons why a text document is saved.
 */
var TextDocumentSaveReason;
(function (TextDocumentSaveReason) {
    /**
     * Manually triggered, e.g. by the user pressing save, by starting debugging,
     * or by an API call.
     */
    TextDocumentSaveReason.Manual = 1;
    /**
     * Automatic after a delay.
     */
    TextDocumentSaveReason.AfterDelay = 2;
    /**
     * When the editor lost focus.
     */
    TextDocumentSaveReason.FocusOut = 3;
})(TextDocumentSaveReason || (TextDocumentSaveReason = {}));
var FullTextDocument = /** @class */ (function () {
    function FullTextDocument(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = null;
    }
    Object.defineProperty(FullTextDocument.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: true,
        configurable: true
    });
    FullTextDocument.prototype.getText = function (range) {
        if (range) {
            var start = this.offsetAt(range.start);
            var end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    };
    FullTextDocument.prototype.update = function (event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = null;
    };
    FullTextDocument.prototype.getLineOffsets = function () {
        if (this._lineOffsets === null) {
            var lineOffsets = [];
            var text = this._content;
            var isLineStart = true;
            for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = (ch === '\r' || ch === '\n');
                if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
                    i++;
                }
            }
            if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
            }
            this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
    };
    FullTextDocument.prototype.positionAt = function (offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) {
            return Position.create(0, offset);
        }
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        var line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
    };
    FullTextDocument.prototype.offsetAt = function (position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        }
        else if (position.line < 0) {
            return 0;
        }
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument.prototype, "lineCount", {
        get: function () {
            return this.getLineOffsets().length;
        },
        enumerable: true,
        configurable: true
    });
    return FullTextDocument;
}());
var Is;
(function (Is) {
    var toString = Object.prototype.toString;
    function defined(value) {
        return typeof value !== 'undefined';
    }
    Is.defined = defined;
    function undefined(value) {
        return typeof value === 'undefined';
    }
    Is.undefined = undefined;
    function boolean(value) {
        return value === true || value === false;
    }
    Is.boolean = boolean;
    function string(value) {
        return toString.call(value) === '[object String]';
    }
    Is.string = string;
    function number(value) {
        return toString.call(value) === '[object Number]';
    }
    Is.number = number;
    function func(value) {
        return toString.call(value) === '[object Function]';
    }
    Is.func = func;
    function objectLiteral(value) {
        // Strictly speaking class instances pass this check as well. Since the LSP
        // doesn't use classes we ignore this for now. If we do we need to add something
        // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
        return value !== null && typeof value === 'object';
    }
    Is.objectLiteral = objectLiteral;
    function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
    }
    Is.typedArray = typedArray;
})(Is || (Is = {}));


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/css/cssMode.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/css/cssMode.js ***!
  \*******************************************************************/
/*! exports provided: setupMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupMode", function() { return setupMode; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "./node_modules/monaco-editor/esm/vs/language/css/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "./node_modules/monaco-editor/esm/vs/language/css/languageFeatures.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



function setupMode(defaults) {
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](defaults);
    var worker = function (first) {
        var more = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            more[_i - 1] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, [first].concat(more));
    };
    var languageId = defaults.languageId;
    monaco.languages.registerCompletionItemProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["CompletionAdapter"](worker));
    monaco.languages.registerHoverProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["HoverAdapter"](worker));
    monaco.languages.registerDocumentHighlightProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentHighlightAdapter"](worker));
    monaco.languages.registerDefinitionProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DefinitionAdapter"](worker));
    monaco.languages.registerReferenceProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["ReferenceAdapter"](worker));
    monaco.languages.registerDocumentSymbolProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentSymbolAdapter"](worker));
    monaco.languages.registerRenameProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["RenameAdapter"](worker));
    monaco.languages.registerColorProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentColorAdapter"](worker));
    monaco.languages.registerFoldingRangeProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FoldingRangeAdapter"](worker));
    new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnosticsAdapter"](languageId, worker, defaults);
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/css/languageFeatures.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/css/languageFeatures.js ***!
  \****************************************************************************/
/*! exports provided: DiagnosticsAdapter, CompletionAdapter, HoverAdapter, DocumentHighlightAdapter, DefinitionAdapter, ReferenceAdapter, RenameAdapter, DocumentSymbolAdapter, DocumentColorAdapter, FoldingRangeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticsAdapter", function() { return DiagnosticsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionAdapter", function() { return CompletionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverAdapter", function() { return HoverAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightAdapter", function() { return DocumentHighlightAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionAdapter", function() { return DefinitionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceAdapter", function() { return ReferenceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameAdapter", function() { return RenameAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbolAdapter", function() { return DocumentSymbolAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentColorAdapter", function() { return DocumentColorAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeAdapter", function() { return FoldingRangeAdapter; });
/* harmony import */ var _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deps/vscode-languageserver-types/main.js */ "./node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var Uri = monaco.Uri;
var Range = monaco.Range;
// --- diagnostics --- ---
var DiagnosticsAdapter = /** @class */ (function () {
    function DiagnosticsAdapter(_languageId, _worker, defaults) {
        var _this = this;
        this._languageId = _languageId;
        this._worker = _worker;
        this._disposables = [];
        this._listener = Object.create(null);
        var onModelAdd = function (model) {
            var modeId = model.getModeId();
            if (modeId !== _this._languageId) {
                return;
            }
            var handle;
            _this._listener[model.uri.toString()] = model.onDidChangeContent(function () {
                clearTimeout(handle);
                handle = setTimeout(function () { return _this._doValidate(model.uri, modeId); }, 500);
            });
            _this._doValidate(model.uri, modeId);
        };
        var onModelRemoved = function (model) {
            monaco.editor.setModelMarkers(model, _this._languageId, []);
            var uriStr = model.uri.toString();
            var listener = _this._listener[uriStr];
            if (listener) {
                listener.dispose();
                delete _this._listener[uriStr];
            }
        };
        this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd));
        this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));
        this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        defaults.onDidChange(function (_) {
            monaco.editor.getModels().forEach(function (model) {
                if (model.getModeId() === _this._languageId) {
                    onModelRemoved(model);
                    onModelAdd(model);
                }
            });
        });
        this._disposables.push({
            dispose: function () {
                for (var key in _this._listener) {
                    _this._listener[key].dispose();
                }
            }
        });
        monaco.editor.getModels().forEach(onModelAdd);
    }
    DiagnosticsAdapter.prototype.dispose = function () {
        this._disposables.forEach(function (d) { return d && d.dispose(); });
        this._disposables = [];
    };
    DiagnosticsAdapter.prototype._doValidate = function (resource, languageId) {
        this._worker(resource).then(function (worker) {
            return worker.doValidation(resource.toString());
        }).then(function (diagnostics) {
            var markers = diagnostics.map(function (d) { return toDiagnostics(resource, d); });
            var model = monaco.editor.getModel(resource);
            if (model.getModeId() === languageId) {
                monaco.editor.setModelMarkers(model, languageId, markers);
            }
        }).then(undefined, function (err) {
            console.error(err);
        });
    };
    return DiagnosticsAdapter;
}());

function toSeverity(lsSeverity) {
    switch (lsSeverity) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Error: return monaco.MarkerSeverity.Error;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Warning: return monaco.MarkerSeverity.Warning;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Information: return monaco.MarkerSeverity.Info;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Hint: return monaco.MarkerSeverity.Hint;
        default:
            return monaco.MarkerSeverity.Info;
    }
}
function toDiagnostics(resource, diag) {
    var code = typeof diag.code === 'number' ? String(diag.code) : diag.code;
    return {
        severity: toSeverity(diag.severity),
        startLineNumber: diag.range.start.line + 1,
        startColumn: diag.range.start.character + 1,
        endLineNumber: diag.range.end.line + 1,
        endColumn: diag.range.end.character + 1,
        message: diag.message,
        code: code,
        source: diag.source
    };
}
// --- completion ------
function fromPosition(position) {
    if (!position) {
        return void 0;
    }
    return { character: position.column - 1, line: position.lineNumber - 1 };
}
function fromRange(range) {
    if (!range) {
        return void 0;
    }
    return { start: { line: range.startLineNumber - 1, character: range.startColumn - 1 }, end: { line: range.endLineNumber - 1, character: range.endColumn - 1 } };
}
function toRange(range) {
    if (!range) {
        return void 0;
    }
    return new monaco.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function toCompletionItemKind(kind) {
    var mItemKind = monaco.languages.CompletionItemKind;
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Text: return mItemKind.Text;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Method: return mItemKind.Method;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Function: return mItemKind.Function;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Constructor: return mItemKind.Constructor;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Field: return mItemKind.Field;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Variable: return mItemKind.Variable;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Class: return mItemKind.Class;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Interface: return mItemKind.Interface;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Module: return mItemKind.Module;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Property: return mItemKind.Property;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Unit: return mItemKind.Unit;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Value: return mItemKind.Value;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Enum: return mItemKind.Enum;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Keyword: return mItemKind.Keyword;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Snippet: return mItemKind.Snippet;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Color: return mItemKind.Color;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].File: return mItemKind.File;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Reference: return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function toTextEdit(textEdit) {
    if (!textEdit) {
        return void 0;
    }
    return {
        range: toRange(textEdit.range),
        text: textEdit.newText
    };
}
var CompletionAdapter = /** @class */ (function () {
    function CompletionAdapter(_worker) {
        this._worker = _worker;
    }
    Object.defineProperty(CompletionAdapter.prototype, "triggerCharacters", {
        get: function () {
            return [' ', ':'];
        },
        enumerable: true,
        configurable: true
    });
    CompletionAdapter.prototype.provideCompletionItems = function (model, position, context, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.doComplete(resource.toString(), fromPosition(position));
        }).then(function (info) {
            if (!info) {
                return;
            }
            var wordInfo = model.getWordUntilPosition(position);
            var wordRange = new Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            var items = info.items.map(function (entry) {
                var item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    detail: entry.detail,
                    range: wordRange,
                    kind: toCompletionItemKind(entry.kind),
                };
                if (entry.textEdit) {
                    item.range = toRange(entry.textEdit.range);
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) {
                    item.additionalTextEdits = entry.additionalTextEdits.map(toTextEdit);
                }
                if (entry.insertTextFormat === _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["InsertTextFormat"].Snippet) {
                    item.insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
                }
                return item;
            });
            return {
                isIncomplete: info.isIncomplete,
                suggestions: items
            };
        });
    };
    return CompletionAdapter;
}());

function isMarkupContent(thing) {
    return thing && typeof thing === 'object' && typeof thing.kind === 'string';
}
function toMarkdownString(entry) {
    if (typeof entry === 'string') {
        return {
            value: entry
        };
    }
    if (isMarkupContent(entry)) {
        if (entry.kind === 'plaintext') {
            return {
                value: entry.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
            };
        }
        return {
            value: entry.value
        };
    }
    return { value: '```' + entry.language + '\n' + entry.value + '\n```\n' };
}
function toMarkedStringArray(contents) {
    if (!contents) {
        return void 0;
    }
    if (Array.isArray(contents)) {
        return contents.map(toMarkdownString);
    }
    return [toMarkdownString(contents)];
}
// --- hover ------
var HoverAdapter = /** @class */ (function () {
    function HoverAdapter(_worker) {
        this._worker = _worker;
    }
    HoverAdapter.prototype.provideHover = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.doHover(resource.toString(), fromPosition(position));
        }).then(function (info) {
            if (!info) {
                return;
            }
            return {
                range: toRange(info.range),
                contents: toMarkedStringArray(info.contents)
            };
        });
    };
    return HoverAdapter;
}());

// --- document highlights ------
function toDocumentHighlightKind(kind) {
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DocumentHighlightKind"].Read: return monaco.languages.DocumentHighlightKind.Read;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DocumentHighlightKind"].Write: return monaco.languages.DocumentHighlightKind.Write;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DocumentHighlightKind"].Text: return monaco.languages.DocumentHighlightKind.Text;
    }
    return monaco.languages.DocumentHighlightKind.Text;
}
var DocumentHighlightAdapter = /** @class */ (function () {
    function DocumentHighlightAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentHighlightAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.findDocumentHighlights(resource.toString(), fromPosition(position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            return entries.map(function (entry) {
                return {
                    range: toRange(entry.range),
                    kind: toDocumentHighlightKind(entry.kind)
                };
            });
        });
    };
    return DocumentHighlightAdapter;
}());

// --- definition ------
function toLocation(location) {
    return {
        uri: Uri.parse(location.uri),
        range: toRange(location.range)
    };
}
var DefinitionAdapter = /** @class */ (function () {
    function DefinitionAdapter(_worker) {
        this._worker = _worker;
    }
    DefinitionAdapter.prototype.provideDefinition = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.findDefinition(resource.toString(), fromPosition(position));
        }).then(function (definition) {
            if (!definition) {
                return;
            }
            return [toLocation(definition)];
        });
    };
    return DefinitionAdapter;
}());

// --- references ------
var ReferenceAdapter = /** @class */ (function () {
    function ReferenceAdapter(_worker) {
        this._worker = _worker;
    }
    ReferenceAdapter.prototype.provideReferences = function (model, position, context, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.findReferences(resource.toString(), fromPosition(position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            return entries.map(toLocation);
        });
    };
    return ReferenceAdapter;
}());

// --- rename ------
function toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) {
        return void 0;
    }
    var resourceEdits = [];
    for (var uri in edit.changes) {
        var edits = [];
        for (var _i = 0, _a = edit.changes[uri]; _i < _a.length; _i++) {
            var e = _a[_i];
            edits.push({
                range: toRange(e.range),
                text: e.newText
            });
        }
        resourceEdits.push({ resource: Uri.parse(uri), edits: edits });
    }
    return {
        edits: resourceEdits
    };
}
var RenameAdapter = /** @class */ (function () {
    function RenameAdapter(_worker) {
        this._worker = _worker;
    }
    RenameAdapter.prototype.provideRenameEdits = function (model, position, newName, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.doRename(resource.toString(), fromPosition(position), newName);
        }).then(function (edit) {
            return toWorkspaceEdit(edit);
        });
    };
    return RenameAdapter;
}());

// --- document symbols ------
function toSymbolKind(kind) {
    var mKind = monaco.languages.SymbolKind;
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].File: return mKind.Array;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Module: return mKind.Module;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Namespace: return mKind.Namespace;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Package: return mKind.Package;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Class: return mKind.Class;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Method: return mKind.Method;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Property: return mKind.Property;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Field: return mKind.Field;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Constructor: return mKind.Constructor;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Enum: return mKind.Enum;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Interface: return mKind.Interface;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Function: return mKind.Function;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Variable: return mKind.Variable;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Constant: return mKind.Constant;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].String: return mKind.String;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Number: return mKind.Number;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Boolean: return mKind.Boolean;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Array: return mKind.Array;
    }
    return mKind.Function;
}
var DocumentSymbolAdapter = /** @class */ (function () {
    function DocumentSymbolAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentSymbolAdapter.prototype.provideDocumentSymbols = function (model, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.findDocumentSymbols(resource.toString()); }).then(function (items) {
            if (!items) {
                return;
            }
            return items.map(function (item) { return ({
                name: item.name,
                detail: '',
                containerName: item.containerName,
                kind: toSymbolKind(item.kind),
                range: toRange(item.location.range),
                selectionRange: toRange(item.location.range)
            }); });
        });
    };
    return DocumentSymbolAdapter;
}());

var DocumentColorAdapter = /** @class */ (function () {
    function DocumentColorAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentColorAdapter.prototype.provideDocumentColors = function (model, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.findDocumentColors(resource.toString()); }).then(function (infos) {
            if (!infos) {
                return;
            }
            return infos.map(function (item) { return ({
                color: item.color,
                range: toRange(item.range)
            }); });
        });
    };
    DocumentColorAdapter.prototype.provideColorPresentations = function (model, info, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.getColorPresentations(resource.toString(), info.color, fromRange(info.range)); }).then(function (presentations) {
            if (!presentations) {
                return;
            }
            return presentations.map(function (presentation) {
                var item = {
                    label: presentation.label,
                };
                if (presentation.textEdit) {
                    item.textEdit = toTextEdit(presentation.textEdit);
                }
                if (presentation.additionalTextEdits) {
                    item.additionalTextEdits = presentation.additionalTextEdits.map(toTextEdit);
                }
                return item;
            });
        });
    };
    return DocumentColorAdapter;
}());

var FoldingRangeAdapter = /** @class */ (function () {
    function FoldingRangeAdapter(_worker) {
        this._worker = _worker;
    }
    FoldingRangeAdapter.prototype.provideFoldingRanges = function (model, context, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.provideFoldingRanges(resource.toString(), context); }).then(function (ranges) {
            if (!ranges) {
                return;
            }
            return ranges.map(function (range) {
                var result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== 'undefined') {
                    result.kind = toFoldingRangeKind(range.kind);
                }
                return result;
            });
        });
    };
    return FoldingRangeAdapter;
}());

function toFoldingRangeKind(kind) {
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["FoldingRangeKind"].Comment: return monaco.languages.FoldingRangeKind.Comment;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["FoldingRangeKind"].Imports: return monaco.languages.FoldingRangeKind.Imports;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["FoldingRangeKind"].Region: return monaco.languages.FoldingRangeKind.Region;
    }
    return void 0;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/css/workerManager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/css/workerManager.js ***!
  \*************************************************************************/
/*! exports provided: WorkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerManager", function() { return WorkerManager; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var STOP_WHEN_IDLE_FOR = 2 * 60 * 1000; // 2min
var WorkerManager = /** @class */ (function () {
    function WorkerManager(defaults) {
        var _this = this;
        this._defaults = defaults;
        this._worker = null;
        this._idleCheckInterval = setInterval(function () { return _this._checkIfIdle(); }, 30 * 1000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
    }
    WorkerManager.prototype._stopWorker = function () {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    };
    WorkerManager.prototype.dispose = function () {
        clearInterval(this._idleCheckInterval);
        this._configChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._checkIfIdle = function () {
        if (!this._worker) {
            return;
        }
        var timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (timePassedSinceLastUsed > STOP_WHEN_IDLE_FOR) {
            this._stopWorker();
        }
    };
    WorkerManager.prototype._getClient = function () {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = monaco.editor.createWebWorker({
                // module that exports the create() method and returns a `CSSWorker` instance
                moduleId: 'vs/language/css/cssWorker',
                label: this._defaults.languageId,
                // passed in to the create() method
                createData: {
                    languageSettings: this._defaults.diagnosticsOptions,
                    languageId: this._defaults.languageId
                }
            });
            this._client = this._worker.getProxy();
        }
        return this._client;
    };
    WorkerManager.prototype.getLanguageServiceWorker = function () {
        var _this = this;
        var resources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            resources[_i] = arguments[_i];
        }
        var _client;
        return this._getClient().then(function (client) {
            _client = client;
        }).then(function (_) {
            return _this._worker.withSyncedResources(resources);
        }).then(function (_) { return _client; });
    };
    return WorkerManager;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvY3NzL19kZXBzL3ZzY29kZS1sYW5ndWFnZXNlcnZlci10eXBlcy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS9jc3MvY3NzTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvY3NzL2xhbmd1YWdlRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2xhbmd1YWdlL2Nzcy93b3JrZXJNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9FQUFvRTtBQUNyRTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdEQUFnRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQkFBMEI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUyxpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7QUFDdEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUMxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUMwQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3REFBd0Q7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwRUFBMEU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUMxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0RBQWdEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLENBQUMsd0NBQXdDO0FBQ2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsd0JBQXdCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7QUFDOUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQTZDLElBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0Q7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9EQUFvRDtBQUNyRDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzREFBc0Q7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN5QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDekM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0NBQXdDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUN4QztBQUNQO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4Q0FBOEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7QUFDOUI7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdEQUF3RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQWdCOzs7Ozs7Ozs7Ozs7O0FDMThDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ3NDO0FBQ087QUFDbkQ7QUFDUCxxQkFBcUIsK0RBQWE7QUFDbEM7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxzRUFBa0M7QUFDdEcsMkRBQTJELGlFQUE2QjtBQUN4Rix1RUFBdUUsNkVBQXlDO0FBQ2hILGdFQUFnRSxzRUFBa0M7QUFDbEcsK0RBQStELHFFQUFpQztBQUNoRyxvRUFBb0UsMEVBQXNDO0FBQzFHLDREQUE0RCxrRUFBOEI7QUFDMUYsMkRBQTJELHlFQUFxQztBQUNoRyxrRUFBa0Usd0VBQW9DO0FBQ3RHLFFBQVEsdUVBQW1DO0FBQzNDOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDcUQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDZDQUE2QyxFQUFFO0FBQ2hHLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QseUJBQXlCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3REFBd0QsbUNBQW1DLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDNkI7QUFDOUI7QUFDQTtBQUNBLGFBQWEsNEZBQXFCO0FBQ2xDLGFBQWEsNEZBQXFCO0FBQ2xDLGFBQWEsNEZBQXFCO0FBQ2xDLGFBQWEsNEZBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVMsb0VBQW9FLFFBQVEsZ0VBQWdFO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBGQUFtQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUN1QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtGQUF3QjtBQUNyQyxhQUFhLCtGQUF3QjtBQUNyQyxhQUFhLCtGQUF3QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ21DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUM0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDMkI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIseUNBQXlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ3dCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHdEQUF3RCxFQUFFO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUUsRUFBRTtBQUNqQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDZ0M7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHVEQUF1RCxFQUFFO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0EsYUFBYSxFQUFFLEVBQUU7QUFDakIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCw2RkFBNkYsRUFBRTtBQUM3SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUMrQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsa0VBQWtFLEVBQUU7QUFDbEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUM4QjtBQUMvQjtBQUNBO0FBQ0EsYUFBYSwwRkFBbUI7QUFDaEMsYUFBYSwwRkFBbUI7QUFDaEMsYUFBYSwwRkFBbUI7QUFDaEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM2VBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2IsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsNkJBQTZCLEVBQUU7QUFDMUY7QUFDQSw2RUFBNkUsNEJBQTRCLEVBQUU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTLHFCQUFxQixnQkFBZ0IsRUFBRTtBQUNoRDtBQUNBO0FBQ0EsQ0FBQztBQUN3QiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbi8qKlxyXG4gKiBUaGUgUG9zaXRpb24gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtQb3NpdGlvbl0oI1Bvc2l0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgUG9zaXRpb247XHJcbihmdW5jdGlvbiAoUG9zaXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBQb3NpdGlvbiBsaXRlcmFsIGZyb20gdGhlIGdpdmVuIGxpbmUgYW5kIGNoYXJhY3Rlci5cclxuICAgICAqIEBwYXJhbSBsaW5lIFRoZSBwb3NpdGlvbidzIGxpbmUuXHJcbiAgICAgKiBAcGFyYW0gY2hhcmFjdGVyIFRoZSBwb3NpdGlvbidzIGNoYXJhY3Rlci5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGxpbmUsIGNoYXJhY3Rlcikge1xyXG4gICAgICAgIHJldHVybiB7IGxpbmU6IGxpbmUsIGNoYXJhY3RlcjogY2hhcmFjdGVyIH07XHJcbiAgICB9XHJcbiAgICBQb3NpdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcm5hbCBjb25mb3JtcyB0byB0aGUgW1Bvc2l0aW9uXSgjUG9zaXRpb24pIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLm9iamVjdExpdGVyYWwoY2FuZGlkYXRlKSAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmxpbmUpICYmIElzLm51bWJlcihjYW5kaWRhdGUuY2hhcmFjdGVyKTtcclxuICAgIH1cclxuICAgIFBvc2l0aW9uLmlzID0gaXM7XHJcbn0pKFBvc2l0aW9uIHx8IChQb3NpdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgUmFuZ2UgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtSYW5nZV0oI1JhbmdlKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgUmFuZ2U7XHJcbihmdW5jdGlvbiAoUmFuZ2UpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShvbmUsIHR3bywgdGhyZWUsIGZvdXIpIHtcclxuICAgICAgICBpZiAoSXMubnVtYmVyKG9uZSkgJiYgSXMubnVtYmVyKHR3bykgJiYgSXMubnVtYmVyKHRocmVlKSAmJiBJcy5udW1iZXIoZm91cikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQ6IFBvc2l0aW9uLmNyZWF0ZShvbmUsIHR3byksIGVuZDogUG9zaXRpb24uY3JlYXRlKHRocmVlLCBmb3VyKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChQb3NpdGlvbi5pcyhvbmUpICYmIFBvc2l0aW9uLmlzKHR3bykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQ6IG9uZSwgZW5kOiB0d28gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJhbmdlI2NyZWF0ZSBjYWxsZWQgd2l0aCBpbnZhbGlkIGFyZ3VtZW50c1tcIiArIG9uZSArIFwiLCBcIiArIHR3byArIFwiLCBcIiArIHRocmVlICsgXCIsIFwiICsgZm91ciArIFwiXVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSYW5nZS5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbUmFuZ2VdKCNSYW5nZSkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMub2JqZWN0TGl0ZXJhbChjYW5kaWRhdGUpICYmIFBvc2l0aW9uLmlzKGNhbmRpZGF0ZS5zdGFydCkgJiYgUG9zaXRpb24uaXMoY2FuZGlkYXRlLmVuZCk7XHJcbiAgICB9XHJcbiAgICBSYW5nZS5pcyA9IGlzO1xyXG59KShSYW5nZSB8fCAoUmFuZ2UgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIExvY2F0aW9uIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbTG9jYXRpb25dKCNMb2NhdGlvbikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIExvY2F0aW9uO1xyXG4oZnVuY3Rpb24gKExvY2F0aW9uKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBMb2NhdGlvbiBsaXRlcmFsLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgbG9jYXRpb24ncyB1cmkuXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgVGhlIGxvY2F0aW9uJ3MgcmFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmksIHJhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdXJpOiB1cmksIHJhbmdlOiByYW5nZSB9O1xyXG4gICAgfVxyXG4gICAgTG9jYXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0xvY2F0aW9uXSgjTG9jYXRpb24pIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpICYmIChJcy5zdHJpbmcoY2FuZGlkYXRlLnVyaSkgfHwgSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS51cmkpKTtcclxuICAgIH1cclxuICAgIExvY2F0aW9uLmlzID0gaXM7XHJcbn0pKExvY2F0aW9uIHx8IChMb2NhdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgTG9jYXRpb25MaW5rIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbTG9jYXRpb25MaW5rXSgjTG9jYXRpb25MaW5rKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgTG9jYXRpb25MaW5rO1xyXG4oZnVuY3Rpb24gKExvY2F0aW9uTGluaykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTG9jYXRpb25MaW5rIGxpdGVyYWwuXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0VXJpIFRoZSBkZWZpbml0aW9uJ3MgdXJpLlxyXG4gICAgICogQHBhcmFtIHRhcmdldFJhbmdlIFRoZSBmdWxsIHJhbmdlIG9mIHRoZSBkZWZpbml0aW9uLlxyXG4gICAgICogQHBhcmFtIHRhcmdldFNlbGVjdGlvblJhbmdlIFRoZSBzcGFuIG9mIHRoZSBzeW1ib2wgZGVmaW5pdGlvbiBhdCB0aGUgdGFyZ2V0LlxyXG4gICAgICogQHBhcmFtIG9yaWdpblNlbGVjdGlvblJhbmdlIFRoZSBzcGFuIG9mIHRoZSBzeW1ib2wgYmVpbmcgZGVmaW5lZCBpbiB0aGUgb3JpZ2luYXRpbmcgc291cmNlIGZpbGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0YXJnZXRVcmksIHRhcmdldFJhbmdlLCB0YXJnZXRTZWxlY3Rpb25SYW5nZSwgb3JpZ2luU2VsZWN0aW9uUmFuZ2UpIHtcclxuICAgICAgICByZXR1cm4geyB0YXJnZXRVcmk6IHRhcmdldFVyaSwgdGFyZ2V0UmFuZ2U6IHRhcmdldFJhbmdlLCB0YXJnZXRTZWxlY3Rpb25SYW5nZTogdGFyZ2V0U2VsZWN0aW9uUmFuZ2UsIG9yaWdpblNlbGVjdGlvblJhbmdlOiBvcmlnaW5TZWxlY3Rpb25SYW5nZSB9O1xyXG4gICAgfVxyXG4gICAgTG9jYXRpb25MaW5rLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtMb2NhdGlvbkxpbmtdKCNMb2NhdGlvbkxpbmspIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBSYW5nZS5pcyhjYW5kaWRhdGUudGFyZ2V0UmFuZ2UpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudGFyZ2V0VXJpKVxyXG4gICAgICAgICAgICAmJiAoUmFuZ2UuaXMoY2FuZGlkYXRlLnRhcmdldFNlbGVjdGlvblJhbmdlKSB8fCBJcy51bmRlZmluZWQoY2FuZGlkYXRlLnRhcmdldFNlbGVjdGlvblJhbmdlKSlcclxuICAgICAgICAgICAgJiYgKFJhbmdlLmlzKGNhbmRpZGF0ZS5vcmlnaW5TZWxlY3Rpb25SYW5nZSkgfHwgSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5vcmlnaW5TZWxlY3Rpb25SYW5nZSkpO1xyXG4gICAgfVxyXG4gICAgTG9jYXRpb25MaW5rLmlzID0gaXM7XHJcbn0pKExvY2F0aW9uTGluayB8fCAoTG9jYXRpb25MaW5rID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb2xvciBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0NvbG9yXSgjQ29sb3IpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb2xvcjtcclxuKGZ1bmN0aW9uIChDb2xvcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IENvbG9yIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZDogcmVkLFxyXG4gICAgICAgICAgICBncmVlbjogZ3JlZW4sXHJcbiAgICAgICAgICAgIGJsdWU6IGJsdWUsXHJcbiAgICAgICAgICAgIGFscGhhOiBhbHBoYSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgQ29sb3IuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0NvbG9yXSgjQ29sb3IpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLm51bWJlcihjYW5kaWRhdGUucmVkKVxyXG4gICAgICAgICAgICAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmdyZWVuKVxyXG4gICAgICAgICAgICAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmJsdWUpXHJcbiAgICAgICAgICAgICYmIElzLm51bWJlcihjYW5kaWRhdGUuYWxwaGEpO1xyXG4gICAgfVxyXG4gICAgQ29sb3IuaXMgPSBpcztcclxufSkoQ29sb3IgfHwgKENvbG9yID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb2xvckluZm9ybWF0aW9uIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbQ29sb3JJbmZvcm1hdGlvbl0oI0NvbG9ySW5mb3JtYXRpb24pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb2xvckluZm9ybWF0aW9uO1xyXG4oZnVuY3Rpb24gKENvbG9ySW5mb3JtYXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBDb2xvckluZm9ybWF0aW9uIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShyYW5nZSwgY29sb3IpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgQ29sb3JJbmZvcm1hdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbQ29sb3JJbmZvcm1hdGlvbl0oI0NvbG9ySW5mb3JtYXRpb24pIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIFJhbmdlLmlzKGNhbmRpZGF0ZS5yYW5nZSkgJiYgQ29sb3IuaXMoY2FuZGlkYXRlLmNvbG9yKTtcclxuICAgIH1cclxuICAgIENvbG9ySW5mb3JtYXRpb24uaXMgPSBpcztcclxufSkoQ29sb3JJbmZvcm1hdGlvbiB8fCAoQ29sb3JJbmZvcm1hdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgQ29sb3IgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtDb2xvclByZXNlbnRhdGlvbl0oI0NvbG9yUHJlc2VudGF0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29sb3JQcmVzZW50YXRpb247XHJcbihmdW5jdGlvbiAoQ29sb3JQcmVzZW50YXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBDb2xvckluZm9ybWF0aW9uIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsYWJlbCwgdGV4dEVkaXQsIGFkZGl0aW9uYWxUZXh0RWRpdHMpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICAgIHRleHRFZGl0OiB0ZXh0RWRpdCxcclxuICAgICAgICAgICAgYWRkaXRpb25hbFRleHRFZGl0czogYWRkaXRpb25hbFRleHRFZGl0cyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgQ29sb3JQcmVzZW50YXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0NvbG9ySW5mb3JtYXRpb25dKCNDb2xvckluZm9ybWF0aW9uKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5zdHJpbmcoY2FuZGlkYXRlLmxhYmVsKVxyXG4gICAgICAgICAgICAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS50ZXh0RWRpdCkgfHwgVGV4dEVkaXQuaXMoY2FuZGlkYXRlKSlcclxuICAgICAgICAgICAgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUuYWRkaXRpb25hbFRleHRFZGl0cykgfHwgSXMudHlwZWRBcnJheShjYW5kaWRhdGUuYWRkaXRpb25hbFRleHRFZGl0cywgVGV4dEVkaXQuaXMpKTtcclxuICAgIH1cclxuICAgIENvbG9yUHJlc2VudGF0aW9uLmlzID0gaXM7XHJcbn0pKENvbG9yUHJlc2VudGF0aW9uIHx8IChDb2xvclByZXNlbnRhdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBFbnVtIG9mIGtub3duIHJhbmdlIGtpbmRzXHJcbiAqL1xyXG5leHBvcnQgdmFyIEZvbGRpbmdSYW5nZUtpbmQ7XHJcbihmdW5jdGlvbiAoRm9sZGluZ1JhbmdlS2luZCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb2xkaW5nIHJhbmdlIGZvciBhIGNvbW1lbnRcclxuICAgICAqL1xyXG4gICAgRm9sZGluZ1JhbmdlS2luZFtcIkNvbW1lbnRcIl0gPSBcImNvbW1lbnRcIjtcclxuICAgIC8qKlxyXG4gICAgICogRm9sZGluZyByYW5nZSBmb3IgYSBpbXBvcnRzIG9yIGluY2x1ZGVzXHJcbiAgICAgKi9cclxuICAgIEZvbGRpbmdSYW5nZUtpbmRbXCJJbXBvcnRzXCJdID0gXCJpbXBvcnRzXCI7XHJcbiAgICAvKipcclxuICAgICAqIEZvbGRpbmcgcmFuZ2UgZm9yIGEgcmVnaW9uIChlLmcuIGAjcmVnaW9uYClcclxuICAgICAqL1xyXG4gICAgRm9sZGluZ1JhbmdlS2luZFtcIlJlZ2lvblwiXSA9IFwicmVnaW9uXCI7XHJcbn0pKEZvbGRpbmdSYW5nZUtpbmQgfHwgKEZvbGRpbmdSYW5nZUtpbmQgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIGZvbGRpbmcgcmFuZ2UgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtGb2xkaW5nUmFuZ2VdKCNGb2xkaW5nUmFuZ2UpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBGb2xkaW5nUmFuZ2U7XHJcbihmdW5jdGlvbiAoRm9sZGluZ1JhbmdlKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgRm9sZGluZ1JhbmdlIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShzdGFydExpbmUsIGVuZExpbmUsIHN0YXJ0Q2hhcmFjdGVyLCBlbmRDaGFyYWN0ZXIsIGtpbmQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBzdGFydExpbmU6IHN0YXJ0TGluZSxcclxuICAgICAgICAgICAgZW5kTGluZTogZW5kTGluZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoc3RhcnRDaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydENoYXJhY3RlciA9IHN0YXJ0Q2hhcmFjdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChlbmRDaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5lbmRDaGFyYWN0ZXIgPSBlbmRDaGFyYWN0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKGtpbmQpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5raW5kID0ga2luZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIEZvbGRpbmdSYW5nZS5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbRm9sZGluZ1JhbmdlXSgjRm9sZGluZ1JhbmdlKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5udW1iZXIoY2FuZGlkYXRlLnN0YXJ0TGluZSkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS5zdGFydExpbmUpXHJcbiAgICAgICAgICAgICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLnN0YXJ0Q2hhcmFjdGVyKSB8fCBJcy5udW1iZXIoY2FuZGlkYXRlLnN0YXJ0Q2hhcmFjdGVyKSlcclxuICAgICAgICAgICAgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUuZW5kQ2hhcmFjdGVyKSB8fCBJcy5udW1iZXIoY2FuZGlkYXRlLmVuZENoYXJhY3RlcikpXHJcbiAgICAgICAgICAgICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLmtpbmQpIHx8IElzLnN0cmluZyhjYW5kaWRhdGUua2luZCkpO1xyXG4gICAgfVxyXG4gICAgRm9sZGluZ1JhbmdlLmlzID0gaXM7XHJcbn0pKEZvbGRpbmdSYW5nZSB8fCAoRm9sZGluZ1JhbmdlID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbl0oI0RpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uO1xyXG4oZnVuY3Rpb24gKERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsb2NhdGlvbiwgbWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uXSgjRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIExvY2F0aW9uLmlzKGNhbmRpZGF0ZS5sb2NhdGlvbikgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24uaXMgPSBpcztcclxufSkoRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbiB8fCAoRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgZGlhZ25vc3RpYydzIHNldmVyaXR5LlxyXG4gKi9cclxuZXhwb3J0IHZhciBEaWFnbm9zdGljU2V2ZXJpdHk7XHJcbihmdW5jdGlvbiAoRGlhZ25vc3RpY1NldmVyaXR5KSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydHMgYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIERpYWdub3N0aWNTZXZlcml0eS5FcnJvciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydHMgYSB3YXJuaW5nLlxyXG4gICAgICovXHJcbiAgICBEaWFnbm9zdGljU2V2ZXJpdHkuV2FybmluZyA9IDI7XHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydHMgYW4gaW5mb3JtYXRpb24uXHJcbiAgICAgKi9cclxuICAgIERpYWdub3N0aWNTZXZlcml0eS5JbmZvcm1hdGlvbiA9IDM7XHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydHMgYSBoaW50LlxyXG4gICAgICovXHJcbiAgICBEaWFnbm9zdGljU2V2ZXJpdHkuSGludCA9IDQ7XHJcbn0pKERpYWdub3N0aWNTZXZlcml0eSB8fCAoRGlhZ25vc3RpY1NldmVyaXR5ID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBEaWFnbm9zdGljIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbRGlhZ25vc3RpY10oI0RpYWdub3N0aWMpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBEaWFnbm9zdGljO1xyXG4oZnVuY3Rpb24gKERpYWdub3N0aWMpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBEaWFnbm9zdGljIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShyYW5nZSwgbWVzc2FnZSwgc2V2ZXJpdHksIGNvZGUsIHNvdXJjZSwgcmVsYXRlZEluZm9ybWF0aW9uKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgcmFuZ2U6IHJhbmdlLCBtZXNzYWdlOiBtZXNzYWdlIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoc2V2ZXJpdHkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXZlcml0eSA9IHNldmVyaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChjb2RlKSkge1xyXG4gICAgICAgICAgICByZXN1bHQuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKHNvdXJjZSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQocmVsYXRlZEluZm9ybWF0aW9uKSkge1xyXG4gICAgICAgICAgICByZXN1bHQucmVsYXRlZEluZm9ybWF0aW9uID0gcmVsYXRlZEluZm9ybWF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgRGlhZ25vc3RpYy5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbRGlhZ25vc3RpY10oI0RpYWdub3N0aWMpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKVxyXG4gICAgICAgICAgICAmJiBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpXHJcbiAgICAgICAgICAgICYmIElzLnN0cmluZyhjYW5kaWRhdGUubWVzc2FnZSlcclxuICAgICAgICAgICAgJiYgKElzLm51bWJlcihjYW5kaWRhdGUuc2V2ZXJpdHkpIHx8IElzLnVuZGVmaW5lZChjYW5kaWRhdGUuc2V2ZXJpdHkpKVxyXG4gICAgICAgICAgICAmJiAoSXMubnVtYmVyKGNhbmRpZGF0ZS5jb2RlKSB8fCBJcy5zdHJpbmcoY2FuZGlkYXRlLmNvZGUpIHx8IElzLnVuZGVmaW5lZChjYW5kaWRhdGUuY29kZSkpXHJcbiAgICAgICAgICAgICYmIChJcy5zdHJpbmcoY2FuZGlkYXRlLnNvdXJjZSkgfHwgSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5zb3VyY2UpKVxyXG4gICAgICAgICAgICAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5yZWxhdGVkSW5mb3JtYXRpb24pIHx8IElzLnR5cGVkQXJyYXkoY2FuZGlkYXRlLnJlbGF0ZWRJbmZvcm1hdGlvbiwgRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbi5pcykpO1xyXG4gICAgfVxyXG4gICAgRGlhZ25vc3RpYy5pcyA9IGlzO1xyXG59KShEaWFnbm9zdGljIHx8IChEaWFnbm9zdGljID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb21tYW5kIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbQ29tbWFuZF0oI0NvbW1hbmQpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb21tYW5kO1xyXG4oZnVuY3Rpb24gKENvbW1hbmQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBDb21tYW5kIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0aXRsZSwgY29tbWFuZCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgdGl0bGU6IHRpdGxlLCBjb21tYW5kOiBjb21tYW5kIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoYXJncykgJiYgYXJncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hcmd1bWVudHMgPSBhcmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgQ29tbWFuZC5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbQ29tbWFuZF0oI0NvbW1hbmQpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnRpdGxlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLmNvbW1hbmQpO1xyXG4gICAgfVxyXG4gICAgQ29tbWFuZC5pcyA9IGlzO1xyXG59KShDb21tYW5kIHx8IChDb21tYW5kID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBUZXh0RWRpdCBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSByZXBsYWNlLFxyXG4gKiBpbnNlcnQgYW5kIGRlbGV0ZSBlZGl0cyBtb3JlIGVhc2lseS5cclxuICovXHJcbmV4cG9ydCB2YXIgVGV4dEVkaXQ7XHJcbihmdW5jdGlvbiAoVGV4dEVkaXQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHJlcGxhY2UgdGV4dCBlZGl0LlxyXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSByYW5nZSBvZiB0ZXh0IHRvIGJlIHJlcGxhY2VkLlxyXG4gICAgICogQHBhcmFtIG5ld1RleHQgVGhlIG5ldyB0ZXh0LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZXBsYWNlKHJhbmdlLCBuZXdUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgcmFuZ2U6IHJhbmdlLCBuZXdUZXh0OiBuZXdUZXh0IH07XHJcbiAgICB9XHJcbiAgICBUZXh0RWRpdC5yZXBsYWNlID0gcmVwbGFjZTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGluc2VydCB0ZXh0IGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gVGhlIHBvc2l0aW9uIHRvIGluc2VydCB0aGUgdGV4dCBhdC5cclxuICAgICAqIEBwYXJhbSBuZXdUZXh0IFRoZSB0ZXh0IHRvIGJlIGluc2VydGVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbnNlcnQocG9zaXRpb24sIG5ld1RleHQpIHtcclxuICAgICAgICByZXR1cm4geyByYW5nZTogeyBzdGFydDogcG9zaXRpb24sIGVuZDogcG9zaXRpb24gfSwgbmV3VGV4dDogbmV3VGV4dCB9O1xyXG4gICAgfVxyXG4gICAgVGV4dEVkaXQuaW5zZXJ0ID0gaW5zZXJ0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZGVsZXRlIHRleHQgZWRpdC5cclxuICAgICAqIEBwYXJhbSByYW5nZSBUaGUgcmFuZ2Ugb2YgdGV4dCB0byBiZSBkZWxldGVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBkZWwocmFuZ2UpIHtcclxuICAgICAgICByZXR1cm4geyByYW5nZTogcmFuZ2UsIG5ld1RleHQ6ICcnIH07XHJcbiAgICB9XHJcbiAgICBUZXh0RWRpdC5kZWwgPSBkZWw7XHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMub2JqZWN0TGl0ZXJhbChjYW5kaWRhdGUpXHJcbiAgICAgICAgICAgICYmIElzLnN0cmluZyhjYW5kaWRhdGUubmV3VGV4dClcclxuICAgICAgICAgICAgJiYgUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKTtcclxuICAgIH1cclxuICAgIFRleHRFZGl0LmlzID0gaXM7XHJcbn0pKFRleHRFZGl0IHx8IChUZXh0RWRpdCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgVGV4dERvY3VtZW50RWRpdCBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZVxyXG4gKiBhbiBlZGl0IHRoYXQgbWFuaXB1bGF0ZXMgYSB0ZXh0IGRvY3VtZW50LlxyXG4gKi9cclxuZXhwb3J0IHZhciBUZXh0RG9jdW1lbnRFZGl0O1xyXG4oZnVuY3Rpb24gKFRleHREb2N1bWVudEVkaXQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBgVGV4dERvY3VtZW50RWRpdGBcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHRleHREb2N1bWVudCwgZWRpdHMpIHtcclxuICAgICAgICByZXR1cm4geyB0ZXh0RG9jdW1lbnQ6IHRleHREb2N1bWVudCwgZWRpdHM6IGVkaXRzIH07XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnRFZGl0LmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSlcclxuICAgICAgICAgICAgJiYgVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllci5pcyhjYW5kaWRhdGUudGV4dERvY3VtZW50KVxyXG4gICAgICAgICAgICAmJiBBcnJheS5pc0FycmF5KGNhbmRpZGF0ZS5lZGl0cyk7XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnRFZGl0LmlzID0gaXM7XHJcbn0pKFRleHREb2N1bWVudEVkaXQgfHwgKFRleHREb2N1bWVudEVkaXQgPSB7fSkpO1xyXG5leHBvcnQgdmFyIENyZWF0ZUZpbGU7XHJcbihmdW5jdGlvbiAoQ3JlYXRlRmlsZSkge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHVyaSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICdjcmVhdGUnLFxyXG4gICAgICAgICAgICB1cmk6IHVyaVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT09IHZvaWQgMCAmJiAob3B0aW9ucy5vdmVyd3JpdGUgIT09IHZvaWQgMCB8fCBvcHRpb25zLmlnbm9yZUlmRXhpc3RzICE9PSB2b2lkIDApKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIENyZWF0ZUZpbGUuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSAmJiBjYW5kaWRhdGUua2luZCA9PT0gJ2NyZWF0ZScgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUub3B0aW9ucyA9PT0gdm9pZCAwIHx8XHJcbiAgICAgICAgICAgICAgICAoKGNhbmRpZGF0ZS5vcHRpb25zLm92ZXJ3cml0ZSA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLm9wdGlvbnMub3ZlcndyaXRlKSkgJiYgKGNhbmRpZGF0ZS5vcHRpb25zLmlnbm9yZUlmRXhpc3RzID09PSB2b2lkIDAgfHwgSXMuYm9vbGVhbihjYW5kaWRhdGUub3B0aW9ucy5pZ25vcmVJZkV4aXN0cykpKSk7XHJcbiAgICB9XHJcbiAgICBDcmVhdGVGaWxlLmlzID0gaXM7XHJcbn0pKENyZWF0ZUZpbGUgfHwgKENyZWF0ZUZpbGUgPSB7fSkpO1xyXG5leHBvcnQgdmFyIFJlbmFtZUZpbGU7XHJcbihmdW5jdGlvbiAoUmVuYW1lRmlsZSkge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKG9sZFVyaSwgbmV3VXJpLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAga2luZDogJ3JlbmFtZScsXHJcbiAgICAgICAgICAgIG9sZFVyaTogb2xkVXJpLFxyXG4gICAgICAgICAgICBuZXdVcmk6IG5ld1VyaVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT09IHZvaWQgMCAmJiAob3B0aW9ucy5vdmVyd3JpdGUgIT09IHZvaWQgMCB8fCBvcHRpb25zLmlnbm9yZUlmRXhpc3RzICE9PSB2b2lkIDApKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIFJlbmFtZUZpbGUuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSAmJiBjYW5kaWRhdGUua2luZCA9PT0gJ3JlbmFtZScgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5vbGRVcmkpICYmIElzLnN0cmluZyhjYW5kaWRhdGUubmV3VXJpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLm9wdGlvbnMgPT09IHZvaWQgMCB8fFxyXG4gICAgICAgICAgICAgICAgKChjYW5kaWRhdGUub3B0aW9ucy5vdmVyd3JpdGUgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5vcHRpb25zLm92ZXJ3cml0ZSkpICYmIChjYW5kaWRhdGUub3B0aW9ucy5pZ25vcmVJZkV4aXN0cyA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLm9wdGlvbnMuaWdub3JlSWZFeGlzdHMpKSkpO1xyXG4gICAgfVxyXG4gICAgUmVuYW1lRmlsZS5pcyA9IGlzO1xyXG59KShSZW5hbWVGaWxlIHx8IChSZW5hbWVGaWxlID0ge30pKTtcclxuZXhwb3J0IHZhciBEZWxldGVGaWxlO1xyXG4oZnVuY3Rpb24gKERlbGV0ZUZpbGUpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmksIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBraW5kOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgdXJpOiB1cmlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zICE9PSB2b2lkIDAgJiYgKG9wdGlvbnMucmVjdXJzaXZlICE9PSB2b2lkIDAgfHwgb3B0aW9ucy5pZ25vcmVJZk5vdEV4aXN0cyAhPT0gdm9pZCAwKSkge1xyXG4gICAgICAgICAgICByZXN1bHQub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBEZWxldGVGaWxlLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGUgJiYgY2FuZGlkYXRlLmtpbmQgPT09ICdkZWxldGUnICYmIElzLnN0cmluZyhjYW5kaWRhdGUudXJpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLm9wdGlvbnMgPT09IHZvaWQgMCB8fFxyXG4gICAgICAgICAgICAgICAgKChjYW5kaWRhdGUub3B0aW9ucy5yZWN1cnNpdmUgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5vcHRpb25zLnJlY3Vyc2l2ZSkpICYmIChjYW5kaWRhdGUub3B0aW9ucy5pZ25vcmVJZk5vdEV4aXN0cyA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLm9wdGlvbnMuaWdub3JlSWZOb3RFeGlzdHMpKSkpO1xyXG4gICAgfVxyXG4gICAgRGVsZXRlRmlsZS5pcyA9IGlzO1xyXG59KShEZWxldGVGaWxlIHx8IChEZWxldGVGaWxlID0ge30pKTtcclxuZXhwb3J0IHZhciBXb3Jrc3BhY2VFZGl0O1xyXG4oZnVuY3Rpb24gKFdvcmtzcGFjZUVkaXQpIHtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGUgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5jaGFuZ2VzICE9PSB2b2lkIDAgfHwgY2FuZGlkYXRlLmRvY3VtZW50Q2hhbmdlcyAhPT0gdm9pZCAwKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmRvY3VtZW50Q2hhbmdlcyA9PT0gdm9pZCAwIHx8IGNhbmRpZGF0ZS5kb2N1bWVudENoYW5nZXMuZXZlcnkoZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKElzLnN0cmluZyhjaGFuZ2Uua2luZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3JlYXRlRmlsZS5pcyhjaGFuZ2UpIHx8IFJlbmFtZUZpbGUuaXMoY2hhbmdlKSB8fCBEZWxldGVGaWxlLmlzKGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dERvY3VtZW50RWRpdC5pcyhjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBXb3Jrc3BhY2VFZGl0LmlzID0gaXM7XHJcbn0pKFdvcmtzcGFjZUVkaXQgfHwgKFdvcmtzcGFjZUVkaXQgPSB7fSkpO1xyXG52YXIgVGV4dEVkaXRDaGFuZ2VJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGV4dEVkaXRDaGFuZ2VJbXBsKGVkaXRzKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cyA9IGVkaXRzO1xyXG4gICAgfVxyXG4gICAgVGV4dEVkaXRDaGFuZ2VJbXBsLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAocG9zaXRpb24sIG5ld1RleHQpIHtcclxuICAgICAgICB0aGlzLmVkaXRzLnB1c2goVGV4dEVkaXQuaW5zZXJ0KHBvc2l0aW9uLCBuZXdUZXh0KSk7XHJcbiAgICB9O1xyXG4gICAgVGV4dEVkaXRDaGFuZ2VJbXBsLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKHJhbmdlLCBuZXdUZXh0KSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cy5wdXNoKFRleHRFZGl0LnJlcGxhY2UocmFuZ2UsIG5ld1RleHQpKTtcclxuICAgIH07XHJcbiAgICBUZXh0RWRpdENoYW5nZUltcGwucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xyXG4gICAgICAgIHRoaXMuZWRpdHMucHVzaChUZXh0RWRpdC5kZWwocmFuZ2UpKTtcclxuICAgIH07XHJcbiAgICBUZXh0RWRpdENoYW5nZUltcGwucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlZGl0KSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cy5wdXNoKGVkaXQpO1xyXG4gICAgfTtcclxuICAgIFRleHRFZGl0Q2hhbmdlSW1wbC5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRzO1xyXG4gICAgfTtcclxuICAgIFRleHRFZGl0Q2hhbmdlSW1wbC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cy5zcGxpY2UoMCwgdGhpcy5lZGl0cy5sZW5ndGgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUZXh0RWRpdENoYW5nZUltcGw7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiBBIHdvcmtzcGFjZSBjaGFuZ2UgaGVscHMgY29uc3RydWN0aW5nIGNoYW5nZXMgdG8gYSB3b3Jrc3BhY2UuXHJcbiAqL1xyXG52YXIgV29ya3NwYWNlQ2hhbmdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV29ya3NwYWNlQ2hhbmdlKHdvcmtzcGFjZUVkaXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RleHRFZGl0Q2hhbmdlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgICAgaWYgKHdvcmtzcGFjZUVkaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdCA9IHdvcmtzcGFjZUVkaXQ7XHJcbiAgICAgICAgICAgIGlmICh3b3Jrc3BhY2VFZGl0LmRvY3VtZW50Q2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRleHREb2N1bWVudEVkaXQuaXMoY2hhbmdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dEVkaXRDaGFuZ2UgPSBuZXcgVGV4dEVkaXRDaGFuZ2VJbXBsKGNoYW5nZS5lZGl0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl90ZXh0RWRpdENoYW5nZXNbY2hhbmdlLnRleHREb2N1bWVudC51cmldID0gdGV4dEVkaXRDaGFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAod29ya3NwYWNlRWRpdC5jaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3b3Jrc3BhY2VFZGl0LmNoYW5nZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0RWRpdENoYW5nZSA9IG5ldyBUZXh0RWRpdENoYW5nZUltcGwod29ya3NwYWNlRWRpdC5jaGFuZ2VzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl90ZXh0RWRpdENoYW5nZXNba2V5XSA9IHRleHRFZGl0Q2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV29ya3NwYWNlQ2hhbmdlLnByb3RvdHlwZSwgXCJlZGl0XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSB1bmRlcmx5aW5nIFtXb3Jrc3BhY2VFZGl0XSgjV29ya3NwYWNlRWRpdCkgbGl0ZXJhbFxyXG4gICAgICAgICAqIHVzZSB0byBiZSByZXR1cm5lZCBmcm9tIGEgd29ya3NwYWNlIGVkaXQgb3BlcmF0aW9uIGxpa2UgcmVuYW1lLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd29ya3NwYWNlRWRpdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFdvcmtzcGFjZUNoYW5nZS5wcm90b3R5cGUuZ2V0VGV4dEVkaXRDaGFuZ2UgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgaWYgKFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIuaXMoa2V5KSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dvcmtzcGFjZUVkaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRDaGFuZ2VzOiBbXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dvcmtzcGFjZSBlZGl0IGlzIG5vdCBjb25maWd1cmVkIGZvciBkb2N1bWVudCBjaGFuZ2VzLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0ZXh0RG9jdW1lbnQgPSBrZXk7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl90ZXh0RWRpdENoYW5nZXNbdGV4dERvY3VtZW50LnVyaV07XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWRpdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0RG9jdW1lbnRFZGl0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHREb2N1bWVudDogdGV4dERvY3VtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRzOiBlZGl0c1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzLnB1c2godGV4dERvY3VtZW50RWRpdCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgVGV4dEVkaXRDaGFuZ2VJbXBsKGVkaXRzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHRFZGl0Q2hhbmdlc1t0ZXh0RG9jdW1lbnQudXJpXSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl93b3Jrc3BhY2VFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93b3Jrc3BhY2VFZGl0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXM6IE9iamVjdC5jcmVhdGUobnVsbClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl93b3Jrc3BhY2VFZGl0LmNoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV29ya3NwYWNlIGVkaXQgaXMgbm90IGNvbmZpZ3VyZWQgZm9yIG5vcm1hbCB0ZXh0IGVkaXQgY2hhbmdlcy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fdGV4dEVkaXRDaGFuZ2VzW2tleV07XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWRpdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQuY2hhbmdlc1trZXldID0gZWRpdHM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgVGV4dEVkaXRDaGFuZ2VJbXBsKGVkaXRzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHRFZGl0Q2hhbmdlc1trZXldID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFdvcmtzcGFjZUNoYW5nZS5wcm90b3R5cGUuY3JlYXRlRmlsZSA9IGZ1bmN0aW9uICh1cmksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRG9jdW1lbnRDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMucHVzaChDcmVhdGVGaWxlLmNyZWF0ZSh1cmksIG9wdGlvbnMpKTtcclxuICAgIH07XHJcbiAgICBXb3Jrc3BhY2VDaGFuZ2UucHJvdG90eXBlLnJlbmFtZUZpbGUgPSBmdW5jdGlvbiAob2xkVXJpLCBuZXdVcmksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRG9jdW1lbnRDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMucHVzaChSZW5hbWVGaWxlLmNyZWF0ZShvbGRVcmksIG5ld1VyaSwgb3B0aW9ucykpO1xyXG4gICAgfTtcclxuICAgIFdvcmtzcGFjZUNoYW5nZS5wcm90b3R5cGUuZGVsZXRlRmlsZSA9IGZ1bmN0aW9uICh1cmksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRG9jdW1lbnRDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMucHVzaChEZWxldGVGaWxlLmNyZWF0ZSh1cmksIG9wdGlvbnMpKTtcclxuICAgIH07XHJcbiAgICBXb3Jrc3BhY2VDaGFuZ2UucHJvdG90eXBlLmNoZWNrRG9jdW1lbnRDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fd29ya3NwYWNlRWRpdCB8fCAhdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXb3Jrc3BhY2UgZWRpdCBpcyBub3QgY29uZmlndXJlZCBmb3IgZG9jdW1lbnQgY2hhbmdlcy4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdvcmtzcGFjZUNoYW5nZTtcclxufSgpKTtcclxuZXhwb3J0IHsgV29ya3NwYWNlQ2hhbmdlIH07XHJcbi8qKlxyXG4gKiBUaGUgVGV4dERvY3VtZW50SWRlbnRpZmllciBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW1RleHREb2N1bWVudElkZW50aWZpZXJdKCNUZXh0RG9jdW1lbnRJZGVudGlmaWVyKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgVGV4dERvY3VtZW50SWRlbnRpZmllcjtcclxuKGZ1bmN0aW9uIChUZXh0RG9jdW1lbnRJZGVudGlmaWVyKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgVGV4dERvY3VtZW50SWRlbnRpZmllciBsaXRlcmFsLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgZG9jdW1lbnQncyB1cmkuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmkpIHtcclxuICAgICAgICByZXR1cm4geyB1cmk6IHVyaSB9O1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50SWRlbnRpZmllci5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbVGV4dERvY3VtZW50SWRlbnRpZmllcl0oI1RleHREb2N1bWVudElkZW50aWZpZXIpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnVyaSk7XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnRJZGVudGlmaWVyLmlzID0gaXM7XHJcbn0pKFRleHREb2N1bWVudElkZW50aWZpZXIgfHwgKFRleHREb2N1bWVudElkZW50aWZpZXIgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyXSgjVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllcikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXI7XHJcbihmdW5jdGlvbiAoVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIgbGl0ZXJhbC5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIGRvY3VtZW50J3MgdXJpLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgZG9jdW1lbnQncyB0ZXh0LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodXJpLCB2ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdXJpOiB1cmksIHZlcnNpb246IHZlcnNpb24gfTtcclxuICAgIH1cclxuICAgIFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW1ZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXJdKCNWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpICYmIChjYW5kaWRhdGUudmVyc2lvbiA9PT0gbnVsbCB8fCBJcy5udW1iZXIoY2FuZGlkYXRlLnZlcnNpb24pKTtcclxuICAgIH1cclxuICAgIFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIuaXMgPSBpcztcclxufSkoVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllciB8fCAoVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllciA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgVGV4dERvY3VtZW50SXRlbSBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW1RleHREb2N1bWVudEl0ZW1dKCNUZXh0RG9jdW1lbnRJdGVtKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgVGV4dERvY3VtZW50SXRlbTtcclxuKGZ1bmN0aW9uIChUZXh0RG9jdW1lbnRJdGVtKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgVGV4dERvY3VtZW50SXRlbSBsaXRlcmFsLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgZG9jdW1lbnQncyB1cmkuXHJcbiAgICAgKiBAcGFyYW0gbGFuZ3VhZ2VJZCBUaGUgZG9jdW1lbnQncyBsYW5ndWFnZSBpZGVudGlmaWVyLlxyXG4gICAgICogQHBhcmFtIHZlcnNpb24gVGhlIGRvY3VtZW50J3MgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdGV4dCBUaGUgZG9jdW1lbnQncyB0ZXh0LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodXJpLCBsYW5ndWFnZUlkLCB2ZXJzaW9uLCB0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdXJpOiB1cmksIGxhbmd1YWdlSWQ6IGxhbmd1YWdlSWQsIHZlcnNpb246IHZlcnNpb24sIHRleHQ6IHRleHQgfTtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudEl0ZW0uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW1RleHREb2N1bWVudEl0ZW1dKCNUZXh0RG9jdW1lbnRJdGVtKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpICYmIElzLnN0cmluZyhjYW5kaWRhdGUubGFuZ3VhZ2VJZCkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS52ZXJzaW9uKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnRleHQpO1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50SXRlbS5pcyA9IGlzO1xyXG59KShUZXh0RG9jdW1lbnRJdGVtIHx8IChUZXh0RG9jdW1lbnRJdGVtID0ge30pKTtcclxuLyoqXHJcbiAqIERlc2NyaWJlcyB0aGUgY29udGVudCB0eXBlIHRoYXQgYSBjbGllbnQgc3VwcG9ydHMgaW4gdmFyaW91c1xyXG4gKiByZXN1bHQgbGl0ZXJhbHMgbGlrZSBgSG92ZXJgLCBgUGFyYW1ldGVySW5mb2Agb3IgYENvbXBsZXRpb25JdGVtYC5cclxuICpcclxuICogUGxlYXNlIG5vdGUgdGhhdCBgTWFya3VwS2luZHNgIG11c3Qgbm90IHN0YXJ0IHdpdGggYSBgJGAuIFRoaXMga2luZHNcclxuICogYXJlIHJlc2VydmVkIGZvciBpbnRlcm5hbCB1c2FnZS5cclxuICovXHJcbmV4cG9ydCB2YXIgTWFya3VwS2luZDtcclxuKGZ1bmN0aW9uIChNYXJrdXBLaW5kKSB7XHJcbiAgICAvKipcclxuICAgICAqIFBsYWluIHRleHQgaXMgc3VwcG9ydGVkIGFzIGEgY29udGVudCBmb3JtYXRcclxuICAgICAqL1xyXG4gICAgTWFya3VwS2luZC5QbGFpblRleHQgPSAncGxhaW50ZXh0JztcclxuICAgIC8qKlxyXG4gICAgICogTWFya2Rvd24gaXMgc3VwcG9ydGVkIGFzIGEgY29udGVudCBmb3JtYXRcclxuICAgICAqL1xyXG4gICAgTWFya3VwS2luZC5NYXJrZG93biA9ICdtYXJrZG93bic7XHJcbn0pKE1hcmt1cEtpbmQgfHwgKE1hcmt1cEtpbmQgPSB7fSkpO1xyXG4oZnVuY3Rpb24gKE1hcmt1cEtpbmQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGEgdmFsdWUgb2YgdGhlIFtNYXJrdXBLaW5kXSgjTWFya3VwS2luZCkgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSA9PT0gTWFya3VwS2luZC5QbGFpblRleHQgfHwgY2FuZGlkYXRlID09PSBNYXJrdXBLaW5kLk1hcmtkb3duO1xyXG4gICAgfVxyXG4gICAgTWFya3VwS2luZC5pcyA9IGlzO1xyXG59KShNYXJrdXBLaW5kIHx8IChNYXJrdXBLaW5kID0ge30pKTtcclxuZXhwb3J0IHZhciBNYXJrdXBDb250ZW50O1xyXG4oZnVuY3Rpb24gKE1hcmt1cENvbnRlbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGNvbmZvcm1zIHRvIHRoZSBbTWFya3VwQ29udGVudF0oI01hcmt1cENvbnRlbnQpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLm9iamVjdExpdGVyYWwodmFsdWUpICYmIE1hcmt1cEtpbmQuaXMoY2FuZGlkYXRlLmtpbmQpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTWFya3VwQ29udGVudC5pcyA9IGlzO1xyXG59KShNYXJrdXBDb250ZW50IHx8IChNYXJrdXBDb250ZW50ID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBraW5kIG9mIGEgY29tcGxldGlvbiBlbnRyeS5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29tcGxldGlvbkl0ZW1LaW5kO1xyXG4oZnVuY3Rpb24gKENvbXBsZXRpb25JdGVtS2luZCkge1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlRleHQgPSAxO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLk1ldGhvZCA9IDI7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuRnVuY3Rpb24gPSAzO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkNvbnN0cnVjdG9yID0gNDtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5GaWVsZCA9IDU7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuVmFyaWFibGUgPSA2O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkNsYXNzID0gNztcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5JbnRlcmZhY2UgPSA4O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLk1vZHVsZSA9IDk7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuUHJvcGVydHkgPSAxMDtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Vbml0ID0gMTE7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuVmFsdWUgPSAxMjtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5FbnVtID0gMTM7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuS2V5d29yZCA9IDE0O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlNuaXBwZXQgPSAxNTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Db2xvciA9IDE2O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkZpbGUgPSAxNztcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5SZWZlcmVuY2UgPSAxODtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Gb2xkZXIgPSAxOTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5FbnVtTWVtYmVyID0gMjA7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuQ29uc3RhbnQgPSAyMTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5TdHJ1Y3QgPSAyMjtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5FdmVudCA9IDIzO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLk9wZXJhdG9yID0gMjQ7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuVHlwZVBhcmFtZXRlciA9IDI1O1xyXG59KShDb21wbGV0aW9uSXRlbUtpbmQgfHwgKENvbXBsZXRpb25JdGVtS2luZCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBEZWZpbmVzIHdoZXRoZXIgdGhlIGluc2VydCB0ZXh0IGluIGEgY29tcGxldGlvbiBpdGVtIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhc1xyXG4gKiBwbGFpbiB0ZXh0IG9yIGEgc25pcHBldC5cclxuICovXHJcbmV4cG9ydCB2YXIgSW5zZXJ0VGV4dEZvcm1hdDtcclxuKGZ1bmN0aW9uIChJbnNlcnRUZXh0Rm9ybWF0KSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwcmltYXJ5IHRleHQgdG8gYmUgaW5zZXJ0ZWQgaXMgdHJlYXRlZCBhcyBhIHBsYWluIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgSW5zZXJ0VGV4dEZvcm1hdC5QbGFpblRleHQgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJpbWFyeSB0ZXh0IHRvIGJlIGluc2VydGVkIGlzIHRyZWF0ZWQgYXMgYSBzbmlwcGV0LlxyXG4gICAgICpcclxuICAgICAqIEEgc25pcHBldCBjYW4gZGVmaW5lIHRhYiBzdG9wcyBhbmQgcGxhY2Vob2xkZXJzIHdpdGggYCQxYCwgYCQyYFxyXG4gICAgICogYW5kIGAkezM6Zm9vfWAuIGAkMGAgZGVmaW5lcyB0aGUgZmluYWwgdGFiIHN0b3AsIGl0IGRlZmF1bHRzIHRvXHJcbiAgICAgKiB0aGUgZW5kIG9mIHRoZSBzbmlwcGV0LiBQbGFjZWhvbGRlcnMgd2l0aCBlcXVhbCBpZGVudGlmaWVycyBhcmUgbGlua2VkLFxyXG4gICAgICogdGhhdCBpcyB0eXBpbmcgaW4gb25lIHdpbGwgdXBkYXRlIG90aGVycyB0b28uXHJcbiAgICAgKlxyXG4gICAgICogU2VlIGFsc286IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvdnNjb2RlL2Jsb2IvbWFzdGVyL3NyYy92cy9lZGl0b3IvY29udHJpYi9zbmlwcGV0L2NvbW1vbi9zbmlwcGV0Lm1kXHJcbiAgICAgKi9cclxuICAgIEluc2VydFRleHRGb3JtYXQuU25pcHBldCA9IDI7XHJcbn0pKEluc2VydFRleHRGb3JtYXQgfHwgKEluc2VydFRleHRGb3JtYXQgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvbXBsZXRpb25JdGVtIG5hbWVzcGFjZSBwcm92aWRlcyBmdW5jdGlvbnMgdG8gZGVhbCB3aXRoXHJcbiAqIGNvbXBsZXRpb24gaXRlbXMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvbXBsZXRpb25JdGVtO1xyXG4oZnVuY3Rpb24gKENvbXBsZXRpb25JdGVtKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGNvbXBsZXRpb24gaXRlbSBhbmQgc2VlZCBpdCB3aXRoIGEgbGFiZWwuXHJcbiAgICAgKiBAcGFyYW0gbGFiZWwgVGhlIGNvbXBsZXRpb24gaXRlbSdzIGxhYmVsXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsYWJlbCkge1xyXG4gICAgICAgIHJldHVybiB7IGxhYmVsOiBsYWJlbCB9O1xyXG4gICAgfVxyXG4gICAgQ29tcGxldGlvbkl0ZW0uY3JlYXRlID0gY3JlYXRlO1xyXG59KShDb21wbGV0aW9uSXRlbSB8fCAoQ29tcGxldGlvbkl0ZW0gPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvbXBsZXRpb25MaXN0IG5hbWVzcGFjZSBwcm92aWRlcyBmdW5jdGlvbnMgdG8gZGVhbCB3aXRoXHJcbiAqIGNvbXBsZXRpb24gbGlzdHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvbXBsZXRpb25MaXN0O1xyXG4oZnVuY3Rpb24gKENvbXBsZXRpb25MaXN0KSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29tcGxldGlvbiBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpdGVtcyBUaGUgY29tcGxldGlvbiBpdGVtcy5cclxuICAgICAqIEBwYXJhbSBpc0luY29tcGxldGUgVGhlIGxpc3QgaXMgbm90IGNvbXBsZXRlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUoaXRlbXMsIGlzSW5jb21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiB7IGl0ZW1zOiBpdGVtcyA/IGl0ZW1zIDogW10sIGlzSW5jb21wbGV0ZTogISFpc0luY29tcGxldGUgfTtcclxuICAgIH1cclxuICAgIENvbXBsZXRpb25MaXN0LmNyZWF0ZSA9IGNyZWF0ZTtcclxufSkoQ29tcGxldGlvbkxpc3QgfHwgKENvbXBsZXRpb25MaXN0ID0ge30pKTtcclxuZXhwb3J0IHZhciBNYXJrZWRTdHJpbmc7XHJcbihmdW5jdGlvbiAoTWFya2VkU3RyaW5nKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBtYXJrZWQgc3RyaW5nIGZyb20gcGxhaW4gdGV4dC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGxhaW5UZXh0IFRoZSBwbGFpbiB0ZXh0LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBmcm9tUGxhaW5UZXh0KHBsYWluVGV4dCkge1xyXG4gICAgICAgIHJldHVybiBwbGFpblRleHQucmVwbGFjZSgvW1xcXFxgKl97fVtcXF0oKSMrXFwtLiFdL2csIFwiXFxcXCQmXCIpOyAvLyBlc2NhcGUgbWFya2Rvd24gc3ludGF4IHRva2VuczogaHR0cDovL2RhcmluZ2ZpcmViYWxsLm5ldC9wcm9qZWN0cy9tYXJrZG93bi9zeW50YXgjYmFja3NsYXNoXHJcbiAgICB9XHJcbiAgICBNYXJrZWRTdHJpbmcuZnJvbVBsYWluVGV4dCA9IGZyb21QbGFpblRleHQ7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBjb25mb3JtcyB0byB0aGUgW01hcmtlZFN0cmluZ10oI01hcmtlZFN0cmluZykgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLnN0cmluZyhjYW5kaWRhdGUpIHx8IChJcy5vYmplY3RMaXRlcmFsKGNhbmRpZGF0ZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5sYW5ndWFnZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS52YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgTWFya2VkU3RyaW5nLmlzID0gaXM7XHJcbn0pKE1hcmtlZFN0cmluZyB8fCAoTWFya2VkU3RyaW5nID0ge30pKTtcclxuZXhwb3J0IHZhciBIb3ZlcjtcclxuKGZ1bmN0aW9uIChIb3Zlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgY29uZm9ybXMgdG8gdGhlIFtIb3Zlcl0oI0hvdmVyKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiAhIWNhbmRpZGF0ZSAmJiBJcy5vYmplY3RMaXRlcmFsKGNhbmRpZGF0ZSkgJiYgKE1hcmt1cENvbnRlbnQuaXMoY2FuZGlkYXRlLmNvbnRlbnRzKSB8fFxyXG4gICAgICAgICAgICBNYXJrZWRTdHJpbmcuaXMoY2FuZGlkYXRlLmNvbnRlbnRzKSB8fFxyXG4gICAgICAgICAgICBJcy50eXBlZEFycmF5KGNhbmRpZGF0ZS5jb250ZW50cywgTWFya2VkU3RyaW5nLmlzKSkgJiYgKHZhbHVlLnJhbmdlID09PSB2b2lkIDAgfHwgUmFuZ2UuaXModmFsdWUucmFuZ2UpKTtcclxuICAgIH1cclxuICAgIEhvdmVyLmlzID0gaXM7XHJcbn0pKEhvdmVyIHx8IChIb3ZlciA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgUGFyYW1ldGVySW5mb3JtYXRpb24gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtQYXJhbWV0ZXJJbmZvcm1hdGlvbl0oI1BhcmFtZXRlckluZm9ybWF0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgUGFyYW1ldGVySW5mb3JtYXRpb247XHJcbihmdW5jdGlvbiAoUGFyYW1ldGVySW5mb3JtYXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBwYXJhbWV0ZXIgaW5mb3JtYXRpb24gbGl0ZXJhbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbGFiZWwgQSBsYWJlbCBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gZG9jdW1lbnRhdGlvbiBBIGRvYyBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsYWJlbCwgZG9jdW1lbnRhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudGF0aW9uID8geyBsYWJlbDogbGFiZWwsIGRvY3VtZW50YXRpb246IGRvY3VtZW50YXRpb24gfSA6IHsgbGFiZWw6IGxhYmVsIH07XHJcbiAgICB9XHJcbiAgICBQYXJhbWV0ZXJJbmZvcm1hdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICA7XHJcbn0pKFBhcmFtZXRlckluZm9ybWF0aW9uIHx8IChQYXJhbWV0ZXJJbmZvcm1hdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgU2lnbmF0dXJlSW5mb3JtYXRpb24gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtTaWduYXR1cmVJbmZvcm1hdGlvbl0oI1NpZ25hdHVyZUluZm9ybWF0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgU2lnbmF0dXJlSW5mb3JtYXRpb247XHJcbihmdW5jdGlvbiAoU2lnbmF0dXJlSW5mb3JtYXRpb24pIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsYWJlbCwgZG9jdW1lbnRhdGlvbikge1xyXG4gICAgICAgIHZhciBwYXJhbWV0ZXJzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgbGFiZWw6IGxhYmVsIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoZG9jdW1lbnRhdGlvbikpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRvY3VtZW50YXRpb24gPSBkb2N1bWVudGF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChwYXJhbWV0ZXJzKSkge1xyXG4gICAgICAgICAgICByZXN1bHQucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQucGFyYW1ldGVycyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgU2lnbmF0dXJlSW5mb3JtYXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG59KShTaWduYXR1cmVJbmZvcm1hdGlvbiB8fCAoU2lnbmF0dXJlSW5mb3JtYXRpb24gPSB7fSkpO1xyXG4vKipcclxuICogQSBkb2N1bWVudCBoaWdobGlnaHQga2luZC5cclxuICovXHJcbmV4cG9ydCB2YXIgRG9jdW1lbnRIaWdobGlnaHRLaW5kO1xyXG4oZnVuY3Rpb24gKERvY3VtZW50SGlnaGxpZ2h0S2luZCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHRleHR1YWwgb2NjdXJyZW5jZS5cclxuICAgICAqL1xyXG4gICAgRG9jdW1lbnRIaWdobGlnaHRLaW5kLlRleHQgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkLWFjY2VzcyBvZiBhIHN5bWJvbCwgbGlrZSByZWFkaW5nIGEgdmFyaWFibGUuXHJcbiAgICAgKi9cclxuICAgIERvY3VtZW50SGlnaGxpZ2h0S2luZC5SZWFkID0gMjtcclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUtYWNjZXNzIG9mIGEgc3ltYm9sLCBsaWtlIHdyaXRpbmcgdG8gYSB2YXJpYWJsZS5cclxuICAgICAqL1xyXG4gICAgRG9jdW1lbnRIaWdobGlnaHRLaW5kLldyaXRlID0gMztcclxufSkoRG9jdW1lbnRIaWdobGlnaHRLaW5kIHx8IChEb2N1bWVudEhpZ2hsaWdodEtpbmQgPSB7fSkpO1xyXG4vKipcclxuICogRG9jdW1lbnRIaWdobGlnaHQgbmFtZXNwYWNlIHRvIHByb3ZpZGUgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0RvY3VtZW50SGlnaGxpZ2h0XSgjRG9jdW1lbnRIaWdobGlnaHQpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBEb2N1bWVudEhpZ2hsaWdodDtcclxuKGZ1bmN0aW9uIChEb2N1bWVudEhpZ2hsaWdodCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBEb2N1bWVudEhpZ2hsaWdodCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgVGhlIHJhbmdlIHRoZSBoaWdobGlnaHQgYXBwbGllcyB0by5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHJhbmdlLCBraW5kKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgcmFuZ2U6IHJhbmdlIH07XHJcbiAgICAgICAgaWYgKElzLm51bWJlcihraW5kKSkge1xyXG4gICAgICAgICAgICByZXN1bHQua2luZCA9IGtpbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBEb2N1bWVudEhpZ2hsaWdodC5jcmVhdGUgPSBjcmVhdGU7XHJcbn0pKERvY3VtZW50SGlnaGxpZ2h0IHx8IChEb2N1bWVudEhpZ2hsaWdodCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBBIHN5bWJvbCBraW5kLlxyXG4gKi9cclxuZXhwb3J0IHZhciBTeW1ib2xLaW5kO1xyXG4oZnVuY3Rpb24gKFN5bWJvbEtpbmQpIHtcclxuICAgIFN5bWJvbEtpbmQuRmlsZSA9IDE7XHJcbiAgICBTeW1ib2xLaW5kLk1vZHVsZSA9IDI7XHJcbiAgICBTeW1ib2xLaW5kLk5hbWVzcGFjZSA9IDM7XHJcbiAgICBTeW1ib2xLaW5kLlBhY2thZ2UgPSA0O1xyXG4gICAgU3ltYm9sS2luZC5DbGFzcyA9IDU7XHJcbiAgICBTeW1ib2xLaW5kLk1ldGhvZCA9IDY7XHJcbiAgICBTeW1ib2xLaW5kLlByb3BlcnR5ID0gNztcclxuICAgIFN5bWJvbEtpbmQuRmllbGQgPSA4O1xyXG4gICAgU3ltYm9sS2luZC5Db25zdHJ1Y3RvciA9IDk7XHJcbiAgICBTeW1ib2xLaW5kLkVudW0gPSAxMDtcclxuICAgIFN5bWJvbEtpbmQuSW50ZXJmYWNlID0gMTE7XHJcbiAgICBTeW1ib2xLaW5kLkZ1bmN0aW9uID0gMTI7XHJcbiAgICBTeW1ib2xLaW5kLlZhcmlhYmxlID0gMTM7XHJcbiAgICBTeW1ib2xLaW5kLkNvbnN0YW50ID0gMTQ7XHJcbiAgICBTeW1ib2xLaW5kLlN0cmluZyA9IDE1O1xyXG4gICAgU3ltYm9sS2luZC5OdW1iZXIgPSAxNjtcclxuICAgIFN5bWJvbEtpbmQuQm9vbGVhbiA9IDE3O1xyXG4gICAgU3ltYm9sS2luZC5BcnJheSA9IDE4O1xyXG4gICAgU3ltYm9sS2luZC5PYmplY3QgPSAxOTtcclxuICAgIFN5bWJvbEtpbmQuS2V5ID0gMjA7XHJcbiAgICBTeW1ib2xLaW5kLk51bGwgPSAyMTtcclxuICAgIFN5bWJvbEtpbmQuRW51bU1lbWJlciA9IDIyO1xyXG4gICAgU3ltYm9sS2luZC5TdHJ1Y3QgPSAyMztcclxuICAgIFN5bWJvbEtpbmQuRXZlbnQgPSAyNDtcclxuICAgIFN5bWJvbEtpbmQuT3BlcmF0b3IgPSAyNTtcclxuICAgIFN5bWJvbEtpbmQuVHlwZVBhcmFtZXRlciA9IDI2O1xyXG59KShTeW1ib2xLaW5kIHx8IChTeW1ib2xLaW5kID0ge30pKTtcclxuZXhwb3J0IHZhciBTeW1ib2xJbmZvcm1hdGlvbjtcclxuKGZ1bmN0aW9uIChTeW1ib2xJbmZvcm1hdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHN5bWJvbCBpbmZvcm1hdGlvbiBsaXRlcmFsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0ga2luZCBUaGUga2luZCBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSByYW5nZSBvZiB0aGUgbG9jYXRpb24gb2YgdGhlIHN5bWJvbC5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIHJlc291cmNlIG9mIHRoZSBsb2NhdGlvbiBvZiBzeW1ib2wsIGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IGRvY3VtZW50LlxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lck5hbWUgVGhlIG5hbWUgb2YgdGhlIHN5bWJvbCBjb250YWluaW5nIHRoZSBzeW1ib2wuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShuYW1lLCBraW5kLCByYW5nZSwgdXJpLCBjb250YWluZXJOYW1lKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAga2luZDoga2luZCxcclxuICAgICAgICAgICAgbG9jYXRpb246IHsgdXJpOiB1cmksIHJhbmdlOiByYW5nZSB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY29udGFpbmVyTmFtZSkge1xyXG4gICAgICAgICAgICByZXN1bHQuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lck5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBTeW1ib2xJbmZvcm1hdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbn0pKFN5bWJvbEluZm9ybWF0aW9uIHx8IChTeW1ib2xJbmZvcm1hdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHByb2dyYW1taW5nIGNvbnN0cnVjdHMgbGlrZSB2YXJpYWJsZXMsIGNsYXNzZXMsIGludGVyZmFjZXMgZXRjLlxyXG4gKiB0aGF0IGFwcGVhciBpbiBhIGRvY3VtZW50LiBEb2N1bWVudCBzeW1ib2xzIGNhbiBiZSBoaWVyYXJjaGljYWwgYW5kIHRoZXlcclxuICogaGF2ZSB0d28gcmFuZ2VzOiBvbmUgdGhhdCBlbmNsb3NlcyBpdHMgZGVmaW5pdGlvbiBhbmQgb25lIHRoYXQgcG9pbnRzIHRvXHJcbiAqIGl0cyBtb3N0IGludGVyZXN0aW5nIHJhbmdlLCBlLmcuIHRoZSByYW5nZSBvZiBhbiBpZGVudGlmaWVyLlxyXG4gKi9cclxudmFyIERvY3VtZW50U3ltYm9sID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRG9jdW1lbnRTeW1ib2woKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRG9jdW1lbnRTeW1ib2w7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IERvY3VtZW50U3ltYm9sIH07XHJcbihmdW5jdGlvbiAoRG9jdW1lbnRTeW1ib2wpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzeW1ib2wgaW5mb3JtYXRpb24gbGl0ZXJhbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIGRldGFpbCBUaGUgZGV0YWlsIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0ga2luZCBUaGUga2luZCBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSByYW5nZSBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIHNlbGVjdGlvblJhbmdlIFRoZSBzZWxlY3Rpb25SYW5nZSBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIGNoaWxkcmVuIENoaWxkcmVuIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShuYW1lLCBkZXRhaWwsIGtpbmQsIHJhbmdlLCBzZWxlY3Rpb25SYW5nZSwgY2hpbGRyZW4pIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBkZXRhaWw6IGRldGFpbCxcclxuICAgICAgICAgICAga2luZDoga2luZCxcclxuICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25SYW5nZTogc2VsZWN0aW9uUmFuZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjaGlsZHJlbiAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgRG9jdW1lbnRTeW1ib2wuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0RvY3VtZW50U3ltYm9sXSgjRG9jdW1lbnRTeW1ib2wpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSAmJlxyXG4gICAgICAgICAgICBJcy5zdHJpbmcoY2FuZGlkYXRlLm5hbWUpICYmIElzLm51bWJlcihjYW5kaWRhdGUua2luZCkgJiZcclxuICAgICAgICAgICAgUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKSAmJiBSYW5nZS5pcyhjYW5kaWRhdGUuc2VsZWN0aW9uUmFuZ2UpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuZGV0YWlsID09PSB2b2lkIDAgfHwgSXMuc3RyaW5nKGNhbmRpZGF0ZS5kZXRhaWwpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmRlcHJlY2F0ZWQgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5kZXByZWNhdGVkKSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5jaGlsZHJlbiA9PT0gdm9pZCAwIHx8IEFycmF5LmlzQXJyYXkoY2FuZGlkYXRlLmNoaWxkcmVuKSk7XHJcbiAgICB9XHJcbiAgICBEb2N1bWVudFN5bWJvbC5pcyA9IGlzO1xyXG59KShEb2N1bWVudFN5bWJvbCB8fCAoRG9jdW1lbnRTeW1ib2wgPSB7fSkpO1xyXG4vKipcclxuICogQSBzZXQgb2YgcHJlZGVmaW5lZCBjb2RlIGFjdGlvbiBraW5kc1xyXG4gKi9cclxuZXhwb3J0IHZhciBDb2RlQWN0aW9uS2luZDtcclxuKGZ1bmN0aW9uIChDb2RlQWN0aW9uS2luZCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHF1aWNrZml4IGFjdGlvbnM6ICdxdWlja2ZpeCdcclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuUXVpY2tGaXggPSAncXVpY2tmaXgnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHJlZmFjdG9yaW5nIGFjdGlvbnM6ICdyZWZhY3RvcidcclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuUmVmYWN0b3IgPSAncmVmYWN0b3InO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHJlZmFjdG9yaW5nIGV4dHJhY3Rpb24gYWN0aW9uczogJ3JlZmFjdG9yLmV4dHJhY3QnXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZSBleHRyYWN0IGFjdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogLSBFeHRyYWN0IG1ldGhvZFxyXG4gICAgICogLSBFeHRyYWN0IGZ1bmN0aW9uXHJcbiAgICAgKiAtIEV4dHJhY3QgdmFyaWFibGVcclxuICAgICAqIC0gRXh0cmFjdCBpbnRlcmZhY2UgZnJvbSBjbGFzc1xyXG4gICAgICogLSAuLi5cclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuUmVmYWN0b3JFeHRyYWN0ID0gJ3JlZmFjdG9yLmV4dHJhY3QnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHJlZmFjdG9yaW5nIGlubGluZSBhY3Rpb25zOiAncmVmYWN0b3IuaW5saW5lJ1xyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGUgaW5saW5lIGFjdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogLSBJbmxpbmUgZnVuY3Rpb25cclxuICAgICAqIC0gSW5saW5lIHZhcmlhYmxlXHJcbiAgICAgKiAtIElubGluZSBjb25zdGFudFxyXG4gICAgICogLSAuLi5cclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuUmVmYWN0b3JJbmxpbmUgPSAncmVmYWN0b3IuaW5saW5lJztcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBraW5kIGZvciByZWZhY3RvcmluZyByZXdyaXRlIGFjdGlvbnM6ICdyZWZhY3Rvci5yZXdyaXRlJ1xyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGUgcmV3cml0ZSBhY3Rpb25zOlxyXG4gICAgICpcclxuICAgICAqIC0gQ29udmVydCBKYXZhU2NyaXB0IGZ1bmN0aW9uIHRvIGNsYXNzXHJcbiAgICAgKiAtIEFkZCBvciByZW1vdmUgcGFyYW1ldGVyXHJcbiAgICAgKiAtIEVuY2Fwc3VsYXRlIGZpZWxkXHJcbiAgICAgKiAtIE1ha2UgbWV0aG9kIHN0YXRpY1xyXG4gICAgICogLSBNb3ZlIG1ldGhvZCB0byBiYXNlIGNsYXNzXHJcbiAgICAgKiAtIC4uLlxyXG4gICAgICovXHJcbiAgICBDb2RlQWN0aW9uS2luZC5SZWZhY3RvclJld3JpdGUgPSAncmVmYWN0b3IucmV3cml0ZSc7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2Uga2luZCBmb3Igc291cmNlIGFjdGlvbnM6IGBzb3VyY2VgXHJcbiAgICAgKlxyXG4gICAgICogU291cmNlIGNvZGUgYWN0aW9ucyBhcHBseSB0byB0aGUgZW50aXJlIGZpbGUuXHJcbiAgICAgKi9cclxuICAgIENvZGVBY3Rpb25LaW5kLlNvdXJjZSA9ICdzb3VyY2UnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIGFuIG9yZ2FuaXplIGltcG9ydHMgc291cmNlIGFjdGlvbjogYHNvdXJjZS5vcmdhbml6ZUltcG9ydHNgXHJcbiAgICAgKi9cclxuICAgIENvZGVBY3Rpb25LaW5kLlNvdXJjZU9yZ2FuaXplSW1wb3J0cyA9ICdzb3VyY2Uub3JnYW5pemVJbXBvcnRzJztcclxufSkoQ29kZUFjdGlvbktpbmQgfHwgKENvZGVBY3Rpb25LaW5kID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb2RlQWN0aW9uQ29udGV4dCBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0NvZGVBY3Rpb25Db250ZXh0XSgjQ29kZUFjdGlvbkNvbnRleHQpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb2RlQWN0aW9uQ29udGV4dDtcclxuKGZ1bmN0aW9uIChDb2RlQWN0aW9uQ29udGV4dCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IENvZGVBY3Rpb25Db250ZXh0IGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShkaWFnbm9zdGljcywgb25seSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IGRpYWdub3N0aWNzOiBkaWFnbm9zdGljcyB9O1xyXG4gICAgICAgIGlmIChvbmx5ICE9PSB2b2lkIDAgJiYgb25seSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXN1bHQub25seSA9IG9ubHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBDb2RlQWN0aW9uQ29udGV4dC5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbQ29kZUFjdGlvbkNvbnRleHRdKCNDb2RlQWN0aW9uQ29udGV4dCkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIElzLnR5cGVkQXJyYXkoY2FuZGlkYXRlLmRpYWdub3N0aWNzLCBEaWFnbm9zdGljLmlzKSAmJiAoY2FuZGlkYXRlLm9ubHkgPT09IHZvaWQgMCB8fCBJcy50eXBlZEFycmF5KGNhbmRpZGF0ZS5vbmx5LCBJcy5zdHJpbmcpKTtcclxuICAgIH1cclxuICAgIENvZGVBY3Rpb25Db250ZXh0LmlzID0gaXM7XHJcbn0pKENvZGVBY3Rpb25Db250ZXh0IHx8IChDb2RlQWN0aW9uQ29udGV4dCA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgQ29kZUFjdGlvbjtcclxuKGZ1bmN0aW9uIChDb2RlQWN0aW9uKSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodGl0bGUsIGNvbW1hbmRPckVkaXQsIGtpbmQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0geyB0aXRsZTogdGl0bGUgfTtcclxuICAgICAgICBpZiAoQ29tbWFuZC5pcyhjb21tYW5kT3JFZGl0KSkge1xyXG4gICAgICAgICAgICByZXN1bHQuY29tbWFuZCA9IGNvbW1hbmRPckVkaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQuZWRpdCA9IGNvbW1hbmRPckVkaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChraW5kICE9PSB2b2lkIG51bGwpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmtpbmQgPSBraW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgQ29kZUFjdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlICYmIElzLnN0cmluZyhjYW5kaWRhdGUudGl0bGUpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuZGlhZ25vc3RpY3MgPT09IHZvaWQgMCB8fCBJcy50eXBlZEFycmF5KGNhbmRpZGF0ZS5kaWFnbm9zdGljcywgRGlhZ25vc3RpYy5pcykpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUua2luZCA9PT0gdm9pZCAwIHx8IElzLnN0cmluZyhjYW5kaWRhdGUua2luZCkpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuZWRpdCAhPT0gdm9pZCAwIHx8IGNhbmRpZGF0ZS5jb21tYW5kICE9PSB2b2lkIDApICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuY29tbWFuZCA9PT0gdm9pZCAwIHx8IENvbW1hbmQuaXMoY2FuZGlkYXRlLmNvbW1hbmQpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmVkaXQgPT09IHZvaWQgMCB8fCBXb3Jrc3BhY2VFZGl0LmlzKGNhbmRpZGF0ZS5lZGl0KSk7XHJcbiAgICB9XHJcbiAgICBDb2RlQWN0aW9uLmlzID0gaXM7XHJcbn0pKENvZGVBY3Rpb24gfHwgKENvZGVBY3Rpb24gPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvZGVMZW5zIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbQ29kZUxlbnNdKCNDb2RlTGVucykgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvZGVMZW5zO1xyXG4oZnVuY3Rpb24gKENvZGVMZW5zKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgQ29kZUxlbnMgbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHJhbmdlLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgcmFuZ2U6IHJhbmdlIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoZGF0YSkpXHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgQ29kZUxlbnMuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0NvZGVMZW5zXSgjQ29kZUxlbnMpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLmNvbW1hbmQpIHx8IENvbW1hbmQuaXMoY2FuZGlkYXRlLmNvbW1hbmQpKTtcclxuICAgIH1cclxuICAgIENvZGVMZW5zLmlzID0gaXM7XHJcbn0pKENvZGVMZW5zIHx8IChDb2RlTGVucyA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgRm9ybWF0dGluZ09wdGlvbnMgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtGb3JtYXR0aW5nT3B0aW9uc10oI0Zvcm1hdHRpbmdPcHRpb25zKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgRm9ybWF0dGluZ09wdGlvbnM7XHJcbihmdW5jdGlvbiAoRm9ybWF0dGluZ09wdGlvbnMpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBGb3JtYXR0aW5nT3B0aW9ucyBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodGFiU2l6ZSwgaW5zZXJ0U3BhY2VzKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdGFiU2l6ZTogdGFiU2l6ZSwgaW5zZXJ0U3BhY2VzOiBpbnNlcnRTcGFjZXMgfTtcclxuICAgIH1cclxuICAgIEZvcm1hdHRpbmdPcHRpb25zLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtGb3JtYXR0aW5nT3B0aW9uc10oI0Zvcm1hdHRpbmdPcHRpb25zKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS50YWJTaXplKSAmJiBJcy5ib29sZWFuKGNhbmRpZGF0ZS5pbnNlcnRTcGFjZXMpO1xyXG4gICAgfVxyXG4gICAgRm9ybWF0dGluZ09wdGlvbnMuaXMgPSBpcztcclxufSkoRm9ybWF0dGluZ09wdGlvbnMgfHwgKEZvcm1hdHRpbmdPcHRpb25zID0ge30pKTtcclxuLyoqXHJcbiAqIEEgZG9jdW1lbnQgbGluayBpcyBhIHJhbmdlIGluIGEgdGV4dCBkb2N1bWVudCB0aGF0IGxpbmtzIHRvIGFuIGludGVybmFsIG9yIGV4dGVybmFsIHJlc291cmNlLCBsaWtlIGFub3RoZXJcclxuICogdGV4dCBkb2N1bWVudCBvciBhIHdlYiBzaXRlLlxyXG4gKi9cclxudmFyIERvY3VtZW50TGluayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERvY3VtZW50TGluaygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBEb2N1bWVudExpbms7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IERvY3VtZW50TGluayB9O1xyXG4vKipcclxuICogVGhlIERvY3VtZW50TGluayBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0RvY3VtZW50TGlua10oI0RvY3VtZW50TGluaykgbGl0ZXJhbHMuXHJcbiAqL1xyXG4oZnVuY3Rpb24gKERvY3VtZW50TGluaykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IERvY3VtZW50TGluayBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUocmFuZ2UsIHRhcmdldCwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB7IHJhbmdlOiByYW5nZSwgdGFyZ2V0OiB0YXJnZXQsIGRhdGE6IGRhdGEgfTtcclxuICAgIH1cclxuICAgIERvY3VtZW50TGluay5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbRG9jdW1lbnRMaW5rXSgjRG9jdW1lbnRMaW5rKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKSAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS50YXJnZXQpIHx8IElzLnN0cmluZyhjYW5kaWRhdGUudGFyZ2V0KSk7XHJcbiAgICB9XHJcbiAgICBEb2N1bWVudExpbmsuaXMgPSBpcztcclxufSkoRG9jdW1lbnRMaW5rIHx8IChEb2N1bWVudExpbmsgPSB7fSkpO1xyXG5leHBvcnQgdmFyIEVPTCA9IFsnXFxuJywgJ1xcclxcbicsICdcXHInXTtcclxuZXhwb3J0IHZhciBUZXh0RG9jdW1lbnQ7XHJcbihmdW5jdGlvbiAoVGV4dERvY3VtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgSVRleHREb2N1bWVudCBsaXRlcmFsIGZyb20gdGhlIGdpdmVuIHVyaSBhbmQgY29udGVudC5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIGRvY3VtZW50J3MgdXJpLlxyXG4gICAgICogQHBhcmFtIGxhbmd1YWdlSWQgIFRoZSBkb2N1bWVudCdzIGxhbmd1YWdlIElkLlxyXG4gICAgICogQHBhcmFtIGNvbnRlbnQgVGhlIGRvY3VtZW50J3MgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHVyaSwgbGFuZ3VhZ2VJZCwgdmVyc2lvbiwgY29udGVudCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRnVsbFRleHREb2N1bWVudCh1cmksIGxhbmd1YWdlSWQsIHZlcnNpb24sIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50LmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtJVGV4dERvY3VtZW50XSgjSVRleHREb2N1bWVudCkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudXJpKSAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5sYW5ndWFnZUlkKSB8fCBJcy5zdHJpbmcoY2FuZGlkYXRlLmxhbmd1YWdlSWQpKSAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmxpbmVDb3VudClcclxuICAgICAgICAgICAgJiYgSXMuZnVuYyhjYW5kaWRhdGUuZ2V0VGV4dCkgJiYgSXMuZnVuYyhjYW5kaWRhdGUucG9zaXRpb25BdCkgJiYgSXMuZnVuYyhjYW5kaWRhdGUub2Zmc2V0QXQpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50LmlzID0gaXM7XHJcbiAgICBmdW5jdGlvbiBhcHBseUVkaXRzKGRvY3VtZW50LCBlZGl0cykge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuZ2V0VGV4dCgpO1xyXG4gICAgICAgIHZhciBzb3J0ZWRFZGl0cyA9IG1lcmdlU29ydChlZGl0cywgZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgdmFyIGRpZmYgPSBhLnJhbmdlLnN0YXJ0LmxpbmUgLSBiLnJhbmdlLnN0YXJ0LmxpbmU7XHJcbiAgICAgICAgICAgIGlmIChkaWZmID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5yYW5nZS5zdGFydC5jaGFyYWN0ZXIgLSBiLnJhbmdlLnN0YXJ0LmNoYXJhY3RlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGlmZjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbGFzdE1vZGlmaWVkT2Zmc2V0ID0gdGV4dC5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHNvcnRlZEVkaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gc29ydGVkRWRpdHNbaV07XHJcbiAgICAgICAgICAgIHZhciBzdGFydE9mZnNldCA9IGRvY3VtZW50Lm9mZnNldEF0KGUucmFuZ2Uuc3RhcnQpO1xyXG4gICAgICAgICAgICB2YXIgZW5kT2Zmc2V0ID0gZG9jdW1lbnQub2Zmc2V0QXQoZS5yYW5nZS5lbmQpO1xyXG4gICAgICAgICAgICBpZiAoZW5kT2Zmc2V0IDw9IGxhc3RNb2RpZmllZE9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIHN0YXJ0T2Zmc2V0KSArIGUubmV3VGV4dCArIHRleHQuc3Vic3RyaW5nKGVuZE9mZnNldCwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPdmVybGFwcGluZyBlZGl0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkT2Zmc2V0ID0gc3RhcnRPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50LmFwcGx5RWRpdHMgPSBhcHBseUVkaXRzO1xyXG4gICAgZnVuY3Rpb24gbWVyZ2VTb3J0KGRhdGEsIGNvbXBhcmUpIHtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICAvLyBzb3J0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwID0gKGRhdGEubGVuZ3RoIC8gMikgfCAwO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gZGF0YS5zbGljZSgwLCBwKTtcclxuICAgICAgICB2YXIgcmlnaHQgPSBkYXRhLnNsaWNlKHApO1xyXG4gICAgICAgIG1lcmdlU29ydChsZWZ0LCBjb21wYXJlKTtcclxuICAgICAgICBtZXJnZVNvcnQocmlnaHQsIGNvbXBhcmUpO1xyXG4gICAgICAgIHZhciBsZWZ0SWR4ID0gMDtcclxuICAgICAgICB2YXIgcmlnaHRJZHggPSAwO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB3aGlsZSAobGVmdElkeCA8IGxlZnQubGVuZ3RoICYmIHJpZ2h0SWR4IDwgcmlnaHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXQgPSBjb21wYXJlKGxlZnRbbGVmdElkeF0sIHJpZ2h0W3JpZ2h0SWR4XSk7XHJcbiAgICAgICAgICAgIGlmIChyZXQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc21hbGxlcl9lcXVhbCAtPiB0YWtlIGxlZnQgdG8gcHJlc2VydmUgb3JkZXJcclxuICAgICAgICAgICAgICAgIGRhdGFbaSsrXSA9IGxlZnRbbGVmdElkeCsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGdyZWF0ZXIgLT4gdGFrZSByaWdodFxyXG4gICAgICAgICAgICAgICAgZGF0YVtpKytdID0gcmlnaHRbcmlnaHRJZHgrK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGxlZnRJZHggPCBsZWZ0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkYXRhW2krK10gPSBsZWZ0W2xlZnRJZHgrK107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChyaWdodElkeCA8IHJpZ2h0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkYXRhW2krK10gPSByaWdodFtyaWdodElkeCsrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn0pKFRleHREb2N1bWVudCB8fCAoVGV4dERvY3VtZW50ID0ge30pKTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgcmVhc29ucyB3aHkgYSB0ZXh0IGRvY3VtZW50IGlzIHNhdmVkLlxyXG4gKi9cclxuZXhwb3J0IHZhciBUZXh0RG9jdW1lbnRTYXZlUmVhc29uO1xyXG4oZnVuY3Rpb24gKFRleHREb2N1bWVudFNhdmVSZWFzb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogTWFudWFsbHkgdHJpZ2dlcmVkLCBlLmcuIGJ5IHRoZSB1c2VyIHByZXNzaW5nIHNhdmUsIGJ5IHN0YXJ0aW5nIGRlYnVnZ2luZyxcclxuICAgICAqIG9yIGJ5IGFuIEFQSSBjYWxsLlxyXG4gICAgICovXHJcbiAgICBUZXh0RG9jdW1lbnRTYXZlUmVhc29uLk1hbnVhbCA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIEF1dG9tYXRpYyBhZnRlciBhIGRlbGF5LlxyXG4gICAgICovXHJcbiAgICBUZXh0RG9jdW1lbnRTYXZlUmVhc29uLkFmdGVyRGVsYXkgPSAyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRoZSBlZGl0b3IgbG9zdCBmb2N1cy5cclxuICAgICAqL1xyXG4gICAgVGV4dERvY3VtZW50U2F2ZVJlYXNvbi5Gb2N1c091dCA9IDM7XHJcbn0pKFRleHREb2N1bWVudFNhdmVSZWFzb24gfHwgKFRleHREb2N1bWVudFNhdmVSZWFzb24gPSB7fSkpO1xyXG52YXIgRnVsbFRleHREb2N1bWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZ1bGxUZXh0RG9jdW1lbnQodXJpLCBsYW5ndWFnZUlkLCB2ZXJzaW9uLCBjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fdXJpID0gdXJpO1xyXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlSWQgPSBsYW5ndWFnZUlkO1xyXG4gICAgICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuX2xpbmVPZmZzZXRzID0gbnVsbDtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZSwgXCJ1cmlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLCBcImxhbmd1YWdlSWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VJZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZSwgXCJ2ZXJzaW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZS5nZXRUZXh0ID0gZnVuY3Rpb24gKHJhbmdlKSB7XHJcbiAgICAgICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHRoaXMub2Zmc2V0QXQocmFuZ2Uuc3RhcnQpO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gdGhpcy5vZmZzZXRBdChyYW5nZS5lbmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xyXG4gICAgfTtcclxuICAgIEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChldmVudCwgdmVyc2lvbikge1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBldmVudC50ZXh0O1xyXG4gICAgICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuX2xpbmVPZmZzZXRzID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZS5nZXRMaW5lT2Zmc2V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGluZU9mZnNldHMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGxpbmVPZmZzZXRzID0gW107XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdGhpcy5fY29udGVudDtcclxuICAgICAgICAgICAgdmFyIGlzTGluZVN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMaW5lU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lT2Zmc2V0cy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTGluZVN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgY2ggPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIGlzTGluZVN0YXJ0ID0gKGNoID09PSAnXFxyJyB8fCBjaCA9PT0gJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnXFxyJyAmJiBpICsgMSA8IHRleHQubGVuZ3RoICYmIHRleHQuY2hhckF0KGkgKyAxKSA9PT0gJ1xcbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzTGluZVN0YXJ0ICYmIHRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGluZU9mZnNldHMucHVzaCh0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbGluZU9mZnNldHMgPSBsaW5lT2Zmc2V0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVPZmZzZXRzO1xyXG4gICAgfTtcclxuICAgIEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLnBvc2l0aW9uQXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XHJcbiAgICAgICAgb2Zmc2V0ID0gTWF0aC5tYXgoTWF0aC5taW4ob2Zmc2V0LCB0aGlzLl9jb250ZW50Lmxlbmd0aCksIDApO1xyXG4gICAgICAgIHZhciBsaW5lT2Zmc2V0cyA9IHRoaXMuZ2V0TGluZU9mZnNldHMoKTtcclxuICAgICAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGxpbmVPZmZzZXRzLmxlbmd0aDtcclxuICAgICAgICBpZiAoaGlnaCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zaXRpb24uY3JlYXRlKDAsIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XHJcbiAgICAgICAgICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xyXG4gICAgICAgICAgICBpZiAobGluZU9mZnNldHNbbWlkXSA+IG9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgaGlnaCA9IG1pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbG93IGlzIHRoZSBsZWFzdCB4IGZvciB3aGljaCB0aGUgbGluZSBvZmZzZXQgaXMgbGFyZ2VyIHRoYW4gdGhlIGN1cnJlbnQgb2Zmc2V0XHJcbiAgICAgICAgLy8gb3IgYXJyYXkubGVuZ3RoIGlmIG5vIGxpbmUgb2Zmc2V0IGlzIGxhcmdlciB0aGFuIHRoZSBjdXJyZW50IG9mZnNldFxyXG4gICAgICAgIHZhciBsaW5lID0gbG93IC0gMTtcclxuICAgICAgICByZXR1cm4gUG9zaXRpb24uY3JlYXRlKGxpbmUsIG9mZnNldCAtIGxpbmVPZmZzZXRzW2xpbmVdKTtcclxuICAgIH07XHJcbiAgICBGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZS5vZmZzZXRBdCA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBsaW5lT2Zmc2V0cyA9IHRoaXMuZ2V0TGluZU9mZnNldHMoKTtcclxuICAgICAgICBpZiAocG9zaXRpb24ubGluZSA+PSBsaW5lT2Zmc2V0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwb3NpdGlvbi5saW5lIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxpbmVPZmZzZXQgPSBsaW5lT2Zmc2V0c1twb3NpdGlvbi5saW5lXTtcclxuICAgICAgICB2YXIgbmV4dExpbmVPZmZzZXQgPSAocG9zaXRpb24ubGluZSArIDEgPCBsaW5lT2Zmc2V0cy5sZW5ndGgpID8gbGluZU9mZnNldHNbcG9zaXRpb24ubGluZSArIDFdIDogdGhpcy5fY29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGxpbmVPZmZzZXQgKyBwb3NpdGlvbi5jaGFyYWN0ZXIsIG5leHRMaW5lT2Zmc2V0KSwgbGluZU9mZnNldCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLCBcImxpbmVDb3VudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExpbmVPZmZzZXRzKCkubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEZ1bGxUZXh0RG9jdW1lbnQ7XHJcbn0oKSk7XHJcbnZhciBJcztcclxuKGZ1bmN0aW9uIChJcykge1xyXG4gICAgdmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxuICAgIGZ1bmN0aW9uIGRlZmluZWQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcclxuICAgIH1cclxuICAgIElzLmRlZmluZWQgPSBkZWZpbmVkO1xyXG4gICAgZnVuY3Rpb24gdW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcbiAgICBJcy51bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICBmdW5jdGlvbiBib29sZWFuKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcclxuICAgIH1cclxuICAgIElzLmJvb2xlYW4gPSBib29sZWFuO1xyXG4gICAgZnVuY3Rpb24gc3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcclxuICAgIH1cclxuICAgIElzLnN0cmluZyA9IHN0cmluZztcclxuICAgIGZ1bmN0aW9uIG51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XHJcbiAgICB9XHJcbiAgICBJcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgICBmdW5jdGlvbiBmdW5jKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG4gICAgSXMuZnVuYyA9IGZ1bmM7XHJcbiAgICBmdW5jdGlvbiBvYmplY3RMaXRlcmFsKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gU3RyaWN0bHkgc3BlYWtpbmcgY2xhc3MgaW5zdGFuY2VzIHBhc3MgdGhpcyBjaGVjayBhcyB3ZWxsLiBTaW5jZSB0aGUgTFNQXHJcbiAgICAgICAgLy8gZG9lc24ndCB1c2UgY2xhc3NlcyB3ZSBpZ25vcmUgdGhpcyBmb3Igbm93LiBJZiB3ZSBkbyB3ZSBuZWVkIHRvIGFkZCBzb21ldGhpbmdcclxuICAgICAgICAvLyBsaWtlIHRoaXM6IGBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpKSA9PT0gbnVsbGBcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxuICAgIH1cclxuICAgIElzLm9iamVjdExpdGVyYWwgPSBvYmplY3RMaXRlcmFsO1xyXG4gICAgZnVuY3Rpb24gdHlwZWRBcnJheSh2YWx1ZSwgY2hlY2spIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuZXZlcnkoY2hlY2spO1xyXG4gICAgfVxyXG4gICAgSXMudHlwZWRBcnJheSA9IHR5cGVkQXJyYXk7XHJcbn0pKElzIHx8IChJcyA9IHt9KSk7XHJcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgV29ya2VyTWFuYWdlciB9IGZyb20gJy4vd29ya2VyTWFuYWdlci5qcyc7XG5pbXBvcnQgKiBhcyBsYW5ndWFnZUZlYXR1cmVzIGZyb20gJy4vbGFuZ3VhZ2VGZWF0dXJlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBNb2RlKGRlZmF1bHRzKSB7XG4gICAgdmFyIGNsaWVudCA9IG5ldyBXb3JrZXJNYW5hZ2VyKGRlZmF1bHRzKTtcbiAgICB2YXIgd29ya2VyID0gZnVuY3Rpb24gKGZpcnN0KSB7XG4gICAgICAgIHZhciBtb3JlID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBtb3JlW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGllbnQuZ2V0TGFuZ3VhZ2VTZXJ2aWNlV29ya2VyLmFwcGx5KGNsaWVudCwgW2ZpcnN0XS5jb25jYXQobW9yZSkpO1xuICAgIH07XG4gICAgdmFyIGxhbmd1YWdlSWQgPSBkZWZhdWx0cy5sYW5ndWFnZUlkO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkNvbXBsZXRpb25BZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJIb3ZlclByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkhvdmVyQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRIaWdobGlnaHRQcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Eb2N1bWVudEhpZ2hsaWdodEFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckRlZmluaXRpb25Qcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5EZWZpbml0aW9uQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyUmVmZXJlbmNlUHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuUmVmZXJlbmNlQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRTeW1ib2xQcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Eb2N1bWVudFN5bWJvbEFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlclJlbmFtZVByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlJlbmFtZUFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckNvbG9yUHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRG9jdW1lbnRDb2xvckFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckZvbGRpbmdSYW5nZVByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkZvbGRpbmdSYW5nZUFkYXB0ZXIod29ya2VyKSk7XG4gICAgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRGlhZ25vc3RpY3NBZGFwdGVyKGxhbmd1YWdlSWQsIHdvcmtlciwgZGVmYXVsdHMpO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyBscyBmcm9tICcuL19kZXBzL3ZzY29kZS1sYW5ndWFnZXNlcnZlci10eXBlcy9tYWluLmpzJztcbnZhciBVcmkgPSBtb25hY28uVXJpO1xudmFyIFJhbmdlID0gbW9uYWNvLlJhbmdlO1xuLy8gLS0tIGRpYWdub3N0aWNzIC0tLSAtLS1cbnZhciBEaWFnbm9zdGljc0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlhZ25vc3RpY3NBZGFwdGVyKF9sYW5ndWFnZUlkLCBfd29ya2VyLCBkZWZhdWx0cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9sYW5ndWFnZUlkID0gX2xhbmd1YWdlSWQ7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzID0gW107XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIG9uTW9kZWxBZGQgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBtb2RlSWQgPSBtb2RlbC5nZXRNb2RlSWQoKTtcbiAgICAgICAgICAgIGlmIChtb2RlSWQgIT09IF90aGlzLl9sYW5ndWFnZUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZTtcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lclttb2RlbC51cmkudG9TdHJpbmcoKV0gPSBtb2RlbC5vbkRpZENoYW5nZUNvbnRlbnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2RvVmFsaWRhdGUobW9kZWwudXJpLCBtb2RlSWQpOyB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5fZG9WYWxpZGF0ZShtb2RlbC51cmksIG1vZGVJZCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbk1vZGVsUmVtb3ZlZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9kZWwsIF90aGlzLl9sYW5ndWFnZUlkLCBbXSk7XG4gICAgICAgICAgICB2YXIgdXJpU3RyID0gbW9kZWwudXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfdGhpcy5fbGlzdGVuZXJbdXJpU3RyXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuX2xpc3RlbmVyW3VyaVN0cl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzLnB1c2gobW9uYWNvLmVkaXRvci5vbkRpZENyZWF0ZU1vZGVsKG9uTW9kZWxBZGQpKTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMucHVzaChtb25hY28uZWRpdG9yLm9uV2lsbERpc3Bvc2VNb2RlbChvbk1vZGVsUmVtb3ZlZCkpO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5wdXNoKG1vbmFjby5lZGl0b3Iub25EaWRDaGFuZ2VNb2RlbExhbmd1YWdlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQoZXZlbnQubW9kZWwpO1xuICAgICAgICAgICAgb25Nb2RlbEFkZChldmVudC5tb2RlbCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgZGVmYXVsdHMub25EaWRDaGFuZ2UoZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgIG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9kZWwuZ2V0TW9kZUlkKCkgPT09IF90aGlzLl9sYW5ndWFnZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgb25Nb2RlbEFkZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5wdXNoKHtcbiAgICAgICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gX3RoaXMuX2xpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcltrZXldLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb25hY28uZWRpdG9yLmdldE1vZGVscygpLmZvckVhY2gob25Nb2RlbEFkZCk7XG4gICAgfVxuICAgIERpYWdub3N0aWNzQWRhcHRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCAmJiBkLmRpc3Bvc2UoKTsgfSk7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzID0gW107XG4gICAgfTtcbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLl9kb1ZhbGlkYXRlID0gZnVuY3Rpb24gKHJlc291cmNlLCBsYW5ndWFnZUlkKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmRvVmFsaWRhdGlvbihyZXNvdXJjZS50b1N0cmluZygpKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGlhZ25vc3RpY3MpIHtcbiAgICAgICAgICAgIHZhciBtYXJrZXJzID0gZGlhZ25vc3RpY3MubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiB0b0RpYWdub3N0aWNzKHJlc291cmNlLCBkKTsgfSk7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSBtb25hY28uZWRpdG9yLmdldE1vZGVsKHJlc291cmNlKTtcbiAgICAgICAgICAgIGlmIChtb2RlbC5nZXRNb2RlSWQoKSA9PT0gbGFuZ3VhZ2VJZCkge1xuICAgICAgICAgICAgICAgIG1vbmFjby5lZGl0b3Iuc2V0TW9kZWxNYXJrZXJzKG1vZGVsLCBsYW5ndWFnZUlkLCBtYXJrZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbih1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGlhZ25vc3RpY3NBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IERpYWdub3N0aWNzQWRhcHRlciB9O1xuZnVuY3Rpb24gdG9TZXZlcml0eShsc1NldmVyaXR5KSB7XG4gICAgc3dpdGNoIChsc1NldmVyaXR5KSB7XG4gICAgICAgIGNhc2UgbHMuRGlhZ25vc3RpY1NldmVyaXR5LkVycm9yOiByZXR1cm4gbW9uYWNvLk1hcmtlclNldmVyaXR5LkVycm9yO1xuICAgICAgICBjYXNlIGxzLkRpYWdub3N0aWNTZXZlcml0eS5XYXJuaW5nOiByZXR1cm4gbW9uYWNvLk1hcmtlclNldmVyaXR5Lldhcm5pbmc7XG4gICAgICAgIGNhc2UgbHMuRGlhZ25vc3RpY1NldmVyaXR5LkluZm9ybWF0aW9uOiByZXR1cm4gbW9uYWNvLk1hcmtlclNldmVyaXR5LkluZm87XG4gICAgICAgIGNhc2UgbHMuRGlhZ25vc3RpY1NldmVyaXR5LkhpbnQ6IHJldHVybiBtb25hY28uTWFya2VyU2V2ZXJpdHkuSGludDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBtb25hY28uTWFya2VyU2V2ZXJpdHkuSW5mbztcbiAgICB9XG59XG5mdW5jdGlvbiB0b0RpYWdub3N0aWNzKHJlc291cmNlLCBkaWFnKSB7XG4gICAgdmFyIGNvZGUgPSB0eXBlb2YgZGlhZy5jb2RlID09PSAnbnVtYmVyJyA/IFN0cmluZyhkaWFnLmNvZGUpIDogZGlhZy5jb2RlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldmVyaXR5OiB0b1NldmVyaXR5KGRpYWcuc2V2ZXJpdHkpLFxuICAgICAgICBzdGFydExpbmVOdW1iZXI6IGRpYWcucmFuZ2Uuc3RhcnQubGluZSArIDEsXG4gICAgICAgIHN0YXJ0Q29sdW1uOiBkaWFnLnJhbmdlLnN0YXJ0LmNoYXJhY3RlciArIDEsXG4gICAgICAgIGVuZExpbmVOdW1iZXI6IGRpYWcucmFuZ2UuZW5kLmxpbmUgKyAxLFxuICAgICAgICBlbmRDb2x1bW46IGRpYWcucmFuZ2UuZW5kLmNoYXJhY3RlciArIDEsXG4gICAgICAgIG1lc3NhZ2U6IGRpYWcubWVzc2FnZSxcbiAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgc291cmNlOiBkaWFnLnNvdXJjZVxuICAgIH07XG59XG4vLyAtLS0gY29tcGxldGlvbiAtLS0tLS1cbmZ1bmN0aW9uIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGlmICghcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgcmV0dXJuIHsgY2hhcmFjdGVyOiBwb3NpdGlvbi5jb2x1bW4gLSAxLCBsaW5lOiBwb3NpdGlvbi5saW5lTnVtYmVyIC0gMSB9O1xufVxuZnVuY3Rpb24gZnJvbVJhbmdlKHJhbmdlKSB7XG4gICAgaWYgKCFyYW5nZSkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4geyBzdGFydDogeyBsaW5lOiByYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxLCBjaGFyYWN0ZXI6IHJhbmdlLnN0YXJ0Q29sdW1uIC0gMSB9LCBlbmQ6IHsgbGluZTogcmFuZ2UuZW5kTGluZU51bWJlciAtIDEsIGNoYXJhY3RlcjogcmFuZ2UuZW5kQ29sdW1uIC0gMSB9IH07XG59XG5mdW5jdGlvbiB0b1JhbmdlKHJhbmdlKSB7XG4gICAgaWYgKCFyYW5nZSkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IG1vbmFjby5SYW5nZShyYW5nZS5zdGFydC5saW5lICsgMSwgcmFuZ2Uuc3RhcnQuY2hhcmFjdGVyICsgMSwgcmFuZ2UuZW5kLmxpbmUgKyAxLCByYW5nZS5lbmQuY2hhcmFjdGVyICsgMSk7XG59XG5mdW5jdGlvbiB0b0NvbXBsZXRpb25JdGVtS2luZChraW5kKSB7XG4gICAgdmFyIG1JdGVtS2luZCA9IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5UZXh0OiByZXR1cm4gbUl0ZW1LaW5kLlRleHQ7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLk1ldGhvZDogcmV0dXJuIG1JdGVtS2luZC5NZXRob2Q7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkZ1bmN0aW9uOiByZXR1cm4gbUl0ZW1LaW5kLkZ1bmN0aW9uO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Db25zdHJ1Y3RvcjogcmV0dXJuIG1JdGVtS2luZC5Db25zdHJ1Y3RvcjtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuRmllbGQ6IHJldHVybiBtSXRlbUtpbmQuRmllbGQ7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlZhcmlhYmxlOiByZXR1cm4gbUl0ZW1LaW5kLlZhcmlhYmxlO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5DbGFzczogcmV0dXJuIG1JdGVtS2luZC5DbGFzcztcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuSW50ZXJmYWNlOiByZXR1cm4gbUl0ZW1LaW5kLkludGVyZmFjZTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuTW9kdWxlOiByZXR1cm4gbUl0ZW1LaW5kLk1vZHVsZTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuUHJvcGVydHk6IHJldHVybiBtSXRlbUtpbmQuUHJvcGVydHk7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlVuaXQ6IHJldHVybiBtSXRlbUtpbmQuVW5pdDtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuVmFsdWU6IHJldHVybiBtSXRlbUtpbmQuVmFsdWU7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkVudW06IHJldHVybiBtSXRlbUtpbmQuRW51bTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuS2V5d29yZDogcmV0dXJuIG1JdGVtS2luZC5LZXl3b3JkO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5TbmlwcGV0OiByZXR1cm4gbUl0ZW1LaW5kLlNuaXBwZXQ7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkNvbG9yOiByZXR1cm4gbUl0ZW1LaW5kLkNvbG9yO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5GaWxlOiByZXR1cm4gbUl0ZW1LaW5kLkZpbGU7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlJlZmVyZW5jZTogcmV0dXJuIG1JdGVtS2luZC5SZWZlcmVuY2U7XG4gICAgfVxuICAgIHJldHVybiBtSXRlbUtpbmQuUHJvcGVydHk7XG59XG5mdW5jdGlvbiB0b1RleHRFZGl0KHRleHRFZGl0KSB7XG4gICAgaWYgKCF0ZXh0RWRpdCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByYW5nZTogdG9SYW5nZSh0ZXh0RWRpdC5yYW5nZSksXG4gICAgICAgIHRleHQ6IHRleHRFZGl0Lm5ld1RleHRcbiAgICB9O1xufVxudmFyIENvbXBsZXRpb25BZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbXBsZXRpb25BZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBsZXRpb25BZGFwdGVyLnByb3RvdHlwZSwgXCJ0cmlnZ2VyQ2hhcmFjdGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnICcsICc6J107XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENvbXBsZXRpb25BZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlQ29tcGxldGlvbkl0ZW1zID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY29udGV4dCwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZG9Db21wbGV0ZShyZXNvdXJjZS50b1N0cmluZygpLCBmcm9tUG9zaXRpb24ocG9zaXRpb24pKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHdvcmRJbmZvID0gbW9kZWwuZ2V0V29yZFVudGlsUG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICAgICAgdmFyIHdvcmRSYW5nZSA9IG5ldyBSYW5nZShwb3NpdGlvbi5saW5lTnVtYmVyLCB3b3JkSW5mby5zdGFydENvbHVtbiwgcG9zaXRpb24ubGluZU51bWJlciwgd29yZEluZm8uZW5kQ29sdW1uKTtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGluZm8uaXRlbXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZW50cnkubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGluc2VydFRleHQ6IGVudHJ5Lmluc2VydFRleHQgfHwgZW50cnkubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRUZXh0OiBlbnRyeS5zb3J0VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyVGV4dDogZW50cnkuZmlsdGVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjogZW50cnkuZG9jdW1lbnRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBlbnRyeS5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB3b3JkUmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IHRvQ29tcGxldGlvbkl0ZW1LaW5kKGVudHJ5LmtpbmQpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LnRleHRFZGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmFuZ2UgPSB0b1JhbmdlKGVudHJ5LnRleHRFZGl0LnJhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbnNlcnRUZXh0ID0gZW50cnkudGV4dEVkaXQubmV3VGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmFkZGl0aW9uYWxUZXh0RWRpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRpdGlvbmFsVGV4dEVkaXRzID0gZW50cnkuYWRkaXRpb25hbFRleHRFZGl0cy5tYXAodG9UZXh0RWRpdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pbnNlcnRUZXh0Rm9ybWF0ID09PSBscy5JbnNlcnRUZXh0Rm9ybWF0LlNuaXBwZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbnNlcnRUZXh0UnVsZXMgPSBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUuSW5zZXJ0QXNTbmlwcGV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0luY29tcGxldGU6IGluZm8uaXNJbmNvbXBsZXRlLFxuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBpdGVtc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcGxldGlvbkFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgQ29tcGxldGlvbkFkYXB0ZXIgfTtcbmZ1bmN0aW9uIGlzTWFya3VwQ29udGVudCh0aGluZykge1xuICAgIHJldHVybiB0aGluZyAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0aGluZy5raW5kID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIHRvTWFya2Rvd25TdHJpbmcoZW50cnkpIHtcbiAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGVudHJ5XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChpc01hcmt1cENvbnRlbnQoZW50cnkpKSB7XG4gICAgICAgIGlmIChlbnRyeS5raW5kID09PSAncGxhaW50ZXh0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW50cnkudmFsdWUucmVwbGFjZSgvW1xcXFxgKl97fVtcXF0oKSMrXFwtLiFdL2csICdcXFxcJCYnKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGVudHJ5LnZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnYGBgJyArIGVudHJ5Lmxhbmd1YWdlICsgJ1xcbicgKyBlbnRyeS52YWx1ZSArICdcXG5gYGBcXG4nIH07XG59XG5mdW5jdGlvbiB0b01hcmtlZFN0cmluZ0FycmF5KGNvbnRlbnRzKSB7XG4gICAgaWYgKCFjb250ZW50cykge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50cykpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRzLm1hcCh0b01hcmtkb3duU3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIFt0b01hcmtkb3duU3RyaW5nKGNvbnRlbnRzKV07XG59XG4vLyAtLS0gaG92ZXIgLS0tLS0tXG52YXIgSG92ZXJBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhvdmVyQWRhcHRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIEhvdmVyQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZUhvdmVyID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZG9Ib3ZlcihyZXNvdXJjZS50b1N0cmluZygpLCBmcm9tUG9zaXRpb24ocG9zaXRpb24pKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByYW5nZTogdG9SYW5nZShpbmZvLnJhbmdlKSxcbiAgICAgICAgICAgICAgICBjb250ZW50czogdG9NYXJrZWRTdHJpbmdBcnJheShpbmZvLmNvbnRlbnRzKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSG92ZXJBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IEhvdmVyQWRhcHRlciB9O1xuLy8gLS0tIGRvY3VtZW50IGhpZ2hsaWdodHMgLS0tLS0tXG5mdW5jdGlvbiB0b0RvY3VtZW50SGlnaGxpZ2h0S2luZChraW5kKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgbHMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLlJlYWQ6IHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkRvY3VtZW50SGlnaGxpZ2h0S2luZC5SZWFkO1xuICAgICAgICBjYXNlIGxzLkRvY3VtZW50SGlnaGxpZ2h0S2luZC5Xcml0ZTogcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLldyaXRlO1xuICAgICAgICBjYXNlIGxzLkRvY3VtZW50SGlnaGxpZ2h0S2luZC5UZXh0OiByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLlRleHQ7XG59XG52YXIgRG9jdW1lbnRIaWdobGlnaHRBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvY3VtZW50SGlnaGxpZ2h0QWRhcHRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIERvY3VtZW50SGlnaGxpZ2h0QWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50SGlnaGxpZ2h0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmZpbmREb2N1bWVudEhpZ2hsaWdodHMocmVzb3VyY2UudG9TdHJpbmcoKSwgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICghZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogdG9SYW5nZShlbnRyeS5yYW5nZSksXG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IHRvRG9jdW1lbnRIaWdobGlnaHRLaW5kKGVudHJ5LmtpbmQpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudEhpZ2hsaWdodEFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgRG9jdW1lbnRIaWdobGlnaHRBZGFwdGVyIH07XG4vLyAtLS0gZGVmaW5pdGlvbiAtLS0tLS1cbmZ1bmN0aW9uIHRvTG9jYXRpb24obG9jYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmk6IFVyaS5wYXJzZShsb2NhdGlvbi51cmkpLFxuICAgICAgICByYW5nZTogdG9SYW5nZShsb2NhdGlvbi5yYW5nZSlcbiAgICB9O1xufVxudmFyIERlZmluaXRpb25BZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlZmluaXRpb25BZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRGVmaW5pdGlvbkFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEZWZpbml0aW9uID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZmluZERlZmluaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGlmICghZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbdG9Mb2NhdGlvbihkZWZpbml0aW9uKV07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmluaXRpb25BZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IERlZmluaXRpb25BZGFwdGVyIH07XG4vLyAtLS0gcmVmZXJlbmNlcyAtLS0tLS1cbnZhciBSZWZlcmVuY2VBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlZmVyZW5jZUFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBSZWZlcmVuY2VBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlUmVmZXJlbmNlcyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIGNvbnRleHQsIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmZpbmRSZWZlcmVuY2VzKHJlc291cmNlLnRvU3RyaW5nKCksIGZyb21Qb3NpdGlvbihwb3NpdGlvbikpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAoIWVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZW50cmllcy5tYXAodG9Mb2NhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFJlZmVyZW5jZUFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVmZXJlbmNlQWRhcHRlciB9O1xuLy8gLS0tIHJlbmFtZSAtLS0tLS1cbmZ1bmN0aW9uIHRvV29ya3NwYWNlRWRpdChlZGl0KSB7XG4gICAgaWYgKCFlZGl0IHx8ICFlZGl0LmNoYW5nZXMpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgdmFyIHJlc291cmNlRWRpdHMgPSBbXTtcbiAgICBmb3IgKHZhciB1cmkgaW4gZWRpdC5jaGFuZ2VzKSB7XG4gICAgICAgIHZhciBlZGl0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gZWRpdC5jaGFuZ2VzW3VyaV07IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IF9hW19pXTtcbiAgICAgICAgICAgIGVkaXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHJhbmdlOiB0b1JhbmdlKGUucmFuZ2UpLFxuICAgICAgICAgICAgICAgIHRleHQ6IGUubmV3VGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb3VyY2VFZGl0cy5wdXNoKHsgcmVzb3VyY2U6IFVyaS5wYXJzZSh1cmkpLCBlZGl0czogZWRpdHMgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVkaXRzOiByZXNvdXJjZUVkaXRzXG4gICAgfTtcbn1cbnZhciBSZW5hbWVBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlbmFtZUFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBSZW5hbWVBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlUmVuYW1lRWRpdHMgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCBuZXdOYW1lLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5kb1JlbmFtZShyZXNvdXJjZS50b1N0cmluZygpLCBmcm9tUG9zaXRpb24ocG9zaXRpb24pLCBuZXdOYW1lKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZWRpdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvV29ya3NwYWNlRWRpdChlZGl0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVuYW1lQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBSZW5hbWVBZGFwdGVyIH07XG4vLyAtLS0gZG9jdW1lbnQgc3ltYm9scyAtLS0tLS1cbmZ1bmN0aW9uIHRvU3ltYm9sS2luZChraW5kKSB7XG4gICAgdmFyIG1LaW5kID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuRmlsZTogcmV0dXJuIG1LaW5kLkFycmF5O1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuTW9kdWxlOiByZXR1cm4gbUtpbmQuTW9kdWxlO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuTmFtZXNwYWNlOiByZXR1cm4gbUtpbmQuTmFtZXNwYWNlO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuUGFja2FnZTogcmV0dXJuIG1LaW5kLlBhY2thZ2U7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5DbGFzczogcmV0dXJuIG1LaW5kLkNsYXNzO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuTWV0aG9kOiByZXR1cm4gbUtpbmQuTWV0aG9kO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuUHJvcGVydHk6IHJldHVybiBtS2luZC5Qcm9wZXJ0eTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkZpZWxkOiByZXR1cm4gbUtpbmQuRmllbGQ7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5Db25zdHJ1Y3RvcjogcmV0dXJuIG1LaW5kLkNvbnN0cnVjdG9yO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuRW51bTogcmV0dXJuIG1LaW5kLkVudW07XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5JbnRlcmZhY2U6IHJldHVybiBtS2luZC5JbnRlcmZhY2U7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5GdW5jdGlvbjogcmV0dXJuIG1LaW5kLkZ1bmN0aW9uO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuVmFyaWFibGU6IHJldHVybiBtS2luZC5WYXJpYWJsZTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkNvbnN0YW50OiByZXR1cm4gbUtpbmQuQ29uc3RhbnQ7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5TdHJpbmc6IHJldHVybiBtS2luZC5TdHJpbmc7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5OdW1iZXI6IHJldHVybiBtS2luZC5OdW1iZXI7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5Cb29sZWFuOiByZXR1cm4gbUtpbmQuQm9vbGVhbjtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkFycmF5OiByZXR1cm4gbUtpbmQuQXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBtS2luZC5GdW5jdGlvbjtcbn1cbnZhciBEb2N1bWVudFN5bWJvbEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRTeW1ib2xBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRG9jdW1lbnRTeW1ib2xBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRTeW1ib2xzID0gZnVuY3Rpb24gKG1vZGVsLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikgeyByZXR1cm4gd29ya2VyLmZpbmREb2N1bWVudFN5bWJvbHMocmVzb3VyY2UudG9TdHJpbmcoKSk7IH0pLnRoZW4oZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiAnJyxcbiAgICAgICAgICAgICAgICBjb250YWluZXJOYW1lOiBpdGVtLmNvbnRhaW5lck5hbWUsXG4gICAgICAgICAgICAgICAga2luZDogdG9TeW1ib2xLaW5kKGl0ZW0ua2luZCksXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHRvUmFuZ2UoaXRlbS5sb2NhdGlvbi5yYW5nZSksXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uUmFuZ2U6IHRvUmFuZ2UoaXRlbS5sb2NhdGlvbi5yYW5nZSlcbiAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRG9jdW1lbnRTeW1ib2xBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IERvY3VtZW50U3ltYm9sQWRhcHRlciB9O1xudmFyIERvY3VtZW50Q29sb3JBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvY3VtZW50Q29sb3JBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRG9jdW1lbnRDb2xvckFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudENvbG9ycyA9IGZ1bmN0aW9uIChtb2RlbCwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHsgcmV0dXJuIHdvcmtlci5maW5kRG9jdW1lbnRDb2xvcnMocmVzb3VyY2UudG9TdHJpbmcoKSk7IH0pLnRoZW4oZnVuY3Rpb24gKGluZm9zKSB7XG4gICAgICAgICAgICBpZiAoIWluZm9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZm9zLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogaXRlbS5jb2xvcixcbiAgICAgICAgICAgICAgICByYW5nZTogdG9SYW5nZShpdGVtLnJhbmdlKVxuICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERvY3VtZW50Q29sb3JBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlQ29sb3JQcmVzZW50YXRpb25zID0gZnVuY3Rpb24gKG1vZGVsLCBpbmZvLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikgeyByZXR1cm4gd29ya2VyLmdldENvbG9yUHJlc2VudGF0aW9ucyhyZXNvdXJjZS50b1N0cmluZygpLCBpbmZvLmNvbG9yLCBmcm9tUmFuZ2UoaW5mby5yYW5nZSkpOyB9KS50aGVuKGZ1bmN0aW9uIChwcmVzZW50YXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIXByZXNlbnRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJlc2VudGF0aW9ucy5tYXAoZnVuY3Rpb24gKHByZXNlbnRhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJlc2VudGF0aW9uLmxhYmVsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHByZXNlbnRhdGlvbi50ZXh0RWRpdCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRFZGl0ID0gdG9UZXh0RWRpdChwcmVzZW50YXRpb24udGV4dEVkaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJlc2VudGF0aW9uLmFkZGl0aW9uYWxUZXh0RWRpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRpdGlvbmFsVGV4dEVkaXRzID0gcHJlc2VudGF0aW9uLmFkZGl0aW9uYWxUZXh0RWRpdHMubWFwKHRvVGV4dEVkaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudENvbG9yQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBEb2N1bWVudENvbG9yQWRhcHRlciB9O1xudmFyIEZvbGRpbmdSYW5nZUFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9sZGluZ1JhbmdlQWRhcHRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIEZvbGRpbmdSYW5nZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVGb2xkaW5nUmFuZ2VzID0gZnVuY3Rpb24gKG1vZGVsLCBjb250ZXh0LCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikgeyByZXR1cm4gd29ya2VyLnByb3ZpZGVGb2xkaW5nUmFuZ2VzKHJlc291cmNlLnRvU3RyaW5nKCksIGNvbnRleHQpOyB9KS50aGVuKGZ1bmN0aW9uIChyYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICghcmFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJhbmdlcy5tYXAoZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHJhbmdlLnN0YXJ0TGluZSArIDEsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogcmFuZ2UuZW5kTGluZSArIDFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmFuZ2Uua2luZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmtpbmQgPSB0b0ZvbGRpbmdSYW5nZUtpbmQocmFuZ2Uua2luZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9sZGluZ1JhbmdlQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBGb2xkaW5nUmFuZ2VBZGFwdGVyIH07XG5mdW5jdGlvbiB0b0ZvbGRpbmdSYW5nZUtpbmQoa2luZCkge1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIGxzLkZvbGRpbmdSYW5nZUtpbmQuQ29tbWVudDogcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuRm9sZGluZ1JhbmdlS2luZC5Db21tZW50O1xuICAgICAgICBjYXNlIGxzLkZvbGRpbmdSYW5nZUtpbmQuSW1wb3J0czogcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuRm9sZGluZ1JhbmdlS2luZC5JbXBvcnRzO1xuICAgICAgICBjYXNlIGxzLkZvbGRpbmdSYW5nZUtpbmQuUmVnaW9uOiByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Gb2xkaW5nUmFuZ2VLaW5kLlJlZ2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIHZvaWQgMDtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xudmFyIFNUT1BfV0hFTl9JRExFX0ZPUiA9IDIgKiA2MCAqIDEwMDA7IC8vIDJtaW5cbnZhciBXb3JrZXJNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvcmtlck1hbmFnZXIoZGVmYXVsdHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgdGhpcy5fd29ya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5faWRsZUNoZWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fY2hlY2tJZklkbGUoKTsgfSwgMzAgKiAxMDAwKTtcbiAgICAgICAgdGhpcy5fbGFzdFVzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIgPSB0aGlzLl9kZWZhdWx0cy5vbkRpZENoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fc3RvcFdvcmtlcigpOyB9KTtcbiAgICB9XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX3N0b3BXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2lkbGVDaGVja0ludGVydmFsKTtcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9zdG9wV29ya2VyKCk7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5fY2hlY2tJZklkbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpbWVQYXNzZWRTaW5jZUxhc3RVc2VkID0gRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RVc2VkVGltZTtcbiAgICAgICAgaWYgKHRpbWVQYXNzZWRTaW5jZUxhc3RVc2VkID4gU1RPUF9XSEVOX0lETEVfRk9SKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wV29ya2VyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9nZXRDbGllbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2xhc3RVc2VkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICghdGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBtb25hY28uZWRpdG9yLmNyZWF0ZVdlYldvcmtlcih7XG4gICAgICAgICAgICAgICAgLy8gbW9kdWxlIHRoYXQgZXhwb3J0cyB0aGUgY3JlYXRlKCkgbWV0aG9kIGFuZCByZXR1cm5zIGEgYENTU1dvcmtlcmAgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICBtb2R1bGVJZDogJ3ZzL2xhbmd1YWdlL2Nzcy9jc3NXb3JrZXInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLl9kZWZhdWx0cy5sYW5ndWFnZUlkLFxuICAgICAgICAgICAgICAgIC8vIHBhc3NlZCBpbiB0byB0aGUgY3JlYXRlKCkgbWV0aG9kXG4gICAgICAgICAgICAgICAgY3JlYXRlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZVNldHRpbmdzOiB0aGlzLl9kZWZhdWx0cy5kaWFnbm9zdGljc09wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlSWQ6IHRoaXMuX2RlZmF1bHRzLmxhbmd1YWdlSWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IHRoaXMuX3dvcmtlci5nZXRQcm94eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5nZXRMYW5ndWFnZVNlcnZpY2VXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHJlc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfY2xpZW50O1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Q2xpZW50KCkudGhlbihmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgICAgICBfY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3dvcmtlci53aXRoU3luY2VkUmVzb3VyY2VzKHJlc291cmNlcyk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF9jbGllbnQ7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFdvcmtlck1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgV29ya2VyTWFuYWdlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==