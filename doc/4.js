(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js ***!
  \***********************************************************************************/
/*! exports provided: Adapter, DiagnostcsAdapter, SuggestAdapter, SignatureHelpAdapter, QuickInfoAdapter, OccurrencesAdapter, DefinitionAdapter, ReferenceAdapter, OutlineAdapter, Kind, FormatHelper, FormatAdapter, FormatOnTypeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnostcsAdapter", function() { return DiagnostcsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestAdapter", function() { return SuggestAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpAdapter", function() { return SignatureHelpAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickInfoAdapter", function() { return QuickInfoAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccurrencesAdapter", function() { return OccurrencesAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionAdapter", function() { return DefinitionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceAdapter", function() { return ReferenceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineAdapter", function() { return OutlineAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatHelper", function() { return FormatHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatAdapter", function() { return FormatAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatOnTypeAdapter", function() { return FormatOnTypeAdapter; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Uri = monaco.Uri;
var Range = monaco.Range;
//#region utils copied from typescript to prevent loading the entire typescriptServices ---
var IndentStyle;
(function (IndentStyle) {
    IndentStyle[IndentStyle["None"] = 0] = "None";
    IndentStyle[IndentStyle["Block"] = 1] = "Block";
    IndentStyle[IndentStyle["Smart"] = 2] = "Smart";
})(IndentStyle || (IndentStyle = {}));
function flattenDiagnosticMessageText(messageText, newLine) {
    if (typeof messageText === "string") {
        return messageText;
    }
    else {
        var diagnosticChain = messageText;
        var result = "";
        var indent = 0;
        while (diagnosticChain) {
            if (indent) {
                result += newLine;
                for (var i = 0; i < indent; i++) {
                    result += "  ";
                }
            }
            result += diagnosticChain.messageText;
            indent++;
            diagnosticChain = diagnosticChain.next;
        }
        return result;
    }
}
function displayPartsToString(displayParts) {
    if (displayParts) {
        return displayParts.map(function (displayPart) { return displayPart.text; }).join("");
    }
    return "";
}
//#endregion
var Adapter = /** @class */ (function () {
    function Adapter(_worker) {
        this._worker = _worker;
    }
    Adapter.prototype._positionToOffset = function (uri, position) {
        var model = monaco.editor.getModel(uri);
        return model.getOffsetAt(position);
    };
    Adapter.prototype._offsetToPosition = function (uri, offset) {
        var model = monaco.editor.getModel(uri);
        return model.getPositionAt(offset);
    };
    Adapter.prototype._textSpanToRange = function (uri, span) {
        var p1 = this._offsetToPosition(uri, span.start);
        var p2 = this._offsetToPosition(uri, span.start + span.length);
        var startLineNumber = p1.lineNumber, startColumn = p1.column;
        var endLineNumber = p2.lineNumber, endColumn = p2.column;
        return { startLineNumber: startLineNumber, startColumn: startColumn, endLineNumber: endLineNumber, endColumn: endColumn };
    };
    return Adapter;
}());

// --- diagnostics --- ---
var DiagnostcsAdapter = /** @class */ (function (_super) {
    __extends(DiagnostcsAdapter, _super);
    function DiagnostcsAdapter(_defaults, _selector, worker) {
        var _this = _super.call(this, worker) || this;
        _this._defaults = _defaults;
        _this._selector = _selector;
        _this._disposables = [];
        _this._listener = Object.create(null);
        var onModelAdd = function (model) {
            if (model.getModeId() !== _selector) {
                return;
            }
            var handle;
            var changeSubscription = model.onDidChangeContent(function () {
                clearTimeout(handle);
                handle = setTimeout(function () { return _this._doValidate(model.uri); }, 500);
            });
            _this._listener[model.uri.toString()] = {
                dispose: function () {
                    changeSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            _this._doValidate(model.uri);
        };
        var onModelRemoved = function (model) {
            monaco.editor.setModelMarkers(model, _this._selector, []);
            var key = model.uri.toString();
            if (_this._listener[key]) {
                _this._listener[key].dispose();
                delete _this._listener[key];
            }
        };
        _this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd));
        _this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));
        _this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        _this._disposables.push({
            dispose: function () {
                for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
                    var model = _a[_i];
                    onModelRemoved(model);
                }
            }
        });
        var recomputeDiagostics = function () {
            // redo diagnostics when options change
            for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
                var model = _a[_i];
                onModelRemoved(model);
                onModelAdd(model);
            }
        };
        _this._disposables.push(_this._defaults.onDidChange(recomputeDiagostics));
        _this._disposables.push(_this._defaults.onDidExtraLibsChange(recomputeDiagostics));
        monaco.editor.getModels().forEach(onModelAdd);
        return _this;
    }
    DiagnostcsAdapter.prototype.dispose = function () {
        this._disposables.forEach(function (d) { return d && d.dispose(); });
        this._disposables = [];
    };
    DiagnostcsAdapter.prototype._doValidate = function (resource) {
        var _this = this;
        this._worker(resource).then(function (worker) {
            if (!monaco.editor.getModel(resource)) {
                // model was disposed in the meantime
                return null;
            }
            var promises = [];
            var _a = _this._defaults.getDiagnosticsOptions(), noSyntaxValidation = _a.noSyntaxValidation, noSemanticValidation = _a.noSemanticValidation;
            if (!noSyntaxValidation) {
                promises.push(worker.getSyntacticDiagnostics(resource.toString()));
            }
            if (!noSemanticValidation) {
                promises.push(worker.getSemanticDiagnostics(resource.toString()));
            }
            return Promise.all(promises);
        }).then(function (diagnostics) {
            if (!diagnostics || !monaco.editor.getModel(resource)) {
                // model was disposed in the meantime
                return null;
            }
            var markers = diagnostics
                .reduce(function (p, c) { return c.concat(p); }, [])
                .map(function (d) { return _this._convertDiagnostics(resource, d); });
            monaco.editor.setModelMarkers(monaco.editor.getModel(resource), _this._selector, markers);
        }).then(undefined, function (err) {
            console.error(err);
        });
    };
    DiagnostcsAdapter.prototype._convertDiagnostics = function (resource, diag) {
        var _a = this._offsetToPosition(resource, diag.start), startLineNumber = _a.lineNumber, startColumn = _a.column;
        var _b = this._offsetToPosition(resource, diag.start + diag.length), endLineNumber = _b.lineNumber, endColumn = _b.column;
        return {
            severity: monaco.MarkerSeverity.Error,
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn,
            message: flattenDiagnosticMessageText(diag.messageText, '\n')
        };
    };
    return DiagnostcsAdapter;
}(Adapter));

var SuggestAdapter = /** @class */ (function (_super) {
    __extends(SuggestAdapter, _super);
    function SuggestAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SuggestAdapter.prototype, "triggerCharacters", {
        get: function () {
            return ['.'];
        },
        enumerable: true,
        configurable: true
    });
    SuggestAdapter.prototype.provideCompletionItems = function (model, position, _context, token) {
        var wordInfo = model.getWordUntilPosition(position);
        var wordRange = new Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
        var resource = model.uri;
        var offset = this._positionToOffset(resource, position);
        return this._worker(resource).then(function (worker) {
            return worker.getCompletionsAtPosition(resource.toString(), offset);
        }).then(function (info) {
            if (!info) {
                return;
            }
            var suggestions = info.entries.map(function (entry) {
                var range = wordRange;
                if (entry.replacementSpan) {
                    var p1 = model.getPositionAt(entry.replacementSpan.start);
                    var p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                    range = new Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
                }
                return {
                    uri: resource,
                    position: position,
                    range: range,
                    label: entry.name,
                    insertText: entry.name,
                    sortText: entry.sortText,
                    kind: SuggestAdapter.convertKind(entry.kind)
                };
            });
            return {
                suggestions: suggestions
            };
        });
    };
    SuggestAdapter.prototype.resolveCompletionItem = function (_model, _position, item, token) {
        var _this = this;
        var myItem = item;
        var resource = myItem.uri;
        var position = myItem.position;
        return this._worker(resource).then(function (worker) {
            return worker.getCompletionEntryDetails(resource.toString(), _this._positionToOffset(resource, position), myItem.label);
        }).then(function (details) {
            if (!details) {
                return myItem;
            }
            return {
                uri: resource,
                position: position,
                label: details.name,
                kind: SuggestAdapter.convertKind(details.kind),
                detail: displayPartsToString(details.displayParts),
                documentation: {
                    value: displayPartsToString(details.documentation)
                }
            };
        });
    };
    SuggestAdapter.convertKind = function (kind) {
        switch (kind) {
            case Kind.primitiveType:
            case Kind.keyword:
                return monaco.languages.CompletionItemKind.Keyword;
            case Kind.variable:
            case Kind.localVariable:
                return monaco.languages.CompletionItemKind.Variable;
            case Kind.memberVariable:
            case Kind.memberGetAccessor:
            case Kind.memberSetAccessor:
                return monaco.languages.CompletionItemKind.Field;
            case Kind.function:
            case Kind.memberFunction:
            case Kind.constructSignature:
            case Kind.callSignature:
            case Kind.indexSignature:
                return monaco.languages.CompletionItemKind.Function;
            case Kind.enum:
                return monaco.languages.CompletionItemKind.Enum;
            case Kind.module:
                return monaco.languages.CompletionItemKind.Module;
            case Kind.class:
                return monaco.languages.CompletionItemKind.Class;
            case Kind.interface:
                return monaco.languages.CompletionItemKind.Interface;
            case Kind.warning:
                return monaco.languages.CompletionItemKind.File;
        }
        return monaco.languages.CompletionItemKind.Property;
    };
    return SuggestAdapter;
}(Adapter));

