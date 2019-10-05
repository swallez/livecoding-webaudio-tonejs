(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js ***!
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
        lineComment: '//',
        blockComment: ['/*', '*/'],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*#pragma\\s+region\\b"),
            end: new RegExp("^\\s*#pragma\\s+endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.cpp',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.angle', open: '<', close: '>' }
    ],
    keywords: [
        'abstract',
        'amp',
        'array',
        'auto',
        'bool',
        'break',
        'case',
        'catch',
        'char',
        'class',
        'const',
        'constexpr',
        'const_cast',
        'continue',
        'cpu',
        'decltype',
        'default',
        'delegate',
        'delete',
        'do',
        'double',
        'dynamic_cast',
        'each',
        'else',
        'enum',
        'event',
        'explicit',
        'export',
        'extern',
        'false',
        'final',
        'finally',
        'float',
        'for',
        'friend',
        'gcnew',
        'generic',
        'goto',
        'if',
        'in',
        'initonly',
        'inline',
        'int',
        'interface',
        'interior_ptr',
        'internal',
        'literal',
        'long',
        'mutable',
        'namespace',
        'new',
        'noexcept',
        'nullptr',
        '__nullptr',
        'operator',
        'override',
        'partial',
        'pascal',
        'pin_ptr',
        'private',
        'property',
        'protected',
        'public',
        'ref',
        'register',
        'reinterpret_cast',
        'restrict',
        'return',
        'safe_cast',
        'sealed',
        'short',
        'signed',
        'sizeof',
        'static',
        'static_assert',
        'static_cast',
        'struct',
        'switch',
        'template',
        'this',
        'thread_local',
        'throw',
        'tile_static',
        'true',
        'try',
        'typedef',
        'typeid',
        'typename',
        'union',
        'unsigned',
        'using',
        'virtual',
        'void',
        'volatile',
        'wchar_t',
        'where',
        'while',
        '_asm',
        '_based',
        '_cdecl',
        '_declspec',
        '_fastcall',
        '_if_exists',
        '_if_not_exists',
        '_inline',
        '_multiple_inheritance',
        '_pascal',
        '_single_inheritance',
        '_stdcall',
        '_virtual_inheritance',
        '_w64',
        '__abstract',
        '__alignof',
        '__asm',
        '__assume',
        '__based',
        '__box',
        '__builtin_alignof',
        '__cdecl',
        '__clrcall',
        '__declspec',
        '__delegate',
        '__event',
        '__except',
        '__fastcall',
        '__finally',
        '__forceinline',
        '__gc',
        '__hook',
        '__identifier',
        '__if_exists',
        '__if_not_exists',
        '__inline',
        '__int128',
        '__int16',
        '__int32',
        '__int64',
        '__int8',
        '__interface',
        '__leave',
        '__m128',
        '__m128d',
        '__m128i',
        '__m256',
        '__m256d',
        '__m256i',
        '__m64',
        '__multiple_inheritance',
        '__newslot',
        '__nogc',
        '__noop',
        '__nounwind',
        '__novtordisp',
        '__pascal',
        '__pin',
        '__pragma',
        '__property',
        '__ptr32',
        '__ptr64',
        '__raise',
        '__restrict',
        '__resume',
        '__sealed',
        '__single_inheritance',
        '__stdcall',
        '__super',
        '__thiscall',
        '__try',
        '__try_cast',
        '__typeof',
        '__unaligned',
        '__unhook',
        '__uuidof',
        '__value',
        '__virtual_inheritance',
        '__w64',
        '__wchar_t'
    ],
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
    integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
    floatsuffix: /[fFlL]?/,
    encoding: /u|u8|U|L/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // C++ 11 Raw String
            [/@encoding?R\"(?:([^ ()\\\t]*))\(/, { token: 'string.raw.begin', next: '@raw.$1' }],
            // identifiers and keywords
            [/[a-zA-Z_]\w*/, {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }],
            // whitespace
            { include: '@whitespace' },
            // [[ attributes ]].
            [/\[\[.*\]\]/, 'annotation'],
            [/^\s*#include/, { token: 'keyword.directive.include', next: '@include' }],
            // Preprocessor directive
            [/^\s*#\s*\w+/, 'keyword'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],
            [/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],
            [/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],
            [/\d[\d']*\d(@integersuffix)/, 'number'],
            [/\d(@integersuffix)/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        //Identical copy of comment above, except for the addition of .doc
        doccomment: [
            [/[^\/*]+/, 'comment.doc'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        raw: [
            [/(.*)(\))(?:([^ ()\\\t]*))(\")/, {
                    cases: {
                        '$3==$S2': ['string.raw', 'string.raw.end', 'string.raw.end', { token: 'string.raw.end', next: '@pop' }],
                        '@default': ['string.raw', 'string.raw', 'string.raw', 'string.raw']
                    }
                }
            ],
            [/.*/, 'string.raw']
        ],
        include: [
            [/(\s*)(<)([^<>]*)(>)/, ['', 'keyword.directive.include.begin', 'string.include.identifier', { token: 'keyword.directive.include.end', next: '@pop' }]],
            [/(\s*)(")([^"]*)(")/, ['', 'keyword.directive.include.begin', 'string.include.identifier', { token: 'keyword.directive.include.end', next: '@pop' }]]
        ]
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2NwcC9jcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3REFBd0Q7QUFDakUsU0FBUywyQ0FBMkM7QUFDcEQ7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUMsWUFBWSxHQUFHO0FBQzNELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVMsbURBQW1EO0FBQzVELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDZDQUE2QztBQUMvRjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0EsOEJBQThCLHVEQUF1RDtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1Rix3Q0FBd0M7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBMEcsdURBQXVEO0FBQ2pLLHlHQUF5Ryx1REFBdUQ7QUFDaEs7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNwcmFnbWFcXFxccytyZWdpb25cXFxcYlwiKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojcHJhZ21hXFxcXHMrZW5kcmVnaW9uXFxcXGJcIilcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNwcCcsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnLCBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgJ2FtcCcsXG4gICAgICAgICdhcnJheScsXG4gICAgICAgICdhdXRvJyxcbiAgICAgICAgJ2Jvb2wnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdjaGFyJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NvbnN0ZXhwcicsXG4gICAgICAgICdjb25zdF9jYXN0JyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2NwdScsXG4gICAgICAgICdkZWNsdHlwZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlbGVnYXRlJyxcbiAgICAgICAgJ2RlbGV0ZScsXG4gICAgICAgICdkbycsXG4gICAgICAgICdkb3VibGUnLFxuICAgICAgICAnZHluYW1pY19jYXN0JyxcbiAgICAgICAgJ2VhY2gnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ2V2ZW50JyxcbiAgICAgICAgJ2V4cGxpY2l0JyxcbiAgICAgICAgJ2V4cG9ydCcsXG4gICAgICAgICdleHRlcm4nLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnZmluYWwnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICdmbG9hdCcsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZnJpZW5kJyxcbiAgICAgICAgJ2djbmV3JyxcbiAgICAgICAgJ2dlbmVyaWMnLFxuICAgICAgICAnZ290bycsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbicsXG4gICAgICAgICdpbml0b25seScsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAnaW50JyxcbiAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICdpbnRlcmlvcl9wdHInLFxuICAgICAgICAnaW50ZXJuYWwnLFxuICAgICAgICAnbGl0ZXJhbCcsXG4gICAgICAgICdsb25nJyxcbiAgICAgICAgJ211dGFibGUnLFxuICAgICAgICAnbmFtZXNwYWNlJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdub2V4Y2VwdCcsXG4gICAgICAgICdudWxscHRyJyxcbiAgICAgICAgJ19fbnVsbHB0cicsXG4gICAgICAgICdvcGVyYXRvcicsXG4gICAgICAgICdvdmVycmlkZScsXG4gICAgICAgICdwYXJ0aWFsJyxcbiAgICAgICAgJ3Bhc2NhbCcsXG4gICAgICAgICdwaW5fcHRyJyxcbiAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAncHJvcGVydHknLFxuICAgICAgICAncHJvdGVjdGVkJyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdyZWYnLFxuICAgICAgICAncmVnaXN0ZXInLFxuICAgICAgICAncmVpbnRlcnByZXRfY2FzdCcsXG4gICAgICAgICdyZXN0cmljdCcsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAnc2FmZV9jYXN0JyxcbiAgICAgICAgJ3NlYWxlZCcsXG4gICAgICAgICdzaG9ydCcsXG4gICAgICAgICdzaWduZWQnLFxuICAgICAgICAnc2l6ZW9mJyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdzdGF0aWNfYXNzZXJ0JyxcbiAgICAgICAgJ3N0YXRpY19jYXN0JyxcbiAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICdzd2l0Y2gnLFxuICAgICAgICAndGVtcGxhdGUnLFxuICAgICAgICAndGhpcycsXG4gICAgICAgICd0aHJlYWRfbG9jYWwnLFxuICAgICAgICAndGhyb3cnLFxuICAgICAgICAndGlsZV9zdGF0aWMnLFxuICAgICAgICAndHJ1ZScsXG4gICAgICAgICd0cnknLFxuICAgICAgICAndHlwZWRlZicsXG4gICAgICAgICd0eXBlaWQnLFxuICAgICAgICAndHlwZW5hbWUnLFxuICAgICAgICAndW5pb24nLFxuICAgICAgICAndW5zaWduZWQnLFxuICAgICAgICAndXNpbmcnLFxuICAgICAgICAndmlydHVhbCcsXG4gICAgICAgICd2b2lkJyxcbiAgICAgICAgJ3ZvbGF0aWxlJyxcbiAgICAgICAgJ3djaGFyX3QnLFxuICAgICAgICAnd2hlcmUnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnX2FzbScsXG4gICAgICAgICdfYmFzZWQnLFxuICAgICAgICAnX2NkZWNsJyxcbiAgICAgICAgJ19kZWNsc3BlYycsXG4gICAgICAgICdfZmFzdGNhbGwnLFxuICAgICAgICAnX2lmX2V4aXN0cycsXG4gICAgICAgICdfaWZfbm90X2V4aXN0cycsXG4gICAgICAgICdfaW5saW5lJyxcbiAgICAgICAgJ19tdWx0aXBsZV9pbmhlcml0YW5jZScsXG4gICAgICAgICdfcGFzY2FsJyxcbiAgICAgICAgJ19zaW5nbGVfaW5oZXJpdGFuY2UnLFxuICAgICAgICAnX3N0ZGNhbGwnLFxuICAgICAgICAnX3ZpcnR1YWxfaW5oZXJpdGFuY2UnLFxuICAgICAgICAnX3c2NCcsXG4gICAgICAgICdfX2Fic3RyYWN0JyxcbiAgICAgICAgJ19fYWxpZ25vZicsXG4gICAgICAgICdfX2FzbScsXG4gICAgICAgICdfX2Fzc3VtZScsXG4gICAgICAgICdfX2Jhc2VkJyxcbiAgICAgICAgJ19fYm94JyxcbiAgICAgICAgJ19fYnVpbHRpbl9hbGlnbm9mJyxcbiAgICAgICAgJ19fY2RlY2wnLFxuICAgICAgICAnX19jbHJjYWxsJyxcbiAgICAgICAgJ19fZGVjbHNwZWMnLFxuICAgICAgICAnX19kZWxlZ2F0ZScsXG4gICAgICAgICdfX2V2ZW50JyxcbiAgICAgICAgJ19fZXhjZXB0JyxcbiAgICAgICAgJ19fZmFzdGNhbGwnLFxuICAgICAgICAnX19maW5hbGx5JyxcbiAgICAgICAgJ19fZm9yY2VpbmxpbmUnLFxuICAgICAgICAnX19nYycsXG4gICAgICAgICdfX2hvb2snLFxuICAgICAgICAnX19pZGVudGlmaWVyJyxcbiAgICAgICAgJ19faWZfZXhpc3RzJyxcbiAgICAgICAgJ19faWZfbm90X2V4aXN0cycsXG4gICAgICAgICdfX2lubGluZScsXG4gICAgICAgICdfX2ludDEyOCcsXG4gICAgICAgICdfX2ludDE2JyxcbiAgICAgICAgJ19faW50MzInLFxuICAgICAgICAnX19pbnQ2NCcsXG4gICAgICAgICdfX2ludDgnLFxuICAgICAgICAnX19pbnRlcmZhY2UnLFxuICAgICAgICAnX19sZWF2ZScsXG4gICAgICAgICdfX20xMjgnLFxuICAgICAgICAnX19tMTI4ZCcsXG4gICAgICAgICdfX20xMjhpJyxcbiAgICAgICAgJ19fbTI1NicsXG4gICAgICAgICdfX20yNTZkJyxcbiAgICAgICAgJ19fbTI1NmknLFxuICAgICAgICAnX19tNjQnLFxuICAgICAgICAnX19tdWx0aXBsZV9pbmhlcml0YW5jZScsXG4gICAgICAgICdfX25ld3Nsb3QnLFxuICAgICAgICAnX19ub2djJyxcbiAgICAgICAgJ19fbm9vcCcsXG4gICAgICAgICdfX25vdW53aW5kJyxcbiAgICAgICAgJ19fbm92dG9yZGlzcCcsXG4gICAgICAgICdfX3Bhc2NhbCcsXG4gICAgICAgICdfX3BpbicsXG4gICAgICAgICdfX3ByYWdtYScsXG4gICAgICAgICdfX3Byb3BlcnR5JyxcbiAgICAgICAgJ19fcHRyMzInLFxuICAgICAgICAnX19wdHI2NCcsXG4gICAgICAgICdfX3JhaXNlJyxcbiAgICAgICAgJ19fcmVzdHJpY3QnLFxuICAgICAgICAnX19yZXN1bWUnLFxuICAgICAgICAnX19zZWFsZWQnLFxuICAgICAgICAnX19zaW5nbGVfaW5oZXJpdGFuY2UnLFxuICAgICAgICAnX19zdGRjYWxsJyxcbiAgICAgICAgJ19fc3VwZXInLFxuICAgICAgICAnX190aGlzY2FsbCcsXG4gICAgICAgICdfX3RyeScsXG4gICAgICAgICdfX3RyeV9jYXN0JyxcbiAgICAgICAgJ19fdHlwZW9mJyxcbiAgICAgICAgJ19fdW5hbGlnbmVkJyxcbiAgICAgICAgJ19fdW5ob29rJyxcbiAgICAgICAgJ19fdXVpZG9mJyxcbiAgICAgICAgJ19fdmFsdWUnLFxuICAgICAgICAnX192aXJ0dWFsX2luaGVyaXRhbmNlJyxcbiAgICAgICAgJ19fdzY0JyxcbiAgICAgICAgJ19fd2NoYXJfdCdcbiAgICBdLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnPScsICc+JywgJzwnLCAnIScsICd+JywgJz8nLCAnOicsXG4gICAgICAgICc9PScsICc8PScsICc+PScsICchPScsICcmJicsICd8fCcsICcrKycsICctLScsXG4gICAgICAgICcrJywgJy0nLCAnKicsICcvJywgJyYnLCAnfCcsICdeJywgJyUnLCAnPDwnLFxuICAgICAgICAnPj4nLCAnPj4+JywgJys9JywgJy09JywgJyo9JywgJy89JywgJyY9JywgJ3w9JyxcbiAgICAgICAgJ149JywgJyU9JywgJzw8PScsICc+Pj0nLCAnPj4+PSdcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIGludGVnZXJzdWZmaXg6IC8obGx8TEx8dXxVfGx8TCk/KGxsfExMfHV8VXxsfEwpPy8sXG4gICAgZmxvYXRzdWZmaXg6IC9bZkZsTF0/LyxcbiAgICBlbmNvZGluZzogL3V8dTh8VXxMLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gQysrIDExIFJhdyBTdHJpbmdcbiAgICAgICAgICAgIFsvQGVuY29kaW5nP1JcXFwiKD86KFteICgpXFxcXFxcdF0qKSlcXCgvLCB7IHRva2VuOiAnc3RyaW5nLnJhdy5iZWdpbicsIG5leHQ6ICdAcmF3LiQxJyB9XSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgWy9bYS16QS1aX11cXHcqLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gW1sgYXR0cmlidXRlcyBdXS5cbiAgICAgICAgICAgIFsvXFxbXFxbLipcXF1cXF0vLCAnYW5ub3RhdGlvbiddLFxuICAgICAgICAgICAgWy9eXFxzKiNpbmNsdWRlLywgeyB0b2tlbjogJ2tleXdvcmQuZGlyZWN0aXZlLmluY2x1ZGUnLCBuZXh0OiAnQGluY2x1ZGUnIH1dLFxuICAgICAgICAgICAgLy8gUHJlcHJvY2Vzc29yIGRpcmVjdGl2ZVxuICAgICAgICAgICAgWy9eXFxzKiNcXHMqXFx3Ky8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRiddKlswLTlhLWZBLUZdKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLzBbMC03J10qWzAtN10oQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5vY3RhbCddLFxuICAgICAgICAgICAgWy8wW2JCXVswLTEnXSpbMC0xXShAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLmJpbmFyeSddLFxuICAgICAgICAgICAgWy9cXGRbXFxkJ10qXFxkKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvXFxkKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZyddLFxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcL1xcKlxcKig/IVxcLykvLCAnY29tbWVudC5kb2MnLCAnQGRvY2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICAvL0lkZW50aWNhbCBjb3B5IG9mIGNvbW1lbnQgYWJvdmUsIGV4Y2VwdCBmb3IgdGhlIGFkZGl0aW9uIG9mIC5kb2NcbiAgICAgICAgZG9jY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50LmRvYyddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudC5kb2MnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudC5kb2MnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICByYXc6IFtcbiAgICAgICAgICAgIFsvKC4qKShcXCkpKD86KFteICgpXFxcXFxcdF0qKSkoXFxcIikvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJDM9PSRTMic6IFsnc3RyaW5nLnJhdycsICdzdHJpbmcucmF3LmVuZCcsICdzdHJpbmcucmF3LmVuZCcsIHsgdG9rZW46ICdzdHJpbmcucmF3LmVuZCcsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFsnc3RyaW5nLnJhdycsICdzdHJpbmcucmF3JywgJ3N0cmluZy5yYXcnLCAnc3RyaW5nLnJhdyddXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8uKi8sICdzdHJpbmcucmF3J11cbiAgICAgICAgXSxcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAgWy8oXFxzKikoPCkoW148Pl0qKSg+KS8sIFsnJywgJ2tleXdvcmQuZGlyZWN0aXZlLmluY2x1ZGUuYmVnaW4nLCAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsIHsgdG9rZW46ICdrZXl3b3JkLmRpcmVjdGl2ZS5pbmNsdWRlLmVuZCcsIG5leHQ6ICdAcG9wJyB9XV0sXG4gICAgICAgICAgICBbLyhcXHMqKShcIikoW15cIl0qKShcIikvLCBbJycsICdrZXl3b3JkLmRpcmVjdGl2ZS5pbmNsdWRlLmJlZ2luJywgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLCB7IHRva2VuOiAna2V5d29yZC5kaXJlY3RpdmUuaW5jbHVkZS5lbmQnLCBuZXh0OiAnQHBvcCcgfV1dXG4gICAgICAgIF1cbiAgICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=