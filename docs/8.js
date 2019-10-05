(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js ***!
  \**********************************************************************/
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
    comments: {
        lineComment: 'REM'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
    surroundingPairs: [
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*(::\\s*|REM\\s+)#region"),
            end: new RegExp("^\\s*(::\\s*|REM\\s+)#endregion")
        }
    }
};
var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.bat',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: /call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,
    // we include these common regular expressions
    symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/^(\s*)(rem(?:\s.*|))$/, ['', 'comment']],
            [/(\@?)(@keywords)(?!\w)/, [{ token: 'keyword' }, { token: 'keyword.$2' }]],
            // whitespace
            [/[ \t\r\n]+/, ''],
            // blocks
            [/setlocal(?!\w)/, 'keyword.tag-setlocal'],
            [/endlocal(?!\w)/, 'keyword.tag-setlocal'],
            // words
            [/[a-zA-Z_]\w*/, ''],
            // labels
            [/:\w*/, 'metatag'],
            // variables
            [/%[^%]+%/, 'variable'],
            [/%%[\w]+(?!\w)/, 'variable'],
            // punctuations
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
            [/\d+/, 'number'],
            // punctuation: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings:
            [/"/, 'string', '@string."'],
            [/'/, 'string', '@string.\''],
        ],
        string: [
            [/[^\\"'%]+/, {
                    cases: {
                        '@eos': { token: 'string', next: '@popall' },
                        '@default': 'string'
                    }
                }],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/%[\w ]+%/, 'variable'],
            [/%%[\w]+(?!\w)/, 'variable'],
            [/["']/, {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }],
            [/$/, 'string', '@popall']
        ],
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2JhdC9iYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUNBQXFDLFlBQVksR0FBRztBQUM3RCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbUJBQW1CLEdBQUcsc0JBQXNCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtQ0FBbUM7QUFDcEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDO0FBQ3BFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnUkVNJ1xuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqKDo6XFxcXHMqfFJFTVxcXFxzKykjcmVnaW9uXCIpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKig6OlxcXFxzKnxSRU1cXFxccyspI2VuZHJlZ2lvblwiKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIHRva2VuUG9zdGZpeDogJy5iYXQnLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiAvY2FsbHxkZWZpbmVkfGVjaG98ZXJyb3JsZXZlbHxleGlzdHxmb3J8Z290b3xpZnxwYXVzZXxzZXR8c2hpZnR8c3RhcnR8dGl0bGV8bm90fHB1c2hkfHBvcGQvLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PyZ8K1xcLSpcXC9cXF47XFwuLF0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICBbL14oXFxzKikocmVtKD86XFxzLip8KSkkLywgWycnLCAnY29tbWVudCddXSxcbiAgICAgICAgICAgIFsvKFxcQD8pKEBrZXl3b3JkcykoPyFcXHcpLywgW3sgdG9rZW46ICdrZXl3b3JkJyB9LCB7IHRva2VuOiAna2V5d29yZC4kMicgfV1dLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgLy8gYmxvY2tzXG4gICAgICAgICAgICBbL3NldGxvY2FsKD8hXFx3KS8sICdrZXl3b3JkLnRhZy1zZXRsb2NhbCddLFxuICAgICAgICAgICAgWy9lbmRsb2NhbCg/IVxcdykvLCAna2V5d29yZC50YWctc2V0bG9jYWwnXSxcbiAgICAgICAgICAgIC8vIHdvcmRzXG4gICAgICAgICAgICBbL1thLXpBLVpfXVxcdyovLCAnJ10sXG4gICAgICAgICAgICAvLyBsYWJlbHNcbiAgICAgICAgICAgIFsvOlxcdyovLCAnbWV0YXRhZyddLFxuICAgICAgICAgICAgLy8gdmFyaWFibGVzXG4gICAgICAgICAgICBbLyVbXiVdKyUvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvJSVbXFx3XSsoPyFcXHcpLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICAvLyBwdW5jdHVhdGlvbnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl9dKlswLTlhLWZBLUZdLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIHB1bmN0dWF0aW9uOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3M6XG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nLlwiJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXFwnJ10sXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIiclXSsvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJVtcXHcgXSslLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbLyUlW1xcd10rKD8hXFx3KS8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy9bXCInXS8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMyJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy8kLywgJ3N0cmluZycsICdAcG9wYWxsJ11cbiAgICAgICAgXSxcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==