var SignatureHelpAdapter = /** @class */ (function (_super) {
    __extends(SignatureHelpAdapter, _super);
    function SignatureHelpAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signatureHelpTriggerCharacters = ['(', ','];
        return _this;
    }
    SignatureHelpAdapter.prototype.provideSignatureHelp = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.getSignatureHelpItems(resource.toString(), _this._positionToOffset(resource, position)); }).then(function (info) {
            if (!info) {
                return;
            }
            var ret = {
                activeSignature: info.selectedItemIndex,
                activeParameter: info.argumentIndex,
                signatures: []
            };
            info.items.forEach(function (item) {
                var signature = {
                    label: '',
                    documentation: null,
                    parameters: []
                };
                signature.label += displayPartsToString(item.prefixDisplayParts);
                item.parameters.forEach(function (p, i, a) {
                    var label = displayPartsToString(p.displayParts);
                    var parameter = {
                        label: label,
                        documentation: displayPartsToString(p.documentation)
                    };
                    signature.label += label;
                    signature.parameters.push(parameter);
                    if (i < a.length - 1) {
                        signature.label += displayPartsToString(item.separatorDisplayParts);
                    }
                });
                signature.label += displayPartsToString(item.suffixDisplayParts);
                ret.signatures.push(signature);
            });
            return ret;
        });
    };
    return SignatureHelpAdapter;
}(Adapter));

// --- hover ------
var QuickInfoAdapter = /** @class */ (function (_super) {
    __extends(QuickInfoAdapter, _super);
    function QuickInfoAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickInfoAdapter.prototype.provideHover = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getQuickInfoAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (info) {
            if (!info) {
                return;
            }
            var documentation = displayPartsToString(info.documentation);
            var tags = info.tags ? info.tags.map(function (tag) {
                var label = "*@" + tag.name + "*";
                if (!tag.text) {
                    return label;
                }
                return label + (tag.text.match(/\r\n|\n/g) ? ' \n' + tag.text : " - " + tag.text);
            })
                .join('  \n\n') : '';
            var contents = displayPartsToString(info.displayParts);
            return {
                range: _this._textSpanToRange(resource, info.textSpan),
                contents: [{
                        value: '```js\n' + contents + '\n```\n'
                    }, {
                        value: documentation + (tags ? '\n\n' + tags : '')
                    }]
            };
        });
    };
    return QuickInfoAdapter;
}(Adapter));

// --- occurrences ------
var OccurrencesAdapter = /** @class */ (function (_super) {
    __extends(OccurrencesAdapter, _super);
    function OccurrencesAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OccurrencesAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getOccurrencesAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            return entries.map(function (entry) {
                return {
                    range: _this._textSpanToRange(resource, entry.textSpan),
                    kind: entry.isWriteAccess ? monaco.languages.DocumentHighlightKind.Write : monaco.languages.DocumentHighlightKind.Text
                };
            });
        });
    };
    return OccurrencesAdapter;
}(Adapter));

// --- definition ------
var DefinitionAdapter = /** @class */ (function (_super) {
    __extends(DefinitionAdapter, _super);
    function DefinitionAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinitionAdapter.prototype.provideDefinition = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getDefinitionAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            var result = [];
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                var uri = Uri.parse(entry.fileName);
                if (monaco.editor.getModel(uri)) {
                    result.push({
                        uri: uri,
                        range: _this._textSpanToRange(uri, entry.textSpan)
                    });
                }
            }
            return result;
        });
    };
    return DefinitionAdapter;
}(Adapter));

// --- references ------
var ReferenceAdapter = /** @class */ (function (_super) {
    __extends(ReferenceAdapter, _super);
    function ReferenceAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReferenceAdapter.prototype.provideReferences = function (model, position, context, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getReferencesAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            var result = [];
            for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
                var entry = entries_2[_i];
                var uri = Uri.parse(entry.fileName);
                if (monaco.editor.getModel(uri)) {
                    result.push({
                        uri: uri,
                        range: _this._textSpanToRange(uri, entry.textSpan)
                    });
                }
            }
            return result;
        });
    };
    return ReferenceAdapter;
}(Adapter));

// --- outline ------
var OutlineAdapter = /** @class */ (function (_super) {
    __extends(OutlineAdapter, _super);
    function OutlineAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlineAdapter.prototype.provideDocumentSymbols = function (model, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.getNavigationBarItems(resource.toString()); }).then(function (items) {
            if (!items) {
                return;
            }
            var convert = function (bucket, item, containerLabel) {
                var result = {
                    name: item.text,
                    detail: '',
                    kind: (outlineTypeTable[item.kind] || monaco.languages.SymbolKind.Variable),
                    range: _this._textSpanToRange(resource, item.spans[0]),
                    selectionRange: _this._textSpanToRange(resource, item.spans[0]),
                    containerName: containerLabel
                };
                if (item.childItems && item.childItems.length > 0) {
                    for (var _i = 0, _a = item.childItems; _i < _a.length; _i++) {
                        var child = _a[_i];
                        convert(bucket, child, result.name);
                    }
                }
                bucket.push(result);
            };
            var result = [];
            items.forEach(function (item) { return convert(result, item); });
            return result;
        });
    };
    return OutlineAdapter;
}(Adapter));

var Kind = /** @class */ (function () {
    function Kind() {
    }
    Kind.unknown = '';
    Kind.keyword = 'keyword';
    Kind.script = 'script';
    Kind.module = 'module';
    Kind.class = 'class';
    Kind.interface = 'interface';
    Kind.type = 'type';
    Kind.enum = 'enum';
    Kind.variable = 'var';
    Kind.localVariable = 'local var';
    Kind.function = 'function';
    Kind.localFunction = 'local function';
    Kind.memberFunction = 'method';
    Kind.memberGetAccessor = 'getter';
    Kind.memberSetAccessor = 'setter';
    Kind.memberVariable = 'property';
    Kind.constructorImplementation = 'constructor';
    Kind.callSignature = 'call';
    Kind.indexSignature = 'index';
    Kind.constructSignature = 'construct';
    Kind.parameter = 'parameter';
    Kind.typeParameter = 'type parameter';
    Kind.primitiveType = 'primitive type';
    Kind.label = 'label';
    Kind.alias = 'alias';
    Kind.const = 'const';
    Kind.let = 'let';
    Kind.warning = 'warning';
    return Kind;
}());

