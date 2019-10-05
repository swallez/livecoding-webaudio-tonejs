(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/'],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        { open: '<', close: '>' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))"),
            end: new RegExp("^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))")
        }
    }
};
var keywords = [
    'abstract',
    'activate',
    'and',
    'any',
    'array',
    'as',
    'asc',
    'assert',
    'autonomous',
    'begin',
    'bigdecimal',
    'blob',
    'boolean',
    'break',
    'bulk',
    'by',
    'case',
    'cast',
    'catch',
    'char',
    'class',
    'collect',
    'commit',
    'const',
    'continue',
    'convertcurrency',
    'decimal',
    'default',
    'delete',
    'desc',
    'do',
    'double',
    'else',
    'end',
    'enum',
    'exception',
    'exit',
    'export',
    'extends',
    'false',
    'final',
    'finally',
    'float',
    'for',
    'from',
    'future',
    'get',
    'global',
    'goto',
    'group',
    'having',
    'hint',
    'if',
    'implements',
    'import',
    'in',
    'inner',
    'insert',
    'instanceof',
    'int',
    'interface',
    'into',
    'join',
    'last_90_days',
    'last_month',
    'last_n_days',
    'last_week',
    'like',
    'limit',
    'list',
    'long',
    'loop',
    'map',
    'merge',
    'native',
    'new',
    'next_90_days',
    'next_month',
    'next_n_days',
    'next_week',
    'not',
    'null',
    'nulls',
    'number',
    'object',
    'of',
    'on',
    'or',
    'outer',
    'override',
    'package',
    'parallel',
    'pragma',
    'private',
    'protected',
    'public',
    'retrieve',
    'return',
    'returning',
    'rollback',
    'savepoint',
    'search',
    'select',
    'set',
    'short',
    'sort',
    'stat',
    'static',
    'strictfp',
    'super',
    'switch',
    'synchronized',
    'system',
    'testmethod',
    'then',
    'this',
    'this_month',
    'this_week',
    'throw',
    'throws',
    'today',
    'tolabel',
    'tomorrow',
    'transaction',
    'transient',
    'trigger',
    'true',
    'try',
    'type',
    'undelete',
    'update',
    'upsert',
    'using',
    'virtual',
    'void',
    'volatile',
    'webservice',
    'when',
    'where',
    'while',
    'yesterday'
];
// create case variations of the keywords - apex is case insensitive, but we can't make the highlighter case insensitive
// because we use a heuristic to assume that identifiers starting with an upper case letter are types.
var uppercaseFirstLetter = function (lowercase) { return lowercase.charAt(0).toUpperCase() + lowercase.substr(1); };
var keywordsWithCaseVariations = [];
keywords.forEach(function (lowercase) {
    keywordsWithCaseVariations.push(lowercase);
    keywordsWithCaseVariations.push(lowercase.toUpperCase());
    keywordsWithCaseVariations.push(uppercaseFirstLetter(lowercase));
});
var language = {
    defaultToken: '',
    tokenPostfix: '.apex',
    keywords: keywordsWithCaseVariations,
    operators: [
        '=', '>', '<', '!', '~', '?', ':',
        '==', '<=', '>=', '!=', '&&', '||', '++', '--',
        '+', '-', '*', '/', '&', '|', '^', '%', '<<',
        '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',
        '^=', '%=', '<<=', '>>=', '>>>='
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-z_$][\w$]*/, {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }],
            // assume that identifiers starting with an uppercase letter are types
            [/[A-Z][\w\$]*/, {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'type.identifier'
                    }
                }],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }],
            // @ annotations.
            [/@\s*[a-zA-Z_\$][\w\$]*/, 'annotation'],
            // numbers
            [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, 'number.float'],
            [/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, 'number.float'],
            [/(@digits)[fFdD]/, 'number.float'],
            [/(@digits)[lL]?/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string."'],
            [/'/, 'string', '@string.\''],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@apexdoc'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/, 'comment', '@push' ],    // nested comment not allowed :-(
            // [/\/\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        //Identical copy of comment above, except for the addition of .doc
        apexdoc: [
            [/[^\/*]+/, 'comment.doc'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        string: [
            [/[^\\"']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/["']/, { cases: { '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string' } }]
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2FwZXgvYXBleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQSxrRUFBa0UsSUFBSSxNQUFNO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdFQUFnRTtBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUyxhQUFhLGdDQUFnQztBQUM1RSw4Q0FBOEMsRUFBRTtBQUNoRDtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgLy8gdGhlIGRlZmF1bHQgc2VwYXJhdG9ycyBleGNlcHQgYEAkYFxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcI1xcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddLFxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXSxcbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqLy9cXFxccyooPzooPzojP3JlZ2lvblxcXFxiKXwoPzo8ZWRpdG9yLWZvbGRcXFxcYikpXCIpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKi8vXFxcXHMqKD86KD86Iz9lbmRyZWdpb25cXFxcYil8KD86PC9lZGl0b3ItZm9sZD4pKVwiKVxuICAgICAgICB9XG4gICAgfVxufTtcbnZhciBrZXl3b3JkcyA9IFtcbiAgICAnYWJzdHJhY3QnLFxuICAgICdhY3RpdmF0ZScsXG4gICAgJ2FuZCcsXG4gICAgJ2FueScsXG4gICAgJ2FycmF5JyxcbiAgICAnYXMnLFxuICAgICdhc2MnLFxuICAgICdhc3NlcnQnLFxuICAgICdhdXRvbm9tb3VzJyxcbiAgICAnYmVnaW4nLFxuICAgICdiaWdkZWNpbWFsJyxcbiAgICAnYmxvYicsXG4gICAgJ2Jvb2xlYW4nLFxuICAgICdicmVhaycsXG4gICAgJ2J1bGsnLFxuICAgICdieScsXG4gICAgJ2Nhc2UnLFxuICAgICdjYXN0JyxcbiAgICAnY2F0Y2gnLFxuICAgICdjaGFyJyxcbiAgICAnY2xhc3MnLFxuICAgICdjb2xsZWN0JyxcbiAgICAnY29tbWl0JyxcbiAgICAnY29uc3QnLFxuICAgICdjb250aW51ZScsXG4gICAgJ2NvbnZlcnRjdXJyZW5jeScsXG4gICAgJ2RlY2ltYWwnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVsZXRlJyxcbiAgICAnZGVzYycsXG4gICAgJ2RvJyxcbiAgICAnZG91YmxlJyxcbiAgICAnZWxzZScsXG4gICAgJ2VuZCcsXG4gICAgJ2VudW0nLFxuICAgICdleGNlcHRpb24nLFxuICAgICdleGl0JyxcbiAgICAnZXhwb3J0JyxcbiAgICAnZXh0ZW5kcycsXG4gICAgJ2ZhbHNlJyxcbiAgICAnZmluYWwnLFxuICAgICdmaW5hbGx5JyxcbiAgICAnZmxvYXQnLFxuICAgICdmb3InLFxuICAgICdmcm9tJyxcbiAgICAnZnV0dXJlJyxcbiAgICAnZ2V0JyxcbiAgICAnZ2xvYmFsJyxcbiAgICAnZ290bycsXG4gICAgJ2dyb3VwJyxcbiAgICAnaGF2aW5nJyxcbiAgICAnaGludCcsXG4gICAgJ2lmJyxcbiAgICAnaW1wbGVtZW50cycsXG4gICAgJ2ltcG9ydCcsXG4gICAgJ2luJyxcbiAgICAnaW5uZXInLFxuICAgICdpbnNlcnQnLFxuICAgICdpbnN0YW5jZW9mJyxcbiAgICAnaW50JyxcbiAgICAnaW50ZXJmYWNlJyxcbiAgICAnaW50bycsXG4gICAgJ2pvaW4nLFxuICAgICdsYXN0XzkwX2RheXMnLFxuICAgICdsYXN0X21vbnRoJyxcbiAgICAnbGFzdF9uX2RheXMnLFxuICAgICdsYXN0X3dlZWsnLFxuICAgICdsaWtlJyxcbiAgICAnbGltaXQnLFxuICAgICdsaXN0JyxcbiAgICAnbG9uZycsXG4gICAgJ2xvb3AnLFxuICAgICdtYXAnLFxuICAgICdtZXJnZScsXG4gICAgJ25hdGl2ZScsXG4gICAgJ25ldycsXG4gICAgJ25leHRfOTBfZGF5cycsXG4gICAgJ25leHRfbW9udGgnLFxuICAgICduZXh0X25fZGF5cycsXG4gICAgJ25leHRfd2VlaycsXG4gICAgJ25vdCcsXG4gICAgJ251bGwnLFxuICAgICdudWxscycsXG4gICAgJ251bWJlcicsXG4gICAgJ29iamVjdCcsXG4gICAgJ29mJyxcbiAgICAnb24nLFxuICAgICdvcicsXG4gICAgJ291dGVyJyxcbiAgICAnb3ZlcnJpZGUnLFxuICAgICdwYWNrYWdlJyxcbiAgICAncGFyYWxsZWwnLFxuICAgICdwcmFnbWEnLFxuICAgICdwcml2YXRlJyxcbiAgICAncHJvdGVjdGVkJyxcbiAgICAncHVibGljJyxcbiAgICAncmV0cmlldmUnLFxuICAgICdyZXR1cm4nLFxuICAgICdyZXR1cm5pbmcnLFxuICAgICdyb2xsYmFjaycsXG4gICAgJ3NhdmVwb2ludCcsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3NldCcsXG4gICAgJ3Nob3J0JyxcbiAgICAnc29ydCcsXG4gICAgJ3N0YXQnLFxuICAgICdzdGF0aWMnLFxuICAgICdzdHJpY3RmcCcsXG4gICAgJ3N1cGVyJyxcbiAgICAnc3dpdGNoJyxcbiAgICAnc3luY2hyb25pemVkJyxcbiAgICAnc3lzdGVtJyxcbiAgICAndGVzdG1ldGhvZCcsXG4gICAgJ3RoZW4nLFxuICAgICd0aGlzJyxcbiAgICAndGhpc19tb250aCcsXG4gICAgJ3RoaXNfd2VlaycsXG4gICAgJ3Rocm93JyxcbiAgICAndGhyb3dzJyxcbiAgICAndG9kYXknLFxuICAgICd0b2xhYmVsJyxcbiAgICAndG9tb3Jyb3cnLFxuICAgICd0cmFuc2FjdGlvbicsXG4gICAgJ3RyYW5zaWVudCcsXG4gICAgJ3RyaWdnZXInLFxuICAgICd0cnVlJyxcbiAgICAndHJ5JyxcbiAgICAndHlwZScsXG4gICAgJ3VuZGVsZXRlJyxcbiAgICAndXBkYXRlJyxcbiAgICAndXBzZXJ0JyxcbiAgICAndXNpbmcnLFxuICAgICd2aXJ0dWFsJyxcbiAgICAndm9pZCcsXG4gICAgJ3ZvbGF0aWxlJyxcbiAgICAnd2Vic2VydmljZScsXG4gICAgJ3doZW4nLFxuICAgICd3aGVyZScsXG4gICAgJ3doaWxlJyxcbiAgICAneWVzdGVyZGF5J1xuXTtcbi8vIGNyZWF0ZSBjYXNlIHZhcmlhdGlvbnMgb2YgdGhlIGtleXdvcmRzIC0gYXBleCBpcyBjYXNlIGluc2Vuc2l0aXZlLCBidXQgd2UgY2FuJ3QgbWFrZSB0aGUgaGlnaGxpZ2h0ZXIgY2FzZSBpbnNlbnNpdGl2ZVxuLy8gYmVjYXVzZSB3ZSB1c2UgYSBoZXVyaXN0aWMgdG8gYXNzdW1lIHRoYXQgaWRlbnRpZmllcnMgc3RhcnRpbmcgd2l0aCBhbiB1cHBlciBjYXNlIGxldHRlciBhcmUgdHlwZXMuXG52YXIgdXBwZXJjYXNlRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbiAobG93ZXJjYXNlKSB7IHJldHVybiBsb3dlcmNhc2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBsb3dlcmNhc2Uuc3Vic3RyKDEpOyB9O1xudmFyIGtleXdvcmRzV2l0aENhc2VWYXJpYXRpb25zID0gW107XG5rZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChsb3dlcmNhc2UpIHtcbiAgICBrZXl3b3Jkc1dpdGhDYXNlVmFyaWF0aW9ucy5wdXNoKGxvd2VyY2FzZSk7XG4gICAga2V5d29yZHNXaXRoQ2FzZVZhcmlhdGlvbnMucHVzaChsb3dlcmNhc2UudG9VcHBlckNhc2UoKSk7XG4gICAga2V5d29yZHNXaXRoQ2FzZVZhcmlhdGlvbnMucHVzaCh1cHBlcmNhc2VGaXJzdExldHRlcihsb3dlcmNhc2UpKTtcbn0pO1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5hcGV4JyxcbiAgICBrZXl3b3Jkczoga2V5d29yZHNXaXRoQ2FzZVZhcmlhdGlvbnMsXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICc9JywgJz4nLCAnPCcsICchJywgJ34nLCAnPycsICc6JyxcbiAgICAgICAgJz09JywgJzw9JywgJz49JywgJyE9JywgJyYmJywgJ3x8JywgJysrJywgJy0tJyxcbiAgICAgICAgJysnLCAnLScsICcqJywgJy8nLCAnJicsICd8JywgJ14nLCAnJScsICc8PCcsXG4gICAgICAgICc+PicsICc+Pj4nLCAnKz0nLCAnLT0nLCAnKj0nLCAnLz0nLCAnJj0nLCAnfD0nLFxuICAgICAgICAnXj0nLCAnJT0nLCAnPDw9JywgJz4+PScsICc+Pj49J1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgZGlnaXRzOiAvXFxkKyhfK1xcZCspKi8sXG4gICAgb2N0YWxkaWdpdHM6IC9bMC03XSsoXytbMC03XSspKi8sXG4gICAgYmluYXJ5ZGlnaXRzOiAvWzAtMV0rKF8rWzAtMV0rKSovLFxuICAgIGhleGRpZ2l0czogL1tbMC05YS1mQS1GXSsoXytbMC05YS1mQS1GXSspKi8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgWy9bYS16XyRdW1xcdyRdKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvLyBhc3N1bWUgdGhhdCBpZGVudGlmaWVycyBzdGFydGluZyB3aXRoIGFuIHVwcGVyY2FzZSBsZXR0ZXIgYXJlIHR5cGVzXG4gICAgICAgICAgICBbL1tBLVpdW1xcd1xcJF0qLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3R5cGUuaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvLyBAIGFubm90YXRpb25zLlxuICAgICAgICAgICAgWy9AXFxzKlthLXpBLVpfXFwkXVtcXHdcXCRdKi8sICdhbm5vdGF0aW9uJ10sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVtlRV0oW1xcLStdPyhAZGlnaXRzKSk/W2ZGZERdPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpXFwuKEBkaWdpdHMpKFtlRV1bXFwtK10/KEBkaWdpdHMpKT9bZkZkRF0/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8oQGRpZ2l0cylbZkZkRF0vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVtsTF0/LywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbLycoW14nXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXCInXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCAnQHN0cmluZy5cXCcnXSxcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnNcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvKCcpKEBlc2NhcGVzKSgnKS8sIFsnc3RyaW5nJywgJ3N0cmluZy5lc2NhcGUnLCAnc3RyaW5nJ11dLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ11cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy9cXC9cXCpcXCooPyFcXC8pLywgJ2NvbW1lbnQuZG9jJywgJ0BhcGV4ZG9jJ10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy8gWy9cXC9cXCovLCAnY29tbWVudCcsICdAcHVzaCcgXSwgICAgLy8gbmVzdGVkIGNvbW1lbnQgbm90IGFsbG93ZWQgOi0oXG4gICAgICAgICAgICAvLyBbL1xcL1xcKi8sICAgICdjb21tZW50LmludmFsaWQnIF0sICAgIC8vIHRoaXMgYnJlYWtzIGJsb2NrIGNvbW1lbnRzIGluIHRoZSBzaGFwZSBvZiAvKiAvLyovXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICAvL0lkZW50aWNhbCBjb3B5IG9mIGNvbW1lbnQgYWJvdmUsIGV4Y2VwdCBmb3IgdGhlIGFkZGl0aW9uIG9mIC5kb2NcbiAgICAgICAgYXBleGRvYzogW1xuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50LmRvYyddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudC5kb2MnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudC5kb2MnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCInXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1tcIiddLywgeyBjYXNlczogeyAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnIH0gfV1cbiAgICAgICAgXSxcbiAgICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=