var outlineTypeTable = Object.create(null);
outlineTypeTable[Kind.module] = monaco.languages.SymbolKind.Module;
outlineTypeTable[Kind.class] = monaco.languages.SymbolKind.Class;
outlineTypeTable[Kind.enum] = monaco.languages.SymbolKind.Enum;
outlineTypeTable[Kind.interface] = monaco.languages.SymbolKind.Interface;
outlineTypeTable[Kind.memberFunction] = monaco.languages.SymbolKind.Method;
outlineTypeTable[Kind.memberVariable] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberGetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberSetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.const] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.localVariable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.function] = monaco.languages.SymbolKind.Function;
outlineTypeTable[Kind.localFunction] = monaco.languages.SymbolKind.Function;
// --- formatting ----
var FormatHelper = /** @class */ (function (_super) {
    __extends(FormatHelper, _super);
    function FormatHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatHelper._convertOptions = function (options) {
        return {
            ConvertTabsToSpaces: options.insertSpaces,
            TabSize: options.tabSize,
            IndentSize: options.tabSize,
            IndentStyle: IndentStyle.Smart,
            NewLineCharacter: '\n',
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
            PlaceOpenBraceOnNewLineForFunctions: false
        };
    };
    FormatHelper.prototype._convertTextChanges = function (uri, change) {
        return {
            text: change.newText,
            range: this._textSpanToRange(uri, change.span)
        };
    };
    return FormatHelper;
}(Adapter));

var FormatAdapter = /** @class */ (function (_super) {
    __extends(FormatAdapter, _super);
    function FormatAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatAdapter.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getFormattingEditsForRange(resource.toString(), _this._positionToOffset(resource, { lineNumber: range.startLineNumber, column: range.startColumn }), _this._positionToOffset(resource, { lineNumber: range.endLineNumber, column: range.endColumn }), FormatHelper._convertOptions(options));
        }).then(function (edits) {
            if (edits) {
                return edits.map(function (edit) { return _this._convertTextChanges(resource, edit); });
            }
        });
    };
    return FormatAdapter;
}(FormatHelper));

var FormatOnTypeAdapter = /** @class */ (function (_super) {
    __extends(FormatOnTypeAdapter, _super);
    function FormatOnTypeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormatOnTypeAdapter.prototype, "autoFormatTriggerCharacters", {
        get: function () {
            return [';', '}', '\n'];
        },
        enumerable: true,
        configurable: true
    });
    FormatOnTypeAdapter.prototype.provideOnTypeFormattingEdits = function (model, position, ch, options, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getFormattingEditsAfterKeystroke(resource.toString(), _this._positionToOffset(resource, position), ch, FormatHelper._convertOptions(options));
        }).then(function (edits) {
            if (edits) {
                return edits.map(function (edit) { return _this._convertTextChanges(resource, edit); });
            }
        });
    };
    return FormatOnTypeAdapter;
}(FormatHelper));



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":
/*!*************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js ***!
  \*************************************************************************/
/*! exports provided: setupTypeScript, setupJavaScript, getJavaScriptWorker, getTypeScriptWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTypeScript", function() { return setupTypeScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupJavaScript", function() { return setupJavaScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJavaScriptWorker", function() { return getJavaScriptWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeScriptWorker", function() { return getTypeScriptWorker; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var javaScriptWorker;
var typeScriptWorker;
function setupTypeScript(defaults) {
    typeScriptWorker = setupMode(defaults, 'typescript');
}
function setupJavaScript(defaults) {
    javaScriptWorker = setupMode(defaults, 'javascript');
}
function getJavaScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!javaScriptWorker) {
            return reject("JavaScript not registered!");
        }
        resolve(javaScriptWorker);
    });
}
function getTypeScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!typeScriptWorker) {
            return reject("TypeScript not registered!");
        }
        resolve(typeScriptWorker);
    });
}
function setupMode(defaults, modeId) {
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](modeId, defaults);
    var worker = function (first) {
        var more = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            more[_i - 1] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, [first].concat(more));
    };
    monaco.languages.registerCompletionItemProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SuggestAdapter"](worker));
    monaco.languages.registerSignatureHelpProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SignatureHelpAdapter"](worker));
    monaco.languages.registerHoverProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["QuickInfoAdapter"](worker));
    monaco.languages.registerDocumentHighlightProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OccurrencesAdapter"](worker));
    monaco.languages.registerDefinitionProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DefinitionAdapter"](worker));
    monaco.languages.registerReferenceProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["ReferenceAdapter"](worker));
    monaco.languages.registerDocumentSymbolProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OutlineAdapter"](worker));
    monaco.languages.registerDocumentRangeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatAdapter"](worker));
    monaco.languages.registerOnTypeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatOnTypeAdapter"](worker));
    new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnostcsAdapter"](defaults, modeId, worker);
    return worker;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js ***!
  \********************************************************************************/
/*! exports provided: WorkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerManager", function() { return WorkerManager; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var WorkerManager = /** @class */ (function () {
    function WorkerManager(modeId, defaults) {
        var _this = this;
        this._modeId = modeId;
        this._defaults = defaults;
        this._worker = null;
        this._idleCheckInterval = setInterval(function () { return _this._checkIfIdle(); }, 30 * 1000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
        this._updateExtraLibsToken = 0;
        this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(function () { return _this._updateExtraLibs(); });
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
        this._extraLibsChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._updateExtraLibs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myToken, proxy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._worker) {
                            return [2 /*return*/];
                        }
                        myToken = ++this._updateExtraLibsToken;
                        return [4 /*yield*/, this._worker.getProxy()];
                    case 1:
                        proxy = _a.sent();
                        if (this._updateExtraLibsToken !== myToken) {
                            // avoid multiple calls
                            return [2 /*return*/];
                        }
                        proxy.updateExtraLibs(this._defaults.getExtraLibs());
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkerManager.prototype._checkIfIdle = function () {
        if (!this._worker) {
            return;
        }
        var maxIdleTime = this._defaults.getWorkerMaxIdleTime();
        var timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (maxIdleTime > 0 && timePassedSinceLastUsed > maxIdleTime) {
            this._stopWorker();
        }
    };
    WorkerManager.prototype._getClient = function () {
        var _this = this;
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = monaco.editor.createWebWorker({
                // module that exports the create() method and returns a `TypeScriptWorker` instance
                moduleId: 'vs/language/typescript/tsWorker',
                label: this._modeId,
                // passed in to the create() method
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs()
                }
            });
            var p = this._worker.getProxy();
            if (this._defaults.getEagerModelSync()) {
                p = p.then(function (worker) {
                    return _this._worker.withSyncedResources(monaco.editor.getModels()
                        .filter(function (model) { return model.getModeId() === _this._modeId; })
                        .map(function (model) { return model.uri; }));
                });
            }
            this._client = p;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC9sYW5ndWFnZUZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS90eXBlc2NyaXB0L3RzTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC93b3JrZXJNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QseUJBQXlCLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hC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RUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCw2QkFBNkIsRUFBRTtBQUMxRjtBQUNBLDZFQUE2RSw0QkFBNEIsRUFBRTtBQUMzRztBQUNBLHlGQUF5RixpQ0FBaUMsRUFBRTtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDRDQUE0QyxFQUFFO0FBQ2hHLCtDQUErQyxrQkFBa0IsRUFBRTtBQUNuRSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMscUJBQXFCLGdCQUFnQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQSxDQUFDO0FBQ3dCIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIFVyaSA9IG1vbmFjby5Vcmk7XG52YXIgUmFuZ2UgPSBtb25hY28uUmFuZ2U7XG4vLyNyZWdpb24gdXRpbHMgY29waWVkIGZyb20gdHlwZXNjcmlwdCB0byBwcmV2ZW50IGxvYWRpbmcgdGhlIGVudGlyZSB0eXBlc2NyaXB0U2VydmljZXMgLS0tXG52YXIgSW5kZW50U3R5bGU7XG4oZnVuY3Rpb24gKEluZGVudFN0eWxlKSB7XG4gICAgSW5kZW50U3R5bGVbSW5kZW50U3R5bGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICBJbmRlbnRTdHlsZVtJbmRlbnRTdHlsZVtcIkJsb2NrXCJdID0gMV0gPSBcIkJsb2NrXCI7XG4gICAgSW5kZW50U3R5bGVbSW5kZW50U3R5bGVbXCJTbWFydFwiXSA9IDJdID0gXCJTbWFydFwiO1xufSkoSW5kZW50U3R5bGUgfHwgKEluZGVudFN0eWxlID0ge30pKTtcbmZ1bmN0aW9uIGZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQobWVzc2FnZVRleHQsIG5ld0xpbmUpIHtcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2VUZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlVGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkaWFnbm9zdGljQ2hhaW4gPSBtZXNzYWdlVGV4dDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciBpbmRlbnQgPSAwO1xuICAgICAgICB3aGlsZSAoZGlhZ25vc3RpY0NoYWluKSB7XG4gICAgICAgICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IG5ld0xpbmU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRlbnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIgIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCArPSBkaWFnbm9zdGljQ2hhaW4ubWVzc2FnZVRleHQ7XG4gICAgICAgICAgICBpbmRlbnQrKztcbiAgICAgICAgICAgIGRpYWdub3N0aWNDaGFpbiA9IGRpYWdub3N0aWNDaGFpbi5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGxheVBhcnRzVG9TdHJpbmcoZGlzcGxheVBhcnRzKSB7XG4gICAgaWYgKGRpc3BsYXlQYXJ0cykge1xuICAgICAgICByZXR1cm4gZGlzcGxheVBhcnRzLm1hcChmdW5jdGlvbiAoZGlzcGxheVBhcnQpIHsgcmV0dXJuIGRpc3BsYXlQYXJ0LnRleHQ7IH0pLmpvaW4oXCJcIik7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuLy8jZW5kcmVnaW9uXG52YXIgQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgQWRhcHRlci5wcm90b3R5cGUuX3Bvc2l0aW9uVG9PZmZzZXQgPSBmdW5jdGlvbiAodXJpLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgbW9kZWwgPSBtb25hY28uZWRpdG9yLmdldE1vZGVsKHVyaSk7XG4gICAgICAgIHJldHVybiBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XG4gICAgfTtcbiAgICBBZGFwdGVyLnByb3RvdHlwZS5fb2Zmc2V0VG9Qb3NpdGlvbiA9IGZ1bmN0aW9uICh1cmksIG9mZnNldCkge1xuICAgICAgICB2YXIgbW9kZWwgPSBtb25hY28uZWRpdG9yLmdldE1vZGVsKHVyaSk7XG4gICAgICAgIHJldHVybiBtb2RlbC5nZXRQb3NpdGlvbkF0KG9mZnNldCk7XG4gICAgfTtcbiAgICBBZGFwdGVyLnByb3RvdHlwZS5fdGV4dFNwYW5Ub1JhbmdlID0gZnVuY3Rpb24gKHVyaSwgc3Bhbikge1xuICAgICAgICB2YXIgcDEgPSB0aGlzLl9vZmZzZXRUb1Bvc2l0aW9uKHVyaSwgc3Bhbi5zdGFydCk7XG4gICAgICAgIHZhciBwMiA9IHRoaXMuX29mZnNldFRvUG9zaXRpb24odXJpLCBzcGFuLnN0YXJ0ICsgc3Bhbi5sZW5ndGgpO1xuICAgICAgICB2YXIgc3RhcnRMaW5lTnVtYmVyID0gcDEubGluZU51bWJlciwgc3RhcnRDb2x1bW4gPSBwMS5jb2x1bW47XG4gICAgICAgIHZhciBlbmRMaW5lTnVtYmVyID0gcDIubGluZU51bWJlciwgZW5kQ29sdW1uID0gcDIuY29sdW1uO1xuICAgICAgICByZXR1cm4geyBzdGFydExpbmVOdW1iZXI6IHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW46IHN0YXJ0Q29sdW1uLCBlbmRMaW5lTnVtYmVyOiBlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW46IGVuZENvbHVtbiB9O1xuICAgIH07XG4gICAgcmV0dXJuIEFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgQWRhcHRlciB9O1xuLy8gLS0tIGRpYWdub3N0aWNzIC0tLSAtLS1cbnZhciBEaWFnbm9zdGNzQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGlhZ25vc3Rjc0FkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlhZ25vc3Rjc0FkYXB0ZXIoX2RlZmF1bHRzLCBfc2VsZWN0b3IsIHdvcmtlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB3b3JrZXIpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9kZWZhdWx0cyA9IF9kZWZhdWx0cztcbiAgICAgICAgX3RoaXMuX3NlbGVjdG9yID0gX3NlbGVjdG9yO1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMgPSBbXTtcbiAgICAgICAgX3RoaXMuX2xpc3RlbmVyID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIG9uTW9kZWxBZGQgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIGlmIChtb2RlbC5nZXRNb2RlSWQoKSAhPT0gX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VTdWJzY3JpcHRpb24gPSBtb2RlbC5vbkRpZENoYW5nZUNvbnRlbnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2RvVmFsaWRhdGUobW9kZWwudXJpKTsgfSwgNTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW21vZGVsLnVyaS50b1N0cmluZygpXSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5fZG9WYWxpZGF0ZShtb2RlbC51cmkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25Nb2RlbFJlbW92ZWQgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIG1vbmFjby5lZGl0b3Iuc2V0TW9kZWxNYXJrZXJzKG1vZGVsLCBfdGhpcy5fc2VsZWN0b3IsIFtdKTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBtb2RlbC51cmkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5fbGlzdGVuZXJba2V5XSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcltrZXldLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuX2xpc3RlbmVyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcy5wdXNoKG1vbmFjby5lZGl0b3Iub25EaWRDcmVhdGVNb2RlbChvbk1vZGVsQWRkKSk7XG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcy5wdXNoKG1vbmFjby5lZGl0b3Iub25XaWxsRGlzcG9zZU1vZGVsKG9uTW9kZWxSZW1vdmVkKSk7XG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcy5wdXNoKG1vbmFjby5lZGl0b3Iub25EaWRDaGFuZ2VNb2RlbExhbmd1YWdlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQoZXZlbnQubW9kZWwpO1xuICAgICAgICAgICAgb25Nb2RlbEFkZChldmVudC5tb2RlbCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2goe1xuICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBtb25hY28uZWRpdG9yLmdldE1vZGVscygpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kZWwgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVjb21wdXRlRGlhZ29zdGljcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHJlZG8gZGlhZ25vc3RpY3Mgd2hlbiBvcHRpb25zIGNoYW5nZVxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGVsID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBvbk1vZGVsQWRkKG1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2goX3RoaXMuX2RlZmF1bHRzLm9uRGlkQ2hhbmdlKHJlY29tcHV0ZURpYWdvc3RpY3MpKTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2goX3RoaXMuX2RlZmF1bHRzLm9uRGlkRXh0cmFMaWJzQ2hhbmdlKHJlY29tcHV0ZURpYWdvc3RpY3MpKTtcbiAgICAgICAgbW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKS5mb3JFYWNoKG9uTW9kZWxBZGQpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIERpYWdub3N0Y3NBZGFwdGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkICYmIGQuZGlzcG9zZSgpOyB9KTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMgPSBbXTtcbiAgICB9O1xuICAgIERpYWdub3N0Y3NBZGFwdGVyLnByb3RvdHlwZS5fZG9WYWxpZGF0ZSA9IGZ1bmN0aW9uIChyZXNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgaWYgKCFtb25hY28uZWRpdG9yLmdldE1vZGVsKHJlc291cmNlKSkge1xuICAgICAgICAgICAgICAgIC8vIG1vZGVsIHdhcyBkaXNwb3NlZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMuX2RlZmF1bHRzLmdldERpYWdub3N0aWNzT3B0aW9ucygpLCBub1N5bnRheFZhbGlkYXRpb24gPSBfYS5ub1N5bnRheFZhbGlkYXRpb24sIG5vU2VtYW50aWNWYWxpZGF0aW9uID0gX2Eubm9TZW1hbnRpY1ZhbGlkYXRpb247XG4gICAgICAgICAgICBpZiAoIW5vU3ludGF4VmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god29ya2VyLmdldFN5bnRhY3RpY0RpYWdub3N0aWNzKHJlc291cmNlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbm9TZW1hbnRpY1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHdvcmtlci5nZXRTZW1hbnRpY0RpYWdub3N0aWNzKHJlc291cmNlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRpYWdub3N0aWNzKSB7XG4gICAgICAgICAgICBpZiAoIWRpYWdub3N0aWNzIHx8ICFtb25hY28uZWRpdG9yLmdldE1vZGVsKHJlc291cmNlKSkge1xuICAgICAgICAgICAgICAgIC8vIG1vZGVsIHdhcyBkaXNwb3NlZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXJrZXJzID0gZGlhZ25vc3RpY3NcbiAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7IHJldHVybiBjLmNvbmNhdChwKTsgfSwgW10pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gX3RoaXMuX2NvbnZlcnREaWFnbm9zdGljcyhyZXNvdXJjZSwgZCk7IH0pO1xuICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9uYWNvLmVkaXRvci5nZXRNb2RlbChyZXNvdXJjZSksIF90aGlzLl9zZWxlY3RvciwgbWFya2Vycyk7XG4gICAgICAgIH0pLnRoZW4odW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGlhZ25vc3Rjc0FkYXB0ZXIucHJvdG90eXBlLl9jb252ZXJ0RGlhZ25vc3RpY3MgPSBmdW5jdGlvbiAocmVzb3VyY2UsIGRpYWcpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5fb2Zmc2V0VG9Qb3NpdGlvbihyZXNvdXJjZSwgZGlhZy5zdGFydCksIHN0YXJ0TGluZU51bWJlciA9IF9hLmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uID0gX2EuY29sdW1uO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLl9vZmZzZXRUb1Bvc2l0aW9uKHJlc291cmNlLCBkaWFnLnN0YXJ0ICsgZGlhZy5sZW5ndGgpLCBlbmRMaW5lTnVtYmVyID0gX2IubGluZU51bWJlciwgZW5kQ29sdW1uID0gX2IuY29sdW1uO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2V2ZXJpdHk6IG1vbmFjby5NYXJrZXJTZXZlcml0eS5FcnJvcixcbiAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlcjogc3RhcnRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgc3RhcnRDb2x1bW46IHN0YXJ0Q29sdW1uLFxuICAgICAgICAgICAgZW5kTGluZU51bWJlcjogZW5kTGluZU51bWJlcixcbiAgICAgICAgICAgIGVuZENvbHVtbjogZW5kQ29sdW1uLFxuICAgICAgICAgICAgbWVzc2FnZTogZmxhdHRlbkRpYWdub3N0aWNNZXNzYWdlVGV4dChkaWFnLm1lc3NhZ2VUZXh0LCAnXFxuJylcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBEaWFnbm9zdGNzQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgRGlhZ25vc3Rjc0FkYXB0ZXIgfTtcbnZhciBTdWdnZXN0QWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3VnZ2VzdEFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3VnZ2VzdEFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN1Z2dlc3RBZGFwdGVyLnByb3RvdHlwZSwgXCJ0cmlnZ2VyQ2hhcmFjdGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnLiddO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdWdnZXN0QWRhcHRlci5wcm90b3R5cGUucHJvdmlkZUNvbXBsZXRpb25JdGVtcyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIF9jb250ZXh0LCB0b2tlbikge1xuICAgICAgICB2YXIgd29yZEluZm8gPSBtb2RlbC5nZXRXb3JkVW50aWxQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHZhciB3b3JkUmFuZ2UgPSBuZXcgUmFuZ2UocG9zaXRpb24ubGluZU51bWJlciwgd29yZEluZm8uc3RhcnRDb2x1bW4sIHBvc2l0aW9uLmxpbmVOdW1iZXIsIHdvcmRJbmZvLmVuZENvbHVtbik7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldENvbXBsZXRpb25zQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBvZmZzZXQpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3VnZ2VzdGlvbnMgPSBpbmZvLmVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHdvcmRSYW5nZTtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkucmVwbGFjZW1lbnRTcGFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwMSA9IG1vZGVsLmdldFBvc2l0aW9uQXQoZW50cnkucmVwbGFjZW1lbnRTcGFuLnN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAyID0gbW9kZWwuZ2V0UG9zaXRpb25BdChlbnRyeS5yZXBsYWNlbWVudFNwYW4uc3RhcnQgKyBlbnRyeS5yZXBsYWNlbWVudFNwYW4ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2UgPSBuZXcgUmFuZ2UocDEubGluZU51bWJlciwgcDEuY29sdW1uLCBwMi5saW5lTnVtYmVyLCBwMi5jb2x1bW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB1cmk6IHJlc291cmNlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGVudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGluc2VydFRleHQ6IGVudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRUZXh0OiBlbnRyeS5zb3J0VGV4dCxcbiAgICAgICAgICAgICAgICAgICAga2luZDogU3VnZ2VzdEFkYXB0ZXIuY29udmVydEtpbmQoZW50cnkua2luZClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBzdWdnZXN0aW9uc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWdnZXN0QWRhcHRlci5wcm90b3R5cGUucmVzb2x2ZUNvbXBsZXRpb25JdGVtID0gZnVuY3Rpb24gKF9tb2RlbCwgX3Bvc2l0aW9uLCBpdGVtLCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbXlJdGVtID0gaXRlbTtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbXlJdGVtLnVyaTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbXlJdGVtLnBvc2l0aW9uO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZ2V0Q29tcGxldGlvbkVudHJ5RGV0YWlscyhyZXNvdXJjZS50b1N0cmluZygpLCBfdGhpcy5fcG9zaXRpb25Ub09mZnNldChyZXNvdXJjZSwgcG9zaXRpb24pLCBteUl0ZW0ubGFiZWwpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgICAgICAgICBpZiAoIWRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbXlJdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmk6IHJlc291cmNlLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICBsYWJlbDogZGV0YWlscy5uYW1lLFxuICAgICAgICAgICAgICAgIGtpbmQ6IFN1Z2dlc3RBZGFwdGVyLmNvbnZlcnRLaW5kKGRldGFpbHMua2luZCksXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBkaXNwbGF5UGFydHNUb1N0cmluZyhkZXRhaWxzLmRpc3BsYXlQYXJ0cyksXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGlzcGxheVBhcnRzVG9TdHJpbmcoZGV0YWlscy5kb2N1bWVudGF0aW9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3VnZ2VzdEFkYXB0ZXIuY29udmVydEtpbmQgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgS2luZC5wcmltaXRpdmVUeXBlOlxuICAgICAgICAgICAgY2FzZSBLaW5kLmtleXdvcmQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLktleXdvcmQ7XG4gICAgICAgICAgICBjYXNlIEtpbmQudmFyaWFibGU6XG4gICAgICAgICAgICBjYXNlIEtpbmQubG9jYWxWYXJpYWJsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuVmFyaWFibGU7XG4gICAgICAgICAgICBjYXNlIEtpbmQubWVtYmVyVmFyaWFibGU6XG4gICAgICAgICAgICBjYXNlIEtpbmQubWVtYmVyR2V0QWNjZXNzb3I6XG4gICAgICAgICAgICBjYXNlIEtpbmQubWVtYmVyU2V0QWNjZXNzb3I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkZpZWxkO1xuICAgICAgICAgICAgY2FzZSBLaW5kLmZ1bmN0aW9uOlxuICAgICAgICAgICAgY2FzZSBLaW5kLm1lbWJlckZ1bmN0aW9uOlxuICAgICAgICAgICAgY2FzZSBLaW5kLmNvbnN0cnVjdFNpZ25hdHVyZTpcbiAgICAgICAgICAgIGNhc2UgS2luZC5jYWxsU2lnbmF0dXJlOlxuICAgICAgICAgICAgY2FzZSBLaW5kLmluZGV4U2lnbmF0dXJlOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5GdW5jdGlvbjtcbiAgICAgICAgICAgIGNhc2UgS2luZC5lbnVtOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5FbnVtO1xuICAgICAgICAgICAgY2FzZSBLaW5kLm1vZHVsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuTW9kdWxlO1xuICAgICAgICAgICAgY2FzZSBLaW5kLmNsYXNzOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5DbGFzcztcbiAgICAgICAgICAgIGNhc2UgS2luZC5pbnRlcmZhY2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkludGVyZmFjZTtcbiAgICAgICAgICAgIGNhc2UgS2luZC53YXJuaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5GaWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5Qcm9wZXJ0eTtcbiAgICB9O1xuICAgIHJldHVybiBTdWdnZXN0QWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgU3VnZ2VzdEFkYXB0ZXIgfTtcbnZhciBTaWduYXR1cmVIZWxwQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2lnbmF0dXJlSGVscEFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2lnbmF0dXJlSGVscEFkYXB0ZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zaWduYXR1cmVIZWxwVHJpZ2dlckNoYXJhY3RlcnMgPSBbJygnLCAnLCddO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNpZ25hdHVyZUhlbHBBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlU2lnbmF0dXJlSGVscCA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7IHJldHVybiB3b3JrZXIuZ2V0U2lnbmF0dXJlSGVscEl0ZW1zKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCBwb3NpdGlvbikpOyB9KS50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNpZ25hdHVyZTogaW5mby5zZWxlY3RlZEl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICBhY3RpdmVQYXJhbWV0ZXI6IGluZm8uYXJndW1lbnRJbmRleCxcbiAgICAgICAgICAgICAgICBzaWduYXR1cmVzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGluZm8uaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBzaWduYXR1cmUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyczogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnByZWZpeERpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24gKHAsIGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gZGlzcGxheVBhcnRzVG9TdHJpbmcocC5kaXNwbGF5UGFydHMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjogZGlzcGxheVBhcnRzVG9TdHJpbmcocC5kb2N1bWVudGF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUubGFiZWwgKz0gbGFiZWw7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5wYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnNlcGFyYXRvckRpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzaWduYXR1cmUubGFiZWwgKz0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaXRlbS5zdWZmaXhEaXNwbGF5UGFydHMpO1xuICAgICAgICAgICAgICAgIHJldC5zaWduYXR1cmVzLnB1c2goc2lnbmF0dXJlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2lnbmF0dXJlSGVscEFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IFNpZ25hdHVyZUhlbHBBZGFwdGVyIH07XG4vLyAtLS0gaG92ZXIgLS0tLS0tXG52YXIgUXVpY2tJbmZvQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUXVpY2tJbmZvQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWlja0luZm9BZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFF1aWNrSW5mb0FkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVIb3ZlciA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldFF1aWNrSW5mb0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb2N1bWVudGF0aW9uID0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaW5mby5kb2N1bWVudGF0aW9uKTtcbiAgICAgICAgICAgIHZhciB0YWdzID0gaW5mby50YWdzID8gaW5mby50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gXCIqQFwiICsgdGFnLm5hbWUgKyBcIipcIjtcbiAgICAgICAgICAgICAgICBpZiAoIXRhZy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsICsgKHRhZy50ZXh0Lm1hdGNoKC9cXHJcXG58XFxuL2cpID8gJyBcXG4nICsgdGFnLnRleHQgOiBcIiAtIFwiICsgdGFnLnRleHQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuam9pbignICBcXG5cXG4nKSA6ICcnO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaW5mby5kaXNwbGF5UGFydHMpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZShyZXNvdXJjZSwgaW5mby50ZXh0U3BhbiksXG4gICAgICAgICAgICAgICAgY29udGVudHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2BgYGpzXFxuJyArIGNvbnRlbnRzICsgJ1xcbmBgYFxcbidcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRvY3VtZW50YXRpb24gKyAodGFncyA/ICdcXG5cXG4nICsgdGFncyA6ICcnKVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUXVpY2tJbmZvQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgUXVpY2tJbmZvQWRhcHRlciB9O1xuLy8gLS0tIG9jY3VycmVuY2VzIC0tLS0tLVxudmFyIE9jY3VycmVuY2VzQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT2NjdXJyZW5jZXNBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9jY3VycmVuY2VzQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPY2N1cnJlbmNlc0FkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudEhpZ2hsaWdodHMgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5nZXRPY2N1cnJlbmNlc0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICghZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZShyZXNvdXJjZSwgZW50cnkudGV4dFNwYW4pLFxuICAgICAgICAgICAgICAgICAgICBraW5kOiBlbnRyeS5pc1dyaXRlQWNjZXNzID8gbW9uYWNvLmxhbmd1YWdlcy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuV3JpdGUgOiBtb25hY28ubGFuZ3VhZ2VzLkRvY3VtZW50SGlnaGxpZ2h0S2luZC5UZXh0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBPY2N1cnJlbmNlc0FkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IE9jY3VycmVuY2VzQWRhcHRlciB9O1xuLy8gLS0tIGRlZmluaXRpb24gLS0tLS0tXG52YXIgRGVmaW5pdGlvbkFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlZmluaXRpb25BZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlZmluaXRpb25BZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIERlZmluaXRpb25BZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldERlZmluaXRpb25BdFBvc2l0aW9uKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCBwb3NpdGlvbikpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAoIWVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGVudHJpZXNfMSA9IGVudHJpZXM7IF9pIDwgZW50cmllc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IGVudHJpZXNfMVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIHVyaSA9IFVyaS5wYXJzZShlbnRyeS5maWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwodXJpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IHVyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBfdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHVyaSwgZW50cnkudGV4dFNwYW4pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmluaXRpb25BZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBEZWZpbml0aW9uQWRhcHRlciB9O1xuLy8gLS0tIHJlZmVyZW5jZXMgLS0tLS0tXG52YXIgUmVmZXJlbmNlQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVmZXJlbmNlQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZWZlcmVuY2VBZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFJlZmVyZW5jZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVSZWZlcmVuY2VzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY29udGV4dCwgdG9rZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZ2V0UmVmZXJlbmNlc0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICghZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZW50cmllc18yID0gZW50cmllczsgX2kgPCBlbnRyaWVzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gZW50cmllc18yW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgdXJpID0gVXJpLnBhcnNlKGVudHJ5LmZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobW9uYWNvLmVkaXRvci5nZXRNb2RlbCh1cmkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogdXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IF90aGlzLl90ZXh0U3BhblRvUmFuZ2UodXJpLCBlbnRyeS50ZXh0U3BhbilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVmZXJlbmNlQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgUmVmZXJlbmNlQWRhcHRlciB9O1xuLy8gLS0tIG91dGxpbmUgLS0tLS0tXG52YXIgT3V0bGluZUFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE91dGxpbmVBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE91dGxpbmVBZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE91dGxpbmVBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRTeW1ib2xzID0gZnVuY3Rpb24gKG1vZGVsLCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikgeyByZXR1cm4gd29ya2VyLmdldE5hdmlnYXRpb25CYXJJdGVtcyhyZXNvdXJjZS50b1N0cmluZygpKTsgfSkudGhlbihmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29udmVydCA9IGZ1bmN0aW9uIChidWNrZXQsIGl0ZW0sIGNvbnRhaW5lckxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS50ZXh0LFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBraW5kOiAob3V0bGluZVR5cGVUYWJsZVtpdGVtLmtpbmRdIHx8IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5WYXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBfdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHJlc291cmNlLCBpdGVtLnNwYW5zWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uUmFuZ2U6IF90aGlzLl90ZXh0U3BhblRvUmFuZ2UocmVzb3VyY2UsIGl0ZW0uc3BhbnNbMF0pLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOYW1lOiBjb250YWluZXJMYWJlbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRJdGVtcyAmJiBpdGVtLmNoaWxkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gaXRlbS5jaGlsZEl0ZW1zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydChidWNrZXQsIGNoaWxkLCByZXN1bHQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnVja2V0LnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBjb252ZXJ0KHJlc3VsdCwgaXRlbSk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gT3V0bGluZUFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IE91dGxpbmVBZGFwdGVyIH07XG52YXIgS2luZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLaW5kKCkge1xuICAgIH1cbiAgICBLaW5kLnVua25vd24gPSAnJztcbiAgICBLaW5kLmtleXdvcmQgPSAna2V5d29yZCc7XG4gICAgS2luZC5zY3JpcHQgPSAnc2NyaXB0JztcbiAgICBLaW5kLm1vZHVsZSA9ICdtb2R1bGUnO1xuICAgIEtpbmQuY2xhc3MgPSAnY2xhc3MnO1xuICAgIEtpbmQuaW50ZXJmYWNlID0gJ2ludGVyZmFjZSc7XG4gICAgS2luZC50eXBlID0gJ3R5cGUnO1xuICAgIEtpbmQuZW51bSA9ICdlbnVtJztcbiAgICBLaW5kLnZhcmlhYmxlID0gJ3Zhcic7XG4gICAgS2luZC5sb2NhbFZhcmlhYmxlID0gJ2xvY2FsIHZhcic7XG4gICAgS2luZC5mdW5jdGlvbiA9ICdmdW5jdGlvbic7XG4gICAgS2luZC5sb2NhbEZ1bmN0aW9uID0gJ2xvY2FsIGZ1bmN0aW9uJztcbiAgICBLaW5kLm1lbWJlckZ1bmN0aW9uID0gJ21ldGhvZCc7XG4gICAgS2luZC5tZW1iZXJHZXRBY2Nlc3NvciA9ICdnZXR0ZXInO1xuICAgIEtpbmQubWVtYmVyU2V0QWNjZXNzb3IgPSAnc2V0dGVyJztcbiAgICBLaW5kLm1lbWJlclZhcmlhYmxlID0gJ3Byb3BlcnR5JztcbiAgICBLaW5kLmNvbnN0cnVjdG9ySW1wbGVtZW50YXRpb24gPSAnY29uc3RydWN0b3InO1xuICAgIEtpbmQuY2FsbFNpZ25hdHVyZSA9ICdjYWxsJztcbiAgICBLaW5kLmluZGV4U2lnbmF0dXJlID0gJ2luZGV4JztcbiAgICBLaW5kLmNvbnN0cnVjdFNpZ25hdHVyZSA9ICdjb25zdHJ1Y3QnO1xuICAgIEtpbmQucGFyYW1ldGVyID0gJ3BhcmFtZXRlcic7XG4gICAgS2luZC50eXBlUGFyYW1ldGVyID0gJ3R5cGUgcGFyYW1ldGVyJztcbiAgICBLaW5kLnByaW1pdGl2ZVR5cGUgPSAncHJpbWl0aXZlIHR5cGUnO1xuICAgIEtpbmQubGFiZWwgPSAnbGFiZWwnO1xuICAgIEtpbmQuYWxpYXMgPSAnYWxpYXMnO1xuICAgIEtpbmQuY29uc3QgPSAnY29uc3QnO1xuICAgIEtpbmQubGV0ID0gJ2xldCc7XG4gICAgS2luZC53YXJuaW5nID0gJ3dhcm5pbmcnO1xuICAgIHJldHVybiBLaW5kO1xufSgpKTtcbmV4cG9ydCB7IEtpbmQgfTtcbnZhciBvdXRsaW5lVHlwZVRhYmxlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tb2R1bGVdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLk1vZHVsZTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5jbGFzc10gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuQ2xhc3M7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQuZW51bV0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuRW51bTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5pbnRlcmZhY2VdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLkludGVyZmFjZTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJGdW5jdGlvbl0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuTWV0aG9kO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLm1lbWJlclZhcmlhYmxlXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5Qcm9wZXJ0eTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJHZXRBY2Nlc3Nvcl0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuUHJvcGVydHk7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubWVtYmVyU2V0QWNjZXNzb3JdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLlByb3BlcnR5O1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLnZhcmlhYmxlXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5WYXJpYWJsZTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5jb25zdF0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGU7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubG9jYWxWYXJpYWJsZV0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGU7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQudmFyaWFibGVdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmZ1bmN0aW9uXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5GdW5jdGlvbjtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5sb2NhbEZ1bmN0aW9uXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5GdW5jdGlvbjtcbi8vIC0tLSBmb3JtYXR0aW5nIC0tLS1cbnZhciBGb3JtYXRIZWxwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvcm1hdEhlbHBlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb3JtYXRIZWxwZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRm9ybWF0SGVscGVyLl9jb252ZXJ0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBDb252ZXJ0VGFic1RvU3BhY2VzOiBvcHRpb25zLmluc2VydFNwYWNlcyxcbiAgICAgICAgICAgIFRhYlNpemU6IG9wdGlvbnMudGFiU2l6ZSxcbiAgICAgICAgICAgIEluZGVudFNpemU6IG9wdGlvbnMudGFiU2l6ZSxcbiAgICAgICAgICAgIEluZGVudFN0eWxlOiBJbmRlbnRTdHlsZS5TbWFydCxcbiAgICAgICAgICAgIE5ld0xpbmVDaGFyYWN0ZXI6ICdcXG4nLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlckNvbW1hRGVsaW1pdGVyOiB0cnVlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlclNlbWljb2xvbkluRm9yU3RhdGVtZW50czogdHJ1ZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQmVmb3JlQW5kQWZ0ZXJCaW5hcnlPcGVyYXRvcnM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyS2V5d29yZHNJbkNvbnRyb2xGbG93U3RhdGVtZW50czogdHJ1ZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJGdW5jdGlvbktleXdvcmRGb3JBbm9ueW1vdXNGdW5jdGlvbnM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyT3BlbmluZ0FuZEJlZm9yZUNsb3NpbmdOb25lbXB0eVBhcmVudGhlc2lzOiBmYWxzZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJPcGVuaW5nQW5kQmVmb3JlQ2xvc2luZ05vbmVtcHR5QnJhY2tldHM6IGZhbHNlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlck9wZW5pbmdBbmRCZWZvcmVDbG9zaW5nVGVtcGxhdGVTdHJpbmdCcmFjZXM6IGZhbHNlLFxuICAgICAgICAgICAgUGxhY2VPcGVuQnJhY2VPbk5ld0xpbmVGb3JDb250cm9sQmxvY2tzOiBmYWxzZSxcbiAgICAgICAgICAgIFBsYWNlT3BlbkJyYWNlT25OZXdMaW5lRm9yRnVuY3Rpb25zOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgRm9ybWF0SGVscGVyLnByb3RvdHlwZS5fY29udmVydFRleHRDaGFuZ2VzID0gZnVuY3Rpb24gKHVyaSwgY2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiBjaGFuZ2UubmV3VGV4dCxcbiAgICAgICAgICAgIHJhbmdlOiB0aGlzLl90ZXh0U3BhblRvUmFuZ2UodXJpLCBjaGFuZ2Uuc3BhbilcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtYXRIZWxwZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IEZvcm1hdEhlbHBlciB9O1xudmFyIEZvcm1hdEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvcm1hdEFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybWF0QWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBGb3JtYXRBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcmFuZ2UsIG9wdGlvbnMsIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldEZvcm1hdHRpbmdFZGl0c0ZvclJhbmdlKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCB7IGxpbmVOdW1iZXI6IHJhbmdlLnN0YXJ0TGluZU51bWJlciwgY29sdW1uOiByYW5nZS5zdGFydENvbHVtbiB9KSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHsgbGluZU51bWJlcjogcmFuZ2UuZW5kTGluZU51bWJlciwgY29sdW1uOiByYW5nZS5lbmRDb2x1bW4gfSksIEZvcm1hdEhlbHBlci5fY29udmVydE9wdGlvbnMob3B0aW9ucykpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChlZGl0cykge1xuICAgICAgICAgICAgaWYgKGVkaXRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRzLm1hcChmdW5jdGlvbiAoZWRpdCkgeyByZXR1cm4gX3RoaXMuX2NvbnZlcnRUZXh0Q2hhbmdlcyhyZXNvdXJjZSwgZWRpdCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtYXRBZGFwdGVyO1xufShGb3JtYXRIZWxwZXIpKTtcbmV4cG9ydCB7IEZvcm1hdEFkYXB0ZXIgfTtcbnZhciBGb3JtYXRPblR5cGVBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtYXRPblR5cGVBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvcm1hdE9uVHlwZUFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1hdE9uVHlwZUFkYXB0ZXIucHJvdG90eXBlLCBcImF1dG9Gb3JtYXRUcmlnZ2VyQ2hhcmFjdGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnOycsICd9JywgJ1xcbiddO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBGb3JtYXRPblR5cGVBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlT25UeXBlRm9ybWF0dGluZ0VkaXRzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY2gsIG9wdGlvbnMsIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldEZvcm1hdHRpbmdFZGl0c0FmdGVyS2V5c3Ryb2tlKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCBwb3NpdGlvbiksIGNoLCBGb3JtYXRIZWxwZXIuX2NvbnZlcnRPcHRpb25zKG9wdGlvbnMpKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZWRpdHMpIHtcbiAgICAgICAgICAgIGlmIChlZGl0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0cy5tYXAoZnVuY3Rpb24gKGVkaXQpIHsgcmV0dXJuIF90aGlzLl9jb252ZXJ0VGV4dENoYW5nZXMocmVzb3VyY2UsIGVkaXQpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9ybWF0T25UeXBlQWRhcHRlcjtcbn0oRm9ybWF0SGVscGVyKSk7XG5leHBvcnQgeyBGb3JtYXRPblR5cGVBZGFwdGVyIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IFdvcmtlck1hbmFnZXIgfSBmcm9tICcuL3dvcmtlck1hbmFnZXIuanMnO1xuaW1wb3J0ICogYXMgbGFuZ3VhZ2VGZWF0dXJlcyBmcm9tICcuL2xhbmd1YWdlRmVhdHVyZXMuanMnO1xudmFyIGphdmFTY3JpcHRXb3JrZXI7XG52YXIgdHlwZVNjcmlwdFdvcmtlcjtcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFR5cGVTY3JpcHQoZGVmYXVsdHMpIHtcbiAgICB0eXBlU2NyaXB0V29ya2VyID0gc2V0dXBNb2RlKGRlZmF1bHRzLCAndHlwZXNjcmlwdCcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwSmF2YVNjcmlwdChkZWZhdWx0cykge1xuICAgIGphdmFTY3JpcHRXb3JrZXIgPSBzZXR1cE1vZGUoZGVmYXVsdHMsICdqYXZhc2NyaXB0Jyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SmF2YVNjcmlwdFdvcmtlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIWphdmFTY3JpcHRXb3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXCJKYXZhU2NyaXB0IG5vdCByZWdpc3RlcmVkIVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGphdmFTY3JpcHRXb3JrZXIpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVTY3JpcHRXb3JrZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKCF0eXBlU2NyaXB0V29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFwiVHlwZVNjcmlwdCBub3QgcmVnaXN0ZXJlZCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh0eXBlU2NyaXB0V29ya2VyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldHVwTW9kZShkZWZhdWx0cywgbW9kZUlkKSB7XG4gICAgdmFyIGNsaWVudCA9IG5ldyBXb3JrZXJNYW5hZ2VyKG1vZGVJZCwgZGVmYXVsdHMpO1xuICAgIHZhciB3b3JrZXIgPSBmdW5jdGlvbiAoZmlyc3QpIHtcbiAgICAgICAgdmFyIG1vcmUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1vcmVbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsaWVudC5nZXRMYW5ndWFnZVNlcnZpY2VXb3JrZXIuYXBwbHkoY2xpZW50LCBbZmlyc3RdLmNvbmNhdChtb3JlKSk7XG4gICAgfTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyQ29tcGxldGlvbkl0ZW1Qcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlN1Z2dlc3RBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJTaWduYXR1cmVIZWxwUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5TaWduYXR1cmVIZWxwQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVySG92ZXJQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlF1aWNrSW5mb0FkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckRvY3VtZW50SGlnaGxpZ2h0UHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5PY2N1cnJlbmNlc0FkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckRlZmluaXRpb25Qcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkRlZmluaXRpb25BZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJSZWZlcmVuY2VQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlJlZmVyZW5jZUFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckRvY3VtZW50U3ltYm9sUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5PdXRsaW5lQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0UHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Gb3JtYXRBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJPblR5cGVGb3JtYXR0aW5nRWRpdFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRm9ybWF0T25UeXBlQWRhcHRlcih3b3JrZXIpKTtcbiAgICBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5EaWFnbm9zdGNzQWRhcHRlcihkZWZhdWx0cywgbW9kZUlkLCB3b3JrZXIpO1xuICAgIHJldHVybiB3b3JrZXI7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgV29ya2VyTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb3JrZXJNYW5hZ2VyKG1vZGVJZCwgZGVmYXVsdHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fbW9kZUlkID0gbW9kZUlkO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9pZGxlQ2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9jaGVja0lmSWRsZSgpOyB9LCAzMCAqIDEwMDApO1xuICAgICAgICB0aGlzLl9sYXN0VXNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLl9jb25maWdDaGFuZ2VMaXN0ZW5lciA9IHRoaXMuX2RlZmF1bHRzLm9uRGlkQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9zdG9wV29ya2VyKCk7IH0pO1xuICAgICAgICB0aGlzLl91cGRhdGVFeHRyYUxpYnNUb2tlbiA9IDA7XG4gICAgICAgIHRoaXMuX2V4dHJhTGlic0NoYW5nZUxpc3RlbmVyID0gdGhpcy5fZGVmYXVsdHMub25EaWRFeHRyYUxpYnNDaGFuZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX3VwZGF0ZUV4dHJhTGlicygpOyB9KTtcbiAgICB9XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX3N0b3BXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2lkbGVDaGVja0ludGVydmFsKTtcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9leHRyYUxpYnNDaGFuZ2VMaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3N0b3BXb3JrZXIoKTtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl91cGRhdGVFeHRyYUxpYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBteVRva2VuLCBwcm94eTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2tlbiA9ICsrdGhpcy5fdXBkYXRlRXh0cmFMaWJzVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIuZ2V0UHJveHkoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUV4dHJhTGlic1Rva2VuICE9PSBteVRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgbXVsdGlwbGUgY2FsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eS51cGRhdGVFeHRyYUxpYnModGhpcy5fZGVmYXVsdHMuZ2V0RXh0cmFMaWJzKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9jaGVja0lmSWRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4SWRsZVRpbWUgPSB0aGlzLl9kZWZhdWx0cy5nZXRXb3JrZXJNYXhJZGxlVGltZSgpO1xuICAgICAgICB2YXIgdGltZVBhc3NlZFNpbmNlTGFzdFVzZWQgPSBEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFVzZWRUaW1lO1xuICAgICAgICBpZiAobWF4SWRsZVRpbWUgPiAwICYmIHRpbWVQYXNzZWRTaW5jZUxhc3RVc2VkID4gbWF4SWRsZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3BXb3JrZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX2dldENsaWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fbGFzdFVzZWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKCF0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlV2ViV29ya2VyKHtcbiAgICAgICAgICAgICAgICAvLyBtb2R1bGUgdGhhdCBleHBvcnRzIHRoZSBjcmVhdGUoKSBtZXRob2QgYW5kIHJldHVybnMgYSBgVHlwZVNjcmlwdFdvcmtlcmAgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICBtb2R1bGVJZDogJ3ZzL2xhbmd1YWdlL3R5cGVzY3JpcHQvdHNXb3JrZXInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLl9tb2RlSWQsXG4gICAgICAgICAgICAgICAgLy8gcGFzc2VkIGluIHRvIHRoZSBjcmVhdGUoKSBtZXRob2RcbiAgICAgICAgICAgICAgICBjcmVhdGVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczogdGhpcy5fZGVmYXVsdHMuZ2V0Q29tcGlsZXJPcHRpb25zKCksXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhTGliczogdGhpcy5fZGVmYXVsdHMuZ2V0RXh0cmFMaWJzKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBwID0gdGhpcy5fd29ya2VyLmdldFByb3h5KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGVmYXVsdHMuZ2V0RWFnZXJNb2RlbFN5bmMoKSkge1xuICAgICAgICAgICAgICAgIHAgPSBwLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX3dvcmtlci53aXRoU3luY2VkUmVzb3VyY2VzKG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG1vZGVsKSB7IHJldHVybiBtb2RlbC5nZXRNb2RlSWQoKSA9PT0gX3RoaXMuX21vZGVJZDsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vZGVsKSB7IHJldHVybiBtb2RlbC51cmk7IH0pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudDtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLmdldExhbmd1YWdlU2VydmljZVdvcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc291cmNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgcmVzb3VyY2VzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9jbGllbnQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDbGllbnQoKS50aGVuKGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICAgICAgICAgIF9jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fd29ya2VyLndpdGhTeW5jZWRSZXNvdXJjZXMocmVzb3VyY2VzKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoXykgeyByZXR1cm4gX2NsaWVudDsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gV29ya2VyTWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBXb3JrZXJNYW5hZ2VyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9