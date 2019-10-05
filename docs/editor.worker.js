/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/monaco-editor/esm/vs/editor/editor.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/monaco-editor/esm/vs/base/common/arrays.js":
/*!*****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/arrays.js ***!
  \*****************************************************************/
/*! exports provided: tail, tail2, equals, binarySearch, findFirstInSorted, mergeSort, groupBy, coalesce, isFalsyOrEmpty, isNonEmptyArray, distinct, distinctES6, firstIndex, first, flatten, range, arrayInsert, pushToStart, pushToEnd, asArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail2", function() { return tail2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySearch", function() { return binarySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFirstInSorted", function() { return findFirstInSorted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSort", function() { return mergeSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coalesce", function() { return coalesce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalsyOrEmpty", function() { return isFalsyOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return isNonEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctES6", function() { return distinctES6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstIndex", function() { return firstIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayInsert", function() { return arrayInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushToStart", function() { return pushToStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushToEnd", function() { return pushToEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asArray", function() { return asArray; });
/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default is zero).
 */
function tail(array, n) {
    if (n === void 0) { n = 0; }
    return array[array.length - (1 + n)];
}
function tail2(arr) {
    if (arr.length === 0) {
        throw new Error('Invalid tail call');
    }
    return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}
function equals(one, other, itemEquals) {
    if (itemEquals === void 0) { itemEquals = function (a, b) { return a === b; }; }
    if (one === other) {
        return true;
    }
    if (!one || !other) {
        return false;
    }
    if (one.length !== other.length) {
        return false;
    }
    for (var i = 0, len = one.length; i < len; i++) {
        if (!itemEquals(one[i], other[i])) {
            return false;
        }
    }
    return true;
}
function binarySearch(array, key, comparator) {
    var low = 0, high = array.length - 1;
    while (low <= high) {
        var mid = ((low + high) / 2) | 0;
        var comp = comparator(array[mid], key);
        if (comp < 0) {
            low = mid + 1;
        }
        else if (comp > 0) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -(low + 1);
}
/**
 * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
 * are located before all elements where p(x) is true.
 * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
 */
function findFirstInSorted(array, p) {
    var low = 0, high = array.length;
    if (high === 0) {
        return 0; // no children
    }
    while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (p(array[mid])) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return low;
}
/**
 * Like `Array#sort` but always stable. Usually runs a little slower `than Array#sort`
 * so only use this when actually needing stable sort.
 */
function mergeSort(data, compare) {
    _sort(data, compare, 0, data.length - 1, []);
    return data;
}
function _merge(a, compare, lo, mid, hi, aux) {
    var leftIdx = lo, rightIdx = mid + 1;
    for (var i = lo; i <= hi; i++) {
        aux[i] = a[i];
    }
    for (var i = lo; i <= hi; i++) {
        if (leftIdx > mid) {
            // left side consumed
            a[i] = aux[rightIdx++];
        }
        else if (rightIdx > hi) {
            // right side consumed
            a[i] = aux[leftIdx++];
        }
        else if (compare(aux[rightIdx], aux[leftIdx]) < 0) {
            // right element is less -> comes first
            a[i] = aux[rightIdx++];
        }
        else {
            // left element comes first (less or equal)
            a[i] = aux[leftIdx++];
        }
    }
}
function _sort(a, compare, lo, hi, aux) {
    if (hi <= lo) {
        return;
    }
    var mid = lo + ((hi - lo) / 2) | 0;
    _sort(a, compare, lo, mid, aux);
    _sort(a, compare, mid + 1, hi, aux);
    if (compare(a[mid], a[mid + 1]) <= 0) {
        // left and right are sorted and if the last-left element is less
        // or equals than the first-right element there is nothing else
        // to do
        return;
    }
    _merge(a, compare, lo, mid, hi, aux);
}
function groupBy(data, compare) {
    var result = [];
    var currentGroup = undefined;
    for (var _i = 0, _a = mergeSort(data.slice(0), compare); _i < _a.length; _i++) {
        var element = _a[_i];
        if (!currentGroup || compare(currentGroup[0], element) !== 0) {
            currentGroup = [element];
            result.push(currentGroup);
        }
        else {
            currentGroup.push(element);
        }
    }
    return result;
}
/**
 * @returns a new array with all falsy values removed. The original array IS NOT modified.
 */
function coalesce(array) {
    if (!array) {
        return array;
    }
    return array.filter(function (e) { return !!e; });
}
/**
 * @returns false if the provided object is an array and not empty.
 */
function isFalsyOrEmpty(obj) {
    return !Array.isArray(obj) || obj.length === 0;
}
/**
 * @returns True if the provided object is an array and has at least one element.
 */
function isNonEmptyArray(obj) {
    return Array.isArray(obj) && obj.length > 0;
}
/**
 * Removes duplicates from the given array. The optional keyFn allows to specify
 * how elements are checked for equalness by returning a unique string for each.
 */
function distinct(array, keyFn) {
    if (!keyFn) {
        return array.filter(function (element, position) {
            return array.indexOf(element) === position;
        });
    }
    var seen = Object.create(null);
    return array.filter(function (elem) {
        var key = keyFn(elem);
        if (seen[key]) {
            return false;
        }
        seen[key] = true;
        return true;
    });
}
function distinctES6(array) {
    var seen = new Set();
    return array.filter(function (element) {
        if (seen.has(element)) {
            return false;
        }
        seen.add(element);
        return true;
    });
}
function firstIndex(array, fn) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (fn(element)) {
            return i;
        }
    }
    return -1;
}
function first(array, fn, notFoundValue) {
    if (notFoundValue === void 0) { notFoundValue = undefined; }
    var index = firstIndex(array, fn);
    return index < 0 ? notFoundValue : array[index];
}
function flatten(arr) {
    var _a;
    return (_a = []).concat.apply(_a, arr);
}
function range(arg, to) {
    var from = typeof to === 'number' ? arg : 0;
    if (typeof to === 'number') {
        from = arg;
    }
    else {
        from = 0;
        to = arg;
    }
    var result = [];
    if (from <= to) {
        for (var i = from; i < to; i++) {
            result.push(i);
        }
    }
    else {
        for (var i = from; i > to; i--) {
            result.push(i);
        }
    }
    return result;
}
/**
 * Insert `insertArr` inside `target` at `insertIndex`.
 * Please don't touch unless you understand https://jsperf.com/inserting-an-array-within-an-array
 */
function arrayInsert(target, insertIndex, insertArr) {
    var before = target.slice(0, insertIndex);
    var after = target.slice(insertIndex);
    return before.concat(insertArr, after);
}
/**
 * Pushes an element to the start of the array, if found.
 */
function pushToStart(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.unshift(value);
    }
}
/**
 * Pushes an element to the end of the array, if found.
 */
function pushToEnd(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.push(value);
    }
}
function asArray(x) {
    return Array.isArray(x) ? x : [x];
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/cancellation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/cancellation.js ***!
  \***********************************************************************/
/*! exports provided: CancellationToken, CancellationTokenSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationToken", function() { return CancellationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationTokenSource", function() { return CancellationTokenSource; });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./node_modules/monaco-editor/esm/vs/base/common/event.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var shortcutEvent = Object.freeze(function (callback, context) {
    var handle = setTimeout(callback.bind(context), 0);
    return { dispose: function () { clearTimeout(handle); } };
});
var CancellationToken;
(function (CancellationToken) {
    function isCancellationToken(thing) {
        if (thing === CancellationToken.None || thing === CancellationToken.Cancelled) {
            return true;
        }
        if (thing instanceof MutableToken) {
            return true;
        }
        if (!thing || typeof thing !== 'object') {
            return false;
        }
        return typeof thing.isCancellationRequested === 'boolean'
            && typeof thing.onCancellationRequested === 'function';
    }
    CancellationToken.isCancellationToken = isCancellationToken;
    CancellationToken.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: _event_js__WEBPACK_IMPORTED_MODULE_0__["Event"].None
    });
    CancellationToken.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutEvent
    });
})(CancellationToken || (CancellationToken = {}));
var MutableToken = /** @class */ (function () {
    function MutableToken() {
        this._isCancelled = false;
        this._emitter = null;
    }
    MutableToken.prototype.cancel = function () {
        if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
                this._emitter.fire(undefined);
                this.dispose();
            }
        }
    };
    Object.defineProperty(MutableToken.prototype, "isCancellationRequested", {
        get: function () {
            return this._isCancelled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MutableToken.prototype, "onCancellationRequested", {
        get: function () {
            if (this._isCancelled) {
                return shortcutEvent;
            }
            if (!this._emitter) {
                this._emitter = new _event_js__WEBPACK_IMPORTED_MODULE_0__["Emitter"]();
            }
            return this._emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MutableToken.prototype.dispose = function () {
        if (this._emitter) {
            this._emitter.dispose();
            this._emitter = null;
        }
    };
    return MutableToken;
}());
var CancellationTokenSource = /** @class */ (function () {
    function CancellationTokenSource(parent) {
        this._token = undefined;
        this._parentListener = undefined;
        this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
    }
    Object.defineProperty(CancellationTokenSource.prototype, "token", {
        get: function () {
            if (!this._token) {
                // be lazy and create the token only when
                // actually needed
                this._token = new MutableToken();
            }
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    CancellationTokenSource.prototype.cancel = function () {
        if (!this._token) {
            // save an object by returning the default
            // cancelled token when cancellation happens
            // before someone asks for the token
            this._token = CancellationToken.Cancelled;
        }
        else if (this._token instanceof MutableToken) {
            // actually cancel
            this._token.cancel();
        }
    };
    CancellationTokenSource.prototype.dispose = function () {
        if (this._parentListener) {
            this._parentListener.dispose();
        }
        if (!this._token) {
            // ensure to initialize with an empty token if we had none
            this._token = CancellationToken.None;
        }
        else if (this._token instanceof MutableToken) {
            // actually dispose
            this._token.dispose();
        }
    };
    return CancellationTokenSource;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js ***!
  \********************************************************************/
/*! exports provided: stringDiff, Debug, MyArray, LcsDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringDiff", function() { return stringDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyArray", function() { return MyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcsDiff", function() { return LcsDiff; });
/* harmony import */ var _diffChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffChange.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function createStringSequence(a) {
    return {
        getLength: function () { return a.length; },
        getElementAtIndex: function (pos) { return a.charCodeAt(pos); }
    };
}
function stringDiff(original, modified, pretty) {
    return new LcsDiff(createStringSequence(original), createStringSequence(modified)).ComputeDiff(pretty);
}
//
// The code below has been ported from a C# implementation in VS
//
var Debug = /** @class */ (function () {
    function Debug() {
    }
    Debug.Assert = function (condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    };
    return Debug;
}());

var MyArray = /** @class */ (function () {
    function MyArray() {
    }
    /**
     * Copies a range of elements from an Array starting at the specified source index and pastes
     * them to another Array starting at the specified destination index. The length and the indexes
     * are specified as 64-bit integers.
     * sourceArray:
     *		The Array that contains the data to copy.
     * sourceIndex:
     *		A 64-bit integer that represents the index in the sourceArray at which copying begins.
     * destinationArray:
     *		The Array that receives the data.
     * destinationIndex:
     *		A 64-bit integer that represents the index in the destinationArray at which storing begins.
     * length:
     *		A 64-bit integer that represents the number of elements to copy.
     */
    MyArray.Copy = function (sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
        for (var i = 0; i < length; i++) {
            destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
        }
    };
    return MyArray;
}());

//*****************************************************************************
// LcsDiff.cs
//
// An implementation of the difference algorithm described in
// "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
//
// Copyright (C) 2008 Microsoft Corporation @minifier_do_not_preserve
//*****************************************************************************
// Our total memory usage for storing history is (worst-case):
// 2 * [(MaxDifferencesHistory + 1) * (MaxDifferencesHistory + 1) - 1] * sizeof(int)
// 2 * [1448*1448 - 1] * 4 = 16773624 = 16MB
var MaxDifferencesHistory = 1447;
//let MaxDifferencesHistory = 100;
/**
 * A utility class which helps to create the set of DiffChanges from
 * a difference operation. This class accepts original DiffElements and
 * modified DiffElements that are involved in a particular change. The
 * MarktNextChange() method can be called to mark the separation between
 * distinct changes. At the end, the Changes property can be called to retrieve
 * the constructed changes.
 */
var DiffChangeHelper = /** @class */ (function () {
    /**
     * Constructs a new DiffChangeHelper for the given DiffSequences.
     */
    function DiffChangeHelper() {
        this.m_changes = [];
        this.m_originalStart = Number.MAX_VALUE;
        this.m_modifiedStart = Number.MAX_VALUE;
        this.m_originalCount = 0;
        this.m_modifiedCount = 0;
    }
    /**
     * Marks the beginning of the next change in the set of differences.
     */
    DiffChangeHelper.prototype.MarkNextChange = function () {
        // Only add to the list if there is something to add
        if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
            // Add the new change to our list
            this.m_changes.push(new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount));
        }
        // Reset for the next change
        this.m_originalCount = 0;
        this.m_modifiedCount = 0;
        this.m_originalStart = Number.MAX_VALUE;
        this.m_modifiedStart = Number.MAX_VALUE;
    };
    /**
     * Adds the original element at the given position to the elements
     * affected by the current change. The modified index gives context
     * to the change position with respect to the original sequence.
     * @param originalIndex The index of the original element to add.
     * @param modifiedIndex The index of the modified element that provides corresponding position in the modified sequence.
     */
    DiffChangeHelper.prototype.AddOriginalElement = function (originalIndex, modifiedIndex) {
        // The 'true' start index is the smallest of the ones we've seen
        this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
        this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
        this.m_originalCount++;
    };
    /**
     * Adds the modified element at the given position to the elements
     * affected by the current change. The original index gives context
     * to the change position with respect to the modified sequence.
     * @param originalIndex The index of the original element that provides corresponding position in the original sequence.
     * @param modifiedIndex The index of the modified element to add.
     */
    DiffChangeHelper.prototype.AddModifiedElement = function (originalIndex, modifiedIndex) {
        // The 'true' start index is the smallest of the ones we've seen
        this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
        this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
        this.m_modifiedCount++;
    };
    /**
     * Retrieves all of the changes marked by the class.
     */
    DiffChangeHelper.prototype.getChanges = function () {
        if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
            // Finish up on whatever is left
            this.MarkNextChange();
        }
        return this.m_changes;
    };
    /**
     * Retrieves all of the changes marked by the class in the reverse order
     */
    DiffChangeHelper.prototype.getReverseChanges = function () {
        if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
            // Finish up on whatever is left
            this.MarkNextChange();
        }
        this.m_changes.reverse();
        return this.m_changes;
    };
    return DiffChangeHelper;
}());
/**
 * An implementation of the difference algorithm described in
 * "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
 */
var LcsDiff = /** @class */ (function () {
    /**
     * Constructs the DiffFinder
     */
    function LcsDiff(originalSequence, newSequence, continueProcessingPredicate) {
        if (continueProcessingPredicate === void 0) { continueProcessingPredicate = null; }
        this.OriginalSequence = originalSequence;
        this.ModifiedSequence = newSequence;
        this.ContinueProcessingPredicate = continueProcessingPredicate;
        this.m_forwardHistory = [];
        this.m_reverseHistory = [];
    }
    LcsDiff.prototype.ElementsAreEqual = function (originalIndex, newIndex) {
        return (this.OriginalSequence.getElementAtIndex(originalIndex) === this.ModifiedSequence.getElementAtIndex(newIndex));
    };
    LcsDiff.prototype.OriginalElementsAreEqual = function (index1, index2) {
        return (this.OriginalSequence.getElementAtIndex(index1) === this.OriginalSequence.getElementAtIndex(index2));
    };
    LcsDiff.prototype.ModifiedElementsAreEqual = function (index1, index2) {
        return (this.ModifiedSequence.getElementAtIndex(index1) === this.ModifiedSequence.getElementAtIndex(index2));
    };
    LcsDiff.prototype.ComputeDiff = function (pretty) {
        return this._ComputeDiff(0, this.OriginalSequence.getLength() - 1, 0, this.ModifiedSequence.getLength() - 1, pretty);
    };
    /**
     * Computes the differences between the original and modified input
     * sequences on the bounded range.
     * @returns An array of the differences between the two input sequences.
     */
    LcsDiff.prototype._ComputeDiff = function (originalStart, originalEnd, modifiedStart, modifiedEnd, pretty) {
        var quitEarlyArr = [false];
        var changes = this.ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr);
        if (pretty) {
            // We have to clean up the computed diff to be more intuitive
            // but it turns out this cannot be done correctly until the entire set
            // of diffs have been computed
            return this.PrettifyChanges(changes);
        }
        return changes;
    };
    /**
     * Private helper method which computes the differences on the bounded range
     * recursively.
     * @returns An array of the differences between the two input sequences.
     */
    LcsDiff.prototype.ComputeDiffRecursive = function (originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr) {
        quitEarlyArr[0] = false;
        // Find the start of the differences
        while (originalStart <= originalEnd && modifiedStart <= modifiedEnd && this.ElementsAreEqual(originalStart, modifiedStart)) {
            originalStart++;
            modifiedStart++;
        }
        // Find the end of the differences
        while (originalEnd >= originalStart && modifiedEnd >= modifiedStart && this.ElementsAreEqual(originalEnd, modifiedEnd)) {
            originalEnd--;
            modifiedEnd--;
        }
        // In the special case where we either have all insertions or all deletions or the sequences are identical
        if (originalStart > originalEnd || modifiedStart > modifiedEnd) {
            var changes = void 0;
            if (modifiedStart <= modifiedEnd) {
                Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd');
                // All insertions
                changes = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, 0, modifiedStart, modifiedEnd - modifiedStart + 1)
                ];
            }
            else if (originalStart <= originalEnd) {
                Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd');
                // All deletions
                changes = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalEnd - originalStart + 1, modifiedStart, 0)
                ];
            }
            else {
                Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd');
                Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd');
                // Identical sequences - No differences
                changes = [];
            }
            return changes;
        }
        // This problem can be solved using the Divide-And-Conquer technique.
        var midOriginalArr = [0], midModifiedArr = [0];
        var result = this.ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr);
        var midOriginal = midOriginalArr[0];
        var midModified = midModifiedArr[0];
        if (result !== null) {
            // Result is not-null when there was enough memory to compute the changes while
            // searching for the recursion point
            return result;
        }
        else if (!quitEarlyArr[0]) {
            // We can break the problem down recursively by finding the changes in the
            // First Half:   (originalStart, modifiedStart) to (midOriginal, midModified)
            // Second Half:  (midOriginal + 1, minModified + 1) to (originalEnd, modifiedEnd)
            // NOTE: ComputeDiff() is inclusive, therefore the second range starts on the next point
            var leftChanges = this.ComputeDiffRecursive(originalStart, midOriginal, modifiedStart, midModified, quitEarlyArr);
            var rightChanges = [];
            if (!quitEarlyArr[0]) {
                rightChanges = this.ComputeDiffRecursive(midOriginal + 1, originalEnd, midModified + 1, modifiedEnd, quitEarlyArr);
            }
            else {
                // We did't have time to finish the first half, so we don't have time to compute this half.
                // Consider the entire rest of the sequence different.
                rightChanges = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](midOriginal + 1, originalEnd - (midOriginal + 1) + 1, midModified + 1, modifiedEnd - (midModified + 1) + 1)
                ];
            }
            return this.ConcatenateChanges(leftChanges, rightChanges);
        }
        // If we hit here, we quit early, and so can't return anything meaningful
        return [
            new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
        ];
    };
    LcsDiff.prototype.WALKTRACE = function (diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr) {
        var forwardChanges = null, reverseChanges = null;
        // First, walk backward through the forward diagonals history
        var changeHelper = new DiffChangeHelper();
        var diagonalMin = diagonalForwardStart;
        var diagonalMax = diagonalForwardEnd;
        var diagonalRelative = (midOriginalArr[0] - midModifiedArr[0]) - diagonalForwardOffset;
        var lastOriginalIndex = Number.MIN_VALUE;
        var historyIndex = this.m_forwardHistory.length - 1;
        var diagonal;
        do {
            // Get the diagonal index from the relative diagonal number
            diagonal = diagonalRelative + diagonalForwardBase;
            // Figure out where we came from
            if (diagonal === diagonalMin || (diagonal < diagonalMax && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1])) {
                // Vertical line (the element is an insert)
                originalIndex = forwardPoints[diagonal + 1];
                modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
                if (originalIndex < lastOriginalIndex) {
                    changeHelper.MarkNextChange();
                }
                lastOriginalIndex = originalIndex;
                changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex);
                diagonalRelative = (diagonal + 1) - diagonalForwardBase; //Setup for the next iteration
            }
            else {
                // Horizontal line (the element is a deletion)
                originalIndex = forwardPoints[diagonal - 1] + 1;
                modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
                if (originalIndex < lastOriginalIndex) {
                    changeHelper.MarkNextChange();
                }
                lastOriginalIndex = originalIndex - 1;
                changeHelper.AddOriginalElement(originalIndex, modifiedIndex + 1);
                diagonalRelative = (diagonal - 1) - diagonalForwardBase; //Setup for the next iteration
            }
            if (historyIndex >= 0) {
                forwardPoints = this.m_forwardHistory[historyIndex];
                diagonalForwardBase = forwardPoints[0]; //We stored this in the first spot
                diagonalMin = 1;
                diagonalMax = forwardPoints.length - 1;
            }
        } while (--historyIndex >= -1);
        // Ironically, we get the forward changes as the reverse of the
        // order we added them since we technically added them backwards
        forwardChanges = changeHelper.getReverseChanges();
        if (quitEarlyArr[0]) {
            // TODO: Calculate a partial from the reverse diagonals.
            //       For now, just assume everything after the midOriginal/midModified point is a diff
            var originalStartPoint = midOriginalArr[0] + 1;
            var modifiedStartPoint = midModifiedArr[0] + 1;
            if (forwardChanges !== null && forwardChanges.length > 0) {
                var lastForwardChange = forwardChanges[forwardChanges.length - 1];
                originalStartPoint = Math.max(originalStartPoint, lastForwardChange.getOriginalEnd());
                modifiedStartPoint = Math.max(modifiedStartPoint, lastForwardChange.getModifiedEnd());
            }
            reverseChanges = [
                new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStartPoint, originalEnd - originalStartPoint + 1, modifiedStartPoint, modifiedEnd - modifiedStartPoint + 1)
            ];
        }
        else {
            // Now walk backward through the reverse diagonals history
            changeHelper = new DiffChangeHelper();
            diagonalMin = diagonalReverseStart;
            diagonalMax = diagonalReverseEnd;
            diagonalRelative = (midOriginalArr[0] - midModifiedArr[0]) - diagonalReverseOffset;
            lastOriginalIndex = Number.MAX_VALUE;
            historyIndex = (deltaIsEven) ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
            do {
                // Get the diagonal index from the relative diagonal number
                diagonal = diagonalRelative + diagonalReverseBase;
                // Figure out where we came from
                if (diagonal === diagonalMin || (diagonal < diagonalMax && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1])) {
                    // Horizontal line (the element is a deletion))
                    originalIndex = reversePoints[diagonal + 1] - 1;
                    modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
                    if (originalIndex > lastOriginalIndex) {
                        changeHelper.MarkNextChange();
                    }
                    lastOriginalIndex = originalIndex + 1;
                    changeHelper.AddOriginalElement(originalIndex + 1, modifiedIndex + 1);
                    diagonalRelative = (diagonal + 1) - diagonalReverseBase; //Setup for the next iteration
                }
                else {
                    // Vertical line (the element is an insertion)
                    originalIndex = reversePoints[diagonal - 1];
                    modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
                    if (originalIndex > lastOriginalIndex) {
                        changeHelper.MarkNextChange();
                    }
                    lastOriginalIndex = originalIndex;
                    changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex + 1);
                    diagonalRelative = (diagonal - 1) - diagonalReverseBase; //Setup for the next iteration
                }
                if (historyIndex >= 0) {
                    reversePoints = this.m_reverseHistory[historyIndex];
                    diagonalReverseBase = reversePoints[0]; //We stored this in the first spot
                    diagonalMin = 1;
                    diagonalMax = reversePoints.length - 1;
                }
            } while (--historyIndex >= -1);
            // There are cases where the reverse history will find diffs that
            // are correct, but not intuitive, so we need shift them.
            reverseChanges = changeHelper.getChanges();
        }
        return this.ConcatenateChanges(forwardChanges, reverseChanges);
    };
    /**
     * Given the range to compute the diff on, this method finds the point:
     * (midOriginal, midModified)
     * that exists in the middle of the LCS of the two sequences and
     * is the point at which the LCS problem may be broken down recursively.
     * This method will try to keep the LCS trace in memory. If the LCS recursion
     * point is calculated and the full trace is available in memory, then this method
     * will return the change list.
     * @param originalStart The start bound of the original sequence range
     * @param originalEnd The end bound of the original sequence range
     * @param modifiedStart The start bound of the modified sequence range
     * @param modifiedEnd The end bound of the modified sequence range
     * @param midOriginal The middle point of the original sequence range
     * @param midModified The middle point of the modified sequence range
     * @returns The diff changes, if available, otherwise null
     */
    LcsDiff.prototype.ComputeRecursionPoint = function (originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr) {
        var originalIndex = 0, modifiedIndex = 0;
        var diagonalForwardStart = 0, diagonalForwardEnd = 0;
        var diagonalReverseStart = 0, diagonalReverseEnd = 0;
        var numDifferences;
        // To traverse the edit graph and produce the proper LCS, our actual
        // start position is just outside the given boundary
        originalStart--;
        modifiedStart--;
        // We set these up to make the compiler happy, but they will
        // be replaced before we return with the actual recursion point
        midOriginalArr[0] = 0;
        midModifiedArr[0] = 0;
        // Clear out the history
        this.m_forwardHistory = [];
        this.m_reverseHistory = [];
        // Each cell in the two arrays corresponds to a diagonal in the edit graph.
        // The integer value in the cell represents the originalIndex of the furthest
        // reaching point found so far that ends in that diagonal.
        // The modifiedIndex can be computed mathematically from the originalIndex and the diagonal number.
        var maxDifferences = (originalEnd - originalStart) + (modifiedEnd - modifiedStart);
        var numDiagonals = maxDifferences + 1;
        var forwardPoints = new Array(numDiagonals);
        var reversePoints = new Array(numDiagonals);
        // diagonalForwardBase: Index into forwardPoints of the diagonal which passes through (originalStart, modifiedStart)
        // diagonalReverseBase: Index into reversePoints of the diagonal which passes through (originalEnd, modifiedEnd)
        var diagonalForwardBase = (modifiedEnd - modifiedStart);
        var diagonalReverseBase = (originalEnd - originalStart);
        // diagonalForwardOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
        //    diagonal number (relative to diagonalForwardBase)
        // diagonalReverseOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
        //    diagonal number (relative to diagonalReverseBase)
        var diagonalForwardOffset = (originalStart - modifiedStart);
        var diagonalReverseOffset = (originalEnd - modifiedEnd);
        // delta: The difference between the end diagonal and the start diagonal. This is used to relate diagonal numbers
        //   relative to the start diagonal with diagonal numbers relative to the end diagonal.
        // The Even/Oddn-ness of this delta is important for determining when we should check for overlap
        var delta = diagonalReverseBase - diagonalForwardBase;
        var deltaIsEven = (delta % 2 === 0);
        // Here we set up the start and end points as the furthest points found so far
        // in both the forward and reverse directions, respectively
        forwardPoints[diagonalForwardBase] = originalStart;
        reversePoints[diagonalReverseBase] = originalEnd;
        // Remember if we quit early, and thus need to do a best-effort result instead of a real result.
        quitEarlyArr[0] = false;
        // A couple of points:
        // --With this method, we iterate on the number of differences between the two sequences.
        //   The more differences there actually are, the longer this will take.
        // --Also, as the number of differences increases, we have to search on diagonals further
        //   away from the reference diagonal (which is diagonalForwardBase for forward, diagonalReverseBase for reverse).
        // --We extend on even diagonals (relative to the reference diagonal) only when numDifferences
        //   is even and odd diagonals only when numDifferences is odd.
        var diagonal, tempOriginalIndex;
        for (numDifferences = 1; numDifferences <= (maxDifferences / 2) + 1; numDifferences++) {
            var furthestOriginalIndex = 0;
            var furthestModifiedIndex = 0;
            // Run the algorithm in the forward direction
            diagonalForwardStart = this.ClipDiagonalBound(diagonalForwardBase - numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
            diagonalForwardEnd = this.ClipDiagonalBound(diagonalForwardBase + numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
            for (diagonal = diagonalForwardStart; diagonal <= diagonalForwardEnd; diagonal += 2) {
                // STEP 1: We extend the furthest reaching point in the present diagonal
                // by looking at the diagonals above and below and picking the one whose point
                // is further away from the start point (originalStart, modifiedStart)
                if (diagonal === diagonalForwardStart || (diagonal < diagonalForwardEnd && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1])) {
                    originalIndex = forwardPoints[diagonal + 1];
                }
                else {
                    originalIndex = forwardPoints[diagonal - 1] + 1;
                }
                modifiedIndex = originalIndex - (diagonal - diagonalForwardBase) - diagonalForwardOffset;
                // Save the current originalIndex so we can test for false overlap in step 3
                tempOriginalIndex = originalIndex;
                // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
                // so long as the elements are equal.
                while (originalIndex < originalEnd && modifiedIndex < modifiedEnd && this.ElementsAreEqual(originalIndex + 1, modifiedIndex + 1)) {
                    originalIndex++;
                    modifiedIndex++;
                }
                forwardPoints[diagonal] = originalIndex;
                if (originalIndex + modifiedIndex > furthestOriginalIndex + furthestModifiedIndex) {
                    furthestOriginalIndex = originalIndex;
                    furthestModifiedIndex = modifiedIndex;
                }
                // STEP 3: If delta is odd (overlap first happens on forward when delta is odd)
                // and diagonal is in the range of reverse diagonals computed for numDifferences-1
                // (the previous iteration; we haven't computed reverse diagonals for numDifferences yet)
                // then check for overlap.
                if (!deltaIsEven && Math.abs(diagonal - diagonalReverseBase) <= (numDifferences - 1)) {
                    if (originalIndex >= reversePoints[diagonal]) {
                        midOriginalArr[0] = originalIndex;
                        midModifiedArr[0] = modifiedIndex;
                        if (tempOriginalIndex <= reversePoints[diagonal] && MaxDifferencesHistory > 0 && numDifferences <= (MaxDifferencesHistory + 1)) {
                            // BINGO! We overlapped, and we have the full trace in memory!
                            return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
                        }
                        else {
                            // Either false overlap, or we didn't have enough memory for the full trace
                            // Just return the recursion point
                            return null;
                        }
                    }
                }
            }
            // Check to see if we should be quitting early, before moving on to the next iteration.
            var matchLengthOfLongest = ((furthestOriginalIndex - originalStart) + (furthestModifiedIndex - modifiedStart) - numDifferences) / 2;
            if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(furthestOriginalIndex, this.OriginalSequence, matchLengthOfLongest)) {
                // We can't finish, so skip ahead to generating a result from what we have.
                quitEarlyArr[0] = true;
                // Use the furthest distance we got in the forward direction.
                midOriginalArr[0] = furthestOriginalIndex;
                midModifiedArr[0] = furthestModifiedIndex;
                if (matchLengthOfLongest > 0 && MaxDifferencesHistory > 0 && numDifferences <= (MaxDifferencesHistory + 1)) {
                    // Enough of the history is in memory to walk it backwards
                    return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
                }
                else {
                    // We didn't actually remember enough of the history.
                    //Since we are quiting the diff early, we need to shift back the originalStart and modified start
                    //back into the boundary limits since we decremented their value above beyond the boundary limit.
                    originalStart++;
                    modifiedStart++;
                    return [
                        new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
                    ];
                }
            }
            // Run the algorithm in the reverse direction
            diagonalReverseStart = this.ClipDiagonalBound(diagonalReverseBase - numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
            diagonalReverseEnd = this.ClipDiagonalBound(diagonalReverseBase + numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
            for (diagonal = diagonalReverseStart; diagonal <= diagonalReverseEnd; diagonal += 2) {
                // STEP 1: We extend the furthest reaching point in the present diagonal
                // by looking at the diagonals above and below and picking the one whose point
                // is further away from the start point (originalEnd, modifiedEnd)
                if (diagonal === diagonalReverseStart || (diagonal < diagonalReverseEnd && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1])) {
                    originalIndex = reversePoints[diagonal + 1] - 1;
                }
                else {
                    originalIndex = reversePoints[diagonal - 1];
                }
                modifiedIndex = originalIndex - (diagonal - diagonalReverseBase) - diagonalReverseOffset;
                // Save the current originalIndex so we can test for false overlap
                tempOriginalIndex = originalIndex;
                // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
                // as long as the elements are equal.
                while (originalIndex > originalStart && modifiedIndex > modifiedStart && this.ElementsAreEqual(originalIndex, modifiedIndex)) {
                    originalIndex--;
                    modifiedIndex--;
                }
                reversePoints[diagonal] = originalIndex;
                // STEP 4: If delta is even (overlap first happens on reverse when delta is even)
                // and diagonal is in the range of forward diagonals computed for numDifferences
                // then check for overlap.
                if (deltaIsEven && Math.abs(diagonal - diagonalForwardBase) <= numDifferences) {
                    if (originalIndex <= forwardPoints[diagonal]) {
                        midOriginalArr[0] = originalIndex;
                        midModifiedArr[0] = modifiedIndex;
                        if (tempOriginalIndex >= forwardPoints[diagonal] && MaxDifferencesHistory > 0 && numDifferences <= (MaxDifferencesHistory + 1)) {
                            // BINGO! We overlapped, and we have the full trace in memory!
                            return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
                        }
                        else {
                            // Either false overlap, or we didn't have enough memory for the full trace
                            // Just return the recursion point
                            return null;
                        }
                    }
                }
            }
            // Save current vectors to history before the next iteration
            if (numDifferences <= MaxDifferencesHistory) {
                // We are allocating space for one extra int, which we fill with
                // the index of the diagonal base index
                var temp = new Array(diagonalForwardEnd - diagonalForwardStart + 2);
                temp[0] = diagonalForwardBase - diagonalForwardStart + 1;
                MyArray.Copy(forwardPoints, diagonalForwardStart, temp, 1, diagonalForwardEnd - diagonalForwardStart + 1);
                this.m_forwardHistory.push(temp);
                temp = new Array(diagonalReverseEnd - diagonalReverseStart + 2);
                temp[0] = diagonalReverseBase - diagonalReverseStart + 1;
                MyArray.Copy(reversePoints, diagonalReverseStart, temp, 1, diagonalReverseEnd - diagonalReverseStart + 1);
                this.m_reverseHistory.push(temp);
            }
        }
        // If we got here, then we have the full trace in history. We just have to convert it to a change list
        // NOTE: This part is a bit messy
        return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
    };
    /**
     * Shifts the given changes to provide a more intuitive diff.
     * While the first element in a diff matches the first element after the diff,
     * we shift the diff down.
     *
     * @param changes The list of changes to shift
     * @returns The shifted changes
     */
    LcsDiff.prototype.PrettifyChanges = function (changes) {
        // Shift all the changes down first
        for (var i = 0; i < changes.length; i++) {
            var change = changes[i];
            var originalStop = (i < changes.length - 1) ? changes[i + 1].originalStart : this.OriginalSequence.getLength();
            var modifiedStop = (i < changes.length - 1) ? changes[i + 1].modifiedStart : this.ModifiedSequence.getLength();
            var checkOriginal = change.originalLength > 0;
            var checkModified = change.modifiedLength > 0;
            while (change.originalStart + change.originalLength < originalStop &&
                change.modifiedStart + change.modifiedLength < modifiedStop &&
                (!checkOriginal || this.OriginalElementsAreEqual(change.originalStart, change.originalStart + change.originalLength)) &&
                (!checkModified || this.ModifiedElementsAreEqual(change.modifiedStart, change.modifiedStart + change.modifiedLength))) {
                change.originalStart++;
                change.modifiedStart++;
            }
            var mergedChangeArr = [null];
            if (i < changes.length - 1 && this.ChangesOverlap(changes[i], changes[i + 1], mergedChangeArr)) {
                changes[i] = mergedChangeArr[0];
                changes.splice(i + 1, 1);
                i--;
                continue;
            }
        }
        // Shift changes back up until we hit empty or whitespace-only lines
        for (var i = changes.length - 1; i >= 0; i--) {
            var change = changes[i];
            var originalStop = 0;
            var modifiedStop = 0;
            if (i > 0) {
                var prevChange = changes[i - 1];
                if (prevChange.originalLength > 0) {
                    originalStop = prevChange.originalStart + prevChange.originalLength;
                }
                if (prevChange.modifiedLength > 0) {
                    modifiedStop = prevChange.modifiedStart + prevChange.modifiedLength;
                }
            }
            var checkOriginal = change.originalLength > 0;
            var checkModified = change.modifiedLength > 0;
            var bestDelta = 0;
            var bestScore = this._boundaryScore(change.originalStart, change.originalLength, change.modifiedStart, change.modifiedLength);
            for (var delta = 1;; delta++) {
                var originalStart = change.originalStart - delta;
                var modifiedStart = change.modifiedStart - delta;
                if (originalStart < originalStop || modifiedStart < modifiedStop) {
                    break;
                }
                if (checkOriginal && !this.OriginalElementsAreEqual(originalStart, originalStart + change.originalLength)) {
                    break;
                }
                if (checkModified && !this.ModifiedElementsAreEqual(modifiedStart, modifiedStart + change.modifiedLength)) {
                    break;
                }
                var score = this._boundaryScore(originalStart, change.originalLength, modifiedStart, change.modifiedLength);
                if (score > bestScore) {
                    bestScore = score;
                    bestDelta = delta;
                }
            }
            change.originalStart -= bestDelta;
            change.modifiedStart -= bestDelta;
        }
        return changes;
    };
    LcsDiff.prototype._OriginalIsBoundary = function (index) {
        if (index <= 0 || index >= this.OriginalSequence.getLength() - 1) {
            return true;
        }
        var element = this.OriginalSequence.getElementAtIndex(index);
        return (typeof element === 'string' && /^\s*$/.test(element));
    };
    LcsDiff.prototype._OriginalRegionIsBoundary = function (originalStart, originalLength) {
        if (this._OriginalIsBoundary(originalStart) || this._OriginalIsBoundary(originalStart - 1)) {
            return true;
        }
        if (originalLength > 0) {
            var originalEnd = originalStart + originalLength;
            if (this._OriginalIsBoundary(originalEnd - 1) || this._OriginalIsBoundary(originalEnd)) {
                return true;
            }
        }
        return false;
    };
    LcsDiff.prototype._ModifiedIsBoundary = function (index) {
        if (index <= 0 || index >= this.ModifiedSequence.getLength() - 1) {
            return true;
        }
        var element = this.ModifiedSequence.getElementAtIndex(index);
        return (typeof element === 'string' && /^\s*$/.test(element));
    };
    LcsDiff.prototype._ModifiedRegionIsBoundary = function (modifiedStart, modifiedLength) {
        if (this._ModifiedIsBoundary(modifiedStart) || this._ModifiedIsBoundary(modifiedStart - 1)) {
            return true;
        }
        if (modifiedLength > 0) {
            var modifiedEnd = modifiedStart + modifiedLength;
            if (this._ModifiedIsBoundary(modifiedEnd - 1) || this._ModifiedIsBoundary(modifiedEnd)) {
                return true;
            }
        }
        return false;
    };
    LcsDiff.prototype._boundaryScore = function (originalStart, originalLength, modifiedStart, modifiedLength) {
        var originalScore = (this._OriginalRegionIsBoundary(originalStart, originalLength) ? 1 : 0);
        var modifiedScore = (this._ModifiedRegionIsBoundary(modifiedStart, modifiedLength) ? 1 : 0);
        return (originalScore + modifiedScore);
    };
    /**
     * Concatenates the two input DiffChange lists and returns the resulting
     * list.
     * @param The left changes
     * @param The right changes
     * @returns The concatenated list
     */
    LcsDiff.prototype.ConcatenateChanges = function (left, right) {
        var mergedChangeArr = [];
        if (left.length === 0 || right.length === 0) {
            return (right.length > 0) ? right : left;
        }
        else if (this.ChangesOverlap(left[left.length - 1], right[0], mergedChangeArr)) {
            // Since we break the problem down recursively, it is possible that we
            // might recurse in the middle of a change thereby splitting it into
            // two changes. Here in the combining stage, we detect and fuse those
            // changes back together
            var result = new Array(left.length + right.length - 1);
            MyArray.Copy(left, 0, result, 0, left.length - 1);
            result[left.length - 1] = mergedChangeArr[0];
            MyArray.Copy(right, 1, result, left.length, right.length - 1);
            return result;
        }
        else {
            var result = new Array(left.length + right.length);
            MyArray.Copy(left, 0, result, 0, left.length);
            MyArray.Copy(right, 0, result, left.length, right.length);
            return result;
        }
    };
    /**
     * Returns true if the two changes overlap and can be merged into a single
     * change
     * @param left The left change
     * @param right The right change
     * @param mergedChange The merged change if the two overlap, null otherwise
     * @returns True if the two changes overlap
     */
    LcsDiff.prototype.ChangesOverlap = function (left, right, mergedChangeArr) {
        Debug.Assert(left.originalStart <= right.originalStart, 'Left change is not less than or equal to right change');
        Debug.Assert(left.modifiedStart <= right.modifiedStart, 'Left change is not less than or equal to right change');
        if (left.originalStart + left.originalLength >= right.originalStart || left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
            var originalStart = left.originalStart;
            var originalLength = left.originalLength;
            var modifiedStart = left.modifiedStart;
            var modifiedLength = left.modifiedLength;
            if (left.originalStart + left.originalLength >= right.originalStart) {
                originalLength = right.originalStart + right.originalLength - left.originalStart;
            }
            if (left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
                modifiedLength = right.modifiedStart + right.modifiedLength - left.modifiedStart;
            }
            mergedChangeArr[0] = new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalLength, modifiedStart, modifiedLength);
            return true;
        }
        else {
            mergedChangeArr[0] = null;
            return false;
        }
    };
    /**
     * Helper method used to clip a diagonal index to the range of valid
     * diagonals. This also decides whether or not the diagonal index,
     * if it exceeds the boundary, should be clipped to the boundary or clipped
     * one inside the boundary depending on the Even/Odd status of the boundary
     * and numDifferences.
     * @param diagonal The index of the diagonal to clip.
     * @param numDifferences The current number of differences being iterated upon.
     * @param diagonalBaseIndex The base reference diagonal.
     * @param numDiagonals The total number of diagonals.
     * @returns The clipped diagonal index.
     */
    LcsDiff.prototype.ClipDiagonalBound = function (diagonal, numDifferences, diagonalBaseIndex, numDiagonals) {
        if (diagonal >= 0 && diagonal < numDiagonals) {
            // Nothing to clip, its in range
            return diagonal;
        }
        // diagonalsBelow: The number of diagonals below the reference diagonal
        // diagonalsAbove: The number of diagonals above the reference diagonal
        var diagonalsBelow = diagonalBaseIndex;
        var diagonalsAbove = numDiagonals - diagonalBaseIndex - 1;
        var diffEven = (numDifferences % 2 === 0);
        if (diagonal < 0) {
            var lowerBoundEven = (diagonalsBelow % 2 === 0);
            return (diffEven === lowerBoundEven) ? 0 : 1;
        }
        else {
            var upperBoundEven = (diagonalsAbove % 2 === 0);
            return (diffEven === upperBoundEven) ? numDiagonals - 1 : numDiagonals - 2;
        }
    };
    return LcsDiff;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js ***!
  \**************************************************************************/
/*! exports provided: DiffChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffChange", function() { return DiffChange; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Represents information about a specific difference between two sequences.
 */
var DiffChange = /** @class */ (function () {
    /**
     * Constructs a new DiffChange with the given sequence information
     * and content.
     */
    function DiffChange(originalStart, originalLength, modifiedStart, modifiedLength) {
        //Debug.Assert(originalLength > 0 || modifiedLength > 0, "originalLength and modifiedLength cannot both be <= 0");
        this.originalStart = originalStart;
        this.originalLength = originalLength;
        this.modifiedStart = modifiedStart;
        this.modifiedLength = modifiedLength;
    }
    /**
     * The end point (exclusive) of the change in the original sequence.
     */
    DiffChange.prototype.getOriginalEnd = function () {
        return this.originalStart + this.originalLength;
    };
    /**
     * The end point (exclusive) of the change in the modified sequence.
     */
    DiffChange.prototype.getModifiedEnd = function () {
        return this.modifiedStart + this.modifiedLength;
    };
    return DiffChange;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/errors.js":
/*!*****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/errors.js ***!
  \*****************************************************************/
/*! exports provided: ErrorHandler, errorHandler, onUnexpectedError, onUnexpectedExternalError, transformErrorForSerialization, isPromiseCanceledError, canceled, illegalArgument, illegalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandler", function() { return errorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnexpectedError", function() { return onUnexpectedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnexpectedExternalError", function() { return onUnexpectedExternalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformErrorForSerialization", function() { return transformErrorForSerialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseCanceledError", function() { return isPromiseCanceledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canceled", function() { return canceled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "illegalArgument", function() { return illegalArgument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "illegalState", function() { return illegalState; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
        this.listeners = [];
        this.unexpectedErrorHandler = function (e) {
            setTimeout(function () {
                if (e.stack) {
                    throw new Error(e.message + '\n\n' + e.stack);
                }
                throw e;
            }, 0);
        };
    }
    ErrorHandler.prototype.emit = function (e) {
        this.listeners.forEach(function (listener) {
            listener(e);
        });
    };
    ErrorHandler.prototype.onUnexpectedError = function (e) {
        this.unexpectedErrorHandler(e);
        this.emit(e);
    };
    // For external errors, we don't want the listeners to be called
    ErrorHandler.prototype.onUnexpectedExternalError = function (e) {
        this.unexpectedErrorHandler(e);
    };
    return ErrorHandler;
}());

var errorHandler = new ErrorHandler();
function onUnexpectedError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        errorHandler.onUnexpectedError(e);
    }
    return undefined;
}
function onUnexpectedExternalError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        errorHandler.onUnexpectedExternalError(e);
    }
    return undefined;
}
function transformErrorForSerialization(error) {
    if (error instanceof Error) {
        var name_1 = error.name, message = error.message;
        var stack = error.stacktrace || error.stack;
        return {
            $isError: true,
            name: name_1,
            message: message,
            stack: stack
        };
    }
    // return as is
    return error;
}
var canceledName = 'Canceled';
/**
 * Checks if the given error is a promise in canceled state
 */
function isPromiseCanceledError(error) {
    return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
/**
 * Returns an error that signals cancellation.
 */
function canceled() {
    var error = new Error(canceledName);
    error.name = error.message;
    return error;
}
function illegalArgument(name) {
    if (name) {
        return new Error("Illegal argument: " + name);
    }
    else {
        return new Error('Illegal argument');
    }
}
function illegalState(name) {
    if (name) {
        return new Error("Illegal state: " + name);
    }
    else {
        return new Error('Illegal state');
    }
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/event.js":
/*!****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/event.js ***!
  \****************************************************************/
/*! exports provided: Event, Emitter, PauseableEmitter, EventMultiplexer, EventBufferer, Relay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseableEmitter", function() { return PauseableEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventMultiplexer", function() { return EventMultiplexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBufferer", function() { return EventBufferer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relay", function() { return Relay; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js");
/* harmony import */ var _functional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functional.js */ "./node_modules/monaco-editor/esm/vs/base/common/functional.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifecycle.js */ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js");
/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkedList.js */ "./node_modules/monaco-editor/esm/vs/base/common/linkedList.js");
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




var Event;
(function (Event) {
    var _disposable = { dispose: function () { } };
    Event.None = function () { return _disposable; };
    /**
     * Given an event, returns another event which only fires once.
     */
    function once(event) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            // we need this, in case the event fires during the listener call
            var didFire = false;
            var result;
            result = event(function (e) {
                if (didFire) {
                    return;
                }
                else if (result) {
                    result.dispose();
                }
                else {
                    didFire = true;
                }
                return listener.call(thisArgs, e);
            }, null, disposables);
            if (didFire) {
                result.dispose();
            }
            return result;
        };
    }
    Event.once = once;
    /**
     * Given an event and a `map` function, returns another event which maps each element
     * throught the mapping function.
     */
    function map(event, map) {
        return snapshot(function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (i) { return listener.call(thisArgs, map(i)); }, null, disposables);
        });
    }
    Event.map = map;
    /**
     * Given an event and an `each` function, returns another identical event and calls
     * the `each` function per each element.
     */
    function forEach(event, each) {
        return snapshot(function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (i) { each(i); listener.call(thisArgs, i); }, null, disposables);
        });
    }
    Event.forEach = forEach;
    function filter(event, filter) {
        return snapshot(function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (e) { return filter(e) && listener.call(thisArgs, e); }, null, disposables);
        });
    }
    Event.filter = filter;
    /**
     * Given an event, returns the same event but typed as `Event<void>`.
     */
    function signal(event) {
        return event;
    }
    Event.signal = signal;
    /**
     * Given a collection of events, returns a single event which emits
     * whenever any of the provided events emit.
     */
    function any() {
        var events = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            events[_i] = arguments[_i];
        }
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return Object(_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["combinedDisposable"])(events.map(function (event) { return event(function (e) { return listener.call(thisArgs, e); }, null, disposables); }));
        };
    }
    Event.any = any;
    /**
     * Given an event and a `merge` function, returns another event which maps each element
     * and the cummulative result throught the `merge` function. Similar to `map`, but with memory.
     */
    function reduce(event, merge, initial) {
        var output = initial;
        return map(event, function (e) {
            output = merge(output, e);
            return output;
        });
    }
    Event.reduce = reduce;
    /**
     * Given a chain of event processing functions (filter, map, etc), each
     * function will be invoked per event & per listener. Snapshotting an event
     * chain allows each function to be invoked just once per event.
     */
    function snapshot(event) {
        var listener;
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                listener = event(emitter.fire, emitter);
            },
            onLastListenerRemove: function () {
                listener.dispose();
            }
        });
        return emitter.event;
    }
    Event.snapshot = snapshot;
    function debounce(event, merge, delay, leading, leakWarningThreshold) {
        if (delay === void 0) { delay = 100; }
        if (leading === void 0) { leading = false; }
        var subscription;
        var output = undefined;
        var handle = undefined;
        var numDebouncedCalls = 0;
        var emitter = new Emitter({
            leakWarningThreshold: leakWarningThreshold,
            onFirstListenerAdd: function () {
                subscription = event(function (cur) {
                    numDebouncedCalls++;
                    output = merge(output, cur);
                    if (leading && !handle) {
                        emitter.fire(output);
                    }
                    clearTimeout(handle);
                    handle = setTimeout(function () {
                        var _output = output;
                        output = undefined;
                        handle = undefined;
                        if (!leading || numDebouncedCalls > 1) {
                            emitter.fire(_output);
                        }
                        numDebouncedCalls = 0;
                    }, delay);
                });
            },
            onLastListenerRemove: function () {
                subscription.dispose();
            }
        });
        return emitter.event;
    }
    Event.debounce = debounce;
    /**
     * Given an event, it returns another event which fires only once and as soon as
     * the input event emits. The event data is the number of millis it took for the
     * event to fire.
     */
    function stopwatch(event) {
        var start = new Date().getTime();
        return map(once(event), function (_) { return new Date().getTime() - start; });
    }
    Event.stopwatch = stopwatch;
    /**
     * Given an event, it returns another event which fires only when the event
     * element changes.
     */
    function latch(event) {
        var firstCall = true;
        var cache;
        return filter(event, function (value) {
            var shouldEmit = firstCall || value !== cache;
            firstCall = false;
            cache = value;
            return shouldEmit;
        });
    }
    Event.latch = latch;
    /**
     * Buffers the provided event until a first listener comes
     * along, at which point fire all the events at once and
     * pipe the event from then on.
     *
     * ```typescript
     * const emitter = new Emitter<number>();
     * const event = emitter.event;
     * const bufferedEvent = buffer(event);
     *
     * emitter.fire(1);
     * emitter.fire(2);
     * emitter.fire(3);
     * // nothing...
     *
     * const listener = bufferedEvent(num => console.log(num));
     * // 1, 2, 3
     *
     * emitter.fire(4);
     * // 4
     * ```
     */
    function buffer(event, nextTick, _buffer) {
        if (nextTick === void 0) { nextTick = false; }
        if (_buffer === void 0) { _buffer = []; }
        var buffer = _buffer.slice();
        var listener = event(function (e) {
            if (buffer) {
                buffer.push(e);
            }
            else {
                emitter.fire(e);
            }
        });
        var flush = function () {
            if (buffer) {
                buffer.forEach(function (e) { return emitter.fire(e); });
            }
            buffer = null;
        };
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                if (!listener) {
                    listener = event(function (e) { return emitter.fire(e); });
                }
            },
            onFirstListenerDidAdd: function () {
                if (buffer) {
                    if (nextTick) {
                        setTimeout(flush);
                    }
                    else {
                        flush();
                    }
                }
            },
            onLastListenerRemove: function () {
                if (listener) {
                    listener.dispose();
                }
                listener = null;
            }
        });
        return emitter.event;
    }
    Event.buffer = buffer;
    var ChainableEvent = /** @class */ (function () {
        function ChainableEvent(event) {
            this.event = event;
        }
        ChainableEvent.prototype.map = function (fn) {
            return new ChainableEvent(map(this.event, fn));
        };
        ChainableEvent.prototype.forEach = function (fn) {
            return new ChainableEvent(forEach(this.event, fn));
        };
        ChainableEvent.prototype.filter = function (fn) {
            return new ChainableEvent(filter(this.event, fn));
        };
        ChainableEvent.prototype.reduce = function (merge, initial) {
            return new ChainableEvent(reduce(this.event, merge, initial));
        };
        ChainableEvent.prototype.latch = function () {
            return new ChainableEvent(latch(this.event));
        };
        ChainableEvent.prototype.on = function (listener, thisArgs, disposables) {
            return this.event(listener, thisArgs, disposables);
        };
        ChainableEvent.prototype.once = function (listener, thisArgs, disposables) {
            return once(this.event)(listener, thisArgs, disposables);
        };
        return ChainableEvent;
    }());
    function chain(event) {
        return new ChainableEvent(event);
    }
    Event.chain = chain;
    function fromNodeEventEmitter(emitter, eventName, map) {
        if (map === void 0) { map = function (id) { return id; }; }
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return result.fire(map.apply(void 0, args));
        };
        var onFirstListenerAdd = function () { return emitter.on(eventName, fn); };
        var onLastListenerRemove = function () { return emitter.removeListener(eventName, fn); };
        var result = new Emitter({ onFirstListenerAdd: onFirstListenerAdd, onLastListenerRemove: onLastListenerRemove });
        return result.event;
    }
    Event.fromNodeEventEmitter = fromNodeEventEmitter;
    function fromPromise(promise) {
        var emitter = new Emitter();
        var shouldEmit = false;
        promise
            .then(undefined, function () { return null; })
            .then(function () {
            if (!shouldEmit) {
                setTimeout(function () { return emitter.fire(undefined); }, 0);
            }
            else {
                emitter.fire(undefined);
            }
        });
        shouldEmit = true;
        return emitter.event;
    }
    Event.fromPromise = fromPromise;
    function toPromise(event) {
        return new Promise(function (c) { return once(event)(c); });
    }
    Event.toPromise = toPromise;
})(Event || (Event = {}));
var _globalLeakWarningThreshold = -1;
var LeakageMonitor = /** @class */ (function () {
    function LeakageMonitor(customThreshold, name) {
        if (name === void 0) { name = Math.random().toString(18).slice(2, 5); }
        this.customThreshold = customThreshold;
        this.name = name;
        this._warnCountdown = 0;
    }
    LeakageMonitor.prototype.dispose = function () {
        if (this._stacks) {
            this._stacks.clear();
        }
    };
    LeakageMonitor.prototype.check = function (listenerCount) {
        var _this = this;
        var threshold = _globalLeakWarningThreshold;
        if (typeof this.customThreshold === 'number') {
            threshold = this.customThreshold;
        }
        if (threshold <= 0 || listenerCount < threshold) {
            return undefined;
        }
        if (!this._stacks) {
            this._stacks = new Map();
        }
        var stack = new Error().stack.split('\n').slice(3).join('\n');
        var count = (this._stacks.get(stack) || 0);
        this._stacks.set(stack, count + 1);
        this._warnCountdown -= 1;
        if (this._warnCountdown <= 0) {
            // only warn on first exceed and then every time the limit
            // is exceeded by 50% again
            this._warnCountdown = threshold * 0.5;
            // find most frequent listener and print warning
            var topStack_1;
            var topCount_1 = 0;
            this._stacks.forEach(function (count, stack) {
                if (!topStack_1 || topCount_1 < count) {
                    topStack_1 = stack;
                    topCount_1 = count;
                }
            });
            console.warn("[" + this.name + "] potential listener LEAK detected, having " + listenerCount + " listeners already. MOST frequent listener (" + topCount_1 + "):");
            console.warn(topStack_1);
        }
        return function () {
            var count = (_this._stacks.get(stack) || 0);
            _this._stacks.set(stack, count - 1);
        };
    };
    return LeakageMonitor;
}());
/**
 * The Emitter can be used to expose an Event to the public
 * to fire it from the insides.
 * Sample:
    class Document {

        private _onDidChange = new Emitter<(value:string)=>any>();

        public onDidChange = this._onDidChange.event;

        // getter-style
        // get onDidChange(): Event<(value:string)=>any> {
        // 	return this._onDidChange.event;
        // }

        private _doIt() {
            //...
            this._onDidChange.fire(value);
        }
    }
 */
var Emitter = /** @class */ (function () {
    function Emitter(options) {
        this._disposed = false;
        this._options = options;
        this._leakageMon = _globalLeakWarningThreshold > 0
            ? new LeakageMonitor(this._options && this._options.leakWarningThreshold)
            : undefined;
    }
    Object.defineProperty(Emitter.prototype, "event", {
        /**
         * For the public to allow to subscribe
         * to events from this Emitter
         */
        get: function () {
            var _this = this;
            if (!this._event) {
                this._event = function (listener, thisArgs, disposables) {
                    if (!_this._listeners) {
                        _this._listeners = new _linkedList_js__WEBPACK_IMPORTED_MODULE_3__["LinkedList"]();
                    }
                    var firstListener = _this._listeners.isEmpty();
                    if (firstListener && _this._options && _this._options.onFirstListenerAdd) {
                        _this._options.onFirstListenerAdd(_this);
                    }
                    var remove = _this._listeners.push(!thisArgs ? listener : [listener, thisArgs]);
                    if (firstListener && _this._options && _this._options.onFirstListenerDidAdd) {
                        _this._options.onFirstListenerDidAdd(_this);
                    }
                    if (_this._options && _this._options.onListenerDidAdd) {
                        _this._options.onListenerDidAdd(_this, listener, thisArgs);
                    }
                    // check and record this emitter for potential leakage
                    var removeMonitor;
                    if (_this._leakageMon) {
                        removeMonitor = _this._leakageMon.check(_this._listeners.size);
                    }
                    var result;
                    result = {
                        dispose: function () {
                            if (removeMonitor) {
                                removeMonitor();
                            }
                            result.dispose = Emitter._noop;
                            if (!_this._disposed) {
                                remove();
                                if (_this._options && _this._options.onLastListenerRemove) {
                                    var hasListeners = (_this._listeners && !_this._listeners.isEmpty());
                                    if (!hasListeners) {
                                        _this._options.onLastListenerRemove(_this);
                                    }
                                }
                            }
                        }
                    };
                    if (Array.isArray(disposables)) {
                        disposables.push(result);
                    }
                    return result;
                };
            }
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    Emitter.prototype.fire = function (event) {
        if (this._listeners) {
            // put all [listener,event]-pairs into delivery queue
            // then emit all event. an inner/nested event might be
            // the driver of this
            if (!this._deliveryQueue) {
                this._deliveryQueue = new _linkedList_js__WEBPACK_IMPORTED_MODULE_3__["LinkedList"]();
            }
            for (var iter = this._listeners.iterator(), e = iter.next(); !e.done; e = iter.next()) {
                this._deliveryQueue.push([e.value, event]);
            }
            while (this._deliveryQueue.size > 0) {
                var _a = this._deliveryQueue.shift(), listener = _a[0], event_1 = _a[1];
                try {
                    if (typeof listener === 'function') {
                        listener.call(undefined, event_1);
                    }
                    else {
                        listener[0].call(listener[1], event_1);
                    }
                }
                catch (e) {
                    Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["onUnexpectedError"])(e);
                }
            }
        }
    };
    Emitter.prototype.dispose = function () {
        if (this._listeners) {
            this._listeners.clear();
        }
        if (this._deliveryQueue) {
            this._deliveryQueue.clear();
        }
        if (this._leakageMon) {
            this._leakageMon.dispose();
        }
        this._disposed = true;
    };
    Emitter._noop = function () { };
    return Emitter;
}());

var PauseableEmitter = /** @class */ (function (_super) {
    __extends(PauseableEmitter, _super);
    function PauseableEmitter(options) {
        var _this = _super.call(this, options) || this;
        _this._isPaused = 0;
        _this._eventQueue = new _linkedList_js__WEBPACK_IMPORTED_MODULE_3__["LinkedList"]();
        _this._mergeFn = options && options.merge;
        return _this;
    }
    PauseableEmitter.prototype.pause = function () {
        this._isPaused++;
    };
    PauseableEmitter.prototype.resume = function () {
        if (this._isPaused !== 0 && --this._isPaused === 0) {
            if (this._mergeFn) {
                // use the merge function to create a single composite
                // event. make a copy in case firing pauses this emitter
                var events = this._eventQueue.toArray();
                this._eventQueue.clear();
                _super.prototype.fire.call(this, this._mergeFn(events));
            }
            else {
                // no merging, fire each event individually and test
                // that this emitter isn't paused halfway through
                while (!this._isPaused && this._eventQueue.size !== 0) {
                    _super.prototype.fire.call(this, this._eventQueue.shift());
                }
            }
        }
    };
    PauseableEmitter.prototype.fire = function (event) {
        if (this._listeners) {
            if (this._isPaused !== 0) {
                this._eventQueue.push(event);
            }
            else {
                _super.prototype.fire.call(this, event);
            }
        }
    };
    return PauseableEmitter;
}(Emitter));

var EventMultiplexer = /** @class */ (function () {
    function EventMultiplexer() {
        var _this = this;
        this.hasListeners = false;
        this.events = [];
        this.emitter = new Emitter({
            onFirstListenerAdd: function () { return _this.onFirstListenerAdd(); },
            onLastListenerRemove: function () { return _this.onLastListenerRemove(); }
        });
    }
    Object.defineProperty(EventMultiplexer.prototype, "event", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    EventMultiplexer.prototype.add = function (event) {
        var _this = this;
        var e = { event: event, listener: null };
        this.events.push(e);
        if (this.hasListeners) {
            this.hook(e);
        }
        var dispose = function () {
            if (_this.hasListeners) {
                _this.unhook(e);
            }
            var idx = _this.events.indexOf(e);
            _this.events.splice(idx, 1);
        };
        return Object(_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["toDisposable"])(Object(_functional_js__WEBPACK_IMPORTED_MODULE_1__["once"])(dispose));
    };
    EventMultiplexer.prototype.onFirstListenerAdd = function () {
        var _this = this;
        this.hasListeners = true;
        this.events.forEach(function (e) { return _this.hook(e); });
    };
    EventMultiplexer.prototype.onLastListenerRemove = function () {
        var _this = this;
        this.hasListeners = false;
        this.events.forEach(function (e) { return _this.unhook(e); });
    };
    EventMultiplexer.prototype.hook = function (e) {
        var _this = this;
        e.listener = e.event(function (r) { return _this.emitter.fire(r); });
    };
    EventMultiplexer.prototype.unhook = function (e) {
        if (e.listener) {
            e.listener.dispose();
        }
        e.listener = null;
    };
    EventMultiplexer.prototype.dispose = function () {
        this.emitter.dispose();
    };
    return EventMultiplexer;
}());

/**
 * The EventBufferer is useful in situations in which you want
 * to delay firing your events during some code.
 * You can wrap that code and be sure that the event will not
 * be fired during that wrap.
 *
 * ```
 * const emitter: Emitter;
 * const delayer = new EventDelayer();
 * const delayedEvent = delayer.wrapEvent(emitter.event);
 *
 * delayedEvent(console.log);
 *
 * delayer.bufferEvents(() => {
 *   emitter.fire(); // event will not be fired yet
 * });
 *
 * // event will only be fired at this point
 * ```
 */
var EventBufferer = /** @class */ (function () {
    function EventBufferer() {
        this.buffers = [];
    }
    EventBufferer.prototype.wrapEvent = function (event) {
        var _this = this;
        return function (listener, thisArgs, disposables) {
            return event(function (i) {
                var buffer = _this.buffers[_this.buffers.length - 1];
                if (buffer) {
                    buffer.push(function () { return listener.call(thisArgs, i); });
                }
                else {
                    listener.call(thisArgs, i);
                }
            }, undefined, disposables);
        };
    };
    EventBufferer.prototype.bufferEvents = function (fn) {
        var buffer = [];
        this.buffers.push(buffer);
        var r = fn();
        this.buffers.pop();
        buffer.forEach(function (flush) { return flush(); });
        return r;
    };
    return EventBufferer;
}());

/**
 * A Relay is an event forwarder which functions as a replugabble event pipe.
 * Once created, you can connect an input event to it and it will simply forward
 * events from that input event through its own `event` property. The `input`
 * can be changed at any point in time.
 */
var Relay = /** @class */ (function () {
    function Relay() {
        var _this = this;
        this.listening = false;
        this.inputEvent = Event.None;
        this.inputEventListener = _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["Disposable"].None;
        this.emitter = new Emitter({
            onFirstListenerDidAdd: function () {
                _this.listening = true;
                _this.inputEventListener = _this.inputEvent(_this.emitter.fire, _this.emitter);
            },
            onLastListenerRemove: function () {
                _this.listening = false;
                _this.inputEventListener.dispose();
            }
        });
        this.event = this.emitter.event;
    }
    Object.defineProperty(Relay.prototype, "input", {
        set: function (event) {
            this.inputEvent = event;
            if (this.listening) {
                this.inputEventListener.dispose();
                this.inputEventListener = event(this.emitter.fire, this.emitter);
            }
        },
        enumerable: true,
        configurable: true
    });
    Relay.prototype.dispose = function () {
        this.inputEventListener.dispose();
        this.emitter.dispose();
    };
    return Relay;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/functional.js":
/*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/functional.js ***!
  \*********************************************************************/
/*! exports provided: once */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function once(fn) {
    var _this = this;
    var didCall = false;
    var result;
    return function () {
        if (didCall) {
            return result;
        }
        didCall = true;
        result = fn.apply(_this, arguments);
        return result;
    };
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/iterator.js ***!
  \*******************************************************************/
/*! exports provided: FIN, Iterator, getSequenceIterator, ArrayIterator, ArrayNavigator, MappedIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIN", function() { return FIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterator", function() { return Iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSequenceIterator", function() { return getSequenceIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayIterator", function() { return ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayNavigator", function() { return ArrayNavigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappedIterator", function() { return MappedIterator; });
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
var FIN = { done: true, value: undefined };
var Iterator;
(function (Iterator) {
    var _empty = {
        next: function () {
            return FIN;
        }
    };
    function empty() {
        return _empty;
    }
    Iterator.empty = empty;
    function fromArray(array, index, length) {
        if (index === void 0) { index = 0; }
        if (length === void 0) { length = array.length; }
        return {
            next: function () {
                if (index >= length) {
                    return FIN;
                }
                return { done: false, value: array[index++] };
            }
        };
    }
    Iterator.fromArray = fromArray;
    function from(elements) {
        if (!elements) {
            return Iterator.empty();
        }
        else if (Array.isArray(elements)) {
            return Iterator.fromArray(elements);
        }
        else {
            return elements;
        }
    }
    Iterator.from = from;
    function map(iterator, fn) {
        return {
            next: function () {
                var element = iterator.next();
                if (element.done) {
                    return FIN;
                }
                else {
                    return { done: false, value: fn(element.value) };
                }
            }
        };
    }
    Iterator.map = map;
    function filter(iterator, fn) {
        return {
            next: function () {
                while (true) {
                    var element = iterator.next();
                    if (element.done) {
                        return FIN;
                    }
                    if (fn(element.value)) {
                        return { done: false, value: element.value };
                    }
                }
            }
        };
    }
    Iterator.filter = filter;
    function forEach(iterator, fn) {
        for (var next = iterator.next(); !next.done; next = iterator.next()) {
            fn(next.value);
        }
    }
    Iterator.forEach = forEach;
    function collect(iterator) {
        var result = [];
        forEach(iterator, function (value) { return result.push(value); });
        return result;
    }
    Iterator.collect = collect;
})(Iterator || (Iterator = {}));
function getSequenceIterator(arg) {
    if (Array.isArray(arg)) {
        return Iterator.fromArray(arg);
    }
    else {
        return arg;
    }
}
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(items, start, end, index) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = items.length; }
        if (index === void 0) { index = start - 1; }
        this.items = items;
        this.start = start;
        this.end = end;
        this.index = index;
    }
    ArrayIterator.prototype.next = function () {
        this.index = Math.min(this.index + 1, this.end);
        return this.current();
    };
    ArrayIterator.prototype.current = function () {
        if (this.index === this.start - 1 || this.index === this.end) {
            return null;
        }
        return this.items[this.index];
    };
    return ArrayIterator;
}());

var ArrayNavigator = /** @class */ (function (_super) {
    __extends(ArrayNavigator, _super);
    function ArrayNavigator(items, start, end, index) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = items.length; }
        if (index === void 0) { index = start - 1; }
        return _super.call(this, items, start, end, index) || this;
    }
    ArrayNavigator.prototype.current = function () {
        return _super.prototype.current.call(this);
    };
    ArrayNavigator.prototype.previous = function () {
        this.index = Math.max(this.index - 1, this.start - 1);
        return this.current();
    };
    ArrayNavigator.prototype.first = function () {
        this.index = this.start;
        return this.current();
    };
    ArrayNavigator.prototype.last = function () {
        this.index = this.end - 1;
        return this.current();
    };
    ArrayNavigator.prototype.parent = function () {
        return null;
    };
    return ArrayNavigator;
}(ArrayIterator));

var MappedIterator = /** @class */ (function () {
    function MappedIterator(iterator, fn) {
        this.iterator = iterator;
        this.fn = fn;
        // noop
    }
    MappedIterator.prototype.next = function () { return this.fn(this.iterator.next()); };
    return MappedIterator;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js ***!
  \*******************************************************************/
/*! exports provided: KeyCodeUtils, KeyChord, createKeybinding, createSimpleKeybinding, SimpleKeybinding, ChordKeybinding, ResolvedKeybindingPart, ResolvedKeybinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodeUtils", function() { return KeyCodeUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyChord", function() { return KeyChord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKeybinding", function() { return createKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSimpleKeybinding", function() { return createSimpleKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleKeybinding", function() { return SimpleKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordKeybinding", function() { return ChordKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvedKeybindingPart", function() { return ResolvedKeybindingPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvedKeybinding", function() { return ResolvedKeybinding; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var KeyCodeStrMap = /** @class */ (function () {
    function KeyCodeStrMap() {
        this._keyCodeToStr = [];
        this._strToKeyCode = Object.create(null);
    }
    KeyCodeStrMap.prototype.define = function (keyCode, str) {
        this._keyCodeToStr[keyCode] = str;
        this._strToKeyCode[str.toLowerCase()] = keyCode;
    };
    KeyCodeStrMap.prototype.keyCodeToStr = function (keyCode) {
        return this._keyCodeToStr[keyCode];
    };
    KeyCodeStrMap.prototype.strToKeyCode = function (str) {
        return this._strToKeyCode[str.toLowerCase()] || 0 /* Unknown */;
    };
    return KeyCodeStrMap;
}());
var uiMap = new KeyCodeStrMap();
var userSettingsUSMap = new KeyCodeStrMap();
var userSettingsGeneralMap = new KeyCodeStrMap();
(function () {
    function define(keyCode, uiLabel, usUserSettingsLabel, generalUserSettingsLabel) {
        if (usUserSettingsLabel === void 0) { usUserSettingsLabel = uiLabel; }
        if (generalUserSettingsLabel === void 0) { generalUserSettingsLabel = usUserSettingsLabel; }
        uiMap.define(keyCode, uiLabel);
        userSettingsUSMap.define(keyCode, usUserSettingsLabel);
        userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel);
    }
    define(0 /* Unknown */, 'unknown');
    define(1 /* Backspace */, 'Backspace');
    define(2 /* Tab */, 'Tab');
    define(3 /* Enter */, 'Enter');
    define(4 /* Shift */, 'Shift');
    define(5 /* Ctrl */, 'Ctrl');
    define(6 /* Alt */, 'Alt');
    define(7 /* PauseBreak */, 'PauseBreak');
    define(8 /* CapsLock */, 'CapsLock');
    define(9 /* Escape */, 'Escape');
    define(10 /* Space */, 'Space');
    define(11 /* PageUp */, 'PageUp');
    define(12 /* PageDown */, 'PageDown');
    define(13 /* End */, 'End');
    define(14 /* Home */, 'Home');
    define(15 /* LeftArrow */, 'LeftArrow', 'Left');
    define(16 /* UpArrow */, 'UpArrow', 'Up');
    define(17 /* RightArrow */, 'RightArrow', 'Right');
    define(18 /* DownArrow */, 'DownArrow', 'Down');
    define(19 /* Insert */, 'Insert');
    define(20 /* Delete */, 'Delete');
    define(21 /* KEY_0 */, '0');
    define(22 /* KEY_1 */, '1');
    define(23 /* KEY_2 */, '2');
    define(24 /* KEY_3 */, '3');
    define(25 /* KEY_4 */, '4');
    define(26 /* KEY_5 */, '5');
    define(27 /* KEY_6 */, '6');
    define(28 /* KEY_7 */, '7');
    define(29 /* KEY_8 */, '8');
    define(30 /* KEY_9 */, '9');
    define(31 /* KEY_A */, 'A');
    define(32 /* KEY_B */, 'B');
    define(33 /* KEY_C */, 'C');
    define(34 /* KEY_D */, 'D');
    define(35 /* KEY_E */, 'E');
    define(36 /* KEY_F */, 'F');
    define(37 /* KEY_G */, 'G');
    define(38 /* KEY_H */, 'H');
    define(39 /* KEY_I */, 'I');
    define(40 /* KEY_J */, 'J');
    define(41 /* KEY_K */, 'K');
    define(42 /* KEY_L */, 'L');
    define(43 /* KEY_M */, 'M');
    define(44 /* KEY_N */, 'N');
    define(45 /* KEY_O */, 'O');
    define(46 /* KEY_P */, 'P');
    define(47 /* KEY_Q */, 'Q');
    define(48 /* KEY_R */, 'R');
    define(49 /* KEY_S */, 'S');
    define(50 /* KEY_T */, 'T');
    define(51 /* KEY_U */, 'U');
    define(52 /* KEY_V */, 'V');
    define(53 /* KEY_W */, 'W');
    define(54 /* KEY_X */, 'X');
    define(55 /* KEY_Y */, 'Y');
    define(56 /* KEY_Z */, 'Z');
    define(57 /* Meta */, 'Meta');
    define(58 /* ContextMenu */, 'ContextMenu');
    define(59 /* F1 */, 'F1');
    define(60 /* F2 */, 'F2');
    define(61 /* F3 */, 'F3');
    define(62 /* F4 */, 'F4');
    define(63 /* F5 */, 'F5');
    define(64 /* F6 */, 'F6');
    define(65 /* F7 */, 'F7');
    define(66 /* F8 */, 'F8');
    define(67 /* F9 */, 'F9');
    define(68 /* F10 */, 'F10');
    define(69 /* F11 */, 'F11');
    define(70 /* F12 */, 'F12');
    define(71 /* F13 */, 'F13');
    define(72 /* F14 */, 'F14');
    define(73 /* F15 */, 'F15');
    define(74 /* F16 */, 'F16');
    define(75 /* F17 */, 'F17');
    define(76 /* F18 */, 'F18');
    define(77 /* F19 */, 'F19');
    define(78 /* NumLock */, 'NumLock');
    define(79 /* ScrollLock */, 'ScrollLock');
    define(80 /* US_SEMICOLON */, ';', ';', 'OEM_1');
    define(81 /* US_EQUAL */, '=', '=', 'OEM_PLUS');
    define(82 /* US_COMMA */, ',', ',', 'OEM_COMMA');
    define(83 /* US_MINUS */, '-', '-', 'OEM_MINUS');
    define(84 /* US_DOT */, '.', '.', 'OEM_PERIOD');
    define(85 /* US_SLASH */, '/', '/', 'OEM_2');
    define(86 /* US_BACKTICK */, '`', '`', 'OEM_3');
    define(110 /* ABNT_C1 */, 'ABNT_C1');
    define(111 /* ABNT_C2 */, 'ABNT_C2');
    define(87 /* US_OPEN_SQUARE_BRACKET */, '[', '[', 'OEM_4');
    define(88 /* US_BACKSLASH */, '\\', '\\', 'OEM_5');
    define(89 /* US_CLOSE_SQUARE_BRACKET */, ']', ']', 'OEM_6');
    define(90 /* US_QUOTE */, '\'', '\'', 'OEM_7');
    define(91 /* OEM_8 */, 'OEM_8');
    define(92 /* OEM_102 */, 'OEM_102');
    define(93 /* NUMPAD_0 */, 'NumPad0');
    define(94 /* NUMPAD_1 */, 'NumPad1');
    define(95 /* NUMPAD_2 */, 'NumPad2');
    define(96 /* NUMPAD_3 */, 'NumPad3');
    define(97 /* NUMPAD_4 */, 'NumPad4');
    define(98 /* NUMPAD_5 */, 'NumPad5');
    define(99 /* NUMPAD_6 */, 'NumPad6');
    define(100 /* NUMPAD_7 */, 'NumPad7');
    define(101 /* NUMPAD_8 */, 'NumPad8');
    define(102 /* NUMPAD_9 */, 'NumPad9');
    define(103 /* NUMPAD_MULTIPLY */, 'NumPad_Multiply');
    define(104 /* NUMPAD_ADD */, 'NumPad_Add');
    define(105 /* NUMPAD_SEPARATOR */, 'NumPad_Separator');
    define(106 /* NUMPAD_SUBTRACT */, 'NumPad_Subtract');
    define(107 /* NUMPAD_DECIMAL */, 'NumPad_Decimal');
    define(108 /* NUMPAD_DIVIDE */, 'NumPad_Divide');
})();
var KeyCodeUtils;
(function (KeyCodeUtils) {
    function toString(keyCode) {
        return uiMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toString = toString;
    function fromString(key) {
        return uiMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromString = fromString;
    function toUserSettingsUS(keyCode) {
        return userSettingsUSMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;
    function toUserSettingsGeneral(keyCode) {
        return userSettingsGeneralMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;
    function fromUserSettings(key) {
        return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromUserSettings = fromUserSettings;
})(KeyCodeUtils || (KeyCodeUtils = {}));
function KeyChord(firstPart, secondPart) {
    var chordPart = ((secondPart & 0x0000FFFF) << 16) >>> 0;
    return (firstPart | chordPart) >>> 0;
}
function createKeybinding(keybinding, OS) {
    if (keybinding === 0) {
        return null;
    }
    var firstPart = (keybinding & 0x0000FFFF) >>> 0;
    var chordPart = (keybinding & 0xFFFF0000) >>> 16;
    if (chordPart !== 0) {
        return new ChordKeybinding([
            createSimpleKeybinding(firstPart, OS),
            createSimpleKeybinding(chordPart, OS)
        ]);
    }
    return new ChordKeybinding([createSimpleKeybinding(firstPart, OS)]);
}
function createSimpleKeybinding(keybinding, OS) {
    var ctrlCmd = (keybinding & 2048 /* CtrlCmd */ ? true : false);
    var winCtrl = (keybinding & 256 /* WinCtrl */ ? true : false);
    var ctrlKey = (OS === 2 /* Macintosh */ ? winCtrl : ctrlCmd);
    var shiftKey = (keybinding & 1024 /* Shift */ ? true : false);
    var altKey = (keybinding & 512 /* Alt */ ? true : false);
    var metaKey = (OS === 2 /* Macintosh */ ? ctrlCmd : winCtrl);
    var keyCode = (keybinding & 255 /* KeyCode */);
    return new SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode);
}
var SimpleKeybinding = /** @class */ (function () {
    function SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode) {
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.altKey = altKey;
        this.metaKey = metaKey;
        this.keyCode = keyCode;
    }
    SimpleKeybinding.prototype.equals = function (other) {
        return (this.ctrlKey === other.ctrlKey
            && this.shiftKey === other.shiftKey
            && this.altKey === other.altKey
            && this.metaKey === other.metaKey
            && this.keyCode === other.keyCode);
    };
    SimpleKeybinding.prototype.isModifierKey = function () {
        return (this.keyCode === 0 /* Unknown */
            || this.keyCode === 5 /* Ctrl */
            || this.keyCode === 57 /* Meta */
            || this.keyCode === 6 /* Alt */
            || this.keyCode === 4 /* Shift */);
    };
    SimpleKeybinding.prototype.toChord = function () {
        return new ChordKeybinding([this]);
    };
    /**
     * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
     */
    SimpleKeybinding.prototype.isDuplicateModifierCase = function () {
        return ((this.ctrlKey && this.keyCode === 5 /* Ctrl */)
            || (this.shiftKey && this.keyCode === 4 /* Shift */)
            || (this.altKey && this.keyCode === 6 /* Alt */)
            || (this.metaKey && this.keyCode === 57 /* Meta */));
    };
    return SimpleKeybinding;
}());

var ChordKeybinding = /** @class */ (function () {
    function ChordKeybinding(parts) {
        if (parts.length === 0) {
            throw Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["illegalArgument"])("parts");
        }
        this.parts = parts;
    }
    ChordKeybinding.prototype.equals = function (other) {
        if (other === null) {
            return false;
        }
        if (this.parts.length !== other.parts.length) {
            return false;
        }
        for (var i = 0; i < this.parts.length; i++) {
            if (!this.parts[i].equals(other.parts[i])) {
                return false;
            }
        }
        return true;
    };
    return ChordKeybinding;
}());

var ResolvedKeybindingPart = /** @class */ (function () {
    function ResolvedKeybindingPart(ctrlKey, shiftKey, altKey, metaKey, kbLabel, kbAriaLabel) {
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.altKey = altKey;
        this.metaKey = metaKey;
        this.keyLabel = kbLabel;
        this.keyAriaLabel = kbAriaLabel;
    }
    return ResolvedKeybindingPart;
}());

/**
 * A resolved keybinding. Can be a simple keybinding or a chord keybinding.
 */
var ResolvedKeybinding = /** @class */ (function () {
    function ResolvedKeybinding() {
    }
    return ResolvedKeybinding;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js ***!
  \********************************************************************/
/*! exports provided: isDisposable, dispose, combinedDisposable, toDisposable, Disposable, ImmortalReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisposable", function() { return isDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispose", function() { return dispose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinedDisposable", function() { return combinedDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDisposable", function() { return toDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disposable", function() { return Disposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmortalReference", function() { return ImmortalReference; });
function isDisposable(thing) {
    return typeof thing.dispose === 'function'
        && thing.dispose.length === 0;
}
function dispose(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (Array.isArray(first)) {
        first.forEach(function (d) { return d && d.dispose(); });
        return [];
    }
    else if (rest.length === 0) {
        if (first) {
            first.dispose();
            return first;
        }
        return undefined;
    }
    else {
        dispose(first);
        dispose(rest);
        return [];
    }
}
function combinedDisposable(disposables) {
    return { dispose: function () { return dispose(disposables); } };
}
function toDisposable(fn) {
    return { dispose: function () { fn(); } };
}
var Disposable = /** @class */ (function () {
    function Disposable() {
        this._toDispose = [];
        this._lifecycle_disposable_isDisposed = false;
    }
    Disposable.prototype.dispose = function () {
        this._lifecycle_disposable_isDisposed = true;
        this._toDispose = dispose(this._toDispose);
    };
    Disposable.prototype._register = function (t) {
        if (this._lifecycle_disposable_isDisposed) {
            console.warn('Registering disposable on object that has already been disposed.');
            t.dispose();
        }
        else {
            this._toDispose.push(t);
        }
        return t;
    };
    Disposable.None = Object.freeze({ dispose: function () { } });
    return Disposable;
}());

var ImmortalReference = /** @class */ (function () {
    function ImmortalReference(object) {
        this.object = object;
    }
    ImmortalReference.prototype.dispose = function () { };
    return ImmortalReference;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/linkedList.js":
/*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/linkedList.js ***!
  \*********************************************************************/
/*! exports provided: LinkedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iterator.js */ "./node_modules/monaco-editor/esm/vs/base/common/iterator.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var Node = /** @class */ (function () {
    function Node(element) {
        this.element = element;
        this.next = Node.Undefined;
        this.prev = Node.Undefined;
    }
    Node.Undefined = new Node(undefined);
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    }
    Object.defineProperty(LinkedList.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.isEmpty = function () {
        return this._first === Node.Undefined;
    };
    LinkedList.prototype.clear = function () {
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    };
    LinkedList.prototype.unshift = function (element) {
        return this._insert(element, false);
    };
    LinkedList.prototype.push = function (element) {
        return this._insert(element, true);
    };
    LinkedList.prototype._insert = function (element, atTheEnd) {
        var _this = this;
        var newNode = new Node(element);
        if (this._first === Node.Undefined) {
            this._first = newNode;
            this._last = newNode;
        }
        else if (atTheEnd) {
            // push
            var oldLast = this._last;
            this._last = newNode;
            newNode.prev = oldLast;
            oldLast.next = newNode;
        }
        else {
            // unshift
            var oldFirst = this._first;
            this._first = newNode;
            newNode.next = oldFirst;
            oldFirst.prev = newNode;
        }
        this._size += 1;
        var didRemove = false;
        return function () {
            if (!didRemove) {
                didRemove = true;
                _this._remove(newNode);
            }
        };
    };
    LinkedList.prototype.shift = function () {
        if (this._first === Node.Undefined) {
            return undefined;
        }
        else {
            var res = this._first.element;
            this._remove(this._first);
            return res;
        }
    };
    LinkedList.prototype._remove = function (node) {
        if (node.prev !== Node.Undefined && node.next !== Node.Undefined) {
            // middle
            var anchor = node.prev;
            anchor.next = node.next;
            node.next.prev = anchor;
        }
        else if (node.prev === Node.Undefined && node.next === Node.Undefined) {
            // only node
            this._first = Node.Undefined;
            this._last = Node.Undefined;
        }
        else if (node.next === Node.Undefined) {
            // last
            this._last = this._last.prev;
            this._last.next = Node.Undefined;
        }
        else if (node.prev === Node.Undefined) {
            // first
            this._first = this._first.next;
            this._first.prev = Node.Undefined;
        }
        // done
        this._size -= 1;
    };
    LinkedList.prototype.iterator = function () {
        var element;
        var node = this._first;
        return {
            next: function () {
                if (node === Node.Undefined) {
                    return _iterator_js__WEBPACK_IMPORTED_MODULE_0__["FIN"];
                }
                if (!element) {
                    element = { done: false, value: node.element };
                }
                else {
                    element.value = node.element;
                }
                node = node.next;
                return element;
            }
        };
    };
    LinkedList.prototype.toArray = function () {
        var result = [];
        for (var node = this._first; node !== Node.Undefined; node = node.next) {
            result.push(node.element);
        }
        return result;
    };
    return LinkedList;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/platform.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/platform.js ***!
  \*******************************************************************/
/*! exports provided: isWindows, isMacintosh, isLinux, isNative, isWeb, globals, setImmediate, OS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindows", function() { return isWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMacintosh", function() { return isMacintosh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinux", function() { return isLinux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNative", function() { return isNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeb", function() { return isWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS", function() { return OS; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var LANGUAGE_DEFAULT = 'en';
var _isWindows = false;
var _isMacintosh = false;
var _isLinux = false;
var _isNative = false;
var _isWeb = false;
var _locale = undefined;
var _language = LANGUAGE_DEFAULT;
var _translationsConfigFile = undefined;
var isElectronRenderer = (typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.electron !== 'undefined' && process.type === 'renderer');
// OS detection
if (typeof navigator === 'object' && !isElectronRenderer) {
    var userAgent = navigator.userAgent;
    _isWindows = userAgent.indexOf('Windows') >= 0;
    _isMacintosh = userAgent.indexOf('Macintosh') >= 0;
    _isLinux = userAgent.indexOf('Linux') >= 0;
    _isWeb = true;
    _locale = navigator.language;
    _language = _locale;
}
else if (typeof process === 'object') {
    _isWindows = (process.platform === 'win32');
    _isMacintosh = (process.platform === 'darwin');
    _isLinux = (process.platform === 'linux');
    _locale = LANGUAGE_DEFAULT;
    _language = LANGUAGE_DEFAULT;
    var rawNlsConfig = process.env['VSCODE_NLS_CONFIG'];
    if (rawNlsConfig) {
        try {
            var nlsConfig = JSON.parse(rawNlsConfig);
            var resolved = nlsConfig.availableLanguages['*'];
            _locale = nlsConfig.locale;
            // VSCode's default language is 'en'
            _language = resolved ? resolved : LANGUAGE_DEFAULT;
            _translationsConfigFile = nlsConfig._translationsConfigFile;
        }
        catch (e) {
        }
    }
    _isNative = true;
}
var _platform = 0 /* Web */;
if (_isNative) {
    if (_isMacintosh) {
        _platform = 1 /* Mac */;
    }
    else if (_isWindows) {
        _platform = 3 /* Windows */;
    }
    else if (_isLinux) {
        _platform = 2 /* Linux */;
    }
}
var isWindows = _isWindows;
var isMacintosh = _isMacintosh;
var isLinux = _isLinux;
var isNative = _isNative;
var isWeb = _isWeb;
var _globals = (typeof self === 'object' ? self : typeof global === 'object' ? global : {});
var globals = _globals;
var _setImmediate = null;
function setImmediate(callback) {
    if (_setImmediate === null) {
        if (globals.setImmediate) {
            _setImmediate = globals.setImmediate.bind(globals);
        }
        else if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
            _setImmediate = process.nextTick.bind(process);
        }
        else {
            _setImmediate = globals.setTimeout.bind(globals);
        }
    }
    return _setImmediate(callback);
}
var OS = (_isMacintosh ? 2 /* Macintosh */ : (_isWindows ? 1 /* Windows */ : 3 /* Linux */));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/strings.js":
/*!******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/strings.js ***!
  \******************************************************************/
/*! exports provided: empty, isFalsyOrWhitespace, pad, format, escape, escapeRegExpCharacters, trim, ltrim, rtrim, convertSimple2RegExpPattern, startsWith, endsWith, createRegExp, regExpLeadsToEndlessLoop, regExpFlags, firstNonWhitespaceIndex, getLeadingWhitespace, lastNonWhitespaceIndex, compare, isLowerAsciiLetter, isUpperAsciiLetter, equalsIgnoreCase, startsWithIgnoreCase, commonPrefixLength, commonSuffixLength, isHighSurrogate, isLowSurrogate, containsRTL, containsEmoji, isBasicASCII, containsFullWidthCharacter, isFullWidthCharacter, UTF8_BOM_CHARACTER, startsWithUTF8BOM, safeBtoa, repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalsyOrWhitespace", function() { return isFalsyOrWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExpCharacters", function() { return escapeRegExpCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ltrim", function() { return ltrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtrim", function() { return rtrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSimple2RegExpPattern", function() { return convertSimple2RegExpPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegExp", function() { return createRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpLeadsToEndlessLoop", function() { return regExpLeadsToEndlessLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpFlags", function() { return regExpFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstNonWhitespaceIndex", function() { return firstNonWhitespaceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeadingWhitespace", function() { return getLeadingWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastNonWhitespaceIndex", function() { return lastNonWhitespaceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLowerAsciiLetter", function() { return isLowerAsciiLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpperAsciiLetter", function() { return isUpperAsciiLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalsIgnoreCase", function() { return equalsIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWithIgnoreCase", function() { return startsWithIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonPrefixLength", function() { return commonPrefixLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonSuffixLength", function() { return commonSuffixLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHighSurrogate", function() { return isHighSurrogate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLowSurrogate", function() { return isLowSurrogate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsRTL", function() { return containsRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsEmoji", function() { return containsEmoji; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBasicASCII", function() { return isBasicASCII; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsFullWidthCharacter", function() { return containsFullWidthCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullWidthCharacter", function() { return isFullWidthCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UTF8_BOM_CHARACTER", function() { return UTF8_BOM_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWithUTF8BOM", function() { return startsWithUTF8BOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeBtoa", function() { return safeBtoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * The empty string.
 */
var empty = '';
function isFalsyOrWhitespace(str) {
    if (!str || typeof str !== 'string') {
        return true;
    }
    return str.trim().length === 0;
}
/**
 * @returns the provided number with the given number of preceding zeros.
 */
function pad(n, l, char) {
    if (char === void 0) { char = '0'; }
    var str = '' + n;
    var r = [str];
    for (var i = str.length; i < l; i++) {
        r.push(char);
    }
    return r.reverse().join('');
}
var _formatRegexp = /{(\d+)}/g;
/**
 * Helper to produce a string with a variable number of arguments. Insert variable segments
 * into the string using the {n} notation where N is the index of the argument following the string.
 * @param value string to which formatting is applied
 * @param args replacements for {n}-entries
 */
function format(value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length === 0) {
        return value;
    }
    return value.replace(_formatRegexp, function (match, group) {
        var idx = parseInt(group, 10);
        return isNaN(idx) || idx < 0 || idx >= args.length ?
            match :
            args[idx];
    });
}
/**
 * Converts HTML characters inside the string to use entities instead. Makes the string safe from
 * being used e.g. in HTMLElement.innerHTML.
 */
function escape(html) {
    return html.replace(/[<>&]/g, function (match) {
        switch (match) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return match;
        }
    });
}
/**
 * Escapes regular expression characters in a given string
 */
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, '\\$&');
}
/**
 * Removes all occurrences of needle from the beginning and end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim (default is a blank)
 */
function trim(haystack, needle) {
    if (needle === void 0) { needle = ' '; }
    var trimmed = ltrim(haystack, needle);
    return rtrim(trimmed, needle);
}
/**
 * Removes all occurrences of needle from the beginning of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function ltrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    var needleLen = needle.length;
    if (needleLen === 0 || haystack.length === 0) {
        return haystack;
    }
    var offset = 0;
    while (haystack.indexOf(needle, offset) === offset) {
        offset = offset + needleLen;
    }
    return haystack.substring(offset);
}
/**
 * Removes all occurrences of needle from the end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function rtrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    var needleLen = needle.length, haystackLen = haystack.length;
    if (needleLen === 0 || haystackLen === 0) {
        return haystack;
    }
    var offset = haystackLen, idx = -1;
    while (true) {
        idx = haystack.lastIndexOf(needle, offset - 1);
        if (idx === -1 || idx + needleLen !== offset) {
            break;
        }
        if (idx === 0) {
            return '';
        }
        offset = idx;
    }
    return haystack.substring(0, offset);
}
function convertSimple2RegExpPattern(pattern) {
    return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
}
/**
 * Determines if haystack starts with needle.
 */
function startsWith(haystack, needle) {
    if (haystack.length < needle.length) {
        return false;
    }
    if (haystack === needle) {
        return true;
    }
    for (var i = 0; i < needle.length; i++) {
        if (haystack[i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Determines if haystack ends with needle.
 */
function endsWith(haystack, needle) {
    var diff = haystack.length - needle.length;
    if (diff > 0) {
        return haystack.indexOf(needle, diff) === diff;
    }
    else if (diff === 0) {
        return haystack === needle;
    }
    else {
        return false;
    }
}
function createRegExp(searchString, isRegex, options) {
    if (options === void 0) { options = {}; }
    if (!searchString) {
        throw new Error('Cannot create regex from empty string');
    }
    if (!isRegex) {
        searchString = escapeRegExpCharacters(searchString);
    }
    if (options.wholeWord) {
        if (!/\B/.test(searchString.charAt(0))) {
            searchString = '\\b' + searchString;
        }
        if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
            searchString = searchString + '\\b';
        }
    }
    var modifiers = '';
    if (options.global) {
        modifiers += 'g';
    }
    if (!options.matchCase) {
        modifiers += 'i';
    }
    if (options.multiline) {
        modifiers += 'm';
    }
    if (options.unicode) {
        modifiers += 'u';
    }
    return new RegExp(searchString, modifiers);
}
function regExpLeadsToEndlessLoop(regexp) {
    // Exit early if it's one of these special cases which are meant to match
    // against an empty string
    if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
        return false;
    }
    // We check against an empty string. If the regular expression doesn't advance
    // (e.g. ends in an endless loop) it will match an empty string.
    var match = regexp.exec('');
    return !!(match && regexp.lastIndex === 0);
}
function regExpFlags(regexp) {
    return (regexp.global ? 'g' : '')
        + (regexp.ignoreCase ? 'i' : '')
        + (regexp.multiline ? 'm' : '')
        + (regexp.unicode ? 'u' : '');
}
/**
 * Returns first index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */
function firstNonWhitespaceIndex(str) {
    for (var i = 0, len = str.length; i < len; i++) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return i;
        }
    }
    return -1;
}
/**
 * Returns the leading whitespace of the string.
 * If the string contains only whitespaces, returns entire string
 */
function getLeadingWhitespace(str, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = str.length; }
    for (var i = start; i < end; i++) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return str.substring(start, i);
        }
    }
    return str.substring(start, end);
}
/**
 * Returns last index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */
function lastNonWhitespaceIndex(str, startIndex) {
    if (startIndex === void 0) { startIndex = str.length - 1; }
    for (var i = startIndex; i >= 0; i--) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return i;
        }
    }
    return -1;
}
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
function isLowerAsciiLetter(code) {
    return code >= 97 /* a */ && code <= 122 /* z */;
}
function isUpperAsciiLetter(code) {
    return code >= 65 /* A */ && code <= 90 /* Z */;
}
function isAsciiLetter(code) {
    return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
}
function equalsIgnoreCase(a, b) {
    var len1 = a ? a.length : 0;
    var len2 = b ? b.length : 0;
    if (len1 !== len2) {
        return false;
    }
    return doEqualsIgnoreCase(a, b);
}
function doEqualsIgnoreCase(a, b, stopAt) {
    if (stopAt === void 0) { stopAt = a.length; }
    if (typeof a !== 'string' || typeof b !== 'string') {
        return false;
    }
    for (var i = 0; i < stopAt; i++) {
        var codeA = a.charCodeAt(i);
        var codeB = b.charCodeAt(i);
        if (codeA === codeB) {
            continue;
        }
        // a-z A-Z
        if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
            var diff = Math.abs(codeA - codeB);
            if (diff !== 0 && diff !== 32) {
                return false;
            }
        }
        // Any other charcode
        else {
            if (String.fromCharCode(codeA).toLowerCase() !== String.fromCharCode(codeB).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}
function startsWithIgnoreCase(str, candidate) {
    var candidateLength = candidate.length;
    if (candidate.length > str.length) {
        return false;
    }
    return doEqualsIgnoreCase(str, candidate, candidateLength);
}
/**
 * @returns the length of the common prefix of the two strings.
 */
function commonPrefixLength(a, b) {
    var i, len = Math.min(a.length, b.length);
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return i;
        }
    }
    return len;
}
/**
 * @returns the length of the common suffix of the two strings.
 */
function commonSuffixLength(a, b) {
    var i, len = Math.min(a.length, b.length);
    var aLastIndex = a.length - 1;
    var bLastIndex = b.length - 1;
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
            return i;
        }
    }
    return len;
}
// --- unicode
// http://en.wikipedia.org/wiki/Surrogate_pair
// Returns the code point starting at a specified index in a string
// Code points U+0000 to U+D7FF and U+E000 to U+FFFF are represented on a single character
// Code points U+10000 to U+10FFFF are represented on two consecutive characters
//export function getUnicodePoint(str:string, index:number, len:number):number {
//	const chrCode = str.charCodeAt(index);
//	if (0xD800 <= chrCode && chrCode <= 0xDBFF && index + 1 < len) {
//		const nextChrCode = str.charCodeAt(index + 1);
//		if (0xDC00 <= nextChrCode && nextChrCode <= 0xDFFF) {
//			return (chrCode - 0xD800) << 10 + (nextChrCode - 0xDC00) + 0x10000;
//		}
//	}
//	return chrCode;
//}
function isHighSurrogate(charCode) {
    return (0xD800 <= charCode && charCode <= 0xDBFF);
}
function isLowSurrogate(charCode) {
    return (0xDC00 <= charCode && charCode <= 0xDFFF);
}
/**
 * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-rtl-test.js
 */
var CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
/**
 * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
 */
function containsRTL(str) {
    return CONTAINS_RTL.test(str);
}
/**
 * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-emoji-test.js
 */
var CONTAINS_EMOJI = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
function containsEmoji(str) {
    return CONTAINS_EMOJI.test(str);
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
/**
 * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
 */
function isBasicASCII(str) {
    return IS_BASIC_ASCII.test(str);
}
function containsFullWidthCharacter(str) {
    for (var i = 0, len = str.length; i < len; i++) {
        if (isFullWidthCharacter(str.charCodeAt(i))) {
            return true;
        }
    }
    return false;
}
function isFullWidthCharacter(charCode) {
    // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
    // http://jrgraphix.net/research/unicode_blocks.php
    //          2E80 — 2EFF   CJK Radicals Supplement
    //          2F00 — 2FDF   Kangxi Radicals
    //          2FF0 — 2FFF   Ideographic Description Characters
    //          3000 — 303F   CJK Symbols and Punctuation
    //          3040 — 309F   Hiragana
    //          30A0 — 30FF   Katakana
    //          3100 — 312F   Bopomofo
    //          3130 — 318F   Hangul Compatibility Jamo
    //          3190 — 319F   Kanbun
    //          31A0 — 31BF   Bopomofo Extended
    //          31F0 — 31FF   Katakana Phonetic Extensions
    //          3200 — 32FF   Enclosed CJK Letters and Months
    //          3300 — 33FF   CJK Compatibility
    //          3400 — 4DBF   CJK Unified Ideographs Extension A
    //          4DC0 — 4DFF   Yijing Hexagram Symbols
    //          4E00 — 9FFF   CJK Unified Ideographs
    //          A000 — A48F   Yi Syllables
    //          A490 — A4CF   Yi Radicals
    //          AC00 — D7AF   Hangul Syllables
    // [IGNORE] D800 — DB7F   High Surrogates
    // [IGNORE] DB80 — DBFF   High Private Use Surrogates
    // [IGNORE] DC00 — DFFF   Low Surrogates
    // [IGNORE] E000 — F8FF   Private Use Area
    //          F900 — FAFF   CJK Compatibility Ideographs
    // [IGNORE] FB00 — FB4F   Alphabetic Presentation Forms
    // [IGNORE] FB50 — FDFF   Arabic Presentation Forms-A
    // [IGNORE] FE00 — FE0F   Variation Selectors
    // [IGNORE] FE20 — FE2F   Combining Half Marks
    // [IGNORE] FE30 — FE4F   CJK Compatibility Forms
    // [IGNORE] FE50 — FE6F   Small Form Variants
    // [IGNORE] FE70 — FEFF   Arabic Presentation Forms-B
    //          FF00 — FFEF   Halfwidth and Fullwidth Forms
    //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
    //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
    // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
    // [IGNORE] FFF0 — FFFF   Specials
    charCode = +charCode; // @perf
    return ((charCode >= 0x2E80 && charCode <= 0xD7AF)
        || (charCode >= 0xF900 && charCode <= 0xFAFF)
        || (charCode >= 0xFF01 && charCode <= 0xFF5E));
}
// -- UTF-8 BOM
var UTF8_BOM_CHARACTER = String.fromCharCode(65279 /* UTF8_BOM */);
function startsWithUTF8BOM(str) {
    return !!(str && str.length > 0 && str.charCodeAt(0) === 65279 /* UTF8_BOM */);
}
function safeBtoa(str) {
    return btoa(encodeURIComponent(str)); // we use encodeURIComponent because btoa fails for non Latin 1 values
}
function repeat(s, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += s;
    }
    return result;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/types.js":
/*!****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/types.js ***!
  \****************************************************************/
/*! exports provided: isArray, isString, isObject, isNumber, isBoolean, isUndefined, isUndefinedOrNull, isEmptyObject, isFunction, validateConstraints, validateConstraint, getAllPropertyNames, withNullAsUndefined, withUndefinedAsNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefinedOrNull", function() { return isUndefinedOrNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConstraints", function() { return validateConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConstraint", function() { return validateConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPropertyNames", function() { return getAllPropertyNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withNullAsUndefined", function() { return withNullAsUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withUndefinedAsNull", function() { return withUndefinedAsNull; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var _typeof = {
    number: 'number',
    string: 'string',
    undefined: 'undefined',
    object: 'object',
    function: 'function'
};
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
 */
function isArray(array) {
    if (Array.isArray) {
        return Array.isArray(array);
    }
    if (array && typeof (array.length) === _typeof.number && array.constructor === Array) {
        return true;
    }
    return false;
}
/**
 * @returns whether the provided parameter is a JavaScript String or not.
 */
function isString(str) {
    if (typeof (str) === _typeof.string || str instanceof String) {
        return true;
    }
    return false;
}
/**
 *
 * @returns whether the provided parameter is of type `object` but **not**
 *	`null`, an `array`, a `regexp`, nor a `date`.
 */
function isObject(obj) {
    // The method can't do a type cast since there are type (like strings) which
    // are subclasses of any put not positvely matched by the function. Hence type
    // narrowing results in wrong results.
    return typeof obj === _typeof.object
        && obj !== null
        && !Array.isArray(obj)
        && !(obj instanceof RegExp)
        && !(obj instanceof Date);
}
/**
 * In **contrast** to just checking `typeof` this will return `false` for `NaN`.
 * @returns whether the provided parameter is a JavaScript Number or not.
 */
function isNumber(obj) {
    if ((typeof (obj) === _typeof.number || obj instanceof Number) && !isNaN(obj)) {
        return true;
    }
    return false;
}
/**
 * @returns whether the provided parameter is a JavaScript Boolean or not.
 */
function isBoolean(obj) {
    return obj === true || obj === false;
}
/**
 * @returns whether the provided parameter is undefined.
 */
function isUndefined(obj) {
    return typeof (obj) === _typeof.undefined;
}
/**
 * @returns whether the provided parameter is undefined or null.
 */
function isUndefinedOrNull(obj) {
    return isUndefined(obj) || obj === null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @returns whether the provided parameter is an empty JavaScript Object or not.
 */
function isEmptyObject(obj) {
    if (!isObject(obj)) {
        return false;
    }
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
/**
 * @returns whether the provided parameter is a JavaScript Function or not.
 */
function isFunction(obj) {
    return typeof obj === _typeof.function;
}
function validateConstraints(args, constraints) {
    var len = Math.min(args.length, constraints.length);
    for (var i = 0; i < len; i++) {
        validateConstraint(args[i], constraints[i]);
    }
}
function validateConstraint(arg, constraint) {
    if (isString(constraint)) {
        if (typeof arg !== constraint) {
            throw new Error("argument does not match constraint: typeof " + constraint);
        }
    }
    else if (isFunction(constraint)) {
        try {
            if (arg instanceof constraint) {
                return;
            }
        }
        catch (_a) {
            // ignore
        }
        if (!isUndefinedOrNull(arg) && arg.constructor === constraint) {
            return;
        }
        if (constraint.length === 1 && constraint.call(undefined, arg) === true) {
            return;
        }
        throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
    }
}
function getAllPropertyNames(obj) {
    var res = [];
    var proto = Object.getPrototypeOf(obj);
    while (Object.prototype !== proto) {
        res = res.concat(Object.getOwnPropertyNames(proto));
        proto = Object.getPrototypeOf(proto);
    }
    return res;
}
/**
 * Converts null to undefined, passes all other values through.
 */
function withNullAsUndefined(x) {
    return x === null ? undefined : x;
}
/**
 * Converts undefined to null, passes all other values through.
 */
function withUndefinedAsNull(x) {
    return typeof x === 'undefined' ? null : x;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/uri.js":
/*!**************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/uri.js ***!
  \**************************************************************/
/*! exports provided: URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URI", function() { return URI; });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js");
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
var _a;

var _schemePattern = /^\w[\w\d+.-]*$/;
var _singleSlashStart = /^\//;
var _doubleSlashStart = /^\/\//;
var _throwOnMissingSchema = true;
function _validateUri(ret, _strict) {
    // scheme, must be set
    if (!ret.scheme) {
        if (_strict || _throwOnMissingSchema) {
            throw new Error("[UriError]: Scheme is missing: {scheme: \"\", authority: \"" + ret.authority + "\", path: \"" + ret.path + "\", query: \"" + ret.query + "\", fragment: \"" + ret.fragment + "\"}");
        }
        else {
            console.warn("[UriError]: Scheme is missing: {scheme: \"\", authority: \"" + ret.authority + "\", path: \"" + ret.path + "\", query: \"" + ret.query + "\", fragment: \"" + ret.fragment + "\"}");
        }
    }
    // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
    // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
    if (ret.scheme && !_schemePattern.test(ret.scheme)) {
        throw new Error('[UriError]: Scheme contains illegal characters.');
    }
    // path, http://tools.ietf.org/html/rfc3986#section-3.3
    // If a URI contains an authority component, then the path component
    // must either be empty or begin with a slash ("/") character.  If a URI
    // does not contain an authority component, then the path cannot begin
    // with two slash characters ("//").
    if (ret.path) {
        if (ret.authority) {
            if (!_singleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
            }
        }
        else {
            if (_doubleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
            }
        }
    }
}
// for a while we allowed uris *without* schemes and this is the migration
// for them, e.g. an uri without scheme and without strict-mode warns and falls
// back to the file-scheme. that should cause the least carnage and still be a
// clear warning
function _schemeFix(scheme, _strict) {
    if (_strict || _throwOnMissingSchema) {
        return scheme || _empty;
    }
    if (!scheme) {
        console.trace('BAD uri lacks scheme, falling back to file-scheme.');
        scheme = 'file';
    }
    return scheme;
}
// implements a bit of https://tools.ietf.org/html/rfc3986#section-5
function _referenceResolution(scheme, path) {
    // the slash-character is our 'default base' as we don't
    // support constructing URIs relative to other URIs. This
    // also means that we alter and potentially break paths.
    // see https://tools.ietf.org/html/rfc3986#section-5.1.4
    switch (scheme) {
        case 'https':
        case 'http':
        case 'file':
            if (!path) {
                path = _slash;
            }
            else if (path[0] !== _slash) {
                path = _slash + path;
            }
            break;
    }
    return path;
}
var _empty = '';
var _slash = '/';
var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
/**
 * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
 * This class is a simple parser which creates the basic component parts
 * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
 * and encoding.
 *
 *       foo://example.com:8042/over/there?name=ferret#nose
 *       \_/   \______________/\_________/ \_________/ \__/
 *        |           |            |            |        |
 *     scheme     authority       path        query   fragment
 *        |   _____________________|__
 *       / \ /                        \
 *       urn:example:animal:ferret:nose
 */
var URI = /** @class */ (function () {
    /**
     * @internal
     */
    function URI(schemeOrData, authority, path, query, fragment, _strict) {
        if (_strict === void 0) { _strict = false; }
        if (typeof schemeOrData === 'object') {
            this.scheme = schemeOrData.scheme || _empty;
            this.authority = schemeOrData.authority || _empty;
            this.path = schemeOrData.path || _empty;
            this.query = schemeOrData.query || _empty;
            this.fragment = schemeOrData.fragment || _empty;
            // no validation because it's this URI
            // that creates uri components.
            // _validateUri(this);
        }
        else {
            this.scheme = _schemeFix(schemeOrData, _strict);
            this.authority = authority || _empty;
            this.path = _referenceResolution(this.scheme, path || _empty);
            this.query = query || _empty;
            this.fragment = fragment || _empty;
            _validateUri(this, _strict);
        }
    }
    URI.isUri = function (thing) {
        if (thing instanceof URI) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.authority === 'string'
            && typeof thing.fragment === 'string'
            && typeof thing.path === 'string'
            && typeof thing.query === 'string'
            && typeof thing.scheme === 'string'
            && typeof thing.fsPath === 'function'
            && typeof thing.with === 'function'
            && typeof thing.toString === 'function';
    };
    Object.defineProperty(URI.prototype, "fsPath", {
        // ---- filesystem path -----------------------
        /**
         * Returns a string representing the corresponding file system path of this URI.
         * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
         * platform specific path separator.
         *
         * * Will *not* validate the path for invalid characters and semantics.
         * * Will *not* look at the scheme of this URI.
         * * The result shall *not* be used for display purposes but for accessing a file on disk.
         *
         *
         * The *difference* to `URI#path` is the use of the platform specific separator and the handling
         * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
         *
         * ```ts
            const u = URI.parse('file://server/c$/folder/file.txt')
            u.authority === 'server'
            u.path === '/shares/c$/file.txt'
            u.fsPath === '\\server\c$\folder\file.txt'
        ```
         *
         * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
         * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
         * with URIs that represent files on disk (`file` scheme).
         */
        get: function () {
            // if (this.scheme !== 'file') {
            // 	console.warn(`[UriError] calling fsPath with scheme ${this.scheme}`);
            // }
            return _makeFsPath(this);
        },
        enumerable: true,
        configurable: true
    });
    // ---- modify to new -------------------------
    URI.prototype.with = function (change) {
        if (!change) {
            return this;
        }
        var scheme = change.scheme, authority = change.authority, path = change.path, query = change.query, fragment = change.fragment;
        if (scheme === undefined) {
            scheme = this.scheme;
        }
        else if (scheme === null) {
            scheme = _empty;
        }
        if (authority === undefined) {
            authority = this.authority;
        }
        else if (authority === null) {
            authority = _empty;
        }
        if (path === undefined) {
            path = this.path;
        }
        else if (path === null) {
            path = _empty;
        }
        if (query === undefined) {
            query = this.query;
        }
        else if (query === null) {
            query = _empty;
        }
        if (fragment === undefined) {
            fragment = this.fragment;
        }
        else if (fragment === null) {
            fragment = _empty;
        }
        if (scheme === this.scheme
            && authority === this.authority
            && path === this.path
            && query === this.query
            && fragment === this.fragment) {
            return this;
        }
        return new _URI(scheme, authority, path, query, fragment);
    };
    // ---- parse & validate ------------------------
    /**
     * Creates a new URI from a string, e.g. `http://www.msft.com/some/path`,
     * `file:///usr/home`, or `scheme:with/path`.
     *
     * @param value A string which represents an URI (see `URI#toString`).
     */
    URI.parse = function (value, _strict) {
        if (_strict === void 0) { _strict = false; }
        var match = _regexp.exec(value);
        if (!match) {
            return new _URI(_empty, _empty, _empty, _empty, _empty);
        }
        return new _URI(match[2] || _empty, decodeURIComponent(match[4] || _empty), decodeURIComponent(match[5] || _empty), decodeURIComponent(match[7] || _empty), decodeURIComponent(match[9] || _empty), _strict);
    };
    /**
     * Creates a new URI from a file system path, e.g. `c:\my\files`,
     * `/usr/home`, or `\\server\share\some\path`.
     *
     * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
     * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
     * `URI.parse('file://' + path)` because the path might contain characters that are
     * interpreted (# and ?). See the following sample:
     * ```ts
    const good = URI.file('/coding/c#/project1');
    good.scheme === 'file';
    good.path === '/coding/c#/project1';
    good.fragment === '';
    const bad = URI.parse('file://' + '/coding/c#/project1');
    bad.scheme === 'file';
    bad.path === '/coding/c'; // path is now broken
    bad.fragment === '/project1';
    ```
     *
     * @param path A file system path (see `URI#fsPath`)
     */
    URI.file = function (path) {
        var authority = _empty;
        // normalize to fwd-slashes on windows,
        // on other systems bwd-slashes are valid
        // filename character, eg /f\oo/ba\r.txt
        if (_platform_js__WEBPACK_IMPORTED_MODULE_0__["isWindows"]) {
            path = path.replace(/\\/g, _slash);
        }
        // check for authority as used in UNC shares
        // or use the path as given
        if (path[0] === _slash && path[1] === _slash) {
            var idx = path.indexOf(_slash, 2);
            if (idx === -1) {
                authority = path.substring(2);
                path = _slash;
            }
            else {
                authority = path.substring(2, idx);
                path = path.substring(idx) || _slash;
            }
        }
        return new _URI('file', authority, path, _empty, _empty);
    };
    URI.from = function (components) {
        return new _URI(components.scheme, components.authority, components.path, components.query, components.fragment);
    };
    // ---- printing/externalize ---------------------------
    /**
     * Creates a string representation for this URI. It's guaranteed that calling
     * `URI.parse` with the result of this function creates an URI which is equal
     * to this URI.
     *
     * * The result shall *not* be used for display purposes but for externalization or transport.
     * * The result will be encoded using the percentage encoding and encoding happens mostly
     * ignore the scheme-specific encoding rules.
     *
     * @param skipEncoding Do not encode the result, default is `false`
     */
    URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) { skipEncoding = false; }
        return _asFormatted(this, skipEncoding);
    };
    URI.prototype.toJSON = function () {
        return this;
    };
    URI.revive = function (data) {
        if (!data) {
            return data;
        }
        else if (data instanceof URI) {
            return data;
        }
        else {
            var result = new _URI(data);
            result._fsPath = data.fsPath;
            result._formatted = data.external;
            return result;
        }
    };
    return URI;
}());

// tslint:disable-next-line:class-name
var _URI = /** @class */ (function (_super) {
    __extends(_URI, _super);
    function _URI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._formatted = null;
        _this._fsPath = null;
        return _this;
    }
    Object.defineProperty(_URI.prototype, "fsPath", {
        get: function () {
            if (!this._fsPath) {
                this._fsPath = _makeFsPath(this);
            }
            return this._fsPath;
        },
        enumerable: true,
        configurable: true
    });
    _URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) { skipEncoding = false; }
        if (!skipEncoding) {
            if (!this._formatted) {
                this._formatted = _asFormatted(this, false);
            }
            return this._formatted;
        }
        else {
            // we don't cache that
            return _asFormatted(this, true);
        }
    };
    _URI.prototype.toJSON = function () {
        var res = {
            $mid: 1
        };
        // cached state
        if (this._fsPath) {
            res.fsPath = this._fsPath;
        }
        if (this._formatted) {
            res.external = this._formatted;
        }
        // uri components
        if (this.path) {
            res.path = this.path;
        }
        if (this.scheme) {
            res.scheme = this.scheme;
        }
        if (this.authority) {
            res.authority = this.authority;
        }
        if (this.query) {
            res.query = this.query;
        }
        if (this.fragment) {
            res.fragment = this.fragment;
        }
        return res;
    };
    return _URI;
}(URI));
// reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2
var encodeTable = (_a = {},
    _a[58 /* Colon */] = '%3A',
    _a[47 /* Slash */] = '%2F',
    _a[63 /* QuestionMark */] = '%3F',
    _a[35 /* Hash */] = '%23',
    _a[91 /* OpenSquareBracket */] = '%5B',
    _a[93 /* CloseSquareBracket */] = '%5D',
    _a[64 /* AtSign */] = '%40',
    _a[33 /* ExclamationMark */] = '%21',
    _a[36 /* DollarSign */] = '%24',
    _a[38 /* Ampersand */] = '%26',
    _a[39 /* SingleQuote */] = '%27',
    _a[40 /* OpenParen */] = '%28',
    _a[41 /* CloseParen */] = '%29',
    _a[42 /* Asterisk */] = '%2A',
    _a[43 /* Plus */] = '%2B',
    _a[44 /* Comma */] = '%2C',
    _a[59 /* Semicolon */] = '%3B',
    _a[61 /* Equals */] = '%3D',
    _a[32 /* Space */] = '%20',
    _a);
function encodeURIComponentFast(uriComponent, allowSlash) {
    var res = undefined;
    var nativeEncodePos = -1;
    for (var pos = 0; pos < uriComponent.length; pos++) {
        var code = uriComponent.charCodeAt(pos);
        // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3
        if ((code >= 97 /* a */ && code <= 122 /* z */)
            || (code >= 65 /* A */ && code <= 90 /* Z */)
            || (code >= 48 /* Digit0 */ && code <= 57 /* Digit9 */)
            || code === 45 /* Dash */
            || code === 46 /* Period */
            || code === 95 /* Underline */
            || code === 126 /* Tilde */
            || (allowSlash && code === 47 /* Slash */)) {
            // check if we are delaying native encode
            if (nativeEncodePos !== -1) {
                res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                nativeEncodePos = -1;
            }
            // check if we write into a new string (by default we try to return the param)
            if (res !== undefined) {
                res += uriComponent.charAt(pos);
            }
        }
        else {
            // encoding needed, we need to allocate a new string
            if (res === undefined) {
                res = uriComponent.substr(0, pos);
            }
            // check with default table first
            var escaped = encodeTable[code];
            if (escaped !== undefined) {
                // check if we are delaying native encode
                if (nativeEncodePos !== -1) {
                    res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                    nativeEncodePos = -1;
                }
                // append escaped variant to result
                res += escaped;
            }
            else if (nativeEncodePos === -1) {
                // use native encode only when needed
                nativeEncodePos = pos;
            }
        }
    }
    if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
    }
    return res !== undefined ? res : uriComponent;
}
function encodeURIComponentMinimal(path) {
    var res = undefined;
    for (var pos = 0; pos < path.length; pos++) {
        var code = path.charCodeAt(pos);
        if (code === 35 /* Hash */ || code === 63 /* QuestionMark */) {
            if (res === undefined) {
                res = path.substr(0, pos);
            }
            res += encodeTable[code];
        }
        else {
            if (res !== undefined) {
                res += path[pos];
            }
        }
    }
    return res !== undefined ? res : path;
}
/**
 * Compute `fsPath` for the given uri
 */
function _makeFsPath(uri) {
    var value;
    if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
        // unc path: file://shares/c$/far/boo
        value = "//" + uri.authority + uri.path;
    }
    else if (uri.path.charCodeAt(0) === 47 /* Slash */
        && (uri.path.charCodeAt(1) >= 65 /* A */ && uri.path.charCodeAt(1) <= 90 /* Z */ || uri.path.charCodeAt(1) >= 97 /* a */ && uri.path.charCodeAt(1) <= 122 /* z */)
        && uri.path.charCodeAt(2) === 58 /* Colon */) {
        // windows drive letter: file:///c:/far/boo
        value = uri.path[1].toLowerCase() + uri.path.substr(2);
    }
    else {
        // other path
        value = uri.path;
    }
    if (_platform_js__WEBPACK_IMPORTED_MODULE_0__["isWindows"]) {
        value = value.replace(/\//g, '\\');
    }
    return value;
}
/**
 * Create the external version of a uri
 */
function _asFormatted(uri, skipEncoding) {
    var encoder = !skipEncoding
        ? encodeURIComponentFast
        : encodeURIComponentMinimal;
    var res = '';
    var scheme = uri.scheme, authority = uri.authority, path = uri.path, query = uri.query, fragment = uri.fragment;
    if (scheme) {
        res += scheme;
        res += ':';
    }
    if (authority || scheme === 'file') {
        res += _slash;
        res += _slash;
    }
    if (authority) {
        var idx = authority.indexOf('@');
        if (idx !== -1) {
            // <user>@<auth>
            var userinfo = authority.substr(0, idx);
            authority = authority.substr(idx + 1);
            idx = userinfo.indexOf(':');
            if (idx === -1) {
                res += encoder(userinfo, false);
            }
            else {
                // <user>:<pass>@<auth>
                res += encoder(userinfo.substr(0, idx), false);
                res += ':';
                res += encoder(userinfo.substr(idx + 1), false);
            }
            res += '@';
        }
        authority = authority.toLowerCase();
        idx = authority.indexOf(':');
        if (idx === -1) {
            res += encoder(authority, false);
        }
        else {
            // <auth>:<port>
            res += encoder(authority.substr(0, idx), false);
            res += authority.substr(idx);
        }
    }
    if (path) {
        // lower-case windows drive letters in /C:/fff or C:/fff
        if (path.length >= 3 && path.charCodeAt(0) === 47 /* Slash */ && path.charCodeAt(2) === 58 /* Colon */) {
            var code = path.charCodeAt(1);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = "/" + String.fromCharCode(code + 32) + ":" + path.substr(3); // "/c:".length === 3
            }
        }
        else if (path.length >= 2 && path.charCodeAt(1) === 58 /* Colon */) {
            var code = path.charCodeAt(0);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = String.fromCharCode(code + 32) + ":" + path.substr(2); // "/c:".length === 3
            }
        }
        // encode the rest of the path
        res += encoder(path, true);
    }
    if (query) {
        res += '?';
        res += encoder(query, false);
    }
    if (fragment) {
        res += '#';
        res += !skipEncoding ? encodeURIComponentFast(fragment, false) : fragment;
    }
    return res;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js ***!
  \******************************************************************************/
/*! exports provided: logOnceWebWorkerWarning, SimpleWorkerClient, SimpleWorkerServer, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOnceWebWorkerWarning", function() { return logOnceWebWorkerWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleWorkerClient", function() { return SimpleWorkerClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleWorkerServer", function() { return SimpleWorkerServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lifecycle.js */ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types.js */ "./node_modules/monaco-editor/esm/vs/base/common/types.js");
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




var INITIALIZE = '$initialize';
var webWorkerWarningLogged = false;
function logOnceWebWorkerWarning(err) {
    if (!_platform_js__WEBPACK_IMPORTED_MODULE_2__["isWeb"]) {
        // running tests
        return;
    }
    if (!webWorkerWarningLogged) {
        webWorkerWarningLogged = true;
        console.warn('Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/Microsoft/monaco-editor#faq');
    }
    console.warn(err.message);
}
var SimpleWorkerProtocol = /** @class */ (function () {
    function SimpleWorkerProtocol(handler) {
        this._workerId = -1;
        this._handler = handler;
        this._lastSentReq = 0;
        this._pendingReplies = Object.create(null);
    }
    SimpleWorkerProtocol.prototype.setWorkerId = function (workerId) {
        this._workerId = workerId;
    };
    SimpleWorkerProtocol.prototype.sendMessage = function (method, args) {
        var _this = this;
        var req = String(++this._lastSentReq);
        return new Promise(function (resolve, reject) {
            _this._pendingReplies[req] = {
                resolve: resolve,
                reject: reject
            };
            _this._send({
                vsWorker: _this._workerId,
                req: req,
                method: method,
                args: args
            });
        });
    };
    SimpleWorkerProtocol.prototype.handleMessage = function (serializedMessage) {
        var message;
        try {
            message = JSON.parse(serializedMessage);
        }
        catch (e) {
            // nothing
            return;
        }
        if (!message || !message.vsWorker) {
            return;
        }
        if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
            return;
        }
        this._handleMessage(message);
    };
    SimpleWorkerProtocol.prototype._handleMessage = function (msg) {
        var _this = this;
        if (msg.seq) {
            var replyMessage = msg;
            if (!this._pendingReplies[replyMessage.seq]) {
                console.warn('Got reply to unknown seq');
                return;
            }
            var reply = this._pendingReplies[replyMessage.seq];
            delete this._pendingReplies[replyMessage.seq];
            if (replyMessage.err) {
                var err = replyMessage.err;
                if (replyMessage.err.$isError) {
                    err = new Error();
                    err.name = replyMessage.err.name;
                    err.message = replyMessage.err.message;
                    err.stack = replyMessage.err.stack;
                }
                reply.reject(err);
                return;
            }
            reply.resolve(replyMessage.res);
            return;
        }
        var requestMessage = msg;
        var req = requestMessage.req;
        var result = this._handler.handleMessage(requestMessage.method, requestMessage.args);
        result.then(function (r) {
            _this._send({
                vsWorker: _this._workerId,
                seq: req,
                res: r,
                err: undefined
            });
        }, function (e) {
            if (e.detail instanceof Error) {
                // Loading errors have a detail property that points to the actual error
                e.detail = Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["transformErrorForSerialization"])(e.detail);
            }
            _this._send({
                vsWorker: _this._workerId,
                seq: req,
                res: undefined,
                err: Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["transformErrorForSerialization"])(e)
            });
        });
    };
    SimpleWorkerProtocol.prototype._send = function (msg) {
        var strMsg = JSON.stringify(msg);
        // console.log('SENDING: ' + strMsg);
        this._handler.sendMessage(strMsg);
    };
    return SimpleWorkerProtocol;
}());
/**
 * Main thread side
 */
var SimpleWorkerClient = /** @class */ (function (_super) {
    __extends(SimpleWorkerClient, _super);
    function SimpleWorkerClient(workerFactory, moduleId) {
        var _this = _super.call(this) || this;
        var lazyProxyReject = null;
        _this._worker = _this._register(workerFactory.create('vs/base/common/worker/simpleWorker', function (msg) {
            _this._protocol.handleMessage(msg);
        }, function (err) {
            // in Firefox, web workers fail lazily :(
            // we will reject the proxy
            if (lazyProxyReject) {
                lazyProxyReject(err);
            }
        }));
        _this._protocol = new SimpleWorkerProtocol({
            sendMessage: function (msg) {
                _this._worker.postMessage(msg);
            },
            handleMessage: function (method, args) {
                // Intentionally not supporting worker -> main requests
                return Promise.resolve(null);
            }
        });
        _this._protocol.setWorkerId(_this._worker.getId());
        // Gather loader configuration
        var loaderConfiguration = null;
        if (typeof self.require !== 'undefined' && typeof self.require.getConfig === 'function') {
            // Get the configuration from the Monaco AMD Loader
            loaderConfiguration = self.require.getConfig();
        }
        else if (typeof self.requirejs !== 'undefined') {
            // Get the configuration from requirejs
            loaderConfiguration = self.requirejs.s.contexts._.config;
        }
        // Send initialize message
        _this._onModuleLoaded = _this._protocol.sendMessage(INITIALIZE, [
            _this._worker.getId(),
            moduleId,
            loaderConfiguration
        ]);
        _this._lazyProxy = new Promise(function (resolve, reject) {
            lazyProxyReject = reject;
            _this._onModuleLoaded.then(function (availableMethods) {
                var proxy = {};
                for (var _i = 0, availableMethods_1 = availableMethods; _i < availableMethods_1.length; _i++) {
                    var methodName = availableMethods_1[_i];
                    proxy[methodName] = createProxyMethod(methodName, proxyMethodRequest);
                }
                resolve(proxy);
            }, function (e) {
                reject(e);
                _this._onError('Worker failed to load ' + moduleId, e);
            });
        });
        // Create proxy to loaded code
        var proxyMethodRequest = function (method, args) {
            return _this._request(method, args);
        };
        var createProxyMethod = function (method, proxyMethodRequest) {
            return function () {
                var args = Array.prototype.slice.call(arguments, 0);
                return proxyMethodRequest(method, args);
            };
        };
        return _this;
    }
    SimpleWorkerClient.prototype.getProxyObject = function () {
        return this._lazyProxy;
    };
    SimpleWorkerClient.prototype._request = function (method, args) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._onModuleLoaded.then(function () {
                _this._protocol.sendMessage(method, args).then(resolve, reject);
            }, reject);
        });
    };
    SimpleWorkerClient.prototype._onError = function (message, error) {
        console.error(message);
        console.info(error);
    };
    return SimpleWorkerClient;
}(_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__["Disposable"]));

/**
 * Worker side
 */
var SimpleWorkerServer = /** @class */ (function () {
    function SimpleWorkerServer(postSerializedMessage, requestHandler) {
        var _this = this;
        this._requestHandler = requestHandler;
        this._protocol = new SimpleWorkerProtocol({
            sendMessage: function (msg) {
                postSerializedMessage(msg);
            },
            handleMessage: function (method, args) { return _this._handleMessage(method, args); }
        });
    }
    SimpleWorkerServer.prototype.onmessage = function (msg) {
        this._protocol.handleMessage(msg);
    };
    SimpleWorkerServer.prototype._handleMessage = function (method, args) {
        if (method === INITIALIZE) {
            return this.initialize(args[0], args[1], args[2]);
        }
        if (!this._requestHandler || typeof this._requestHandler[method] !== 'function') {
            return Promise.reject(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return Promise.resolve(this._requestHandler[method].apply(this._requestHandler, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    SimpleWorkerServer.prototype.initialize = function (workerId, moduleId, loaderConfig) {
        var _this = this;
        this._protocol.setWorkerId(workerId);
        if (this._requestHandler) {
            // static request handler
            var methods = [];
            for (var _i = 0, _a = Object(_types_js__WEBPACK_IMPORTED_MODULE_3__["getAllPropertyNames"])(this._requestHandler); _i < _a.length; _i++) {
                var prop = _a[_i];
                if (typeof this._requestHandler[prop] === 'function') {
                    methods.push(prop);
                }
            }
            return Promise.resolve(methods);
        }
        if (loaderConfig) {
            // Remove 'baseUrl', handling it is beyond scope for now
            if (typeof loaderConfig.baseUrl !== 'undefined') {
                delete loaderConfig['baseUrl'];
            }
            if (typeof loaderConfig.paths !== 'undefined') {
                if (typeof loaderConfig.paths.vs !== 'undefined') {
                    delete loaderConfig.paths['vs'];
                }
            }
            // Since this is in a web worker, enable catching errors
            loaderConfig.catchError = true;
            self.require.config(loaderConfig);
        }
        return new Promise(function (resolve, reject) {
            // Use the global require to be sure to get the global config
            self.require([moduleId], function () {
                var result = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    result[_i] = arguments[_i];
                }
                var handlerModule = result[0];
                _this._requestHandler = handlerModule.create();
                if (!_this._requestHandler) {
                    reject(new Error("No RequestHandler!"));
                    return;
                }
                var methods = [];
                for (var _a = 0, _b = Object(_types_js__WEBPACK_IMPORTED_MODULE_3__["getAllPropertyNames"])(_this._requestHandler); _a < _b.length; _a++) {
                    var prop = _b[_a];
                    if (typeof _this._requestHandler[prop] === 'function') {
                        methods.push(prop);
                    }
                }
                resolve(methods);
            }, reject);
        });
    };
    return SimpleWorkerServer;
}());

/**
 * Called on the worker side
 */
function create(postMessage) {
    return new SimpleWorkerServer(postMessage, null);
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js ***!
  \*************************************************************************************/
/*! exports provided: CharacterClassifier, CharacterSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterClassifier", function() { return CharacterClassifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSet", function() { return CharacterSet; });
/* harmony import */ var _uint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A fast character classifier that uses a compact array for ASCII values.
 */
var CharacterClassifier = /** @class */ (function () {
    function CharacterClassifier(_defaultValue) {
        var defaultValue = Object(_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint8"])(_defaultValue);
        this._defaultValue = defaultValue;
        this._asciiMap = CharacterClassifier._createAsciiMap(defaultValue);
        this._map = new Map();
    }
    CharacterClassifier._createAsciiMap = function (defaultValue) {
        var asciiMap = new Uint8Array(256);
        for (var i = 0; i < 256; i++) {
            asciiMap[i] = defaultValue;
        }
        return asciiMap;
    };
    CharacterClassifier.prototype.set = function (charCode, _value) {
        var value = Object(_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint8"])(_value);
        if (charCode >= 0 && charCode < 256) {
            this._asciiMap[charCode] = value;
        }
        else {
            this._map.set(charCode, value);
        }
    };
    CharacterClassifier.prototype.get = function (charCode) {
        if (charCode >= 0 && charCode < 256) {
            return this._asciiMap[charCode];
        }
        else {
            return (this._map.get(charCode) || this._defaultValue);
        }
    };
    return CharacterClassifier;
}());

var CharacterSet = /** @class */ (function () {
    function CharacterSet() {
        this._actual = new CharacterClassifier(0 /* False */);
    }
    CharacterSet.prototype.add = function (charCode) {
        this._actual.set(charCode, 1 /* True */);
    };
    CharacterSet.prototype.has = function (charCode) {
        return (this._actual.get(charCode) === 1 /* True */);
    };
    return CharacterSet;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/position.js ***!
  \**************************************************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * A position in the editor.
 */
var Position = /** @class */ (function () {
    function Position(lineNumber, column) {
        this.lineNumber = lineNumber;
        this.column = column;
    }
    /**
     * Create a new postion from this position.
     *
     * @param newLineNumber new line number
     * @param newColumn new column
     */
    Position.prototype.with = function (newLineNumber, newColumn) {
        if (newLineNumber === void 0) { newLineNumber = this.lineNumber; }
        if (newColumn === void 0) { newColumn = this.column; }
        if (newLineNumber === this.lineNumber && newColumn === this.column) {
            return this;
        }
        else {
            return new Position(newLineNumber, newColumn);
        }
    };
    /**
     * Derive a new position from this position.
     *
     * @param deltaLineNumber line number delta
     * @param deltaColumn column delta
     */
    Position.prototype.delta = function (deltaLineNumber, deltaColumn) {
        if (deltaLineNumber === void 0) { deltaLineNumber = 0; }
        if (deltaColumn === void 0) { deltaColumn = 0; }
        return this.with(this.lineNumber + deltaLineNumber, this.column + deltaColumn);
    };
    /**
     * Test if this position equals other position
     */
    Position.prototype.equals = function (other) {
        return Position.equals(this, other);
    };
    /**
     * Test if position `a` equals position `b`
     */
    Position.equals = function (a, b) {
        if (!a && !b) {
            return true;
        }
        return (!!a &&
            !!b &&
            a.lineNumber === b.lineNumber &&
            a.column === b.column);
    };
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be false.
     */
    Position.prototype.isBefore = function (other) {
        return Position.isBefore(this, other);
    };
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be false.
     */
    Position.isBefore = function (a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column < b.column;
    };
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be true.
     */
    Position.prototype.isBeforeOrEqual = function (other) {
        return Position.isBeforeOrEqual(this, other);
    };
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be true.
     */
    Position.isBeforeOrEqual = function (a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column <= b.column;
    };
    /**
     * A function that compares positions, useful for sorting
     */
    Position.compare = function (a, b) {
        var aLineNumber = a.lineNumber | 0;
        var bLineNumber = b.lineNumber | 0;
        if (aLineNumber === bLineNumber) {
            var aColumn = a.column | 0;
            var bColumn = b.column | 0;
            return aColumn - bColumn;
        }
        return aLineNumber - bLineNumber;
    };
    /**
     * Clone this position.
     */
    Position.prototype.clone = function () {
        return new Position(this.lineNumber, this.column);
    };
    /**
     * Convert to a human-readable representation.
     */
    Position.prototype.toString = function () {
        return '(' + this.lineNumber + ',' + this.column + ')';
    };
    // ---
    /**
     * Create a `Position` from an `IPosition`.
     */
    Position.lift = function (pos) {
        return new Position(pos.lineNumber, pos.column);
    };
    /**
     * Test if `obj` is an `IPosition`.
     */
    Position.isIPosition = function (obj) {
        return (obj
            && (typeof obj.lineNumber === 'number')
            && (typeof obj.column === 'number'));
    };
    return Position;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js":
/*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/range.js ***!
  \***********************************************************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A range in the editor. (startLineNumber,startColumn) is <= (endLineNumber,endColumn)
 */
var Range = /** @class */ (function () {
    function Range(startLineNumber, startColumn, endLineNumber, endColumn) {
        if ((startLineNumber > endLineNumber) || (startLineNumber === endLineNumber && startColumn > endColumn)) {
            this.startLineNumber = endLineNumber;
            this.startColumn = endColumn;
            this.endLineNumber = startLineNumber;
            this.endColumn = startColumn;
        }
        else {
            this.startLineNumber = startLineNumber;
            this.startColumn = startColumn;
            this.endLineNumber = endLineNumber;
            this.endColumn = endColumn;
        }
    }
    /**
     * Test if this range is empty.
     */
    Range.prototype.isEmpty = function () {
        return Range.isEmpty(this);
    };
    /**
     * Test if `range` is empty.
     */
    Range.isEmpty = function (range) {
        return (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn);
    };
    /**
     * Test if position is in this range. If the position is at the edges, will return true.
     */
    Range.prototype.containsPosition = function (position) {
        return Range.containsPosition(this, position);
    };
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return true.
     */
    Range.containsPosition = function (range, position) {
        if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
            return false;
        }
        if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
            return false;
        }
        if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
            return false;
        }
        return true;
    };
    /**
     * Test if range is in this range. If the range is equal to this range, will return true.
     */
    Range.prototype.containsRange = function (range) {
        return Range.containsRange(this, range);
    };
    /**
     * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
     */
    Range.containsRange = function (range, otherRange) {
        if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
            return false;
        }
        if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
            return false;
        }
        return true;
    };
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    Range.prototype.plusRange = function (range) {
        return Range.plusRange(this, range);
    };
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    Range.plusRange = function (a, b) {
        var startLineNumber;
        var startColumn;
        var endLineNumber;
        var endColumn;
        if (b.startLineNumber < a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = b.startColumn;
        }
        else if (b.startLineNumber === a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = Math.min(b.startColumn, a.startColumn);
        }
        else {
            startLineNumber = a.startLineNumber;
            startColumn = a.startColumn;
        }
        if (b.endLineNumber > a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = b.endColumn;
        }
        else if (b.endLineNumber === a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = Math.max(b.endColumn, a.endColumn);
        }
        else {
            endLineNumber = a.endLineNumber;
            endColumn = a.endColumn;
        }
        return new Range(startLineNumber, startColumn, endLineNumber, endColumn);
    };
    /**
     * A intersection of the two ranges.
     */
    Range.prototype.intersectRanges = function (range) {
        return Range.intersectRanges(this, range);
    };
    /**
     * A intersection of the two ranges.
     */
    Range.intersectRanges = function (a, b) {
        var resultStartLineNumber = a.startLineNumber;
        var resultStartColumn = a.startColumn;
        var resultEndLineNumber = a.endLineNumber;
        var resultEndColumn = a.endColumn;
        var otherStartLineNumber = b.startLineNumber;
        var otherStartColumn = b.startColumn;
        var otherEndLineNumber = b.endLineNumber;
        var otherEndColumn = b.endColumn;
        if (resultStartLineNumber < otherStartLineNumber) {
            resultStartLineNumber = otherStartLineNumber;
            resultStartColumn = otherStartColumn;
        }
        else if (resultStartLineNumber === otherStartLineNumber) {
            resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
        }
        if (resultEndLineNumber > otherEndLineNumber) {
            resultEndLineNumber = otherEndLineNumber;
            resultEndColumn = otherEndColumn;
        }
        else if (resultEndLineNumber === otherEndLineNumber) {
            resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
        }
        // Check if selection is now empty
        if (resultStartLineNumber > resultEndLineNumber) {
            return null;
        }
        if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
            return null;
        }
        return new Range(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
    };
    /**
     * Test if this range equals other.
     */
    Range.prototype.equalsRange = function (other) {
        return Range.equalsRange(this, other);
    };
    /**
     * Test if range `a` equals `b`.
     */
    Range.equalsRange = function (a, b) {
        return (!!a &&
            !!b &&
            a.startLineNumber === b.startLineNumber &&
            a.startColumn === b.startColumn &&
            a.endLineNumber === b.endLineNumber &&
            a.endColumn === b.endColumn);
    };
    /**
     * Return the end position (which will be after or equal to the start position)
     */
    Range.prototype.getEndPosition = function () {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](this.endLineNumber, this.endColumn);
    };
    /**
     * Return the start position (which will be before or equal to the end position)
     */
    Range.prototype.getStartPosition = function () {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](this.startLineNumber, this.startColumn);
    };
    /**
     * Transform to a user presentable string representation.
     */
    Range.prototype.toString = function () {
        return '[' + this.startLineNumber + ',' + this.startColumn + ' -> ' + this.endLineNumber + ',' + this.endColumn + ']';
    };
    /**
     * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
     */
    Range.prototype.setEndPosition = function (endLineNumber, endColumn) {
        return new Range(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
    };
    /**
     * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
     */
    Range.prototype.setStartPosition = function (startLineNumber, startColumn) {
        return new Range(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
    };
    /**
     * Create a new empty range using this range's start position.
     */
    Range.prototype.collapseToStart = function () {
        return Range.collapseToStart(this);
    };
    /**
     * Create a new empty range using this range's start position.
     */
    Range.collapseToStart = function (range) {
        return new Range(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
    };
    // ---
    Range.fromPositions = function (start, end) {
        if (end === void 0) { end = start; }
        return new Range(start.lineNumber, start.column, end.lineNumber, end.column);
    };
    Range.lift = function (range) {
        if (!range) {
            return null;
        }
        return new Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
    };
    /**
     * Test if `obj` is an `IRange`.
     */
    Range.isIRange = function (obj) {
        return (obj
            && (typeof obj.startLineNumber === 'number')
            && (typeof obj.startColumn === 'number')
            && (typeof obj.endLineNumber === 'number')
            && (typeof obj.endColumn === 'number'));
    };
    /**
     * Test if the two ranges are touching in any way.
     */
    Range.areIntersectingOrTouching = function (a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn)) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn)) {
            return false;
        }
        // These ranges must intersect
        return true;
    };
    /**
     * Test if the two ranges are intersecting. If the ranges are touching it returns true.
     */
    Range.areIntersecting = function (a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn)) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn)) {
            return false;
        }
        // These ranges must intersect
        return true;
    };
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the startPosition and then on the endPosition
     */
    Range.compareRangesUsingStarts = function (a, b) {
        if (a && b) {
            var aStartLineNumber = a.startLineNumber | 0;
            var bStartLineNumber = b.startLineNumber | 0;
            if (aStartLineNumber === bStartLineNumber) {
                var aStartColumn = a.startColumn | 0;
                var bStartColumn = b.startColumn | 0;
                if (aStartColumn === bStartColumn) {
                    var aEndLineNumber = a.endLineNumber | 0;
                    var bEndLineNumber = b.endLineNumber | 0;
                    if (aEndLineNumber === bEndLineNumber) {
                        var aEndColumn = a.endColumn | 0;
                        var bEndColumn = b.endColumn | 0;
                        return aEndColumn - bEndColumn;
                    }
                    return aEndLineNumber - bEndLineNumber;
                }
                return aStartColumn - bStartColumn;
            }
            return aStartLineNumber - bStartLineNumber;
        }
        var aExists = (a ? 1 : 0);
        var bExists = (b ? 1 : 0);
        return aExists - bExists;
    };
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the endPosition and then on the startPosition
     */
    Range.compareRangesUsingEnds = function (a, b) {
        if (a.endLineNumber === b.endLineNumber) {
            if (a.endColumn === b.endColumn) {
                if (a.startLineNumber === b.startLineNumber) {
                    return a.startColumn - b.startColumn;
                }
                return a.startLineNumber - b.startLineNumber;
            }
            return a.endColumn - b.endColumn;
        }
        return a.endLineNumber - b.endLineNumber;
    };
    /**
     * Test if the range spans multiple lines.
     */
    Range.spansMultipleLines = function (range) {
        return range.endLineNumber > range.startLineNumber;
    };
    return Range;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js":
/*!***************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js ***!
  \***************************************************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js");
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


/**
 * A selection in the editor.
 * The selection is a range that has an orientation.
 */
var Selection = /** @class */ (function (_super) {
    __extends(Selection, _super);
    function Selection(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) {
        var _this = _super.call(this, selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) || this;
        _this.selectionStartLineNumber = selectionStartLineNumber;
        _this.selectionStartColumn = selectionStartColumn;
        _this.positionLineNumber = positionLineNumber;
        _this.positionColumn = positionColumn;
        return _this;
    }
    /**
     * Clone this selection.
     */
    Selection.prototype.clone = function () {
        return new Selection(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn);
    };
    /**
     * Transform to a human-readable representation.
     */
    Selection.prototype.toString = function () {
        return '[' + this.selectionStartLineNumber + ',' + this.selectionStartColumn + ' -> ' + this.positionLineNumber + ',' + this.positionColumn + ']';
    };
    /**
     * Test if equals other selection.
     */
    Selection.prototype.equalsSelection = function (other) {
        return (Selection.selectionsEqual(this, other));
    };
    /**
     * Test if the two selections are equal.
     */
    Selection.selectionsEqual = function (a, b) {
        return (a.selectionStartLineNumber === b.selectionStartLineNumber &&
            a.selectionStartColumn === b.selectionStartColumn &&
            a.positionLineNumber === b.positionLineNumber &&
            a.positionColumn === b.positionColumn);
    };
    /**
     * Get directions (LTR or RTL).
     */
    Selection.prototype.getDirection = function () {
        if (this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn) {
            return 0 /* LTR */;
        }
        return 1 /* RTL */;
    };
    /**
     * Create a new selection with a different `positionLineNumber` and `positionColumn`.
     */
    Selection.prototype.setEndPosition = function (endLineNumber, endColumn) {
        if (this.getDirection() === 0 /* LTR */) {
            return new Selection(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
        }
        return new Selection(endLineNumber, endColumn, this.startLineNumber, this.startColumn);
    };
    /**
     * Get the position at `positionLineNumber` and `positionColumn`.
     */
    Selection.prototype.getPosition = function () {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](this.positionLineNumber, this.positionColumn);
    };
    /**
     * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
     */
    Selection.prototype.setStartPosition = function (startLineNumber, startColumn) {
        if (this.getDirection() === 0 /* LTR */) {
            return new Selection(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
        }
        return new Selection(this.endLineNumber, this.endColumn, startLineNumber, startColumn);
    };
    // ----
    /**
     * Create a `Selection` from one or two positions
     */
    Selection.fromPositions = function (start, end) {
        if (end === void 0) { end = start; }
        return new Selection(start.lineNumber, start.column, end.lineNumber, end.column);
    };
    /**
     * Create a `Selection` from an `ISelection`.
     */
    Selection.liftSelection = function (sel) {
        return new Selection(sel.selectionStartLineNumber, sel.selectionStartColumn, sel.positionLineNumber, sel.positionColumn);
    };
    /**
     * `a` equals `b`.
     */
    Selection.selectionsArrEqual = function (a, b) {
        if (a && !b || !a && b) {
            return false;
        }
        if (!a && !b) {
            return true;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0, len = a.length; i < len; i++) {
            if (!this.selectionsEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * Test if `obj` is an `ISelection`.
     */
    Selection.isISelection = function (obj) {
        return (obj
            && (typeof obj.selectionStartLineNumber === 'number')
            && (typeof obj.selectionStartColumn === 'number')
            && (typeof obj.positionLineNumber === 'number')
            && (typeof obj.positionColumn === 'number'));
    };
    /**
     * Create with a direction.
     */
    Selection.createWithDirection = function (startLineNumber, startColumn, endLineNumber, endColumn, direction) {
        if (direction === 0 /* LTR */) {
            return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
        }
        return new Selection(endLineNumber, endColumn, startLineNumber, startColumn);
    };
    return Selection;
}(_range_js__WEBPACK_IMPORTED_MODULE_1__["Range"]));



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/token.js":
/*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/token.js ***!
  \***********************************************************************/
/*! exports provided: Token, TokenizationResult, TokenizationResult2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenizationResult", function() { return TokenizationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenizationResult2", function() { return TokenizationResult2; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var Token = /** @class */ (function () {
    function Token(offset, type, language) {
        this.offset = offset | 0; // @perf
        this.type = type;
        this.language = language;
    }
    Token.prototype.toString = function () {
        return '(' + this.offset + ', ' + this.type + ')';
    };
    return Token;
}());

var TokenizationResult = /** @class */ (function () {
    function TokenizationResult(tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
    }
    return TokenizationResult;
}());

var TokenizationResult2 = /** @class */ (function () {
    function TokenizationResult2(tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
    }
    return TokenizationResult2;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js ***!
  \**********************************************************************/
/*! exports provided: Uint8Matrix, toUint8, toUint32, toUint32Array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint8Matrix", function() { return Uint8Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8", function() { return toUint8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32", function() { return toUint32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32Array", function() { return toUint32Array; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var Uint8Matrix = /** @class */ (function () {
    function Uint8Matrix(rows, cols, defaultValue) {
        var data = new Uint8Array(rows * cols);
        for (var i = 0, len = rows * cols; i < len; i++) {
            data[i] = defaultValue;
        }
        this._data = data;
        this.rows = rows;
        this.cols = cols;
    }
    Uint8Matrix.prototype.get = function (row, col) {
        return this._data[row * this.cols + col];
    };
    Uint8Matrix.prototype.set = function (row, col, value) {
        this._data[row * this.cols + col] = value;
    };
    return Uint8Matrix;
}());

function toUint8(v) {
    if (v < 0) {
        return 0;
    }
    if (v > 255 /* MAX_UINT_8 */) {
        return 255 /* MAX_UINT_8 */;
    }
    return v | 0;
}
function toUint32(v) {
    if (v < 0) {
        return 0;
    }
    if (v > 4294967295 /* MAX_UINT_32 */) {
        return 4294967295 /* MAX_UINT_32 */;
    }
    return v | 0;
}
function toUint32Array(arr) {
    var len = arr.length;
    var r = new Uint32Array(len);
    for (var i = 0; i < len; i++) {
        r[i] = toUint32(arr[i]);
    }
    return r;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js ***!
  \******************************************************************************/
/*! exports provided: DiffComputer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffComputer", function() { return DiffComputer; });
/* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/common/diff/diff.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js");
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/common/strings.js */ "./node_modules/monaco-editor/esm/vs/base/common/strings.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var MAXIMUM_RUN_TIME = 5000; // 5 seconds
var MINIMUM_MATCHING_CHARACTER_LENGTH = 3;
function computeDiff(originalSequence, modifiedSequence, continueProcessingPredicate, pretty) {
    var diffAlgo = new _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__["LcsDiff"](originalSequence, modifiedSequence, continueProcessingPredicate);
    return diffAlgo.ComputeDiff(pretty);
}
var LineMarkerSequence = /** @class */ (function () {
    function LineMarkerSequence(lines) {
        var startColumns = [];
        var endColumns = [];
        for (var i = 0, length_1 = lines.length; i < length_1; i++) {
            startColumns[i] = LineMarkerSequence._getFirstNonBlankColumn(lines[i], 1);
            endColumns[i] = LineMarkerSequence._getLastNonBlankColumn(lines[i], 1);
        }
        this._lines = lines;
        this._startColumns = startColumns;
        this._endColumns = endColumns;
    }
    LineMarkerSequence.prototype.getLength = function () {
        return this._lines.length;
    };
    LineMarkerSequence.prototype.getElementAtIndex = function (i) {
        return this._lines[i].substring(this._startColumns[i] - 1, this._endColumns[i] - 1);
    };
    LineMarkerSequence.prototype.getStartLineNumber = function (i) {
        return i + 1;
    };
    LineMarkerSequence.prototype.getEndLineNumber = function (i) {
        return i + 1;
    };
    LineMarkerSequence._getFirstNonBlankColumn = function (txt, defaultValue) {
        var r = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__["firstNonWhitespaceIndex"](txt);
        if (r === -1) {
            return defaultValue;
        }
        return r + 1;
    };
    LineMarkerSequence._getLastNonBlankColumn = function (txt, defaultValue) {
        var r = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__["lastNonWhitespaceIndex"](txt);
        if (r === -1) {
            return defaultValue;
        }
        return r + 2;
    };
    LineMarkerSequence.prototype.getCharSequence = function (shouldIgnoreTrimWhitespace, startIndex, endIndex) {
        var charCodes = [];
        var lineNumbers = [];
        var columns = [];
        var len = 0;
        for (var index = startIndex; index <= endIndex; index++) {
            var lineContent = this._lines[index];
            var startColumn = (shouldIgnoreTrimWhitespace ? this._startColumns[index] : 1);
            var endColumn = (shouldIgnoreTrimWhitespace ? this._endColumns[index] : lineContent.length + 1);
            for (var col = startColumn; col < endColumn; col++) {
                charCodes[len] = lineContent.charCodeAt(col - 1);
                lineNumbers[len] = index + 1;
                columns[len] = col;
                len++;
            }
        }
        return new CharSequence(charCodes, lineNumbers, columns);
    };
    return LineMarkerSequence;
}());
var CharSequence = /** @class */ (function () {
    function CharSequence(charCodes, lineNumbers, columns) {
        this._charCodes = charCodes;
        this._lineNumbers = lineNumbers;
        this._columns = columns;
    }
    CharSequence.prototype.getLength = function () {
        return this._charCodes.length;
    };
    CharSequence.prototype.getElementAtIndex = function (i) {
        return this._charCodes[i];
    };
    CharSequence.prototype.getStartLineNumber = function (i) {
        return this._lineNumbers[i];
    };
    CharSequence.prototype.getStartColumn = function (i) {
        return this._columns[i];
    };
    CharSequence.prototype.getEndLineNumber = function (i) {
        return this._lineNumbers[i];
    };
    CharSequence.prototype.getEndColumn = function (i) {
        return this._columns[i] + 1;
    };
    return CharSequence;
}());
var CharChange = /** @class */ (function () {
    function CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalStartColumn = originalStartColumn;
        this.originalEndLineNumber = originalEndLineNumber;
        this.originalEndColumn = originalEndColumn;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedStartColumn = modifiedStartColumn;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.modifiedEndColumn = modifiedEndColumn;
    }
    CharChange.createFromDiffChange = function (diffChange, originalCharSequence, modifiedCharSequence) {
        var originalStartLineNumber;
        var originalStartColumn;
        var originalEndLineNumber;
        var originalEndColumn;
        var modifiedStartLineNumber;
        var modifiedStartColumn;
        var modifiedEndLineNumber;
        var modifiedEndColumn;
        if (diffChange.originalLength === 0) {
            originalStartLineNumber = 0;
            originalStartColumn = 0;
            originalEndLineNumber = 0;
            originalEndColumn = 0;
        }
        else {
            originalStartLineNumber = originalCharSequence.getStartLineNumber(diffChange.originalStart);
            originalStartColumn = originalCharSequence.getStartColumn(diffChange.originalStart);
            originalEndLineNumber = originalCharSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
            originalEndColumn = originalCharSequence.getEndColumn(diffChange.originalStart + diffChange.originalLength - 1);
        }
        if (diffChange.modifiedLength === 0) {
            modifiedStartLineNumber = 0;
            modifiedStartColumn = 0;
            modifiedEndLineNumber = 0;
            modifiedEndColumn = 0;
        }
        else {
            modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(diffChange.modifiedStart);
            modifiedStartColumn = modifiedCharSequence.getStartColumn(diffChange.modifiedStart);
            modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
            modifiedEndColumn = modifiedCharSequence.getEndColumn(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        }
        return new CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn);
    };
    return CharChange;
}());
function postProcessCharChanges(rawChanges) {
    if (rawChanges.length <= 1) {
        return rawChanges;
    }
    var result = [rawChanges[0]];
    var prevChange = result[0];
    for (var i = 1, len = rawChanges.length; i < len; i++) {
        var currChange = rawChanges[i];
        var originalMatchingLength = currChange.originalStart - (prevChange.originalStart + prevChange.originalLength);
        var modifiedMatchingLength = currChange.modifiedStart - (prevChange.modifiedStart + prevChange.modifiedLength);
        // Both of the above should be equal, but the continueProcessingPredicate may prevent this from being true
        var matchingLength = Math.min(originalMatchingLength, modifiedMatchingLength);
        if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
            // Merge the current change into the previous one
            prevChange.originalLength = (currChange.originalStart + currChange.originalLength) - prevChange.originalStart;
            prevChange.modifiedLength = (currChange.modifiedStart + currChange.modifiedLength) - prevChange.modifiedStart;
        }
        else {
            // Add the current change
            result.push(currChange);
            prevChange = currChange;
        }
    }
    return result;
}
var LineChange = /** @class */ (function () {
    function LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalEndLineNumber = originalEndLineNumber;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.charChanges = charChanges;
    }
    LineChange.createFromDiffResult = function (shouldIgnoreTrimWhitespace, diffChange, originalLineSequence, modifiedLineSequence, continueProcessingPredicate, shouldComputeCharChanges, shouldPostProcessCharChanges) {
        var originalStartLineNumber;
        var originalEndLineNumber;
        var modifiedStartLineNumber;
        var modifiedEndLineNumber;
        var charChanges = undefined;
        if (diffChange.originalLength === 0) {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart) - 1;
            originalEndLineNumber = 0;
        }
        else {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart);
            originalEndLineNumber = originalLineSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
        }
        if (diffChange.modifiedLength === 0) {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart) - 1;
            modifiedEndLineNumber = 0;
        }
        else {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart);
            modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        }
        if (shouldComputeCharChanges && diffChange.originalLength !== 0 && diffChange.modifiedLength !== 0 && continueProcessingPredicate()) {
            var originalCharSequence = originalLineSequence.getCharSequence(shouldIgnoreTrimWhitespace, diffChange.originalStart, diffChange.originalStart + diffChange.originalLength - 1);
            var modifiedCharSequence = modifiedLineSequence.getCharSequence(shouldIgnoreTrimWhitespace, diffChange.modifiedStart, diffChange.modifiedStart + diffChange.modifiedLength - 1);
            var rawChanges = computeDiff(originalCharSequence, modifiedCharSequence, continueProcessingPredicate, true);
            if (shouldPostProcessCharChanges) {
                rawChanges = postProcessCharChanges(rawChanges);
            }
            charChanges = [];
            for (var i = 0, length_2 = rawChanges.length; i < length_2; i++) {
                charChanges.push(CharChange.createFromDiffChange(rawChanges[i], originalCharSequence, modifiedCharSequence));
            }
        }
        return new LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges);
    };
    return LineChange;
}());
var DiffComputer = /** @class */ (function () {
    function DiffComputer(originalLines, modifiedLines, opts) {
        this.shouldComputeCharChanges = opts.shouldComputeCharChanges;
        this.shouldPostProcessCharChanges = opts.shouldPostProcessCharChanges;
        this.shouldIgnoreTrimWhitespace = opts.shouldIgnoreTrimWhitespace;
        this.shouldMakePrettyDiff = opts.shouldMakePrettyDiff;
        this.maximumRunTimeMs = MAXIMUM_RUN_TIME;
        this.originalLines = originalLines;
        this.modifiedLines = modifiedLines;
        this.original = new LineMarkerSequence(originalLines);
        this.modified = new LineMarkerSequence(modifiedLines);
    }
    DiffComputer.prototype.computeDiff = function () {
        if (this.original.getLength() === 1 && this.original.getElementAtIndex(0).length === 0) {
            // empty original => fast path
            return [{
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.getLength(),
                    charChanges: [{
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0
                        }]
                }];
        }
        if (this.modified.getLength() === 1 && this.modified.getElementAtIndex(0).length === 0) {
            // empty modified => fast path
            return [{
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.getLength(),
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: [{
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0
                        }]
                }];
        }
        this.computationStartTime = (new Date()).getTime();
        var rawChanges = computeDiff(this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldMakePrettyDiff);
        // The diff is always computed with ignoring trim whitespace
        // This ensures we get the prettiest diff
        if (this.shouldIgnoreTrimWhitespace) {
            var lineChanges = [];
            for (var i = 0, length_3 = rawChanges.length; i < length_3; i++) {
                lineChanges.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, rawChanges[i], this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
            }
            return lineChanges;
        }
        // Need to post-process and introduce changes where the trim whitespace is different
        // Note that we are looping starting at -1 to also cover the lines before the first change
        var result = [];
        var originalLineIndex = 0;
        var modifiedLineIndex = 0;
        for (var i = -1 /* !!!! */, len = rawChanges.length; i < len; i++) {
            var nextChange = (i + 1 < len ? rawChanges[i + 1] : null);
            var originalStop = (nextChange ? nextChange.originalStart : this.originalLines.length);
            var modifiedStop = (nextChange ? nextChange.modifiedStart : this.modifiedLines.length);
            while (originalLineIndex < originalStop && modifiedLineIndex < modifiedStop) {
                var originalLine = this.originalLines[originalLineIndex];
                var modifiedLine = this.modifiedLines[modifiedLineIndex];
                if (originalLine !== modifiedLine) {
                    // These lines differ only in trim whitespace
                    // Check the leading whitespace
                    {
                        var originalStartColumn = LineMarkerSequence._getFirstNonBlankColumn(originalLine, 1);
                        var modifiedStartColumn = LineMarkerSequence._getFirstNonBlankColumn(modifiedLine, 1);
                        while (originalStartColumn > 1 && modifiedStartColumn > 1) {
                            var originalChar = originalLine.charCodeAt(originalStartColumn - 2);
                            var modifiedChar = modifiedLine.charCodeAt(modifiedStartColumn - 2);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalStartColumn--;
                            modifiedStartColumn--;
                        }
                        if (originalStartColumn > 1 || modifiedStartColumn > 1) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, 1, originalStartColumn, modifiedLineIndex + 1, 1, modifiedStartColumn);
                        }
                    }
                    // Check the trailing whitespace
                    {
                        var originalEndColumn = LineMarkerSequence._getLastNonBlankColumn(originalLine, 1);
                        var modifiedEndColumn = LineMarkerSequence._getLastNonBlankColumn(modifiedLine, 1);
                        var originalMaxColumn = originalLine.length + 1;
                        var modifiedMaxColumn = modifiedLine.length + 1;
                        while (originalEndColumn < originalMaxColumn && modifiedEndColumn < modifiedMaxColumn) {
                            var originalChar = originalLine.charCodeAt(originalEndColumn - 1);
                            var modifiedChar = originalLine.charCodeAt(modifiedEndColumn - 1);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalEndColumn++;
                            modifiedEndColumn++;
                        }
                        if (originalEndColumn < originalMaxColumn || modifiedEndColumn < modifiedMaxColumn) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, originalEndColumn, originalMaxColumn, modifiedLineIndex + 1, modifiedEndColumn, modifiedMaxColumn);
                        }
                    }
                }
                originalLineIndex++;
                modifiedLineIndex++;
            }
            if (nextChange) {
                // Emit the actual change
                result.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, nextChange, this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
                originalLineIndex += nextChange.originalLength;
                modifiedLineIndex += nextChange.modifiedLength;
            }
        }
        return result;
    };
    DiffComputer.prototype._pushTrimWhitespaceCharChange = function (result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        if (this._mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn)) {
            // Merged into previous
            return;
        }
        var charChanges = undefined;
        if (this.shouldComputeCharChanges) {
            charChanges = [new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn)];
        }
        result.push(new LineChange(originalLineNumber, originalLineNumber, modifiedLineNumber, modifiedLineNumber, charChanges));
    };
    DiffComputer.prototype._mergeTrimWhitespaceCharChange = function (result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        var len = result.length;
        if (len === 0) {
            return false;
        }
        var prevChange = result[len - 1];
        if (prevChange.originalEndLineNumber === 0 || prevChange.modifiedEndLineNumber === 0) {
            // Don't merge with inserts/deletes
            return false;
        }
        if (prevChange.originalEndLineNumber + 1 === originalLineNumber && prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber) {
            prevChange.originalEndLineNumber = originalLineNumber;
            prevChange.modifiedEndLineNumber = modifiedLineNumber;
            if (this.shouldComputeCharChanges) {
                prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
            }
            return true;
        }
        return false;
    };
    DiffComputer.prototype._continueProcessingPredicate = function () {
        if (this.maximumRunTimeMs === 0) {
            return true;
        }
        var now = (new Date()).getTime();
        return now - this.computationStartTime < this.maximumRunTimeMs;
    };
    return DiffComputer;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js ***!
  \**********************************************************************************/
/*! exports provided: MirrorTextModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MirrorTextModel", function() { return MirrorTextModel; });
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _viewModel_prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModel/prefixSumComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var MirrorTextModel = /** @class */ (function () {
    function MirrorTextModel(uri, lines, eol, versionId) {
        this._uri = uri;
        this._lines = lines;
        this._eol = eol;
        this._versionId = versionId;
        this._lineStarts = null;
    }
    MirrorTextModel.prototype.dispose = function () {
        this._lines.length = 0;
    };
    MirrorTextModel.prototype.getText = function () {
        return this._lines.join(this._eol);
    };
    MirrorTextModel.prototype.onEvents = function (e) {
        if (e.eol && e.eol !== this._eol) {
            this._eol = e.eol;
            this._lineStarts = null;
        }
        // Update my lines
        var changes = e.changes;
        for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
            var change = changes_1[_i];
            this._acceptDeleteRange(change.range);
            this._acceptInsertText(new _core_position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](change.range.startLineNumber, change.range.startColumn), change.text);
        }
        this._versionId = e.versionId;
    };
    MirrorTextModel.prototype._ensureLineStarts = function () {
        if (!this._lineStarts) {
            var eolLength = this._eol.length;
            var linesLength = this._lines.length;
            var lineStartValues = new Uint32Array(linesLength);
            for (var i = 0; i < linesLength; i++) {
                lineStartValues[i] = this._lines[i].length + eolLength;
            }
            this._lineStarts = new _viewModel_prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_1__["PrefixSumComputer"](lineStartValues);
        }
    };
    /**
     * All changes to a line's text go through this method
     */
    MirrorTextModel.prototype._setLineText = function (lineIndex, newValue) {
        this._lines[lineIndex] = newValue;
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.changeValue(lineIndex, this._lines[lineIndex].length + this._eol.length);
        }
    };
    MirrorTextModel.prototype._acceptDeleteRange = function (range) {
        if (range.startLineNumber === range.endLineNumber) {
            if (range.startColumn === range.endColumn) {
                // Nothing to delete
                return;
            }
            // Delete text on the affected line
            this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
                + this._lines[range.startLineNumber - 1].substring(range.endColumn - 1));
            return;
        }
        // Take remaining text on last line and append it to remaining text on first line
        this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
            + this._lines[range.endLineNumber - 1].substring(range.endColumn - 1));
        // Delete middle lines
        this._lines.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        }
    };
    MirrorTextModel.prototype._acceptInsertText = function (position, insertText) {
        if (insertText.length === 0) {
            // Nothing to insert
            return;
        }
        var insertLines = insertText.split(/\r\n|\r|\n/);
        if (insertLines.length === 1) {
            // Inserting text on one line
            this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
                + insertLines[0]
                + this._lines[position.lineNumber - 1].substring(position.column - 1));
            return;
        }
        // Append overflowing text from first line to the end of text to insert
        insertLines[insertLines.length - 1] += this._lines[position.lineNumber - 1].substring(position.column - 1);
        // Delete overflowing text from first line and insert text on first line
        this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
            + insertLines[0]);
        // Insert new lines & store lengths
        var newLengths = new Uint32Array(insertLines.length - 1);
        for (var i = 1; i < insertLines.length; i++) {
            this._lines.splice(position.lineNumber + i - 1, 0, insertLines[i]);
            newLengths[i - 1] = insertLines[i].length + this._eol.length;
        }
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.insertValues(position.lineNumber, newLengths);
        }
    };
    return MirrorTextModel;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js ***!
  \*****************************************************************************/
/*! exports provided: USUAL_WORD_SEPARATORS, DEFAULT_WORD_REGEXP, ensureValidWordDefinition, getWordAtText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUAL_WORD_SEPARATORS", function() { return USUAL_WORD_SEPARATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WORD_REGEXP", function() { return DEFAULT_WORD_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValidWordDefinition", function() { return ensureValidWordDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWordAtText", function() { return getWordAtText; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
/**
 * Create a word definition regular expression based on default word separators.
 * Optionally provide allowed separators that should be included in words.
 *
 * The default would look like this:
 * /(-?\d*\.\d\w*)|([^\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
 */
function createWordRegExp(allowInWords) {
    if (allowInWords === void 0) { allowInWords = ''; }
    var source = '(-?\\d*\\.\\d\\w*)|([^';
    for (var _i = 0, USUAL_WORD_SEPARATORS_1 = USUAL_WORD_SEPARATORS; _i < USUAL_WORD_SEPARATORS_1.length; _i++) {
        var sep = USUAL_WORD_SEPARATORS_1[_i];
        if (allowInWords.indexOf(sep) >= 0) {
            continue;
        }
        source += '\\' + sep;
    }
    source += '\\s]+)';
    return new RegExp(source, 'g');
}
// catches numbers (including floating numbers) in the first group, and alphanum in the second
var DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(wordDefinition) {
    var result = DEFAULT_WORD_REGEXP;
    if (wordDefinition && (wordDefinition instanceof RegExp)) {
        if (!wordDefinition.global) {
            var flags = 'g';
            if (wordDefinition.ignoreCase) {
                flags += 'i';
            }
            if (wordDefinition.multiline) {
                flags += 'm';
            }
            if (wordDefinition.unicode) {
                flags += 'u';
            }
            result = new RegExp(wordDefinition.source, flags);
        }
        else {
            result = wordDefinition;
        }
    }
    result.lastIndex = 0;
    return result;
}
function getWordAtPosFast(column, wordDefinition, text, textOffset) {
    // find whitespace enclosed text around column and match from there
    var pos = column - 1 - textOffset;
    var start = text.lastIndexOf(' ', pos - 1) + 1;
    wordDefinition.lastIndex = start;
    var match;
    while (match = wordDefinition.exec(text)) {
        var matchIndex = match.index || 0;
        if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
            return {
                word: match[0],
                startColumn: textOffset + 1 + matchIndex,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
            };
        }
    }
    return null;
}
function getWordAtPosSlow(column, wordDefinition, text, textOffset) {
    // matches all words starting at the beginning
    // of the input until it finds a match that encloses
    // the desired column. slow but correct
    var pos = column - 1 - textOffset;
    wordDefinition.lastIndex = 0;
    var match;
    while (match = wordDefinition.exec(text)) {
        var matchIndex = match.index || 0;
        if (matchIndex > pos) {
            // |nW -> matched only after the pos
            return null;
        }
        else if (wordDefinition.lastIndex >= pos) {
            // W|W -> match encloses pos
            return {
                word: match[0],
                startColumn: textOffset + 1 + matchIndex,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
            };
        }
    }
    return null;
}
function getWordAtText(column, wordDefinition, text, textOffset) {
    // if `words` can contain whitespace character we have to use the slow variant
    // otherwise we use the fast variant of finding a word
    wordDefinition.lastIndex = 0;
    var match = wordDefinition.exec(text);
    if (!match) {
        return null;
    }
    // todo@joh the `match` could already be the (first) word
    var ret = match[0].indexOf(' ') >= 0
        // did match a word which contains a space character -> use slow word find
        ? getWordAtPosSlow(column, wordDefinition, text, textOffset)
        // sane word definition -> use fast word find
        : getWordAtPosFast(column, wordDefinition, text, textOffset);
    // both (getWordAtPosFast and getWordAtPosSlow) leave the wordDefinition-RegExp
    // in an undefined state and to not confuse other users of the wordDefinition
    // we reset the lastIndex
    wordDefinition.lastIndex = 0;
    return ret;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js ***!
  \*******************************************************************************/
/*! exports provided: StateMachine, LinkComputer, computeLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachine", function() { return StateMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComputer", function() { return LinkComputer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeLinks", function() { return computeLinks; });
/* harmony import */ var _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/characterClassifier.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js");
/* harmony import */ var _core_uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var StateMachine = /** @class */ (function () {
    function StateMachine(edges) {
        var maxCharCode = 0;
        var maxState = 0 /* Invalid */;
        for (var i = 0, len = edges.length; i < len; i++) {
            var _a = edges[i], from = _a[0], chCode = _a[1], to = _a[2];
            if (chCode > maxCharCode) {
                maxCharCode = chCode;
            }
            if (from > maxState) {
                maxState = from;
            }
            if (to > maxState) {
                maxState = to;
            }
        }
        maxCharCode++;
        maxState++;
        var states = new _core_uint_js__WEBPACK_IMPORTED_MODULE_1__["Uint8Matrix"](maxState, maxCharCode, 0 /* Invalid */);
        for (var i = 0, len = edges.length; i < len; i++) {
            var _b = edges[i], from = _b[0], chCode = _b[1], to = _b[2];
            states.set(from, chCode, to);
        }
        this._states = states;
        this._maxCharCode = maxCharCode;
    }
    StateMachine.prototype.nextState = function (currentState, chCode) {
        if (chCode < 0 || chCode >= this._maxCharCode) {
            return 0 /* Invalid */;
        }
        return this._states.get(currentState, chCode);
    };
    return StateMachine;
}());

// State machine for http:// or https:// or file://
var _stateMachine = null;
function getStateMachine() {
    if (_stateMachine === null) {
        _stateMachine = new StateMachine([
            [1 /* Start */, 104 /* h */, 2 /* H */],
            [1 /* Start */, 72 /* H */, 2 /* H */],
            [1 /* Start */, 102 /* f */, 6 /* F */],
            [1 /* Start */, 70 /* F */, 6 /* F */],
            [2 /* H */, 116 /* t */, 3 /* HT */],
            [2 /* H */, 84 /* T */, 3 /* HT */],
            [3 /* HT */, 116 /* t */, 4 /* HTT */],
            [3 /* HT */, 84 /* T */, 4 /* HTT */],
            [4 /* HTT */, 112 /* p */, 5 /* HTTP */],
            [4 /* HTT */, 80 /* P */, 5 /* HTTP */],
            [5 /* HTTP */, 115 /* s */, 9 /* BeforeColon */],
            [5 /* HTTP */, 83 /* S */, 9 /* BeforeColon */],
            [5 /* HTTP */, 58 /* Colon */, 10 /* AfterColon */],
            [6 /* F */, 105 /* i */, 7 /* FI */],
            [6 /* F */, 73 /* I */, 7 /* FI */],
            [7 /* FI */, 108 /* l */, 8 /* FIL */],
            [7 /* FI */, 76 /* L */, 8 /* FIL */],
            [8 /* FIL */, 101 /* e */, 9 /* BeforeColon */],
            [8 /* FIL */, 69 /* E */, 9 /* BeforeColon */],
            [9 /* BeforeColon */, 58 /* Colon */, 10 /* AfterColon */],
            [10 /* AfterColon */, 47 /* Slash */, 11 /* AlmostThere */],
            [11 /* AlmostThere */, 47 /* Slash */, 12 /* End */],
        ]);
    }
    return _stateMachine;
}
var _classifier = null;
function getClassifier() {
    if (_classifier === null) {
        _classifier = new _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__["CharacterClassifier"](0 /* None */);
        var FORCE_TERMINATION_CHARACTERS = ' \t<>\'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…';
        for (var i = 0; i < FORCE_TERMINATION_CHARACTERS.length; i++) {
            _classifier.set(FORCE_TERMINATION_CHARACTERS.charCodeAt(i), 1 /* ForceTermination */);
        }
        var CANNOT_END_WITH_CHARACTERS = '.,;';
        for (var i = 0; i < CANNOT_END_WITH_CHARACTERS.length; i++) {
            _classifier.set(CANNOT_END_WITH_CHARACTERS.charCodeAt(i), 2 /* CannotEndIn */);
        }
    }
    return _classifier;
}
var LinkComputer = /** @class */ (function () {
    function LinkComputer() {
    }
    LinkComputer._createLink = function (classifier, line, lineNumber, linkBeginIndex, linkEndIndex) {
        // Do not allow to end link in certain characters...
        var lastIncludedCharIndex = linkEndIndex - 1;
        do {
            var chCode = line.charCodeAt(lastIncludedCharIndex);
            var chClass = classifier.get(chCode);
            if (chClass !== 2 /* CannotEndIn */) {
                break;
            }
            lastIncludedCharIndex--;
        } while (lastIncludedCharIndex > linkBeginIndex);
        // Handle links enclosed in parens, square brackets and curlys.
        if (linkBeginIndex > 0) {
            var charCodeBeforeLink = line.charCodeAt(linkBeginIndex - 1);
            var lastCharCodeInLink = line.charCodeAt(lastIncludedCharIndex);
            if ((charCodeBeforeLink === 40 /* OpenParen */ && lastCharCodeInLink === 41 /* CloseParen */)
                || (charCodeBeforeLink === 91 /* OpenSquareBracket */ && lastCharCodeInLink === 93 /* CloseSquareBracket */)
                || (charCodeBeforeLink === 123 /* OpenCurlyBrace */ && lastCharCodeInLink === 125 /* CloseCurlyBrace */)) {
                // Do not end in ) if ( is before the link start
                // Do not end in ] if [ is before the link start
                // Do not end in } if { is before the link start
                lastIncludedCharIndex--;
            }
        }
        return {
            range: {
                startLineNumber: lineNumber,
                startColumn: linkBeginIndex + 1,
                endLineNumber: lineNumber,
                endColumn: lastIncludedCharIndex + 2
            },
            url: line.substring(linkBeginIndex, lastIncludedCharIndex + 1)
        };
    };
    LinkComputer.computeLinks = function (model, stateMachine) {
        if (stateMachine === void 0) { stateMachine = getStateMachine(); }
        var classifier = getClassifier();
        var result = [];
        for (var i = 1, lineCount = model.getLineCount(); i <= lineCount; i++) {
            var line = model.getLineContent(i);
            var len = line.length;
            var j = 0;
            var linkBeginIndex = 0;
            var linkBeginChCode = 0;
            var state = 1 /* Start */;
            var hasOpenParens = false;
            var hasOpenSquareBracket = false;
            var hasOpenCurlyBracket = false;
            while (j < len) {
                var resetStateMachine = false;
                var chCode = line.charCodeAt(j);
                if (state === 13 /* Accept */) {
                    var chClass = void 0;
                    switch (chCode) {
                        case 40 /* OpenParen */:
                            hasOpenParens = true;
                            chClass = 0 /* None */;
                            break;
                        case 41 /* CloseParen */:
                            chClass = (hasOpenParens ? 0 /* None */ : 1 /* ForceTermination */);
                            break;
                        case 91 /* OpenSquareBracket */:
                            hasOpenSquareBracket = true;
                            chClass = 0 /* None */;
                            break;
                        case 93 /* CloseSquareBracket */:
                            chClass = (hasOpenSquareBracket ? 0 /* None */ : 1 /* ForceTermination */);
                            break;
                        case 123 /* OpenCurlyBrace */:
                            hasOpenCurlyBracket = true;
                            chClass = 0 /* None */;
                            break;
                        case 125 /* CloseCurlyBrace */:
                            chClass = (hasOpenCurlyBracket ? 0 /* None */ : 1 /* ForceTermination */);
                            break;
                        /* The following three rules make it that ' or " or ` are allowed inside links if the link began with a different one */
                        case 39 /* SingleQuote */:
                            chClass = (linkBeginChCode === 34 /* DoubleQuote */ || linkBeginChCode === 96 /* BackTick */) ? 0 /* None */ : 1 /* ForceTermination */;
                            break;
                        case 34 /* DoubleQuote */:
                            chClass = (linkBeginChCode === 39 /* SingleQuote */ || linkBeginChCode === 96 /* BackTick */) ? 0 /* None */ : 1 /* ForceTermination */;
                            break;
                        case 96 /* BackTick */:
                            chClass = (linkBeginChCode === 39 /* SingleQuote */ || linkBeginChCode === 34 /* DoubleQuote */) ? 0 /* None */ : 1 /* ForceTermination */;
                            break;
                        default:
                            chClass = classifier.get(chCode);
                    }
                    // Check if character terminates link
                    if (chClass === 1 /* ForceTermination */) {
                        result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, j));
                        resetStateMachine = true;
                    }
                }
                else if (state === 12 /* End */) {
                    var chClass = void 0;
                    if (chCode === 91 /* OpenSquareBracket */) {
                        // Allow for the authority part to contain ipv6 addresses which contain [ and ]
                        hasOpenSquareBracket = true;
                        chClass = 0 /* None */;
                    }
                    else {
                        chClass = classifier.get(chCode);
                    }
                    // Check if character terminates link
                    if (chClass === 1 /* ForceTermination */) {
                        resetStateMachine = true;
                    }
                    else {
                        state = 13 /* Accept */;
                    }
                }
                else {
                    state = stateMachine.nextState(state, chCode);
                    if (state === 0 /* Invalid */) {
                        resetStateMachine = true;
                    }
                }
                if (resetStateMachine) {
                    state = 1 /* Start */;
                    hasOpenParens = false;
                    hasOpenSquareBracket = false;
                    hasOpenCurlyBracket = false;
                    // Record where the link started
                    linkBeginIndex = j + 1;
                    linkBeginChCode = chCode;
                }
                j++;
            }
            if (state === 13 /* Accept */) {
                result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, len));
            }
        }
        return result;
    };
    return LinkComputer;
}());

/**
 * Returns an array of all links contains in the provided
 * document. *Note* that this operation is computational
 * expensive and should not run in the UI thread.
 */
function computeLinks(model) {
    if (!model || typeof model.getLineCount !== 'function' || typeof model.getLineContent !== 'function') {
        // Unknown caller!
        return [];
    }
    return LinkComputer.computeLinks(model);
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js ***!
  \*************************************************************************************************/
/*! exports provided: BasicInplaceReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInplaceReplace", function() { return BasicInplaceReplace; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var BasicInplaceReplace = /** @class */ (function () {
    function BasicInplaceReplace() {
        this._defaultValueSet = [
            ['true', 'false'],
            ['True', 'False'],
            ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'],
            ['public', 'protected', 'private'],
        ];
    }
    BasicInplaceReplace.prototype.navigateValueSet = function (range1, text1, range2, text2, up) {
        if (range1 && text1) {
            var result = this.doNavigateValueSet(text1, up);
            if (result) {
                return {
                    range: range1,
                    value: result
                };
            }
        }
        if (range2 && text2) {
            var result = this.doNavigateValueSet(text2, up);
            if (result) {
                return {
                    range: range2,
                    value: result
                };
            }
        }
        return null;
    };
    BasicInplaceReplace.prototype.doNavigateValueSet = function (text, up) {
        var numberResult = this.numberReplace(text, up);
        if (numberResult !== null) {
            return numberResult;
        }
        return this.textReplace(text, up);
    };
    BasicInplaceReplace.prototype.numberReplace = function (value, up) {
        var precision = Math.pow(10, value.length - (value.lastIndexOf('.') + 1));
        var n1 = Number(value);
        var n2 = parseFloat(value);
        if (!isNaN(n1) && !isNaN(n2) && n1 === n2) {
            if (n1 === 0 && !up) {
                return null; // don't do negative
                //			} else if(n1 === 9 && up) {
                //				return null; // don't insert 10 into a number
            }
            else {
                n1 = Math.floor(n1 * precision);
                n1 += up ? precision : -precision;
                return String(n1 / precision);
            }
        }
        return null;
    };
    BasicInplaceReplace.prototype.textReplace = function (value, up) {
        return this.valueSetsReplace(this._defaultValueSet, value, up);
    };
    BasicInplaceReplace.prototype.valueSetsReplace = function (valueSets, value, up) {
        var result = null;
        for (var i = 0, len = valueSets.length; result === null && i < len; i++) {
            result = this.valueSetReplace(valueSets[i], value, up);
        }
        return result;
    };
    BasicInplaceReplace.prototype.valueSetReplace = function (valueSet, value, up) {
        var idx = valueSet.indexOf(value);
        if (idx >= 0) {
            idx += up ? +1 : -1;
            if (idx < 0) {
                idx = valueSet.length - 1;
            }
            else {
                idx %= valueSet.length;
            }
            return valueSet[idx];
        }
        return null;
    };
    BasicInplaceReplace.INSTANCE = new BasicInplaceReplace();
    return BasicInplaceReplace;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js ***!
  \****************************************************************************************/
/*! exports provided: BaseEditorSimpleWorker, EditorSimpleWorkerImpl, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEditorSimpleWorker", function() { return BaseEditorSimpleWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorSimpleWorkerImpl", function() { return EditorSimpleWorkerImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/common/arrays.js */ "./node_modules/monaco-editor/esm/vs/base/common/arrays.js");
/* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/common/diff/diff.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js");
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/common/iterator.js */ "./node_modules/monaco-editor/esm/vs/base/common/iterator.js");
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/common/platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js");
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/common/uri.js */ "./node_modules/monaco-editor/esm/vs/base/common/uri.js");
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js");
/* harmony import */ var _diff_diffComputer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../diff/diffComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js");
/* harmony import */ var _model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/mirrorTextModel.js */ "./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js");
/* harmony import */ var _model_wordHelper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/wordHelper.js */ "./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js");
/* harmony import */ var _modes_linkComputer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modes/linkComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js");
/* harmony import */ var _modes_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modes/supports/inplaceReplaceSupport.js */ "./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js");
/* harmony import */ var _standalone_standaloneBase_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../standalone/standaloneBase.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js");
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../base/common/types.js */ "./node_modules/monaco-editor/esm/vs/base/common/types.js");
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














/**
 * @internal
 */
var MirrorModel = /** @class */ (function (_super) {
    __extends(MirrorModel, _super);
    function MirrorModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MirrorModel.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MirrorModel.prototype, "version", {
        get: function () {
            return this._versionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MirrorModel.prototype, "eol", {
        get: function () {
            return this._eol;
        },
        enumerable: true,
        configurable: true
    });
    MirrorModel.prototype.getValue = function () {
        return this.getText();
    };
    MirrorModel.prototype.getLinesContent = function () {
        return this._lines.slice(0);
    };
    MirrorModel.prototype.getLineCount = function () {
        return this._lines.length;
    };
    MirrorModel.prototype.getLineContent = function (lineNumber) {
        return this._lines[lineNumber - 1];
    };
    MirrorModel.prototype.getWordAtPosition = function (position, wordDefinition) {
        var wordAtText = Object(_model_wordHelper_js__WEBPACK_IMPORTED_MODULE_9__["getWordAtText"])(position.column, Object(_model_wordHelper_js__WEBPACK_IMPORTED_MODULE_9__["ensureValidWordDefinition"])(wordDefinition), this._lines[position.lineNumber - 1], 0);
        if (wordAtText) {
            return new _core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"](position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
        }
        return null;
    };
    MirrorModel.prototype.getWordUntilPosition = function (position, wordDefinition) {
        var wordAtPosition = this.getWordAtPosition(position, wordDefinition);
        if (!wordAtPosition) {
            return {
                word: '',
                startColumn: position.column,
                endColumn: position.column
            };
        }
        return {
            word: this._lines[position.lineNumber - 1].substring(wordAtPosition.startColumn - 1, position.column - 1),
            startColumn: wordAtPosition.startColumn,
            endColumn: position.column
        };
    };
    MirrorModel.prototype.createWordIterator = function (wordDefinition) {
        var _this = this;
        var obj;
        var lineNumber = 0;
        var lineText;
        var wordRangesIdx = 0;
        var wordRanges = [];
        var next = function () {
            if (wordRangesIdx < wordRanges.length) {
                var value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
                wordRangesIdx += 1;
                if (!obj) {
                    obj = { done: false, value: value };
                }
                else {
                    obj.value = value;
                }
                return obj;
            }
            else if (lineNumber >= _this._lines.length) {
                return _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__["FIN"];
            }
            else {
                lineText = _this._lines[lineNumber];
                wordRanges = _this._wordenize(lineText, wordDefinition);
                wordRangesIdx = 0;
                lineNumber += 1;
                return next();
            }
        };
        return { next: next };
    };
    MirrorModel.prototype.getLineWords = function (lineNumber, wordDefinition) {
        var content = this._lines[lineNumber - 1];
        var ranges = this._wordenize(content, wordDefinition);
        var words = [];
        for (var _i = 0, ranges_1 = ranges; _i < ranges_1.length; _i++) {
            var range = ranges_1[_i];
            words.push({
                word: content.substring(range.start, range.end),
                startColumn: range.start + 1,
                endColumn: range.end + 1
            });
        }
        return words;
    };
    MirrorModel.prototype._wordenize = function (content, wordDefinition) {
        var result = [];
        var match;
        wordDefinition.lastIndex = 0; // reset lastIndex just to be sure
        while (match = wordDefinition.exec(content)) {
            if (match[0].length === 0) {
                // it did match the empty string
                break;
            }
            result.push({ start: match.index, end: match.index + match[0].length });
        }
        return result;
    };
    MirrorModel.prototype.getValueInRange = function (range) {
        range = this._validateRange(range);
        if (range.startLineNumber === range.endLineNumber) {
            return this._lines[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
        }
        var lineEnding = this._eol;
        var startLineIndex = range.startLineNumber - 1;
        var endLineIndex = range.endLineNumber - 1;
        var resultLines = [];
        resultLines.push(this._lines[startLineIndex].substring(range.startColumn - 1));
        for (var i = startLineIndex + 1; i < endLineIndex; i++) {
            resultLines.push(this._lines[i]);
        }
        resultLines.push(this._lines[endLineIndex].substring(0, range.endColumn - 1));
        return resultLines.join(lineEnding);
    };
    MirrorModel.prototype.offsetAt = function (position) {
        position = this._validatePosition(position);
        this._ensureLineStarts();
        return this._lineStarts.getAccumulatedValue(position.lineNumber - 2) + (position.column - 1);
    };
    MirrorModel.prototype.positionAt = function (offset) {
        offset = Math.floor(offset);
        offset = Math.max(0, offset);
        this._ensureLineStarts();
        var out = this._lineStarts.getIndexOf(offset);
        var lineLength = this._lines[out.index].length;
        // Ensure we return a valid position
        return {
            lineNumber: 1 + out.index,
            column: 1 + Math.min(out.remainder, lineLength)
        };
    };
    MirrorModel.prototype._validateRange = function (range) {
        var start = this._validatePosition({ lineNumber: range.startLineNumber, column: range.startColumn });
        var end = this._validatePosition({ lineNumber: range.endLineNumber, column: range.endColumn });
        if (start.lineNumber !== range.startLineNumber
            || start.column !== range.startColumn
            || end.lineNumber !== range.endLineNumber
            || end.column !== range.endColumn) {
            return {
                startLineNumber: start.lineNumber,
                startColumn: start.column,
                endLineNumber: end.lineNumber,
                endColumn: end.column
            };
        }
        return range;
    };
    MirrorModel.prototype._validatePosition = function (position) {
        if (!_core_position_js__WEBPACK_IMPORTED_MODULE_5__["Position"].isIPosition(position)) {
            throw new Error('bad position');
        }
        var lineNumber = position.lineNumber, column = position.column;
        var hasChanged = false;
        if (lineNumber < 1) {
            lineNumber = 1;
            column = 1;
            hasChanged = true;
        }
        else if (lineNumber > this._lines.length) {
            lineNumber = this._lines.length;
            column = this._lines[lineNumber - 1].length + 1;
            hasChanged = true;
        }
        else {
            var maxCharacter = this._lines[lineNumber - 1].length + 1;
            if (column < 1) {
                column = 1;
                hasChanged = true;
            }
            else if (column > maxCharacter) {
                column = maxCharacter;
                hasChanged = true;
            }
        }
        if (!hasChanged) {
            return position;
        }
        else {
            return { lineNumber: lineNumber, column: column };
        }
    };
    return MirrorModel;
}(_model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_8__["MirrorTextModel"]));
/**
 * @internal
 */
var BaseEditorSimpleWorker = /** @class */ (function () {
    function BaseEditorSimpleWorker(foreignModuleFactory) {
        this._foreignModuleFactory = foreignModuleFactory;
        this._foreignModule = null;
    }
    // ---- BEGIN diff --------------------------------------------------------------------------
    BaseEditorSimpleWorker.prototype.computeDiff = function (originalUrl, modifiedUrl, ignoreTrimWhitespace) {
        var original = this._getModel(originalUrl);
        var modified = this._getModel(modifiedUrl);
        if (!original || !modified) {
            return Promise.resolve(null);
        }
        var originalLines = original.getLinesContent();
        var modifiedLines = modified.getLinesContent();
        var diffComputer = new _diff_diffComputer_js__WEBPACK_IMPORTED_MODULE_7__["DiffComputer"](originalLines, modifiedLines, {
            shouldComputeCharChanges: true,
            shouldPostProcessCharChanges: true,
            shouldIgnoreTrimWhitespace: ignoreTrimWhitespace,
            shouldMakePrettyDiff: true
        });
        var changes = diffComputer.computeDiff();
        var identical = (changes.length > 0 ? false : this._modelsAreIdentical(original, modified));
        return Promise.resolve({
            identical: identical,
            changes: changes
        });
    };
    BaseEditorSimpleWorker.prototype._modelsAreIdentical = function (original, modified) {
        var originalLineCount = original.getLineCount();
        var modifiedLineCount = modified.getLineCount();
        if (originalLineCount !== modifiedLineCount) {
            return false;
        }
        for (var line = 1; line <= originalLineCount; line++) {
            var originalLine = original.getLineContent(line);
            var modifiedLine = modified.getLineContent(line);
            if (originalLine !== modifiedLine) {
                return false;
            }
        }
        return true;
    };
    BaseEditorSimpleWorker.prototype.computeMoreMinimalEdits = function (modelUrl, edits) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(edits);
        }
        var result = [];
        var lastEol = undefined;
        edits = Object(_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__["mergeSort"])(edits, function (a, b) {
            if (a.range && b.range) {
                return _core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"].compareRangesUsingStarts(a.range, b.range);
            }
            // eol only changes should go to the end
            var aRng = a.range ? 0 : 1;
            var bRng = b.range ? 0 : 1;
            return aRng - bRng;
        });
        for (var _i = 0, edits_1 = edits; _i < edits_1.length; _i++) {
            var _a = edits_1[_i], range = _a.range, text = _a.text, eol = _a.eol;
            if (typeof eol === 'number') {
                lastEol = eol;
            }
            if (_core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"].isEmpty(range) && !text) {
                // empty change
                continue;
            }
            var original = model.getValueInRange(range);
            text = text.replace(/\r\n|\n|\r/g, model.eol);
            if (original === text) {
                // noop
                continue;
            }
            // make sure diff won't take too long
            if (Math.max(text.length, original.length) > BaseEditorSimpleWorker._diffLimit) {
                result.push({ range: range, text: text });
                continue;
            }
            // compute diff between original and edit.text
            var changes = Object(_base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__["stringDiff"])(original, text, false);
            var editOffset = model.offsetAt(_core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"].lift(range).getStartPosition());
            for (var _b = 0, changes_1 = changes; _b < changes_1.length; _b++) {
                var change = changes_1[_b];
                var start = model.positionAt(editOffset + change.originalStart);
                var end = model.positionAt(editOffset + change.originalStart + change.originalLength);
                var newEdit = {
                    text: text.substr(change.modifiedStart, change.modifiedLength),
                    range: { startLineNumber: start.lineNumber, startColumn: start.column, endLineNumber: end.lineNumber, endColumn: end.column }
                };
                if (model.getValueInRange(newEdit.range) !== newEdit.text) {
                    result.push(newEdit);
                }
            }
        }
        if (typeof lastEol === 'number') {
            result.push({ eol: lastEol, text: '', range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } });
        }
        return Promise.resolve(result);
    };
    // ---- END minimal edits ---------------------------------------------------------------
    BaseEditorSimpleWorker.prototype.computeLinks = function (modelUrl) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(null);
        }
        return Promise.resolve(Object(_modes_linkComputer_js__WEBPACK_IMPORTED_MODULE_10__["computeLinks"])(model));
    };
    BaseEditorSimpleWorker.prototype.textualSuggest = function (modelUrl, position, wordDef, wordDefFlags) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(null);
        }
        var seen = Object.create(null);
        var suggestions = [];
        var wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        var wordUntil = model.getWordUntilPosition(position, wordDefRegExp);
        var wordAt = model.getWordAtPosition(position, wordDefRegExp);
        if (wordAt) {
            seen[model.getValueInRange(wordAt)] = true;
        }
        for (var iter = model.createWordIterator(wordDefRegExp), e = iter.next(); !e.done && suggestions.length <= BaseEditorSimpleWorker._suggestionsLimit; e = iter.next()) {
            var word = e.value;
            if (seen[word]) {
                continue;
            }
            seen[word] = true;
            if (!isNaN(Number(word))) {
                continue;
            }
            suggestions.push({
                kind: 18 /* Text */,
                label: word,
                insertText: word,
                range: { startLineNumber: position.lineNumber, startColumn: wordUntil.startColumn, endLineNumber: position.lineNumber, endColumn: wordUntil.endColumn }
            });
        }
        return Promise.resolve({ suggestions: suggestions });
    };
    // ---- END suggest --------------------------------------------------------------------------
    //#region -- word ranges --
    BaseEditorSimpleWorker.prototype.computeWordRanges = function (modelUrl, range, wordDef, wordDefFlags) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(Object.create(null));
        }
        var wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        var result = Object.create(null);
        for (var line = range.startLineNumber; line < range.endLineNumber; line++) {
            var words = model.getLineWords(line, wordDefRegExp);
            for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                var word = words_1[_i];
                if (!isNaN(Number(word.word))) {
                    continue;
                }
                var array = result[word.word];
                if (!array) {
                    array = [];
                    result[word.word] = array;
                }
                array.push({
                    startLineNumber: line,
                    startColumn: word.startColumn,
                    endLineNumber: line,
                    endColumn: word.endColumn
                });
            }
        }
        return Promise.resolve(result);
    };
    //#endregion
    BaseEditorSimpleWorker.prototype.navigateValueSet = function (modelUrl, range, up, wordDef, wordDefFlags) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(null);
        }
        var wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        if (range.startColumn === range.endColumn) {
            range = {
                startLineNumber: range.startLineNumber,
                startColumn: range.startColumn,
                endLineNumber: range.endLineNumber,
                endColumn: range.endColumn + 1
            };
        }
        var selectionText = model.getValueInRange(range);
        var wordRange = model.getWordAtPosition({ lineNumber: range.startLineNumber, column: range.startColumn }, wordDefRegExp);
        if (!wordRange) {
            return Promise.resolve(null);
        }
        var word = model.getValueInRange(wordRange);
        var result = _modes_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_11__["BasicInplaceReplace"].INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
        return Promise.resolve(result);
    };
    // ---- BEGIN foreign module support --------------------------------------------------------------------------
    BaseEditorSimpleWorker.prototype.loadForeignModule = function (moduleId, createData) {
        var _this = this;
        var ctx = {
            getMirrorModels: function () {
                return _this._getModels();
            }
        };
        if (this._foreignModuleFactory) {
            this._foreignModule = this._foreignModuleFactory(ctx, createData);
            // static foreing module
            var methods = [];
            for (var _i = 0, _a = Object(_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__["getAllPropertyNames"])(this._foreignModule); _i < _a.length; _i++) {
                var prop = _a[_i];
                if (typeof this._foreignModule[prop] === 'function') {
                    methods.push(prop);
                }
            }
            return Promise.resolve(methods);
        }
        // ESM-comment-begin
        // 		return new Promise<any>((resolve, reject) => {
        // 			require([moduleId], (foreignModule: { create: IForeignModuleFactory }) => {
        // 				this._foreignModule = foreignModule.create(ctx, createData);
        // 
        // 				let methods: string[] = [];
        // 				for (const prop of getAllPropertyNames(this._foreignModule)) {
        // 					if (typeof this._foreignModule[prop] === 'function') {
        // 						methods.push(prop);
        // 					}
        // 				}
        // 
        // 				resolve(methods);
        // 
        // 			}, reject);
        // 		});
        // ESM-comment-end
        // ESM-uncomment-begin
        return Promise.reject(new Error("Unexpected usage"));
        // ESM-uncomment-end
    };
    // foreign method request
    BaseEditorSimpleWorker.prototype.fmr = function (method, args) {
        if (!this._foreignModule || typeof this._foreignModule[method] !== 'function') {
            return Promise.reject(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return Promise.resolve(this._foreignModule[method].apply(this._foreignModule, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    // ---- END diff --------------------------------------------------------------------------
    // ---- BEGIN minimal edits ---------------------------------------------------------------
    BaseEditorSimpleWorker._diffLimit = 100000;
    // ---- BEGIN suggest --------------------------------------------------------------------------
    BaseEditorSimpleWorker._suggestionsLimit = 10000;
    return BaseEditorSimpleWorker;
}());

/**
 * @internal
 */
var EditorSimpleWorkerImpl = /** @class */ (function (_super) {
    __extends(EditorSimpleWorkerImpl, _super);
    function EditorSimpleWorkerImpl(foreignModuleFactory) {
        var _this = _super.call(this, foreignModuleFactory) || this;
        _this._models = Object.create(null);
        return _this;
    }
    EditorSimpleWorkerImpl.prototype.dispose = function () {
        this._models = Object.create(null);
    };
    EditorSimpleWorkerImpl.prototype._getModel = function (uri) {
        return this._models[uri];
    };
    EditorSimpleWorkerImpl.prototype._getModels = function () {
        var _this = this;
        var all = [];
        Object.keys(this._models).forEach(function (key) { return all.push(_this._models[key]); });
        return all;
    };
    EditorSimpleWorkerImpl.prototype.acceptNewModel = function (data) {
        this._models[data.url] = new MirrorModel(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__["URI"].parse(data.url), data.lines, data.EOL, data.versionId);
    };
    EditorSimpleWorkerImpl.prototype.acceptModelChanged = function (strURL, e) {
        if (!this._models[strURL]) {
            return;
        }
        var model = this._models[strURL];
        model.onEvents(e);
    };
    EditorSimpleWorkerImpl.prototype.acceptRemovedModel = function (strURL) {
        if (!this._models[strURL]) {
            return;
        }
        delete this._models[strURL];
    };
    return EditorSimpleWorkerImpl;
}(BaseEditorSimpleWorker));

/**
 * Called on the worker side
 * @internal
 */
function create() {
    return new EditorSimpleWorkerImpl(null);
}
if (typeof importScripts === 'function') {
    // Running in a web worker
    _base_common_platform_js__WEBPACK_IMPORTED_MODULE_3__["globals"].monaco = Object(_standalone_standaloneBase_js__WEBPACK_IMPORTED_MODULE_12__["createMonacoBaseAPI"])();
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {/*!
Copyright (c) 2014 Taylor Hakes
Copyright (c) 2014 Forbes Lindesay
 */
(function (global, factory) {
	 true ? factory() :
		undefined;
}(this, (function () {
	'use strict';

	/**
	 * @this {Promise}
	 */
	function finallyConstructor(callback) {
		var constructor = this.constructor;
		return this.then(
			function (value) {
				return constructor.resolve(callback()).then(function () {
					return value;
				});
			},
			function (reason) {
				return constructor.resolve(callback()).then(function () {
					return constructor.reject(reason);
				});
			}
		);
	}

	// Store setTimeout reference so promise-polyfill will be unaffected by
	// other code modifying setTimeout (like sinon.useFakeTimers())
	var setTimeoutFunc = setTimeout;

	function noop() { }

	// Polyfill for Function.prototype.bind
	function bind(fn, thisArg) {
		return function () {
			fn.apply(thisArg, arguments);
		};
	}

	/**
	 * @constructor
	 * @param {Function} fn
	 */
	function Promise(fn) {
		if (!(this instanceof Promise))
			throw new TypeError('Promises must be constructed via new');
		if (typeof fn !== 'function') throw new TypeError('not a function');
		/** @type {!number} */
		this._state = 0;
		/** @type {!boolean} */
		this._handled = false;
		/** @type {Promise|undefined} */
		this._value = undefined;
		/** @type {!Array<!Function>} */
		this._deferreds = [];

		doResolve(fn, this);
	}

	function handle(self, deferred) {
		while (self._state === 3) {
			self = self._value;
		}
		if (self._state === 0) {
			self._deferreds.push(deferred);
			return;
		}
		self._handled = true;
		Promise._immediateFn(function () {
			var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
			if (cb === null) {
				(self._state === 1 ? resolve : reject)(deferred.promise, self._value);
				return;
			}
			var ret;
			try {
				ret = cb(self._value);
			} catch (e) {
				reject(deferred.promise, e);
				return;
			}
			resolve(deferred.promise, ret);
		});
	}

	function resolve(self, newValue) {
		try {
			// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
			if (newValue === self)
				throw new TypeError('A promise cannot be resolved with itself.');
			if (
				newValue &&
				(typeof newValue === 'object' || typeof newValue === 'function')
			) {
				var then = newValue.then;
				if (newValue instanceof Promise) {
					self._state = 3;
					self._value = newValue;
					finale(self);
					return;
				} else if (typeof then === 'function') {
					doResolve(bind(then, newValue), self);
					return;
				}
			}
			self._state = 1;
			self._value = newValue;
			finale(self);
		} catch (e) {
			reject(self, e);
		}
	}

	function reject(self, newValue) {
		self._state = 2;
		self._value = newValue;
		finale(self);
	}

	function finale(self) {
		if (self._state === 2 && self._deferreds.length === 0) {
			Promise._immediateFn(function () {
				if (!self._handled) {
					Promise._unhandledRejectionFn(self._value);
				}
			});
		}

		for (var i = 0, len = self._deferreds.length; i < len; i++) {
			handle(self, self._deferreds[i]);
		}
		self._deferreds = null;
	}

	/**
	 * @constructor
	 */
	function Handler(onFulfilled, onRejected, promise) {
		this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
		this.onRejected = typeof onRejected === 'function' ? onRejected : null;
		this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, self) {
		var done = false;
		try {
			fn(
				function (value) {
					if (done) return;
					done = true;
					resolve(self, value);
				},
				function (reason) {
					if (done) return;
					done = true;
					reject(self, reason);
				}
			);
		} catch (ex) {
			if (done) return;
			done = true;
			reject(self, ex);
		}
	}

	Promise.prototype['catch'] = function (onRejected) {
		return this.then(null, onRejected);
	};

	Promise.prototype.then = function (onFulfilled, onRejected) {
		// @ts-ignore
		var prom = new this.constructor(noop);

		handle(this, new Handler(onFulfilled, onRejected, prom));
		return prom;
	};

	Promise.prototype['finally'] = finallyConstructor;

	Promise.all = function (arr) {
		return new Promise(function (resolve, reject) {
			if (!arr || typeof arr.length === 'undefined')
				throw new TypeError('Promise.all accepts an array');
			var args = Array.prototype.slice.call(arr);
			if (args.length === 0) return resolve([]);
			var remaining = args.length;

			function res(i, val) {
				try {
					if (val && (typeof val === 'object' || typeof val === 'function')) {
						var then = val.then;
						if (typeof then === 'function') {
							then.call(
								val,
								function (val) {
									res(i, val);
								},
								reject
							);
							return;
						}
					}
					args[i] = val;
					if (--remaining === 0) {
						resolve(args);
					}
				} catch (ex) {
					reject(ex);
				}
			}

			for (var i = 0; i < args.length; i++) {
				res(i, args[i]);
			}
		});
	};

	Promise.resolve = function (value) {
		if (value && typeof value === 'object' && value.constructor === Promise) {
			return value;
		}

		return new Promise(function (resolve) {
			resolve(value);
		});
	};

	Promise.reject = function (value) {
		return new Promise(function (resolve, reject) {
			reject(value);
		});
	};

	Promise.race = function (values) {
		return new Promise(function (resolve, reject) {
			for (var i = 0, len = values.length; i < len; i++) {
				values[i].then(resolve, reject);
			}
		});
	};

	// Use polyfill for setImmediate for performance gains
	Promise._immediateFn =
		(typeof setImmediate === 'function' &&
			function (fn) {
				setImmediate(fn);
			}) ||
		function (fn) {
			setTimeoutFunc(fn, 0);
		};

	Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
		if (typeof console !== 'undefined' && console) {
			console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
		}
	};

	/** @suppress {undefinedVars} */
	var globalNS = (function () {
		// the only reliable means to get the global object is
		// `Function('return this')()`
		// However, this causes CSP violations in Chrome apps.
		if (typeof self !== 'undefined') {
			return self;
		}
		if (typeof window !== 'undefined') {
			return window;
		}
		if (typeof global !== 'undefined') {
			return global;
		}
		throw new Error('unable to locate global object');
	})();

	if (!('Promise' in globalNS)) {
		globalNS['Promise'] = Promise;
	} else if (!globalNS.Promise.prototype['finally']) {
		globalNS.Promise.prototype['finally'] = finallyConstructor;
	}

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js ***!
  \**************************************************************************************/
/*! exports provided: KeyMod, createMonacoBaseAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyMod", function() { return KeyMod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMonacoBaseAPI", function() { return createMonacoBaseAPI; });
/* harmony import */ var _promise_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise-polyfill/polyfill.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js");
/* harmony import */ var _promise_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_promise_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/common/cancellation.js */ "./node_modules/monaco-editor/esm/vs/base/common/cancellation.js");
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/common/event.js */ "./node_modules/monaco-editor/esm/vs/base/common/event.js");
/* harmony import */ var _base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/common/keyCodes.js */ "./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js");
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/common/uri.js */ "./node_modules/monaco-editor/esm/vs/base/common/uri.js");
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js");
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/selection.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js");
/* harmony import */ var _core_token_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/token.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/token.js");
/* harmony import */ var _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./standaloneEnums.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










var KeyMod = /** @class */ (function () {
    function KeyMod() {
    }
    KeyMod.chord = function (firstPart, secondPart) {
        return Object(_base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_3__["KeyChord"])(firstPart, secondPart);
    };
    KeyMod.CtrlCmd = 2048 /* CtrlCmd */;
    KeyMod.Shift = 1024 /* Shift */;
    KeyMod.Alt = 512 /* Alt */;
    KeyMod.WinCtrl = 256 /* WinCtrl */;
    return KeyMod;
}());

function createMonacoBaseAPI() {
    return {
        editor: undefined,
        languages: undefined,
        CancellationTokenSource: _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__["CancellationTokenSource"],
        Emitter: _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__["Emitter"],
        KeyCode: _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["KeyCode"],
        KeyMod: KeyMod,
        Position: _core_position_js__WEBPACK_IMPORTED_MODULE_5__["Position"],
        Range: _core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"],
        Selection: _core_selection_js__WEBPACK_IMPORTED_MODULE_7__["Selection"],
        SelectionDirection: _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["SelectionDirection"],
        MarkerSeverity: _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["MarkerSeverity"],
        MarkerTag: _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["MarkerTag"],
        Uri: _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__["URI"],
        Token: _core_token_js__WEBPACK_IMPORTED_MODULE_8__["Token"]
    };
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js ***!
  \***************************************************************************************/
/*! exports provided: MarkerTag, MarkerSeverity, KeyCode, SelectionDirection, ScrollbarVisibility, OverviewRulerLane, EndOfLinePreference, DefaultEndOfLine, EndOfLineSequence, TrackedRangeStickiness, ScrollType, CursorChangeReason, RenderMinimap, WrappingIndent, TextEditorCursorBlinkingStyle, TextEditorCursorStyle, RenderLineNumbersType, ContentWidgetPositionPreference, OverlayWidgetPositionPreference, MouseTargetType, IndentAction, CompletionItemKind, CompletionItemInsertTextRule, CompletionTriggerKind, SignatureHelpTriggerKind, DocumentHighlightKind, SymbolKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerTag", function() { return MarkerTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerSeverity", function() { return MarkerSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCode", function() { return KeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return SelectionDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarVisibility", function() { return ScrollbarVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewRulerLane", function() { return OverviewRulerLane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndOfLinePreference", function() { return EndOfLinePreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEndOfLine", function() { return DefaultEndOfLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndOfLineSequence", function() { return EndOfLineSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackedRangeStickiness", function() { return TrackedRangeStickiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollType", function() { return ScrollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursorChangeReason", function() { return CursorChangeReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMinimap", function() { return RenderMinimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrappingIndent", function() { return WrappingIndent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditorCursorBlinkingStyle", function() { return TextEditorCursorBlinkingStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditorCursorStyle", function() { return TextEditorCursorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderLineNumbersType", function() { return RenderLineNumbersType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWidgetPositionPreference", function() { return ContentWidgetPositionPreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayWidgetPositionPreference", function() { return OverlayWidgetPositionPreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseTargetType", function() { return MouseTargetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndentAction", function() { return IndentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemKind", function() { return CompletionItemKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemInsertTextRule", function() { return CompletionItemInsertTextRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionTriggerKind", function() { return CompletionTriggerKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpTriggerKind", function() { return SignatureHelpTriggerKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightKind", function() { return DocumentHighlightKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolKind", function() { return SymbolKind; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// THIS IS A GENERATED FILE. DO NOT EDIT DIRECTLY.
var MarkerTag;
(function (MarkerTag) {
    MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
})(MarkerTag || (MarkerTag = {}));
var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));
/**
 * Virtual Key Codes, the value does not hold any inherent meaning.
 * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
 * But these are "more general", as they should work across browsers & OS`s.
 */
var KeyCode;
(function (KeyCode) {
    /**
     * Placed first to cover the 0 value of the enum.
     */
    KeyCode[KeyCode["Unknown"] = 0] = "Unknown";
    KeyCode[KeyCode["Backspace"] = 1] = "Backspace";
    KeyCode[KeyCode["Tab"] = 2] = "Tab";
    KeyCode[KeyCode["Enter"] = 3] = "Enter";
    KeyCode[KeyCode["Shift"] = 4] = "Shift";
    KeyCode[KeyCode["Ctrl"] = 5] = "Ctrl";
    KeyCode[KeyCode["Alt"] = 6] = "Alt";
    KeyCode[KeyCode["PauseBreak"] = 7] = "PauseBreak";
    KeyCode[KeyCode["CapsLock"] = 8] = "CapsLock";
    KeyCode[KeyCode["Escape"] = 9] = "Escape";
    KeyCode[KeyCode["Space"] = 10] = "Space";
    KeyCode[KeyCode["PageUp"] = 11] = "PageUp";
    KeyCode[KeyCode["PageDown"] = 12] = "PageDown";
    KeyCode[KeyCode["End"] = 13] = "End";
    KeyCode[KeyCode["Home"] = 14] = "Home";
    KeyCode[KeyCode["LeftArrow"] = 15] = "LeftArrow";
    KeyCode[KeyCode["UpArrow"] = 16] = "UpArrow";
    KeyCode[KeyCode["RightArrow"] = 17] = "RightArrow";
    KeyCode[KeyCode["DownArrow"] = 18] = "DownArrow";
    KeyCode[KeyCode["Insert"] = 19] = "Insert";
    KeyCode[KeyCode["Delete"] = 20] = "Delete";
    KeyCode[KeyCode["KEY_0"] = 21] = "KEY_0";
    KeyCode[KeyCode["KEY_1"] = 22] = "KEY_1";
    KeyCode[KeyCode["KEY_2"] = 23] = "KEY_2";
    KeyCode[KeyCode["KEY_3"] = 24] = "KEY_3";
    KeyCode[KeyCode["KEY_4"] = 25] = "KEY_4";
    KeyCode[KeyCode["KEY_5"] = 26] = "KEY_5";
    KeyCode[KeyCode["KEY_6"] = 27] = "KEY_6";
    KeyCode[KeyCode["KEY_7"] = 28] = "KEY_7";
    KeyCode[KeyCode["KEY_8"] = 29] = "KEY_8";
    KeyCode[KeyCode["KEY_9"] = 30] = "KEY_9";
    KeyCode[KeyCode["KEY_A"] = 31] = "KEY_A";
    KeyCode[KeyCode["KEY_B"] = 32] = "KEY_B";
    KeyCode[KeyCode["KEY_C"] = 33] = "KEY_C";
    KeyCode[KeyCode["KEY_D"] = 34] = "KEY_D";
    KeyCode[KeyCode["KEY_E"] = 35] = "KEY_E";
    KeyCode[KeyCode["KEY_F"] = 36] = "KEY_F";
    KeyCode[KeyCode["KEY_G"] = 37] = "KEY_G";
    KeyCode[KeyCode["KEY_H"] = 38] = "KEY_H";
    KeyCode[KeyCode["KEY_I"] = 39] = "KEY_I";
    KeyCode[KeyCode["KEY_J"] = 40] = "KEY_J";
    KeyCode[KeyCode["KEY_K"] = 41] = "KEY_K";
    KeyCode[KeyCode["KEY_L"] = 42] = "KEY_L";
    KeyCode[KeyCode["KEY_M"] = 43] = "KEY_M";
    KeyCode[KeyCode["KEY_N"] = 44] = "KEY_N";
    KeyCode[KeyCode["KEY_O"] = 45] = "KEY_O";
    KeyCode[KeyCode["KEY_P"] = 46] = "KEY_P";
    KeyCode[KeyCode["KEY_Q"] = 47] = "KEY_Q";
    KeyCode[KeyCode["KEY_R"] = 48] = "KEY_R";
    KeyCode[KeyCode["KEY_S"] = 49] = "KEY_S";
    KeyCode[KeyCode["KEY_T"] = 50] = "KEY_T";
    KeyCode[KeyCode["KEY_U"] = 51] = "KEY_U";
    KeyCode[KeyCode["KEY_V"] = 52] = "KEY_V";
    KeyCode[KeyCode["KEY_W"] = 53] = "KEY_W";
    KeyCode[KeyCode["KEY_X"] = 54] = "KEY_X";
    KeyCode[KeyCode["KEY_Y"] = 55] = "KEY_Y";
    KeyCode[KeyCode["KEY_Z"] = 56] = "KEY_Z";
    KeyCode[KeyCode["Meta"] = 57] = "Meta";
    KeyCode[KeyCode["ContextMenu"] = 58] = "ContextMenu";
    KeyCode[KeyCode["F1"] = 59] = "F1";
    KeyCode[KeyCode["F2"] = 60] = "F2";
    KeyCode[KeyCode["F3"] = 61] = "F3";
    KeyCode[KeyCode["F4"] = 62] = "F4";
    KeyCode[KeyCode["F5"] = 63] = "F5";
    KeyCode[KeyCode["F6"] = 64] = "F6";
    KeyCode[KeyCode["F7"] = 65] = "F7";
    KeyCode[KeyCode["F8"] = 66] = "F8";
    KeyCode[KeyCode["F9"] = 67] = "F9";
    KeyCode[KeyCode["F10"] = 68] = "F10";
    KeyCode[KeyCode["F11"] = 69] = "F11";
    KeyCode[KeyCode["F12"] = 70] = "F12";
    KeyCode[KeyCode["F13"] = 71] = "F13";
    KeyCode[KeyCode["F14"] = 72] = "F14";
    KeyCode[KeyCode["F15"] = 73] = "F15";
    KeyCode[KeyCode["F16"] = 74] = "F16";
    KeyCode[KeyCode["F17"] = 75] = "F17";
    KeyCode[KeyCode["F18"] = 76] = "F18";
    KeyCode[KeyCode["F19"] = 77] = "F19";
    KeyCode[KeyCode["NumLock"] = 78] = "NumLock";
    KeyCode[KeyCode["ScrollLock"] = 79] = "ScrollLock";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ';:' key
     */
    KeyCode[KeyCode["US_SEMICOLON"] = 80] = "US_SEMICOLON";
    /**
     * For any country/region, the '+' key
     * For the US standard keyboard, the '=+' key
     */
    KeyCode[KeyCode["US_EQUAL"] = 81] = "US_EQUAL";
    /**
     * For any country/region, the ',' key
     * For the US standard keyboard, the ',<' key
     */
    KeyCode[KeyCode["US_COMMA"] = 82] = "US_COMMA";
    /**
     * For any country/region, the '-' key
     * For the US standard keyboard, the '-_' key
     */
    KeyCode[KeyCode["US_MINUS"] = 83] = "US_MINUS";
    /**
     * For any country/region, the '.' key
     * For the US standard keyboard, the '.>' key
     */
    KeyCode[KeyCode["US_DOT"] = 84] = "US_DOT";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '/?' key
     */
    KeyCode[KeyCode["US_SLASH"] = 85] = "US_SLASH";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '`~' key
     */
    KeyCode[KeyCode["US_BACKTICK"] = 86] = "US_BACKTICK";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '[{' key
     */
    KeyCode[KeyCode["US_OPEN_SQUARE_BRACKET"] = 87] = "US_OPEN_SQUARE_BRACKET";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '\|' key
     */
    KeyCode[KeyCode["US_BACKSLASH"] = 88] = "US_BACKSLASH";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ']}' key
     */
    KeyCode[KeyCode["US_CLOSE_SQUARE_BRACKET"] = 89] = "US_CLOSE_SQUARE_BRACKET";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ''"' key
     */
    KeyCode[KeyCode["US_QUOTE"] = 90] = "US_QUOTE";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     */
    KeyCode[KeyCode["OEM_8"] = 91] = "OEM_8";
    /**
     * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
     */
    KeyCode[KeyCode["OEM_102"] = 92] = "OEM_102";
    KeyCode[KeyCode["NUMPAD_0"] = 93] = "NUMPAD_0";
    KeyCode[KeyCode["NUMPAD_1"] = 94] = "NUMPAD_1";
    KeyCode[KeyCode["NUMPAD_2"] = 95] = "NUMPAD_2";
    KeyCode[KeyCode["NUMPAD_3"] = 96] = "NUMPAD_3";
    KeyCode[KeyCode["NUMPAD_4"] = 97] = "NUMPAD_4";
    KeyCode[KeyCode["NUMPAD_5"] = 98] = "NUMPAD_5";
    KeyCode[KeyCode["NUMPAD_6"] = 99] = "NUMPAD_6";
    KeyCode[KeyCode["NUMPAD_7"] = 100] = "NUMPAD_7";
    KeyCode[KeyCode["NUMPAD_8"] = 101] = "NUMPAD_8";
    KeyCode[KeyCode["NUMPAD_9"] = 102] = "NUMPAD_9";
    KeyCode[KeyCode["NUMPAD_MULTIPLY"] = 103] = "NUMPAD_MULTIPLY";
    KeyCode[KeyCode["NUMPAD_ADD"] = 104] = "NUMPAD_ADD";
    KeyCode[KeyCode["NUMPAD_SEPARATOR"] = 105] = "NUMPAD_SEPARATOR";
    KeyCode[KeyCode["NUMPAD_SUBTRACT"] = 106] = "NUMPAD_SUBTRACT";
    KeyCode[KeyCode["NUMPAD_DECIMAL"] = 107] = "NUMPAD_DECIMAL";
    KeyCode[KeyCode["NUMPAD_DIVIDE"] = 108] = "NUMPAD_DIVIDE";
    /**
     * Cover all key codes when IME is processing input.
     */
    KeyCode[KeyCode["KEY_IN_COMPOSITION"] = 109] = "KEY_IN_COMPOSITION";
    KeyCode[KeyCode["ABNT_C1"] = 110] = "ABNT_C1";
    KeyCode[KeyCode["ABNT_C2"] = 111] = "ABNT_C2";
    /**
     * Placed last to cover the length of the enum.
     * Please do not depend on this value!
     */
    KeyCode[KeyCode["MAX_VALUE"] = 112] = "MAX_VALUE";
})(KeyCode || (KeyCode = {}));
/**
 * The direction of a selection.
 */
var SelectionDirection;
(function (SelectionDirection) {
    /**
     * The selection starts above where it ends.
     */
    SelectionDirection[SelectionDirection["LTR"] = 0] = "LTR";
    /**
     * The selection starts below where it ends.
     */
    SelectionDirection[SelectionDirection["RTL"] = 1] = "RTL";
})(SelectionDirection || (SelectionDirection = {}));
var ScrollbarVisibility;
(function (ScrollbarVisibility) {
    ScrollbarVisibility[ScrollbarVisibility["Auto"] = 1] = "Auto";
    ScrollbarVisibility[ScrollbarVisibility["Hidden"] = 2] = "Hidden";
    ScrollbarVisibility[ScrollbarVisibility["Visible"] = 3] = "Visible";
})(ScrollbarVisibility || (ScrollbarVisibility = {}));
/**
 * Vertical Lane in the overview ruler of the editor.
 */
var OverviewRulerLane;
(function (OverviewRulerLane) {
    OverviewRulerLane[OverviewRulerLane["Left"] = 1] = "Left";
    OverviewRulerLane[OverviewRulerLane["Center"] = 2] = "Center";
    OverviewRulerLane[OverviewRulerLane["Right"] = 4] = "Right";
    OverviewRulerLane[OverviewRulerLane["Full"] = 7] = "Full";
})(OverviewRulerLane || (OverviewRulerLane = {}));
/**
 * End of line character preference.
 */
var EndOfLinePreference;
(function (EndOfLinePreference) {
    /**
     * Use the end of line character identified in the text buffer.
     */
    EndOfLinePreference[EndOfLinePreference["TextDefined"] = 0] = "TextDefined";
    /**
     * Use line feed (\n) as the end of line character.
     */
    EndOfLinePreference[EndOfLinePreference["LF"] = 1] = "LF";
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     */
    EndOfLinePreference[EndOfLinePreference["CRLF"] = 2] = "CRLF";
})(EndOfLinePreference || (EndOfLinePreference = {}));
/**
 * The default end of line to use when instantiating models.
 */
var DefaultEndOfLine;
(function (DefaultEndOfLine) {
    /**
     * Use line feed (\n) as the end of line character.
     */
    DefaultEndOfLine[DefaultEndOfLine["LF"] = 1] = "LF";
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     */
    DefaultEndOfLine[DefaultEndOfLine["CRLF"] = 2] = "CRLF";
})(DefaultEndOfLine || (DefaultEndOfLine = {}));
/**
 * End of line character preference.
 */
var EndOfLineSequence;
(function (EndOfLineSequence) {
    /**
     * Use line feed (\n) as the end of line character.
     */
    EndOfLineSequence[EndOfLineSequence["LF"] = 0] = "LF";
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     */
    EndOfLineSequence[EndOfLineSequence["CRLF"] = 1] = "CRLF";
})(EndOfLineSequence || (EndOfLineSequence = {}));
/**
 * Describes the behavior of decorations when typing/editing near their edges.
 * Note: Please do not edit the values, as they very carefully match `DecorationRangeBehavior`
 */
var TrackedRangeStickiness;
(function (TrackedRangeStickiness) {
    TrackedRangeStickiness[TrackedRangeStickiness["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness || (TrackedRangeStickiness = {}));
var ScrollType;
(function (ScrollType) {
    ScrollType[ScrollType["Smooth"] = 0] = "Smooth";
    ScrollType[ScrollType["Immediate"] = 1] = "Immediate";
})(ScrollType || (ScrollType = {}));
/**
 * Describes the reason the cursor has changed its position.
 */
var CursorChangeReason;
(function (CursorChangeReason) {
    /**
     * Unknown or not set.
     */
    CursorChangeReason[CursorChangeReason["NotSet"] = 0] = "NotSet";
    /**
     * A `model.setValue()` was called.
     */
    CursorChangeReason[CursorChangeReason["ContentFlush"] = 1] = "ContentFlush";
    /**
     * The `model` has been changed outside of this cursor and the cursor recovers its position from associated markers.
     */
    CursorChangeReason[CursorChangeReason["RecoverFromMarkers"] = 2] = "RecoverFromMarkers";
    /**
     * There was an explicit user gesture.
     */
    CursorChangeReason[CursorChangeReason["Explicit"] = 3] = "Explicit";
    /**
     * There was a Paste.
     */
    CursorChangeReason[CursorChangeReason["Paste"] = 4] = "Paste";
    /**
     * There was an Undo.
     */
    CursorChangeReason[CursorChangeReason["Undo"] = 5] = "Undo";
    /**
     * There was a Redo.
     */
    CursorChangeReason[CursorChangeReason["Redo"] = 6] = "Redo";
})(CursorChangeReason || (CursorChangeReason = {}));
var RenderMinimap;
(function (RenderMinimap) {
    RenderMinimap[RenderMinimap["None"] = 0] = "None";
    RenderMinimap[RenderMinimap["Small"] = 1] = "Small";
    RenderMinimap[RenderMinimap["Large"] = 2] = "Large";
    RenderMinimap[RenderMinimap["SmallBlocks"] = 3] = "SmallBlocks";
    RenderMinimap[RenderMinimap["LargeBlocks"] = 4] = "LargeBlocks";
})(RenderMinimap || (RenderMinimap = {}));
/**
 * Describes how to indent wrapped lines.
 */
var WrappingIndent;
(function (WrappingIndent) {
    /**
     * No indentation => wrapped lines begin at column 1.
     */
    WrappingIndent[WrappingIndent["None"] = 0] = "None";
    /**
     * Same => wrapped lines get the same indentation as the parent.
     */
    WrappingIndent[WrappingIndent["Same"] = 1] = "Same";
    /**
     * Indent => wrapped lines get +1 indentation toward the parent.
     */
    WrappingIndent[WrappingIndent["Indent"] = 2] = "Indent";
    /**
     * DeepIndent => wrapped lines get +2 indentation toward the parent.
     */
    WrappingIndent[WrappingIndent["DeepIndent"] = 3] = "DeepIndent";
})(WrappingIndent || (WrappingIndent = {}));
/**
 * The kind of animation in which the editor's cursor should be rendered.
 */
var TextEditorCursorBlinkingStyle;
(function (TextEditorCursorBlinkingStyle) {
    /**
     * Hidden
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Hidden"] = 0] = "Hidden";
    /**
     * Blinking
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Blink"] = 1] = "Blink";
    /**
     * Blinking with smooth fading
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Smooth"] = 2] = "Smooth";
    /**
     * Blinking with prolonged filled state and smooth fading
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Phase"] = 3] = "Phase";
    /**
     * Expand collapse animation on the y axis
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Expand"] = 4] = "Expand";
    /**
     * No-Blinking
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Solid"] = 5] = "Solid";
})(TextEditorCursorBlinkingStyle || (TextEditorCursorBlinkingStyle = {}));
/**
 * The style in which the editor's cursor should be rendered.
 */
var TextEditorCursorStyle;
(function (TextEditorCursorStyle) {
    /**
     * As a vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Line"] = 1] = "Line";
    /**
     * As a block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Block"] = 2] = "Block";
    /**
     * As a horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Underline"] = 3] = "Underline";
    /**
     * As a thin vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["LineThin"] = 4] = "LineThin";
    /**
     * As an outlined block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["BlockOutline"] = 5] = "BlockOutline";
    /**
     * As a thin horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
var RenderLineNumbersType;
(function (RenderLineNumbersType) {
    RenderLineNumbersType[RenderLineNumbersType["Off"] = 0] = "Off";
    RenderLineNumbersType[RenderLineNumbersType["On"] = 1] = "On";
    RenderLineNumbersType[RenderLineNumbersType["Relative"] = 2] = "Relative";
    RenderLineNumbersType[RenderLineNumbersType["Interval"] = 3] = "Interval";
    RenderLineNumbersType[RenderLineNumbersType["Custom"] = 4] = "Custom";
})(RenderLineNumbersType || (RenderLineNumbersType = {}));
/**
 * A positioning preference for rendering content widgets.
 */
var ContentWidgetPositionPreference;
(function (ContentWidgetPositionPreference) {
    /**
     * Place the content widget exactly at a position
     */
    ContentWidgetPositionPreference[ContentWidgetPositionPreference["EXACT"] = 0] = "EXACT";
    /**
     * Place the content widget above a position
     */
    ContentWidgetPositionPreference[ContentWidgetPositionPreference["ABOVE"] = 1] = "ABOVE";
    /**
     * Place the content widget below a position
     */
    ContentWidgetPositionPreference[ContentWidgetPositionPreference["BELOW"] = 2] = "BELOW";
})(ContentWidgetPositionPreference || (ContentWidgetPositionPreference = {}));
/**
 * A positioning preference for rendering overlay widgets.
 */
var OverlayWidgetPositionPreference;
(function (OverlayWidgetPositionPreference) {
    /**
     * Position the overlay widget in the top right corner
     */
    OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_RIGHT_CORNER"] = 0] = "TOP_RIGHT_CORNER";
    /**
     * Position the overlay widget in the bottom right corner
     */
    OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["BOTTOM_RIGHT_CORNER"] = 1] = "BOTTOM_RIGHT_CORNER";
    /**
     * Position the overlay widget in the top center
     */
    OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_CENTER"] = 2] = "TOP_CENTER";
})(OverlayWidgetPositionPreference || (OverlayWidgetPositionPreference = {}));
/**
 * Type of hit element with the mouse in the editor.
 */
var MouseTargetType;
(function (MouseTargetType) {
    /**
     * Mouse is on top of an unknown element.
     */
    MouseTargetType[MouseTargetType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Mouse is on top of the textarea used for input.
     */
    MouseTargetType[MouseTargetType["TEXTAREA"] = 1] = "TEXTAREA";
    /**
     * Mouse is on top of the glyph margin
     */
    MouseTargetType[MouseTargetType["GUTTER_GLYPH_MARGIN"] = 2] = "GUTTER_GLYPH_MARGIN";
    /**
     * Mouse is on top of the line numbers
     */
    MouseTargetType[MouseTargetType["GUTTER_LINE_NUMBERS"] = 3] = "GUTTER_LINE_NUMBERS";
    /**
     * Mouse is on top of the line decorations
     */
    MouseTargetType[MouseTargetType["GUTTER_LINE_DECORATIONS"] = 4] = "GUTTER_LINE_DECORATIONS";
    /**
     * Mouse is on top of the whitespace left in the gutter by a view zone.
     */
    MouseTargetType[MouseTargetType["GUTTER_VIEW_ZONE"] = 5] = "GUTTER_VIEW_ZONE";
    /**
     * Mouse is on top of text in the content.
     */
    MouseTargetType[MouseTargetType["CONTENT_TEXT"] = 6] = "CONTENT_TEXT";
    /**
     * Mouse is on top of empty space in the content (e.g. after line text or below last line)
     */
    MouseTargetType[MouseTargetType["CONTENT_EMPTY"] = 7] = "CONTENT_EMPTY";
    /**
     * Mouse is on top of a view zone in the content.
     */
    MouseTargetType[MouseTargetType["CONTENT_VIEW_ZONE"] = 8] = "CONTENT_VIEW_ZONE";
    /**
     * Mouse is on top of a content widget.
     */
    MouseTargetType[MouseTargetType["CONTENT_WIDGET"] = 9] = "CONTENT_WIDGET";
    /**
     * Mouse is on top of the decorations overview ruler.
     */
    MouseTargetType[MouseTargetType["OVERVIEW_RULER"] = 10] = "OVERVIEW_RULER";
    /**
     * Mouse is on top of a scrollbar.
     */
    MouseTargetType[MouseTargetType["SCROLLBAR"] = 11] = "SCROLLBAR";
    /**
     * Mouse is on top of an overlay widget.
     */
    MouseTargetType[MouseTargetType["OVERLAY_WIDGET"] = 12] = "OVERLAY_WIDGET";
    /**
     * Mouse is outside of the editor.
     */
    MouseTargetType[MouseTargetType["OUTSIDE_EDITOR"] = 13] = "OUTSIDE_EDITOR";
})(MouseTargetType || (MouseTargetType = {}));
/**
 * Describes what to do with the indentation when pressing Enter.
 */
var IndentAction;
(function (IndentAction) {
    /**
     * Insert new line and copy the previous line's indentation.
     */
    IndentAction[IndentAction["None"] = 0] = "None";
    /**
     * Insert new line and indent once (relative to the previous line's indentation).
     */
    IndentAction[IndentAction["Indent"] = 1] = "Indent";
    /**
     * Insert two new lines:
     *  - the first one indented which will hold the cursor
     *  - the second one at the same indentation level
     */
    IndentAction[IndentAction["IndentOutdent"] = 2] = "IndentOutdent";
    /**
     * Insert new line and outdent once (relative to the previous line's indentation).
     */
    IndentAction[IndentAction["Outdent"] = 3] = "Outdent";
})(IndentAction || (IndentAction = {}));
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind[CompletionItemKind["Method"] = 0] = "Method";
    CompletionItemKind[CompletionItemKind["Function"] = 1] = "Function";
    CompletionItemKind[CompletionItemKind["Constructor"] = 2] = "Constructor";
    CompletionItemKind[CompletionItemKind["Field"] = 3] = "Field";
    CompletionItemKind[CompletionItemKind["Variable"] = 4] = "Variable";
    CompletionItemKind[CompletionItemKind["Class"] = 5] = "Class";
    CompletionItemKind[CompletionItemKind["Struct"] = 6] = "Struct";
    CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
    CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
    CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
    CompletionItemKind[CompletionItemKind["Event"] = 10] = "Event";
    CompletionItemKind[CompletionItemKind["Operator"] = 11] = "Operator";
    CompletionItemKind[CompletionItemKind["Unit"] = 12] = "Unit";
    CompletionItemKind[CompletionItemKind["Value"] = 13] = "Value";
    CompletionItemKind[CompletionItemKind["Constant"] = 14] = "Constant";
    CompletionItemKind[CompletionItemKind["Enum"] = 15] = "Enum";
    CompletionItemKind[CompletionItemKind["EnumMember"] = 16] = "EnumMember";
    CompletionItemKind[CompletionItemKind["Keyword"] = 17] = "Keyword";
    CompletionItemKind[CompletionItemKind["Text"] = 18] = "Text";
    CompletionItemKind[CompletionItemKind["Color"] = 19] = "Color";
    CompletionItemKind[CompletionItemKind["File"] = 20] = "File";
    CompletionItemKind[CompletionItemKind["Reference"] = 21] = "Reference";
    CompletionItemKind[CompletionItemKind["Customcolor"] = 22] = "Customcolor";
    CompletionItemKind[CompletionItemKind["Folder"] = 23] = "Folder";
    CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
    CompletionItemKind[CompletionItemKind["Snippet"] = 25] = "Snippet";
})(CompletionItemKind || (CompletionItemKind = {}));
var CompletionItemInsertTextRule;
(function (CompletionItemInsertTextRule) {
    /**
     * Adjust whitespace/indentation of multiline insert texts to
     * match the current line indentation.
     */
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["KeepWhitespace"] = 1] = "KeepWhitespace";
    /**
     * `insertText` is a snippet.
     */
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule || (CompletionItemInsertTextRule = {}));
/**
 * How a suggest provider was triggered.
 */
var CompletionTriggerKind;
(function (CompletionTriggerKind) {
    CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
    CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
    CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind || (CompletionTriggerKind = {}));
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * A symbol kind.
 */
var SymbolKind;
(function (SymbolKind) {
    SymbolKind[SymbolKind["File"] = 0] = "File";
    SymbolKind[SymbolKind["Module"] = 1] = "Module";
    SymbolKind[SymbolKind["Namespace"] = 2] = "Namespace";
    SymbolKind[SymbolKind["Package"] = 3] = "Package";
    SymbolKind[SymbolKind["Class"] = 4] = "Class";
    SymbolKind[SymbolKind["Method"] = 5] = "Method";
    SymbolKind[SymbolKind["Property"] = 6] = "Property";
    SymbolKind[SymbolKind["Field"] = 7] = "Field";
    SymbolKind[SymbolKind["Constructor"] = 8] = "Constructor";
    SymbolKind[SymbolKind["Enum"] = 9] = "Enum";
    SymbolKind[SymbolKind["Interface"] = 10] = "Interface";
    SymbolKind[SymbolKind["Function"] = 11] = "Function";
    SymbolKind[SymbolKind["Variable"] = 12] = "Variable";
    SymbolKind[SymbolKind["Constant"] = 13] = "Constant";
    SymbolKind[SymbolKind["String"] = 14] = "String";
    SymbolKind[SymbolKind["Number"] = 15] = "Number";
    SymbolKind[SymbolKind["Boolean"] = 16] = "Boolean";
    SymbolKind[SymbolKind["Array"] = 17] = "Array";
    SymbolKind[SymbolKind["Object"] = 18] = "Object";
    SymbolKind[SymbolKind["Key"] = 19] = "Key";
    SymbolKind[SymbolKind["Null"] = 20] = "Null";
    SymbolKind[SymbolKind["EnumMember"] = 21] = "EnumMember";
    SymbolKind[SymbolKind["Struct"] = 22] = "Struct";
    SymbolKind[SymbolKind["Event"] = 23] = "Event";
    SymbolKind[SymbolKind["Operator"] = 24] = "Operator";
    SymbolKind[SymbolKind["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js ***!
  \****************************************************************************************/
/*! exports provided: PrefixSumIndexOfResult, PrefixSumComputer, PrefixSumComputerWithCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSumIndexOfResult", function() { return PrefixSumIndexOfResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSumComputer", function() { return PrefixSumComputer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSumComputerWithCache", function() { return PrefixSumComputerWithCache; });
/* harmony import */ var _core_uint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var PrefixSumIndexOfResult = /** @class */ (function () {
    function PrefixSumIndexOfResult(index, remainder) {
        this.index = index;
        this.remainder = remainder;
    }
    return PrefixSumIndexOfResult;
}());

var PrefixSumComputer = /** @class */ (function () {
    function PrefixSumComputer(values) {
        this.values = values;
        this.prefixSum = new Uint32Array(values.length);
        this.prefixSumValidIndex = new Int32Array(1);
        this.prefixSumValidIndex[0] = -1;
    }
    PrefixSumComputer.prototype.getCount = function () {
        return this.values.length;
    };
    PrefixSumComputer.prototype.insertValues = function (insertIndex, insertValues) {
        insertIndex = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(insertIndex);
        var oldValues = this.values;
        var oldPrefixSum = this.prefixSum;
        var insertValuesLen = insertValues.length;
        if (insertValuesLen === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length + insertValuesLen);
        this.values.set(oldValues.subarray(0, insertIndex), 0);
        this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
        this.values.set(insertValues, insertIndex);
        if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = insertIndex - 1;
        }
        this.prefixSum = new Uint32Array(this.values.length);
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    };
    PrefixSumComputer.prototype.changeValue = function (index, value) {
        index = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(index);
        value = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(value);
        if (this.values[index] === value) {
            return false;
        }
        this.values[index] = value;
        if (index - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = index - 1;
        }
        return true;
    };
    PrefixSumComputer.prototype.removeValues = function (startIndex, cnt) {
        startIndex = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(startIndex);
        cnt = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(cnt);
        var oldValues = this.values;
        var oldPrefixSum = this.prefixSum;
        if (startIndex >= oldValues.length) {
            return false;
        }
        var maxCnt = oldValues.length - startIndex;
        if (cnt >= maxCnt) {
            cnt = maxCnt;
        }
        if (cnt === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length - cnt);
        this.values.set(oldValues.subarray(0, startIndex), 0);
        this.values.set(oldValues.subarray(startIndex + cnt), startIndex);
        this.prefixSum = new Uint32Array(this.values.length);
        if (startIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = startIndex - 1;
        }
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    };
    PrefixSumComputer.prototype.getTotalValue = function () {
        if (this.values.length === 0) {
            return 0;
        }
        return this._getAccumulatedValue(this.values.length - 1);
    };
    PrefixSumComputer.prototype.getAccumulatedValue = function (index) {
        if (index < 0) {
            return 0;
        }
        index = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(index);
        return this._getAccumulatedValue(index);
    };
    PrefixSumComputer.prototype._getAccumulatedValue = function (index) {
        if (index <= this.prefixSumValidIndex[0]) {
            return this.prefixSum[index];
        }
        var startIndex = this.prefixSumValidIndex[0] + 1;
        if (startIndex === 0) {
            this.prefixSum[0] = this.values[0];
            startIndex++;
        }
        if (index >= this.values.length) {
            index = this.values.length - 1;
        }
        for (var i = startIndex; i <= index; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
        }
        this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
        return this.prefixSum[index];
    };
    PrefixSumComputer.prototype.getIndexOf = function (accumulatedValue) {
        accumulatedValue = Math.floor(accumulatedValue); //@perf
        // Compute all sums (to get a fully valid prefixSum)
        this.getTotalValue();
        var low = 0;
        var high = this.values.length - 1;
        var mid = 0;
        var midStop = 0;
        var midStart = 0;
        while (low <= high) {
            mid = low + ((high - low) / 2) | 0;
            midStop = this.prefixSum[mid];
            midStart = midStop - this.values[mid];
            if (accumulatedValue < midStart) {
                high = mid - 1;
            }
            else if (accumulatedValue >= midStop) {
                low = mid + 1;
            }
            else {
                break;
            }
        }
        return new PrefixSumIndexOfResult(mid, accumulatedValue - midStart);
    };
    return PrefixSumComputer;
}());

var PrefixSumComputerWithCache = /** @class */ (function () {
    function PrefixSumComputerWithCache(values) {
        this._cacheAccumulatedValueStart = 0;
        this._cache = null;
        this._actual = new PrefixSumComputer(values);
        this._bustCache();
    }
    PrefixSumComputerWithCache.prototype._bustCache = function () {
        this._cacheAccumulatedValueStart = 0;
        this._cache = null;
    };
    PrefixSumComputerWithCache.prototype.insertValues = function (insertIndex, insertValues) {
        if (this._actual.insertValues(insertIndex, insertValues)) {
            this._bustCache();
        }
    };
    PrefixSumComputerWithCache.prototype.changeValue = function (index, value) {
        if (this._actual.changeValue(index, value)) {
            this._bustCache();
        }
    };
    PrefixSumComputerWithCache.prototype.removeValues = function (startIndex, cnt) {
        if (this._actual.removeValues(startIndex, cnt)) {
            this._bustCache();
        }
    };
    PrefixSumComputerWithCache.prototype.getTotalValue = function () {
        return this._actual.getTotalValue();
    };
    PrefixSumComputerWithCache.prototype.getAccumulatedValue = function (index) {
        return this._actual.getAccumulatedValue(index);
    };
    PrefixSumComputerWithCache.prototype.getIndexOf = function (accumulatedValue) {
        accumulatedValue = Math.floor(accumulatedValue); //@perf
        if (this._cache !== null) {
            var cacheIndex = accumulatedValue - this._cacheAccumulatedValueStart;
            if (cacheIndex >= 0 && cacheIndex < this._cache.length) {
                // Cache hit!
                return this._cache[cacheIndex];
            }
        }
        // Cache miss!
        return this._actual.getIndexOf(accumulatedValue);
    };
    /**
     * Gives a hint that a lot of requests are about to come in for these accumulated values.
     */
    PrefixSumComputerWithCache.prototype.warmUpCache = function (accumulatedValueStart, accumulatedValueEnd) {
        var newCache = [];
        for (var accumulatedValue = accumulatedValueStart; accumulatedValue <= accumulatedValueEnd; accumulatedValue++) {
            newCache[accumulatedValue - accumulatedValueStart] = this.getIndexOf(accumulatedValue);
        }
        this._cache = newCache;
        this._cacheAccumulatedValueStart = accumulatedValueStart;
    };
    return PrefixSumComputerWithCache;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/editor.worker.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/editor.worker.js ***!
  \*******************************************************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/common/worker/simpleWorker.js */ "./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js");
/* harmony import */ var _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/services/editorSimpleWorker.js */ "./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var initialized = false;
function initialize(foreignModule) {
    if (initialized) {
        return;
    }
    initialized = true;
    var editorWorker = new _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_1__["EditorSimpleWorkerImpl"](foreignModule);
    var simpleWorker = new _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_0__["SimpleWorkerServer"](function (msg) {
        self.postMessage(msg);
    }, editorWorker);
    self.onmessage = function (e) {
        simpleWorker.onmessage(e.data);
    };
}
self.onmessage = function (e) {
    // Ignore first message in this case and initialize if not yet initialized
    if (!initialized) {
        initialize(null);
    }
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2FycmF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vY2FuY2VsbGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9kaWZmL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2RpZmYvZGlmZkNoYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vZXJyb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vZnVuY3Rpb25hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2tleUNvZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9saWZlY3ljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL3BsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9zdHJpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vdXJpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi93b3JrZXIvc2ltcGxlV29ya2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL2NvcmUvY2hhcmFjdGVyQ2xhc3NpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi9jb3JlL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL2NvcmUvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vY29yZS9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vY29yZS90b2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi9jb3JlL3VpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vZGlmZi9kaWZmQ29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vbW9kZWwvbWlycm9yVGV4dE1vZGVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL21vZGVsL3dvcmRIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vbW9kZXMvbGlua0NvbXB1dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL21vZGVzL3N1cHBvcnRzL2lucGxhY2VSZXBsYWNlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi9zZXJ2aWNlcy9lZGl0b3JTaW1wbGVXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vc3RhbmRhbG9uZS9wcm9taXNlLXBvbHlmaWxsL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL3N0YW5kYWxvbmUvc3RhbmRhbG9uZUJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vc3RhbmRhbG9uZS9zdGFuZGFsb25lRW51bXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vdmlld01vZGVsL3ByZWZpeFN1bUNvbXB1dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvZWRpdG9yLndvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ087QUFDUDtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MseURBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELG9DQUFvQztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUE0QztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdDQUFnQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseURBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdDQUFnQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5REFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2tCOzs7Ozs7Ozs7Ozs7O0FDbnhCbkI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3FCOzs7Ozs7Ozs7Ozs7O0FDakN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7QUFDakI7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DO0FBQzlCO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDMkI7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtFQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDMEI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2lDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUM2Qjs7Ozs7Ozs7Ozs7OztBQ3JSOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFlBQVksdUJBQXVCLDZCQUE2QixFQUFFO0FBQ2xFO0FBQ087QUFDUCxZQUFZLHVCQUF1QixNQUFNLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1QkFBdUIsRUFBRSxFQUFFO0FBQ2hFO0FBQ0EsQ0FBQztBQUNxQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLENBQUM7QUFDNEI7Ozs7Ozs7Ozs7Ozs7QUM5RDdCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQUc7QUFDOUI7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNxQjs7Ozs7Ozs7Ozs7OztBQ3RJdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQLDBGQUEwRjtBQUNuRjtBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7OztBQy9FUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ087QUFDUDtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDJCQUEyQixXQUFXO0FBQ3RDLHlCQUF5QixrQkFBa0I7QUFDM0MsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0NBQWdDLDZCQUE2QjtBQUM3RCw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNQLHlDQUF5QztBQUN6QztBQUNPO0FBQ1A7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9iQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUMwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGlKQUFpSjtBQUM5TTtBQUNBO0FBQ0EsMERBQTBELGlKQUFpSjtBQUMzTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxZQUFZO0FBQ2xGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDYztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoa0JBO0FBQUE7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNtQjs7Ozs7Ozs7Ozs7OztBQzNJcEI7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsU0FBUztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0RBQXNEO0FBQ2hEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzREFBc0Q7QUFDdkQ7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMEVBQTBFO0FBQzNFO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBFQUEwRTtBQUMzRTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMENBQTBDO0FBQzNDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUM5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QkFBMkIsc0ZBQWtCO0FBQzdDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFPLENBQUMsaUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJlZGl0b3Iud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2VkaXRvci53b3JrZXIuanNcIik7XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkuXG4gKiBAcGFyYW0gbiBXaGljaCBlbGVtZW50IGZyb20gdGhlIGVuZCAoZGVmYXVsdCBpcyB6ZXJvKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXksIG4pIHtcbiAgICBpZiAobiA9PT0gdm9pZCAwKSB7IG4gPSAwOyB9XG4gICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtICgxICsgbildO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwyKGFycikge1xuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0YWlsIGNhbGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIFthcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCAtIDEpLCBhcnJbYXJyLmxlbmd0aCAtIDFdXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMob25lLCBvdGhlciwgaXRlbUVxdWFscykge1xuICAgIGlmIChpdGVtRXF1YWxzID09PSB2b2lkIDApIHsgaXRlbUVxdWFscyA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhID09PSBiOyB9OyB9XG4gICAgaWYgKG9uZSA9PT0gb3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghb25lIHx8ICFvdGhlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvbmUubGVuZ3RoICE9PSBvdGhlci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gb25lLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmICghaXRlbUVxdWFscyhvbmVbaV0sIG90aGVyW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaChhcnJheSwga2V5LCBjb21wYXJhdG9yKSB7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBhcnJheS5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChsb3cgPD0gaGlnaCkge1xuICAgICAgICB2YXIgbWlkID0gKChsb3cgKyBoaWdoKSAvIDIpIHwgMDtcbiAgICAgICAgdmFyIGNvbXAgPSBjb21wYXJhdG9yKGFycmF5W21pZF0sIGtleSk7XG4gICAgICAgIGlmIChjb21wIDwgMCkge1xuICAgICAgICAgICAgbG93ID0gbWlkICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wID4gMCkge1xuICAgICAgICAgICAgaGlnaCA9IG1pZCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtKGxvdyArIDEpO1xufVxuLyoqXG4gKiBUYWtlcyBhIHNvcnRlZCBhcnJheSBhbmQgYSBmdW5jdGlvbiBwLiBUaGUgYXJyYXkgaXMgc29ydGVkIGluIHN1Y2ggYSB3YXkgdGhhdCBhbGwgZWxlbWVudHMgd2hlcmUgcCh4KSBpcyBmYWxzZVxuICogYXJlIGxvY2F0ZWQgYmVmb3JlIGFsbCBlbGVtZW50cyB3aGVyZSBwKHgpIGlzIHRydWUuXG4gKiBAcmV0dXJucyB0aGUgbGVhc3QgeCBmb3Igd2hpY2ggcCh4KSBpcyB0cnVlIG9yIGFycmF5Lmxlbmd0aCBpZiBubyBlbGVtZW50IGZ1bGxmaWxscyB0aGUgZ2l2ZW4gZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3RJblNvcnRlZChhcnJheSwgcCkge1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChoaWdoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwOyAvLyBubyBjaGlsZHJlblxuICAgIH1cbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgICB2YXIgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcbiAgICAgICAgaWYgKHAoYXJyYXlbbWlkXSkpIHtcbiAgICAgICAgICAgIGhpZ2ggPSBtaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG59XG4vKipcbiAqIExpa2UgYEFycmF5I3NvcnRgIGJ1dCBhbHdheXMgc3RhYmxlLiBVc3VhbGx5IHJ1bnMgYSBsaXR0bGUgc2xvd2VyIGB0aGFuIEFycmF5I3NvcnRgXG4gKiBzbyBvbmx5IHVzZSB0aGlzIHdoZW4gYWN0dWFsbHkgbmVlZGluZyBzdGFibGUgc29ydC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU29ydChkYXRhLCBjb21wYXJlKSB7XG4gICAgX3NvcnQoZGF0YSwgY29tcGFyZSwgMCwgZGF0YS5sZW5ndGggLSAxLCBbXSk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5mdW5jdGlvbiBfbWVyZ2UoYSwgY29tcGFyZSwgbG8sIG1pZCwgaGksIGF1eCkge1xuICAgIHZhciBsZWZ0SWR4ID0gbG8sIHJpZ2h0SWR4ID0gbWlkICsgMTtcbiAgICBmb3IgKHZhciBpID0gbG87IGkgPD0gaGk7IGkrKykge1xuICAgICAgICBhdXhbaV0gPSBhW2ldO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gbG87IGkgPD0gaGk7IGkrKykge1xuICAgICAgICBpZiAobGVmdElkeCA+IG1pZCkge1xuICAgICAgICAgICAgLy8gbGVmdCBzaWRlIGNvbnN1bWVkXG4gICAgICAgICAgICBhW2ldID0gYXV4W3JpZ2h0SWR4KytdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJpZ2h0SWR4ID4gaGkpIHtcbiAgICAgICAgICAgIC8vIHJpZ2h0IHNpZGUgY29uc3VtZWRcbiAgICAgICAgICAgIGFbaV0gPSBhdXhbbGVmdElkeCsrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKGF1eFtyaWdodElkeF0sIGF1eFtsZWZ0SWR4XSkgPCAwKSB7XG4gICAgICAgICAgICAvLyByaWdodCBlbGVtZW50IGlzIGxlc3MgLT4gY29tZXMgZmlyc3RcbiAgICAgICAgICAgIGFbaV0gPSBhdXhbcmlnaHRJZHgrK107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBsZWZ0IGVsZW1lbnQgY29tZXMgZmlyc3QgKGxlc3Mgb3IgZXF1YWwpXG4gICAgICAgICAgICBhW2ldID0gYXV4W2xlZnRJZHgrK107XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBfc29ydChhLCBjb21wYXJlLCBsbywgaGksIGF1eCkge1xuICAgIGlmIChoaSA8PSBsbykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBtaWQgPSBsbyArICgoaGkgLSBsbykgLyAyKSB8IDA7XG4gICAgX3NvcnQoYSwgY29tcGFyZSwgbG8sIG1pZCwgYXV4KTtcbiAgICBfc29ydChhLCBjb21wYXJlLCBtaWQgKyAxLCBoaSwgYXV4KTtcbiAgICBpZiAoY29tcGFyZShhW21pZF0sIGFbbWlkICsgMV0pIDw9IDApIHtcbiAgICAgICAgLy8gbGVmdCBhbmQgcmlnaHQgYXJlIHNvcnRlZCBhbmQgaWYgdGhlIGxhc3QtbGVmdCBlbGVtZW50IGlzIGxlc3NcbiAgICAgICAgLy8gb3IgZXF1YWxzIHRoYW4gdGhlIGZpcnN0LXJpZ2h0IGVsZW1lbnQgdGhlcmUgaXMgbm90aGluZyBlbHNlXG4gICAgICAgIC8vIHRvIGRvXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX21lcmdlKGEsIGNvbXBhcmUsIGxvLCBtaWQsIGhpLCBhdXgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwQnkoZGF0YSwgY29tcGFyZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgY3VycmVudEdyb3VwID0gdW5kZWZpbmVkO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBtZXJnZVNvcnQoZGF0YS5zbGljZSgwKSwgY29tcGFyZSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gX2FbX2ldO1xuICAgICAgICBpZiAoIWN1cnJlbnRHcm91cCB8fCBjb21wYXJlKGN1cnJlbnRHcm91cFswXSwgZWxlbWVudCkgIT09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cCA9IFtlbGVtZW50XTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRHcm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50R3JvdXAucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBAcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGFsbCBmYWxzeSB2YWx1ZXMgcmVtb3ZlZC4gVGhlIG9yaWdpbmFsIGFycmF5IElTIE5PVCBtb2RpZmllZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvYWxlc2NlKGFycmF5KSB7XG4gICAgaWYgKCFhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuICEhZTsgfSk7XG59XG4vKipcbiAqIEByZXR1cm5zIGZhbHNlIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXkgYW5kIG5vdCBlbXB0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRmFsc3lPckVtcHR5KG9iaikge1xuICAgIHJldHVybiAhQXJyYXkuaXNBcnJheShvYmopIHx8IG9iai5sZW5ndGggPT09IDA7XG59XG4vKipcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSBhbmQgaGFzIGF0IGxlYXN0IG9uZSBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOb25FbXB0eUFycmF5KG9iaikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iaikgJiYgb2JqLmxlbmd0aCA+IDA7XG59XG4vKipcbiAqIFJlbW92ZXMgZHVwbGljYXRlcyBmcm9tIHRoZSBnaXZlbiBhcnJheS4gVGhlIG9wdGlvbmFsIGtleUZuIGFsbG93cyB0byBzcGVjaWZ5XG4gKiBob3cgZWxlbWVudHMgYXJlIGNoZWNrZWQgZm9yIGVxdWFsbmVzcyBieSByZXR1cm5pbmcgYSB1bmlxdWUgc3RyaW5nIGZvciBlYWNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGluY3QoYXJyYXksIGtleUZuKSB7XG4gICAgaWYgKCFrZXlGbikge1xuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50LCBwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YoZWxlbWVudCkgPT09IHBvc2l0aW9uO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHNlZW4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdmFyIGtleSA9IGtleUZuKGVsZW0pO1xuICAgICAgICBpZiAoc2VlbltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2VlbltrZXldID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzdGluY3RFUzYoYXJyYXkpIHtcbiAgICB2YXIgc2VlbiA9IG5ldyBTZXQoKTtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChzZWVuLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNlZW4uYWRkKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdEluZGV4KGFycmF5LCBmbikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBhcnJheVtpXTtcbiAgICAgICAgaWYgKGZuKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXksIGZuLCBub3RGb3VuZFZhbHVlKSB7XG4gICAgaWYgKG5vdEZvdW5kVmFsdWUgPT09IHZvaWQgMCkgeyBub3RGb3VuZFZhbHVlID0gdW5kZWZpbmVkOyB9XG4gICAgdmFyIGluZGV4ID0gZmlyc3RJbmRleChhcnJheSwgZm4pO1xuICAgIHJldHVybiBpbmRleCA8IDAgPyBub3RGb3VuZFZhbHVlIDogYXJyYXlbaW5kZXhdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBbXSkuY29uY2F0LmFwcGx5KF9hLCBhcnIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKGFyZywgdG8pIHtcbiAgICB2YXIgZnJvbSA9IHR5cGVvZiB0byA9PT0gJ251bWJlcicgPyBhcmcgOiAwO1xuICAgIGlmICh0eXBlb2YgdG8gPT09ICdudW1iZXInKSB7XG4gICAgICAgIGZyb20gPSBhcmc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmcm9tID0gMDtcbiAgICAgICAgdG8gPSBhcmc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBpZiAoZnJvbSA8PSB0bykge1xuICAgICAgICBmb3IgKHZhciBpID0gZnJvbTsgaSA8IHRvOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gZnJvbTsgaSA+IHRvOyBpLS0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEluc2VydCBgaW5zZXJ0QXJyYCBpbnNpZGUgYHRhcmdldGAgYXQgYGluc2VydEluZGV4YC5cbiAqIFBsZWFzZSBkb24ndCB0b3VjaCB1bmxlc3MgeW91IHVuZGVyc3RhbmQgaHR0cHM6Ly9qc3BlcmYuY29tL2luc2VydGluZy1hbi1hcnJheS13aXRoaW4tYW4tYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5SW5zZXJ0KHRhcmdldCwgaW5zZXJ0SW5kZXgsIGluc2VydEFycikge1xuICAgIHZhciBiZWZvcmUgPSB0YXJnZXQuc2xpY2UoMCwgaW5zZXJ0SW5kZXgpO1xuICAgIHZhciBhZnRlciA9IHRhcmdldC5zbGljZShpbnNlcnRJbmRleCk7XG4gICAgcmV0dXJuIGJlZm9yZS5jb25jYXQoaW5zZXJ0QXJyLCBhZnRlcik7XG59XG4vKipcbiAqIFB1c2hlcyBhbiBlbGVtZW50IHRvIHRoZSBzdGFydCBvZiB0aGUgYXJyYXksIGlmIGZvdW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRvU3RhcnQoYXJyLCB2YWx1ZSkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgYXJyLnVuc2hpZnQodmFsdWUpO1xuICAgIH1cbn1cbi8qKlxuICogUHVzaGVzIGFuIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXksIGlmIGZvdW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRvRW5kKGFyciwgdmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXNBcnJheSh4KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoeCkgPyB4IDogW3hdO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyBFbWl0dGVyLCBFdmVudCB9IGZyb20gJy4vZXZlbnQuanMnO1xudmFyIHNob3J0Y3V0RXZlbnQgPSBPYmplY3QuZnJlZXplKGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuICAgIHZhciBoYW5kbGUgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLmJpbmQoY29udGV4dCksIDApO1xuICAgIHJldHVybiB7IGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHsgY2xlYXJUaW1lb3V0KGhhbmRsZSk7IH0gfTtcbn0pO1xuZXhwb3J0IHZhciBDYW5jZWxsYXRpb25Ub2tlbjtcbihmdW5jdGlvbiAoQ2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBmdW5jdGlvbiBpc0NhbmNlbGxhdGlvblRva2VuKHRoaW5nKSB7XG4gICAgICAgIGlmICh0aGluZyA9PT0gQ2FuY2VsbGF0aW9uVG9rZW4uTm9uZSB8fCB0aGluZyA9PT0gQ2FuY2VsbGF0aW9uVG9rZW4uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpbmcgaW5zdGFuY2VvZiBNdXRhYmxlVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpbmcgfHwgdHlwZW9mIHRoaW5nICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpbmcuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQgPT09ICdib29sZWFuJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaW5nLm9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkID09PSAnZnVuY3Rpb24nO1xuICAgIH1cbiAgICBDYW5jZWxsYXRpb25Ub2tlbi5pc0NhbmNlbGxhdGlvblRva2VuID0gaXNDYW5jZWxsYXRpb25Ub2tlbjtcbiAgICBDYW5jZWxsYXRpb25Ub2tlbi5Ob25lID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBmYWxzZSxcbiAgICAgICAgb25DYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IEV2ZW50Lk5vbmVcbiAgICB9KTtcbiAgICBDYW5jZWxsYXRpb25Ub2tlbi5DYW5jZWxsZWQgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IHRydWUsXG4gICAgICAgIG9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBzaG9ydGN1dEV2ZW50XG4gICAgfSk7XG59KShDYW5jZWxsYXRpb25Ub2tlbiB8fCAoQ2FuY2VsbGF0aW9uVG9rZW4gPSB7fSkpO1xudmFyIE11dGFibGVUb2tlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXRhYmxlVG9rZW4oKSB7XG4gICAgICAgIHRoaXMuX2lzQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2VtaXR0ZXIgPSBudWxsO1xuICAgIH1cbiAgICBNdXRhYmxlVG9rZW4ucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNDYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2VtaXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0dGVyLmZpcmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE11dGFibGVUb2tlbi5wcm90b3R5cGUsIFwiaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0NhbmNlbGxlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE11dGFibGVUb2tlbi5wcm90b3R5cGUsIFwib25DYW5jZWxsYXRpb25SZXF1ZXN0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG9ydGN1dEV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9lbWl0dGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW1pdHRlci5ldmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTXV0YWJsZVRva2VuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fZW1pdHRlcikge1xuICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE11dGFibGVUb2tlbjtcbn0oKSk7XG52YXIgQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2UocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX3Rva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wYXJlbnRMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fcGFyZW50TGlzdGVuZXIgPSBwYXJlbnQgJiYgcGFyZW50Lm9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKHRoaXMuY2FuY2VsLCB0aGlzKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhbmNlbGxhdGlvblRva2VuU291cmNlLnByb3RvdHlwZSwgXCJ0b2tlblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl90b2tlbikge1xuICAgICAgICAgICAgICAgIC8vIGJlIGxhenkgYW5kIGNyZWF0ZSB0aGUgdG9rZW4gb25seSB3aGVuXG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgbmVlZGVkXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSBuZXcgTXV0YWJsZVRva2VuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENhbmNlbGxhdGlvblRva2VuU291cmNlLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdG9rZW4pIHtcbiAgICAgICAgICAgIC8vIHNhdmUgYW4gb2JqZWN0IGJ5IHJldHVybmluZyB0aGUgZGVmYXVsdFxuICAgICAgICAgICAgLy8gY2FuY2VsbGVkIHRva2VuIHdoZW4gY2FuY2VsbGF0aW9uIGhhcHBlbnNcbiAgICAgICAgICAgIC8vIGJlZm9yZSBzb21lb25lIGFza3MgZm9yIHRoZSB0b2tlblxuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSBDYW5jZWxsYXRpb25Ub2tlbi5DYW5jZWxsZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fdG9rZW4gaW5zdGFuY2VvZiBNdXRhYmxlVG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGFjdHVhbGx5IGNhbmNlbFxuICAgICAgICAgICAgdGhpcy5fdG9rZW4uY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhbmNlbGxhdGlvblRva2VuU291cmNlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fcGFyZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudExpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3Rva2VuKSB7XG4gICAgICAgICAgICAvLyBlbnN1cmUgdG8gaW5pdGlhbGl6ZSB3aXRoIGFuIGVtcHR5IHRva2VuIGlmIHdlIGhhZCBub25lXG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IENhbmNlbGxhdGlvblRva2VuLk5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fdG9rZW4gaW5zdGFuY2VvZiBNdXRhYmxlVG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGFjdHVhbGx5IGRpc3Bvc2VcbiAgICAgICAgICAgIHRoaXMuX3Rva2VuLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENhbmNlbGxhdGlvblRva2VuU291cmNlO1xufSgpKTtcbmV4cG9ydCB7IENhbmNlbGxhdGlvblRva2VuU291cmNlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IERpZmZDaGFuZ2UgfSBmcm9tICcuL2RpZmZDaGFuZ2UuanMnO1xuZnVuY3Rpb24gY3JlYXRlU3RyaW5nU2VxdWVuY2UoYSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldExlbmd0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYS5sZW5ndGg7IH0sXG4gICAgICAgIGdldEVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAocG9zKSB7IHJldHVybiBhLmNoYXJDb2RlQXQocG9zKTsgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRGlmZihvcmlnaW5hbCwgbW9kaWZpZWQsIHByZXR0eSkge1xuICAgIHJldHVybiBuZXcgTGNzRGlmZihjcmVhdGVTdHJpbmdTZXF1ZW5jZShvcmlnaW5hbCksIGNyZWF0ZVN0cmluZ1NlcXVlbmNlKG1vZGlmaWVkKSkuQ29tcHV0ZURpZmYocHJldHR5KTtcbn1cbi8vXG4vLyBUaGUgY29kZSBiZWxvdyBoYXMgYmVlbiBwb3J0ZWQgZnJvbSBhIEMjIGltcGxlbWVudGF0aW9uIGluIFZTXG4vL1xudmFyIERlYnVnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlYnVnKCkge1xuICAgIH1cbiAgICBEZWJ1Zy5Bc3NlcnQgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEZWJ1Zztcbn0oKSk7XG5leHBvcnQgeyBEZWJ1ZyB9O1xudmFyIE15QXJyYXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXlBcnJheSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29waWVzIGEgcmFuZ2Ugb2YgZWxlbWVudHMgZnJvbSBhbiBBcnJheSBzdGFydGluZyBhdCB0aGUgc3BlY2lmaWVkIHNvdXJjZSBpbmRleCBhbmQgcGFzdGVzXG4gICAgICogdGhlbSB0byBhbm90aGVyIEFycmF5IHN0YXJ0aW5nIGF0IHRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24gaW5kZXguIFRoZSBsZW5ndGggYW5kIHRoZSBpbmRleGVzXG4gICAgICogYXJlIHNwZWNpZmllZCBhcyA2NC1iaXQgaW50ZWdlcnMuXG4gICAgICogc291cmNlQXJyYXk6XG4gICAgICpcdFx0VGhlIEFycmF5IHRoYXQgY29udGFpbnMgdGhlIGRhdGEgdG8gY29weS5cbiAgICAgKiBzb3VyY2VJbmRleDpcbiAgICAgKlx0XHRBIDY0LWJpdCBpbnRlZ2VyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggaW4gdGhlIHNvdXJjZUFycmF5IGF0IHdoaWNoIGNvcHlpbmcgYmVnaW5zLlxuICAgICAqIGRlc3RpbmF0aW9uQXJyYXk6XG4gICAgICpcdFx0VGhlIEFycmF5IHRoYXQgcmVjZWl2ZXMgdGhlIGRhdGEuXG4gICAgICogZGVzdGluYXRpb25JbmRleDpcbiAgICAgKlx0XHRBIDY0LWJpdCBpbnRlZ2VyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggaW4gdGhlIGRlc3RpbmF0aW9uQXJyYXkgYXQgd2hpY2ggc3RvcmluZyBiZWdpbnMuXG4gICAgICogbGVuZ3RoOlxuICAgICAqXHRcdEEgNjQtYml0IGludGVnZXIgdGhhdCByZXByZXNlbnRzIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gY29weS5cbiAgICAgKi9cbiAgICBNeUFycmF5LkNvcHkgPSBmdW5jdGlvbiAoc291cmNlQXJyYXksIHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkFycmF5LCBkZXN0aW5hdGlvbkluZGV4LCBsZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25BcnJheVtkZXN0aW5hdGlvbkluZGV4ICsgaV0gPSBzb3VyY2VBcnJheVtzb3VyY2VJbmRleCArIGldO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTXlBcnJheTtcbn0oKSk7XG5leHBvcnQgeyBNeUFycmF5IH07XG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBMY3NEaWZmLmNzXG4vL1xuLy8gQW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGRpZmZlcmVuY2UgYWxnb3JpdGhtIGRlc2NyaWJlZCBpblxuLy8gXCJBbiBPKE5EKSBEaWZmZXJlbmNlIEFsZ29yaXRobSBhbmQgaXRzIHZhcmlhdGlvbnNcIiBieSBFdWdlbmUgVy4gTXllcnNcbi8vXG4vLyBDb3B5cmlnaHQgKEMpIDIwMDggTWljcm9zb2Z0IENvcnBvcmF0aW9uIEBtaW5pZmllcl9kb19ub3RfcHJlc2VydmVcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIE91ciB0b3RhbCBtZW1vcnkgdXNhZ2UgZm9yIHN0b3JpbmcgaGlzdG9yeSBpcyAod29yc3QtY2FzZSk6XG4vLyAyICogWyhNYXhEaWZmZXJlbmNlc0hpc3RvcnkgKyAxKSAqIChNYXhEaWZmZXJlbmNlc0hpc3RvcnkgKyAxKSAtIDFdICogc2l6ZW9mKGludClcbi8vIDIgKiBbMTQ0OCoxNDQ4IC0gMV0gKiA0ID0gMTY3NzM2MjQgPSAxNk1CXG52YXIgTWF4RGlmZmVyZW5jZXNIaXN0b3J5ID0gMTQ0Nztcbi8vbGV0IE1heERpZmZlcmVuY2VzSGlzdG9yeSA9IDEwMDtcbi8qKlxuICogQSB1dGlsaXR5IGNsYXNzIHdoaWNoIGhlbHBzIHRvIGNyZWF0ZSB0aGUgc2V0IG9mIERpZmZDaGFuZ2VzIGZyb21cbiAqIGEgZGlmZmVyZW5jZSBvcGVyYXRpb24uIFRoaXMgY2xhc3MgYWNjZXB0cyBvcmlnaW5hbCBEaWZmRWxlbWVudHMgYW5kXG4gKiBtb2RpZmllZCBEaWZmRWxlbWVudHMgdGhhdCBhcmUgaW52b2x2ZWQgaW4gYSBwYXJ0aWN1bGFyIGNoYW5nZS4gVGhlXG4gKiBNYXJrdE5leHRDaGFuZ2UoKSBtZXRob2QgY2FuIGJlIGNhbGxlZCB0byBtYXJrIHRoZSBzZXBhcmF0aW9uIGJldHdlZW5cbiAqIGRpc3RpbmN0IGNoYW5nZXMuIEF0IHRoZSBlbmQsIHRoZSBDaGFuZ2VzIHByb3BlcnR5IGNhbiBiZSBjYWxsZWQgdG8gcmV0cmlldmVcbiAqIHRoZSBjb25zdHJ1Y3RlZCBjaGFuZ2VzLlxuICovXG52YXIgRGlmZkNoYW5nZUhlbHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IERpZmZDaGFuZ2VIZWxwZXIgZm9yIHRoZSBnaXZlbiBEaWZmU2VxdWVuY2VzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERpZmZDaGFuZ2VIZWxwZXIoKSB7XG4gICAgICAgIHRoaXMubV9jaGFuZ2VzID0gW107XG4gICAgICAgIHRoaXMubV9vcmlnaW5hbFN0YXJ0ID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgdGhpcy5tX21vZGlmaWVkU3RhcnQgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB0aGlzLm1fb3JpZ2luYWxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubV9tb2RpZmllZENvdW50ID0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIGJlZ2lubmluZyBvZiB0aGUgbmV4dCBjaGFuZ2UgaW4gdGhlIHNldCBvZiBkaWZmZXJlbmNlcy5cbiAgICAgKi9cbiAgICBEaWZmQ2hhbmdlSGVscGVyLnByb3RvdHlwZS5NYXJrTmV4dENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gT25seSBhZGQgdG8gdGhlIGxpc3QgaWYgdGhlcmUgaXMgc29tZXRoaW5nIHRvIGFkZFxuICAgICAgICBpZiAodGhpcy5tX29yaWdpbmFsQ291bnQgPiAwIHx8IHRoaXMubV9tb2RpZmllZENvdW50ID4gMCkge1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBuZXcgY2hhbmdlIHRvIG91ciBsaXN0XG4gICAgICAgICAgICB0aGlzLm1fY2hhbmdlcy5wdXNoKG5ldyBEaWZmQ2hhbmdlKHRoaXMubV9vcmlnaW5hbFN0YXJ0LCB0aGlzLm1fb3JpZ2luYWxDb3VudCwgdGhpcy5tX21vZGlmaWVkU3RhcnQsIHRoaXMubV9tb2RpZmllZENvdW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgZm9yIHRoZSBuZXh0IGNoYW5nZVxuICAgICAgICB0aGlzLm1fb3JpZ2luYWxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubV9tb2RpZmllZENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5tX29yaWdpbmFsU3RhcnQgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB0aGlzLm1fbW9kaWZpZWRTdGFydCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBvcmlnaW5hbCBlbGVtZW50IGF0IHRoZSBnaXZlbiBwb3NpdGlvbiB0byB0aGUgZWxlbWVudHNcbiAgICAgKiBhZmZlY3RlZCBieSB0aGUgY3VycmVudCBjaGFuZ2UuIFRoZSBtb2RpZmllZCBpbmRleCBnaXZlcyBjb250ZXh0XG4gICAgICogdG8gdGhlIGNoYW5nZSBwb3NpdGlvbiB3aXRoIHJlc3BlY3QgdG8gdGhlIG9yaWdpbmFsIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSBvcmlnaW5hbEluZGV4IFRoZSBpbmRleCBvZiB0aGUgb3JpZ2luYWwgZWxlbWVudCB0byBhZGQuXG4gICAgICogQHBhcmFtIG1vZGlmaWVkSW5kZXggVGhlIGluZGV4IG9mIHRoZSBtb2RpZmllZCBlbGVtZW50IHRoYXQgcHJvdmlkZXMgY29ycmVzcG9uZGluZyBwb3NpdGlvbiBpbiB0aGUgbW9kaWZpZWQgc2VxdWVuY2UuXG4gICAgICovXG4gICAgRGlmZkNoYW5nZUhlbHBlci5wcm90b3R5cGUuQWRkT3JpZ2luYWxFbGVtZW50ID0gZnVuY3Rpb24gKG9yaWdpbmFsSW5kZXgsIG1vZGlmaWVkSW5kZXgpIHtcbiAgICAgICAgLy8gVGhlICd0cnVlJyBzdGFydCBpbmRleCBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIG9uZXMgd2UndmUgc2VlblxuICAgICAgICB0aGlzLm1fb3JpZ2luYWxTdGFydCA9IE1hdGgubWluKHRoaXMubV9vcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEluZGV4KTtcbiAgICAgICAgdGhpcy5tX21vZGlmaWVkU3RhcnQgPSBNYXRoLm1pbih0aGlzLm1fbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRJbmRleCk7XG4gICAgICAgIHRoaXMubV9vcmlnaW5hbENvdW50Kys7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBtb2RpZmllZCBlbGVtZW50IGF0IHRoZSBnaXZlbiBwb3NpdGlvbiB0byB0aGUgZWxlbWVudHNcbiAgICAgKiBhZmZlY3RlZCBieSB0aGUgY3VycmVudCBjaGFuZ2UuIFRoZSBvcmlnaW5hbCBpbmRleCBnaXZlcyBjb250ZXh0XG4gICAgICogdG8gdGhlIGNoYW5nZSBwb3NpdGlvbiB3aXRoIHJlc3BlY3QgdG8gdGhlIG1vZGlmaWVkIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSBvcmlnaW5hbEluZGV4IFRoZSBpbmRleCBvZiB0aGUgb3JpZ2luYWwgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGNvcnJlc3BvbmRpbmcgcG9zaXRpb24gaW4gdGhlIG9yaWdpbmFsIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSBtb2RpZmllZEluZGV4IFRoZSBpbmRleCBvZiB0aGUgbW9kaWZpZWQgZWxlbWVudCB0byBhZGQuXG4gICAgICovXG4gICAgRGlmZkNoYW5nZUhlbHBlci5wcm90b3R5cGUuQWRkTW9kaWZpZWRFbGVtZW50ID0gZnVuY3Rpb24gKG9yaWdpbmFsSW5kZXgsIG1vZGlmaWVkSW5kZXgpIHtcbiAgICAgICAgLy8gVGhlICd0cnVlJyBzdGFydCBpbmRleCBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIG9uZXMgd2UndmUgc2VlblxuICAgICAgICB0aGlzLm1fb3JpZ2luYWxTdGFydCA9IE1hdGgubWluKHRoaXMubV9vcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEluZGV4KTtcbiAgICAgICAgdGhpcy5tX21vZGlmaWVkU3RhcnQgPSBNYXRoLm1pbih0aGlzLm1fbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRJbmRleCk7XG4gICAgICAgIHRoaXMubV9tb2RpZmllZENvdW50Kys7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBjaGFuZ2VzIG1hcmtlZCBieSB0aGUgY2xhc3MuXG4gICAgICovXG4gICAgRGlmZkNoYW5nZUhlbHBlci5wcm90b3R5cGUuZ2V0Q2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubV9vcmlnaW5hbENvdW50ID4gMCB8fCB0aGlzLm1fbW9kaWZpZWRDb3VudCA+IDApIHtcbiAgICAgICAgICAgIC8vIEZpbmlzaCB1cCBvbiB3aGF0ZXZlciBpcyBsZWZ0XG4gICAgICAgICAgICB0aGlzLk1hcmtOZXh0Q2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubV9jaGFuZ2VzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgY2hhbmdlcyBtYXJrZWQgYnkgdGhlIGNsYXNzIGluIHRoZSByZXZlcnNlIG9yZGVyXG4gICAgICovXG4gICAgRGlmZkNoYW5nZUhlbHBlci5wcm90b3R5cGUuZ2V0UmV2ZXJzZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1fb3JpZ2luYWxDb3VudCA+IDAgfHwgdGhpcy5tX21vZGlmaWVkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAvLyBGaW5pc2ggdXAgb24gd2hhdGV2ZXIgaXMgbGVmdFxuICAgICAgICAgICAgdGhpcy5NYXJrTmV4dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubV9jaGFuZ2VzLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubV9jaGFuZ2VzO1xuICAgIH07XG4gICAgcmV0dXJuIERpZmZDaGFuZ2VIZWxwZXI7XG59KCkpO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgZGlmZmVyZW5jZSBhbGdvcml0aG0gZGVzY3JpYmVkIGluXG4gKiBcIkFuIE8oTkQpIERpZmZlcmVuY2UgQWxnb3JpdGhtIGFuZCBpdHMgdmFyaWF0aW9uc1wiIGJ5IEV1Z2VuZSBXLiBNeWVyc1xuICovXG52YXIgTGNzRGlmZiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIHRoZSBEaWZmRmluZGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gTGNzRGlmZihvcmlnaW5hbFNlcXVlbmNlLCBuZXdTZXF1ZW5jZSwgY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlKSB7XG4gICAgICAgIGlmIChjb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUgPT09IHZvaWQgMCkgeyBjb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUgPSBudWxsOyB9XG4gICAgICAgIHRoaXMuT3JpZ2luYWxTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2U7XG4gICAgICAgIHRoaXMuTW9kaWZpZWRTZXF1ZW5jZSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICB0aGlzLkNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSA9IGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZTtcbiAgICAgICAgdGhpcy5tX2ZvcndhcmRIaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMubV9yZXZlcnNlSGlzdG9yeSA9IFtdO1xuICAgIH1cbiAgICBMY3NEaWZmLnByb3RvdHlwZS5FbGVtZW50c0FyZUVxdWFsID0gZnVuY3Rpb24gKG9yaWdpbmFsSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5PcmlnaW5hbFNlcXVlbmNlLmdldEVsZW1lbnRBdEluZGV4KG9yaWdpbmFsSW5kZXgpID09PSB0aGlzLk1vZGlmaWVkU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgobmV3SW5kZXgpKTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLk9yaWdpbmFsRWxlbWVudHNBcmVFcXVhbCA9IGZ1bmN0aW9uIChpbmRleDEsIGluZGV4Mikge1xuICAgICAgICByZXR1cm4gKHRoaXMuT3JpZ2luYWxTZXF1ZW5jZS5nZXRFbGVtZW50QXRJbmRleChpbmRleDEpID09PSB0aGlzLk9yaWdpbmFsU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgoaW5kZXgyKSk7XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5Nb2RpZmllZEVsZW1lbnRzQXJlRXF1YWwgPSBmdW5jdGlvbiAoaW5kZXgxLCBpbmRleDIpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLk1vZGlmaWVkU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgoaW5kZXgxKSA9PT0gdGhpcy5Nb2RpZmllZFNlcXVlbmNlLmdldEVsZW1lbnRBdEluZGV4KGluZGV4MikpO1xuICAgIH07XG4gICAgTGNzRGlmZi5wcm90b3R5cGUuQ29tcHV0ZURpZmYgPSBmdW5jdGlvbiAocHJldHR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Db21wdXRlRGlmZigwLCB0aGlzLk9yaWdpbmFsU2VxdWVuY2UuZ2V0TGVuZ3RoKCkgLSAxLCAwLCB0aGlzLk1vZGlmaWVkU2VxdWVuY2UuZ2V0TGVuZ3RoKCkgLSAxLCBwcmV0dHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIG9yaWdpbmFsIGFuZCBtb2RpZmllZCBpbnB1dFxuICAgICAqIHNlcXVlbmNlcyBvbiB0aGUgYm91bmRlZCByYW5nZS5cbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgdHdvIGlucHV0IHNlcXVlbmNlcy5cbiAgICAgKi9cbiAgICBMY3NEaWZmLnByb3RvdHlwZS5fQ29tcHV0ZURpZmYgPSBmdW5jdGlvbiAob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxFbmQsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkRW5kLCBwcmV0dHkpIHtcbiAgICAgICAgdmFyIHF1aXRFYXJseUFyciA9IFtmYWxzZV07XG4gICAgICAgIHZhciBjaGFuZ2VzID0gdGhpcy5Db21wdXRlRGlmZlJlY3Vyc2l2ZShvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEVuZCwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRFbmQsIHF1aXRFYXJseUFycik7XG4gICAgICAgIGlmIChwcmV0dHkpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gY2xlYW4gdXAgdGhlIGNvbXB1dGVkIGRpZmYgdG8gYmUgbW9yZSBpbnR1aXRpdmVcbiAgICAgICAgICAgIC8vIGJ1dCBpdCB0dXJucyBvdXQgdGhpcyBjYW5ub3QgYmUgZG9uZSBjb3JyZWN0bHkgdW50aWwgdGhlIGVudGlyZSBzZXRcbiAgICAgICAgICAgIC8vIG9mIGRpZmZzIGhhdmUgYmVlbiBjb21wdXRlZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuUHJldHRpZnlDaGFuZ2VzKGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJpdmF0ZSBoZWxwZXIgbWV0aG9kIHdoaWNoIGNvbXB1dGVzIHRoZSBkaWZmZXJlbmNlcyBvbiB0aGUgYm91bmRlZCByYW5nZVxuICAgICAqIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSB0d28gaW5wdXQgc2VxdWVuY2VzLlxuICAgICAqL1xuICAgIExjc0RpZmYucHJvdG90eXBlLkNvbXB1dGVEaWZmUmVjdXJzaXZlID0gZnVuY3Rpb24gKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsRW5kLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZEVuZCwgcXVpdEVhcmx5QXJyKSB7XG4gICAgICAgIHF1aXRFYXJseUFyclswXSA9IGZhbHNlO1xuICAgICAgICAvLyBGaW5kIHRoZSBzdGFydCBvZiB0aGUgZGlmZmVyZW5jZXNcbiAgICAgICAgd2hpbGUgKG9yaWdpbmFsU3RhcnQgPD0gb3JpZ2luYWxFbmQgJiYgbW9kaWZpZWRTdGFydCA8PSBtb2RpZmllZEVuZCAmJiB0aGlzLkVsZW1lbnRzQXJlRXF1YWwob3JpZ2luYWxTdGFydCwgbW9kaWZpZWRTdGFydCkpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnQrKztcbiAgICAgICAgICAgIG1vZGlmaWVkU3RhcnQrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIHRoZSBlbmQgb2YgdGhlIGRpZmZlcmVuY2VzXG4gICAgICAgIHdoaWxlIChvcmlnaW5hbEVuZCA+PSBvcmlnaW5hbFN0YXJ0ICYmIG1vZGlmaWVkRW5kID49IG1vZGlmaWVkU3RhcnQgJiYgdGhpcy5FbGVtZW50c0FyZUVxdWFsKG9yaWdpbmFsRW5kLCBtb2RpZmllZEVuZCkpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kLS07XG4gICAgICAgICAgICBtb2RpZmllZEVuZC0tO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluIHRoZSBzcGVjaWFsIGNhc2Ugd2hlcmUgd2UgZWl0aGVyIGhhdmUgYWxsIGluc2VydGlvbnMgb3IgYWxsIGRlbGV0aW9ucyBvciB0aGUgc2VxdWVuY2VzIGFyZSBpZGVudGljYWxcbiAgICAgICAgaWYgKG9yaWdpbmFsU3RhcnQgPiBvcmlnaW5hbEVuZCB8fCBtb2RpZmllZFN0YXJ0ID4gbW9kaWZpZWRFbmQpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VzID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKG1vZGlmaWVkU3RhcnQgPD0gbW9kaWZpZWRFbmQpIHtcbiAgICAgICAgICAgICAgICBEZWJ1Zy5Bc3NlcnQob3JpZ2luYWxTdGFydCA9PT0gb3JpZ2luYWxFbmQgKyAxLCAnb3JpZ2luYWxTdGFydCBzaG91bGQgb25seSBiZSBvbmUgbW9yZSB0aGFuIG9yaWdpbmFsRW5kJyk7XG4gICAgICAgICAgICAgICAgLy8gQWxsIGluc2VydGlvbnNcbiAgICAgICAgICAgICAgICBjaGFuZ2VzID0gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGlmZkNoYW5nZShvcmlnaW5hbFN0YXJ0LCAwLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZEVuZCAtIG1vZGlmaWVkU3RhcnQgKyAxKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcmlnaW5hbFN0YXJ0IDw9IG9yaWdpbmFsRW5kKSB7XG4gICAgICAgICAgICAgICAgRGVidWcuQXNzZXJ0KG1vZGlmaWVkU3RhcnQgPT09IG1vZGlmaWVkRW5kICsgMSwgJ21vZGlmaWVkU3RhcnQgc2hvdWxkIG9ubHkgYmUgb25lIG1vcmUgdGhhbiBtb2RpZmllZEVuZCcpO1xuICAgICAgICAgICAgICAgIC8vIEFsbCBkZWxldGlvbnNcbiAgICAgICAgICAgICAgICBjaGFuZ2VzID0gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGlmZkNoYW5nZShvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEVuZCAtIG9yaWdpbmFsU3RhcnQgKyAxLCBtb2RpZmllZFN0YXJ0LCAwKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBEZWJ1Zy5Bc3NlcnQob3JpZ2luYWxTdGFydCA9PT0gb3JpZ2luYWxFbmQgKyAxLCAnb3JpZ2luYWxTdGFydCBzaG91bGQgb25seSBiZSBvbmUgbW9yZSB0aGFuIG9yaWdpbmFsRW5kJyk7XG4gICAgICAgICAgICAgICAgRGVidWcuQXNzZXJ0KG1vZGlmaWVkU3RhcnQgPT09IG1vZGlmaWVkRW5kICsgMSwgJ21vZGlmaWVkU3RhcnQgc2hvdWxkIG9ubHkgYmUgb25lIG1vcmUgdGhhbiBtb2RpZmllZEVuZCcpO1xuICAgICAgICAgICAgICAgIC8vIElkZW50aWNhbCBzZXF1ZW5jZXMgLSBObyBkaWZmZXJlbmNlc1xuICAgICAgICAgICAgICAgIGNoYW5nZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoaXMgcHJvYmxlbSBjYW4gYmUgc29sdmVkIHVzaW5nIHRoZSBEaXZpZGUtQW5kLUNvbnF1ZXIgdGVjaG5pcXVlLlxuICAgICAgICB2YXIgbWlkT3JpZ2luYWxBcnIgPSBbMF0sIG1pZE1vZGlmaWVkQXJyID0gWzBdO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5Db21wdXRlUmVjdXJzaW9uUG9pbnQob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxFbmQsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkRW5kLCBtaWRPcmlnaW5hbEFyciwgbWlkTW9kaWZpZWRBcnIsIHF1aXRFYXJseUFycik7XG4gICAgICAgIHZhciBtaWRPcmlnaW5hbCA9IG1pZE9yaWdpbmFsQXJyWzBdO1xuICAgICAgICB2YXIgbWlkTW9kaWZpZWQgPSBtaWRNb2RpZmllZEFyclswXTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gUmVzdWx0IGlzIG5vdC1udWxsIHdoZW4gdGhlcmUgd2FzIGVub3VnaCBtZW1vcnkgdG8gY29tcHV0ZSB0aGUgY2hhbmdlcyB3aGlsZVxuICAgICAgICAgICAgLy8gc2VhcmNoaW5nIGZvciB0aGUgcmVjdXJzaW9uIHBvaW50XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFxdWl0RWFybHlBcnJbMF0pIHtcbiAgICAgICAgICAgIC8vIFdlIGNhbiBicmVhayB0aGUgcHJvYmxlbSBkb3duIHJlY3Vyc2l2ZWx5IGJ5IGZpbmRpbmcgdGhlIGNoYW5nZXMgaW4gdGhlXG4gICAgICAgICAgICAvLyBGaXJzdCBIYWxmOiAgIChvcmlnaW5hbFN0YXJ0LCBtb2RpZmllZFN0YXJ0KSB0byAobWlkT3JpZ2luYWwsIG1pZE1vZGlmaWVkKVxuICAgICAgICAgICAgLy8gU2Vjb25kIEhhbGY6ICAobWlkT3JpZ2luYWwgKyAxLCBtaW5Nb2RpZmllZCArIDEpIHRvIChvcmlnaW5hbEVuZCwgbW9kaWZpZWRFbmQpXG4gICAgICAgICAgICAvLyBOT1RFOiBDb21wdXRlRGlmZigpIGlzIGluY2x1c2l2ZSwgdGhlcmVmb3JlIHRoZSBzZWNvbmQgcmFuZ2Ugc3RhcnRzIG9uIHRoZSBuZXh0IHBvaW50XG4gICAgICAgICAgICB2YXIgbGVmdENoYW5nZXMgPSB0aGlzLkNvbXB1dGVEaWZmUmVjdXJzaXZlKG9yaWdpbmFsU3RhcnQsIG1pZE9yaWdpbmFsLCBtb2RpZmllZFN0YXJ0LCBtaWRNb2RpZmllZCwgcXVpdEVhcmx5QXJyKTtcbiAgICAgICAgICAgIHZhciByaWdodENoYW5nZXMgPSBbXTtcbiAgICAgICAgICAgIGlmICghcXVpdEVhcmx5QXJyWzBdKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRDaGFuZ2VzID0gdGhpcy5Db21wdXRlRGlmZlJlY3Vyc2l2ZShtaWRPcmlnaW5hbCArIDEsIG9yaWdpbmFsRW5kLCBtaWRNb2RpZmllZCArIDEsIG1vZGlmaWVkRW5kLCBxdWl0RWFybHlBcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZGlkJ3QgaGF2ZSB0aW1lIHRvIGZpbmlzaCB0aGUgZmlyc3QgaGFsZiwgc28gd2UgZG9uJ3QgaGF2ZSB0aW1lIHRvIGNvbXB1dGUgdGhpcyBoYWxmLlxuICAgICAgICAgICAgICAgIC8vIENvbnNpZGVyIHRoZSBlbnRpcmUgcmVzdCBvZiB0aGUgc2VxdWVuY2UgZGlmZmVyZW50LlxuICAgICAgICAgICAgICAgIHJpZ2h0Q2hhbmdlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IERpZmZDaGFuZ2UobWlkT3JpZ2luYWwgKyAxLCBvcmlnaW5hbEVuZCAtIChtaWRPcmlnaW5hbCArIDEpICsgMSwgbWlkTW9kaWZpZWQgKyAxLCBtb2RpZmllZEVuZCAtIChtaWRNb2RpZmllZCArIDEpICsgMSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29uY2F0ZW5hdGVDaGFuZ2VzKGxlZnRDaGFuZ2VzLCByaWdodENoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGhpdCBoZXJlLCB3ZSBxdWl0IGVhcmx5LCBhbmQgc28gY2FuJ3QgcmV0dXJuIGFueXRoaW5nIG1lYW5pbmdmdWxcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5ldyBEaWZmQ2hhbmdlKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsRW5kIC0gb3JpZ2luYWxTdGFydCArIDEsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkRW5kIC0gbW9kaWZpZWRTdGFydCArIDEpXG4gICAgICAgIF07XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5XQUxLVFJBQ0UgPSBmdW5jdGlvbiAoZGlhZ29uYWxGb3J3YXJkQmFzZSwgZGlhZ29uYWxGb3J3YXJkU3RhcnQsIGRpYWdvbmFsRm9yd2FyZEVuZCwgZGlhZ29uYWxGb3J3YXJkT2Zmc2V0LCBkaWFnb25hbFJldmVyc2VCYXNlLCBkaWFnb25hbFJldmVyc2VTdGFydCwgZGlhZ29uYWxSZXZlcnNlRW5kLCBkaWFnb25hbFJldmVyc2VPZmZzZXQsIGZvcndhcmRQb2ludHMsIHJldmVyc2VQb2ludHMsIG9yaWdpbmFsSW5kZXgsIG9yaWdpbmFsRW5kLCBtaWRPcmlnaW5hbEFyciwgbW9kaWZpZWRJbmRleCwgbW9kaWZpZWRFbmQsIG1pZE1vZGlmaWVkQXJyLCBkZWx0YUlzRXZlbiwgcXVpdEVhcmx5QXJyKSB7XG4gICAgICAgIHZhciBmb3J3YXJkQ2hhbmdlcyA9IG51bGwsIHJldmVyc2VDaGFuZ2VzID0gbnVsbDtcbiAgICAgICAgLy8gRmlyc3QsIHdhbGsgYmFja3dhcmQgdGhyb3VnaCB0aGUgZm9yd2FyZCBkaWFnb25hbHMgaGlzdG9yeVxuICAgICAgICB2YXIgY2hhbmdlSGVscGVyID0gbmV3IERpZmZDaGFuZ2VIZWxwZXIoKTtcbiAgICAgICAgdmFyIGRpYWdvbmFsTWluID0gZGlhZ29uYWxGb3J3YXJkU3RhcnQ7XG4gICAgICAgIHZhciBkaWFnb25hbE1heCA9IGRpYWdvbmFsRm9yd2FyZEVuZDtcbiAgICAgICAgdmFyIGRpYWdvbmFsUmVsYXRpdmUgPSAobWlkT3JpZ2luYWxBcnJbMF0gLSBtaWRNb2RpZmllZEFyclswXSkgLSBkaWFnb25hbEZvcndhcmRPZmZzZXQ7XG4gICAgICAgIHZhciBsYXN0T3JpZ2luYWxJbmRleCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgICAgIHZhciBoaXN0b3J5SW5kZXggPSB0aGlzLm1fZm9yd2FyZEhpc3RvcnkubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGRpYWdvbmFsO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRpYWdvbmFsIGluZGV4IGZyb20gdGhlIHJlbGF0aXZlIGRpYWdvbmFsIG51bWJlclxuICAgICAgICAgICAgZGlhZ29uYWwgPSBkaWFnb25hbFJlbGF0aXZlICsgZGlhZ29uYWxGb3J3YXJkQmFzZTtcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgd2hlcmUgd2UgY2FtZSBmcm9tXG4gICAgICAgICAgICBpZiAoZGlhZ29uYWwgPT09IGRpYWdvbmFsTWluIHx8IChkaWFnb25hbCA8IGRpYWdvbmFsTWF4ICYmIGZvcndhcmRQb2ludHNbZGlhZ29uYWwgLSAxXSA8IGZvcndhcmRQb2ludHNbZGlhZ29uYWwgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBsaW5lICh0aGUgZWxlbWVudCBpcyBhbiBpbnNlcnQpXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9IGZvcndhcmRQb2ludHNbZGlhZ29uYWwgKyAxXTtcbiAgICAgICAgICAgICAgICBtb2RpZmllZEluZGV4ID0gb3JpZ2luYWxJbmRleCAtIGRpYWdvbmFsUmVsYXRpdmUgLSBkaWFnb25hbEZvcndhcmRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsSW5kZXggPCBsYXN0T3JpZ2luYWxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VIZWxwZXIuTWFya05leHRDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdE9yaWdpbmFsSW5kZXggPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5BZGRNb2RpZmllZEVsZW1lbnQob3JpZ2luYWxJbmRleCArIDEsIG1vZGlmaWVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsUmVsYXRpdmUgPSAoZGlhZ29uYWwgKyAxKSAtIGRpYWdvbmFsRm9yd2FyZEJhc2U7IC8vU2V0dXAgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lICh0aGUgZWxlbWVudCBpcyBhIGRlbGV0aW9uKVxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsIC0gMV0gKyAxO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXggPSBvcmlnaW5hbEluZGV4IC0gZGlhZ29uYWxSZWxhdGl2ZSAtIGRpYWdvbmFsRm9yd2FyZE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxJbmRleCA8IGxhc3RPcmlnaW5hbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5NYXJrTmV4dENoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0T3JpZ2luYWxJbmRleCA9IG9yaWdpbmFsSW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5BZGRPcmlnaW5hbEVsZW1lbnQob3JpZ2luYWxJbmRleCwgbW9kaWZpZWRJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsUmVsYXRpdmUgPSAoZGlhZ29uYWwgLSAxKSAtIGRpYWdvbmFsRm9yd2FyZEJhc2U7IC8vU2V0dXAgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhpc3RvcnlJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yd2FyZFBvaW50cyA9IHRoaXMubV9mb3J3YXJkSGlzdG9yeVtoaXN0b3J5SW5kZXhdO1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsRm9yd2FyZEJhc2UgPSBmb3J3YXJkUG9pbnRzWzBdOyAvL1dlIHN0b3JlZCB0aGlzIGluIHRoZSBmaXJzdCBzcG90XG4gICAgICAgICAgICAgICAgZGlhZ29uYWxNaW4gPSAxO1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsTWF4ID0gZm9yd2FyZFBvaW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgtLWhpc3RvcnlJbmRleCA+PSAtMSk7XG4gICAgICAgIC8vIElyb25pY2FsbHksIHdlIGdldCB0aGUgZm9yd2FyZCBjaGFuZ2VzIGFzIHRoZSByZXZlcnNlIG9mIHRoZVxuICAgICAgICAvLyBvcmRlciB3ZSBhZGRlZCB0aGVtIHNpbmNlIHdlIHRlY2huaWNhbGx5IGFkZGVkIHRoZW0gYmFja3dhcmRzXG4gICAgICAgIGZvcndhcmRDaGFuZ2VzID0gY2hhbmdlSGVscGVyLmdldFJldmVyc2VDaGFuZ2VzKCk7XG4gICAgICAgIGlmIChxdWl0RWFybHlBcnJbMF0pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IENhbGN1bGF0ZSBhIHBhcnRpYWwgZnJvbSB0aGUgcmV2ZXJzZSBkaWFnb25hbHMuXG4gICAgICAgICAgICAvLyAgICAgICBGb3Igbm93LCBqdXN0IGFzc3VtZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBtaWRPcmlnaW5hbC9taWRNb2RpZmllZCBwb2ludCBpcyBhIGRpZmZcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFN0YXJ0UG9pbnQgPSBtaWRPcmlnaW5hbEFyclswXSArIDE7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRTdGFydFBvaW50ID0gbWlkTW9kaWZpZWRBcnJbMF0gKyAxO1xuICAgICAgICAgICAgaWYgKGZvcndhcmRDaGFuZ2VzICE9PSBudWxsICYmIGZvcndhcmRDaGFuZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEZvcndhcmRDaGFuZ2UgPSBmb3J3YXJkQ2hhbmdlc1tmb3J3YXJkQ2hhbmdlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0UG9pbnQgPSBNYXRoLm1heChvcmlnaW5hbFN0YXJ0UG9pbnQsIGxhc3RGb3J3YXJkQ2hhbmdlLmdldE9yaWdpbmFsRW5kKCkpO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRQb2ludCA9IE1hdGgubWF4KG1vZGlmaWVkU3RhcnRQb2ludCwgbGFzdEZvcndhcmRDaGFuZ2UuZ2V0TW9kaWZpZWRFbmQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXZlcnNlQ2hhbmdlcyA9IFtcbiAgICAgICAgICAgICAgICBuZXcgRGlmZkNoYW5nZShvcmlnaW5hbFN0YXJ0UG9pbnQsIG9yaWdpbmFsRW5kIC0gb3JpZ2luYWxTdGFydFBvaW50ICsgMSwgbW9kaWZpZWRTdGFydFBvaW50LCBtb2RpZmllZEVuZCAtIG1vZGlmaWVkU3RhcnRQb2ludCArIDEpXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm93IHdhbGsgYmFja3dhcmQgdGhyb3VnaCB0aGUgcmV2ZXJzZSBkaWFnb25hbHMgaGlzdG9yeVxuICAgICAgICAgICAgY2hhbmdlSGVscGVyID0gbmV3IERpZmZDaGFuZ2VIZWxwZXIoKTtcbiAgICAgICAgICAgIGRpYWdvbmFsTWluID0gZGlhZ29uYWxSZXZlcnNlU3RhcnQ7XG4gICAgICAgICAgICBkaWFnb25hbE1heCA9IGRpYWdvbmFsUmV2ZXJzZUVuZDtcbiAgICAgICAgICAgIGRpYWdvbmFsUmVsYXRpdmUgPSAobWlkT3JpZ2luYWxBcnJbMF0gLSBtaWRNb2RpZmllZEFyclswXSkgLSBkaWFnb25hbFJldmVyc2VPZmZzZXQ7XG4gICAgICAgICAgICBsYXN0T3JpZ2luYWxJbmRleCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICBoaXN0b3J5SW5kZXggPSAoZGVsdGFJc0V2ZW4pID8gdGhpcy5tX3JldmVyc2VIaXN0b3J5Lmxlbmd0aCAtIDEgOiB0aGlzLm1fcmV2ZXJzZUhpc3RvcnkubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGRpYWdvbmFsIGluZGV4IGZyb20gdGhlIHJlbGF0aXZlIGRpYWdvbmFsIG51bWJlclxuICAgICAgICAgICAgICAgIGRpYWdvbmFsID0gZGlhZ29uYWxSZWxhdGl2ZSArIGRpYWdvbmFsUmV2ZXJzZUJhc2U7XG4gICAgICAgICAgICAgICAgLy8gRmlndXJlIG91dCB3aGVyZSB3ZSBjYW1lIGZyb21cbiAgICAgICAgICAgICAgICBpZiAoZGlhZ29uYWwgPT09IGRpYWdvbmFsTWluIHx8IChkaWFnb25hbCA8IGRpYWdvbmFsTWF4ICYmIHJldmVyc2VQb2ludHNbZGlhZ29uYWwgLSAxXSA+PSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhvcml6b250YWwgbGluZSAodGhlIGVsZW1lbnQgaXMgYSBkZWxldGlvbikpXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsICsgMV0gLSAxO1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEluZGV4ID0gb3JpZ2luYWxJbmRleCAtIGRpYWdvbmFsUmVsYXRpdmUgLSBkaWFnb25hbFJldmVyc2VPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEluZGV4ID4gbGFzdE9yaWdpbmFsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5NYXJrTmV4dENoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhc3RPcmlnaW5hbEluZGV4ID0gb3JpZ2luYWxJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5BZGRPcmlnaW5hbEVsZW1lbnQob3JpZ2luYWxJbmRleCArIDEsIG1vZGlmaWVkSW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlhZ29uYWxSZWxhdGl2ZSA9IChkaWFnb25hbCArIDEpIC0gZGlhZ29uYWxSZXZlcnNlQmFzZTsgLy9TZXR1cCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBsaW5lICh0aGUgZWxlbWVudCBpcyBhbiBpbnNlcnRpb24pXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXggPSBvcmlnaW5hbEluZGV4IC0gZGlhZ29uYWxSZWxhdGl2ZSAtIGRpYWdvbmFsUmV2ZXJzZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsSW5kZXggPiBsYXN0T3JpZ2luYWxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlSGVscGVyLk1hcmtOZXh0Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE9yaWdpbmFsSW5kZXggPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VIZWxwZXIuQWRkTW9kaWZpZWRFbGVtZW50KG9yaWdpbmFsSW5kZXggKyAxLCBtb2RpZmllZEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsUmVsYXRpdmUgPSAoZGlhZ29uYWwgLSAxKSAtIGRpYWdvbmFsUmV2ZXJzZUJhc2U7IC8vU2V0dXAgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVBvaW50cyA9IHRoaXMubV9yZXZlcnNlSGlzdG9yeVtoaXN0b3J5SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBkaWFnb25hbFJldmVyc2VCYXNlID0gcmV2ZXJzZVBvaW50c1swXTsgLy9XZSBzdG9yZWQgdGhpcyBpbiB0aGUgZmlyc3Qgc3BvdFxuICAgICAgICAgICAgICAgICAgICBkaWFnb25hbE1pbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsTWF4ID0gcmV2ZXJzZVBvaW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKC0taGlzdG9yeUluZGV4ID49IC0xKTtcbiAgICAgICAgICAgIC8vIFRoZXJlIGFyZSBjYXNlcyB3aGVyZSB0aGUgcmV2ZXJzZSBoaXN0b3J5IHdpbGwgZmluZCBkaWZmcyB0aGF0XG4gICAgICAgICAgICAvLyBhcmUgY29ycmVjdCwgYnV0IG5vdCBpbnR1aXRpdmUsIHNvIHdlIG5lZWQgc2hpZnQgdGhlbS5cbiAgICAgICAgICAgIHJldmVyc2VDaGFuZ2VzID0gY2hhbmdlSGVscGVyLmdldENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5Db25jYXRlbmF0ZUNoYW5nZXMoZm9yd2FyZENoYW5nZXMsIHJldmVyc2VDaGFuZ2VzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIHRoZSByYW5nZSB0byBjb21wdXRlIHRoZSBkaWZmIG9uLCB0aGlzIG1ldGhvZCBmaW5kcyB0aGUgcG9pbnQ6XG4gICAgICogKG1pZE9yaWdpbmFsLCBtaWRNb2RpZmllZClcbiAgICAgKiB0aGF0IGV4aXN0cyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBMQ1Mgb2YgdGhlIHR3byBzZXF1ZW5jZXMgYW5kXG4gICAgICogaXMgdGhlIHBvaW50IGF0IHdoaWNoIHRoZSBMQ1MgcHJvYmxlbSBtYXkgYmUgYnJva2VuIGRvd24gcmVjdXJzaXZlbHkuXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCB0cnkgdG8ga2VlcCB0aGUgTENTIHRyYWNlIGluIG1lbW9yeS4gSWYgdGhlIExDUyByZWN1cnNpb25cbiAgICAgKiBwb2ludCBpcyBjYWxjdWxhdGVkIGFuZCB0aGUgZnVsbCB0cmFjZSBpcyBhdmFpbGFibGUgaW4gbWVtb3J5LCB0aGVuIHRoaXMgbWV0aG9kXG4gICAgICogd2lsbCByZXR1cm4gdGhlIGNoYW5nZSBsaXN0LlxuICAgICAqIEBwYXJhbSBvcmlnaW5hbFN0YXJ0IFRoZSBzdGFydCBib3VuZCBvZiB0aGUgb3JpZ2luYWwgc2VxdWVuY2UgcmFuZ2VcbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxFbmQgVGhlIGVuZCBib3VuZCBvZiB0aGUgb3JpZ2luYWwgc2VxdWVuY2UgcmFuZ2VcbiAgICAgKiBAcGFyYW0gbW9kaWZpZWRTdGFydCBUaGUgc3RhcnQgYm91bmQgb2YgdGhlIG1vZGlmaWVkIHNlcXVlbmNlIHJhbmdlXG4gICAgICogQHBhcmFtIG1vZGlmaWVkRW5kIFRoZSBlbmQgYm91bmQgb2YgdGhlIG1vZGlmaWVkIHNlcXVlbmNlIHJhbmdlXG4gICAgICogQHBhcmFtIG1pZE9yaWdpbmFsIFRoZSBtaWRkbGUgcG9pbnQgb2YgdGhlIG9yaWdpbmFsIHNlcXVlbmNlIHJhbmdlXG4gICAgICogQHBhcmFtIG1pZE1vZGlmaWVkIFRoZSBtaWRkbGUgcG9pbnQgb2YgdGhlIG1vZGlmaWVkIHNlcXVlbmNlIHJhbmdlXG4gICAgICogQHJldHVybnMgVGhlIGRpZmYgY2hhbmdlcywgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgbnVsbFxuICAgICAqL1xuICAgIExjc0RpZmYucHJvdG90eXBlLkNvbXB1dGVSZWN1cnNpb25Qb2ludCA9IGZ1bmN0aW9uIChvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEVuZCwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRFbmQsIG1pZE9yaWdpbmFsQXJyLCBtaWRNb2RpZmllZEFyciwgcXVpdEVhcmx5QXJyKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEluZGV4ID0gMCwgbW9kaWZpZWRJbmRleCA9IDA7XG4gICAgICAgIHZhciBkaWFnb25hbEZvcndhcmRTdGFydCA9IDAsIGRpYWdvbmFsRm9yd2FyZEVuZCA9IDA7XG4gICAgICAgIHZhciBkaWFnb25hbFJldmVyc2VTdGFydCA9IDAsIGRpYWdvbmFsUmV2ZXJzZUVuZCA9IDA7XG4gICAgICAgIHZhciBudW1EaWZmZXJlbmNlcztcbiAgICAgICAgLy8gVG8gdHJhdmVyc2UgdGhlIGVkaXQgZ3JhcGggYW5kIHByb2R1Y2UgdGhlIHByb3BlciBMQ1MsIG91ciBhY3R1YWxcbiAgICAgICAgLy8gc3RhcnQgcG9zaXRpb24gaXMganVzdCBvdXRzaWRlIHRoZSBnaXZlbiBib3VuZGFyeVxuICAgICAgICBvcmlnaW5hbFN0YXJ0LS07XG4gICAgICAgIG1vZGlmaWVkU3RhcnQtLTtcbiAgICAgICAgLy8gV2Ugc2V0IHRoZXNlIHVwIHRvIG1ha2UgdGhlIGNvbXBpbGVyIGhhcHB5LCBidXQgdGhleSB3aWxsXG4gICAgICAgIC8vIGJlIHJlcGxhY2VkIGJlZm9yZSB3ZSByZXR1cm4gd2l0aCB0aGUgYWN0dWFsIHJlY3Vyc2lvbiBwb2ludFxuICAgICAgICBtaWRPcmlnaW5hbEFyclswXSA9IDA7XG4gICAgICAgIG1pZE1vZGlmaWVkQXJyWzBdID0gMDtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBoaXN0b3J5XG4gICAgICAgIHRoaXMubV9mb3J3YXJkSGlzdG9yeSA9IFtdO1xuICAgICAgICB0aGlzLm1fcmV2ZXJzZUhpc3RvcnkgPSBbXTtcbiAgICAgICAgLy8gRWFjaCBjZWxsIGluIHRoZSB0d28gYXJyYXlzIGNvcnJlc3BvbmRzIHRvIGEgZGlhZ29uYWwgaW4gdGhlIGVkaXQgZ3JhcGguXG4gICAgICAgIC8vIFRoZSBpbnRlZ2VyIHZhbHVlIGluIHRoZSBjZWxsIHJlcHJlc2VudHMgdGhlIG9yaWdpbmFsSW5kZXggb2YgdGhlIGZ1cnRoZXN0XG4gICAgICAgIC8vIHJlYWNoaW5nIHBvaW50IGZvdW5kIHNvIGZhciB0aGF0IGVuZHMgaW4gdGhhdCBkaWFnb25hbC5cbiAgICAgICAgLy8gVGhlIG1vZGlmaWVkSW5kZXggY2FuIGJlIGNvbXB1dGVkIG1hdGhlbWF0aWNhbGx5IGZyb20gdGhlIG9yaWdpbmFsSW5kZXggYW5kIHRoZSBkaWFnb25hbCBudW1iZXIuXG4gICAgICAgIHZhciBtYXhEaWZmZXJlbmNlcyA9IChvcmlnaW5hbEVuZCAtIG9yaWdpbmFsU3RhcnQpICsgKG1vZGlmaWVkRW5kIC0gbW9kaWZpZWRTdGFydCk7XG4gICAgICAgIHZhciBudW1EaWFnb25hbHMgPSBtYXhEaWZmZXJlbmNlcyArIDE7XG4gICAgICAgIHZhciBmb3J3YXJkUG9pbnRzID0gbmV3IEFycmF5KG51bURpYWdvbmFscyk7XG4gICAgICAgIHZhciByZXZlcnNlUG9pbnRzID0gbmV3IEFycmF5KG51bURpYWdvbmFscyk7XG4gICAgICAgIC8vIGRpYWdvbmFsRm9yd2FyZEJhc2U6IEluZGV4IGludG8gZm9yd2FyZFBvaW50cyBvZiB0aGUgZGlhZ29uYWwgd2hpY2ggcGFzc2VzIHRocm91Z2ggKG9yaWdpbmFsU3RhcnQsIG1vZGlmaWVkU3RhcnQpXG4gICAgICAgIC8vIGRpYWdvbmFsUmV2ZXJzZUJhc2U6IEluZGV4IGludG8gcmV2ZXJzZVBvaW50cyBvZiB0aGUgZGlhZ29uYWwgd2hpY2ggcGFzc2VzIHRocm91Z2ggKG9yaWdpbmFsRW5kLCBtb2RpZmllZEVuZClcbiAgICAgICAgdmFyIGRpYWdvbmFsRm9yd2FyZEJhc2UgPSAobW9kaWZpZWRFbmQgLSBtb2RpZmllZFN0YXJ0KTtcbiAgICAgICAgdmFyIGRpYWdvbmFsUmV2ZXJzZUJhc2UgPSAob3JpZ2luYWxFbmQgLSBvcmlnaW5hbFN0YXJ0KTtcbiAgICAgICAgLy8gZGlhZ29uYWxGb3J3YXJkT2Zmc2V0OiBHZW9tZXRyaWMgb2Zmc2V0IHdoaWNoIGFsbG93cyBtb2RpZmllZEluZGV4IHRvIGJlIGNvbXB1dGVkIGZyb20gb3JpZ2luYWxJbmRleCBhbmQgdGhlXG4gICAgICAgIC8vICAgIGRpYWdvbmFsIG51bWJlciAocmVsYXRpdmUgdG8gZGlhZ29uYWxGb3J3YXJkQmFzZSlcbiAgICAgICAgLy8gZGlhZ29uYWxSZXZlcnNlT2Zmc2V0OiBHZW9tZXRyaWMgb2Zmc2V0IHdoaWNoIGFsbG93cyBtb2RpZmllZEluZGV4IHRvIGJlIGNvbXB1dGVkIGZyb20gb3JpZ2luYWxJbmRleCBhbmQgdGhlXG4gICAgICAgIC8vICAgIGRpYWdvbmFsIG51bWJlciAocmVsYXRpdmUgdG8gZGlhZ29uYWxSZXZlcnNlQmFzZSlcbiAgICAgICAgdmFyIGRpYWdvbmFsRm9yd2FyZE9mZnNldCA9IChvcmlnaW5hbFN0YXJ0IC0gbW9kaWZpZWRTdGFydCk7XG4gICAgICAgIHZhciBkaWFnb25hbFJldmVyc2VPZmZzZXQgPSAob3JpZ2luYWxFbmQgLSBtb2RpZmllZEVuZCk7XG4gICAgICAgIC8vIGRlbHRhOiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBlbmQgZGlhZ29uYWwgYW5kIHRoZSBzdGFydCBkaWFnb25hbC4gVGhpcyBpcyB1c2VkIHRvIHJlbGF0ZSBkaWFnb25hbCBudW1iZXJzXG4gICAgICAgIC8vICAgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IGRpYWdvbmFsIHdpdGggZGlhZ29uYWwgbnVtYmVycyByZWxhdGl2ZSB0byB0aGUgZW5kIGRpYWdvbmFsLlxuICAgICAgICAvLyBUaGUgRXZlbi9PZGRuLW5lc3Mgb2YgdGhpcyBkZWx0YSBpcyBpbXBvcnRhbnQgZm9yIGRldGVybWluaW5nIHdoZW4gd2Ugc2hvdWxkIGNoZWNrIGZvciBvdmVybGFwXG4gICAgICAgIHZhciBkZWx0YSA9IGRpYWdvbmFsUmV2ZXJzZUJhc2UgLSBkaWFnb25hbEZvcndhcmRCYXNlO1xuICAgICAgICB2YXIgZGVsdGFJc0V2ZW4gPSAoZGVsdGEgJSAyID09PSAwKTtcbiAgICAgICAgLy8gSGVyZSB3ZSBzZXQgdXAgdGhlIHN0YXJ0IGFuZCBlbmQgcG9pbnRzIGFzIHRoZSBmdXJ0aGVzdCBwb2ludHMgZm91bmQgc28gZmFyXG4gICAgICAgIC8vIGluIGJvdGggdGhlIGZvcndhcmQgYW5kIHJldmVyc2UgZGlyZWN0aW9ucywgcmVzcGVjdGl2ZWx5XG4gICAgICAgIGZvcndhcmRQb2ludHNbZGlhZ29uYWxGb3J3YXJkQmFzZV0gPSBvcmlnaW5hbFN0YXJ0O1xuICAgICAgICByZXZlcnNlUG9pbnRzW2RpYWdvbmFsUmV2ZXJzZUJhc2VdID0gb3JpZ2luYWxFbmQ7XG4gICAgICAgIC8vIFJlbWVtYmVyIGlmIHdlIHF1aXQgZWFybHksIGFuZCB0aHVzIG5lZWQgdG8gZG8gYSBiZXN0LWVmZm9ydCByZXN1bHQgaW5zdGVhZCBvZiBhIHJlYWwgcmVzdWx0LlxuICAgICAgICBxdWl0RWFybHlBcnJbMF0gPSBmYWxzZTtcbiAgICAgICAgLy8gQSBjb3VwbGUgb2YgcG9pbnRzOlxuICAgICAgICAvLyAtLVdpdGggdGhpcyBtZXRob2QsIHdlIGl0ZXJhdGUgb24gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSB0d28gc2VxdWVuY2VzLlxuICAgICAgICAvLyAgIFRoZSBtb3JlIGRpZmZlcmVuY2VzIHRoZXJlIGFjdHVhbGx5IGFyZSwgdGhlIGxvbmdlciB0aGlzIHdpbGwgdGFrZS5cbiAgICAgICAgLy8gLS1BbHNvLCBhcyB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzIGluY3JlYXNlcywgd2UgaGF2ZSB0byBzZWFyY2ggb24gZGlhZ29uYWxzIGZ1cnRoZXJcbiAgICAgICAgLy8gICBhd2F5IGZyb20gdGhlIHJlZmVyZW5jZSBkaWFnb25hbCAod2hpY2ggaXMgZGlhZ29uYWxGb3J3YXJkQmFzZSBmb3IgZm9yd2FyZCwgZGlhZ29uYWxSZXZlcnNlQmFzZSBmb3IgcmV2ZXJzZSkuXG4gICAgICAgIC8vIC0tV2UgZXh0ZW5kIG9uIGV2ZW4gZGlhZ29uYWxzIChyZWxhdGl2ZSB0byB0aGUgcmVmZXJlbmNlIGRpYWdvbmFsKSBvbmx5IHdoZW4gbnVtRGlmZmVyZW5jZXNcbiAgICAgICAgLy8gICBpcyBldmVuIGFuZCBvZGQgZGlhZ29uYWxzIG9ubHkgd2hlbiBudW1EaWZmZXJlbmNlcyBpcyBvZGQuXG4gICAgICAgIHZhciBkaWFnb25hbCwgdGVtcE9yaWdpbmFsSW5kZXg7XG4gICAgICAgIGZvciAobnVtRGlmZmVyZW5jZXMgPSAxOyBudW1EaWZmZXJlbmNlcyA8PSAobWF4RGlmZmVyZW5jZXMgLyAyKSArIDE7IG51bURpZmZlcmVuY2VzKyspIHtcbiAgICAgICAgICAgIHZhciBmdXJ0aGVzdE9yaWdpbmFsSW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIGZ1cnRoZXN0TW9kaWZpZWRJbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBSdW4gdGhlIGFsZ29yaXRobSBpbiB0aGUgZm9yd2FyZCBkaXJlY3Rpb25cbiAgICAgICAgICAgIGRpYWdvbmFsRm9yd2FyZFN0YXJ0ID0gdGhpcy5DbGlwRGlhZ29uYWxCb3VuZChkaWFnb25hbEZvcndhcmRCYXNlIC0gbnVtRGlmZmVyZW5jZXMsIG51bURpZmZlcmVuY2VzLCBkaWFnb25hbEZvcndhcmRCYXNlLCBudW1EaWFnb25hbHMpO1xuICAgICAgICAgICAgZGlhZ29uYWxGb3J3YXJkRW5kID0gdGhpcy5DbGlwRGlhZ29uYWxCb3VuZChkaWFnb25hbEZvcndhcmRCYXNlICsgbnVtRGlmZmVyZW5jZXMsIG51bURpZmZlcmVuY2VzLCBkaWFnb25hbEZvcndhcmRCYXNlLCBudW1EaWFnb25hbHMpO1xuICAgICAgICAgICAgZm9yIChkaWFnb25hbCA9IGRpYWdvbmFsRm9yd2FyZFN0YXJ0OyBkaWFnb25hbCA8PSBkaWFnb25hbEZvcndhcmRFbmQ7IGRpYWdvbmFsICs9IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBTVEVQIDE6IFdlIGV4dGVuZCB0aGUgZnVydGhlc3QgcmVhY2hpbmcgcG9pbnQgaW4gdGhlIHByZXNlbnQgZGlhZ29uYWxcbiAgICAgICAgICAgICAgICAvLyBieSBsb29raW5nIGF0IHRoZSBkaWFnb25hbHMgYWJvdmUgYW5kIGJlbG93IGFuZCBwaWNraW5nIHRoZSBvbmUgd2hvc2UgcG9pbnRcbiAgICAgICAgICAgICAgICAvLyBpcyBmdXJ0aGVyIGF3YXkgZnJvbSB0aGUgc3RhcnQgcG9pbnQgKG9yaWdpbmFsU3RhcnQsIG1vZGlmaWVkU3RhcnQpXG4gICAgICAgICAgICAgICAgaWYgKGRpYWdvbmFsID09PSBkaWFnb25hbEZvcndhcmRTdGFydCB8fCAoZGlhZ29uYWwgPCBkaWFnb25hbEZvcndhcmRFbmQgJiYgZm9yd2FyZFBvaW50c1tkaWFnb25hbCAtIDFdIDwgZm9yd2FyZFBvaW50c1tkaWFnb25hbCArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEluZGV4ID0gZm9yd2FyZFBvaW50c1tkaWFnb25hbCArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9IGZvcndhcmRQb2ludHNbZGlhZ29uYWwgLSAxXSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXggPSBvcmlnaW5hbEluZGV4IC0gKGRpYWdvbmFsIC0gZGlhZ29uYWxGb3J3YXJkQmFzZSkgLSBkaWFnb25hbEZvcndhcmRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBvcmlnaW5hbEluZGV4IHNvIHdlIGNhbiB0ZXN0IGZvciBmYWxzZSBvdmVybGFwIGluIHN0ZXAgM1xuICAgICAgICAgICAgICAgIHRlbXBPcmlnaW5hbEluZGV4ID0gb3JpZ2luYWxJbmRleDtcbiAgICAgICAgICAgICAgICAvLyBTVEVQIDI6IFdlIGNhbiBjb250aW51ZSB0byBleHRlbmQgdGhlIGZ1cnRoZXN0IHJlYWNoaW5nIHBvaW50IGluIHRoZSBwcmVzZW50IGRpYWdvbmFsXG4gICAgICAgICAgICAgICAgLy8gc28gbG9uZyBhcyB0aGUgZWxlbWVudHMgYXJlIGVxdWFsLlxuICAgICAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbEluZGV4IDwgb3JpZ2luYWxFbmQgJiYgbW9kaWZpZWRJbmRleCA8IG1vZGlmaWVkRW5kICYmIHRoaXMuRWxlbWVudHNBcmVFcXVhbChvcmlnaW5hbEluZGV4ICsgMSwgbW9kaWZpZWRJbmRleCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsXSA9IG9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsSW5kZXggKyBtb2RpZmllZEluZGV4ID4gZnVydGhlc3RPcmlnaW5hbEluZGV4ICsgZnVydGhlc3RNb2RpZmllZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1cnRoZXN0T3JpZ2luYWxJbmRleCA9IG9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGZ1cnRoZXN0TW9kaWZpZWRJbmRleCA9IG1vZGlmaWVkSW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNURVAgMzogSWYgZGVsdGEgaXMgb2RkIChvdmVybGFwIGZpcnN0IGhhcHBlbnMgb24gZm9yd2FyZCB3aGVuIGRlbHRhIGlzIG9kZClcbiAgICAgICAgICAgICAgICAvLyBhbmQgZGlhZ29uYWwgaXMgaW4gdGhlIHJhbmdlIG9mIHJldmVyc2UgZGlhZ29uYWxzIGNvbXB1dGVkIGZvciBudW1EaWZmZXJlbmNlcy0xXG4gICAgICAgICAgICAgICAgLy8gKHRoZSBwcmV2aW91cyBpdGVyYXRpb247IHdlIGhhdmVuJ3QgY29tcHV0ZWQgcmV2ZXJzZSBkaWFnb25hbHMgZm9yIG51bURpZmZlcmVuY2VzIHlldClcbiAgICAgICAgICAgICAgICAvLyB0aGVuIGNoZWNrIGZvciBvdmVybGFwLlxuICAgICAgICAgICAgICAgIGlmICghZGVsdGFJc0V2ZW4gJiYgTWF0aC5hYnMoZGlhZ29uYWwgLSBkaWFnb25hbFJldmVyc2VCYXNlKSA8PSAobnVtRGlmZmVyZW5jZXMgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxJbmRleCA+PSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkT3JpZ2luYWxBcnJbMF0gPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkTW9kaWZpZWRBcnJbMF0gPSBtb2RpZmllZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBPcmlnaW5hbEluZGV4IDw9IHJldmVyc2VQb2ludHNbZGlhZ29uYWxdICYmIE1heERpZmZlcmVuY2VzSGlzdG9yeSA+IDAgJiYgbnVtRGlmZmVyZW5jZXMgPD0gKE1heERpZmZlcmVuY2VzSGlzdG9yeSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQklOR08hIFdlIG92ZXJsYXBwZWQsIGFuZCB3ZSBoYXZlIHRoZSBmdWxsIHRyYWNlIGluIG1lbW9yeSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XQUxLVFJBQ0UoZGlhZ29uYWxGb3J3YXJkQmFzZSwgZGlhZ29uYWxGb3J3YXJkU3RhcnQsIGRpYWdvbmFsRm9yd2FyZEVuZCwgZGlhZ29uYWxGb3J3YXJkT2Zmc2V0LCBkaWFnb25hbFJldmVyc2VCYXNlLCBkaWFnb25hbFJldmVyc2VTdGFydCwgZGlhZ29uYWxSZXZlcnNlRW5kLCBkaWFnb25hbFJldmVyc2VPZmZzZXQsIGZvcndhcmRQb2ludHMsIHJldmVyc2VQb2ludHMsIG9yaWdpbmFsSW5kZXgsIG9yaWdpbmFsRW5kLCBtaWRPcmlnaW5hbEFyciwgbW9kaWZpZWRJbmRleCwgbW9kaWZpZWRFbmQsIG1pZE1vZGlmaWVkQXJyLCBkZWx0YUlzRXZlbiwgcXVpdEVhcmx5QXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVpdGhlciBmYWxzZSBvdmVybGFwLCBvciB3ZSBkaWRuJ3QgaGF2ZSBlbm91Z2ggbWVtb3J5IGZvciB0aGUgZnVsbCB0cmFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1c3QgcmV0dXJuIHRoZSByZWN1cnNpb24gcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBzaG91bGQgYmUgcXVpdHRpbmcgZWFybHksIGJlZm9yZSBtb3Zpbmcgb24gdG8gdGhlIG5leHQgaXRlcmF0aW9uLlxuICAgICAgICAgICAgdmFyIG1hdGNoTGVuZ3RoT2ZMb25nZXN0ID0gKChmdXJ0aGVzdE9yaWdpbmFsSW5kZXggLSBvcmlnaW5hbFN0YXJ0KSArIChmdXJ0aGVzdE1vZGlmaWVkSW5kZXggLSBtb2RpZmllZFN0YXJ0KSAtIG51bURpZmZlcmVuY2VzKSAvIDI7XG4gICAgICAgICAgICBpZiAodGhpcy5Db250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUgIT09IG51bGwgJiYgIXRoaXMuQ29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlKGZ1cnRoZXN0T3JpZ2luYWxJbmRleCwgdGhpcy5PcmlnaW5hbFNlcXVlbmNlLCBtYXRjaExlbmd0aE9mTG9uZ2VzdCkpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBjYW4ndCBmaW5pc2gsIHNvIHNraXAgYWhlYWQgdG8gZ2VuZXJhdGluZyBhIHJlc3VsdCBmcm9tIHdoYXQgd2UgaGF2ZS5cbiAgICAgICAgICAgICAgICBxdWl0RWFybHlBcnJbMF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgZnVydGhlc3QgZGlzdGFuY2Ugd2UgZ290IGluIHRoZSBmb3J3YXJkIGRpcmVjdGlvbi5cbiAgICAgICAgICAgICAgICBtaWRPcmlnaW5hbEFyclswXSA9IGZ1cnRoZXN0T3JpZ2luYWxJbmRleDtcbiAgICAgICAgICAgICAgICBtaWRNb2RpZmllZEFyclswXSA9IGZ1cnRoZXN0TW9kaWZpZWRJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hMZW5ndGhPZkxvbmdlc3QgPiAwICYmIE1heERpZmZlcmVuY2VzSGlzdG9yeSA+IDAgJiYgbnVtRGlmZmVyZW5jZXMgPD0gKE1heERpZmZlcmVuY2VzSGlzdG9yeSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVub3VnaCBvZiB0aGUgaGlzdG9yeSBpcyBpbiBtZW1vcnkgdG8gd2FsayBpdCBiYWNrd2FyZHNcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV0FMS1RSQUNFKGRpYWdvbmFsRm9yd2FyZEJhc2UsIGRpYWdvbmFsRm9yd2FyZFN0YXJ0LCBkaWFnb25hbEZvcndhcmRFbmQsIGRpYWdvbmFsRm9yd2FyZE9mZnNldCwgZGlhZ29uYWxSZXZlcnNlQmFzZSwgZGlhZ29uYWxSZXZlcnNlU3RhcnQsIGRpYWdvbmFsUmV2ZXJzZUVuZCwgZGlhZ29uYWxSZXZlcnNlT2Zmc2V0LCBmb3J3YXJkUG9pbnRzLCByZXZlcnNlUG9pbnRzLCBvcmlnaW5hbEluZGV4LCBvcmlnaW5hbEVuZCwgbWlkT3JpZ2luYWxBcnIsIG1vZGlmaWVkSW5kZXgsIG1vZGlmaWVkRW5kLCBtaWRNb2RpZmllZEFyciwgZGVsdGFJc0V2ZW4sIHF1aXRFYXJseUFycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkaWRuJ3QgYWN0dWFsbHkgcmVtZW1iZXIgZW5vdWdoIG9mIHRoZSBoaXN0b3J5LlxuICAgICAgICAgICAgICAgICAgICAvL1NpbmNlIHdlIGFyZSBxdWl0aW5nIHRoZSBkaWZmIGVhcmx5LCB3ZSBuZWVkIHRvIHNoaWZ0IGJhY2sgdGhlIG9yaWdpbmFsU3RhcnQgYW5kIG1vZGlmaWVkIHN0YXJ0XG4gICAgICAgICAgICAgICAgICAgIC8vYmFjayBpbnRvIHRoZSBib3VuZGFyeSBsaW1pdHMgc2luY2Ugd2UgZGVjcmVtZW50ZWQgdGhlaXIgdmFsdWUgYWJvdmUgYmV5b25kIHRoZSBib3VuZGFyeSBsaW1pdC5cbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdGFydCsrO1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlmZkNoYW5nZShvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEVuZCAtIG9yaWdpbmFsU3RhcnQgKyAxLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZEVuZCAtIG1vZGlmaWVkU3RhcnQgKyAxKVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJ1biB0aGUgYWxnb3JpdGhtIGluIHRoZSByZXZlcnNlIGRpcmVjdGlvblxuICAgICAgICAgICAgZGlhZ29uYWxSZXZlcnNlU3RhcnQgPSB0aGlzLkNsaXBEaWFnb25hbEJvdW5kKGRpYWdvbmFsUmV2ZXJzZUJhc2UgLSBudW1EaWZmZXJlbmNlcywgbnVtRGlmZmVyZW5jZXMsIGRpYWdvbmFsUmV2ZXJzZUJhc2UsIG51bURpYWdvbmFscyk7XG4gICAgICAgICAgICBkaWFnb25hbFJldmVyc2VFbmQgPSB0aGlzLkNsaXBEaWFnb25hbEJvdW5kKGRpYWdvbmFsUmV2ZXJzZUJhc2UgKyBudW1EaWZmZXJlbmNlcywgbnVtRGlmZmVyZW5jZXMsIGRpYWdvbmFsUmV2ZXJzZUJhc2UsIG51bURpYWdvbmFscyk7XG4gICAgICAgICAgICBmb3IgKGRpYWdvbmFsID0gZGlhZ29uYWxSZXZlcnNlU3RhcnQ7IGRpYWdvbmFsIDw9IGRpYWdvbmFsUmV2ZXJzZUVuZDsgZGlhZ29uYWwgKz0gMikge1xuICAgICAgICAgICAgICAgIC8vIFNURVAgMTogV2UgZXh0ZW5kIHRoZSBmdXJ0aGVzdCByZWFjaGluZyBwb2ludCBpbiB0aGUgcHJlc2VudCBkaWFnb25hbFxuICAgICAgICAgICAgICAgIC8vIGJ5IGxvb2tpbmcgYXQgdGhlIGRpYWdvbmFscyBhYm92ZSBhbmQgYmVsb3cgYW5kIHBpY2tpbmcgdGhlIG9uZSB3aG9zZSBwb2ludFxuICAgICAgICAgICAgICAgIC8vIGlzIGZ1cnRoZXIgYXdheSBmcm9tIHRoZSBzdGFydCBwb2ludCAob3JpZ2luYWxFbmQsIG1vZGlmaWVkRW5kKVxuICAgICAgICAgICAgICAgIGlmIChkaWFnb25hbCA9PT0gZGlhZ29uYWxSZXZlcnNlU3RhcnQgfHwgKGRpYWdvbmFsIDwgZGlhZ29uYWxSZXZlcnNlRW5kICYmIHJldmVyc2VQb2ludHNbZGlhZ29uYWwgLSAxXSA+PSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsICsgMV0gLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9IHJldmVyc2VQb2ludHNbZGlhZ29uYWwgLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRJbmRleCA9IG9yaWdpbmFsSW5kZXggLSAoZGlhZ29uYWwgLSBkaWFnb25hbFJldmVyc2VCYXNlKSAtIGRpYWdvbmFsUmV2ZXJzZU9mZnNldDtcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IG9yaWdpbmFsSW5kZXggc28gd2UgY2FuIHRlc3QgZm9yIGZhbHNlIG92ZXJsYXBcbiAgICAgICAgICAgICAgICB0ZW1wT3JpZ2luYWxJbmRleCA9IG9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gU1RFUCAyOiBXZSBjYW4gY29udGludWUgdG8gZXh0ZW5kIHRoZSBmdXJ0aGVzdCByZWFjaGluZyBwb2ludCBpbiB0aGUgcHJlc2VudCBkaWFnb25hbFxuICAgICAgICAgICAgICAgIC8vIGFzIGxvbmcgYXMgdGhlIGVsZW1lbnRzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxJbmRleCA+IG9yaWdpbmFsU3RhcnQgJiYgbW9kaWZpZWRJbmRleCA+IG1vZGlmaWVkU3RhcnQgJiYgdGhpcy5FbGVtZW50c0FyZUVxdWFsKG9yaWdpbmFsSW5kZXgsIG1vZGlmaWVkSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRJbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXZlcnNlUG9pbnRzW2RpYWdvbmFsXSA9IG9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gU1RFUCA0OiBJZiBkZWx0YSBpcyBldmVuIChvdmVybGFwIGZpcnN0IGhhcHBlbnMgb24gcmV2ZXJzZSB3aGVuIGRlbHRhIGlzIGV2ZW4pXG4gICAgICAgICAgICAgICAgLy8gYW5kIGRpYWdvbmFsIGlzIGluIHRoZSByYW5nZSBvZiBmb3J3YXJkIGRpYWdvbmFscyBjb21wdXRlZCBmb3IgbnVtRGlmZmVyZW5jZXNcbiAgICAgICAgICAgICAgICAvLyB0aGVuIGNoZWNrIGZvciBvdmVybGFwLlxuICAgICAgICAgICAgICAgIGlmIChkZWx0YUlzRXZlbiAmJiBNYXRoLmFicyhkaWFnb25hbCAtIGRpYWdvbmFsRm9yd2FyZEJhc2UpIDw9IG51bURpZmZlcmVuY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEluZGV4IDw9IGZvcndhcmRQb2ludHNbZGlhZ29uYWxdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRPcmlnaW5hbEFyclswXSA9IG9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRNb2RpZmllZEFyclswXSA9IG1vZGlmaWVkSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcE9yaWdpbmFsSW5kZXggPj0gZm9yd2FyZFBvaW50c1tkaWFnb25hbF0gJiYgTWF4RGlmZmVyZW5jZXNIaXN0b3J5ID4gMCAmJiBudW1EaWZmZXJlbmNlcyA8PSAoTWF4RGlmZmVyZW5jZXNIaXN0b3J5ICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCSU5HTyEgV2Ugb3ZlcmxhcHBlZCwgYW5kIHdlIGhhdmUgdGhlIGZ1bGwgdHJhY2UgaW4gbWVtb3J5IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldBTEtUUkFDRShkaWFnb25hbEZvcndhcmRCYXNlLCBkaWFnb25hbEZvcndhcmRTdGFydCwgZGlhZ29uYWxGb3J3YXJkRW5kLCBkaWFnb25hbEZvcndhcmRPZmZzZXQsIGRpYWdvbmFsUmV2ZXJzZUJhc2UsIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0LCBkaWFnb25hbFJldmVyc2VFbmQsIGRpYWdvbmFsUmV2ZXJzZU9mZnNldCwgZm9yd2FyZFBvaW50cywgcmV2ZXJzZVBvaW50cywgb3JpZ2luYWxJbmRleCwgb3JpZ2luYWxFbmQsIG1pZE9yaWdpbmFsQXJyLCBtb2RpZmllZEluZGV4LCBtb2RpZmllZEVuZCwgbWlkTW9kaWZpZWRBcnIsIGRlbHRhSXNFdmVuLCBxdWl0RWFybHlBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWl0aGVyIGZhbHNlIG92ZXJsYXAsIG9yIHdlIGRpZG4ndCBoYXZlIGVub3VnaCBtZW1vcnkgZm9yIHRoZSBmdWxsIHRyYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVzdCByZXR1cm4gdGhlIHJlY3Vyc2lvbiBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2F2ZSBjdXJyZW50IHZlY3RvcnMgdG8gaGlzdG9yeSBiZWZvcmUgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICBpZiAobnVtRGlmZmVyZW5jZXMgPD0gTWF4RGlmZmVyZW5jZXNIaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIGFsbG9jYXRpbmcgc3BhY2UgZm9yIG9uZSBleHRyYSBpbnQsIHdoaWNoIHdlIGZpbGwgd2l0aFxuICAgICAgICAgICAgICAgIC8vIHRoZSBpbmRleCBvZiB0aGUgZGlhZ29uYWwgYmFzZSBpbmRleFxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gbmV3IEFycmF5KGRpYWdvbmFsRm9yd2FyZEVuZCAtIGRpYWdvbmFsRm9yd2FyZFN0YXJ0ICsgMik7XG4gICAgICAgICAgICAgICAgdGVtcFswXSA9IGRpYWdvbmFsRm9yd2FyZEJhc2UgLSBkaWFnb25hbEZvcndhcmRTdGFydCArIDE7XG4gICAgICAgICAgICAgICAgTXlBcnJheS5Db3B5KGZvcndhcmRQb2ludHMsIGRpYWdvbmFsRm9yd2FyZFN0YXJ0LCB0ZW1wLCAxLCBkaWFnb25hbEZvcndhcmRFbmQgLSBkaWFnb25hbEZvcndhcmRTdGFydCArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubV9mb3J3YXJkSGlzdG9yeS5wdXNoKHRlbXApO1xuICAgICAgICAgICAgICAgIHRlbXAgPSBuZXcgQXJyYXkoZGlhZ29uYWxSZXZlcnNlRW5kIC0gZGlhZ29uYWxSZXZlcnNlU3RhcnQgKyAyKTtcbiAgICAgICAgICAgICAgICB0ZW1wWzBdID0gZGlhZ29uYWxSZXZlcnNlQmFzZSAtIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0ICsgMTtcbiAgICAgICAgICAgICAgICBNeUFycmF5LkNvcHkocmV2ZXJzZVBvaW50cywgZGlhZ29uYWxSZXZlcnNlU3RhcnQsIHRlbXAsIDEsIGRpYWdvbmFsUmV2ZXJzZUVuZCAtIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0ICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tX3JldmVyc2VIaXN0b3J5LnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgZ290IGhlcmUsIHRoZW4gd2UgaGF2ZSB0aGUgZnVsbCB0cmFjZSBpbiBoaXN0b3J5LiBXZSBqdXN0IGhhdmUgdG8gY29udmVydCBpdCB0byBhIGNoYW5nZSBsaXN0XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgcGFydCBpcyBhIGJpdCBtZXNzeVxuICAgICAgICByZXR1cm4gdGhpcy5XQUxLVFJBQ0UoZGlhZ29uYWxGb3J3YXJkQmFzZSwgZGlhZ29uYWxGb3J3YXJkU3RhcnQsIGRpYWdvbmFsRm9yd2FyZEVuZCwgZGlhZ29uYWxGb3J3YXJkT2Zmc2V0LCBkaWFnb25hbFJldmVyc2VCYXNlLCBkaWFnb25hbFJldmVyc2VTdGFydCwgZGlhZ29uYWxSZXZlcnNlRW5kLCBkaWFnb25hbFJldmVyc2VPZmZzZXQsIGZvcndhcmRQb2ludHMsIHJldmVyc2VQb2ludHMsIG9yaWdpbmFsSW5kZXgsIG9yaWdpbmFsRW5kLCBtaWRPcmlnaW5hbEFyciwgbW9kaWZpZWRJbmRleCwgbW9kaWZpZWRFbmQsIG1pZE1vZGlmaWVkQXJyLCBkZWx0YUlzRXZlbiwgcXVpdEVhcmx5QXJyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNoaWZ0cyB0aGUgZ2l2ZW4gY2hhbmdlcyB0byBwcm92aWRlIGEgbW9yZSBpbnR1aXRpdmUgZGlmZi5cbiAgICAgKiBXaGlsZSB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIGRpZmYgbWF0Y2hlcyB0aGUgZmlyc3QgZWxlbWVudCBhZnRlciB0aGUgZGlmZixcbiAgICAgKiB3ZSBzaGlmdCB0aGUgZGlmZiBkb3duLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNoYW5nZXMgVGhlIGxpc3Qgb2YgY2hhbmdlcyB0byBzaGlmdFxuICAgICAqIEByZXR1cm5zIFRoZSBzaGlmdGVkIGNoYW5nZXNcbiAgICAgKi9cbiAgICBMY3NEaWZmLnByb3RvdHlwZS5QcmV0dGlmeUNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAvLyBTaGlmdCBhbGwgdGhlIGNoYW5nZXMgZG93biBmaXJzdFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3RvcCA9IChpIDwgY2hhbmdlcy5sZW5ndGggLSAxKSA/IGNoYW5nZXNbaSArIDFdLm9yaWdpbmFsU3RhcnQgOiB0aGlzLk9yaWdpbmFsU2VxdWVuY2UuZ2V0TGVuZ3RoKCk7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRTdG9wID0gKGkgPCBjaGFuZ2VzLmxlbmd0aCAtIDEpID8gY2hhbmdlc1tpICsgMV0ubW9kaWZpZWRTdGFydCA6IHRoaXMuTW9kaWZpZWRTZXF1ZW5jZS5nZXRMZW5ndGgoKTtcbiAgICAgICAgICAgIHZhciBjaGVja09yaWdpbmFsID0gY2hhbmdlLm9yaWdpbmFsTGVuZ3RoID4gMDtcbiAgICAgICAgICAgIHZhciBjaGVja01vZGlmaWVkID0gY2hhbmdlLm1vZGlmaWVkTGVuZ3RoID4gMDtcbiAgICAgICAgICAgIHdoaWxlIChjaGFuZ2Uub3JpZ2luYWxTdGFydCArIGNoYW5nZS5vcmlnaW5hbExlbmd0aCA8IG9yaWdpbmFsU3RvcCAmJlxuICAgICAgICAgICAgICAgIGNoYW5nZS5tb2RpZmllZFN0YXJ0ICsgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoIDwgbW9kaWZpZWRTdG9wICYmXG4gICAgICAgICAgICAgICAgKCFjaGVja09yaWdpbmFsIHx8IHRoaXMuT3JpZ2luYWxFbGVtZW50c0FyZUVxdWFsKGNoYW5nZS5vcmlnaW5hbFN0YXJ0LCBjaGFuZ2Uub3JpZ2luYWxTdGFydCArIGNoYW5nZS5vcmlnaW5hbExlbmd0aCkpICYmXG4gICAgICAgICAgICAgICAgKCFjaGVja01vZGlmaWVkIHx8IHRoaXMuTW9kaWZpZWRFbGVtZW50c0FyZUVxdWFsKGNoYW5nZS5tb2RpZmllZFN0YXJ0LCBjaGFuZ2UubW9kaWZpZWRTdGFydCArIGNoYW5nZS5tb2RpZmllZExlbmd0aCkpKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlLm9yaWdpbmFsU3RhcnQrKztcbiAgICAgICAgICAgICAgICBjaGFuZ2UubW9kaWZpZWRTdGFydCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1lcmdlZENoYW5nZUFyciA9IFtudWxsXTtcbiAgICAgICAgICAgIGlmIChpIDwgY2hhbmdlcy5sZW5ndGggLSAxICYmIHRoaXMuQ2hhbmdlc092ZXJsYXAoY2hhbmdlc1tpXSwgY2hhbmdlc1tpICsgMV0sIG1lcmdlZENoYW5nZUFycikpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2ldID0gbWVyZ2VkQ2hhbmdlQXJyWzBdO1xuICAgICAgICAgICAgICAgIGNoYW5nZXMuc3BsaWNlKGkgKyAxLCAxKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2hpZnQgY2hhbmdlcyBiYWNrIHVwIHVudGlsIHdlIGhpdCBlbXB0eSBvciB3aGl0ZXNwYWNlLW9ubHkgbGluZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoYW5nZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3RvcCA9IDA7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRTdG9wID0gMDtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2Q2hhbmdlID0gY2hhbmdlc1tpIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKHByZXZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RvcCA9IHByZXZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIHByZXZDaGFuZ2Uub3JpZ2luYWxMZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2Q2hhbmdlLm1vZGlmaWVkTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFN0b3AgPSBwcmV2Q2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBwcmV2Q2hhbmdlLm1vZGlmaWVkTGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGVja09yaWdpbmFsID0gY2hhbmdlLm9yaWdpbmFsTGVuZ3RoID4gMDtcbiAgICAgICAgICAgIHZhciBjaGVja01vZGlmaWVkID0gY2hhbmdlLm1vZGlmaWVkTGVuZ3RoID4gMDtcbiAgICAgICAgICAgIHZhciBiZXN0RGVsdGEgPSAwO1xuICAgICAgICAgICAgdmFyIGJlc3RTY29yZSA9IHRoaXMuX2JvdW5kYXJ5U2NvcmUoY2hhbmdlLm9yaWdpbmFsU3RhcnQsIGNoYW5nZS5vcmlnaW5hbExlbmd0aCwgY2hhbmdlLm1vZGlmaWVkU3RhcnQsIGNoYW5nZS5tb2RpZmllZExlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBkZWx0YSA9IDE7OyBkZWx0YSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3RhcnQgPSBjaGFuZ2Uub3JpZ2luYWxTdGFydCAtIGRlbHRhO1xuICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZFN0YXJ0ID0gY2hhbmdlLm1vZGlmaWVkU3RhcnQgLSBkZWx0YTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTdGFydCA8IG9yaWdpbmFsU3RvcCB8fCBtb2RpZmllZFN0YXJ0IDwgbW9kaWZpZWRTdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tPcmlnaW5hbCAmJiAhdGhpcy5PcmlnaW5hbEVsZW1lbnRzQXJlRXF1YWwob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxTdGFydCArIGNoYW5nZS5vcmlnaW5hbExlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGVja01vZGlmaWVkICYmICF0aGlzLk1vZGlmaWVkRWxlbWVudHNBcmVFcXVhbChtb2RpZmllZFN0YXJ0LCBtb2RpZmllZFN0YXJ0ICsgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gdGhpcy5fYm91bmRhcnlTY29yZShvcmlnaW5hbFN0YXJ0LCBjaGFuZ2Uub3JpZ2luYWxMZW5ndGgsIG1vZGlmaWVkU3RhcnQsIGNoYW5nZS5tb2RpZmllZExlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICAgICAgICBiZXN0RGVsdGEgPSBkZWx0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2Uub3JpZ2luYWxTdGFydCAtPSBiZXN0RGVsdGE7XG4gICAgICAgICAgICBjaGFuZ2UubW9kaWZpZWRTdGFydCAtPSBiZXN0RGVsdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZXM7XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5fT3JpZ2luYWxJc0JvdW5kYXJ5ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8PSAwIHx8IGluZGV4ID49IHRoaXMuT3JpZ2luYWxTZXF1ZW5jZS5nZXRMZW5ndGgoKSAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5PcmlnaW5hbFNlcXVlbmNlLmdldEVsZW1lbnRBdEluZGV4KGluZGV4KTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgJiYgL15cXHMqJC8udGVzdChlbGVtZW50KSk7XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5fT3JpZ2luYWxSZWdpb25Jc0JvdW5kYXJ5ID0gZnVuY3Rpb24gKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsTGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLl9PcmlnaW5hbElzQm91bmRhcnkob3JpZ2luYWxTdGFydCkgfHwgdGhpcy5fT3JpZ2luYWxJc0JvdW5kYXJ5KG9yaWdpbmFsU3RhcnQgLSAxKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yaWdpbmFsTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsRW5kID0gb3JpZ2luYWxTdGFydCArIG9yaWdpbmFsTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHRoaXMuX09yaWdpbmFsSXNCb3VuZGFyeShvcmlnaW5hbEVuZCAtIDEpIHx8IHRoaXMuX09yaWdpbmFsSXNCb3VuZGFyeShvcmlnaW5hbEVuZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5fTW9kaWZpZWRJc0JvdW5kYXJ5ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8PSAwIHx8IGluZGV4ID49IHRoaXMuTW9kaWZpZWRTZXF1ZW5jZS5nZXRMZW5ndGgoKSAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5Nb2RpZmllZFNlcXVlbmNlLmdldEVsZW1lbnRBdEluZGV4KGluZGV4KTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgJiYgL15cXHMqJC8udGVzdChlbGVtZW50KSk7XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5fTW9kaWZpZWRSZWdpb25Jc0JvdW5kYXJ5ID0gZnVuY3Rpb24gKG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkTGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLl9Nb2RpZmllZElzQm91bmRhcnkobW9kaWZpZWRTdGFydCkgfHwgdGhpcy5fTW9kaWZpZWRJc0JvdW5kYXJ5KG1vZGlmaWVkU3RhcnQgLSAxKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGlmaWVkTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG1vZGlmaWVkRW5kID0gbW9kaWZpZWRTdGFydCArIG1vZGlmaWVkTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHRoaXMuX01vZGlmaWVkSXNCb3VuZGFyeShtb2RpZmllZEVuZCAtIDEpIHx8IHRoaXMuX01vZGlmaWVkSXNCb3VuZGFyeShtb2RpZmllZEVuZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5fYm91bmRhcnlTY29yZSA9IGZ1bmN0aW9uIChvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbExlbmd0aCwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRMZW5ndGgpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsU2NvcmUgPSAodGhpcy5fT3JpZ2luYWxSZWdpb25Jc0JvdW5kYXJ5KG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsTGVuZ3RoKSA/IDEgOiAwKTtcbiAgICAgICAgdmFyIG1vZGlmaWVkU2NvcmUgPSAodGhpcy5fTW9kaWZpZWRSZWdpb25Jc0JvdW5kYXJ5KG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkTGVuZ3RoKSA/IDEgOiAwKTtcbiAgICAgICAgcmV0dXJuIChvcmlnaW5hbFNjb3JlICsgbW9kaWZpZWRTY29yZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb25jYXRlbmF0ZXMgdGhlIHR3byBpbnB1dCBEaWZmQ2hhbmdlIGxpc3RzIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmdcbiAgICAgKiBsaXN0LlxuICAgICAqIEBwYXJhbSBUaGUgbGVmdCBjaGFuZ2VzXG4gICAgICogQHBhcmFtIFRoZSByaWdodCBjaGFuZ2VzXG4gICAgICogQHJldHVybnMgVGhlIGNvbmNhdGVuYXRlZCBsaXN0XG4gICAgICovXG4gICAgTGNzRGlmZi5wcm90b3R5cGUuQ29uY2F0ZW5hdGVDaGFuZ2VzID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHZhciBtZXJnZWRDaGFuZ2VBcnIgPSBbXTtcbiAgICAgICAgaWYgKGxlZnQubGVuZ3RoID09PSAwIHx8IHJpZ2h0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChyaWdodC5sZW5ndGggPiAwKSA/IHJpZ2h0IDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLkNoYW5nZXNPdmVybGFwKGxlZnRbbGVmdC5sZW5ndGggLSAxXSwgcmlnaHRbMF0sIG1lcmdlZENoYW5nZUFycikpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIHdlIGJyZWFrIHRoZSBwcm9ibGVtIGRvd24gcmVjdXJzaXZlbHksIGl0IGlzIHBvc3NpYmxlIHRoYXQgd2VcbiAgICAgICAgICAgIC8vIG1pZ2h0IHJlY3Vyc2UgaW4gdGhlIG1pZGRsZSBvZiBhIGNoYW5nZSB0aGVyZWJ5IHNwbGl0dGluZyBpdCBpbnRvXG4gICAgICAgICAgICAvLyB0d28gY2hhbmdlcy4gSGVyZSBpbiB0aGUgY29tYmluaW5nIHN0YWdlLCB3ZSBkZXRlY3QgYW5kIGZ1c2UgdGhvc2VcbiAgICAgICAgICAgIC8vIGNoYW5nZXMgYmFjayB0b2dldGhlclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZWZ0Lmxlbmd0aCArIHJpZ2h0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgTXlBcnJheS5Db3B5KGxlZnQsIDAsIHJlc3VsdCwgMCwgbGVmdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHJlc3VsdFtsZWZ0Lmxlbmd0aCAtIDFdID0gbWVyZ2VkQ2hhbmdlQXJyWzBdO1xuICAgICAgICAgICAgTXlBcnJheS5Db3B5KHJpZ2h0LCAxLCByZXN1bHQsIGxlZnQubGVuZ3RoLCByaWdodC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlZnQubGVuZ3RoICsgcmlnaHQubGVuZ3RoKTtcbiAgICAgICAgICAgIE15QXJyYXkuQ29weShsZWZ0LCAwLCByZXN1bHQsIDAsIGxlZnQubGVuZ3RoKTtcbiAgICAgICAgICAgIE15QXJyYXkuQ29weShyaWdodCwgMCwgcmVzdWx0LCBsZWZ0Lmxlbmd0aCwgcmlnaHQubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIGNoYW5nZXMgb3ZlcmxhcCBhbmQgY2FuIGJlIG1lcmdlZCBpbnRvIGEgc2luZ2xlXG4gICAgICogY2hhbmdlXG4gICAgICogQHBhcmFtIGxlZnQgVGhlIGxlZnQgY2hhbmdlXG4gICAgICogQHBhcmFtIHJpZ2h0IFRoZSByaWdodCBjaGFuZ2VcbiAgICAgKiBAcGFyYW0gbWVyZ2VkQ2hhbmdlIFRoZSBtZXJnZWQgY2hhbmdlIGlmIHRoZSB0d28gb3ZlcmxhcCwgbnVsbCBvdGhlcndpc2VcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0d28gY2hhbmdlcyBvdmVybGFwXG4gICAgICovXG4gICAgTGNzRGlmZi5wcm90b3R5cGUuQ2hhbmdlc092ZXJsYXAgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIG1lcmdlZENoYW5nZUFycikge1xuICAgICAgICBEZWJ1Zy5Bc3NlcnQobGVmdC5vcmlnaW5hbFN0YXJ0IDw9IHJpZ2h0Lm9yaWdpbmFsU3RhcnQsICdMZWZ0IGNoYW5nZSBpcyBub3QgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHJpZ2h0IGNoYW5nZScpO1xuICAgICAgICBEZWJ1Zy5Bc3NlcnQobGVmdC5tb2RpZmllZFN0YXJ0IDw9IHJpZ2h0Lm1vZGlmaWVkU3RhcnQsICdMZWZ0IGNoYW5nZSBpcyBub3QgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHJpZ2h0IGNoYW5nZScpO1xuICAgICAgICBpZiAobGVmdC5vcmlnaW5hbFN0YXJ0ICsgbGVmdC5vcmlnaW5hbExlbmd0aCA+PSByaWdodC5vcmlnaW5hbFN0YXJ0IHx8IGxlZnQubW9kaWZpZWRTdGFydCArIGxlZnQubW9kaWZpZWRMZW5ndGggPj0gcmlnaHQubW9kaWZpZWRTdGFydCkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3RhcnQgPSBsZWZ0Lm9yaWdpbmFsU3RhcnQ7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxMZW5ndGggPSBsZWZ0Lm9yaWdpbmFsTGVuZ3RoO1xuICAgICAgICAgICAgdmFyIG1vZGlmaWVkU3RhcnQgPSBsZWZ0Lm1vZGlmaWVkU3RhcnQ7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRMZW5ndGggPSBsZWZ0Lm1vZGlmaWVkTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlZnQub3JpZ2luYWxTdGFydCArIGxlZnQub3JpZ2luYWxMZW5ndGggPj0gcmlnaHQub3JpZ2luYWxTdGFydCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsTGVuZ3RoID0gcmlnaHQub3JpZ2luYWxTdGFydCArIHJpZ2h0Lm9yaWdpbmFsTGVuZ3RoIC0gbGVmdC5vcmlnaW5hbFN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxlZnQubW9kaWZpZWRTdGFydCArIGxlZnQubW9kaWZpZWRMZW5ndGggPj0gcmlnaHQubW9kaWZpZWRTdGFydCkge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkTGVuZ3RoID0gcmlnaHQubW9kaWZpZWRTdGFydCArIHJpZ2h0Lm1vZGlmaWVkTGVuZ3RoIC0gbGVmdC5tb2RpZmllZFN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVyZ2VkQ2hhbmdlQXJyWzBdID0gbmV3IERpZmZDaGFuZ2Uob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxMZW5ndGgsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkTGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWVyZ2VkQ2hhbmdlQXJyWzBdID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB1c2VkIHRvIGNsaXAgYSBkaWFnb25hbCBpbmRleCB0byB0aGUgcmFuZ2Ugb2YgdmFsaWRcbiAgICAgKiBkaWFnb25hbHMuIFRoaXMgYWxzbyBkZWNpZGVzIHdoZXRoZXIgb3Igbm90IHRoZSBkaWFnb25hbCBpbmRleCxcbiAgICAgKiBpZiBpdCBleGNlZWRzIHRoZSBib3VuZGFyeSwgc2hvdWxkIGJlIGNsaXBwZWQgdG8gdGhlIGJvdW5kYXJ5IG9yIGNsaXBwZWRcbiAgICAgKiBvbmUgaW5zaWRlIHRoZSBib3VuZGFyeSBkZXBlbmRpbmcgb24gdGhlIEV2ZW4vT2RkIHN0YXR1cyBvZiB0aGUgYm91bmRhcnlcbiAgICAgKiBhbmQgbnVtRGlmZmVyZW5jZXMuXG4gICAgICogQHBhcmFtIGRpYWdvbmFsIFRoZSBpbmRleCBvZiB0aGUgZGlhZ29uYWwgdG8gY2xpcC5cbiAgICAgKiBAcGFyYW0gbnVtRGlmZmVyZW5jZXMgVGhlIGN1cnJlbnQgbnVtYmVyIG9mIGRpZmZlcmVuY2VzIGJlaW5nIGl0ZXJhdGVkIHVwb24uXG4gICAgICogQHBhcmFtIGRpYWdvbmFsQmFzZUluZGV4IFRoZSBiYXNlIHJlZmVyZW5jZSBkaWFnb25hbC5cbiAgICAgKiBAcGFyYW0gbnVtRGlhZ29uYWxzIFRoZSB0b3RhbCBudW1iZXIgb2YgZGlhZ29uYWxzLlxuICAgICAqIEByZXR1cm5zIFRoZSBjbGlwcGVkIGRpYWdvbmFsIGluZGV4LlxuICAgICAqL1xuICAgIExjc0RpZmYucHJvdG90eXBlLkNsaXBEaWFnb25hbEJvdW5kID0gZnVuY3Rpb24gKGRpYWdvbmFsLCBudW1EaWZmZXJlbmNlcywgZGlhZ29uYWxCYXNlSW5kZXgsIG51bURpYWdvbmFscykge1xuICAgICAgICBpZiAoZGlhZ29uYWwgPj0gMCAmJiBkaWFnb25hbCA8IG51bURpYWdvbmFscykge1xuICAgICAgICAgICAgLy8gTm90aGluZyB0byBjbGlwLCBpdHMgaW4gcmFuZ2VcbiAgICAgICAgICAgIHJldHVybiBkaWFnb25hbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBkaWFnb25hbHNCZWxvdzogVGhlIG51bWJlciBvZiBkaWFnb25hbHMgYmVsb3cgdGhlIHJlZmVyZW5jZSBkaWFnb25hbFxuICAgICAgICAvLyBkaWFnb25hbHNBYm92ZTogVGhlIG51bWJlciBvZiBkaWFnb25hbHMgYWJvdmUgdGhlIHJlZmVyZW5jZSBkaWFnb25hbFxuICAgICAgICB2YXIgZGlhZ29uYWxzQmVsb3cgPSBkaWFnb25hbEJhc2VJbmRleDtcbiAgICAgICAgdmFyIGRpYWdvbmFsc0Fib3ZlID0gbnVtRGlhZ29uYWxzIC0gZGlhZ29uYWxCYXNlSW5kZXggLSAxO1xuICAgICAgICB2YXIgZGlmZkV2ZW4gPSAobnVtRGlmZmVyZW5jZXMgJSAyID09PSAwKTtcbiAgICAgICAgaWYgKGRpYWdvbmFsIDwgMCkge1xuICAgICAgICAgICAgdmFyIGxvd2VyQm91bmRFdmVuID0gKGRpYWdvbmFsc0JlbG93ICUgMiA9PT0gMCk7XG4gICAgICAgICAgICByZXR1cm4gKGRpZmZFdmVuID09PSBsb3dlckJvdW5kRXZlbikgPyAwIDogMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB1cHBlckJvdW5kRXZlbiA9IChkaWFnb25hbHNBYm92ZSAlIDIgPT09IDApO1xuICAgICAgICAgICAgcmV0dXJuIChkaWZmRXZlbiA9PT0gdXBwZXJCb3VuZEV2ZW4pID8gbnVtRGlhZ29uYWxzIC0gMSA6IG51bURpYWdvbmFscyAtIDI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMY3NEaWZmO1xufSgpKTtcbmV4cG9ydCB7IExjc0RpZmYgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBSZXByZXNlbnRzIGluZm9ybWF0aW9uIGFib3V0IGEgc3BlY2lmaWMgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBzZXF1ZW5jZXMuXG4gKi9cbnZhciBEaWZmQ2hhbmdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYSBuZXcgRGlmZkNoYW5nZSB3aXRoIHRoZSBnaXZlbiBzZXF1ZW5jZSBpbmZvcm1hdGlvblxuICAgICAqIGFuZCBjb250ZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERpZmZDaGFuZ2Uob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxMZW5ndGgsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkTGVuZ3RoKSB7XG4gICAgICAgIC8vRGVidWcuQXNzZXJ0KG9yaWdpbmFsTGVuZ3RoID4gMCB8fCBtb2RpZmllZExlbmd0aCA+IDAsIFwib3JpZ2luYWxMZW5ndGggYW5kIG1vZGlmaWVkTGVuZ3RoIGNhbm5vdCBib3RoIGJlIDw9IDBcIik7XG4gICAgICAgIHRoaXMub3JpZ2luYWxTdGFydCA9IG9yaWdpbmFsU3RhcnQ7XG4gICAgICAgIHRoaXMub3JpZ2luYWxMZW5ndGggPSBvcmlnaW5hbExlbmd0aDtcbiAgICAgICAgdGhpcy5tb2RpZmllZFN0YXJ0ID0gbW9kaWZpZWRTdGFydDtcbiAgICAgICAgdGhpcy5tb2RpZmllZExlbmd0aCA9IG1vZGlmaWVkTGVuZ3RoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kIHBvaW50IChleGNsdXNpdmUpIG9mIHRoZSBjaGFuZ2UgaW4gdGhlIG9yaWdpbmFsIHNlcXVlbmNlLlxuICAgICAqL1xuICAgIERpZmZDaGFuZ2UucHJvdG90eXBlLmdldE9yaWdpbmFsRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbFN0YXJ0ICsgdGhpcy5vcmlnaW5hbExlbmd0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBlbmQgcG9pbnQgKGV4Y2x1c2l2ZSkgb2YgdGhlIGNoYW5nZSBpbiB0aGUgbW9kaWZpZWQgc2VxdWVuY2UuXG4gICAgICovXG4gICAgRGlmZkNoYW5nZS5wcm90b3R5cGUuZ2V0TW9kaWZpZWRFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGlmaWVkU3RhcnQgKyB0aGlzLm1vZGlmaWVkTGVuZ3RoO1xuICAgIH07XG4gICAgcmV0dXJuIERpZmZDaGFuZ2U7XG59KCkpO1xuZXhwb3J0IHsgRGlmZkNoYW5nZSB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vLyBBdm9pZCBjaXJjdWxhciBkZXBlbmRlbmN5IG9uIEV2ZW50RW1pdHRlciBieSBpbXBsZW1lbnRpbmcgYSBzdWJzZXQgb2YgdGhlIGludGVyZmFjZS5cbnZhciBFcnJvckhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXJyb3JIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuc3RhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSArICdcXG5cXG4nICsgZS5zdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgRXJyb3JIYW5kbGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEVycm9ySGFuZGxlci5wcm90b3R5cGUub25VbmV4cGVjdGVkRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFcnJvckhhbmRsZXIoZSk7XG4gICAgICAgIHRoaXMuZW1pdChlKTtcbiAgICB9O1xuICAgIC8vIEZvciBleHRlcm5hbCBlcnJvcnMsIHdlIGRvbid0IHdhbnQgdGhlIGxpc3RlbmVycyB0byBiZSBjYWxsZWRcbiAgICBFcnJvckhhbmRsZXIucHJvdG90eXBlLm9uVW5leHBlY3RlZEV4dGVybmFsRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFcnJvckhhbmRsZXIoZSk7XG4gICAgfTtcbiAgICByZXR1cm4gRXJyb3JIYW5kbGVyO1xufSgpKTtcbmV4cG9ydCB7IEVycm9ySGFuZGxlciB9O1xuZXhwb3J0IHZhciBlcnJvckhhbmRsZXIgPSBuZXcgRXJyb3JIYW5kbGVyKCk7XG5leHBvcnQgZnVuY3Rpb24gb25VbmV4cGVjdGVkRXJyb3IoZSkge1xuICAgIC8vIGlnbm9yZSBlcnJvcnMgZnJvbSBjYW5jZWxsZWQgcHJvbWlzZXNcbiAgICBpZiAoIWlzUHJvbWlzZUNhbmNlbGVkRXJyb3IoZSkpIHtcbiAgICAgICAgZXJyb3JIYW5kbGVyLm9uVW5leHBlY3RlZEVycm9yKGUpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9uVW5leHBlY3RlZEV4dGVybmFsRXJyb3IoZSkge1xuICAgIC8vIGlnbm9yZSBlcnJvcnMgZnJvbSBjYW5jZWxsZWQgcHJvbWlzZXNcbiAgICBpZiAoIWlzUHJvbWlzZUNhbmNlbGVkRXJyb3IoZSkpIHtcbiAgICAgICAgZXJyb3JIYW5kbGVyLm9uVW5leHBlY3RlZEV4dGVybmFsRXJyb3IoZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtRXJyb3JGb3JTZXJpYWxpemF0aW9uKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdmFyIG5hbWVfMSA9IGVycm9yLm5hbWUsIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICB2YXIgc3RhY2sgPSBlcnJvci5zdGFja3RyYWNlIHx8IGVycm9yLnN0YWNrO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJGlzRXJyb3I6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lXzEsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgc3RhY2s6IHN0YWNrXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHJldHVybiBhcyBpc1xuICAgIHJldHVybiBlcnJvcjtcbn1cbnZhciBjYW5jZWxlZE5hbWUgPSAnQ2FuY2VsZWQnO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGVycm9yIGlzIGEgcHJvbWlzZSBpbiBjYW5jZWxlZCBzdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlQ2FuY2VsZWRFcnJvcihlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09IGNhbmNlbGVkTmFtZSAmJiBlcnJvci5tZXNzYWdlID09PSBjYW5jZWxlZE5hbWU7XG59XG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdGhhdCBzaWduYWxzIGNhbmNlbGxhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbGVkKCkge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihjYW5jZWxlZE5hbWUpO1xuICAgIGVycm9yLm5hbWUgPSBlcnJvci5tZXNzYWdlO1xuICAgIHJldHVybiBlcnJvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbGxlZ2FsQXJndW1lbnQobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbGxlZ2FsIGFyZ3VtZW50OiBcIiArIG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignSWxsZWdhbCBhcmd1bWVudCcpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbGxlZ2FsU3RhdGUobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbGxlZ2FsIHN0YXRlOiBcIiArIG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignSWxsZWdhbCBzdGF0ZScpO1xuICAgIH1cbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBvblVuZXhwZWN0ZWRFcnJvciB9IGZyb20gJy4vZXJyb3JzLmpzJztcbmltcG9ydCB7IG9uY2UgYXMgb25jZUZuIH0gZnJvbSAnLi9mdW5jdGlvbmFsLmpzJztcbmltcG9ydCB7IGNvbWJpbmVkRGlzcG9zYWJsZSwgRGlzcG9zYWJsZSwgdG9EaXNwb3NhYmxlIH0gZnJvbSAnLi9saWZlY3ljbGUuanMnO1xuaW1wb3J0IHsgTGlua2VkTGlzdCB9IGZyb20gJy4vbGlua2VkTGlzdC5qcyc7XG5leHBvcnQgdmFyIEV2ZW50O1xuKGZ1bmN0aW9uIChFdmVudCkge1xuICAgIHZhciBfZGlzcG9zYWJsZSA9IHsgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyB9IH07XG4gICAgRXZlbnQuTm9uZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9kaXNwb3NhYmxlOyB9O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIGV2ZW50LCByZXR1cm5zIGFub3RoZXIgZXZlbnQgd2hpY2ggb25seSBmaXJlcyBvbmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uY2UoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpc0FyZ3MgPT09IHZvaWQgMCkgeyB0aGlzQXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdGhpcywgaW4gY2FzZSB0aGUgZXZlbnQgZmlyZXMgZHVyaW5nIHRoZSBsaXN0ZW5lciBjYWxsXG4gICAgICAgICAgICB2YXIgZGlkRmlyZSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHJlc3VsdCA9IGV2ZW50KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpZEZpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZEZpcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXIuY2FsbCh0aGlzQXJncywgZSk7XG4gICAgICAgICAgICB9LCBudWxsLCBkaXNwb3NhYmxlcyk7XG4gICAgICAgICAgICBpZiAoZGlkRmlyZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBFdmVudC5vbmNlID0gb25jZTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBldmVudCBhbmQgYSBgbWFwYCBmdW5jdGlvbiwgcmV0dXJucyBhbm90aGVyIGV2ZW50IHdoaWNoIG1hcHMgZWFjaCBlbGVtZW50XG4gICAgICogdGhyb3VnaHQgdGhlIG1hcHBpbmcgZnVuY3Rpb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWFwKGV2ZW50LCBtYXApIHtcbiAgICAgICAgcmV0dXJuIHNuYXBzaG90KGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpc0FyZ3MgPT09IHZvaWQgMCkgeyB0aGlzQXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiBldmVudChmdW5jdGlvbiAoaSkgeyByZXR1cm4gbGlzdGVuZXIuY2FsbCh0aGlzQXJncywgbWFwKGkpKTsgfSwgbnVsbCwgZGlzcG9zYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgRXZlbnQubWFwID0gbWFwO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIGV2ZW50IGFuZCBhbiBgZWFjaGAgZnVuY3Rpb24sIHJldHVybnMgYW5vdGhlciBpZGVudGljYWwgZXZlbnQgYW5kIGNhbGxzXG4gICAgICogdGhlIGBlYWNoYCBmdW5jdGlvbiBwZXIgZWFjaCBlbGVtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZvckVhY2goZXZlbnQsIGVhY2gpIHtcbiAgICAgICAgcmV0dXJuIHNuYXBzaG90KGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpc0FyZ3MgPT09IHZvaWQgMCkgeyB0aGlzQXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiBldmVudChmdW5jdGlvbiAoaSkgeyBlYWNoKGkpOyBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBpKTsgfSwgbnVsbCwgZGlzcG9zYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgRXZlbnQuZm9yRWFjaCA9IGZvckVhY2g7XG4gICAgZnVuY3Rpb24gZmlsdGVyKGV2ZW50LCBmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHNuYXBzaG90KGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpc0FyZ3MgPT09IHZvaWQgMCkgeyB0aGlzQXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiBldmVudChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZmlsdGVyKGUpICYmIGxpc3RlbmVyLmNhbGwodGhpc0FyZ3MsIGUpOyB9LCBudWxsLCBkaXNwb3NhYmxlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBFdmVudC5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gZXZlbnQsIHJldHVybnMgdGhlIHNhbWUgZXZlbnQgYnV0IHR5cGVkIGFzIGBFdmVudDx2b2lkPmAuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2lnbmFsKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG4gICAgRXZlbnQuc2lnbmFsID0gc2lnbmFsO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgY29sbGVjdGlvbiBvZiBldmVudHMsIHJldHVybnMgYSBzaW5nbGUgZXZlbnQgd2hpY2ggZW1pdHNcbiAgICAgKiB3aGVuZXZlciBhbnkgb2YgdGhlIHByb3ZpZGVkIGV2ZW50cyBlbWl0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFueSgpIHtcbiAgICAgICAgdmFyIGV2ZW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZXZlbnRzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpc0FyZ3MgPT09IHZvaWQgMCkgeyB0aGlzQXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZERpc3Bvc2FibGUoZXZlbnRzLm1hcChmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGV2ZW50KGZ1bmN0aW9uIChlKSB7IHJldHVybiBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBlKTsgfSwgbnVsbCwgZGlzcG9zYWJsZXMpOyB9KSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIEV2ZW50LmFueSA9IGFueTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBldmVudCBhbmQgYSBgbWVyZ2VgIGZ1bmN0aW9uLCByZXR1cm5zIGFub3RoZXIgZXZlbnQgd2hpY2ggbWFwcyBlYWNoIGVsZW1lbnRcbiAgICAgKiBhbmQgdGhlIGN1bW11bGF0aXZlIHJlc3VsdCB0aHJvdWdodCB0aGUgYG1lcmdlYCBmdW5jdGlvbi4gU2ltaWxhciB0byBgbWFwYCwgYnV0IHdpdGggbWVtb3J5LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlZHVjZShldmVudCwgbWVyZ2UsIGluaXRpYWwpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IGluaXRpYWw7XG4gICAgICAgIHJldHVybiBtYXAoZXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBtZXJnZShvdXRwdXQsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEV2ZW50LnJlZHVjZSA9IHJlZHVjZTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIGNoYWluIG9mIGV2ZW50IHByb2Nlc3NpbmcgZnVuY3Rpb25zIChmaWx0ZXIsIG1hcCwgZXRjKSwgZWFjaFxuICAgICAqIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCBwZXIgZXZlbnQgJiBwZXIgbGlzdGVuZXIuIFNuYXBzaG90dGluZyBhbiBldmVudFxuICAgICAqIGNoYWluIGFsbG93cyBlYWNoIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQganVzdCBvbmNlIHBlciBldmVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzbmFwc2hvdChldmVudCkge1xuICAgICAgICB2YXIgbGlzdGVuZXI7XG4gICAgICAgIHZhciBlbWl0dGVyID0gbmV3IEVtaXR0ZXIoe1xuICAgICAgICAgICAgb25GaXJzdExpc3RlbmVyQWRkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBldmVudChlbWl0dGVyLmZpcmUsIGVtaXR0ZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTGFzdExpc3RlbmVyUmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIuZXZlbnQ7XG4gICAgfVxuICAgIEV2ZW50LnNuYXBzaG90ID0gc25hcHNob3Q7XG4gICAgZnVuY3Rpb24gZGVib3VuY2UoZXZlbnQsIG1lcmdlLCBkZWxheSwgbGVhZGluZywgbGVha1dhcm5pbmdUaHJlc2hvbGQpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAxMDA7IH1cbiAgICAgICAgaWYgKGxlYWRpbmcgPT09IHZvaWQgMCkgeyBsZWFkaW5nID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdmFyIG91dHB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGhhbmRsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIG51bURlYm91bmNlZENhbGxzID0gMDtcbiAgICAgICAgdmFyIGVtaXR0ZXIgPSBuZXcgRW1pdHRlcih7XG4gICAgICAgICAgICBsZWFrV2FybmluZ1RocmVzaG9sZDogbGVha1dhcm5pbmdUaHJlc2hvbGQsXG4gICAgICAgICAgICBvbkZpcnN0TGlzdGVuZXJBZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBldmVudChmdW5jdGlvbiAoY3VyKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bURlYm91bmNlZENhbGxzKys7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG1lcmdlKG91dHB1dCwgY3VyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlYWRpbmcgJiYgIWhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5maXJlKG91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9vdXRwdXQgPSBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxlYWRpbmcgfHwgbnVtRGVib3VuY2VkQ2FsbHMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5maXJlKF9vdXRwdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtRGVib3VuY2VkQ2FsbHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MYXN0TGlzdGVuZXJSZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIuZXZlbnQ7XG4gICAgfVxuICAgIEV2ZW50LmRlYm91bmNlID0gZGVib3VuY2U7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gZXZlbnQsIGl0IHJldHVybnMgYW5vdGhlciBldmVudCB3aGljaCBmaXJlcyBvbmx5IG9uY2UgYW5kIGFzIHNvb24gYXNcbiAgICAgKiB0aGUgaW5wdXQgZXZlbnQgZW1pdHMuIFRoZSBldmVudCBkYXRhIGlzIHRoZSBudW1iZXIgb2YgbWlsbGlzIGl0IHRvb2sgZm9yIHRoZVxuICAgICAqIGV2ZW50IHRvIGZpcmUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RvcHdhdGNoKGV2ZW50KSB7XG4gICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICByZXR1cm4gbWFwKG9uY2UoZXZlbnQpLCBmdW5jdGlvbiAoXykgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydDsgfSk7XG4gICAgfVxuICAgIEV2ZW50LnN0b3B3YXRjaCA9IHN0b3B3YXRjaDtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBldmVudCwgaXQgcmV0dXJucyBhbm90aGVyIGV2ZW50IHdoaWNoIGZpcmVzIG9ubHkgd2hlbiB0aGUgZXZlbnRcbiAgICAgKiBlbGVtZW50IGNoYW5nZXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGF0Y2goZXZlbnQpIHtcbiAgICAgICAgdmFyIGZpcnN0Q2FsbCA9IHRydWU7XG4gICAgICAgIHZhciBjYWNoZTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcihldmVudCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgc2hvdWxkRW1pdCA9IGZpcnN0Q2FsbCB8fCB2YWx1ZSAhPT0gY2FjaGU7XG4gICAgICAgICAgICBmaXJzdENhbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhY2hlID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gc2hvdWxkRW1pdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEV2ZW50LmxhdGNoID0gbGF0Y2g7XG4gICAgLyoqXG4gICAgICogQnVmZmVycyB0aGUgcHJvdmlkZWQgZXZlbnQgdW50aWwgYSBmaXJzdCBsaXN0ZW5lciBjb21lc1xuICAgICAqIGFsb25nLCBhdCB3aGljaCBwb2ludCBmaXJlIGFsbCB0aGUgZXZlbnRzIGF0IG9uY2UgYW5kXG4gICAgICogcGlwZSB0aGUgZXZlbnQgZnJvbSB0aGVuIG9uLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGVtaXR0ZXIgPSBuZXcgRW1pdHRlcjxudW1iZXI+KCk7XG4gICAgICogY29uc3QgZXZlbnQgPSBlbWl0dGVyLmV2ZW50O1xuICAgICAqIGNvbnN0IGJ1ZmZlcmVkRXZlbnQgPSBidWZmZXIoZXZlbnQpO1xuICAgICAqXG4gICAgICogZW1pdHRlci5maXJlKDEpO1xuICAgICAqIGVtaXR0ZXIuZmlyZSgyKTtcbiAgICAgKiBlbWl0dGVyLmZpcmUoMyk7XG4gICAgICogLy8gbm90aGluZy4uLlxuICAgICAqXG4gICAgICogY29uc3QgbGlzdGVuZXIgPSBidWZmZXJlZEV2ZW50KG51bSA9PiBjb25zb2xlLmxvZyhudW0pKTtcbiAgICAgKiAvLyAxLCAyLCAzXG4gICAgICpcbiAgICAgKiBlbWl0dGVyLmZpcmUoNCk7XG4gICAgICogLy8gNFxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGJ1ZmZlcihldmVudCwgbmV4dFRpY2ssIF9idWZmZXIpIHtcbiAgICAgICAgaWYgKG5leHRUaWNrID09PSB2b2lkIDApIHsgbmV4dFRpY2sgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoX2J1ZmZlciA9PT0gdm9pZCAwKSB7IF9idWZmZXIgPSBbXTsgfVxuICAgICAgICB2YXIgYnVmZmVyID0gX2J1ZmZlci5zbGljZSgpO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBldmVudChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5maXJlKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlbWl0dGVyLmZpcmUoZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVmZmVyID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVtaXR0ZXIgPSBuZXcgRW1pdHRlcih7XG4gICAgICAgICAgICBvbkZpcnN0TGlzdGVuZXJBZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gZXZlbnQoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGVtaXR0ZXIuZmlyZShlKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRmlyc3RMaXN0ZW5lckRpZEFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRUaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZsdXNoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MYXN0TGlzdGVuZXJSZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgRXZlbnQuYnVmZmVyID0gYnVmZmVyO1xuICAgIHZhciBDaGFpbmFibGVFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gQ2hhaW5hYmxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgICAgICAgfVxuICAgICAgICBDaGFpbmFibGVFdmVudC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENoYWluYWJsZUV2ZW50KG1hcCh0aGlzLmV2ZW50LCBmbikpO1xuICAgICAgICB9O1xuICAgICAgICBDaGFpbmFibGVFdmVudC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGFpbmFibGVFdmVudChmb3JFYWNoKHRoaXMuZXZlbnQsIGZuKSk7XG4gICAgICAgIH07XG4gICAgICAgIENoYWluYWJsZUV2ZW50LnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhaW5hYmxlRXZlbnQoZmlsdGVyKHRoaXMuZXZlbnQsIGZuKSk7XG4gICAgICAgIH07XG4gICAgICAgIENoYWluYWJsZUV2ZW50LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAobWVyZ2UsIGluaXRpYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhaW5hYmxlRXZlbnQocmVkdWNlKHRoaXMuZXZlbnQsIG1lcmdlLCBpbml0aWFsKSk7XG4gICAgICAgIH07XG4gICAgICAgIENoYWluYWJsZUV2ZW50LnByb3RvdHlwZS5sYXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhaW5hYmxlRXZlbnQobGF0Y2godGhpcy5ldmVudCkpO1xuICAgICAgICB9O1xuICAgICAgICBDaGFpbmFibGVFdmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnQobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcyk7XG4gICAgICAgIH07XG4gICAgICAgIENoYWluYWJsZUV2ZW50LnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBvbmNlKHRoaXMuZXZlbnQpKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQ2hhaW5hYmxlRXZlbnQ7XG4gICAgfSgpKTtcbiAgICBmdW5jdGlvbiBjaGFpbihldmVudCkge1xuICAgICAgICByZXR1cm4gbmV3IENoYWluYWJsZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgRXZlbnQuY2hhaW4gPSBjaGFpbjtcbiAgICBmdW5jdGlvbiBmcm9tTm9kZUV2ZW50RW1pdHRlcihlbWl0dGVyLCBldmVudE5hbWUsIG1hcCkge1xuICAgICAgICBpZiAobWFwID09PSB2b2lkIDApIHsgbWFwID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBpZDsgfTsgfVxuICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmZpcmUobWFwLmFwcGx5KHZvaWQgMCwgYXJncykpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25GaXJzdExpc3RlbmVyQWRkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZW1pdHRlci5vbihldmVudE5hbWUsIGZuKTsgfTtcbiAgICAgICAgdmFyIG9uTGFzdExpc3RlbmVyUmVtb3ZlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGZuKTsgfTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBFbWl0dGVyKHsgb25GaXJzdExpc3RlbmVyQWRkOiBvbkZpcnN0TGlzdGVuZXJBZGQsIG9uTGFzdExpc3RlbmVyUmVtb3ZlOiBvbkxhc3RMaXN0ZW5lclJlbW92ZSB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5ldmVudDtcbiAgICB9XG4gICAgRXZlbnQuZnJvbU5vZGVFdmVudEVtaXR0ZXIgPSBmcm9tTm9kZUV2ZW50RW1pdHRlcjtcbiAgICBmdW5jdGlvbiBmcm9tUHJvbWlzZShwcm9taXNlKSB7XG4gICAgICAgIHZhciBlbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICAgICAgdmFyIHNob3VsZEVtaXQgPSBmYWxzZTtcbiAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4odW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBlbWl0dGVyLmZpcmUodW5kZWZpbmVkKTsgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmZpcmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNob3VsZEVtaXQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgRXZlbnQuZnJvbVByb21pc2UgPSBmcm9tUHJvbWlzZTtcbiAgICBmdW5jdGlvbiB0b1Byb21pc2UoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChjKSB7IHJldHVybiBvbmNlKGV2ZW50KShjKTsgfSk7XG4gICAgfVxuICAgIEV2ZW50LnRvUHJvbWlzZSA9IHRvUHJvbWlzZTtcbn0pKEV2ZW50IHx8IChFdmVudCA9IHt9KSk7XG52YXIgX2dsb2JhbExlYWtXYXJuaW5nVGhyZXNob2xkID0gLTE7XG52YXIgTGVha2FnZU1vbml0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGVha2FnZU1vbml0b3IoY3VzdG9tVGhyZXNob2xkLCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTgpLnNsaWNlKDIsIDUpOyB9XG4gICAgICAgIHRoaXMuY3VzdG9tVGhyZXNob2xkID0gY3VzdG9tVGhyZXNob2xkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl93YXJuQ291bnRkb3duID0gMDtcbiAgICB9XG4gICAgTGVha2FnZU1vbml0b3IucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWNrcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMZWFrYWdlTW9uaXRvci5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAobGlzdGVuZXJDb3VudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdGhyZXNob2xkID0gX2dsb2JhbExlYWtXYXJuaW5nVGhyZXNob2xkO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY3VzdG9tVGhyZXNob2xkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyZXNob2xkID0gdGhpcy5jdXN0b21UaHJlc2hvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRocmVzaG9sZCA8PSAwIHx8IGxpc3RlbmVyQ291bnQgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9zdGFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWNrcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjay5zcGxpdCgnXFxuJykuc2xpY2UoMykuam9pbignXFxuJyk7XG4gICAgICAgIHZhciBjb3VudCA9ICh0aGlzLl9zdGFja3MuZ2V0KHN0YWNrKSB8fCAwKTtcbiAgICAgICAgdGhpcy5fc3RhY2tzLnNldChzdGFjaywgY291bnQgKyAxKTtcbiAgICAgICAgdGhpcy5fd2FybkNvdW50ZG93biAtPSAxO1xuICAgICAgICBpZiAodGhpcy5fd2FybkNvdW50ZG93biA8PSAwKSB7XG4gICAgICAgICAgICAvLyBvbmx5IHdhcm4gb24gZmlyc3QgZXhjZWVkIGFuZCB0aGVuIGV2ZXJ5IHRpbWUgdGhlIGxpbWl0XG4gICAgICAgICAgICAvLyBpcyBleGNlZWRlZCBieSA1MCUgYWdhaW5cbiAgICAgICAgICAgIHRoaXMuX3dhcm5Db3VudGRvd24gPSB0aHJlc2hvbGQgKiAwLjU7XG4gICAgICAgICAgICAvLyBmaW5kIG1vc3QgZnJlcXVlbnQgbGlzdGVuZXIgYW5kIHByaW50IHdhcm5pbmdcbiAgICAgICAgICAgIHZhciB0b3BTdGFja18xO1xuICAgICAgICAgICAgdmFyIHRvcENvdW50XzEgPSAwO1xuICAgICAgICAgICAgdGhpcy5fc3RhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNvdW50LCBzdGFjaykge1xuICAgICAgICAgICAgICAgIGlmICghdG9wU3RhY2tfMSB8fCB0b3BDb3VudF8xIDwgY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wU3RhY2tfMSA9IHN0YWNrO1xuICAgICAgICAgICAgICAgICAgICB0b3BDb3VudF8xID0gY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbXCIgKyB0aGlzLm5hbWUgKyBcIl0gcG90ZW50aWFsIGxpc3RlbmVyIExFQUsgZGV0ZWN0ZWQsIGhhdmluZyBcIiArIGxpc3RlbmVyQ291bnQgKyBcIiBsaXN0ZW5lcnMgYWxyZWFkeS4gTU9TVCBmcmVxdWVudCBsaXN0ZW5lciAoXCIgKyB0b3BDb3VudF8xICsgXCIpOlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih0b3BTdGFja18xKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gKF90aGlzLl9zdGFja3MuZ2V0KHN0YWNrKSB8fCAwKTtcbiAgICAgICAgICAgIF90aGlzLl9zdGFja3Muc2V0KHN0YWNrLCBjb3VudCAtIDEpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIExlYWthZ2VNb25pdG9yO1xufSgpKTtcbi8qKlxuICogVGhlIEVtaXR0ZXIgY2FuIGJlIHVzZWQgdG8gZXhwb3NlIGFuIEV2ZW50IHRvIHRoZSBwdWJsaWNcbiAqIHRvIGZpcmUgaXQgZnJvbSB0aGUgaW5zaWRlcy5cbiAqIFNhbXBsZTpcbiAgICBjbGFzcyBEb2N1bWVudCB7XG5cbiAgICAgICAgcHJpdmF0ZSBfb25EaWRDaGFuZ2UgPSBuZXcgRW1pdHRlcjwodmFsdWU6c3RyaW5nKT0+YW55PigpO1xuXG4gICAgICAgIHB1YmxpYyBvbkRpZENoYW5nZSA9IHRoaXMuX29uRGlkQ2hhbmdlLmV2ZW50O1xuXG4gICAgICAgIC8vIGdldHRlci1zdHlsZVxuICAgICAgICAvLyBnZXQgb25EaWRDaGFuZ2UoKTogRXZlbnQ8KHZhbHVlOnN0cmluZyk9PmFueT4ge1xuICAgICAgICAvLyBcdHJldHVybiB0aGlzLl9vbkRpZENoYW5nZS5ldmVudDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHByaXZhdGUgX2RvSXQoKSB7XG4gICAgICAgICAgICAvLy4uLlxuICAgICAgICAgICAgdGhpcy5fb25EaWRDaGFuZ2UuZmlyZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gKi9cbnZhciBFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVtaXR0ZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9kaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5fbGVha2FnZU1vbiA9IF9nbG9iYWxMZWFrV2FybmluZ1RocmVzaG9sZCA+IDBcbiAgICAgICAgICAgID8gbmV3IExlYWthZ2VNb25pdG9yKHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5sZWFrV2FybmluZ1RocmVzaG9sZClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRW1pdHRlci5wcm90b3R5cGUsIFwiZXZlbnRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yIHRoZSBwdWJsaWMgdG8gYWxsb3cgdG8gc3Vic2NyaWJlXG4gICAgICAgICAqIHRvIGV2ZW50cyBmcm9tIHRoaXMgRW1pdHRlclxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9ldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50ID0gZnVuY3Rpb24gKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzID0gbmV3IExpbmtlZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RMaXN0ZW5lciA9IF90aGlzLl9saXN0ZW5lcnMuaXNFbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RMaXN0ZW5lciAmJiBfdGhpcy5fb3B0aW9ucyAmJiBfdGhpcy5fb3B0aW9ucy5vbkZpcnN0TGlzdGVuZXJBZGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9vcHRpb25zLm9uRmlyc3RMaXN0ZW5lckFkZChfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZSA9IF90aGlzLl9saXN0ZW5lcnMucHVzaCghdGhpc0FyZ3MgPyBsaXN0ZW5lciA6IFtsaXN0ZW5lciwgdGhpc0FyZ3NdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0TGlzdGVuZXIgJiYgX3RoaXMuX29wdGlvbnMgJiYgX3RoaXMuX29wdGlvbnMub25GaXJzdExpc3RlbmVyRGlkQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb3B0aW9ucy5vbkZpcnN0TGlzdGVuZXJEaWRBZGQoX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fb3B0aW9ucyAmJiBfdGhpcy5fb3B0aW9ucy5vbkxpc3RlbmVyRGlkQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb3B0aW9ucy5vbkxpc3RlbmVyRGlkQWRkKF90aGlzLCBsaXN0ZW5lciwgdGhpc0FyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFuZCByZWNvcmQgdGhpcyBlbWl0dGVyIGZvciBwb3RlbnRpYWwgbGVha2FnZVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlTW9uaXRvcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9sZWFrYWdlTW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVNb25pdG9yID0gX3RoaXMuX2xlYWthZ2VNb24uY2hlY2soX3RoaXMuX2xpc3RlbmVycy5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZU1vbml0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTW9uaXRvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGlzcG9zZSA9IEVtaXR0ZXIuX25vb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fb3B0aW9ucyAmJiBfdGhpcy5fb3B0aW9ucy5vbkxhc3RMaXN0ZW5lclJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0xpc3RlbmVycyA9IChfdGhpcy5fbGlzdGVuZXJzICYmICFfdGhpcy5fbGlzdGVuZXJzLmlzRW1wdHkoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0xpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9vcHRpb25zLm9uTGFzdExpc3RlbmVyUmVtb3ZlKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGlzcG9zYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NhYmxlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBUbyBiZSBrZXB0IHByaXZhdGUgdG8gZmlyZSBhbiBldmVudCB0b1xuICAgICAqIHN1YnNjcmliZXJzXG4gICAgICovXG4gICAgRW1pdHRlci5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAvLyBwdXQgYWxsIFtsaXN0ZW5lcixldmVudF0tcGFpcnMgaW50byBkZWxpdmVyeSBxdWV1ZVxuICAgICAgICAgICAgLy8gdGhlbiBlbWl0IGFsbCBldmVudC4gYW4gaW5uZXIvbmVzdGVkIGV2ZW50IG1pZ2h0IGJlXG4gICAgICAgICAgICAvLyB0aGUgZHJpdmVyIG9mIHRoaXNcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGVsaXZlcnlRdWV1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGl2ZXJ5UXVldWUgPSBuZXcgTGlua2VkTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaXRlciA9IHRoaXMuX2xpc3RlbmVycy5pdGVyYXRvcigpLCBlID0gaXRlci5uZXh0KCk7ICFlLmRvbmU7IGUgPSBpdGVyLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGl2ZXJ5UXVldWUucHVzaChbZS52YWx1ZSwgZXZlbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9kZWxpdmVyeVF1ZXVlLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5fZGVsaXZlcnlRdWV1ZS5zaGlmdCgpLCBsaXN0ZW5lciA9IF9hWzBdLCBldmVudF8xID0gX2FbMV07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh1bmRlZmluZWQsIGV2ZW50XzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJbMF0uY2FsbChsaXN0ZW5lclsxXSwgZXZlbnRfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb25VbmV4cGVjdGVkRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFbWl0dGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVsaXZlcnlRdWV1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVsaXZlcnlRdWV1ZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9sZWFrYWdlTW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9sZWFrYWdlTW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kaXNwb3NlZCA9IHRydWU7XG4gICAgfTtcbiAgICBFbWl0dGVyLl9ub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIHJldHVybiBFbWl0dGVyO1xufSgpKTtcbmV4cG9ydCB7IEVtaXR0ZXIgfTtcbnZhciBQYXVzZWFibGVFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQYXVzZWFibGVFbWl0dGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBhdXNlYWJsZUVtaXR0ZXIob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5faXNQYXVzZWQgPSAwO1xuICAgICAgICBfdGhpcy5fZXZlbnRRdWV1ZSA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gICAgICAgIF90aGlzLl9tZXJnZUZuID0gb3B0aW9ucyAmJiBvcHRpb25zLm1lcmdlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFBhdXNlYWJsZUVtaXR0ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9pc1BhdXNlZCsrO1xuICAgIH07XG4gICAgUGF1c2VhYmxlRW1pdHRlci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5faXNQYXVzZWQgIT09IDAgJiYgLS10aGlzLl9pc1BhdXNlZCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21lcmdlRm4pIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIG1lcmdlIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHNpbmdsZSBjb21wb3NpdGVcbiAgICAgICAgICAgICAgICAvLyBldmVudC4gbWFrZSBhIGNvcHkgaW4gY2FzZSBmaXJpbmcgcGF1c2VzIHRoaXMgZW1pdHRlclxuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSB0aGlzLl9ldmVudFF1ZXVlLnRvQXJyYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudFF1ZXVlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5maXJlLmNhbGwodGhpcywgdGhpcy5fbWVyZ2VGbihldmVudHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vIG1lcmdpbmcsIGZpcmUgZWFjaCBldmVudCBpbmRpdmlkdWFsbHkgYW5kIHRlc3RcbiAgICAgICAgICAgICAgICAvLyB0aGF0IHRoaXMgZW1pdHRlciBpc24ndCBwYXVzZWQgaGFsZndheSB0aHJvdWdoXG4gICAgICAgICAgICAgICAgd2hpbGUgKCF0aGlzLl9pc1BhdXNlZCAmJiB0aGlzLl9ldmVudFF1ZXVlLnNpemUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5maXJlLmNhbGwodGhpcywgdGhpcy5fZXZlbnRRdWV1ZS5zaGlmdCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBhdXNlYWJsZUVtaXR0ZXIucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUGF1c2VkICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRRdWV1ZS5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZmlyZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFBhdXNlYWJsZUVtaXR0ZXI7XG59KEVtaXR0ZXIpKTtcbmV4cG9ydCB7IFBhdXNlYWJsZUVtaXR0ZXIgfTtcbnZhciBFdmVudE11bHRpcGxleGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50TXVsdGlwbGV4ZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGFzTGlzdGVuZXJzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFbWl0dGVyKHtcbiAgICAgICAgICAgIG9uRmlyc3RMaXN0ZW5lckFkZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25GaXJzdExpc3RlbmVyQWRkKCk7IH0sXG4gICAgICAgICAgICBvbkxhc3RMaXN0ZW5lclJlbW92ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25MYXN0TGlzdGVuZXJSZW1vdmUoKTsgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50TXVsdGlwbGV4ZXIucHJvdG90eXBlLCBcImV2ZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmV2ZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSB7IGV2ZW50OiBldmVudCwgbGlzdGVuZXI6IG51bGwgfTtcbiAgICAgICAgdGhpcy5ldmVudHMucHVzaChlKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmhvb2soZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaGFzTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudW5ob29rKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlkeCA9IF90aGlzLmV2ZW50cy5pbmRleE9mKGUpO1xuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdG9EaXNwb3NhYmxlKG9uY2VGbihkaXNwb3NlKSk7XG4gICAgfTtcbiAgICBFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZS5vbkZpcnN0TGlzdGVuZXJBZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGFzTGlzdGVuZXJzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuaG9vayhlKTsgfSk7XG4gICAgfTtcbiAgICBFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZS5vbkxhc3RMaXN0ZW5lclJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5oYXNMaXN0ZW5lcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMudW5ob29rKGUpOyB9KTtcbiAgICB9O1xuICAgIEV2ZW50TXVsdGlwbGV4ZXIucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlLmxpc3RlbmVyID0gZS5ldmVudChmdW5jdGlvbiAocikgeyByZXR1cm4gX3RoaXMuZW1pdHRlci5maXJlKHIpOyB9KTtcbiAgICB9O1xuICAgIEV2ZW50TXVsdGlwbGV4ZXIucHJvdG90eXBlLnVuaG9vayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlLmxpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlLmxpc3RlbmVyID0gbnVsbDtcbiAgICB9O1xuICAgIEV2ZW50TXVsdGlwbGV4ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdHRlci5kaXNwb3NlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gRXZlbnRNdWx0aXBsZXhlcjtcbn0oKSk7XG5leHBvcnQgeyBFdmVudE11bHRpcGxleGVyIH07XG4vKipcbiAqIFRoZSBFdmVudEJ1ZmZlcmVyIGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIGluIHdoaWNoIHlvdSB3YW50XG4gKiB0byBkZWxheSBmaXJpbmcgeW91ciBldmVudHMgZHVyaW5nIHNvbWUgY29kZS5cbiAqIFlvdSBjYW4gd3JhcCB0aGF0IGNvZGUgYW5kIGJlIHN1cmUgdGhhdCB0aGUgZXZlbnQgd2lsbCBub3RcbiAqIGJlIGZpcmVkIGR1cmluZyB0aGF0IHdyYXAuXG4gKlxuICogYGBgXG4gKiBjb25zdCBlbWl0dGVyOiBFbWl0dGVyO1xuICogY29uc3QgZGVsYXllciA9IG5ldyBFdmVudERlbGF5ZXIoKTtcbiAqIGNvbnN0IGRlbGF5ZWRFdmVudCA9IGRlbGF5ZXIud3JhcEV2ZW50KGVtaXR0ZXIuZXZlbnQpO1xuICpcbiAqIGRlbGF5ZWRFdmVudChjb25zb2xlLmxvZyk7XG4gKlxuICogZGVsYXllci5idWZmZXJFdmVudHMoKCkgPT4ge1xuICogICBlbWl0dGVyLmZpcmUoKTsgLy8gZXZlbnQgd2lsbCBub3QgYmUgZmlyZWQgeWV0XG4gKiB9KTtcbiAqXG4gKiAvLyBldmVudCB3aWxsIG9ubHkgYmUgZmlyZWQgYXQgdGhpcyBwb2ludFxuICogYGBgXG4gKi9cbnZhciBFdmVudEJ1ZmZlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50QnVmZmVyZXIoKSB7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgIH1cbiAgICBFdmVudEJ1ZmZlcmVyLnByb3RvdHlwZS53cmFwRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gX3RoaXMuYnVmZmVyc1tfdGhpcy5idWZmZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goZnVuY3Rpb24gKCkgeyByZXR1cm4gbGlzdGVuZXIuY2FsbCh0aGlzQXJncywgaSk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzQXJncywgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdW5kZWZpbmVkLCBkaXNwb3NhYmxlcyk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBFdmVudEJ1ZmZlcmVyLnByb3RvdHlwZS5idWZmZXJFdmVudHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMucHVzaChidWZmZXIpO1xuICAgICAgICB2YXIgciA9IGZuKCk7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wb3AoKTtcbiAgICAgICAgYnVmZmVyLmZvckVhY2goZnVuY3Rpb24gKGZsdXNoKSB7IHJldHVybiBmbHVzaCgpOyB9KTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICByZXR1cm4gRXZlbnRCdWZmZXJlcjtcbn0oKSk7XG5leHBvcnQgeyBFdmVudEJ1ZmZlcmVyIH07XG4vKipcbiAqIEEgUmVsYXkgaXMgYW4gZXZlbnQgZm9yd2FyZGVyIHdoaWNoIGZ1bmN0aW9ucyBhcyBhIHJlcGx1Z2FiYmxlIGV2ZW50IHBpcGUuXG4gKiBPbmNlIGNyZWF0ZWQsIHlvdSBjYW4gY29ubmVjdCBhbiBpbnB1dCBldmVudCB0byBpdCBhbmQgaXQgd2lsbCBzaW1wbHkgZm9yd2FyZFxuICogZXZlbnRzIGZyb20gdGhhdCBpbnB1dCBldmVudCB0aHJvdWdoIGl0cyBvd24gYGV2ZW50YCBwcm9wZXJ0eS4gVGhlIGBpbnB1dGBcbiAqIGNhbiBiZSBjaGFuZ2VkIGF0IGFueSBwb2ludCBpbiB0aW1lLlxuICovXG52YXIgUmVsYXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVsYXkoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5wdXRFdmVudCA9IEV2ZW50Lk5vbmU7XG4gICAgICAgIHRoaXMuaW5wdXRFdmVudExpc3RlbmVyID0gRGlzcG9zYWJsZS5Ob25lO1xuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRW1pdHRlcih7XG4gICAgICAgICAgICBvbkZpcnN0TGlzdGVuZXJEaWRBZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmlucHV0RXZlbnRMaXN0ZW5lciA9IF90aGlzLmlucHV0RXZlbnQoX3RoaXMuZW1pdHRlci5maXJlLCBfdGhpcy5lbWl0dGVyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkxhc3RMaXN0ZW5lclJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLmlucHV0RXZlbnRMaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV2ZW50ID0gdGhpcy5lbWl0dGVyLmV2ZW50O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVsYXkucHJvdG90eXBlLCBcImlucHV0XCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFdmVudCA9IGV2ZW50O1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdGVuaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEV2ZW50TGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFdmVudExpc3RlbmVyID0gZXZlbnQodGhpcy5lbWl0dGVyLmZpcmUsIHRoaXMuZW1pdHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFJlbGF5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlucHV0RXZlbnRMaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuZW1pdHRlci5kaXNwb3NlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVsYXk7XG59KCkpO1xuZXhwb3J0IHsgUmVsYXkgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkaWRDYWxsID0gZmFsc2U7XG4gICAgdmFyIHJlc3VsdDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZGlkQ2FsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBkaWRDYWxsID0gdHJ1ZTtcbiAgICAgICAgcmVzdWx0ID0gZm4uYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnQgdmFyIEZJTiA9IHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuZXhwb3J0IHZhciBJdGVyYXRvcjtcbihmdW5jdGlvbiAoSXRlcmF0b3IpIHtcbiAgICB2YXIgX2VtcHR5ID0ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gRklOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIF9lbXB0eTtcbiAgICB9XG4gICAgSXRlcmF0b3IuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBmcm9tQXJyYXkoYXJyYXksIGluZGV4LCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHsgaW5kZXggPSAwOyB9XG4gICAgICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkgeyBsZW5ndGggPSBhcnJheS5sZW5ndGg7IH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGSU47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogYXJyYXlbaW5kZXgrK10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgSXRlcmF0b3IuZnJvbUFycmF5ID0gZnJvbUFycmF5O1xuICAgIGZ1bmN0aW9uIGZyb20oZWxlbWVudHMpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIEl0ZXJhdG9yLmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50cykpIHtcbiAgICAgICAgICAgIHJldHVybiBJdGVyYXRvci5mcm9tQXJyYXkoZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgICB9XG4gICAgfVxuICAgIEl0ZXJhdG9yLmZyb20gPSBmcm9tO1xuICAgIGZ1bmN0aW9uIG1hcChpdGVyYXRvciwgZm4pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGSU47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IGZuKGVsZW1lbnQudmFsdWUpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBJdGVyYXRvci5tYXAgPSBtYXA7XG4gICAgZnVuY3Rpb24gZmlsdGVyKGl0ZXJhdG9yLCBmbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRklOO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmbihlbGVtZW50LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBlbGVtZW50LnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIEl0ZXJhdG9yLmZpbHRlciA9IGZpbHRlcjtcbiAgICBmdW5jdGlvbiBmb3JFYWNoKGl0ZXJhdG9yLCBmbikge1xuICAgICAgICBmb3IgKHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpOyAhbmV4dC5kb25lOyBuZXh0ID0gaXRlcmF0b3IubmV4dCgpKSB7XG4gICAgICAgICAgICBmbihuZXh0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBJdGVyYXRvci5mb3JFYWNoID0gZm9yRWFjaDtcbiAgICBmdW5jdGlvbiBjb2xsZWN0KGl0ZXJhdG9yKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yRWFjaChpdGVyYXRvciwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiByZXN1bHQucHVzaCh2YWx1ZSk7IH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBJdGVyYXRvci5jb2xsZWN0ID0gY29sbGVjdDtcbn0pKEl0ZXJhdG9yIHx8IChJdGVyYXRvciA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VxdWVuY2VJdGVyYXRvcihhcmcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgIHJldHVybiBJdGVyYXRvci5mcm9tQXJyYXkoYXJnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhcmc7XG4gICAgfVxufVxudmFyIEFycmF5SXRlcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXJyYXlJdGVyYXRvcihpdGVtcywgc3RhcnQsIGVuZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHsgc3RhcnQgPSAwOyB9XG4gICAgICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSBpdGVtcy5sZW5ndGg7IH1cbiAgICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHsgaW5kZXggPSBzdGFydCAtIDE7IH1cbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgfVxuICAgIEFycmF5SXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBNYXRoLm1pbih0aGlzLmluZGV4ICsgMSwgdGhpcy5lbmQpO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50KCk7XG4gICAgfTtcbiAgICBBcnJheUl0ZXJhdG9yLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gdGhpcy5zdGFydCAtIDEgfHwgdGhpcy5pbmRleCA9PT0gdGhpcy5lbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuaW5kZXhdO1xuICAgIH07XG4gICAgcmV0dXJuIEFycmF5SXRlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgQXJyYXlJdGVyYXRvciB9O1xudmFyIEFycmF5TmF2aWdhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcnJheU5hdmlnYXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcnJheU5hdmlnYXRvcihpdGVtcywgc3RhcnQsIGVuZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHsgc3RhcnQgPSAwOyB9XG4gICAgICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSBpdGVtcy5sZW5ndGg7IH1cbiAgICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHsgaW5kZXggPSBzdGFydCAtIDE7IH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGl0ZW1zLCBzdGFydCwgZW5kLCBpbmRleCkgfHwgdGhpcztcbiAgICB9XG4gICAgQXJyYXlOYXZpZ2F0b3IucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLmN1cnJlbnQuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEFycmF5TmF2aWdhdG9yLnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IE1hdGgubWF4KHRoaXMuaW5kZXggLSAxLCB0aGlzLnN0YXJ0IC0gMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQoKTtcbiAgICB9O1xuICAgIEFycmF5TmF2aWdhdG9yLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuc3RhcnQ7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQoKTtcbiAgICB9O1xuICAgIEFycmF5TmF2aWdhdG9yLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5lbmQgLSAxO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50KCk7XG4gICAgfTtcbiAgICBBcnJheU5hdmlnYXRvci5wcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBcnJheU5hdmlnYXRvcjtcbn0oQXJyYXlJdGVyYXRvcikpO1xuZXhwb3J0IHsgQXJyYXlOYXZpZ2F0b3IgfTtcbnZhciBNYXBwZWRJdGVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBwZWRJdGVyYXRvcihpdGVyYXRvciwgZm4pIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xuICAgICAgICB0aGlzLmZuID0gZm47XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG4gICAgTWFwcGVkSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZuKHRoaXMuaXRlcmF0b3IubmV4dCgpKTsgfTtcbiAgICByZXR1cm4gTWFwcGVkSXRlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgTWFwcGVkSXRlcmF0b3IgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgaWxsZWdhbEFyZ3VtZW50IH0gZnJvbSAnLi9lcnJvcnMuanMnO1xudmFyIEtleUNvZGVTdHJNYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2V5Q29kZVN0ck1hcCgpIHtcbiAgICAgICAgdGhpcy5fa2V5Q29kZVRvU3RyID0gW107XG4gICAgICAgIHRoaXMuX3N0clRvS2V5Q29kZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIEtleUNvZGVTdHJNYXAucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIChrZXlDb2RlLCBzdHIpIHtcbiAgICAgICAgdGhpcy5fa2V5Q29kZVRvU3RyW2tleUNvZGVdID0gc3RyO1xuICAgICAgICB0aGlzLl9zdHJUb0tleUNvZGVbc3RyLnRvTG93ZXJDYXNlKCldID0ga2V5Q29kZTtcbiAgICB9O1xuICAgIEtleUNvZGVTdHJNYXAucHJvdG90eXBlLmtleUNvZGVUb1N0ciA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlDb2RlVG9TdHJba2V5Q29kZV07XG4gICAgfTtcbiAgICBLZXlDb2RlU3RyTWFwLnByb3RvdHlwZS5zdHJUb0tleUNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHJUb0tleUNvZGVbc3RyLnRvTG93ZXJDYXNlKCldIHx8IDAgLyogVW5rbm93biAqLztcbiAgICB9O1xuICAgIHJldHVybiBLZXlDb2RlU3RyTWFwO1xufSgpKTtcbnZhciB1aU1hcCA9IG5ldyBLZXlDb2RlU3RyTWFwKCk7XG52YXIgdXNlclNldHRpbmdzVVNNYXAgPSBuZXcgS2V5Q29kZVN0ck1hcCgpO1xudmFyIHVzZXJTZXR0aW5nc0dlbmVyYWxNYXAgPSBuZXcgS2V5Q29kZVN0ck1hcCgpO1xuKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmUoa2V5Q29kZSwgdWlMYWJlbCwgdXNVc2VyU2V0dGluZ3NMYWJlbCwgZ2VuZXJhbFVzZXJTZXR0aW5nc0xhYmVsKSB7XG4gICAgICAgIGlmICh1c1VzZXJTZXR0aW5nc0xhYmVsID09PSB2b2lkIDApIHsgdXNVc2VyU2V0dGluZ3NMYWJlbCA9IHVpTGFiZWw7IH1cbiAgICAgICAgaWYgKGdlbmVyYWxVc2VyU2V0dGluZ3NMYWJlbCA9PT0gdm9pZCAwKSB7IGdlbmVyYWxVc2VyU2V0dGluZ3NMYWJlbCA9IHVzVXNlclNldHRpbmdzTGFiZWw7IH1cbiAgICAgICAgdWlNYXAuZGVmaW5lKGtleUNvZGUsIHVpTGFiZWwpO1xuICAgICAgICB1c2VyU2V0dGluZ3NVU01hcC5kZWZpbmUoa2V5Q29kZSwgdXNVc2VyU2V0dGluZ3NMYWJlbCk7XG4gICAgICAgIHVzZXJTZXR0aW5nc0dlbmVyYWxNYXAuZGVmaW5lKGtleUNvZGUsIGdlbmVyYWxVc2VyU2V0dGluZ3NMYWJlbCk7XG4gICAgfVxuICAgIGRlZmluZSgwIC8qIFVua25vd24gKi8sICd1bmtub3duJyk7XG4gICAgZGVmaW5lKDEgLyogQmFja3NwYWNlICovLCAnQmFja3NwYWNlJyk7XG4gICAgZGVmaW5lKDIgLyogVGFiICovLCAnVGFiJyk7XG4gICAgZGVmaW5lKDMgLyogRW50ZXIgKi8sICdFbnRlcicpO1xuICAgIGRlZmluZSg0IC8qIFNoaWZ0ICovLCAnU2hpZnQnKTtcbiAgICBkZWZpbmUoNSAvKiBDdHJsICovLCAnQ3RybCcpO1xuICAgIGRlZmluZSg2IC8qIEFsdCAqLywgJ0FsdCcpO1xuICAgIGRlZmluZSg3IC8qIFBhdXNlQnJlYWsgKi8sICdQYXVzZUJyZWFrJyk7XG4gICAgZGVmaW5lKDggLyogQ2Fwc0xvY2sgKi8sICdDYXBzTG9jaycpO1xuICAgIGRlZmluZSg5IC8qIEVzY2FwZSAqLywgJ0VzY2FwZScpO1xuICAgIGRlZmluZSgxMCAvKiBTcGFjZSAqLywgJ1NwYWNlJyk7XG4gICAgZGVmaW5lKDExIC8qIFBhZ2VVcCAqLywgJ1BhZ2VVcCcpO1xuICAgIGRlZmluZSgxMiAvKiBQYWdlRG93biAqLywgJ1BhZ2VEb3duJyk7XG4gICAgZGVmaW5lKDEzIC8qIEVuZCAqLywgJ0VuZCcpO1xuICAgIGRlZmluZSgxNCAvKiBIb21lICovLCAnSG9tZScpO1xuICAgIGRlZmluZSgxNSAvKiBMZWZ0QXJyb3cgKi8sICdMZWZ0QXJyb3cnLCAnTGVmdCcpO1xuICAgIGRlZmluZSgxNiAvKiBVcEFycm93ICovLCAnVXBBcnJvdycsICdVcCcpO1xuICAgIGRlZmluZSgxNyAvKiBSaWdodEFycm93ICovLCAnUmlnaHRBcnJvdycsICdSaWdodCcpO1xuICAgIGRlZmluZSgxOCAvKiBEb3duQXJyb3cgKi8sICdEb3duQXJyb3cnLCAnRG93bicpO1xuICAgIGRlZmluZSgxOSAvKiBJbnNlcnQgKi8sICdJbnNlcnQnKTtcbiAgICBkZWZpbmUoMjAgLyogRGVsZXRlICovLCAnRGVsZXRlJyk7XG4gICAgZGVmaW5lKDIxIC8qIEtFWV8wICovLCAnMCcpO1xuICAgIGRlZmluZSgyMiAvKiBLRVlfMSAqLywgJzEnKTtcbiAgICBkZWZpbmUoMjMgLyogS0VZXzIgKi8sICcyJyk7XG4gICAgZGVmaW5lKDI0IC8qIEtFWV8zICovLCAnMycpO1xuICAgIGRlZmluZSgyNSAvKiBLRVlfNCAqLywgJzQnKTtcbiAgICBkZWZpbmUoMjYgLyogS0VZXzUgKi8sICc1Jyk7XG4gICAgZGVmaW5lKDI3IC8qIEtFWV82ICovLCAnNicpO1xuICAgIGRlZmluZSgyOCAvKiBLRVlfNyAqLywgJzcnKTtcbiAgICBkZWZpbmUoMjkgLyogS0VZXzggKi8sICc4Jyk7XG4gICAgZGVmaW5lKDMwIC8qIEtFWV85ICovLCAnOScpO1xuICAgIGRlZmluZSgzMSAvKiBLRVlfQSAqLywgJ0EnKTtcbiAgICBkZWZpbmUoMzIgLyogS0VZX0IgKi8sICdCJyk7XG4gICAgZGVmaW5lKDMzIC8qIEtFWV9DICovLCAnQycpO1xuICAgIGRlZmluZSgzNCAvKiBLRVlfRCAqLywgJ0QnKTtcbiAgICBkZWZpbmUoMzUgLyogS0VZX0UgKi8sICdFJyk7XG4gICAgZGVmaW5lKDM2IC8qIEtFWV9GICovLCAnRicpO1xuICAgIGRlZmluZSgzNyAvKiBLRVlfRyAqLywgJ0cnKTtcbiAgICBkZWZpbmUoMzggLyogS0VZX0ggKi8sICdIJyk7XG4gICAgZGVmaW5lKDM5IC8qIEtFWV9JICovLCAnSScpO1xuICAgIGRlZmluZSg0MCAvKiBLRVlfSiAqLywgJ0onKTtcbiAgICBkZWZpbmUoNDEgLyogS0VZX0sgKi8sICdLJyk7XG4gICAgZGVmaW5lKDQyIC8qIEtFWV9MICovLCAnTCcpO1xuICAgIGRlZmluZSg0MyAvKiBLRVlfTSAqLywgJ00nKTtcbiAgICBkZWZpbmUoNDQgLyogS0VZX04gKi8sICdOJyk7XG4gICAgZGVmaW5lKDQ1IC8qIEtFWV9PICovLCAnTycpO1xuICAgIGRlZmluZSg0NiAvKiBLRVlfUCAqLywgJ1AnKTtcbiAgICBkZWZpbmUoNDcgLyogS0VZX1EgKi8sICdRJyk7XG4gICAgZGVmaW5lKDQ4IC8qIEtFWV9SICovLCAnUicpO1xuICAgIGRlZmluZSg0OSAvKiBLRVlfUyAqLywgJ1MnKTtcbiAgICBkZWZpbmUoNTAgLyogS0VZX1QgKi8sICdUJyk7XG4gICAgZGVmaW5lKDUxIC8qIEtFWV9VICovLCAnVScpO1xuICAgIGRlZmluZSg1MiAvKiBLRVlfViAqLywgJ1YnKTtcbiAgICBkZWZpbmUoNTMgLyogS0VZX1cgKi8sICdXJyk7XG4gICAgZGVmaW5lKDU0IC8qIEtFWV9YICovLCAnWCcpO1xuICAgIGRlZmluZSg1NSAvKiBLRVlfWSAqLywgJ1knKTtcbiAgICBkZWZpbmUoNTYgLyogS0VZX1ogKi8sICdaJyk7XG4gICAgZGVmaW5lKDU3IC8qIE1ldGEgKi8sICdNZXRhJyk7XG4gICAgZGVmaW5lKDU4IC8qIENvbnRleHRNZW51ICovLCAnQ29udGV4dE1lbnUnKTtcbiAgICBkZWZpbmUoNTkgLyogRjEgKi8sICdGMScpO1xuICAgIGRlZmluZSg2MCAvKiBGMiAqLywgJ0YyJyk7XG4gICAgZGVmaW5lKDYxIC8qIEYzICovLCAnRjMnKTtcbiAgICBkZWZpbmUoNjIgLyogRjQgKi8sICdGNCcpO1xuICAgIGRlZmluZSg2MyAvKiBGNSAqLywgJ0Y1Jyk7XG4gICAgZGVmaW5lKDY0IC8qIEY2ICovLCAnRjYnKTtcbiAgICBkZWZpbmUoNjUgLyogRjcgKi8sICdGNycpO1xuICAgIGRlZmluZSg2NiAvKiBGOCAqLywgJ0Y4Jyk7XG4gICAgZGVmaW5lKDY3IC8qIEY5ICovLCAnRjknKTtcbiAgICBkZWZpbmUoNjggLyogRjEwICovLCAnRjEwJyk7XG4gICAgZGVmaW5lKDY5IC8qIEYxMSAqLywgJ0YxMScpO1xuICAgIGRlZmluZSg3MCAvKiBGMTIgKi8sICdGMTInKTtcbiAgICBkZWZpbmUoNzEgLyogRjEzICovLCAnRjEzJyk7XG4gICAgZGVmaW5lKDcyIC8qIEYxNCAqLywgJ0YxNCcpO1xuICAgIGRlZmluZSg3MyAvKiBGMTUgKi8sICdGMTUnKTtcbiAgICBkZWZpbmUoNzQgLyogRjE2ICovLCAnRjE2Jyk7XG4gICAgZGVmaW5lKDc1IC8qIEYxNyAqLywgJ0YxNycpO1xuICAgIGRlZmluZSg3NiAvKiBGMTggKi8sICdGMTgnKTtcbiAgICBkZWZpbmUoNzcgLyogRjE5ICovLCAnRjE5Jyk7XG4gICAgZGVmaW5lKDc4IC8qIE51bUxvY2sgKi8sICdOdW1Mb2NrJyk7XG4gICAgZGVmaW5lKDc5IC8qIFNjcm9sbExvY2sgKi8sICdTY3JvbGxMb2NrJyk7XG4gICAgZGVmaW5lKDgwIC8qIFVTX1NFTUlDT0xPTiAqLywgJzsnLCAnOycsICdPRU1fMScpO1xuICAgIGRlZmluZSg4MSAvKiBVU19FUVVBTCAqLywgJz0nLCAnPScsICdPRU1fUExVUycpO1xuICAgIGRlZmluZSg4MiAvKiBVU19DT01NQSAqLywgJywnLCAnLCcsICdPRU1fQ09NTUEnKTtcbiAgICBkZWZpbmUoODMgLyogVVNfTUlOVVMgKi8sICctJywgJy0nLCAnT0VNX01JTlVTJyk7XG4gICAgZGVmaW5lKDg0IC8qIFVTX0RPVCAqLywgJy4nLCAnLicsICdPRU1fUEVSSU9EJyk7XG4gICAgZGVmaW5lKDg1IC8qIFVTX1NMQVNIICovLCAnLycsICcvJywgJ09FTV8yJyk7XG4gICAgZGVmaW5lKDg2IC8qIFVTX0JBQ0tUSUNLICovLCAnYCcsICdgJywgJ09FTV8zJyk7XG4gICAgZGVmaW5lKDExMCAvKiBBQk5UX0MxICovLCAnQUJOVF9DMScpO1xuICAgIGRlZmluZSgxMTEgLyogQUJOVF9DMiAqLywgJ0FCTlRfQzInKTtcbiAgICBkZWZpbmUoODcgLyogVVNfT1BFTl9TUVVBUkVfQlJBQ0tFVCAqLywgJ1snLCAnWycsICdPRU1fNCcpO1xuICAgIGRlZmluZSg4OCAvKiBVU19CQUNLU0xBU0ggKi8sICdcXFxcJywgJ1xcXFwnLCAnT0VNXzUnKTtcbiAgICBkZWZpbmUoODkgLyogVVNfQ0xPU0VfU1FVQVJFX0JSQUNLRVQgKi8sICddJywgJ10nLCAnT0VNXzYnKTtcbiAgICBkZWZpbmUoOTAgLyogVVNfUVVPVEUgKi8sICdcXCcnLCAnXFwnJywgJ09FTV83Jyk7XG4gICAgZGVmaW5lKDkxIC8qIE9FTV84ICovLCAnT0VNXzgnKTtcbiAgICBkZWZpbmUoOTIgLyogT0VNXzEwMiAqLywgJ09FTV8xMDInKTtcbiAgICBkZWZpbmUoOTMgLyogTlVNUEFEXzAgKi8sICdOdW1QYWQwJyk7XG4gICAgZGVmaW5lKDk0IC8qIE5VTVBBRF8xICovLCAnTnVtUGFkMScpO1xuICAgIGRlZmluZSg5NSAvKiBOVU1QQURfMiAqLywgJ051bVBhZDInKTtcbiAgICBkZWZpbmUoOTYgLyogTlVNUEFEXzMgKi8sICdOdW1QYWQzJyk7XG4gICAgZGVmaW5lKDk3IC8qIE5VTVBBRF80ICovLCAnTnVtUGFkNCcpO1xuICAgIGRlZmluZSg5OCAvKiBOVU1QQURfNSAqLywgJ051bVBhZDUnKTtcbiAgICBkZWZpbmUoOTkgLyogTlVNUEFEXzYgKi8sICdOdW1QYWQ2Jyk7XG4gICAgZGVmaW5lKDEwMCAvKiBOVU1QQURfNyAqLywgJ051bVBhZDcnKTtcbiAgICBkZWZpbmUoMTAxIC8qIE5VTVBBRF84ICovLCAnTnVtUGFkOCcpO1xuICAgIGRlZmluZSgxMDIgLyogTlVNUEFEXzkgKi8sICdOdW1QYWQ5Jyk7XG4gICAgZGVmaW5lKDEwMyAvKiBOVU1QQURfTVVMVElQTFkgKi8sICdOdW1QYWRfTXVsdGlwbHknKTtcbiAgICBkZWZpbmUoMTA0IC8qIE5VTVBBRF9BREQgKi8sICdOdW1QYWRfQWRkJyk7XG4gICAgZGVmaW5lKDEwNSAvKiBOVU1QQURfU0VQQVJBVE9SICovLCAnTnVtUGFkX1NlcGFyYXRvcicpO1xuICAgIGRlZmluZSgxMDYgLyogTlVNUEFEX1NVQlRSQUNUICovLCAnTnVtUGFkX1N1YnRyYWN0Jyk7XG4gICAgZGVmaW5lKDEwNyAvKiBOVU1QQURfREVDSU1BTCAqLywgJ051bVBhZF9EZWNpbWFsJyk7XG4gICAgZGVmaW5lKDEwOCAvKiBOVU1QQURfRElWSURFICovLCAnTnVtUGFkX0RpdmlkZScpO1xufSkoKTtcbmV4cG9ydCB2YXIgS2V5Q29kZVV0aWxzO1xuKGZ1bmN0aW9uIChLZXlDb2RlVXRpbHMpIHtcbiAgICBmdW5jdGlvbiB0b1N0cmluZyhrZXlDb2RlKSB7XG4gICAgICAgIHJldHVybiB1aU1hcC5rZXlDb2RlVG9TdHIoa2V5Q29kZSk7XG4gICAgfVxuICAgIEtleUNvZGVVdGlscy50b1N0cmluZyA9IHRvU3RyaW5nO1xuICAgIGZ1bmN0aW9uIGZyb21TdHJpbmcoa2V5KSB7XG4gICAgICAgIHJldHVybiB1aU1hcC5zdHJUb0tleUNvZGUoa2V5KTtcbiAgICB9XG4gICAgS2V5Q29kZVV0aWxzLmZyb21TdHJpbmcgPSBmcm9tU3RyaW5nO1xuICAgIGZ1bmN0aW9uIHRvVXNlclNldHRpbmdzVVMoa2V5Q29kZSkge1xuICAgICAgICByZXR1cm4gdXNlclNldHRpbmdzVVNNYXAua2V5Q29kZVRvU3RyKGtleUNvZGUpO1xuICAgIH1cbiAgICBLZXlDb2RlVXRpbHMudG9Vc2VyU2V0dGluZ3NVUyA9IHRvVXNlclNldHRpbmdzVVM7XG4gICAgZnVuY3Rpb24gdG9Vc2VyU2V0dGluZ3NHZW5lcmFsKGtleUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJTZXR0aW5nc0dlbmVyYWxNYXAua2V5Q29kZVRvU3RyKGtleUNvZGUpO1xuICAgIH1cbiAgICBLZXlDb2RlVXRpbHMudG9Vc2VyU2V0dGluZ3NHZW5lcmFsID0gdG9Vc2VyU2V0dGluZ3NHZW5lcmFsO1xuICAgIGZ1bmN0aW9uIGZyb21Vc2VyU2V0dGluZ3Moa2V5KSB7XG4gICAgICAgIHJldHVybiB1c2VyU2V0dGluZ3NVU01hcC5zdHJUb0tleUNvZGUoa2V5KSB8fCB1c2VyU2V0dGluZ3NHZW5lcmFsTWFwLnN0clRvS2V5Q29kZShrZXkpO1xuICAgIH1cbiAgICBLZXlDb2RlVXRpbHMuZnJvbVVzZXJTZXR0aW5ncyA9IGZyb21Vc2VyU2V0dGluZ3M7XG59KShLZXlDb2RlVXRpbHMgfHwgKEtleUNvZGVVdGlscyA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gS2V5Q2hvcmQoZmlyc3RQYXJ0LCBzZWNvbmRQYXJ0KSB7XG4gICAgdmFyIGNob3JkUGFydCA9ICgoc2Vjb25kUGFydCAmIDB4MDAwMEZGRkYpIDw8IDE2KSA+Pj4gMDtcbiAgICByZXR1cm4gKGZpcnN0UGFydCB8IGNob3JkUGFydCkgPj4+IDA7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2V5YmluZGluZyhrZXliaW5kaW5nLCBPUykge1xuICAgIGlmIChrZXliaW5kaW5nID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgZmlyc3RQYXJ0ID0gKGtleWJpbmRpbmcgJiAweDAwMDBGRkZGKSA+Pj4gMDtcbiAgICB2YXIgY2hvcmRQYXJ0ID0gKGtleWJpbmRpbmcgJiAweEZGRkYwMDAwKSA+Pj4gMTY7XG4gICAgaWYgKGNob3JkUGFydCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IENob3JkS2V5YmluZGluZyhbXG4gICAgICAgICAgICBjcmVhdGVTaW1wbGVLZXliaW5kaW5nKGZpcnN0UGFydCwgT1MpLFxuICAgICAgICAgICAgY3JlYXRlU2ltcGxlS2V5YmluZGluZyhjaG9yZFBhcnQsIE9TKVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDaG9yZEtleWJpbmRpbmcoW2NyZWF0ZVNpbXBsZUtleWJpbmRpbmcoZmlyc3RQYXJ0LCBPUyldKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaW1wbGVLZXliaW5kaW5nKGtleWJpbmRpbmcsIE9TKSB7XG4gICAgdmFyIGN0cmxDbWQgPSAoa2V5YmluZGluZyAmIDIwNDggLyogQ3RybENtZCAqLyA/IHRydWUgOiBmYWxzZSk7XG4gICAgdmFyIHdpbkN0cmwgPSAoa2V5YmluZGluZyAmIDI1NiAvKiBXaW5DdHJsICovID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB2YXIgY3RybEtleSA9IChPUyA9PT0gMiAvKiBNYWNpbnRvc2ggKi8gPyB3aW5DdHJsIDogY3RybENtZCk7XG4gICAgdmFyIHNoaWZ0S2V5ID0gKGtleWJpbmRpbmcgJiAxMDI0IC8qIFNoaWZ0ICovID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB2YXIgYWx0S2V5ID0gKGtleWJpbmRpbmcgJiA1MTIgLyogQWx0ICovID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB2YXIgbWV0YUtleSA9IChPUyA9PT0gMiAvKiBNYWNpbnRvc2ggKi8gPyBjdHJsQ21kIDogd2luQ3RybCk7XG4gICAgdmFyIGtleUNvZGUgPSAoa2V5YmluZGluZyAmIDI1NSAvKiBLZXlDb2RlICovKTtcbiAgICByZXR1cm4gbmV3IFNpbXBsZUtleWJpbmRpbmcoY3RybEtleSwgc2hpZnRLZXksIGFsdEtleSwgbWV0YUtleSwga2V5Q29kZSk7XG59XG52YXIgU2ltcGxlS2V5YmluZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaW1wbGVLZXliaW5kaW5nKGN0cmxLZXksIHNoaWZ0S2V5LCBhbHRLZXksIG1ldGFLZXksIGtleUNvZGUpIHtcbiAgICAgICAgdGhpcy5jdHJsS2V5ID0gY3RybEtleTtcbiAgICAgICAgdGhpcy5zaGlmdEtleSA9IHNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmFsdEtleSA9IGFsdEtleTtcbiAgICAgICAgdGhpcy5tZXRhS2V5ID0gbWV0YUtleTtcbiAgICAgICAgdGhpcy5rZXlDb2RlID0ga2V5Q29kZTtcbiAgICB9XG4gICAgU2ltcGxlS2V5YmluZGluZy5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jdHJsS2V5ID09PSBvdGhlci5jdHJsS2V5XG4gICAgICAgICAgICAmJiB0aGlzLnNoaWZ0S2V5ID09PSBvdGhlci5zaGlmdEtleVxuICAgICAgICAgICAgJiYgdGhpcy5hbHRLZXkgPT09IG90aGVyLmFsdEtleVxuICAgICAgICAgICAgJiYgdGhpcy5tZXRhS2V5ID09PSBvdGhlci5tZXRhS2V5XG4gICAgICAgICAgICAmJiB0aGlzLmtleUNvZGUgPT09IG90aGVyLmtleUNvZGUpO1xuICAgIH07XG4gICAgU2ltcGxlS2V5YmluZGluZy5wcm90b3R5cGUuaXNNb2RpZmllcktleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmtleUNvZGUgPT09IDAgLyogVW5rbm93biAqL1xuICAgICAgICAgICAgfHwgdGhpcy5rZXlDb2RlID09PSA1IC8qIEN0cmwgKi9cbiAgICAgICAgICAgIHx8IHRoaXMua2V5Q29kZSA9PT0gNTcgLyogTWV0YSAqL1xuICAgICAgICAgICAgfHwgdGhpcy5rZXlDb2RlID09PSA2IC8qIEFsdCAqL1xuICAgICAgICAgICAgfHwgdGhpcy5rZXlDb2RlID09PSA0IC8qIFNoaWZ0ICovKTtcbiAgICB9O1xuICAgIFNpbXBsZUtleWJpbmRpbmcucHJvdG90eXBlLnRvQ2hvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hvcmRLZXliaW5kaW5nKFt0aGlzXSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMga2V5YmluZGluZyByZWZlciB0byB0aGUga2V5IGNvZGUgb2YgYSBtb2RpZmllciBhbmQgaXQgYWxzbyBoYXMgdGhlIG1vZGlmaWVyIGZsYWc/XG4gICAgICovXG4gICAgU2ltcGxlS2V5YmluZGluZy5wcm90b3R5cGUuaXNEdXBsaWNhdGVNb2RpZmllckNhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoKHRoaXMuY3RybEtleSAmJiB0aGlzLmtleUNvZGUgPT09IDUgLyogQ3RybCAqLylcbiAgICAgICAgICAgIHx8ICh0aGlzLnNoaWZ0S2V5ICYmIHRoaXMua2V5Q29kZSA9PT0gNCAvKiBTaGlmdCAqLylcbiAgICAgICAgICAgIHx8ICh0aGlzLmFsdEtleSAmJiB0aGlzLmtleUNvZGUgPT09IDYgLyogQWx0ICovKVxuICAgICAgICAgICAgfHwgKHRoaXMubWV0YUtleSAmJiB0aGlzLmtleUNvZGUgPT09IDU3IC8qIE1ldGEgKi8pKTtcbiAgICB9O1xuICAgIHJldHVybiBTaW1wbGVLZXliaW5kaW5nO1xufSgpKTtcbmV4cG9ydCB7IFNpbXBsZUtleWJpbmRpbmcgfTtcbnZhciBDaG9yZEtleWJpbmRpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hvcmRLZXliaW5kaW5nKHBhcnRzKSB7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWxBcmd1bWVudChcInBhcnRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB9XG4gICAgQ2hvcmRLZXliaW5kaW5nLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgaWYgKG90aGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFydHMubGVuZ3RoICE9PSBvdGhlci5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJ0c1tpXS5lcXVhbHMob3RoZXIucGFydHNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIENob3JkS2V5YmluZGluZztcbn0oKSk7XG5leHBvcnQgeyBDaG9yZEtleWJpbmRpbmcgfTtcbnZhciBSZXNvbHZlZEtleWJpbmRpbmdQYXJ0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc29sdmVkS2V5YmluZGluZ1BhcnQoY3RybEtleSwgc2hpZnRLZXksIGFsdEtleSwgbWV0YUtleSwga2JMYWJlbCwga2JBcmlhTGFiZWwpIHtcbiAgICAgICAgdGhpcy5jdHJsS2V5ID0gY3RybEtleTtcbiAgICAgICAgdGhpcy5zaGlmdEtleSA9IHNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmFsdEtleSA9IGFsdEtleTtcbiAgICAgICAgdGhpcy5tZXRhS2V5ID0gbWV0YUtleTtcbiAgICAgICAgdGhpcy5rZXlMYWJlbCA9IGtiTGFiZWw7XG4gICAgICAgIHRoaXMua2V5QXJpYUxhYmVsID0ga2JBcmlhTGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBSZXNvbHZlZEtleWJpbmRpbmdQYXJ0O1xufSgpKTtcbmV4cG9ydCB7IFJlc29sdmVkS2V5YmluZGluZ1BhcnQgfTtcbi8qKlxuICogQSByZXNvbHZlZCBrZXliaW5kaW5nLiBDYW4gYmUgYSBzaW1wbGUga2V5YmluZGluZyBvciBhIGNob3JkIGtleWJpbmRpbmcuXG4gKi9cbnZhciBSZXNvbHZlZEtleWJpbmRpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb2x2ZWRLZXliaW5kaW5nKCkge1xuICAgIH1cbiAgICByZXR1cm4gUmVzb2x2ZWRLZXliaW5kaW5nO1xufSgpKTtcbmV4cG9ydCB7IFJlc29sdmVkS2V5YmluZGluZyB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRGlzcG9zYWJsZSh0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcuZGlzcG9zZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAmJiB0aGluZy5kaXNwb3NlLmxlbmd0aCA9PT0gMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNwb3NlKGZpcnN0KSB7XG4gICAgdmFyIHJlc3QgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICByZXN0W19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaXJzdCkpIHtcbiAgICAgICAgZmlyc3QuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCAmJiBkLmRpc3Bvc2UoKTsgfSk7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICBmaXJzdC5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3Q7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRpc3Bvc2UoZmlyc3QpO1xuICAgICAgICBkaXNwb3NlKHJlc3QpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVkRGlzcG9zYWJsZShkaXNwb3NhYmxlcykge1xuICAgIHJldHVybiB7IGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRpc3Bvc2UoZGlzcG9zYWJsZXMpOyB9IH07XG59XG5leHBvcnQgZnVuY3Rpb24gdG9EaXNwb3NhYmxlKGZuKSB7XG4gICAgcmV0dXJuIHsgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyBmbigpOyB9IH07XG59XG52YXIgRGlzcG9zYWJsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXNwb3NhYmxlKCkge1xuICAgICAgICB0aGlzLl90b0Rpc3Bvc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbGlmZWN5Y2xlX2Rpc3Bvc2FibGVfaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9saWZlY3ljbGVfZGlzcG9zYWJsZV9pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdG9EaXNwb3NlID0gZGlzcG9zZSh0aGlzLl90b0Rpc3Bvc2UpO1xuICAgIH07XG4gICAgRGlzcG9zYWJsZS5wcm90b3R5cGUuX3JlZ2lzdGVyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpZmVjeWNsZV9kaXNwb3NhYmxlX2lzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUmVnaXN0ZXJpbmcgZGlzcG9zYWJsZSBvbiBvYmplY3QgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGRpc3Bvc2VkLicpO1xuICAgICAgICAgICAgdC5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90b0Rpc3Bvc2UucHVzaCh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIERpc3Bvc2FibGUuTm9uZSA9IE9iamVjdC5mcmVlemUoeyBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7IH0gfSk7XG4gICAgcmV0dXJuIERpc3Bvc2FibGU7XG59KCkpO1xuZXhwb3J0IHsgRGlzcG9zYWJsZSB9O1xudmFyIEltbW9ydGFsUmVmZXJlbmNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEltbW9ydGFsUmVmZXJlbmNlKG9iamVjdCkge1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB9XG4gICAgSW1tb3J0YWxSZWZlcmVuY2UucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgcmV0dXJuIEltbW9ydGFsUmVmZXJlbmNlO1xufSgpKTtcbmV4cG9ydCB7IEltbW9ydGFsUmVmZXJlbmNlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IEZJTiB9IGZyb20gJy4vaXRlcmF0b3IuanMnO1xudmFyIE5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmV4dCA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnByZXYgPSBOb2RlLlVuZGVmaW5lZDtcbiAgICB9XG4gICAgTm9kZS5VbmRlZmluZWQgPSBuZXcgTm9kZSh1bmRlZmluZWQpO1xuICAgIHJldHVybiBOb2RlO1xufSgpKTtcbnZhciBMaW5rZWRMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2xhc3QgPSBOb2RlLlVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5rZWRMaXN0LnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0ID09PSBOb2RlLlVuZGVmaW5lZDtcbiAgICB9O1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9maXJzdCA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9sYXN0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgIH07XG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnNlcnQoZWxlbWVudCwgZmFsc2UpO1xuICAgIH07XG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnNlcnQoZWxlbWVudCwgdHJ1ZSk7XG4gICAgfTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5faW5zZXJ0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGF0VGhlRW5kKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBuZXdOb2RlID0gbmV3IE5vZGUoZWxlbWVudCk7XG4gICAgICAgIGlmICh0aGlzLl9maXJzdCA9PT0gTm9kZS5VbmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0ID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0VGhlRW5kKSB7XG4gICAgICAgICAgICAvLyBwdXNoXG4gICAgICAgICAgICB2YXIgb2xkTGFzdCA9IHRoaXMuX2xhc3Q7XG4gICAgICAgICAgICB0aGlzLl9sYXN0ID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIG5ld05vZGUucHJldiA9IG9sZExhc3Q7XG4gICAgICAgICAgICBvbGRMYXN0Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdW5zaGlmdFxuICAgICAgICAgICAgdmFyIG9sZEZpcnN0ID0gdGhpcy5fZmlyc3Q7XG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IG5ld05vZGU7XG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBvbGRGaXJzdDtcbiAgICAgICAgICAgIG9sZEZpcnN0LnByZXYgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NpemUgKz0gMTtcbiAgICAgICAgdmFyIGRpZFJlbW92ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFkaWRSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBkaWRSZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZW1vdmUobmV3Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZpcnN0ID09PSBOb2RlLlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLl9maXJzdC5lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKHRoaXMuX2ZpcnN0KTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLl9yZW1vdmUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5wcmV2ICE9PSBOb2RlLlVuZGVmaW5lZCAmJiBub2RlLm5leHQgIT09IE5vZGUuVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBtaWRkbGVcbiAgICAgICAgICAgIHZhciBhbmNob3IgPSBub2RlLnByZXY7XG4gICAgICAgICAgICBhbmNob3IubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIG5vZGUubmV4dC5wcmV2ID0gYW5jaG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUucHJldiA9PT0gTm9kZS5VbmRlZmluZWQgJiYgbm9kZS5uZXh0ID09PSBOb2RlLlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gb25seSBub2RlXG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUubmV4dCA9PT0gTm9kZS5VbmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGxhc3RcbiAgICAgICAgICAgIHRoaXMuX2xhc3QgPSB0aGlzLl9sYXN0LnByZXY7XG4gICAgICAgICAgICB0aGlzLl9sYXN0Lm5leHQgPSBOb2RlLlVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLnByZXYgPT09IE5vZGUuVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBmaXJzdFxuICAgICAgICAgICAgdGhpcy5fZmlyc3QgPSB0aGlzLl9maXJzdC5uZXh0O1xuICAgICAgICAgICAgdGhpcy5fZmlyc3QucHJldiA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvbmVcbiAgICAgICAgdGhpcy5fc2l6ZSAtPSAxO1xuICAgIH07XG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuaXRlcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbGVtZW50O1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX2ZpcnN0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBOb2RlLlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRklOO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiBub2RlLmVsZW1lbnQgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBub2RlLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIG5vZGUgPSB0aGlzLl9maXJzdDsgbm9kZSAhPT0gTm9kZS5VbmRlZmluZWQ7IG5vZGUgPSBub2RlLm5leHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiBMaW5rZWRMaXN0O1xufSgpKTtcbmV4cG9ydCB7IExpbmtlZExpc3QgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xudmFyIExBTkdVQUdFX0RFRkFVTFQgPSAnZW4nO1xudmFyIF9pc1dpbmRvd3MgPSBmYWxzZTtcbnZhciBfaXNNYWNpbnRvc2ggPSBmYWxzZTtcbnZhciBfaXNMaW51eCA9IGZhbHNlO1xudmFyIF9pc05hdGl2ZSA9IGZhbHNlO1xudmFyIF9pc1dlYiA9IGZhbHNlO1xudmFyIF9sb2NhbGUgPSB1bmRlZmluZWQ7XG52YXIgX2xhbmd1YWdlID0gTEFOR1VBR0VfREVGQVVMVDtcbnZhciBfdHJhbnNsYXRpb25zQ29uZmlnRmlsZSA9IHVuZGVmaW5lZDtcbnZhciBpc0VsZWN0cm9uUmVuZGVyZXIgPSAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKTtcbi8vIE9TIGRldGVjdGlvblxuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmICFpc0VsZWN0cm9uUmVuZGVyZXIpIHtcbiAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBfaXNXaW5kb3dzID0gdXNlckFnZW50LmluZGV4T2YoJ1dpbmRvd3MnKSA+PSAwO1xuICAgIF9pc01hY2ludG9zaCA9IHVzZXJBZ2VudC5pbmRleE9mKCdNYWNpbnRvc2gnKSA+PSAwO1xuICAgIF9pc0xpbnV4ID0gdXNlckFnZW50LmluZGV4T2YoJ0xpbnV4JykgPj0gMDtcbiAgICBfaXNXZWIgPSB0cnVlO1xuICAgIF9sb2NhbGUgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgX2xhbmd1YWdlID0gX2xvY2FsZTtcbn1cbmVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0Jykge1xuICAgIF9pc1dpbmRvd3MgPSAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyk7XG4gICAgX2lzTWFjaW50b3NoID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKTtcbiAgICBfaXNMaW51eCA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnKTtcbiAgICBfbG9jYWxlID0gTEFOR1VBR0VfREVGQVVMVDtcbiAgICBfbGFuZ3VhZ2UgPSBMQU5HVUFHRV9ERUZBVUxUO1xuICAgIHZhciByYXdObHNDb25maWcgPSBwcm9jZXNzLmVudlsnVlNDT0RFX05MU19DT05GSUcnXTtcbiAgICBpZiAocmF3TmxzQ29uZmlnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbmxzQ29uZmlnID0gSlNPTi5wYXJzZShyYXdObHNDb25maWcpO1xuICAgICAgICAgICAgdmFyIHJlc29sdmVkID0gbmxzQ29uZmlnLmF2YWlsYWJsZUxhbmd1YWdlc1snKiddO1xuICAgICAgICAgICAgX2xvY2FsZSA9IG5sc0NvbmZpZy5sb2NhbGU7XG4gICAgICAgICAgICAvLyBWU0NvZGUncyBkZWZhdWx0IGxhbmd1YWdlIGlzICdlbidcbiAgICAgICAgICAgIF9sYW5ndWFnZSA9IHJlc29sdmVkID8gcmVzb2x2ZWQgOiBMQU5HVUFHRV9ERUZBVUxUO1xuICAgICAgICAgICAgX3RyYW5zbGF0aW9uc0NvbmZpZ0ZpbGUgPSBubHNDb25maWcuX3RyYW5zbGF0aW9uc0NvbmZpZ0ZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaXNOYXRpdmUgPSB0cnVlO1xufVxudmFyIF9wbGF0Zm9ybSA9IDAgLyogV2ViICovO1xuaWYgKF9pc05hdGl2ZSkge1xuICAgIGlmIChfaXNNYWNpbnRvc2gpIHtcbiAgICAgICAgX3BsYXRmb3JtID0gMSAvKiBNYWMgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKF9pc1dpbmRvd3MpIHtcbiAgICAgICAgX3BsYXRmb3JtID0gMyAvKiBXaW5kb3dzICovO1xuICAgIH1cbiAgICBlbHNlIGlmIChfaXNMaW51eCkge1xuICAgICAgICBfcGxhdGZvcm0gPSAyIC8qIExpbnV4ICovO1xuICAgIH1cbn1cbmV4cG9ydCB2YXIgaXNXaW5kb3dzID0gX2lzV2luZG93cztcbmV4cG9ydCB2YXIgaXNNYWNpbnRvc2ggPSBfaXNNYWNpbnRvc2g7XG5leHBvcnQgdmFyIGlzTGludXggPSBfaXNMaW51eDtcbmV4cG9ydCB2YXIgaXNOYXRpdmUgPSBfaXNOYXRpdmU7XG5leHBvcnQgdmFyIGlzV2ViID0gX2lzV2ViO1xudmFyIF9nbG9iYWxzID0gKHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyA/IGdsb2JhbCA6IHt9KTtcbmV4cG9ydCB2YXIgZ2xvYmFscyA9IF9nbG9iYWxzO1xudmFyIF9zZXRJbW1lZGlhdGUgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgIGlmIChfc2V0SW1tZWRpYXRlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChnbG9iYWxzLnNldEltbWVkaWF0ZSkge1xuICAgICAgICAgICAgX3NldEltbWVkaWF0ZSA9IGdsb2JhbHMuc2V0SW1tZWRpYXRlLmJpbmQoZ2xvYmFscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzLm5leHRUaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfc2V0SW1tZWRpYXRlID0gcHJvY2Vzcy5uZXh0VGljay5iaW5kKHByb2Nlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3NldEltbWVkaWF0ZSA9IGdsb2JhbHMuc2V0VGltZW91dC5iaW5kKGdsb2JhbHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfc2V0SW1tZWRpYXRlKGNhbGxiYWNrKTtcbn1cbmV4cG9ydCB2YXIgT1MgPSAoX2lzTWFjaW50b3NoID8gMiAvKiBNYWNpbnRvc2ggKi8gOiAoX2lzV2luZG93cyA/IDEgLyogV2luZG93cyAqLyA6IDMgLyogTGludXggKi8pKTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBUaGUgZW1wdHkgc3RyaW5nLlxuICovXG5leHBvcnQgdmFyIGVtcHR5ID0gJyc7XG5leHBvcnQgZnVuY3Rpb24gaXNGYWxzeU9yV2hpdGVzcGFjZShzdHIpIHtcbiAgICBpZiAoIXN0ciB8fCB0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci50cmltKCkubGVuZ3RoID09PSAwO1xufVxuLyoqXG4gKiBAcmV0dXJucyB0aGUgcHJvdmlkZWQgbnVtYmVyIHdpdGggdGhlIGdpdmVuIG51bWJlciBvZiBwcmVjZWRpbmcgemVyb3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWQobiwgbCwgY2hhcikge1xuICAgIGlmIChjaGFyID09PSB2b2lkIDApIHsgY2hhciA9ICcwJzsgfVxuICAgIHZhciBzdHIgPSAnJyArIG47XG4gICAgdmFyIHIgPSBbc3RyXTtcbiAgICBmb3IgKHZhciBpID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICByLnB1c2goY2hhcik7XG4gICAgfVxuICAgIHJldHVybiByLnJldmVyc2UoKS5qb2luKCcnKTtcbn1cbnZhciBfZm9ybWF0UmVnZXhwID0gL3soXFxkKyl9L2c7XG4vKipcbiAqIEhlbHBlciB0byBwcm9kdWNlIGEgc3RyaW5nIHdpdGggYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLiBJbnNlcnQgdmFyaWFibGUgc2VnbWVudHNcbiAqIGludG8gdGhlIHN0cmluZyB1c2luZyB0aGUge259IG5vdGF0aW9uIHdoZXJlIE4gaXMgdGhlIGluZGV4IG9mIHRoZSBhcmd1bWVudCBmb2xsb3dpbmcgdGhlIHN0cmluZy5cbiAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gd2hpY2ggZm9ybWF0dGluZyBpcyBhcHBsaWVkXG4gKiBAcGFyYW0gYXJncyByZXBsYWNlbWVudHMgZm9yIHtufS1lbnRyaWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKF9mb3JtYXRSZWdleHAsIGZ1bmN0aW9uIChtYXRjaCwgZ3JvdXApIHtcbiAgICAgICAgdmFyIGlkeCA9IHBhcnNlSW50KGdyb3VwLCAxMCk7XG4gICAgICAgIHJldHVybiBpc05hTihpZHgpIHx8IGlkeCA8IDAgfHwgaWR4ID49IGFyZ3MubGVuZ3RoID9cbiAgICAgICAgICAgIG1hdGNoIDpcbiAgICAgICAgICAgIGFyZ3NbaWR4XTtcbiAgICB9KTtcbn1cbi8qKlxuICogQ29udmVydHMgSFRNTCBjaGFyYWN0ZXJzIGluc2lkZSB0aGUgc3RyaW5nIHRvIHVzZSBlbnRpdGllcyBpbnN0ZWFkLiBNYWtlcyB0aGUgc3RyaW5nIHNhZmUgZnJvbVxuICogYmVpbmcgdXNlZCBlLmcuIGluIEhUTUxFbGVtZW50LmlubmVySFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZShodG1sKSB7XG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvWzw+Jl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHN3aXRjaCAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNhc2UgJzwnOiByZXR1cm4gJyZsdDsnO1xuICAgICAgICAgICAgY2FzZSAnPic6IHJldHVybiAnJmd0Oyc7XG4gICAgICAgICAgICBjYXNlICcmJzogcmV0dXJuICcmYW1wOyc7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogRXNjYXBlcyByZWd1bGFyIGV4cHJlc3Npb24gY2hhcmFjdGVycyBpbiBhIGdpdmVuIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwQ2hhcmFjdGVycyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXFwtXFxcXFxce1xcfVxcKlxcK1xcP1xcfFxcXlxcJFxcLlxcW1xcXVxcKFxcKVxcI10vZywgJ1xcXFwkJicpO1xufVxuLyoqXG4gKiBSZW1vdmVzIGFsbCBvY2N1cnJlbmNlcyBvZiBuZWVkbGUgZnJvbSB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgaGF5c3RhY2suXG4gKiBAcGFyYW0gaGF5c3RhY2sgc3RyaW5nIHRvIHRyaW1cbiAqIEBwYXJhbSBuZWVkbGUgdGhlIHRoaW5nIHRvIHRyaW0gKGRlZmF1bHQgaXMgYSBibGFuaylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgIGlmIChuZWVkbGUgPT09IHZvaWQgMCkgeyBuZWVkbGUgPSAnICc7IH1cbiAgICB2YXIgdHJpbW1lZCA9IGx0cmltKGhheXN0YWNrLCBuZWVkbGUpO1xuICAgIHJldHVybiBydHJpbSh0cmltbWVkLCBuZWVkbGUpO1xufVxuLyoqXG4gKiBSZW1vdmVzIGFsbCBvY2N1cnJlbmNlcyBvZiBuZWVkbGUgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIGhheXN0YWNrLlxuICogQHBhcmFtIGhheXN0YWNrIHN0cmluZyB0byB0cmltXG4gKiBAcGFyYW0gbmVlZGxlIHRoZSB0aGluZyB0byB0cmltXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsdHJpbShoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgaWYgKCFoYXlzdGFjayB8fCAhbmVlZGxlKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjaztcbiAgICB9XG4gICAgdmFyIG5lZWRsZUxlbiA9IG5lZWRsZS5sZW5ndGg7XG4gICAgaWYgKG5lZWRsZUxlbiA9PT0gMCB8fCBoYXlzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGhheXN0YWNrO1xuICAgIH1cbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB3aGlsZSAoaGF5c3RhY2suaW5kZXhPZihuZWVkbGUsIG9mZnNldCkgPT09IG9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgKyBuZWVkbGVMZW47XG4gICAgfVxuICAgIHJldHVybiBoYXlzdGFjay5zdWJzdHJpbmcob2Zmc2V0KTtcbn1cbi8qKlxuICogUmVtb3ZlcyBhbGwgb2NjdXJyZW5jZXMgb2YgbmVlZGxlIGZyb20gdGhlIGVuZCBvZiBoYXlzdGFjay5cbiAqIEBwYXJhbSBoYXlzdGFjayBzdHJpbmcgdG8gdHJpbVxuICogQHBhcmFtIG5lZWRsZSB0aGUgdGhpbmcgdG8gdHJpbVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnRyaW0oaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgIGlmICghaGF5c3RhY2sgfHwgIW5lZWRsZSkge1xuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG4gICAgfVxuICAgIHZhciBuZWVkbGVMZW4gPSBuZWVkbGUubGVuZ3RoLCBoYXlzdGFja0xlbiA9IGhheXN0YWNrLmxlbmd0aDtcbiAgICBpZiAobmVlZGxlTGVuID09PSAwIHx8IGhheXN0YWNrTGVuID09PSAwKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjaztcbiAgICB9XG4gICAgdmFyIG9mZnNldCA9IGhheXN0YWNrTGVuLCBpZHggPSAtMTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZHggPSBoYXlzdGFjay5sYXN0SW5kZXhPZihuZWVkbGUsIG9mZnNldCAtIDEpO1xuICAgICAgICBpZiAoaWR4ID09PSAtMSB8fCBpZHggKyBuZWVkbGVMZW4gIT09IG9mZnNldCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCA9IGlkeDtcbiAgICB9XG4gICAgcmV0dXJuIGhheXN0YWNrLnN1YnN0cmluZygwLCBvZmZzZXQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRTaW1wbGUyUmVnRXhwUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZSgvW1xcLVxcXFxcXHtcXH1cXCtcXD9cXHxcXF5cXCRcXC5cXCxcXFtcXF1cXChcXClcXCNcXHNdL2csICdcXFxcJCYnKS5yZXBsYWNlKC9bXFwqXS9nLCAnLionKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBoYXlzdGFjayBzdGFydHMgd2l0aCBuZWVkbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydHNXaXRoKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgICBpZiAoaGF5c3RhY2subGVuZ3RoIDwgbmVlZGxlLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChoYXlzdGFjayA9PT0gbmVlZGxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5lZWRsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaGF5c3RhY2tbaV0gIT09IG5lZWRsZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGhheXN0YWNrIGVuZHMgd2l0aCBuZWVkbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRzV2l0aChoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgdmFyIGRpZmYgPSBoYXlzdGFjay5sZW5ndGggLSBuZWVkbGUubGVuZ3RoO1xuICAgIGlmIChkaWZmID4gMCkge1xuICAgICAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUsIGRpZmYpID09PSBkaWZmO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjayA9PT0gbmVlZGxlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWdFeHAoc2VhcmNoU3RyaW5nLCBpc1JlZ2V4LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBpZiAoIXNlYXJjaFN0cmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgcmVnZXggZnJvbSBlbXB0eSBzdHJpbmcnKTtcbiAgICB9XG4gICAgaWYgKCFpc1JlZ2V4KSB7XG4gICAgICAgIHNlYXJjaFN0cmluZyA9IGVzY2FwZVJlZ0V4cENoYXJhY3RlcnMoc2VhcmNoU3RyaW5nKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2hvbGVXb3JkKSB7XG4gICAgICAgIGlmICghL1xcQi8udGVzdChzZWFyY2hTdHJpbmcuY2hhckF0KDApKSkge1xuICAgICAgICAgICAgc2VhcmNoU3RyaW5nID0gJ1xcXFxiJyArIHNlYXJjaFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIS9cXEIvLnRlc3Qoc2VhcmNoU3RyaW5nLmNoYXJBdChzZWFyY2hTdHJpbmcubGVuZ3RoIC0gMSkpKSB7XG4gICAgICAgICAgICBzZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmcgKyAnXFxcXGInO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBtb2RpZmllcnMgPSAnJztcbiAgICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICAgICAgbW9kaWZpZXJzICs9ICdnJztcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm1hdGNoQ2FzZSkge1xuICAgICAgICBtb2RpZmllcnMgKz0gJ2knO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5tdWx0aWxpbmUpIHtcbiAgICAgICAgbW9kaWZpZXJzICs9ICdtJztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudW5pY29kZSkge1xuICAgICAgICBtb2RpZmllcnMgKz0gJ3UnO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChzZWFyY2hTdHJpbmcsIG1vZGlmaWVycyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVnRXhwTGVhZHNUb0VuZGxlc3NMb29wKHJlZ2V4cCkge1xuICAgIC8vIEV4aXQgZWFybHkgaWYgaXQncyBvbmUgb2YgdGhlc2Ugc3BlY2lhbCBjYXNlcyB3aGljaCBhcmUgbWVhbnQgdG8gbWF0Y2hcbiAgICAvLyBhZ2FpbnN0IGFuIGVtcHR5IHN0cmluZ1xuICAgIGlmIChyZWdleHAuc291cmNlID09PSAnXicgfHwgcmVnZXhwLnNvdXJjZSA9PT0gJ14kJyB8fCByZWdleHAuc291cmNlID09PSAnJCcgfHwgcmVnZXhwLnNvdXJjZSA9PT0gJ15cXFxccyokJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFdlIGNoZWNrIGFnYWluc3QgYW4gZW1wdHkgc3RyaW5nLiBJZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGRvZXNuJ3QgYWR2YW5jZVxuICAgIC8vIChlLmcuIGVuZHMgaW4gYW4gZW5kbGVzcyBsb29wKSBpdCB3aWxsIG1hdGNoIGFuIGVtcHR5IHN0cmluZy5cbiAgICB2YXIgbWF0Y2ggPSByZWdleHAuZXhlYygnJyk7XG4gICAgcmV0dXJuICEhKG1hdGNoICYmIHJlZ2V4cC5sYXN0SW5kZXggPT09IDApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlZ0V4cEZsYWdzKHJlZ2V4cCkge1xuICAgIHJldHVybiAocmVnZXhwLmdsb2JhbCA/ICdnJyA6ICcnKVxuICAgICAgICArIChyZWdleHAuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKVxuICAgICAgICArIChyZWdleHAubXVsdGlsaW5lID8gJ20nIDogJycpXG4gICAgICAgICsgKHJlZ2V4cC51bmljb2RlID8gJ3UnIDogJycpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGZpcnN0IGluZGV4IG9mIHRoZSBzdHJpbmcgdGhhdCBpcyBub3Qgd2hpdGVzcGFjZS5cbiAqIElmIHN0cmluZyBpcyBlbXB0eSBvciBjb250YWlucyBvbmx5IHdoaXRlc3BhY2VzLCByZXR1cm5zIC0xXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdE5vbldoaXRlc3BhY2VJbmRleChzdHIpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjaENvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNoQ29kZSAhPT0gMzIgLyogU3BhY2UgKi8gJiYgY2hDb2RlICE9PSA5IC8qIFRhYiAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsZWFkaW5nIHdoaXRlc3BhY2Ugb2YgdGhlIHN0cmluZy5cbiAqIElmIHRoZSBzdHJpbmcgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlcywgcmV0dXJucyBlbnRpcmUgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMZWFkaW5nV2hpdGVzcGFjZShzdHIsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoc3RhcnQgPT09IHZvaWQgMCkgeyBzdGFydCA9IDA7IH1cbiAgICBpZiAoZW5kID09PSB2b2lkIDApIHsgZW5kID0gc3RyLmxlbmd0aDsgfVxuICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIHZhciBjaENvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNoQ29kZSAhPT0gMzIgLyogU3BhY2UgKi8gJiYgY2hDb2RlICE9PSA5IC8qIFRhYiAqLykge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGxhc3QgaW5kZXggb2YgdGhlIHN0cmluZyB0aGF0IGlzIG5vdCB3aGl0ZXNwYWNlLlxuICogSWYgc3RyaW5nIGlzIGVtcHR5IG9yIGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZXMsIHJldHVybnMgLTFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhc3ROb25XaGl0ZXNwYWNlSW5kZXgoc3RyLCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gc3RyLmxlbmd0aCAtIDE7IH1cbiAgICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGNoQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoY2hDb2RlICE9PSAzMiAvKiBTcGFjZSAqLyAmJiBjaENvZGUgIT09IDkgLyogVGFiICovKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMb3dlckFzY2lpTGV0dGVyKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA+PSA5NyAvKiBhICovICYmIGNvZGUgPD0gMTIyIC8qIHogKi87XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVcHBlckFzY2lpTGV0dGVyKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gOTAgLyogWiAqLztcbn1cbmZ1bmN0aW9uIGlzQXNjaWlMZXR0ZXIoY29kZSkge1xuICAgIHJldHVybiBpc0xvd2VyQXNjaWlMZXR0ZXIoY29kZSkgfHwgaXNVcHBlckFzY2lpTGV0dGVyKGNvZGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsc0lnbm9yZUNhc2UoYSwgYikge1xuICAgIHZhciBsZW4xID0gYSA/IGEubGVuZ3RoIDogMDtcbiAgICB2YXIgbGVuMiA9IGIgPyBiLmxlbmd0aCA6IDA7XG4gICAgaWYgKGxlbjEgIT09IGxlbjIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZG9FcXVhbHNJZ25vcmVDYXNlKGEsIGIpO1xufVxuZnVuY3Rpb24gZG9FcXVhbHNJZ25vcmVDYXNlKGEsIGIsIHN0b3BBdCkge1xuICAgIGlmIChzdG9wQXQgPT09IHZvaWQgMCkgeyBzdG9wQXQgPSBhLmxlbmd0aDsgfVxuICAgIGlmICh0eXBlb2YgYSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdG9wQXQ7IGkrKykge1xuICAgICAgICB2YXIgY29kZUEgPSBhLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBjb2RlQiA9IGIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNvZGVBID09PSBjb2RlQikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYS16IEEtWlxuICAgICAgICBpZiAoaXNBc2NpaUxldHRlcihjb2RlQSkgJiYgaXNBc2NpaUxldHRlcihjb2RlQikpIHtcbiAgICAgICAgICAgIHZhciBkaWZmID0gTWF0aC5hYnMoY29kZUEgLSBjb2RlQik7XG4gICAgICAgICAgICBpZiAoZGlmZiAhPT0gMCAmJiBkaWZmICE9PSAzMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBbnkgb3RoZXIgY2hhcmNvZGVcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlQSkudG9Mb3dlckNhc2UoKSAhPT0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlQikudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdGFydHNXaXRoSWdub3JlQ2FzZShzdHIsIGNhbmRpZGF0ZSkge1xuICAgIHZhciBjYW5kaWRhdGVMZW5ndGggPSBjYW5kaWRhdGUubGVuZ3RoO1xuICAgIGlmIChjYW5kaWRhdGUubGVuZ3RoID4gc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBkb0VxdWFsc0lnbm9yZUNhc2Uoc3RyLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZUxlbmd0aCk7XG59XG4vKipcbiAqIEByZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGNvbW1vbiBwcmVmaXggb2YgdGhlIHR3byBzdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbW9uUHJlZml4TGVuZ3RoKGEsIGIpIHtcbiAgICB2YXIgaSwgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGEuY2hhckNvZGVBdChpKSAhPT0gYi5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuO1xufVxuLyoqXG4gKiBAcmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBjb21tb24gc3VmZml4IG9mIHRoZSB0d28gc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1vblN1ZmZpeExlbmd0aChhLCBiKSB7XG4gICAgdmFyIGksIGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG4gICAgdmFyIGFMYXN0SW5kZXggPSBhLmxlbmd0aCAtIDE7XG4gICAgdmFyIGJMYXN0SW5kZXggPSBiLmxlbmd0aCAtIDE7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChhLmNoYXJDb2RlQXQoYUxhc3RJbmRleCAtIGkpICE9PSBiLmNoYXJDb2RlQXQoYkxhc3RJbmRleCAtIGkpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuO1xufVxuLy8gLS0tIHVuaWNvZGVcbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3Vycm9nYXRlX3BhaXJcbi8vIFJldHVybnMgdGhlIGNvZGUgcG9pbnQgc3RhcnRpbmcgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzdHJpbmdcbi8vIENvZGUgcG9pbnRzIFUrMDAwMCB0byBVK0Q3RkYgYW5kIFUrRTAwMCB0byBVK0ZGRkYgYXJlIHJlcHJlc2VudGVkIG9uIGEgc2luZ2xlIGNoYXJhY3RlclxuLy8gQ29kZSBwb2ludHMgVSsxMDAwMCB0byBVKzEwRkZGRiBhcmUgcmVwcmVzZW50ZWQgb24gdHdvIGNvbnNlY3V0aXZlIGNoYXJhY3RlcnNcbi8vZXhwb3J0IGZ1bmN0aW9uIGdldFVuaWNvZGVQb2ludChzdHI6c3RyaW5nLCBpbmRleDpudW1iZXIsIGxlbjpudW1iZXIpOm51bWJlciB7XG4vL1x0Y29uc3QgY2hyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGluZGV4KTtcbi8vXHRpZiAoMHhEODAwIDw9IGNockNvZGUgJiYgY2hyQ29kZSA8PSAweERCRkYgJiYgaW5kZXggKyAxIDwgbGVuKSB7XG4vL1x0XHRjb25zdCBuZXh0Q2hyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGluZGV4ICsgMSk7XG4vL1x0XHRpZiAoMHhEQzAwIDw9IG5leHRDaHJDb2RlICYmIG5leHRDaHJDb2RlIDw9IDB4REZGRikge1xuLy9cdFx0XHRyZXR1cm4gKGNockNvZGUgLSAweEQ4MDApIDw8IDEwICsgKG5leHRDaHJDb2RlIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4vL1x0XHR9XG4vL1x0fVxuLy9cdHJldHVybiBjaHJDb2RlO1xuLy99XG5leHBvcnQgZnVuY3Rpb24gaXNIaWdoU3Vycm9nYXRlKGNoYXJDb2RlKSB7XG4gICAgcmV0dXJuICgweEQ4MDAgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gMHhEQkZGKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xvd1N1cnJvZ2F0ZShjaGFyQ29kZSkge1xuICAgIHJldHVybiAoMHhEQzAwIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IDB4REZGRik7XG59XG4vKipcbiAqIEdlbmVyYXRlZCB1c2luZyBodHRwczovL2dpdGh1Yi5jb20vYWxleGFuZHJ1ZGltYS91bmljb2RlLXV0aWxzL2Jsb2IvbWFzdGVyL2dlbmVyYXRlLXJ0bC10ZXN0LmpzXG4gKi9cbnZhciBDT05UQUlOU19SVEwgPSAvKD86W1xcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUQwLVxcdTA1RjRcXHUwNjA4XFx1MDYwQlxcdTA2MERcXHUwNjFCLVxcdTA2NEFcXHUwNjZELVxcdTA2NkZcXHUwNjcxLVxcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBLVxcdTA4MTVcXHUwODFBXFx1MDgyNFxcdTA4MjhcXHUwODMwLVxcdTA4NThcXHUwODVFLVxcdTA4QkRcXHUyMDBGXFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkQzRFxcdUZENTAtXFx1RkRGQ1xcdUZFNzAtXFx1RkVGQ118XFx1RDgwMltcXHVEQzAwLVxcdUREMUJcXHVERDIwLVxcdURFMDBcXHVERTEwLVxcdURFMzNcXHVERTQwLVxcdURFRTRcXHVERUVCLVxcdURGMzVcXHVERjQwLVxcdURGRkZdfFxcdUQ4MDNbXFx1REMwMC1cXHVEQ0ZGXXxcXHVEODNBW1xcdURDMDAtXFx1RENDRlxcdUREMDAtXFx1REQ0M1xcdURENTAtXFx1REZGRl18XFx1RDgzQltcXHVEQzAwLVxcdURFQkJdKS87XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgc3RyYCBjb250YWlucyBhbnkgVW5pY29kZSBjaGFyYWN0ZXIgdGhhdCBpcyBjbGFzc2lmaWVkIGFzIFwiUlwiIG9yIFwiQUxcIi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zUlRMKHN0cikge1xuICAgIHJldHVybiBDT05UQUlOU19SVEwudGVzdChzdHIpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgdXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhhbmRydWRpbWEvdW5pY29kZS11dGlscy9ibG9iL21hc3Rlci9nZW5lcmF0ZS1lbW9qaS10ZXN0LmpzXG4gKi9cbnZhciBDT05UQUlOU19FTU9KSSA9IC8oPzpbXFx1MjMxQVxcdTIzMUJcXHUyM0YwXFx1MjNGM1xcdTI2MDAtXFx1MjdCRlxcdTJCNTBcXHUyQjU1XXxcXHVEODNDW1xcdURERTYtXFx1RERGRlxcdURGMDAtXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURFNEZcXHVERTgwLVxcdURFRjhdfFxcdUQ4M0VbXFx1REQwMC1cXHVEREU2XSkvO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zRW1vamkoc3RyKSB7XG4gICAgcmV0dXJuIENPTlRBSU5TX0VNT0pJLnRlc3Qoc3RyKTtcbn1cbnZhciBJU19CQVNJQ19BU0NJSSA9IC9eW1xcdFxcblxcclxceDIwLVxceDdFXSokLztcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGBzdHJgIGNvbnRhaW5zIG9ubHkgYmFzaWMgQVNDSUkgY2hhcmFjdGVycyBpbiB0aGUgcmFuZ2UgMzIgLSAxMjYgKGluY2x1ZGluZyAzMiBhbmQgMTI2KSBvciBcXG4sIFxcciwgXFx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jhc2ljQVNDSUkoc3RyKSB7XG4gICAgcmV0dXJuIElTX0JBU0lDX0FTQ0lJLnRlc3Qoc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluc0Z1bGxXaWR0aENoYXJhY3RlcihzdHIpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChpc0Z1bGxXaWR0aENoYXJhY3RlcihzdHIuY2hhckNvZGVBdChpKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bGxXaWR0aENoYXJhY3RlcihjaGFyQ29kZSkge1xuICAgIC8vIERvIGEgY2hlYXAgdHJpY2sgdG8gYmV0dGVyIHN1cHBvcnQgd3JhcHBpbmcgb2Ygd2lkZSBjaGFyYWN0ZXJzLCB0cmVhdCB0aGVtIGFzIDIgY29sdW1uc1xuICAgIC8vIGh0dHA6Ly9qcmdyYXBoaXgubmV0L3Jlc2VhcmNoL3VuaWNvZGVfYmxvY2tzLnBocFxuICAgIC8vICAgICAgICAgIDJFODAg4oCUIDJFRkYgICBDSksgUmFkaWNhbHMgU3VwcGxlbWVudFxuICAgIC8vICAgICAgICAgIDJGMDAg4oCUIDJGREYgICBLYW5neGkgUmFkaWNhbHNcbiAgICAvLyAgICAgICAgICAyRkYwIOKAlCAyRkZGICAgSWRlb2dyYXBoaWMgRGVzY3JpcHRpb24gQ2hhcmFjdGVyc1xuICAgIC8vICAgICAgICAgIDMwMDAg4oCUIDMwM0YgICBDSksgU3ltYm9scyBhbmQgUHVuY3R1YXRpb25cbiAgICAvLyAgICAgICAgICAzMDQwIOKAlCAzMDlGICAgSGlyYWdhbmFcbiAgICAvLyAgICAgICAgICAzMEEwIOKAlCAzMEZGICAgS2F0YWthbmFcbiAgICAvLyAgICAgICAgICAzMTAwIOKAlCAzMTJGICAgQm9wb21vZm9cbiAgICAvLyAgICAgICAgICAzMTMwIOKAlCAzMThGICAgSGFuZ3VsIENvbXBhdGliaWxpdHkgSmFtb1xuICAgIC8vICAgICAgICAgIDMxOTAg4oCUIDMxOUYgICBLYW5idW5cbiAgICAvLyAgICAgICAgICAzMUEwIOKAlCAzMUJGICAgQm9wb21vZm8gRXh0ZW5kZWRcbiAgICAvLyAgICAgICAgICAzMUYwIOKAlCAzMUZGICAgS2F0YWthbmEgUGhvbmV0aWMgRXh0ZW5zaW9uc1xuICAgIC8vICAgICAgICAgIDMyMDAg4oCUIDMyRkYgICBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzXG4gICAgLy8gICAgICAgICAgMzMwMCDigJQgMzNGRiAgIENKSyBDb21wYXRpYmlsaXR5XG4gICAgLy8gICAgICAgICAgMzQwMCDigJQgNERCRiAgIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgRXh0ZW5zaW9uIEFcbiAgICAvLyAgICAgICAgICA0REMwIOKAlCA0REZGICAgWWlqaW5nIEhleGFncmFtIFN5bWJvbHNcbiAgICAvLyAgICAgICAgICA0RTAwIOKAlCA5RkZGICAgQ0pLIFVuaWZpZWQgSWRlb2dyYXBoc1xuICAgIC8vICAgICAgICAgIEEwMDAg4oCUIEE0OEYgICBZaSBTeWxsYWJsZXNcbiAgICAvLyAgICAgICAgICBBNDkwIOKAlCBBNENGICAgWWkgUmFkaWNhbHNcbiAgICAvLyAgICAgICAgICBBQzAwIOKAlCBEN0FGICAgSGFuZ3VsIFN5bGxhYmxlc1xuICAgIC8vIFtJR05PUkVdIEQ4MDAg4oCUIERCN0YgICBIaWdoIFN1cnJvZ2F0ZXNcbiAgICAvLyBbSUdOT1JFXSBEQjgwIOKAlCBEQkZGICAgSGlnaCBQcml2YXRlIFVzZSBTdXJyb2dhdGVzXG4gICAgLy8gW0lHTk9SRV0gREMwMCDigJQgREZGRiAgIExvdyBTdXJyb2dhdGVzXG4gICAgLy8gW0lHTk9SRV0gRTAwMCDigJQgRjhGRiAgIFByaXZhdGUgVXNlIEFyZWFcbiAgICAvLyAgICAgICAgICBGOTAwIOKAlCBGQUZGICAgQ0pLIENvbXBhdGliaWxpdHkgSWRlb2dyYXBoc1xuICAgIC8vIFtJR05PUkVdIEZCMDAg4oCUIEZCNEYgICBBbHBoYWJldGljIFByZXNlbnRhdGlvbiBGb3Jtc1xuICAgIC8vIFtJR05PUkVdIEZCNTAg4oCUIEZERkYgICBBcmFiaWMgUHJlc2VudGF0aW9uIEZvcm1zLUFcbiAgICAvLyBbSUdOT1JFXSBGRTAwIOKAlCBGRTBGICAgVmFyaWF0aW9uIFNlbGVjdG9yc1xuICAgIC8vIFtJR05PUkVdIEZFMjAg4oCUIEZFMkYgICBDb21iaW5pbmcgSGFsZiBNYXJrc1xuICAgIC8vIFtJR05PUkVdIEZFMzAg4oCUIEZFNEYgICBDSksgQ29tcGF0aWJpbGl0eSBGb3Jtc1xuICAgIC8vIFtJR05PUkVdIEZFNTAg4oCUIEZFNkYgICBTbWFsbCBGb3JtIFZhcmlhbnRzXG4gICAgLy8gW0lHTk9SRV0gRkU3MCDigJQgRkVGRiAgIEFyYWJpYyBQcmVzZW50YXRpb24gRm9ybXMtQlxuICAgIC8vICAgICAgICAgIEZGMDAg4oCUIEZGRUYgICBIYWxmd2lkdGggYW5kIEZ1bGx3aWR0aCBGb3Jtc1xuICAgIC8vICAgICAgICAgICAgICAgW2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hhbGZ3aWR0aF9hbmRfZnVsbHdpZHRoX2Zvcm1zXVxuICAgIC8vICAgICAgICAgICAgICAgb2Ygd2hpY2ggRkYwMSAtIEZGNUUgZnVsbHdpZHRoIEFTQ0lJIG9mIDIxIHRvIDdFXG4gICAgLy8gW0lHTk9SRV0gICAgYW5kIEZGNjUgLSBGRkRDIGhhbGZ3aWR0aCBvZiBLYXRha2FuYSBhbmQgSGFuZ3VsXG4gICAgLy8gW0lHTk9SRV0gRkZGMCDigJQgRkZGRiAgIFNwZWNpYWxzXG4gICAgY2hhckNvZGUgPSArY2hhckNvZGU7IC8vIEBwZXJmXG4gICAgcmV0dXJuICgoY2hhckNvZGUgPj0gMHgyRTgwICYmIGNoYXJDb2RlIDw9IDB4RDdBRilcbiAgICAgICAgfHwgKGNoYXJDb2RlID49IDB4RjkwMCAmJiBjaGFyQ29kZSA8PSAweEZBRkYpXG4gICAgICAgIHx8IChjaGFyQ29kZSA+PSAweEZGMDEgJiYgY2hhckNvZGUgPD0gMHhGRjVFKSk7XG59XG4vLyAtLSBVVEYtOCBCT01cbmV4cG9ydCB2YXIgVVRGOF9CT01fQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NTI3OSAvKiBVVEY4X0JPTSAqLyk7XG5leHBvcnQgZnVuY3Rpb24gc3RhcnRzV2l0aFVURjhCT00oc3RyKSB7XG4gICAgcmV0dXJuICEhKHN0ciAmJiBzdHIubGVuZ3RoID4gMCAmJiBzdHIuY2hhckNvZGVBdCgwKSA9PT0gNjUyNzkgLyogVVRGOF9CT00gKi8pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVCdG9hKHN0cikge1xuICAgIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gd2UgdXNlIGVuY29kZVVSSUNvbXBvbmVudCBiZWNhdXNlIGJ0b2EgZmFpbHMgZm9yIG5vbiBMYXRpbiAxIHZhbHVlc1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdChzLCBjb3VudCkge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHM7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBfdHlwZW9mID0ge1xuICAgIG51bWJlcjogJ251bWJlcicsXG4gICAgc3RyaW5nOiAnc3RyaW5nJyxcbiAgICB1bmRlZmluZWQ6ICd1bmRlZmluZWQnLFxuICAgIG9iamVjdDogJ29iamVjdCcsXG4gICAgZnVuY3Rpb246ICdmdW5jdGlvbidcbn07XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgQXJyYXkgb3Igbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShhcnJheSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KTtcbiAgICB9XG4gICAgaWYgKGFycmF5ICYmIHR5cGVvZiAoYXJyYXkubGVuZ3RoKSA9PT0gX3R5cGVvZi5udW1iZXIgJiYgYXJyYXkuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgU3RyaW5nIG9yIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICAgIGlmICh0eXBlb2YgKHN0cikgPT09IF90eXBlb2Yuc3RyaW5nIHx8IHN0ciBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgcGFyYW1ldGVyIGlzIG9mIHR5cGUgYG9iamVjdGAgYnV0ICoqbm90KipcbiAqXHRgbnVsbGAsIGFuIGBhcnJheWAsIGEgYHJlZ2V4cGAsIG5vciBhIGBkYXRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIC8vIFRoZSBtZXRob2QgY2FuJ3QgZG8gYSB0eXBlIGNhc3Qgc2luY2UgdGhlcmUgYXJlIHR5cGUgKGxpa2Ugc3RyaW5ncykgd2hpY2hcbiAgICAvLyBhcmUgc3ViY2xhc3NlcyBvZiBhbnkgcHV0IG5vdCBwb3NpdHZlbHkgbWF0Y2hlZCBieSB0aGUgZnVuY3Rpb24uIEhlbmNlIHR5cGVcbiAgICAvLyBuYXJyb3dpbmcgcmVzdWx0cyBpbiB3cm9uZyByZXN1bHRzLlxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBfdHlwZW9mLm9iamVjdFxuICAgICAgICAmJiBvYmogIT09IG51bGxcbiAgICAgICAgJiYgIUFycmF5LmlzQXJyYXkob2JqKVxuICAgICAgICAmJiAhKG9iaiBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgJiYgIShvYmogaW5zdGFuY2VvZiBEYXRlKTtcbn1cbi8qKlxuICogSW4gKipjb250cmFzdCoqIHRvIGp1c3QgY2hlY2tpbmcgYHR5cGVvZmAgdGhpcyB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBgTmFOYC5cbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgTnVtYmVyIG9yIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIGlmICgodHlwZW9mIChvYmopID09PSBfdHlwZW9mLm51bWJlciB8fCBvYmogaW5zdGFuY2VvZiBOdW1iZXIpICYmICFpc05hTihvYmopKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgQm9vbGVhbiBvciBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlO1xufVxuLyoqXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiAob2JqKSA9PT0gX3R5cGVvZi51bmRlZmluZWQ7XG59XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IG9iaiA9PT0gbnVsbDtcbn1cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhbiBlbXB0eSBKYXZhU2NyaXB0IE9iamVjdCBvciBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iaikge1xuICAgIGlmICghaXNPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgRnVuY3Rpb24gb3Igbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gX3R5cGVvZi5mdW5jdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbnN0cmFpbnRzKGFyZ3MsIGNvbnN0cmFpbnRzKSB7XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKGFyZ3MubGVuZ3RoLCBjb25zdHJhaW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFsaWRhdGVDb25zdHJhaW50KGFyZ3NbaV0sIGNvbnN0cmFpbnRzW2ldKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb25zdHJhaW50KGFyZywgY29uc3RyYWludCkge1xuICAgIGlmIChpc1N0cmluZyhjb25zdHJhaW50KSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZyAhPT0gY29uc3RyYWludCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXJndW1lbnQgZG9lcyBub3QgbWF0Y2ggY29uc3RyYWludDogdHlwZW9mIFwiICsgY29uc3RyYWludCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNGdW5jdGlvbihjb25zdHJhaW50KSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGFyZyBpbnN0YW5jZW9mIGNvbnN0cmFpbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkT3JOdWxsKGFyZykgJiYgYXJnLmNvbnN0cnVjdG9yID09PSBjb25zdHJhaW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnN0cmFpbnQubGVuZ3RoID09PSAxICYmIGNvbnN0cmFpbnQuY2FsbCh1bmRlZmluZWQsIGFyZykgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcmd1bWVudCBkb2VzIG5vdCBtYXRjaCBvbmUgb2YgdGhlc2UgY29uc3RyYWludHM6IGFyZyBpbnN0YW5jZW9mIGNvbnN0cmFpbnQsIGFyZy5jb25zdHJ1Y3RvciA9PT0gY29uc3RyYWludCwgbm9yIGNvbnN0cmFpbnQoYXJnKSA9PT0gdHJ1ZVwiKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvcGVydHlOYW1lcyhvYmopIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gICAgd2hpbGUgKE9iamVjdC5wcm90b3R5cGUgIT09IHByb3RvKSB7XG4gICAgICAgIHJlcyA9IHJlcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pKTtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBudWxsIHRvIHVuZGVmaW5lZCwgcGFzc2VzIGFsbCBvdGhlciB2YWx1ZXMgdGhyb3VnaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhOdWxsQXNVbmRlZmluZWQoeCkge1xuICAgIHJldHVybiB4ID09PSBudWxsID8gdW5kZWZpbmVkIDogeDtcbn1cbi8qKlxuICogQ29udmVydHMgdW5kZWZpbmVkIHRvIG51bGwsIHBhc3NlcyBhbGwgb3RoZXIgdmFsdWVzIHRocm91Z2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aXRoVW5kZWZpbmVkQXNOdWxsKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHg7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9hO1xuaW1wb3J0IHsgaXNXaW5kb3dzIH0gZnJvbSAnLi9wbGF0Zm9ybS5qcyc7XG52YXIgX3NjaGVtZVBhdHRlcm4gPSAvXlxcd1tcXHdcXGQrLi1dKiQvO1xudmFyIF9zaW5nbGVTbGFzaFN0YXJ0ID0gL15cXC8vO1xudmFyIF9kb3VibGVTbGFzaFN0YXJ0ID0gL15cXC9cXC8vO1xudmFyIF90aHJvd09uTWlzc2luZ1NjaGVtYSA9IHRydWU7XG5mdW5jdGlvbiBfdmFsaWRhdGVVcmkocmV0LCBfc3RyaWN0KSB7XG4gICAgLy8gc2NoZW1lLCBtdXN0IGJlIHNldFxuICAgIGlmICghcmV0LnNjaGVtZSkge1xuICAgICAgICBpZiAoX3N0cmljdCB8fCBfdGhyb3dPbk1pc3NpbmdTY2hlbWEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIltVcmlFcnJvcl06IFNjaGVtZSBpcyBtaXNzaW5nOiB7c2NoZW1lOiBcXFwiXFxcIiwgYXV0aG9yaXR5OiBcXFwiXCIgKyByZXQuYXV0aG9yaXR5ICsgXCJcXFwiLCBwYXRoOiBcXFwiXCIgKyByZXQucGF0aCArIFwiXFxcIiwgcXVlcnk6IFxcXCJcIiArIHJldC5xdWVyeSArIFwiXFxcIiwgZnJhZ21lbnQ6IFxcXCJcIiArIHJldC5mcmFnbWVudCArIFwiXFxcIn1cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbVXJpRXJyb3JdOiBTY2hlbWUgaXMgbWlzc2luZzoge3NjaGVtZTogXFxcIlxcXCIsIGF1dGhvcml0eTogXFxcIlwiICsgcmV0LmF1dGhvcml0eSArIFwiXFxcIiwgcGF0aDogXFxcIlwiICsgcmV0LnBhdGggKyBcIlxcXCIsIHF1ZXJ5OiBcXFwiXCIgKyByZXQucXVlcnkgKyBcIlxcXCIsIGZyYWdtZW50OiBcXFwiXCIgKyByZXQuZnJhZ21lbnQgKyBcIlxcXCJ9XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNjaGVtZSwgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjFcbiAgICAvLyBBTFBIQSAqKCBBTFBIQSAvIERJR0lUIC8gXCIrXCIgLyBcIi1cIiAvIFwiLlwiIClcbiAgICBpZiAocmV0LnNjaGVtZSAmJiAhX3NjaGVtZVBhdHRlcm4udGVzdChyZXQuc2NoZW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tVcmlFcnJvcl06IFNjaGVtZSBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMuJyk7XG4gICAgfVxuICAgIC8vIHBhdGgsIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjNcbiAgICAvLyBJZiBhIFVSSSBjb250YWlucyBhbiBhdXRob3JpdHkgY29tcG9uZW50LCB0aGVuIHRoZSBwYXRoIGNvbXBvbmVudFxuICAgIC8vIG11c3QgZWl0aGVyIGJlIGVtcHR5IG9yIGJlZ2luIHdpdGggYSBzbGFzaCAoXCIvXCIpIGNoYXJhY3Rlci4gIElmIGEgVVJJXG4gICAgLy8gZG9lcyBub3QgY29udGFpbiBhbiBhdXRob3JpdHkgY29tcG9uZW50LCB0aGVuIHRoZSBwYXRoIGNhbm5vdCBiZWdpblxuICAgIC8vIHdpdGggdHdvIHNsYXNoIGNoYXJhY3RlcnMgKFwiLy9cIikuXG4gICAgaWYgKHJldC5wYXRoKSB7XG4gICAgICAgIGlmIChyZXQuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICBpZiAoIV9zaW5nbGVTbGFzaFN0YXJ0LnRlc3QocmV0LnBhdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbVXJpRXJyb3JdOiBJZiBhIFVSSSBjb250YWlucyBhbiBhdXRob3JpdHkgY29tcG9uZW50LCB0aGVuIHRoZSBwYXRoIGNvbXBvbmVudCBtdXN0IGVpdGhlciBiZSBlbXB0eSBvciBiZWdpbiB3aXRoIGEgc2xhc2ggKFwiL1wiKSBjaGFyYWN0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfZG91YmxlU2xhc2hTdGFydC50ZXN0KHJldC5wYXRoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1VyaUVycm9yXTogSWYgYSBVUkkgZG9lcyBub3QgY29udGFpbiBhbiBhdXRob3JpdHkgY29tcG9uZW50LCB0aGVuIHRoZSBwYXRoIGNhbm5vdCBiZWdpbiB3aXRoIHR3byBzbGFzaCBjaGFyYWN0ZXJzIChcIi8vXCIpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBmb3IgYSB3aGlsZSB3ZSBhbGxvd2VkIHVyaXMgKndpdGhvdXQqIHNjaGVtZXMgYW5kIHRoaXMgaXMgdGhlIG1pZ3JhdGlvblxuLy8gZm9yIHRoZW0sIGUuZy4gYW4gdXJpIHdpdGhvdXQgc2NoZW1lIGFuZCB3aXRob3V0IHN0cmljdC1tb2RlIHdhcm5zIGFuZCBmYWxsc1xuLy8gYmFjayB0byB0aGUgZmlsZS1zY2hlbWUuIHRoYXQgc2hvdWxkIGNhdXNlIHRoZSBsZWFzdCBjYXJuYWdlIGFuZCBzdGlsbCBiZSBhXG4vLyBjbGVhciB3YXJuaW5nXG5mdW5jdGlvbiBfc2NoZW1lRml4KHNjaGVtZSwgX3N0cmljdCkge1xuICAgIGlmIChfc3RyaWN0IHx8IF90aHJvd09uTWlzc2luZ1NjaGVtYSkge1xuICAgICAgICByZXR1cm4gc2NoZW1lIHx8IF9lbXB0eTtcbiAgICB9XG4gICAgaWYgKCFzY2hlbWUpIHtcbiAgICAgICAgY29uc29sZS50cmFjZSgnQkFEIHVyaSBsYWNrcyBzY2hlbWUsIGZhbGxpbmcgYmFjayB0byBmaWxlLXNjaGVtZS4nKTtcbiAgICAgICAgc2NoZW1lID0gJ2ZpbGUnO1xuICAgIH1cbiAgICByZXR1cm4gc2NoZW1lO1xufVxuLy8gaW1wbGVtZW50cyBhIGJpdCBvZiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTVcbmZ1bmN0aW9uIF9yZWZlcmVuY2VSZXNvbHV0aW9uKHNjaGVtZSwgcGF0aCkge1xuICAgIC8vIHRoZSBzbGFzaC1jaGFyYWN0ZXIgaXMgb3VyICdkZWZhdWx0IGJhc2UnIGFzIHdlIGRvbid0XG4gICAgLy8gc3VwcG9ydCBjb25zdHJ1Y3RpbmcgVVJJcyByZWxhdGl2ZSB0byBvdGhlciBVUklzLiBUaGlzXG4gICAgLy8gYWxzbyBtZWFucyB0aGF0IHdlIGFsdGVyIGFuZCBwb3RlbnRpYWxseSBicmVhayBwYXRocy5cbiAgICAvLyBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi01LjEuNFxuICAgIHN3aXRjaCAoc2NoZW1lKSB7XG4gICAgICAgIGNhc2UgJ2h0dHBzJzpcbiAgICAgICAgY2FzZSAnaHR0cCc6XG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IF9zbGFzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhbMF0gIT09IF9zbGFzaCkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBfc2xhc2ggKyBwYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxudmFyIF9lbXB0eSA9ICcnO1xudmFyIF9zbGFzaCA9ICcvJztcbnZhciBfcmVnZXhwID0gL14oKFteOi8/I10rPyk6KT8oXFwvXFwvKFteLz8jXSopKT8oW14/I10qKShcXD8oW14jXSopKT8oIyguKikpPy87XG4vKipcbiAqIFVuaWZvcm0gUmVzb3VyY2UgSWRlbnRpZmllciAoVVJJKSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2LlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbXBsZSBwYXJzZXIgd2hpY2ggY3JlYXRlcyB0aGUgYmFzaWMgY29tcG9uZW50IHBhcnRzXG4gKiAoaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMpIHdpdGggbWluaW1hbCB2YWxpZGF0aW9uXG4gKiBhbmQgZW5jb2RpbmcuXG4gKlxuICogICAgICAgZm9vOi8vZXhhbXBsZS5jb206ODA0Mi9vdmVyL3RoZXJlP25hbWU9ZmVycmV0I25vc2VcbiAqICAgICAgIFxcXy8gICBcXF9fX19fX19fX19fX19fL1xcX19fX19fX19fLyBcXF9fX19fX19fXy8gXFxfXy9cbiAqICAgICAgICB8ICAgICAgICAgICB8ICAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgICAgIHxcbiAqICAgICBzY2hlbWUgICAgIGF1dGhvcml0eSAgICAgICBwYXRoICAgICAgICBxdWVyeSAgIGZyYWdtZW50XG4gKiAgICAgICAgfCAgIF9fX19fX19fX19fX19fX19fX19fX3xfX1xuICogICAgICAgLyBcXCAvICAgICAgICAgICAgICAgICAgICAgICAgXFxcbiAqICAgICAgIHVybjpleGFtcGxlOmFuaW1hbDpmZXJyZXQ6bm9zZVxuICovXG52YXIgVVJJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFVSSShzY2hlbWVPckRhdGEsIGF1dGhvcml0eSwgcGF0aCwgcXVlcnksIGZyYWdtZW50LCBfc3RyaWN0KSB7XG4gICAgICAgIGlmIChfc3RyaWN0ID09PSB2b2lkIDApIHsgX3N0cmljdCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2NoZW1lT3JEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5zY2hlbWUgPSBzY2hlbWVPckRhdGEuc2NoZW1lIHx8IF9lbXB0eTtcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXR5ID0gc2NoZW1lT3JEYXRhLmF1dGhvcml0eSB8fCBfZW1wdHk7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSBzY2hlbWVPckRhdGEucGF0aCB8fCBfZW1wdHk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gc2NoZW1lT3JEYXRhLnF1ZXJ5IHx8IF9lbXB0eTtcbiAgICAgICAgICAgIHRoaXMuZnJhZ21lbnQgPSBzY2hlbWVPckRhdGEuZnJhZ21lbnQgfHwgX2VtcHR5O1xuICAgICAgICAgICAgLy8gbm8gdmFsaWRhdGlvbiBiZWNhdXNlIGl0J3MgdGhpcyBVUklcbiAgICAgICAgICAgIC8vIHRoYXQgY3JlYXRlcyB1cmkgY29tcG9uZW50cy5cbiAgICAgICAgICAgIC8vIF92YWxpZGF0ZVVyaSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1lID0gX3NjaGVtZUZpeChzY2hlbWVPckRhdGEsIF9zdHJpY3QpO1xuICAgICAgICAgICAgdGhpcy5hdXRob3JpdHkgPSBhdXRob3JpdHkgfHwgX2VtcHR5O1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gX3JlZmVyZW5jZVJlc29sdXRpb24odGhpcy5zY2hlbWUsIHBhdGggfHwgX2VtcHR5KTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeSB8fCBfZW1wdHk7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQgfHwgX2VtcHR5O1xuICAgICAgICAgICAgX3ZhbGlkYXRlVXJpKHRoaXMsIF9zdHJpY3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFVSSS5pc1VyaSA9IGZ1bmN0aW9uICh0aGluZykge1xuICAgICAgICBpZiAodGhpbmcgaW5zdGFuY2VvZiBVUkkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaW5nLmF1dGhvcml0eSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5mcmFnbWVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5wYXRoID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaW5nLnF1ZXJ5ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaW5nLnNjaGVtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5mc1BhdGggPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy53aXRoID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpbmcudG9TdHJpbmcgPT09ICdmdW5jdGlvbic7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVVJJLnByb3RvdHlwZSwgXCJmc1BhdGhcIiwge1xuICAgICAgICAvLyAtLS0tIGZpbGVzeXN0ZW0gcGF0aCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgZmlsZSBzeXN0ZW0gcGF0aCBvZiB0aGlzIFVSSS5cbiAgICAgICAgICogV2lsbCBoYW5kbGUgVU5DIHBhdGhzLCBub3JtYWxpemVzIHdpbmRvd3MgZHJpdmUgbGV0dGVycyB0byBsb3dlci1jYXNlLCBhbmQgdXNlcyB0aGVcbiAgICAgICAgICogcGxhdGZvcm0gc3BlY2lmaWMgcGF0aCBzZXBhcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqICogV2lsbCAqbm90KiB2YWxpZGF0ZSB0aGUgcGF0aCBmb3IgaW52YWxpZCBjaGFyYWN0ZXJzIGFuZCBzZW1hbnRpY3MuXG4gICAgICAgICAqICogV2lsbCAqbm90KiBsb29rIGF0IHRoZSBzY2hlbWUgb2YgdGhpcyBVUkkuXG4gICAgICAgICAqICogVGhlIHJlc3VsdCBzaGFsbCAqbm90KiBiZSB1c2VkIGZvciBkaXNwbGF5IHB1cnBvc2VzIGJ1dCBmb3IgYWNjZXNzaW5nIGEgZmlsZSBvbiBkaXNrLlxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgKmRpZmZlcmVuY2UqIHRvIGBVUkkjcGF0aGAgaXMgdGhlIHVzZSBvZiB0aGUgcGxhdGZvcm0gc3BlY2lmaWMgc2VwYXJhdG9yIGFuZCB0aGUgaGFuZGxpbmdcbiAgICAgICAgICogb2YgVU5DIHBhdGhzLiBTZWUgdGhlIGJlbG93IHNhbXBsZSBvZiBhIGZpbGUtdXJpIHdpdGggYW4gYXV0aG9yaXR5IChVTkMgcGF0aCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYHRzXG4gICAgICAgICAgICBjb25zdCB1ID0gVVJJLnBhcnNlKCdmaWxlOi8vc2VydmVyL2MkL2ZvbGRlci9maWxlLnR4dCcpXG4gICAgICAgICAgICB1LmF1dGhvcml0eSA9PT0gJ3NlcnZlcidcbiAgICAgICAgICAgIHUucGF0aCA9PT0gJy9zaGFyZXMvYyQvZmlsZS50eHQnXG4gICAgICAgICAgICB1LmZzUGF0aCA9PT0gJ1xcXFxzZXJ2ZXJcXGMkXFxmb2xkZXJcXGZpbGUudHh0J1xuICAgICAgICBgYGBcbiAgICAgICAgICpcbiAgICAgICAgICogVXNpbmcgYFVSSSNwYXRoYCB0byByZWFkIGEgZmlsZSAodXNpbmcgZnMtYXBpcykgd291bGQgbm90IGJlIGVub3VnaCBiZWNhdXNlIHBhcnRzIG9mIHRoZSBwYXRoLFxuICAgICAgICAgKiBuYW1lbHkgdGhlIHNlcnZlciBuYW1lLCB3b3VsZCBiZSBtaXNzaW5nLiBUaGVyZWZvcmUgYFVSSSNmc1BhdGhgIGV4aXN0cyAtIGl0J3Mgc3VnYXIgdG8gZWFzZSB3b3JraW5nXG4gICAgICAgICAqIHdpdGggVVJJcyB0aGF0IHJlcHJlc2VudCBmaWxlcyBvbiBkaXNrIChgZmlsZWAgc2NoZW1lKS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuc2NoZW1lICE9PSAnZmlsZScpIHtcbiAgICAgICAgICAgIC8vIFx0Y29uc29sZS53YXJuKGBbVXJpRXJyb3JdIGNhbGxpbmcgZnNQYXRoIHdpdGggc2NoZW1lICR7dGhpcy5zY2hlbWV9YCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gX21ha2VGc1BhdGgodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIC0tLS0gbW9kaWZ5IHRvIG5ldyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgVVJJLnByb3RvdHlwZS53aXRoID0gZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjaGVtZSA9IGNoYW5nZS5zY2hlbWUsIGF1dGhvcml0eSA9IGNoYW5nZS5hdXRob3JpdHksIHBhdGggPSBjaGFuZ2UucGF0aCwgcXVlcnkgPSBjaGFuZ2UucXVlcnksIGZyYWdtZW50ID0gY2hhbmdlLmZyYWdtZW50O1xuICAgICAgICBpZiAoc2NoZW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjaGVtZSA9IHRoaXMuc2NoZW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNjaGVtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2NoZW1lID0gX2VtcHR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRob3JpdHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXV0aG9yaXR5ID0gdGhpcy5hdXRob3JpdHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXV0aG9yaXR5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBhdXRob3JpdHkgPSBfZW1wdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGF0aCA9IHRoaXMucGF0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXRoID09PSBudWxsKSB7XG4gICAgICAgICAgICBwYXRoID0gX2VtcHR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeSA9IHRoaXMucXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gX2VtcHR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcmFnbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuZnJhZ21lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZnJhZ21lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gX2VtcHR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY2hlbWUgPT09IHRoaXMuc2NoZW1lXG4gICAgICAgICAgICAmJiBhdXRob3JpdHkgPT09IHRoaXMuYXV0aG9yaXR5XG4gICAgICAgICAgICAmJiBwYXRoID09PSB0aGlzLnBhdGhcbiAgICAgICAgICAgICYmIHF1ZXJ5ID09PSB0aGlzLnF1ZXJ5XG4gICAgICAgICAgICAmJiBmcmFnbWVudCA9PT0gdGhpcy5mcmFnbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBfVVJJKHNjaGVtZSwgYXV0aG9yaXR5LCBwYXRoLCBxdWVyeSwgZnJhZ21lbnQpO1xuICAgIH07XG4gICAgLy8gLS0tLSBwYXJzZSAmIHZhbGlkYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgVVJJIGZyb20gYSBzdHJpbmcsIGUuZy4gYGh0dHA6Ly93d3cubXNmdC5jb20vc29tZS9wYXRoYCxcbiAgICAgKiBgZmlsZTovLy91c3IvaG9tZWAsIG9yIGBzY2hlbWU6d2l0aC9wYXRoYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB3aGljaCByZXByZXNlbnRzIGFuIFVSSSAoc2VlIGBVUkkjdG9TdHJpbmdgKS5cbiAgICAgKi9cbiAgICBVUkkucGFyc2UgPSBmdW5jdGlvbiAodmFsdWUsIF9zdHJpY3QpIHtcbiAgICAgICAgaWYgKF9zdHJpY3QgPT09IHZvaWQgMCkgeyBfc3RyaWN0ID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIG1hdGNoID0gX3JlZ2V4cC5leGVjKHZhbHVlKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBfVVJJKF9lbXB0eSwgX2VtcHR5LCBfZW1wdHksIF9lbXB0eSwgX2VtcHR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IF9VUkkobWF0Y2hbMl0gfHwgX2VtcHR5LCBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbNF0gfHwgX2VtcHR5KSwgZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzVdIHx8IF9lbXB0eSksIGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFs3XSB8fCBfZW1wdHkpLCBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbOV0gfHwgX2VtcHR5KSwgX3N0cmljdCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFVSSSBmcm9tIGEgZmlsZSBzeXN0ZW0gcGF0aCwgZS5nLiBgYzpcXG15XFxmaWxlc2AsXG4gICAgICogYC91c3IvaG9tZWAsIG9yIGBcXFxcc2VydmVyXFxzaGFyZVxcc29tZVxccGF0aGAuXG4gICAgICpcbiAgICAgKiBUaGUgKmRpZmZlcmVuY2UqIGJldHdlZW4gYFVSSSNwYXJzZWAgYW5kIGBVUkkjZmlsZWAgaXMgdGhhdCB0aGUgbGF0dGVyIHRyZWF0cyB0aGUgYXJndW1lbnRcbiAgICAgKiBhcyBwYXRoLCBub3QgYXMgc3RyaW5naWZpZWQtdXJpLiBFLmcuIGBVUkkuZmlsZShwYXRoKWAgaXMgKipub3QgdGhlIHNhbWUgYXMqKlxuICAgICAqIGBVUkkucGFyc2UoJ2ZpbGU6Ly8nICsgcGF0aClgIGJlY2F1c2UgdGhlIHBhdGggbWlnaHQgY29udGFpbiBjaGFyYWN0ZXJzIHRoYXQgYXJlXG4gICAgICogaW50ZXJwcmV0ZWQgKCMgYW5kID8pLiBTZWUgdGhlIGZvbGxvd2luZyBzYW1wbGU6XG4gICAgICogYGBgdHNcbiAgICBjb25zdCBnb29kID0gVVJJLmZpbGUoJy9jb2RpbmcvYyMvcHJvamVjdDEnKTtcbiAgICBnb29kLnNjaGVtZSA9PT0gJ2ZpbGUnO1xuICAgIGdvb2QucGF0aCA9PT0gJy9jb2RpbmcvYyMvcHJvamVjdDEnO1xuICAgIGdvb2QuZnJhZ21lbnQgPT09ICcnO1xuICAgIGNvbnN0IGJhZCA9IFVSSS5wYXJzZSgnZmlsZTovLycgKyAnL2NvZGluZy9jIy9wcm9qZWN0MScpO1xuICAgIGJhZC5zY2hlbWUgPT09ICdmaWxlJztcbiAgICBiYWQucGF0aCA9PT0gJy9jb2RpbmcvYyc7IC8vIHBhdGggaXMgbm93IGJyb2tlblxuICAgIGJhZC5mcmFnbWVudCA9PT0gJy9wcm9qZWN0MSc7XG4gICAgYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGF0aCBBIGZpbGUgc3lzdGVtIHBhdGggKHNlZSBgVVJJI2ZzUGF0aGApXG4gICAgICovXG4gICAgVVJJLmZpbGUgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICB2YXIgYXV0aG9yaXR5ID0gX2VtcHR5O1xuICAgICAgICAvLyBub3JtYWxpemUgdG8gZndkLXNsYXNoZXMgb24gd2luZG93cyxcbiAgICAgICAgLy8gb24gb3RoZXIgc3lzdGVtcyBid2Qtc2xhc2hlcyBhcmUgdmFsaWRcbiAgICAgICAgLy8gZmlsZW5hbWUgY2hhcmFjdGVyLCBlZyAvZlxcb28vYmFcXHIudHh0XG4gICAgICAgIGlmIChpc1dpbmRvd3MpIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcXFwvZywgX3NsYXNoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBmb3IgYXV0aG9yaXR5IGFzIHVzZWQgaW4gVU5DIHNoYXJlc1xuICAgICAgICAvLyBvciB1c2UgdGhlIHBhdGggYXMgZ2l2ZW5cbiAgICAgICAgaWYgKHBhdGhbMF0gPT09IF9zbGFzaCAmJiBwYXRoWzFdID09PSBfc2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBwYXRoLmluZGV4T2YoX3NsYXNoLCAyKTtcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5ID0gcGF0aC5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICAgICAgcGF0aCA9IF9zbGFzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF1dGhvcml0eSA9IHBhdGguc3Vic3RyaW5nKDIsIGlkeCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKGlkeCkgfHwgX3NsYXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgX1VSSSgnZmlsZScsIGF1dGhvcml0eSwgcGF0aCwgX2VtcHR5LCBfZW1wdHkpO1xuICAgIH07XG4gICAgVVJJLmZyb20gPSBmdW5jdGlvbiAoY29tcG9uZW50cykge1xuICAgICAgICByZXR1cm4gbmV3IF9VUkkoY29tcG9uZW50cy5zY2hlbWUsIGNvbXBvbmVudHMuYXV0aG9yaXR5LCBjb21wb25lbnRzLnBhdGgsIGNvbXBvbmVudHMucXVlcnksIGNvbXBvbmVudHMuZnJhZ21lbnQpO1xuICAgIH07XG4gICAgLy8gLS0tLSBwcmludGluZy9leHRlcm5hbGl6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGZvciB0aGlzIFVSSS4gSXQncyBndWFyYW50ZWVkIHRoYXQgY2FsbGluZ1xuICAgICAqIGBVUkkucGFyc2VgIHdpdGggdGhlIHJlc3VsdCBvZiB0aGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYW4gVVJJIHdoaWNoIGlzIGVxdWFsXG4gICAgICogdG8gdGhpcyBVUkkuXG4gICAgICpcbiAgICAgKiAqIFRoZSByZXN1bHQgc2hhbGwgKm5vdCogYmUgdXNlZCBmb3IgZGlzcGxheSBwdXJwb3NlcyBidXQgZm9yIGV4dGVybmFsaXphdGlvbiBvciB0cmFuc3BvcnQuXG4gICAgICogKiBUaGUgcmVzdWx0IHdpbGwgYmUgZW5jb2RlZCB1c2luZyB0aGUgcGVyY2VudGFnZSBlbmNvZGluZyBhbmQgZW5jb2RpbmcgaGFwcGVucyBtb3N0bHlcbiAgICAgKiBpZ25vcmUgdGhlIHNjaGVtZS1zcGVjaWZpYyBlbmNvZGluZyBydWxlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBza2lwRW5jb2RpbmcgRG8gbm90IGVuY29kZSB0aGUgcmVzdWx0LCBkZWZhdWx0IGlzIGBmYWxzZWBcbiAgICAgKi9cbiAgICBVUkkucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHNraXBFbmNvZGluZykge1xuICAgICAgICBpZiAoc2tpcEVuY29kaW5nID09PSB2b2lkIDApIHsgc2tpcEVuY29kaW5nID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIF9hc0Zvcm1hdHRlZCh0aGlzLCBza2lwRW5jb2RpbmcpO1xuICAgIH07XG4gICAgVVJJLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgVVJJLnJldml2ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFVSSSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IF9VUkkoZGF0YSk7XG4gICAgICAgICAgICByZXN1bHQuX2ZzUGF0aCA9IGRhdGEuZnNQYXRoO1xuICAgICAgICAgICAgcmVzdWx0Ll9mb3JtYXR0ZWQgPSBkYXRhLmV4dGVybmFsO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFVSSTtcbn0oKSk7XG5leHBvcnQgeyBVUkkgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjbGFzcy1uYW1lXG52YXIgX1VSSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoX1VSSSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBfVVJJKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2Zvcm1hdHRlZCA9IG51bGw7XG4gICAgICAgIF90aGlzLl9mc1BhdGggPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfVVJJLnByb3RvdHlwZSwgXCJmc1BhdGhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZnNQYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnNQYXRoID0gX21ha2VGc1BhdGgodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZnNQYXRoO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBfVVJJLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChza2lwRW5jb2RpbmcpIHtcbiAgICAgICAgaWYgKHNraXBFbmNvZGluZyA9PT0gdm9pZCAwKSB7IHNraXBFbmNvZGluZyA9IGZhbHNlOyB9XG4gICAgICAgIGlmICghc2tpcEVuY29kaW5nKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Zvcm1hdHRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1hdHRlZCA9IF9hc0Zvcm1hdHRlZCh0aGlzLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0dGVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gd2UgZG9uJ3QgY2FjaGUgdGhhdFxuICAgICAgICAgICAgcmV0dXJuIF9hc0Zvcm1hdHRlZCh0aGlzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX1VSSS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0ge1xuICAgICAgICAgICAgJG1pZDogMVxuICAgICAgICB9O1xuICAgICAgICAvLyBjYWNoZWQgc3RhdGVcbiAgICAgICAgaWYgKHRoaXMuX2ZzUGF0aCkge1xuICAgICAgICAgICAgcmVzLmZzUGF0aCA9IHRoaXMuX2ZzUGF0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZm9ybWF0dGVkKSB7XG4gICAgICAgICAgICByZXMuZXh0ZXJuYWwgPSB0aGlzLl9mb3JtYXR0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXJpIGNvbXBvbmVudHNcbiAgICAgICAgaWYgKHRoaXMucGF0aCkge1xuICAgICAgICAgICAgcmVzLnBhdGggPSB0aGlzLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2NoZW1lKSB7XG4gICAgICAgICAgICByZXMuc2NoZW1lID0gdGhpcy5zY2hlbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICByZXMuYXV0aG9yaXR5ID0gdGhpcy5hdXRob3JpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucXVlcnkpIHtcbiAgICAgICAgICAgIHJlcy5xdWVyeSA9IHRoaXMucXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIHJlcy5mcmFnbWVudCA9IHRoaXMuZnJhZ21lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIHJldHVybiBfVVJJO1xufShVUkkpKTtcbi8vIHJlc2VydmVkIGNoYXJhY3RlcnM6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMi4yXG52YXIgZW5jb2RlVGFibGUgPSAoX2EgPSB7fSxcbiAgICBfYVs1OCAvKiBDb2xvbiAqL10gPSAnJTNBJyxcbiAgICBfYVs0NyAvKiBTbGFzaCAqL10gPSAnJTJGJyxcbiAgICBfYVs2MyAvKiBRdWVzdGlvbk1hcmsgKi9dID0gJyUzRicsXG4gICAgX2FbMzUgLyogSGFzaCAqL10gPSAnJTIzJyxcbiAgICBfYVs5MSAvKiBPcGVuU3F1YXJlQnJhY2tldCAqL10gPSAnJTVCJyxcbiAgICBfYVs5MyAvKiBDbG9zZVNxdWFyZUJyYWNrZXQgKi9dID0gJyU1RCcsXG4gICAgX2FbNjQgLyogQXRTaWduICovXSA9ICclNDAnLFxuICAgIF9hWzMzIC8qIEV4Y2xhbWF0aW9uTWFyayAqL10gPSAnJTIxJyxcbiAgICBfYVszNiAvKiBEb2xsYXJTaWduICovXSA9ICclMjQnLFxuICAgIF9hWzM4IC8qIEFtcGVyc2FuZCAqL10gPSAnJTI2JyxcbiAgICBfYVszOSAvKiBTaW5nbGVRdW90ZSAqL10gPSAnJTI3JyxcbiAgICBfYVs0MCAvKiBPcGVuUGFyZW4gKi9dID0gJyUyOCcsXG4gICAgX2FbNDEgLyogQ2xvc2VQYXJlbiAqL10gPSAnJTI5JyxcbiAgICBfYVs0MiAvKiBBc3RlcmlzayAqL10gPSAnJTJBJyxcbiAgICBfYVs0MyAvKiBQbHVzICovXSA9ICclMkInLFxuICAgIF9hWzQ0IC8qIENvbW1hICovXSA9ICclMkMnLFxuICAgIF9hWzU5IC8qIFNlbWljb2xvbiAqL10gPSAnJTNCJyxcbiAgICBfYVs2MSAvKiBFcXVhbHMgKi9dID0gJyUzRCcsXG4gICAgX2FbMzIgLyogU3BhY2UgKi9dID0gJyUyMCcsXG4gICAgX2EpO1xuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50RmFzdCh1cmlDb21wb25lbnQsIGFsbG93U2xhc2gpIHtcbiAgICB2YXIgcmVzID0gdW5kZWZpbmVkO1xuICAgIHZhciBuYXRpdmVFbmNvZGVQb3MgPSAtMTtcbiAgICBmb3IgKHZhciBwb3MgPSAwOyBwb3MgPCB1cmlDb21wb25lbnQubGVuZ3RoOyBwb3MrKykge1xuICAgICAgICB2YXIgY29kZSA9IHVyaUNvbXBvbmVudC5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICAgIC8vIHVucmVzZXJ2ZWQgY2hhcmFjdGVyczogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0yLjNcbiAgICAgICAgaWYgKChjb2RlID49IDk3IC8qIGEgKi8gJiYgY29kZSA8PSAxMjIgLyogeiAqLylcbiAgICAgICAgICAgIHx8IChjb2RlID49IDY1IC8qIEEgKi8gJiYgY29kZSA8PSA5MCAvKiBaICovKVxuICAgICAgICAgICAgfHwgKGNvZGUgPj0gNDggLyogRGlnaXQwICovICYmIGNvZGUgPD0gNTcgLyogRGlnaXQ5ICovKVxuICAgICAgICAgICAgfHwgY29kZSA9PT0gNDUgLyogRGFzaCAqL1xuICAgICAgICAgICAgfHwgY29kZSA9PT0gNDYgLyogUGVyaW9kICovXG4gICAgICAgICAgICB8fCBjb2RlID09PSA5NSAvKiBVbmRlcmxpbmUgKi9cbiAgICAgICAgICAgIHx8IGNvZGUgPT09IDEyNiAvKiBUaWxkZSAqL1xuICAgICAgICAgICAgfHwgKGFsbG93U2xhc2ggJiYgY29kZSA9PT0gNDcgLyogU2xhc2ggKi8pKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgZGVsYXlpbmcgbmF0aXZlIGVuY29kZVxuICAgICAgICAgICAgaWYgKG5hdGl2ZUVuY29kZVBvcyAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXMgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaUNvbXBvbmVudC5zdWJzdHJpbmcobmF0aXZlRW5jb2RlUG9zLCBwb3MpKTtcbiAgICAgICAgICAgICAgICBuYXRpdmVFbmNvZGVQb3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIHdyaXRlIGludG8gYSBuZXcgc3RyaW5nIChieSBkZWZhdWx0IHdlIHRyeSB0byByZXR1cm4gdGhlIHBhcmFtKVxuICAgICAgICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9IHVyaUNvbXBvbmVudC5jaGFyQXQocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVuY29kaW5nIG5lZWRlZCwgd2UgbmVlZCB0byBhbGxvY2F0ZSBhIG5ldyBzdHJpbmdcbiAgICAgICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IHVyaUNvbXBvbmVudC5zdWJzdHIoMCwgcG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIHdpdGggZGVmYXVsdCB0YWJsZSBmaXJzdFxuICAgICAgICAgICAgdmFyIGVzY2FwZWQgPSBlbmNvZGVUYWJsZVtjb2RlXTtcbiAgICAgICAgICAgIGlmIChlc2NhcGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgZGVsYXlpbmcgbmF0aXZlIGVuY29kZVxuICAgICAgICAgICAgICAgIGlmIChuYXRpdmVFbmNvZGVQb3MgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVVUklDb21wb25lbnQodXJpQ29tcG9uZW50LnN1YnN0cmluZyhuYXRpdmVFbmNvZGVQb3MsIHBvcykpO1xuICAgICAgICAgICAgICAgICAgICBuYXRpdmVFbmNvZGVQb3MgPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIGVzY2FwZWQgdmFyaWFudCB0byByZXN1bHRcbiAgICAgICAgICAgICAgICByZXMgKz0gZXNjYXBlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hdGl2ZUVuY29kZVBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgbmF0aXZlIGVuY29kZSBvbmx5IHdoZW4gbmVlZGVkXG4gICAgICAgICAgICAgICAgbmF0aXZlRW5jb2RlUG9zID0gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuYXRpdmVFbmNvZGVQb3MgIT09IC0xKSB7XG4gICAgICAgIHJlcyArPSBlbmNvZGVVUklDb21wb25lbnQodXJpQ29tcG9uZW50LnN1YnN0cmluZyhuYXRpdmVFbmNvZGVQb3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcyAhPT0gdW5kZWZpbmVkID8gcmVzIDogdXJpQ29tcG9uZW50O1xufVxuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50TWluaW1hbChwYXRoKSB7XG4gICAgdmFyIHJlcyA9IHVuZGVmaW5lZDtcbiAgICBmb3IgKHZhciBwb3MgPSAwOyBwb3MgPCBwYXRoLmxlbmd0aDsgcG9zKyspIHtcbiAgICAgICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDM1IC8qIEhhc2ggKi8gfHwgY29kZSA9PT0gNjMgLyogUXVlc3Rpb25NYXJrICovKSB7XG4gICAgICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXMgPSBwYXRoLnN1YnN0cigwLCBwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzICs9IGVuY29kZVRhYmxlW2NvZGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9IHBhdGhbcG9zXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzICE9PSB1bmRlZmluZWQgPyByZXMgOiBwYXRoO1xufVxuLyoqXG4gKiBDb21wdXRlIGBmc1BhdGhgIGZvciB0aGUgZ2l2ZW4gdXJpXG4gKi9cbmZ1bmN0aW9uIF9tYWtlRnNQYXRoKHVyaSkge1xuICAgIHZhciB2YWx1ZTtcbiAgICBpZiAodXJpLmF1dGhvcml0eSAmJiB1cmkucGF0aC5sZW5ndGggPiAxICYmIHVyaS5zY2hlbWUgPT09ICdmaWxlJykge1xuICAgICAgICAvLyB1bmMgcGF0aDogZmlsZTovL3NoYXJlcy9jJC9mYXIvYm9vXG4gICAgICAgIHZhbHVlID0gXCIvL1wiICsgdXJpLmF1dGhvcml0eSArIHVyaS5wYXRoO1xuICAgIH1cbiAgICBlbHNlIGlmICh1cmkucGF0aC5jaGFyQ29kZUF0KDApID09PSA0NyAvKiBTbGFzaCAqL1xuICAgICAgICAmJiAodXJpLnBhdGguY2hhckNvZGVBdCgxKSA+PSA2NSAvKiBBICovICYmIHVyaS5wYXRoLmNoYXJDb2RlQXQoMSkgPD0gOTAgLyogWiAqLyB8fCB1cmkucGF0aC5jaGFyQ29kZUF0KDEpID49IDk3IC8qIGEgKi8gJiYgdXJpLnBhdGguY2hhckNvZGVBdCgxKSA8PSAxMjIgLyogeiAqLylcbiAgICAgICAgJiYgdXJpLnBhdGguY2hhckNvZGVBdCgyKSA9PT0gNTggLyogQ29sb24gKi8pIHtcbiAgICAgICAgLy8gd2luZG93cyBkcml2ZSBsZXR0ZXI6IGZpbGU6Ly8vYzovZmFyL2Jvb1xuICAgICAgICB2YWx1ZSA9IHVyaS5wYXRoWzFdLnRvTG93ZXJDYXNlKCkgKyB1cmkucGF0aC5zdWJzdHIoMik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBvdGhlciBwYXRoXG4gICAgICAgIHZhbHVlID0gdXJpLnBhdGg7XG4gICAgfVxuICAgIGlmIChpc1dpbmRvd3MpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBDcmVhdGUgdGhlIGV4dGVybmFsIHZlcnNpb24gb2YgYSB1cmlcbiAqL1xuZnVuY3Rpb24gX2FzRm9ybWF0dGVkKHVyaSwgc2tpcEVuY29kaW5nKSB7XG4gICAgdmFyIGVuY29kZXIgPSAhc2tpcEVuY29kaW5nXG4gICAgICAgID8gZW5jb2RlVVJJQ29tcG9uZW50RmFzdFxuICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudE1pbmltYWw7XG4gICAgdmFyIHJlcyA9ICcnO1xuICAgIHZhciBzY2hlbWUgPSB1cmkuc2NoZW1lLCBhdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LCBwYXRoID0gdXJpLnBhdGgsIHF1ZXJ5ID0gdXJpLnF1ZXJ5LCBmcmFnbWVudCA9IHVyaS5mcmFnbWVudDtcbiAgICBpZiAoc2NoZW1lKSB7XG4gICAgICAgIHJlcyArPSBzY2hlbWU7XG4gICAgICAgIHJlcyArPSAnOic7XG4gICAgfVxuICAgIGlmIChhdXRob3JpdHkgfHwgc2NoZW1lID09PSAnZmlsZScpIHtcbiAgICAgICAgcmVzICs9IF9zbGFzaDtcbiAgICAgICAgcmVzICs9IF9zbGFzaDtcbiAgICB9XG4gICAgaWYgKGF1dGhvcml0eSkge1xuICAgICAgICB2YXIgaWR4ID0gYXV0aG9yaXR5LmluZGV4T2YoJ0AnKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIDx1c2VyPkA8YXV0aD5cbiAgICAgICAgICAgIHZhciB1c2VyaW5mbyA9IGF1dGhvcml0eS5zdWJzdHIoMCwgaWR4KTtcbiAgICAgICAgICAgIGF1dGhvcml0eSA9IGF1dGhvcml0eS5zdWJzdHIoaWR4ICsgMSk7XG4gICAgICAgICAgICBpZHggPSB1c2VyaW5mby5pbmRleE9mKCc6Jyk7XG4gICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKHVzZXJpbmZvLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyA8dXNlcj46PHBhc3M+QDxhdXRoPlxuICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKHVzZXJpbmZvLnN1YnN0cigwLCBpZHgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmVzICs9ICc6JztcbiAgICAgICAgICAgICAgICByZXMgKz0gZW5jb2Rlcih1c2VyaW5mby5zdWJzdHIoaWR4ICsgMSksIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcyArPSAnQCc7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9yaXR5ID0gYXV0aG9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlkeCA9IGF1dGhvcml0eS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgICByZXMgKz0gZW5jb2RlcihhdXRob3JpdHksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIDxhdXRoPjo8cG9ydD5cbiAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKGF1dGhvcml0eS5zdWJzdHIoMCwgaWR4KSwgZmFsc2UpO1xuICAgICAgICAgICAgcmVzICs9IGF1dGhvcml0eS5zdWJzdHIoaWR4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0aCkge1xuICAgICAgICAvLyBsb3dlci1jYXNlIHdpbmRvd3MgZHJpdmUgbGV0dGVycyBpbiAvQzovZmZmIG9yIEM6L2ZmZlxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPj0gMyAmJiBwYXRoLmNoYXJDb2RlQXQoMCkgPT09IDQ3IC8qIFNsYXNoICovICYmIHBhdGguY2hhckNvZGVBdCgyKSA9PT0gNTggLyogQ29sb24gKi8pIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDEpO1xuICAgICAgICAgICAgaWYgKGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDkwIC8qIFogKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCIvXCIgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUgKyAzMikgKyBcIjpcIiArIHBhdGguc3Vic3RyKDMpOyAvLyBcIi9jOlwiLmxlbmd0aCA9PT0gM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGgubGVuZ3RoID49IDIgJiYgcGF0aC5jaGFyQ29kZUF0KDEpID09PSA1OCAvKiBDb2xvbiAqLykge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBpZiAoY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gOTAgLyogWiAqLykge1xuICAgICAgICAgICAgICAgIHBhdGggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUgKyAzMikgKyBcIjpcIiArIHBhdGguc3Vic3RyKDIpOyAvLyBcIi9jOlwiLmxlbmd0aCA9PT0gM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVuY29kZSB0aGUgcmVzdCBvZiB0aGUgcGF0aFxuICAgICAgICByZXMgKz0gZW5jb2RlcihwYXRoLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgIHJlcyArPSAnPyc7XG4gICAgICAgIHJlcyArPSBlbmNvZGVyKHF1ZXJ5LCBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChmcmFnbWVudCkge1xuICAgICAgICByZXMgKz0gJyMnO1xuICAgICAgICByZXMgKz0gIXNraXBFbmNvZGluZyA/IGVuY29kZVVSSUNvbXBvbmVudEZhc3QoZnJhZ21lbnQsIGZhbHNlKSA6IGZyYWdtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IHRyYW5zZm9ybUVycm9yRm9yU2VyaWFsaXphdGlvbiB9IGZyb20gJy4uL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlIH0gZnJvbSAnLi4vbGlmZWN5Y2xlLmpzJztcbmltcG9ydCB7IGlzV2ViIH0gZnJvbSAnLi4vcGxhdGZvcm0uanMnO1xuaW1wb3J0IHsgZ2V0QWxsUHJvcGVydHlOYW1lcyB9IGZyb20gJy4uL3R5cGVzLmpzJztcbnZhciBJTklUSUFMSVpFID0gJyRpbml0aWFsaXplJztcbnZhciB3ZWJXb3JrZXJXYXJuaW5nTG9nZ2VkID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gbG9nT25jZVdlYldvcmtlcldhcm5pbmcoZXJyKSB7XG4gICAgaWYgKCFpc1dlYikge1xuICAgICAgICAvLyBydW5uaW5nIHRlc3RzXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF3ZWJXb3JrZXJXYXJuaW5nTG9nZ2VkKSB7XG4gICAgICAgIHdlYldvcmtlcldhcm5pbmdMb2dnZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBjcmVhdGUgd2ViIHdvcmtlcihzKS4gRmFsbGluZyBiYWNrIHRvIGxvYWRpbmcgd2ViIHdvcmtlciBjb2RlIGluIG1haW4gdGhyZWFkLCB3aGljaCBtaWdodCBjYXVzZSBVSSBmcmVlemVzLiBQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvbW9uYWNvLWVkaXRvciNmYXEnKTtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlKTtcbn1cbnZhciBTaW1wbGVXb3JrZXJQcm90b2NvbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaW1wbGVXb3JrZXJQcm90b2NvbChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlcklkID0gLTE7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLl9sYXN0U2VudFJlcSA9IDA7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdSZXBsaWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2ltcGxlV29ya2VyUHJvdG9jb2wucHJvdG90eXBlLnNldFdvcmtlcklkID0gZnVuY3Rpb24gKHdvcmtlcklkKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlcklkID0gd29ya2VySWQ7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJQcm90b2NvbC5wcm90b3R5cGUuc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmdzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXEgPSBTdHJpbmcoKyt0aGlzLl9sYXN0U2VudFJlcSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5fcGVuZGluZ1JlcGxpZXNbcmVxXSA9IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuX3NlbmQoe1xuICAgICAgICAgICAgICAgIHZzV29ya2VyOiBfdGhpcy5fd29ya2VySWQsXG4gICAgICAgICAgICAgICAgcmVxOiByZXEsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2ltcGxlV29ya2VyUHJvdG9jb2wucHJvdG90eXBlLmhhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiAoc2VyaWFsaXplZE1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShzZXJpYWxpemVkTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lc3NhZ2UgfHwgIW1lc3NhZ2UudnNXb3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fd29ya2VySWQgIT09IC0xICYmIG1lc3NhZ2UudnNXb3JrZXIgIT09IHRoaXMuX3dvcmtlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGFuZGxlTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9O1xuICAgIFNpbXBsZVdvcmtlclByb3RvY29sLnByb3RvdHlwZS5faGFuZGxlTWVzc2FnZSA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG1zZy5zZXEpIHtcbiAgICAgICAgICAgIHZhciByZXBseU1lc3NhZ2UgPSBtc2c7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3BlbmRpbmdSZXBsaWVzW3JlcGx5TWVzc2FnZS5zZXFdKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdHb3QgcmVwbHkgdG8gdW5rbm93biBzZXEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVwbHkgPSB0aGlzLl9wZW5kaW5nUmVwbGllc1tyZXBseU1lc3NhZ2Uuc2VxXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nUmVwbGllc1tyZXBseU1lc3NhZ2Uuc2VxXTtcbiAgICAgICAgICAgIGlmIChyZXBseU1lc3NhZ2UuZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcGx5TWVzc2FnZS5lcnI7XG4gICAgICAgICAgICAgICAgaWYgKHJlcGx5TWVzc2FnZS5lcnIuJGlzRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIGVyci5uYW1lID0gcmVwbHlNZXNzYWdlLmVyci5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9IHJlcGx5TWVzc2FnZS5lcnIubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgZXJyLnN0YWNrID0gcmVwbHlNZXNzYWdlLmVyci5zdGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVwbHkucmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVwbHkucmVzb2x2ZShyZXBseU1lc3NhZ2UucmVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVxdWVzdE1lc3NhZ2UgPSBtc2c7XG4gICAgICAgIHZhciByZXEgPSByZXF1ZXN0TWVzc2FnZS5yZXE7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9oYW5kbGVyLmhhbmRsZU1lc3NhZ2UocmVxdWVzdE1lc3NhZ2UubWV0aG9kLCByZXF1ZXN0TWVzc2FnZS5hcmdzKTtcbiAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIF90aGlzLl9zZW5kKHtcbiAgICAgICAgICAgICAgICB2c1dvcmtlcjogX3RoaXMuX3dvcmtlcklkLFxuICAgICAgICAgICAgICAgIHNlcTogcmVxLFxuICAgICAgICAgICAgICAgIHJlczogcixcbiAgICAgICAgICAgICAgICBlcnI6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5kZXRhaWwgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIExvYWRpbmcgZXJyb3JzIGhhdmUgYSBkZXRhaWwgcHJvcGVydHkgdGhhdCBwb2ludHMgdG8gdGhlIGFjdHVhbCBlcnJvclxuICAgICAgICAgICAgICAgIGUuZGV0YWlsID0gdHJhbnNmb3JtRXJyb3JGb3JTZXJpYWxpemF0aW9uKGUuZGV0YWlsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLl9zZW5kKHtcbiAgICAgICAgICAgICAgICB2c1dvcmtlcjogX3RoaXMuX3dvcmtlcklkLFxuICAgICAgICAgICAgICAgIHNlcTogcmVxLFxuICAgICAgICAgICAgICAgIHJlczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGVycjogdHJhbnNmb3JtRXJyb3JGb3JTZXJpYWxpemF0aW9uKGUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJQcm90b2NvbC5wcm90b3R5cGUuX3NlbmQgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHZhciBzdHJNc2cgPSBKU09OLnN0cmluZ2lmeShtc2cpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnU0VORElORzogJyArIHN0ck1zZyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIuc2VuZE1lc3NhZ2Uoc3RyTXNnKTtcbiAgICB9O1xuICAgIHJldHVybiBTaW1wbGVXb3JrZXJQcm90b2NvbDtcbn0oKSk7XG4vKipcbiAqIE1haW4gdGhyZWFkIHNpZGVcbiAqL1xudmFyIFNpbXBsZVdvcmtlckNsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2ltcGxlV29ya2VyQ2xpZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNpbXBsZVdvcmtlckNsaWVudCh3b3JrZXJGYWN0b3J5LCBtb2R1bGVJZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgbGF6eVByb3h5UmVqZWN0ID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX3dvcmtlciA9IF90aGlzLl9yZWdpc3Rlcih3b3JrZXJGYWN0b3J5LmNyZWF0ZSgndnMvYmFzZS9jb21tb24vd29ya2VyL3NpbXBsZVdvcmtlcicsIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICAgIF90aGlzLl9wcm90b2NvbC5oYW5kbGVNZXNzYWdlKG1zZyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIC8vIGluIEZpcmVmb3gsIHdlYiB3b3JrZXJzIGZhaWwgbGF6aWx5IDooXG4gICAgICAgICAgICAvLyB3ZSB3aWxsIHJlamVjdCB0aGUgcHJveHlcbiAgICAgICAgICAgIGlmIChsYXp5UHJveHlSZWplY3QpIHtcbiAgICAgICAgICAgICAgICBsYXp5UHJveHlSZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBfdGhpcy5fcHJvdG9jb2wgPSBuZXcgU2ltcGxlV29ya2VyUHJvdG9jb2woe1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2U6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fd29ya2VyLnBvc3RNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlTWVzc2FnZTogZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICAgICAgICAgIC8vIEludGVudGlvbmFsbHkgbm90IHN1cHBvcnRpbmcgd29ya2VyIC0+IG1haW4gcmVxdWVzdHNcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuX3Byb3RvY29sLnNldFdvcmtlcklkKF90aGlzLl93b3JrZXIuZ2V0SWQoKSk7XG4gICAgICAgIC8vIEdhdGhlciBsb2FkZXIgY29uZmlndXJhdGlvblxuICAgICAgICB2YXIgbG9hZGVyQ29uZmlndXJhdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5yZXF1aXJlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2VsZi5yZXF1aXJlLmdldENvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb25maWd1cmF0aW9uIGZyb20gdGhlIE1vbmFjbyBBTUQgTG9hZGVyXG4gICAgICAgICAgICBsb2FkZXJDb25maWd1cmF0aW9uID0gc2VsZi5yZXF1aXJlLmdldENvbmZpZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxmLnJlcXVpcmVqcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHJlcXVpcmVqc1xuICAgICAgICAgICAgbG9hZGVyQ29uZmlndXJhdGlvbiA9IHNlbGYucmVxdWlyZWpzLnMuY29udGV4dHMuXy5jb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2VuZCBpbml0aWFsaXplIG1lc3NhZ2VcbiAgICAgICAgX3RoaXMuX29uTW9kdWxlTG9hZGVkID0gX3RoaXMuX3Byb3RvY29sLnNlbmRNZXNzYWdlKElOSVRJQUxJWkUsIFtcbiAgICAgICAgICAgIF90aGlzLl93b3JrZXIuZ2V0SWQoKSxcbiAgICAgICAgICAgIG1vZHVsZUlkLFxuICAgICAgICAgICAgbG9hZGVyQ29uZmlndXJhdGlvblxuICAgICAgICBdKTtcbiAgICAgICAgX3RoaXMuX2xhenlQcm94eSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxhenlQcm94eVJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgICAgIF90aGlzLl9vbk1vZHVsZUxvYWRlZC50aGVuKGZ1bmN0aW9uIChhdmFpbGFibGVNZXRob2RzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3h5ID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhdmFpbGFibGVNZXRob2RzXzEgPSBhdmFpbGFibGVNZXRob2RzOyBfaSA8IGF2YWlsYWJsZU1ldGhvZHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSBhdmFpbGFibGVNZXRob2RzXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICBwcm94eVttZXRob2ROYW1lXSA9IGNyZWF0ZVByb3h5TWV0aG9kKG1ldGhvZE5hbWUsIHByb3h5TWV0aG9kUmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocHJveHkpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3IoJ1dvcmtlciBmYWlsZWQgdG8gbG9hZCAnICsgbW9kdWxlSWQsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDcmVhdGUgcHJveHkgdG8gbG9hZGVkIGNvZGVcbiAgICAgICAgdmFyIHByb3h5TWV0aG9kUmVxdWVzdCA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fcmVxdWVzdChtZXRob2QsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY3JlYXRlUHJveHlNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kLCBwcm94eU1ldGhvZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm94eU1ldGhvZFJlcXVlc3QobWV0aG9kLCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU2ltcGxlV29ya2VyQ2xpZW50LnByb3RvdHlwZS5nZXRQcm94eU9iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhenlQcm94eTtcbiAgICB9O1xuICAgIFNpbXBsZVdvcmtlckNsaWVudC5wcm90b3R5cGUuX3JlcXVlc3QgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmdzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5fb25Nb2R1bGVMb2FkZWQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3Byb3RvY29sLnNlbmRNZXNzYWdlKG1ldGhvZCwgYXJncykudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJDbGllbnQucHJvdG90eXBlLl9vbkVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhlcnJvcik7XG4gICAgfTtcbiAgICByZXR1cm4gU2ltcGxlV29ya2VyQ2xpZW50O1xufShEaXNwb3NhYmxlKSk7XG5leHBvcnQgeyBTaW1wbGVXb3JrZXJDbGllbnQgfTtcbi8qKlxuICogV29ya2VyIHNpZGVcbiAqL1xudmFyIFNpbXBsZVdvcmtlclNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaW1wbGVXb3JrZXJTZXJ2ZXIocG9zdFNlcmlhbGl6ZWRNZXNzYWdlLCByZXF1ZXN0SGFuZGxlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0SGFuZGxlciA9IHJlcXVlc3RIYW5kbGVyO1xuICAgICAgICB0aGlzLl9wcm90b2NvbCA9IG5ldyBTaW1wbGVXb3JrZXJQcm90b2NvbCh7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZTogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICAgIHBvc3RTZXJpYWxpemVkTWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZU1lc3NhZ2U6IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHsgcmV0dXJuIF90aGlzLl9oYW5kbGVNZXNzYWdlKG1ldGhvZCwgYXJncyk7IH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFNpbXBsZVdvcmtlclNlcnZlci5wcm90b3R5cGUub25tZXNzYWdlID0gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICB0aGlzLl9wcm90b2NvbC5oYW5kbGVNZXNzYWdlKG1zZyk7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJTZXJ2ZXIucHJvdG90eXBlLl9oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICBpZiAobWV0aG9kID09PSBJTklUSUFMSVpFKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fcmVxdWVzdEhhbmRsZXIgfHwgdHlwZW9mIHRoaXMuX3JlcXVlc3RIYW5kbGVyW21ldGhvZF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWVzdEhhbmRsZXIgb3IgbWV0aG9kOiAnICsgbWV0aG9kKSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fcmVxdWVzdEhhbmRsZXJbbWV0aG9kXS5hcHBseSh0aGlzLl9yZXF1ZXN0SGFuZGxlciwgYXJncykpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNpbXBsZVdvcmtlclNlcnZlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh3b3JrZXJJZCwgbW9kdWxlSWQsIGxvYWRlckNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9wcm90b2NvbC5zZXRXb3JrZXJJZCh3b3JrZXJJZCk7XG4gICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0SGFuZGxlcikge1xuICAgICAgICAgICAgLy8gc3RhdGljIHJlcXVlc3QgaGFuZGxlclxuICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBnZXRBbGxQcm9wZXJ0eU5hbWVzKHRoaXMuX3JlcXVlc3RIYW5kbGVyKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3JlcXVlc3RIYW5kbGVyW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1ldGhvZHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2FkZXJDb25maWcpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSAnYmFzZVVybCcsIGhhbmRsaW5nIGl0IGlzIGJleW9uZCBzY29wZSBmb3Igbm93XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvYWRlckNvbmZpZy5iYXNlVXJsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2FkZXJDb25maWdbJ2Jhc2VVcmwnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZGVyQ29uZmlnLnBhdGhzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZGVyQ29uZmlnLnBhdGhzLnZzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbG9hZGVyQ29uZmlnLnBhdGhzWyd2cyddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgaXMgaW4gYSB3ZWIgd29ya2VyLCBlbmFibGUgY2F0Y2hpbmcgZXJyb3JzXG4gICAgICAgICAgICBsb2FkZXJDb25maWcuY2F0Y2hFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLnJlcXVpcmUuY29uZmlnKGxvYWRlckNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgZ2xvYmFsIHJlcXVpcmUgdG8gYmUgc3VyZSB0byBnZXQgdGhlIGdsb2JhbCBjb25maWdcbiAgICAgICAgICAgIHNlbGYucmVxdWlyZShbbW9kdWxlSWRdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlck1vZHVsZSA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVxdWVzdEhhbmRsZXIgPSBoYW5kbGVyTW9kdWxlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX3JlcXVlc3RIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJObyBSZXF1ZXN0SGFuZGxlciFcIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtZXRob2RzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBfYiA9IGdldEFsbFByb3BlcnR5TmFtZXMoX3RoaXMuX3JlcXVlc3RIYW5kbGVyKTsgX2EgPCBfYi5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYltfYV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMuX3JlcXVlc3RIYW5kbGVyW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtZXRob2RzKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNpbXBsZVdvcmtlclNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBTaW1wbGVXb3JrZXJTZXJ2ZXIgfTtcbi8qKlxuICogQ2FsbGVkIG9uIHRoZSB3b3JrZXIgc2lkZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHBvc3RNZXNzYWdlKSB7XG4gICAgcmV0dXJuIG5ldyBTaW1wbGVXb3JrZXJTZXJ2ZXIocG9zdE1lc3NhZ2UsIG51bGwpO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyB0b1VpbnQ4IH0gZnJvbSAnLi91aW50LmpzJztcbi8qKlxuICogQSBmYXN0IGNoYXJhY3RlciBjbGFzc2lmaWVyIHRoYXQgdXNlcyBhIGNvbXBhY3QgYXJyYXkgZm9yIEFTQ0lJIHZhbHVlcy5cbiAqL1xudmFyIENoYXJhY3RlckNsYXNzaWZpZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhcmFjdGVyQ2xhc3NpZmllcihfZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSB0b1VpbnQ4KF9kZWZhdWx0VmFsdWUpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMuX2FzY2lpTWFwID0gQ2hhcmFjdGVyQ2xhc3NpZmllci5fY3JlYXRlQXNjaWlNYXAoZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgdGhpcy5fbWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBDaGFyYWN0ZXJDbGFzc2lmaWVyLl9jcmVhdGVBc2NpaU1hcCA9IGZ1bmN0aW9uIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIGFzY2lpTWFwID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgICAgICAgICAgYXNjaWlNYXBbaV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzY2lpTWFwO1xuICAgIH07XG4gICAgQ2hhcmFjdGVyQ2xhc3NpZmllci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGNoYXJDb2RlLCBfdmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdG9VaW50OChfdmFsdWUpO1xuICAgICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8IDI1Nikge1xuICAgICAgICAgICAgdGhpcy5fYXNjaWlNYXBbY2hhckNvZGVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0KGNoYXJDb2RlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYXJhY3RlckNsYXNzaWZpZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICAgICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8IDI1Nikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FzY2lpTWFwW2NoYXJDb2RlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fbWFwLmdldChjaGFyQ29kZSkgfHwgdGhpcy5fZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENoYXJhY3RlckNsYXNzaWZpZXI7XG59KCkpO1xuZXhwb3J0IHsgQ2hhcmFjdGVyQ2xhc3NpZmllciB9O1xudmFyIENoYXJhY3RlclNldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFyYWN0ZXJTZXQoKSB7XG4gICAgICAgIHRoaXMuX2FjdHVhbCA9IG5ldyBDaGFyYWN0ZXJDbGFzc2lmaWVyKDAgLyogRmFsc2UgKi8pO1xuICAgIH1cbiAgICBDaGFyYWN0ZXJTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICAgICAgICB0aGlzLl9hY3R1YWwuc2V0KGNoYXJDb2RlLCAxIC8qIFRydWUgKi8pO1xuICAgIH07XG4gICAgQ2hhcmFjdGVyU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoY2hhckNvZGUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hY3R1YWwuZ2V0KGNoYXJDb2RlKSA9PT0gMSAvKiBUcnVlICovKTtcbiAgICB9O1xuICAgIHJldHVybiBDaGFyYWN0ZXJTZXQ7XG59KCkpO1xuZXhwb3J0IHsgQ2hhcmFjdGVyU2V0IH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogQSBwb3NpdGlvbiBpbiB0aGUgZWRpdG9yLlxuICovXG52YXIgUG9zaXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9zaXRpb24obGluZU51bWJlciwgY29sdW1uKSB7XG4gICAgICAgIHRoaXMubGluZU51bWJlciA9IGxpbmVOdW1iZXI7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgcG9zdGlvbiBmcm9tIHRoaXMgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmV3TGluZU51bWJlciBuZXcgbGluZSBudW1iZXJcbiAgICAgKiBAcGFyYW0gbmV3Q29sdW1uIG5ldyBjb2x1bW5cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5wcm90b3R5cGUud2l0aCA9IGZ1bmN0aW9uIChuZXdMaW5lTnVtYmVyLCBuZXdDb2x1bW4pIHtcbiAgICAgICAgaWYgKG5ld0xpbmVOdW1iZXIgPT09IHZvaWQgMCkgeyBuZXdMaW5lTnVtYmVyID0gdGhpcy5saW5lTnVtYmVyOyB9XG4gICAgICAgIGlmIChuZXdDb2x1bW4gPT09IHZvaWQgMCkgeyBuZXdDb2x1bW4gPSB0aGlzLmNvbHVtbjsgfVxuICAgICAgICBpZiAobmV3TGluZU51bWJlciA9PT0gdGhpcy5saW5lTnVtYmVyICYmIG5ld0NvbHVtbiA9PT0gdGhpcy5jb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbihuZXdMaW5lTnVtYmVyLCBuZXdDb2x1bW4pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXJpdmUgYSBuZXcgcG9zaXRpb24gZnJvbSB0aGlzIHBvc2l0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRlbHRhTGluZU51bWJlciBsaW5lIG51bWJlciBkZWx0YVxuICAgICAqIEBwYXJhbSBkZWx0YUNvbHVtbiBjb2x1bW4gZGVsdGFcbiAgICAgKi9cbiAgICBQb3NpdGlvbi5wcm90b3R5cGUuZGVsdGEgPSBmdW5jdGlvbiAoZGVsdGFMaW5lTnVtYmVyLCBkZWx0YUNvbHVtbikge1xuICAgICAgICBpZiAoZGVsdGFMaW5lTnVtYmVyID09PSB2b2lkIDApIHsgZGVsdGFMaW5lTnVtYmVyID0gMDsgfVxuICAgICAgICBpZiAoZGVsdGFDb2x1bW4gPT09IHZvaWQgMCkgeyBkZWx0YUNvbHVtbiA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aCh0aGlzLmxpbmVOdW1iZXIgKyBkZWx0YUxpbmVOdW1iZXIsIHRoaXMuY29sdW1uICsgZGVsdGFDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGlzIHBvc2l0aW9uIGVxdWFscyBvdGhlciBwb3NpdGlvblxuICAgICAqL1xuICAgIFBvc2l0aW9uLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIFBvc2l0aW9uLmVxdWFscyh0aGlzLCBvdGhlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHBvc2l0aW9uIGBhYCBlcXVhbHMgcG9zaXRpb24gYGJgXG4gICAgICovXG4gICAgUG9zaXRpb24uZXF1YWxzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKCFhICYmICFiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCEhYSAmJlxuICAgICAgICAgICAgISFiICYmXG4gICAgICAgICAgICBhLmxpbmVOdW1iZXIgPT09IGIubGluZU51bWJlciAmJlxuICAgICAgICAgICAgYS5jb2x1bW4gPT09IGIuY29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgdGhpcyBwb3NpdGlvbiBpcyBiZWZvcmUgb3RoZXIgcG9zaXRpb24uXG4gICAgICogSWYgdGhlIHR3byBwb3NpdGlvbnMgYXJlIGVxdWFsLCB0aGUgcmVzdWx0IHdpbGwgYmUgZmFsc2UuXG4gICAgICovXG4gICAgUG9zaXRpb24ucHJvdG90eXBlLmlzQmVmb3JlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBQb3NpdGlvbi5pc0JlZm9yZSh0aGlzLCBvdGhlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHBvc2l0aW9uIGBhYCBpcyBiZWZvcmUgcG9zaXRpb24gYGJgLlxuICAgICAqIElmIHRoZSB0d28gcG9zaXRpb25zIGFyZSBlcXVhbCwgdGhlIHJlc3VsdCB3aWxsIGJlIGZhbHNlLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLmlzQmVmb3JlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEubGluZU51bWJlciA8IGIubGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIubGluZU51bWJlciA8IGEubGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLmNvbHVtbiA8IGIuY29sdW1uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGlzIHBvc2l0aW9uIGlzIGJlZm9yZSBvdGhlciBwb3NpdGlvbi5cbiAgICAgKiBJZiB0aGUgdHdvIHBvc2l0aW9ucyBhcmUgZXF1YWwsIHRoZSByZXN1bHQgd2lsbCBiZSB0cnVlLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLnByb3RvdHlwZS5pc0JlZm9yZU9yRXF1YWwgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIFBvc2l0aW9uLmlzQmVmb3JlT3JFcXVhbCh0aGlzLCBvdGhlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHBvc2l0aW9uIGBhYCBpcyBiZWZvcmUgcG9zaXRpb24gYGJgLlxuICAgICAqIElmIHRoZSB0d28gcG9zaXRpb25zIGFyZSBlcXVhbCwgdGhlIHJlc3VsdCB3aWxsIGJlIHRydWUuXG4gICAgICovXG4gICAgUG9zaXRpb24uaXNCZWZvcmVPckVxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEubGluZU51bWJlciA8IGIubGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIubGluZU51bWJlciA8IGEubGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLmNvbHVtbiA8PSBiLmNvbHVtbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBjb21wYXJlcyBwb3NpdGlvbnMsIHVzZWZ1bCBmb3Igc29ydGluZ1xuICAgICAqL1xuICAgIFBvc2l0aW9uLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgYUxpbmVOdW1iZXIgPSBhLmxpbmVOdW1iZXIgfCAwO1xuICAgICAgICB2YXIgYkxpbmVOdW1iZXIgPSBiLmxpbmVOdW1iZXIgfCAwO1xuICAgICAgICBpZiAoYUxpbmVOdW1iZXIgPT09IGJMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYUNvbHVtbiA9IGEuY29sdW1uIHwgMDtcbiAgICAgICAgICAgIHZhciBiQ29sdW1uID0gYi5jb2x1bW4gfCAwO1xuICAgICAgICAgICAgcmV0dXJuIGFDb2x1bW4gLSBiQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhTGluZU51bWJlciAtIGJMaW5lTnVtYmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhpcyBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24odGhpcy5saW5lTnVtYmVyLCB0aGlzLmNvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHRvIGEgaHVtYW4tcmVhZGFibGUgcmVwcmVzZW50YXRpb24uXG4gICAgICovXG4gICAgUG9zaXRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJygnICsgdGhpcy5saW5lTnVtYmVyICsgJywnICsgdGhpcy5jb2x1bW4gKyAnKSc7XG4gICAgfTtcbiAgICAvLyAtLS1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBgUG9zaXRpb25gIGZyb20gYW4gYElQb3NpdGlvbmAuXG4gICAgICovXG4gICAgUG9zaXRpb24ubGlmdCA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbihwb3MubGluZU51bWJlciwgcG9zLmNvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIGBvYmpgIGlzIGFuIGBJUG9zaXRpb25gLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLmlzSVBvc2l0aW9uID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKG9ialxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmoubGluZU51bWJlciA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAmJiAodHlwZW9mIG9iai5jb2x1bW4gPT09ICdudW1iZXInKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUG9zaXRpb247XG59KCkpO1xuZXhwb3J0IHsgUG9zaXRpb24gfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbi8qKlxuICogQSByYW5nZSBpbiB0aGUgZWRpdG9yLiAoc3RhcnRMaW5lTnVtYmVyLHN0YXJ0Q29sdW1uKSBpcyA8PSAoZW5kTGluZU51bWJlcixlbmRDb2x1bW4pXG4gKi9cbnZhciBSYW5nZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSYW5nZShzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uLCBlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW4pIHtcbiAgICAgICAgaWYgKChzdGFydExpbmVOdW1iZXIgPiBlbmRMaW5lTnVtYmVyKSB8fCAoc3RhcnRMaW5lTnVtYmVyID09PSBlbmRMaW5lTnVtYmVyICYmIHN0YXJ0Q29sdW1uID4gZW5kQ29sdW1uKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydExpbmVOdW1iZXIgPSBlbmRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5zdGFydENvbHVtbiA9IGVuZENvbHVtbjtcbiAgICAgICAgICAgIHRoaXMuZW5kTGluZU51bWJlciA9IHN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgICAgIHRoaXMuZW5kQ29sdW1uID0gc3RhcnRDb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGluZU51bWJlciA9IHN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb2x1bW4gPSBzdGFydENvbHVtbjtcbiAgICAgICAgICAgIHRoaXMuZW5kTGluZU51bWJlciA9IGVuZExpbmVOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLmVuZENvbHVtbiA9IGVuZENvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoaXMgcmFuZ2UgaXMgZW1wdHkuXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5pc0VtcHR5KHRoaXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBgcmFuZ2VgIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFJhbmdlLmlzRW1wdHkgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIChyYW5nZS5zdGFydExpbmVOdW1iZXIgPT09IHJhbmdlLmVuZExpbmVOdW1iZXIgJiYgcmFuZ2Uuc3RhcnRDb2x1bW4gPT09IHJhbmdlLmVuZENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHBvc2l0aW9uIGlzIGluIHRoaXMgcmFuZ2UuIElmIHRoZSBwb3NpdGlvbiBpcyBhdCB0aGUgZWRnZXMsIHdpbGwgcmV0dXJuIHRydWUuXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLmNvbnRhaW5zUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIFJhbmdlLmNvbnRhaW5zUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBgcG9zaXRpb25gIGlzIGluIGByYW5nZWAuIElmIHRoZSBwb3NpdGlvbiBpcyBhdCB0aGUgZWRnZXMsIHdpbGwgcmV0dXJuIHRydWUuXG4gICAgICovXG4gICAgUmFuZ2UuY29udGFpbnNQb3NpdGlvbiA9IGZ1bmN0aW9uIChyYW5nZSwgcG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmxpbmVOdW1iZXIgPCByYW5nZS5zdGFydExpbmVOdW1iZXIgfHwgcG9zaXRpb24ubGluZU51bWJlciA+IHJhbmdlLmVuZExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ubGluZU51bWJlciA9PT0gcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyICYmIHBvc2l0aW9uLmNvbHVtbiA8IHJhbmdlLnN0YXJ0Q29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLmxpbmVOdW1iZXIgPT09IHJhbmdlLmVuZExpbmVOdW1iZXIgJiYgcG9zaXRpb24uY29sdW1uID4gcmFuZ2UuZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHJhbmdlIGlzIGluIHRoaXMgcmFuZ2UuIElmIHRoZSByYW5nZSBpcyBlcXVhbCB0byB0aGlzIHJhbmdlLCB3aWxsIHJldHVybiB0cnVlLlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5jb250YWluc1JhbmdlID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5jb250YWluc1JhbmdlKHRoaXMsIHJhbmdlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgYG90aGVyUmFuZ2VgIGlzIGluIGByYW5nZWAuIElmIHRoZSByYW5nZXMgYXJlIGVxdWFsLCB3aWxsIHJldHVybiB0cnVlLlxuICAgICAqL1xuICAgIFJhbmdlLmNvbnRhaW5zUmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2UsIG90aGVyUmFuZ2UpIHtcbiAgICAgICAgaWYgKG90aGVyUmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIDwgcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIHx8IG90aGVyUmFuZ2UuZW5kTGluZU51bWJlciA8IHJhbmdlLnN0YXJ0TGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlclJhbmdlLnN0YXJ0TGluZU51bWJlciA+IHJhbmdlLmVuZExpbmVOdW1iZXIgfHwgb3RoZXJSYW5nZS5lbmRMaW5lTnVtYmVyID4gcmFuZ2UuZW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlclJhbmdlLnN0YXJ0TGluZU51bWJlciA9PT0gcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyICYmIG90aGVyUmFuZ2Uuc3RhcnRDb2x1bW4gPCByYW5nZS5zdGFydENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlclJhbmdlLmVuZExpbmVOdW1iZXIgPT09IHJhbmdlLmVuZExpbmVOdW1iZXIgJiYgb3RoZXJSYW5nZS5lbmRDb2x1bW4gPiByYW5nZS5lbmRDb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgcmV1bmlvbiBvZiB0aGUgdHdvIHJhbmdlcy5cbiAgICAgKiBUaGUgc21hbGxlc3QgcG9zaXRpb24gd2lsbCBiZSB1c2VkIGFzIHRoZSBzdGFydCBwb2ludCwgYW5kIHRoZSBsYXJnZXN0IG9uZSBhcyB0aGUgZW5kIHBvaW50LlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5wbHVzUmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIFJhbmdlLnBsdXNSYW5nZSh0aGlzLCByYW5nZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIHJldW5pb24gb2YgdGhlIHR3byByYW5nZXMuXG4gICAgICogVGhlIHNtYWxsZXN0IHBvc2l0aW9uIHdpbGwgYmUgdXNlZCBhcyB0aGUgc3RhcnQgcG9pbnQsIGFuZCB0aGUgbGFyZ2VzdCBvbmUgYXMgdGhlIGVuZCBwb2ludC5cbiAgICAgKi9cbiAgICBSYW5nZS5wbHVzUmFuZ2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgc3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgc3RhcnRDb2x1bW47XG4gICAgICAgIHZhciBlbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgZW5kQ29sdW1uO1xuICAgICAgICBpZiAoYi5zdGFydExpbmVOdW1iZXIgPCBhLnN0YXJ0TGluZU51bWJlcikge1xuICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyID0gYi5zdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICBzdGFydENvbHVtbiA9IGIuc3RhcnRDb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYi5zdGFydExpbmVOdW1iZXIgPT09IGEuc3RhcnRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICBzdGFydExpbmVOdW1iZXIgPSBiLnN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgICAgIHN0YXJ0Q29sdW1uID0gTWF0aC5taW4oYi5zdGFydENvbHVtbiwgYS5zdGFydENvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydExpbmVOdW1iZXIgPSBhLnN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgICAgIHN0YXJ0Q29sdW1uID0gYS5zdGFydENvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYi5lbmRMaW5lTnVtYmVyID4gYS5lbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICBlbmRMaW5lTnVtYmVyID0gYi5lbmRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgZW5kQ29sdW1uID0gYi5lbmRDb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYi5lbmRMaW5lTnVtYmVyID09PSBhLmVuZExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIGVuZExpbmVOdW1iZXIgPSBiLmVuZExpbmVOdW1iZXI7XG4gICAgICAgICAgICBlbmRDb2x1bW4gPSBNYXRoLm1heChiLmVuZENvbHVtbiwgYS5lbmRDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW5kTGluZU51bWJlciA9IGEuZW5kTGluZU51bWJlcjtcbiAgICAgICAgICAgIGVuZENvbHVtbiA9IGEuZW5kQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2Uoc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbiwgZW5kTGluZU51bWJlciwgZW5kQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgaW50ZXJzZWN0aW9uIG9mIHRoZSB0d28gcmFuZ2VzLlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5pbnRlcnNlY3RSYW5nZXMgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIFJhbmdlLmludGVyc2VjdFJhbmdlcyh0aGlzLCByYW5nZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGludGVyc2VjdGlvbiBvZiB0aGUgdHdvIHJhbmdlcy5cbiAgICAgKi9cbiAgICBSYW5nZS5pbnRlcnNlY3RSYW5nZXMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgcmVzdWx0U3RhcnRMaW5lTnVtYmVyID0gYS5zdGFydExpbmVOdW1iZXI7XG4gICAgICAgIHZhciByZXN1bHRTdGFydENvbHVtbiA9IGEuc3RhcnRDb2x1bW47XG4gICAgICAgIHZhciByZXN1bHRFbmRMaW5lTnVtYmVyID0gYS5lbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgcmVzdWx0RW5kQ29sdW1uID0gYS5lbmRDb2x1bW47XG4gICAgICAgIHZhciBvdGhlclN0YXJ0TGluZU51bWJlciA9IGIuc3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgb3RoZXJTdGFydENvbHVtbiA9IGIuc3RhcnRDb2x1bW47XG4gICAgICAgIHZhciBvdGhlckVuZExpbmVOdW1iZXIgPSBiLmVuZExpbmVOdW1iZXI7XG4gICAgICAgIHZhciBvdGhlckVuZENvbHVtbiA9IGIuZW5kQ29sdW1uO1xuICAgICAgICBpZiAocmVzdWx0U3RhcnRMaW5lTnVtYmVyIDwgb3RoZXJTdGFydExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdFN0YXJ0TGluZU51bWJlciA9IG90aGVyU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgcmVzdWx0U3RhcnRDb2x1bW4gPSBvdGhlclN0YXJ0Q29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdFN0YXJ0TGluZU51bWJlciA9PT0gb3RoZXJTdGFydExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdFN0YXJ0Q29sdW1uID0gTWF0aC5tYXgocmVzdWx0U3RhcnRDb2x1bW4sIG90aGVyU3RhcnRDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRFbmRMaW5lTnVtYmVyID4gb3RoZXJFbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXN1bHRFbmRMaW5lTnVtYmVyID0gb3RoZXJFbmRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgcmVzdWx0RW5kQ29sdW1uID0gb3RoZXJFbmRDb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzdWx0RW5kTGluZU51bWJlciA9PT0gb3RoZXJFbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXN1bHRFbmRDb2x1bW4gPSBNYXRoLm1pbihyZXN1bHRFbmRDb2x1bW4sIG90aGVyRW5kQ29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBzZWxlY3Rpb24gaXMgbm93IGVtcHR5XG4gICAgICAgIGlmIChyZXN1bHRTdGFydExpbmVOdW1iZXIgPiByZXN1bHRFbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0U3RhcnRMaW5lTnVtYmVyID09PSByZXN1bHRFbmRMaW5lTnVtYmVyICYmIHJlc3VsdFN0YXJ0Q29sdW1uID4gcmVzdWx0RW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHJlc3VsdFN0YXJ0TGluZU51bWJlciwgcmVzdWx0U3RhcnRDb2x1bW4sIHJlc3VsdEVuZExpbmVOdW1iZXIsIHJlc3VsdEVuZENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoaXMgcmFuZ2UgZXF1YWxzIG90aGVyLlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5lcXVhbHNSYW5nZSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICByZXR1cm4gUmFuZ2UuZXF1YWxzUmFuZ2UodGhpcywgb3RoZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiByYW5nZSBgYWAgZXF1YWxzIGBiYC5cbiAgICAgKi9cbiAgICBSYW5nZS5lcXVhbHNSYW5nZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoISFhICYmXG4gICAgICAgICAgICAhIWIgJiZcbiAgICAgICAgICAgIGEuc3RhcnRMaW5lTnVtYmVyID09PSBiLnN0YXJ0TGluZU51bWJlciAmJlxuICAgICAgICAgICAgYS5zdGFydENvbHVtbiA9PT0gYi5zdGFydENvbHVtbiAmJlxuICAgICAgICAgICAgYS5lbmRMaW5lTnVtYmVyID09PSBiLmVuZExpbmVOdW1iZXIgJiZcbiAgICAgICAgICAgIGEuZW5kQ29sdW1uID09PSBiLmVuZENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGVuZCBwb3NpdGlvbiAod2hpY2ggd2lsbCBiZSBhZnRlciBvciBlcXVhbCB0byB0aGUgc3RhcnQgcG9zaXRpb24pXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLmdldEVuZFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKHRoaXMuZW5kTGluZU51bWJlciwgdGhpcy5lbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzdGFydCBwb3NpdGlvbiAod2hpY2ggd2lsbCBiZSBiZWZvcmUgb3IgZXF1YWwgdG8gdGhlIGVuZCBwb3NpdGlvbilcbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuZ2V0U3RhcnRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbih0aGlzLnN0YXJ0TGluZU51bWJlciwgdGhpcy5zdGFydENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gdG8gYSB1c2VyIHByZXNlbnRhYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnWycgKyB0aGlzLnN0YXJ0TGluZU51bWJlciArICcsJyArIHRoaXMuc3RhcnRDb2x1bW4gKyAnIC0+ICcgKyB0aGlzLmVuZExpbmVOdW1iZXIgKyAnLCcgKyB0aGlzLmVuZENvbHVtbiArICddJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyByYW5nZSB1c2luZyB0aGlzIHJhbmdlJ3Mgc3RhcnQgcG9zaXRpb24sIGFuZCB1c2luZyBlbmRMaW5lTnVtYmVyIGFuZCBlbmRDb2x1bW4gYXMgdGhlIGVuZCBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuc2V0RW5kUG9zaXRpb24gPSBmdW5jdGlvbiAoZW5kTGluZU51bWJlciwgZW5kQ29sdW1uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2UodGhpcy5zdGFydExpbmVOdW1iZXIsIHRoaXMuc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgcmFuZ2UgdXNpbmcgdGhpcyByYW5nZSdzIGVuZCBwb3NpdGlvbiwgYW5kIHVzaW5nIHN0YXJ0TGluZU51bWJlciBhbmQgc3RhcnRDb2x1bW4gYXMgdGhlIHN0YXJ0IHBvc2l0aW9uLlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5zZXRTdGFydFBvc2l0aW9uID0gZnVuY3Rpb24gKHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZShzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uLCB0aGlzLmVuZExpbmVOdW1iZXIsIHRoaXMuZW5kQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBlbXB0eSByYW5nZSB1c2luZyB0aGlzIHJhbmdlJ3Mgc3RhcnQgcG9zaXRpb24uXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLmNvbGxhcHNlVG9TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJhbmdlLmNvbGxhcHNlVG9TdGFydCh0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBlbXB0eSByYW5nZSB1c2luZyB0aGlzIHJhbmdlJ3Mgc3RhcnQgcG9zaXRpb24uXG4gICAgICovXG4gICAgUmFuZ2UuY29sbGFwc2VUb1N0YXJ0ID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLCByYW5nZS5zdGFydENvbHVtbiwgcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLCByYW5nZS5zdGFydENvbHVtbik7XG4gICAgfTtcbiAgICAvLyAtLS1cbiAgICBSYW5nZS5mcm9tUG9zaXRpb25zID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKGVuZCA9PT0gdm9pZCAwKSB7IGVuZCA9IHN0YXJ0OyB9XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2Uoc3RhcnQubGluZU51bWJlciwgc3RhcnQuY29sdW1uLCBlbmQubGluZU51bWJlciwgZW5kLmNvbHVtbik7XG4gICAgfTtcbiAgICBSYW5nZS5saWZ0ID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLCByYW5nZS5zdGFydENvbHVtbiwgcmFuZ2UuZW5kTGluZU51bWJlciwgcmFuZ2UuZW5kQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgYG9iamAgaXMgYW4gYElSYW5nZWAuXG4gICAgICovXG4gICAgUmFuZ2UuaXNJUmFuZ2UgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAob2JqXG4gICAgICAgICAgICAmJiAodHlwZW9mIG9iai5zdGFydExpbmVOdW1iZXIgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmouc3RhcnRDb2x1bW4gPT09ICdudW1iZXInKVxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmouZW5kTGluZU51bWJlciA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAmJiAodHlwZW9mIG9iai5lbmRDb2x1bW4gPT09ICdudW1iZXInKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoZSB0d28gcmFuZ2VzIGFyZSB0b3VjaGluZyBpbiBhbnkgd2F5LlxuICAgICAqL1xuICAgIFJhbmdlLmFyZUludGVyc2VjdGluZ09yVG91Y2hpbmcgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyBDaGVjayBpZiBgYWAgaXMgYmVmb3JlIGBiYFxuICAgICAgICBpZiAoYS5lbmRMaW5lTnVtYmVyIDwgYi5zdGFydExpbmVOdW1iZXIgfHwgKGEuZW5kTGluZU51bWJlciA9PT0gYi5zdGFydExpbmVOdW1iZXIgJiYgYS5lbmRDb2x1bW4gPCBiLnN0YXJ0Q29sdW1uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIGBiYCBpcyBiZWZvcmUgYGFgXG4gICAgICAgIGlmIChiLmVuZExpbmVOdW1iZXIgPCBhLnN0YXJ0TGluZU51bWJlciB8fCAoYi5lbmRMaW5lTnVtYmVyID09PSBhLnN0YXJ0TGluZU51bWJlciAmJiBiLmVuZENvbHVtbiA8IGEuc3RhcnRDb2x1bW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlc2UgcmFuZ2VzIG11c3QgaW50ZXJzZWN0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGUgdHdvIHJhbmdlcyBhcmUgaW50ZXJzZWN0aW5nLiBJZiB0aGUgcmFuZ2VzIGFyZSB0b3VjaGluZyBpdCByZXR1cm5zIHRydWUuXG4gICAgICovXG4gICAgUmFuZ2UuYXJlSW50ZXJzZWN0aW5nID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYGFgIGlzIGJlZm9yZSBgYmBcbiAgICAgICAgaWYgKGEuZW5kTGluZU51bWJlciA8IGIuc3RhcnRMaW5lTnVtYmVyIHx8IChhLmVuZExpbmVOdW1iZXIgPT09IGIuc3RhcnRMaW5lTnVtYmVyICYmIGEuZW5kQ29sdW1uIDw9IGIuc3RhcnRDb2x1bW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgYGJgIGlzIGJlZm9yZSBgYWBcbiAgICAgICAgaWYgKGIuZW5kTGluZU51bWJlciA8IGEuc3RhcnRMaW5lTnVtYmVyIHx8IChiLmVuZExpbmVOdW1iZXIgPT09IGEuc3RhcnRMaW5lTnVtYmVyICYmIGIuZW5kQ29sdW1uIDw9IGEuc3RhcnRDb2x1bW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlc2UgcmFuZ2VzIG11c3QgaW50ZXJzZWN0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHJhbmdlcywgdXNlZnVsIGZvciBzb3J0aW5nIHJhbmdlc1xuICAgICAqIEl0IHdpbGwgZmlyc3QgY29tcGFyZSByYW5nZXMgb24gdGhlIHN0YXJ0UG9zaXRpb24gYW5kIHRoZW4gb24gdGhlIGVuZFBvc2l0aW9uXG4gICAgICovXG4gICAgUmFuZ2UuY29tcGFyZVJhbmdlc1VzaW5nU3RhcnRzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEgJiYgYikge1xuICAgICAgICAgICAgdmFyIGFTdGFydExpbmVOdW1iZXIgPSBhLnN0YXJ0TGluZU51bWJlciB8IDA7XG4gICAgICAgICAgICB2YXIgYlN0YXJ0TGluZU51bWJlciA9IGIuc3RhcnRMaW5lTnVtYmVyIHwgMDtcbiAgICAgICAgICAgIGlmIChhU3RhcnRMaW5lTnVtYmVyID09PSBiU3RhcnRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFTdGFydENvbHVtbiA9IGEuc3RhcnRDb2x1bW4gfCAwO1xuICAgICAgICAgICAgICAgIHZhciBiU3RhcnRDb2x1bW4gPSBiLnN0YXJ0Q29sdW1uIHwgMDtcbiAgICAgICAgICAgICAgICBpZiAoYVN0YXJ0Q29sdW1uID09PSBiU3RhcnRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFFbmRMaW5lTnVtYmVyID0gYS5lbmRMaW5lTnVtYmVyIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJFbmRMaW5lTnVtYmVyID0gYi5lbmRMaW5lTnVtYmVyIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFFbmRMaW5lTnVtYmVyID09PSBiRW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFFbmRDb2x1bW4gPSBhLmVuZENvbHVtbiB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYkVuZENvbHVtbiA9IGIuZW5kQ29sdW1uIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhRW5kQ29sdW1uIC0gYkVuZENvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUVuZExpbmVOdW1iZXIgLSBiRW5kTGluZU51bWJlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFTdGFydENvbHVtbiAtIGJTdGFydENvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhU3RhcnRMaW5lTnVtYmVyIC0gYlN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYUV4aXN0cyA9IChhID8gMSA6IDApO1xuICAgICAgICB2YXIgYkV4aXN0cyA9IChiID8gMSA6IDApO1xuICAgICAgICByZXR1cm4gYUV4aXN0cyAtIGJFeGlzdHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgcmFuZ2VzLCB1c2VmdWwgZm9yIHNvcnRpbmcgcmFuZ2VzXG4gICAgICogSXQgd2lsbCBmaXJzdCBjb21wYXJlIHJhbmdlcyBvbiB0aGUgZW5kUG9zaXRpb24gYW5kIHRoZW4gb24gdGhlIHN0YXJ0UG9zaXRpb25cbiAgICAgKi9cbiAgICBSYW5nZS5jb21wYXJlUmFuZ2VzVXNpbmdFbmRzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEuZW5kTGluZU51bWJlciA9PT0gYi5lbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoYS5lbmRDb2x1bW4gPT09IGIuZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3RhcnRMaW5lTnVtYmVyID09PSBiLnN0YXJ0TGluZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zdGFydENvbHVtbiAtIGIuc3RhcnRDb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhLnN0YXJ0TGluZU51bWJlciAtIGIuc3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGEuZW5kQ29sdW1uIC0gYi5lbmRDb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGEuZW5kTGluZU51bWJlciAtIGIuZW5kTGluZU51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgdGhlIHJhbmdlIHNwYW5zIG11bHRpcGxlIGxpbmVzLlxuICAgICAqL1xuICAgIFJhbmdlLnNwYW5zTXVsdGlwbGVMaW5lcyA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UuZW5kTGluZU51bWJlciA+IHJhbmdlLnN0YXJ0TGluZU51bWJlcjtcbiAgICB9O1xuICAgIHJldHVybiBSYW5nZTtcbn0oKSk7XG5leHBvcnQgeyBSYW5nZSB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgeyBSYW5nZSB9IGZyb20gJy4vcmFuZ2UuanMnO1xuLyoqXG4gKiBBIHNlbGVjdGlvbiBpbiB0aGUgZWRpdG9yLlxuICogVGhlIHNlbGVjdGlvbiBpcyBhIHJhbmdlIHRoYXQgaGFzIGFuIG9yaWVudGF0aW9uLlxuICovXG52YXIgU2VsZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uKHNlbGVjdGlvblN0YXJ0TGluZU51bWJlciwgc2VsZWN0aW9uU3RhcnRDb2x1bW4sIHBvc2l0aW9uTGluZU51bWJlciwgcG9zaXRpb25Db2x1bW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyLCBzZWxlY3Rpb25TdGFydENvbHVtbiwgcG9zaXRpb25MaW5lTnVtYmVyLCBwb3NpdGlvbkNvbHVtbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyID0gc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICBfdGhpcy5zZWxlY3Rpb25TdGFydENvbHVtbiA9IHNlbGVjdGlvblN0YXJ0Q29sdW1uO1xuICAgICAgICBfdGhpcy5wb3NpdGlvbkxpbmVOdW1iZXIgPSBwb3NpdGlvbkxpbmVOdW1iZXI7XG4gICAgICAgIF90aGlzLnBvc2l0aW9uQ29sdW1uID0gcG9zaXRpb25Db2x1bW47XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhpcyBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXIsIHRoaXMuc2VsZWN0aW9uU3RhcnRDb2x1bW4sIHRoaXMucG9zaXRpb25MaW5lTnVtYmVyLCB0aGlzLnBvc2l0aW9uQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSB0byBhIGh1bWFuLXJlYWRhYmxlIHJlcHJlc2VudGF0aW9uLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnWycgKyB0aGlzLnNlbGVjdGlvblN0YXJ0TGluZU51bWJlciArICcsJyArIHRoaXMuc2VsZWN0aW9uU3RhcnRDb2x1bW4gKyAnIC0+ICcgKyB0aGlzLnBvc2l0aW9uTGluZU51bWJlciArICcsJyArIHRoaXMucG9zaXRpb25Db2x1bW4gKyAnXSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIGVxdWFscyBvdGhlciBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5lcXVhbHNTZWxlY3Rpb24gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIChTZWxlY3Rpb24uc2VsZWN0aW9uc0VxdWFsKHRoaXMsIG90aGVyKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoZSB0d28gc2VsZWN0aW9ucyBhcmUgZXF1YWwuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnNlbGVjdGlvbnNFcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYS5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXIgPT09IGIuc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyICYmXG4gICAgICAgICAgICBhLnNlbGVjdGlvblN0YXJ0Q29sdW1uID09PSBiLnNlbGVjdGlvblN0YXJ0Q29sdW1uICYmXG4gICAgICAgICAgICBhLnBvc2l0aW9uTGluZU51bWJlciA9PT0gYi5wb3NpdGlvbkxpbmVOdW1iZXIgJiZcbiAgICAgICAgICAgIGEucG9zaXRpb25Db2x1bW4gPT09IGIucG9zaXRpb25Db2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGRpcmVjdGlvbnMgKExUUiBvciBSVEwpLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXIgPT09IHRoaXMuc3RhcnRMaW5lTnVtYmVyICYmIHRoaXMuc2VsZWN0aW9uU3RhcnRDb2x1bW4gPT09IHRoaXMuc3RhcnRDb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiAwIC8qIExUUiAqLztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMSAvKiBSVEwgKi87XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgc2VsZWN0aW9uIHdpdGggYSBkaWZmZXJlbnQgYHBvc2l0aW9uTGluZU51bWJlcmAgYW5kIGBwb3NpdGlvbkNvbHVtbmAuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5zZXRFbmRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKCkgPT09IDAgLyogTFRSICovKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLnN0YXJ0TGluZU51bWJlciwgdGhpcy5zdGFydENvbHVtbiwgZW5kTGluZU51bWJlciwgZW5kQ29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbihlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW4sIHRoaXMuc3RhcnRMaW5lTnVtYmVyLCB0aGlzLnN0YXJ0Q29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcG9zaXRpb24gYXQgYHBvc2l0aW9uTGluZU51bWJlcmAgYW5kIGBwb3NpdGlvbkNvbHVtbmAuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbih0aGlzLnBvc2l0aW9uTGluZU51bWJlciwgdGhpcy5wb3NpdGlvbkNvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgc2VsZWN0aW9uIHdpdGggYSBkaWZmZXJlbnQgYHNlbGVjdGlvblN0YXJ0TGluZU51bWJlcmAgYW5kIGBzZWxlY3Rpb25TdGFydENvbHVtbmAuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5zZXRTdGFydFBvc2l0aW9uID0gZnVuY3Rpb24gKHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKCkgPT09IDAgLyogTFRSICovKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uLCB0aGlzLmVuZExpbmVOdW1iZXIsIHRoaXMuZW5kQ29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLmVuZExpbmVOdW1iZXIsIHRoaXMuZW5kQ29sdW1uLCBzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uKTtcbiAgICB9O1xuICAgIC8vIC0tLS1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBgU2VsZWN0aW9uYCBmcm9tIG9uZSBvciB0d28gcG9zaXRpb25zXG4gICAgICovXG4gICAgU2VsZWN0aW9uLmZyb21Qb3NpdGlvbnMgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICAgICAgICBpZiAoZW5kID09PSB2b2lkIDApIHsgZW5kID0gc3RhcnQ7IH1cbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3RhcnQubGluZU51bWJlciwgc3RhcnQuY29sdW1uLCBlbmQubGluZU51bWJlciwgZW5kLmNvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBgU2VsZWN0aW9uYCBmcm9tIGFuIGBJU2VsZWN0aW9uYC5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24ubGlmdFNlbGVjdGlvbiA9IGZ1bmN0aW9uIChzZWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc2VsLnNlbGVjdGlvblN0YXJ0TGluZU51bWJlciwgc2VsLnNlbGVjdGlvblN0YXJ0Q29sdW1uLCBzZWwucG9zaXRpb25MaW5lTnVtYmVyLCBzZWwucG9zaXRpb25Db2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogYGFgIGVxdWFscyBgYmAuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnNlbGVjdGlvbnNBcnJFcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhICYmICFiIHx8ICFhICYmIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWEgJiYgIWIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbnNFcXVhbChhW2ldLCBiW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgYG9iamAgaXMgYW4gYElTZWxlY3Rpb25gLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5pc0lTZWxlY3Rpb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAob2JqXG4gICAgICAgICAgICAmJiAodHlwZW9mIG9iai5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXIgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmouc2VsZWN0aW9uU3RhcnRDb2x1bW4gPT09ICdudW1iZXInKVxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmoucG9zaXRpb25MaW5lTnVtYmVyID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLnBvc2l0aW9uQ29sdW1uID09PSAnbnVtYmVyJykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHdpdGggYSBkaXJlY3Rpb24uXG4gICAgICovXG4gICAgU2VsZWN0aW9uLmNyZWF0ZVdpdGhEaXJlY3Rpb24gPSBmdW5jdGlvbiAoc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbiwgZW5kTGluZU51bWJlciwgZW5kQ29sdW1uLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCAvKiBMVFIgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2VsZWN0aW9uKHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oZW5kTGluZU51bWJlciwgZW5kQ29sdW1uLCBzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uKTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3Rpb247XG59KFJhbmdlKSk7XG5leHBvcnQgeyBTZWxlY3Rpb24gfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xudmFyIFRva2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRva2VuKG9mZnNldCwgdHlwZSwgbGFuZ3VhZ2UpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQgfCAwOyAvLyBAcGVyZlxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgfVxuICAgIFRva2VuLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcoJyArIHRoaXMub2Zmc2V0ICsgJywgJyArIHRoaXMudHlwZSArICcpJztcbiAgICB9O1xuICAgIHJldHVybiBUb2tlbjtcbn0oKSk7XG5leHBvcnQgeyBUb2tlbiB9O1xudmFyIFRva2VuaXphdGlvblJlc3VsdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb2tlbml6YXRpb25SZXN1bHQodG9rZW5zLCBlbmRTdGF0ZSkge1xuICAgICAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICAgICAgdGhpcy5lbmRTdGF0ZSA9IGVuZFN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW5pemF0aW9uUmVzdWx0O1xufSgpKTtcbmV4cG9ydCB7IFRva2VuaXphdGlvblJlc3VsdCB9O1xudmFyIFRva2VuaXphdGlvblJlc3VsdDIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9rZW5pemF0aW9uUmVzdWx0Mih0b2tlbnMsIGVuZFN0YXRlKSB7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgICAgICB0aGlzLmVuZFN0YXRlID0gZW5kU3RhdGU7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbml6YXRpb25SZXN1bHQyO1xufSgpKTtcbmV4cG9ydCB7IFRva2VuaXphdGlvblJlc3VsdDIgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xudmFyIFVpbnQ4TWF0cml4ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFVpbnQ4TWF0cml4KHJvd3MsIGNvbHMsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KHJvd3MgKiBjb2xzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvd3MgKiBjb2xzOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgICAgIHRoaXMuY29scyA9IGNvbHM7XG4gICAgfVxuICAgIFVpbnQ4TWF0cml4LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbcm93ICogdGhpcy5jb2xzICsgY29sXTtcbiAgICB9O1xuICAgIFVpbnQ4TWF0cml4LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAocm93LCBjb2wsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2RhdGFbcm93ICogdGhpcy5jb2xzICsgY29sXSA9IHZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIFVpbnQ4TWF0cml4O1xufSgpKTtcbmV4cG9ydCB7IFVpbnQ4TWF0cml4IH07XG5leHBvcnQgZnVuY3Rpb24gdG9VaW50OCh2KSB7XG4gICAgaWYgKHYgPCAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAodiA+IDI1NSAvKiBNQVhfVUlOVF84ICovKSB7XG4gICAgICAgIHJldHVybiAyNTUgLyogTUFYX1VJTlRfOCAqLztcbiAgICB9XG4gICAgcmV0dXJuIHYgfCAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvVWludDMyKHYpIHtcbiAgICBpZiAodiA8IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmICh2ID4gNDI5NDk2NzI5NSAvKiBNQVhfVUlOVF8zMiAqLykge1xuICAgICAgICByZXR1cm4gNDI5NDk2NzI5NSAvKiBNQVhfVUlOVF8zMiAqLztcbiAgICB9XG4gICAgcmV0dXJuIHYgfCAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvVWludDMyQXJyYXkoYXJyKSB7XG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIHIgPSBuZXcgVWludDMyQXJyYXkobGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHJbaV0gPSB0b1VpbnQzMihhcnJbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgTGNzRGlmZiB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL2RpZmYvZGlmZi5qcyc7XG5pbXBvcnQgKiBhcyBzdHJpbmdzIGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL3N0cmluZ3MuanMnO1xudmFyIE1BWElNVU1fUlVOX1RJTUUgPSA1MDAwOyAvLyA1IHNlY29uZHNcbnZhciBNSU5JTVVNX01BVENISU5HX0NIQVJBQ1RFUl9MRU5HVEggPSAzO1xuZnVuY3Rpb24gY29tcHV0ZURpZmYob3JpZ2luYWxTZXF1ZW5jZSwgbW9kaWZpZWRTZXF1ZW5jZSwgY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlLCBwcmV0dHkpIHtcbiAgICB2YXIgZGlmZkFsZ28gPSBuZXcgTGNzRGlmZihvcmlnaW5hbFNlcXVlbmNlLCBtb2RpZmllZFNlcXVlbmNlLCBjb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUpO1xuICAgIHJldHVybiBkaWZmQWxnby5Db21wdXRlRGlmZihwcmV0dHkpO1xufVxudmFyIExpbmVNYXJrZXJTZXF1ZW5jZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMaW5lTWFya2VyU2VxdWVuY2UobGluZXMpIHtcbiAgICAgICAgdmFyIHN0YXJ0Q29sdW1ucyA9IFtdO1xuICAgICAgICB2YXIgZW5kQ29sdW1ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoXzEgPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW5ndGhfMTsgaSsrKSB7XG4gICAgICAgICAgICBzdGFydENvbHVtbnNbaV0gPSBMaW5lTWFya2VyU2VxdWVuY2UuX2dldEZpcnN0Tm9uQmxhbmtDb2x1bW4obGluZXNbaV0sIDEpO1xuICAgICAgICAgICAgZW5kQ29sdW1uc1tpXSA9IExpbmVNYXJrZXJTZXF1ZW5jZS5fZ2V0TGFzdE5vbkJsYW5rQ29sdW1uKGxpbmVzW2ldLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9saW5lcyA9IGxpbmVzO1xuICAgICAgICB0aGlzLl9zdGFydENvbHVtbnMgPSBzdGFydENvbHVtbnM7XG4gICAgICAgIHRoaXMuX2VuZENvbHVtbnMgPSBlbmRDb2x1bW5zO1xuICAgIH1cbiAgICBMaW5lTWFya2VyU2VxdWVuY2UucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzLmxlbmd0aDtcbiAgICB9O1xuICAgIExpbmVNYXJrZXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0RWxlbWVudEF0SW5kZXggPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGluZXNbaV0uc3Vic3RyaW5nKHRoaXMuX3N0YXJ0Q29sdW1uc1tpXSAtIDEsIHRoaXMuX2VuZENvbHVtbnNbaV0gLSAxKTtcbiAgICB9O1xuICAgIExpbmVNYXJrZXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0U3RhcnRMaW5lTnVtYmVyID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgIH07XG4gICAgTGluZU1hcmtlclNlcXVlbmNlLnByb3RvdHlwZS5nZXRFbmRMaW5lTnVtYmVyID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgIH07XG4gICAgTGluZU1hcmtlclNlcXVlbmNlLl9nZXRGaXJzdE5vbkJsYW5rQ29sdW1uID0gZnVuY3Rpb24gKHR4dCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciByID0gc3RyaW5ncy5maXJzdE5vbldoaXRlc3BhY2VJbmRleCh0eHQpO1xuICAgICAgICBpZiAociA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHIgKyAxO1xuICAgIH07XG4gICAgTGluZU1hcmtlclNlcXVlbmNlLl9nZXRMYXN0Tm9uQmxhbmtDb2x1bW4gPSBmdW5jdGlvbiAodHh0LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIHIgPSBzdHJpbmdzLmxhc3ROb25XaGl0ZXNwYWNlSW5kZXgodHh0KTtcbiAgICAgICAgaWYgKHIgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByICsgMjtcbiAgICB9O1xuICAgIExpbmVNYXJrZXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0Q2hhclNlcXVlbmNlID0gZnVuY3Rpb24gKHNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlLCBzdGFydEluZGV4LCBlbmRJbmRleCkge1xuICAgICAgICB2YXIgY2hhckNvZGVzID0gW107XG4gICAgICAgIHZhciBsaW5lTnVtYmVycyA9IFtdO1xuICAgICAgICB2YXIgY29sdW1ucyA9IFtdO1xuICAgICAgICB2YXIgbGVuID0gMDtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSBzdGFydEluZGV4OyBpbmRleCA8PSBlbmRJbmRleDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIGxpbmVDb250ZW50ID0gdGhpcy5fbGluZXNbaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHN0YXJ0Q29sdW1uID0gKHNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlID8gdGhpcy5fc3RhcnRDb2x1bW5zW2luZGV4XSA6IDEpO1xuICAgICAgICAgICAgdmFyIGVuZENvbHVtbiA9IChzaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSA/IHRoaXMuX2VuZENvbHVtbnNbaW5kZXhdIDogbGluZUNvbnRlbnQubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSBzdGFydENvbHVtbjsgY29sIDwgZW5kQ29sdW1uOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNoYXJDb2Rlc1tsZW5dID0gbGluZUNvbnRlbnQuY2hhckNvZGVBdChjb2wgLSAxKTtcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyc1tsZW5dID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGNvbHVtbnNbbGVuXSA9IGNvbDtcbiAgICAgICAgICAgICAgICBsZW4rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENoYXJTZXF1ZW5jZShjaGFyQ29kZXMsIGxpbmVOdW1iZXJzLCBjb2x1bW5zKTtcbiAgICB9O1xuICAgIHJldHVybiBMaW5lTWFya2VyU2VxdWVuY2U7XG59KCkpO1xudmFyIENoYXJTZXF1ZW5jZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFyU2VxdWVuY2UoY2hhckNvZGVzLCBsaW5lTnVtYmVycywgY29sdW1ucykge1xuICAgICAgICB0aGlzLl9jaGFyQ29kZXMgPSBjaGFyQ29kZXM7XG4gICAgICAgIHRoaXMuX2xpbmVOdW1iZXJzID0gbGluZU51bWJlcnM7XG4gICAgICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIH1cbiAgICBDaGFyU2VxdWVuY2UucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJDb2Rlcy5sZW5ndGg7XG4gICAgfTtcbiAgICBDaGFyU2VxdWVuY2UucHJvdG90eXBlLmdldEVsZW1lbnRBdEluZGV4ID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJDb2Rlc1tpXTtcbiAgICB9O1xuICAgIENoYXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0U3RhcnRMaW5lTnVtYmVyID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVOdW1iZXJzW2ldO1xuICAgIH07XG4gICAgQ2hhclNlcXVlbmNlLnByb3RvdHlwZS5nZXRTdGFydENvbHVtbiA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zW2ldO1xuICAgIH07XG4gICAgQ2hhclNlcXVlbmNlLnByb3RvdHlwZS5nZXRFbmRMaW5lTnVtYmVyID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVOdW1iZXJzW2ldO1xuICAgIH07XG4gICAgQ2hhclNlcXVlbmNlLnByb3RvdHlwZS5nZXRFbmRDb2x1bW4gPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uc1tpXSArIDE7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hhclNlcXVlbmNlO1xufSgpKTtcbnZhciBDaGFyQ2hhbmdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYXJDaGFuZ2Uob3JpZ2luYWxTdGFydExpbmVOdW1iZXIsIG9yaWdpbmFsU3RhcnRDb2x1bW4sIG9yaWdpbmFsRW5kTGluZU51bWJlciwgb3JpZ2luYWxFbmRDb2x1bW4sIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0Q29sdW1uLCBtb2RpZmllZEVuZExpbmVOdW1iZXIsIG1vZGlmaWVkRW5kQ29sdW1uKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxTdGFydExpbmVOdW1iZXIgPSBvcmlnaW5hbFN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0YXJ0Q29sdW1uID0gb3JpZ2luYWxTdGFydENvbHVtbjtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEVuZExpbmVOdW1iZXIgPSBvcmlnaW5hbEVuZExpbmVOdW1iZXI7XG4gICAgICAgIHRoaXMub3JpZ2luYWxFbmRDb2x1bW4gPSBvcmlnaW5hbEVuZENvbHVtbjtcbiAgICAgICAgdGhpcy5tb2RpZmllZFN0YXJ0TGluZU51bWJlciA9IG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB0aGlzLm1vZGlmaWVkU3RhcnRDb2x1bW4gPSBtb2RpZmllZFN0YXJ0Q29sdW1uO1xuICAgICAgICB0aGlzLm1vZGlmaWVkRW5kTGluZU51bWJlciA9IG1vZGlmaWVkRW5kTGluZU51bWJlcjtcbiAgICAgICAgdGhpcy5tb2RpZmllZEVuZENvbHVtbiA9IG1vZGlmaWVkRW5kQ29sdW1uO1xuICAgIH1cbiAgICBDaGFyQ2hhbmdlLmNyZWF0ZUZyb21EaWZmQ2hhbmdlID0gZnVuY3Rpb24gKGRpZmZDaGFuZ2UsIG9yaWdpbmFsQ2hhclNlcXVlbmNlLCBtb2RpZmllZENoYXJTZXF1ZW5jZSkge1xuICAgICAgICB2YXIgb3JpZ2luYWxTdGFydExpbmVOdW1iZXI7XG4gICAgICAgIHZhciBvcmlnaW5hbFN0YXJ0Q29sdW1uO1xuICAgICAgICB2YXIgb3JpZ2luYWxFbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgb3JpZ2luYWxFbmRDb2x1bW47XG4gICAgICAgIHZhciBtb2RpZmllZFN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdmFyIG1vZGlmaWVkU3RhcnRDb2x1bW47XG4gICAgICAgIHZhciBtb2RpZmllZEVuZExpbmVOdW1iZXI7XG4gICAgICAgIHZhciBtb2RpZmllZEVuZENvbHVtbjtcbiAgICAgICAgaWYgKGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyID0gMDtcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRDb2x1bW4gPSAwO1xuICAgICAgICAgICAgb3JpZ2luYWxFbmRMaW5lTnVtYmVyID0gMDtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kQ29sdW1uID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyID0gb3JpZ2luYWxDaGFyU2VxdWVuY2UuZ2V0U3RhcnRMaW5lTnVtYmVyKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCk7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0Q29sdW1uID0gb3JpZ2luYWxDaGFyU2VxdWVuY2UuZ2V0U3RhcnRDb2x1bW4oZGlmZkNoYW5nZS5vcmlnaW5hbFN0YXJ0KTtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kTGluZU51bWJlciA9IG9yaWdpbmFsQ2hhclNlcXVlbmNlLmdldEVuZExpbmVOdW1iZXIoZGlmZkNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgZGlmZkNoYW5nZS5vcmlnaW5hbExlbmd0aCAtIDEpO1xuICAgICAgICAgICAgb3JpZ2luYWxFbmRDb2x1bW4gPSBvcmlnaW5hbENoYXJTZXF1ZW5jZS5nZXRFbmRDb2x1bW4oZGlmZkNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgZGlmZkNoYW5nZS5vcmlnaW5hbExlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaWZmQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBtb2RpZmllZFN0YXJ0TGluZU51bWJlciA9IDA7XG4gICAgICAgICAgICBtb2RpZmllZFN0YXJ0Q29sdW1uID0gMDtcbiAgICAgICAgICAgIG1vZGlmaWVkRW5kTGluZU51bWJlciA9IDA7XG4gICAgICAgICAgICBtb2RpZmllZEVuZENvbHVtbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RpZmllZFN0YXJ0TGluZU51bWJlciA9IG1vZGlmaWVkQ2hhclNlcXVlbmNlLmdldFN0YXJ0TGluZU51bWJlcihkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQpO1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydENvbHVtbiA9IG1vZGlmaWVkQ2hhclNlcXVlbmNlLmdldFN0YXJ0Q29sdW1uKGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCk7XG4gICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXIgPSBtb2RpZmllZENoYXJTZXF1ZW5jZS5nZXRFbmRMaW5lTnVtYmVyKGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCArIGRpZmZDaGFuZ2UubW9kaWZpZWRMZW5ndGggLSAxKTtcbiAgICAgICAgICAgIG1vZGlmaWVkRW5kQ29sdW1uID0gbW9kaWZpZWRDaGFyU2VxdWVuY2UuZ2V0RW5kQ29sdW1uKGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCArIGRpZmZDaGFuZ2UubW9kaWZpZWRMZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENoYXJDaGFuZ2Uob3JpZ2luYWxTdGFydExpbmVOdW1iZXIsIG9yaWdpbmFsU3RhcnRDb2x1bW4sIG9yaWdpbmFsRW5kTGluZU51bWJlciwgb3JpZ2luYWxFbmRDb2x1bW4sIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0Q29sdW1uLCBtb2RpZmllZEVuZExpbmVOdW1iZXIsIG1vZGlmaWVkRW5kQ29sdW1uKTtcbiAgICB9O1xuICAgIHJldHVybiBDaGFyQ2hhbmdlO1xufSgpKTtcbmZ1bmN0aW9uIHBvc3RQcm9jZXNzQ2hhckNoYW5nZXMocmF3Q2hhbmdlcykge1xuICAgIGlmIChyYXdDaGFuZ2VzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIHJldHVybiByYXdDaGFuZ2VzO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gW3Jhd0NoYW5nZXNbMF1dO1xuICAgIHZhciBwcmV2Q2hhbmdlID0gcmVzdWx0WzBdO1xuICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSByYXdDaGFuZ2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjdXJyQ2hhbmdlID0gcmF3Q2hhbmdlc1tpXTtcbiAgICAgICAgdmFyIG9yaWdpbmFsTWF0Y2hpbmdMZW5ndGggPSBjdXJyQ2hhbmdlLm9yaWdpbmFsU3RhcnQgLSAocHJldkNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgcHJldkNoYW5nZS5vcmlnaW5hbExlbmd0aCk7XG4gICAgICAgIHZhciBtb2RpZmllZE1hdGNoaW5nTGVuZ3RoID0gY3VyckNoYW5nZS5tb2RpZmllZFN0YXJ0IC0gKHByZXZDaGFuZ2UubW9kaWZpZWRTdGFydCArIHByZXZDaGFuZ2UubW9kaWZpZWRMZW5ndGgpO1xuICAgICAgICAvLyBCb3RoIG9mIHRoZSBhYm92ZSBzaG91bGQgYmUgZXF1YWwsIGJ1dCB0aGUgY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlIG1heSBwcmV2ZW50IHRoaXMgZnJvbSBiZWluZyB0cnVlXG4gICAgICAgIHZhciBtYXRjaGluZ0xlbmd0aCA9IE1hdGgubWluKG9yaWdpbmFsTWF0Y2hpbmdMZW5ndGgsIG1vZGlmaWVkTWF0Y2hpbmdMZW5ndGgpO1xuICAgICAgICBpZiAobWF0Y2hpbmdMZW5ndGggPCBNSU5JTVVNX01BVENISU5HX0NIQVJBQ1RFUl9MRU5HVEgpIHtcbiAgICAgICAgICAgIC8vIE1lcmdlIHRoZSBjdXJyZW50IGNoYW5nZSBpbnRvIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgICAgIHByZXZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggPSAoY3VyckNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgY3VyckNoYW5nZS5vcmlnaW5hbExlbmd0aCkgLSBwcmV2Q2hhbmdlLm9yaWdpbmFsU3RhcnQ7XG4gICAgICAgICAgICBwcmV2Q2hhbmdlLm1vZGlmaWVkTGVuZ3RoID0gKGN1cnJDaGFuZ2UubW9kaWZpZWRTdGFydCArIGN1cnJDaGFuZ2UubW9kaWZpZWRMZW5ndGgpIC0gcHJldkNoYW5nZS5tb2RpZmllZFN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBjdXJyZW50IGNoYW5nZVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VyckNoYW5nZSk7XG4gICAgICAgICAgICBwcmV2Q2hhbmdlID0gY3VyckNoYW5nZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxudmFyIExpbmVDaGFuZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGluZUNoYW5nZShvcmlnaW5hbFN0YXJ0TGluZU51bWJlciwgb3JpZ2luYWxFbmRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0TGluZU51bWJlciwgbW9kaWZpZWRFbmRMaW5lTnVtYmVyLCBjaGFyQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyID0gb3JpZ2luYWxTdGFydExpbmVOdW1iZXI7XG4gICAgICAgIHRoaXMub3JpZ2luYWxFbmRMaW5lTnVtYmVyID0gb3JpZ2luYWxFbmRMaW5lTnVtYmVyO1xuICAgICAgICB0aGlzLm1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyID0gbW9kaWZpZWRTdGFydExpbmVOdW1iZXI7XG4gICAgICAgIHRoaXMubW9kaWZpZWRFbmRMaW5lTnVtYmVyID0gbW9kaWZpZWRFbmRMaW5lTnVtYmVyO1xuICAgICAgICB0aGlzLmNoYXJDaGFuZ2VzID0gY2hhckNoYW5nZXM7XG4gICAgfVxuICAgIExpbmVDaGFuZ2UuY3JlYXRlRnJvbURpZmZSZXN1bHQgPSBmdW5jdGlvbiAoc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2UsIGRpZmZDaGFuZ2UsIG9yaWdpbmFsTGluZVNlcXVlbmNlLCBtb2RpZmllZExpbmVTZXF1ZW5jZSwgY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlLCBzaG91bGRDb21wdXRlQ2hhckNoYW5nZXMsIHNob3VsZFBvc3RQcm9jZXNzQ2hhckNoYW5nZXMpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgb3JpZ2luYWxFbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgbW9kaWZpZWRTdGFydExpbmVOdW1iZXI7XG4gICAgICAgIHZhciBtb2RpZmllZEVuZExpbmVOdW1iZXI7XG4gICAgICAgIHZhciBjaGFyQ2hhbmdlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyID0gb3JpZ2luYWxMaW5lU2VxdWVuY2UuZ2V0U3RhcnRMaW5lTnVtYmVyKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCkgLSAxO1xuICAgICAgICAgICAgb3JpZ2luYWxFbmRMaW5lTnVtYmVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyID0gb3JpZ2luYWxMaW5lU2VxdWVuY2UuZ2V0U3RhcnRMaW5lTnVtYmVyKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCk7XG4gICAgICAgICAgICBvcmlnaW5hbEVuZExpbmVOdW1iZXIgPSBvcmlnaW5hbExpbmVTZXF1ZW5jZS5nZXRFbmRMaW5lTnVtYmVyKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlmZkNoYW5nZS5tb2RpZmllZExlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXIgPSBtb2RpZmllZExpbmVTZXF1ZW5jZS5nZXRTdGFydExpbmVOdW1iZXIoZGlmZkNoYW5nZS5tb2RpZmllZFN0YXJ0KSAtIDE7XG4gICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXIgPSBtb2RpZmllZExpbmVTZXF1ZW5jZS5nZXRTdGFydExpbmVOdW1iZXIoZGlmZkNoYW5nZS5tb2RpZmllZFN0YXJ0KTtcbiAgICAgICAgICAgIG1vZGlmaWVkRW5kTGluZU51bWJlciA9IG1vZGlmaWVkTGluZVNlcXVlbmNlLmdldEVuZExpbmVOdW1iZXIoZGlmZkNoYW5nZS5tb2RpZmllZFN0YXJ0ICsgZGlmZkNoYW5nZS5tb2RpZmllZExlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRDb21wdXRlQ2hhckNoYW5nZXMgJiYgZGlmZkNoYW5nZS5vcmlnaW5hbExlbmd0aCAhPT0gMCAmJiBkaWZmQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoICE9PSAwICYmIGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSgpKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxDaGFyU2VxdWVuY2UgPSBvcmlnaW5hbExpbmVTZXF1ZW5jZS5nZXRDaGFyU2VxdWVuY2Uoc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2UsIGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCwgZGlmZkNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgZGlmZkNoYW5nZS5vcmlnaW5hbExlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdmFyIG1vZGlmaWVkQ2hhclNlcXVlbmNlID0gbW9kaWZpZWRMaW5lU2VxdWVuY2UuZ2V0Q2hhclNlcXVlbmNlKHNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlLCBkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQsIGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCArIGRpZmZDaGFuZ2UubW9kaWZpZWRMZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHZhciByYXdDaGFuZ2VzID0gY29tcHV0ZURpZmYob3JpZ2luYWxDaGFyU2VxdWVuY2UsIG1vZGlmaWVkQ2hhclNlcXVlbmNlLCBjb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHNob3VsZFBvc3RQcm9jZXNzQ2hhckNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICByYXdDaGFuZ2VzID0gcG9zdFByb2Nlc3NDaGFyQ2hhbmdlcyhyYXdDaGFuZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYXJDaGFuZ2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoXzIgPSByYXdDaGFuZ2VzLmxlbmd0aDsgaSA8IGxlbmd0aF8yOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGFyQ2hhbmdlcy5wdXNoKENoYXJDaGFuZ2UuY3JlYXRlRnJvbURpZmZDaGFuZ2UocmF3Q2hhbmdlc1tpXSwgb3JpZ2luYWxDaGFyU2VxdWVuY2UsIG1vZGlmaWVkQ2hhclNlcXVlbmNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBMaW5lQ2hhbmdlKG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyLCBvcmlnaW5hbEVuZExpbmVOdW1iZXIsIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyLCBtb2RpZmllZEVuZExpbmVOdW1iZXIsIGNoYXJDaGFuZ2VzKTtcbiAgICB9O1xuICAgIHJldHVybiBMaW5lQ2hhbmdlO1xufSgpKTtcbnZhciBEaWZmQ29tcHV0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlmZkNvbXB1dGVyKG9yaWdpbmFsTGluZXMsIG1vZGlmaWVkTGluZXMsIG9wdHMpIHtcbiAgICAgICAgdGhpcy5zaG91bGRDb21wdXRlQ2hhckNoYW5nZXMgPSBvcHRzLnNob3VsZENvbXB1dGVDaGFyQ2hhbmdlcztcbiAgICAgICAgdGhpcy5zaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzID0gb3B0cy5zaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzO1xuICAgICAgICB0aGlzLnNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlID0gb3B0cy5zaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZTtcbiAgICAgICAgdGhpcy5zaG91bGRNYWtlUHJldHR5RGlmZiA9IG9wdHMuc2hvdWxkTWFrZVByZXR0eURpZmY7XG4gICAgICAgIHRoaXMubWF4aW11bVJ1blRpbWVNcyA9IE1BWElNVU1fUlVOX1RJTUU7XG4gICAgICAgIHRoaXMub3JpZ2luYWxMaW5lcyA9IG9yaWdpbmFsTGluZXM7XG4gICAgICAgIHRoaXMubW9kaWZpZWRMaW5lcyA9IG1vZGlmaWVkTGluZXM7XG4gICAgICAgIHRoaXMub3JpZ2luYWwgPSBuZXcgTGluZU1hcmtlclNlcXVlbmNlKG9yaWdpbmFsTGluZXMpO1xuICAgICAgICB0aGlzLm1vZGlmaWVkID0gbmV3IExpbmVNYXJrZXJTZXF1ZW5jZShtb2RpZmllZExpbmVzKTtcbiAgICB9XG4gICAgRGlmZkNvbXB1dGVyLnByb3RvdHlwZS5jb21wdXRlRGlmZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub3JpZ2luYWwuZ2V0TGVuZ3RoKCkgPT09IDEgJiYgdGhpcy5vcmlnaW5hbC5nZXRFbGVtZW50QXRJbmRleCgwKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGVtcHR5IG9yaWdpbmFsID0+IGZhc3QgcGF0aFxuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyOiAxLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVuZExpbmVOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyOiAxLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXI6IHRoaXMubW9kaWZpZWQuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgICAgICAgICAgIGNoYXJDaGFuZ2VzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkRW5kQ29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkRW5kTGluZU51bWJlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFN0YXJ0Q29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRW5kQ29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRW5kTGluZU51bWJlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0Q29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vZGlmaWVkLmdldExlbmd0aCgpID09PSAxICYmIHRoaXMubW9kaWZpZWQuZ2V0RWxlbWVudEF0SW5kZXgoMCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBlbXB0eSBtb2RpZmllZCA9PiBmYXN0IHBhdGhcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlcjogMSxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFbmRMaW5lTnVtYmVyOiB0aGlzLm9yaWdpbmFsLmdldExlbmd0aCgpLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFN0YXJ0TGluZU51bWJlcjogMSxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRFbmRMaW5lTnVtYmVyOiAxLFxuICAgICAgICAgICAgICAgICAgICBjaGFyQ2hhbmdlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEVuZENvbHVtbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTdGFydENvbHVtbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFN0YXJ0TGluZU51bWJlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVuZENvbHVtbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVuZExpbmVOdW1iZXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdGFydENvbHVtbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlcjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXB1dGF0aW9uU3RhcnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHJhd0NoYW5nZXMgPSBjb21wdXRlRGlmZih0aGlzLm9yaWdpbmFsLCB0aGlzLm1vZGlmaWVkLCB0aGlzLl9jb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUuYmluZCh0aGlzKSwgdGhpcy5zaG91bGRNYWtlUHJldHR5RGlmZik7XG4gICAgICAgIC8vIFRoZSBkaWZmIGlzIGFsd2F5cyBjb21wdXRlZCB3aXRoIGlnbm9yaW5nIHRyaW0gd2hpdGVzcGFjZVxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgd2UgZ2V0IHRoZSBwcmV0dGllc3QgZGlmZlxuICAgICAgICBpZiAodGhpcy5zaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSkge1xuICAgICAgICAgICAgdmFyIGxpbmVDaGFuZ2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoXzMgPSByYXdDaGFuZ2VzLmxlbmd0aDsgaSA8IGxlbmd0aF8zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lQ2hhbmdlcy5wdXNoKExpbmVDaGFuZ2UuY3JlYXRlRnJvbURpZmZSZXN1bHQodGhpcy5zaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSwgcmF3Q2hhbmdlc1tpXSwgdGhpcy5vcmlnaW5hbCwgdGhpcy5tb2RpZmllZCwgdGhpcy5fY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlLmJpbmQodGhpcyksIHRoaXMuc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzLCB0aGlzLnNob3VsZFBvc3RQcm9jZXNzQ2hhckNoYW5nZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaW5lQ2hhbmdlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBOZWVkIHRvIHBvc3QtcHJvY2VzcyBhbmQgaW50cm9kdWNlIGNoYW5nZXMgd2hlcmUgdGhlIHRyaW0gd2hpdGVzcGFjZSBpcyBkaWZmZXJlbnRcbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGFyZSBsb29waW5nIHN0YXJ0aW5nIGF0IC0xIHRvIGFsc28gY292ZXIgdGhlIGxpbmVzIGJlZm9yZSB0aGUgZmlyc3QgY2hhbmdlXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIG9yaWdpbmFsTGluZUluZGV4ID0gMDtcbiAgICAgICAgdmFyIG1vZGlmaWVkTGluZUluZGV4ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IC0xIC8qICEhISEgKi8sIGxlbiA9IHJhd0NoYW5nZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXh0Q2hhbmdlID0gKGkgKyAxIDwgbGVuID8gcmF3Q2hhbmdlc1tpICsgMV0gOiBudWxsKTtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFN0b3AgPSAobmV4dENoYW5nZSA/IG5leHRDaGFuZ2Uub3JpZ2luYWxTdGFydCA6IHRoaXMub3JpZ2luYWxMaW5lcy5sZW5ndGgpO1xuICAgICAgICAgICAgdmFyIG1vZGlmaWVkU3RvcCA9IChuZXh0Q2hhbmdlID8gbmV4dENoYW5nZS5tb2RpZmllZFN0YXJ0IDogdGhpcy5tb2RpZmllZExpbmVzLmxlbmd0aCk7XG4gICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxMaW5lSW5kZXggPCBvcmlnaW5hbFN0b3AgJiYgbW9kaWZpZWRMaW5lSW5kZXggPCBtb2RpZmllZFN0b3ApIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxMaW5lID0gdGhpcy5vcmlnaW5hbExpbmVzW29yaWdpbmFsTGluZUluZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRMaW5lID0gdGhpcy5tb2RpZmllZExpbmVzW21vZGlmaWVkTGluZUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxMaW5lICE9PSBtb2RpZmllZExpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2UgbGluZXMgZGlmZmVyIG9ubHkgaW4gdHJpbSB3aGl0ZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoZSBsZWFkaW5nIHdoaXRlc3BhY2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3RhcnRDb2x1bW4gPSBMaW5lTWFya2VyU2VxdWVuY2UuX2dldEZpcnN0Tm9uQmxhbmtDb2x1bW4ob3JpZ2luYWxMaW5lLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZFN0YXJ0Q29sdW1uID0gTGluZU1hcmtlclNlcXVlbmNlLl9nZXRGaXJzdE5vbkJsYW5rQ29sdW1uKG1vZGlmaWVkTGluZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxTdGFydENvbHVtbiA+IDEgJiYgbW9kaWZpZWRTdGFydENvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxDaGFyID0gb3JpZ2luYWxMaW5lLmNoYXJDb2RlQXQob3JpZ2luYWxTdGFydENvbHVtbiAtIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZENoYXIgPSBtb2RpZmllZExpbmUuY2hhckNvZGVBdChtb2RpZmllZFN0YXJ0Q29sdW1uIC0gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsQ2hhciAhPT0gbW9kaWZpZWRDaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0Q29sdW1uLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTdGFydENvbHVtbi0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU3RhcnRDb2x1bW4gPiAxIHx8IG1vZGlmaWVkU3RhcnRDb2x1bW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHVzaFRyaW1XaGl0ZXNwYWNlQ2hhckNoYW5nZShyZXN1bHQsIG9yaWdpbmFsTGluZUluZGV4ICsgMSwgMSwgb3JpZ2luYWxTdGFydENvbHVtbiwgbW9kaWZpZWRMaW5lSW5kZXggKyAxLCAxLCBtb2RpZmllZFN0YXJ0Q29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0aGUgdHJhaWxpbmcgd2hpdGVzcGFjZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxFbmRDb2x1bW4gPSBMaW5lTWFya2VyU2VxdWVuY2UuX2dldExhc3ROb25CbGFua0NvbHVtbihvcmlnaW5hbExpbmUsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkRW5kQ29sdW1uID0gTGluZU1hcmtlclNlcXVlbmNlLl9nZXRMYXN0Tm9uQmxhbmtDb2x1bW4obW9kaWZpZWRMaW5lLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbE1heENvbHVtbiA9IG9yaWdpbmFsTGluZS5sZW5ndGggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkTWF4Q29sdW1uID0gbW9kaWZpZWRMaW5lLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxFbmRDb2x1bW4gPCBvcmlnaW5hbE1heENvbHVtbiAmJiBtb2RpZmllZEVuZENvbHVtbiA8IG1vZGlmaWVkTWF4Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsQ2hhciA9IG9yaWdpbmFsTGluZS5jaGFyQ29kZUF0KG9yaWdpbmFsRW5kQ29sdW1uIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkQ2hhciA9IG9yaWdpbmFsTGluZS5jaGFyQ29kZUF0KG1vZGlmaWVkRW5kQ29sdW1uIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsQ2hhciAhPT0gbW9kaWZpZWRDaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVuZENvbHVtbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkRW5kQ29sdW1uKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxFbmRDb2x1bW4gPCBvcmlnaW5hbE1heENvbHVtbiB8fCBtb2RpZmllZEVuZENvbHVtbiA8IG1vZGlmaWVkTWF4Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHVzaFRyaW1XaGl0ZXNwYWNlQ2hhckNoYW5nZShyZXN1bHQsIG9yaWdpbmFsTGluZUluZGV4ICsgMSwgb3JpZ2luYWxFbmRDb2x1bW4sIG9yaWdpbmFsTWF4Q29sdW1uLCBtb2RpZmllZExpbmVJbmRleCArIDEsIG1vZGlmaWVkRW5kQ29sdW1uLCBtb2RpZmllZE1heENvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxMaW5lSW5kZXgrKztcbiAgICAgICAgICAgICAgICBtb2RpZmllZExpbmVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5leHRDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBFbWl0IHRoZSBhY3R1YWwgY2hhbmdlXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goTGluZUNoYW5nZS5jcmVhdGVGcm9tRGlmZlJlc3VsdCh0aGlzLnNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlLCBuZXh0Q2hhbmdlLCB0aGlzLm9yaWdpbmFsLCB0aGlzLm1vZGlmaWVkLCB0aGlzLl9jb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUuYmluZCh0aGlzKSwgdGhpcy5zaG91bGRDb21wdXRlQ2hhckNoYW5nZXMsIHRoaXMuc2hvdWxkUG9zdFByb2Nlc3NDaGFyQ2hhbmdlcykpO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsTGluZUluZGV4ICs9IG5leHRDaGFuZ2Uub3JpZ2luYWxMZW5ndGg7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRMaW5lSW5kZXggKz0gbmV4dENoYW5nZS5tb2RpZmllZExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgRGlmZkNvbXB1dGVyLnByb3RvdHlwZS5fcHVzaFRyaW1XaGl0ZXNwYWNlQ2hhckNoYW5nZSA9IGZ1bmN0aW9uIChyZXN1bHQsIG9yaWdpbmFsTGluZU51bWJlciwgb3JpZ2luYWxTdGFydENvbHVtbiwgb3JpZ2luYWxFbmRDb2x1bW4sIG1vZGlmaWVkTGluZU51bWJlciwgbW9kaWZpZWRTdGFydENvbHVtbiwgbW9kaWZpZWRFbmRDb2x1bW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX21lcmdlVHJpbVdoaXRlc3BhY2VDaGFyQ2hhbmdlKHJlc3VsdCwgb3JpZ2luYWxMaW5lTnVtYmVyLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBvcmlnaW5hbEVuZENvbHVtbiwgbW9kaWZpZWRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0Q29sdW1uLCBtb2RpZmllZEVuZENvbHVtbikpIHtcbiAgICAgICAgICAgIC8vIE1lcmdlZCBpbnRvIHByZXZpb3VzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoYXJDaGFuZ2VzID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRDb21wdXRlQ2hhckNoYW5nZXMpIHtcbiAgICAgICAgICAgIGNoYXJDaGFuZ2VzID0gW25ldyBDaGFyQ2hhbmdlKG9yaWdpbmFsTGluZU51bWJlciwgb3JpZ2luYWxTdGFydENvbHVtbiwgb3JpZ2luYWxMaW5lTnVtYmVyLCBvcmlnaW5hbEVuZENvbHVtbiwgbW9kaWZpZWRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0Q29sdW1uLCBtb2RpZmllZExpbmVOdW1iZXIsIG1vZGlmaWVkRW5kQ29sdW1uKV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2gobmV3IExpbmVDaGFuZ2Uob3JpZ2luYWxMaW5lTnVtYmVyLCBvcmlnaW5hbExpbmVOdW1iZXIsIG1vZGlmaWVkTGluZU51bWJlciwgbW9kaWZpZWRMaW5lTnVtYmVyLCBjaGFyQ2hhbmdlcykpO1xuICAgIH07XG4gICAgRGlmZkNvbXB1dGVyLnByb3RvdHlwZS5fbWVyZ2VUcmltV2hpdGVzcGFjZUNoYXJDaGFuZ2UgPSBmdW5jdGlvbiAocmVzdWx0LCBvcmlnaW5hbExpbmVOdW1iZXIsIG9yaWdpbmFsU3RhcnRDb2x1bW4sIG9yaWdpbmFsRW5kQ29sdW1uLCBtb2RpZmllZExpbmVOdW1iZXIsIG1vZGlmaWVkU3RhcnRDb2x1bW4sIG1vZGlmaWVkRW5kQ29sdW1uKSB7XG4gICAgICAgIHZhciBsZW4gPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZDaGFuZ2UgPSByZXN1bHRbbGVuIC0gMV07XG4gICAgICAgIGlmIChwcmV2Q2hhbmdlLm9yaWdpbmFsRW5kTGluZU51bWJlciA9PT0gMCB8fCBwcmV2Q2hhbmdlLm1vZGlmaWVkRW5kTGluZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgbWVyZ2Ugd2l0aCBpbnNlcnRzL2RlbGV0ZXNcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldkNoYW5nZS5vcmlnaW5hbEVuZExpbmVOdW1iZXIgKyAxID09PSBvcmlnaW5hbExpbmVOdW1iZXIgJiYgcHJldkNoYW5nZS5tb2RpZmllZEVuZExpbmVOdW1iZXIgKyAxID09PSBtb2RpZmllZExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHByZXZDaGFuZ2Uub3JpZ2luYWxFbmRMaW5lTnVtYmVyID0gb3JpZ2luYWxMaW5lTnVtYmVyO1xuICAgICAgICAgICAgcHJldkNoYW5nZS5tb2RpZmllZEVuZExpbmVOdW1iZXIgPSBtb2RpZmllZExpbmVOdW1iZXI7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRDb21wdXRlQ2hhckNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICBwcmV2Q2hhbmdlLmNoYXJDaGFuZ2VzLnB1c2gobmV3IENoYXJDaGFuZ2Uob3JpZ2luYWxMaW5lTnVtYmVyLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBvcmlnaW5hbExpbmVOdW1iZXIsIG9yaWdpbmFsRW5kQ29sdW1uLCBtb2RpZmllZExpbmVOdW1iZXIsIG1vZGlmaWVkU3RhcnRDb2x1bW4sIG1vZGlmaWVkTGluZU51bWJlciwgbW9kaWZpZWRFbmRDb2x1bW4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIERpZmZDb21wdXRlci5wcm90b3R5cGUuX2NvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWF4aW11bVJ1blRpbWVNcyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiBub3cgLSB0aGlzLmNvbXB1dGF0aW9uU3RhcnRUaW1lIDwgdGhpcy5tYXhpbXVtUnVuVGltZU1zO1xuICAgIH07XG4gICAgcmV0dXJuIERpZmZDb21wdXRlcjtcbn0oKSk7XG5leHBvcnQgeyBEaWZmQ29tcHV0ZXIgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9jb3JlL3Bvc2l0aW9uLmpzJztcbmltcG9ydCB7IFByZWZpeFN1bUNvbXB1dGVyIH0gZnJvbSAnLi4vdmlld01vZGVsL3ByZWZpeFN1bUNvbXB1dGVyLmpzJztcbnZhciBNaXJyb3JUZXh0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWlycm9yVGV4dE1vZGVsKHVyaSwgbGluZXMsIGVvbCwgdmVyc2lvbklkKSB7XG4gICAgICAgIHRoaXMuX3VyaSA9IHVyaTtcbiAgICAgICAgdGhpcy5fbGluZXMgPSBsaW5lcztcbiAgICAgICAgdGhpcy5fZW9sID0gZW9sO1xuICAgICAgICB0aGlzLl92ZXJzaW9uSWQgPSB2ZXJzaW9uSWQ7XG4gICAgICAgIHRoaXMuX2xpbmVTdGFydHMgPSBudWxsO1xuICAgIH1cbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2xpbmVzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLmdldFRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lcy5qb2luKHRoaXMuX2VvbCk7XG4gICAgfTtcbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLm9uRXZlbnRzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUuZW9sICYmIGUuZW9sICE9PSB0aGlzLl9lb2wpIHtcbiAgICAgICAgICAgIHRoaXMuX2VvbCA9IGUuZW9sO1xuICAgICAgICAgICAgdGhpcy5fbGluZVN0YXJ0cyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIG15IGxpbmVzXG4gICAgICAgIHZhciBjaGFuZ2VzID0gZS5jaGFuZ2VzO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoYW5nZXNfMSA9IGNoYW5nZXM7IF9pIDwgY2hhbmdlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNfMVtfaV07XG4gICAgICAgICAgICB0aGlzLl9hY2NlcHREZWxldGVSYW5nZShjaGFuZ2UucmFuZ2UpO1xuICAgICAgICAgICAgdGhpcy5fYWNjZXB0SW5zZXJ0VGV4dChuZXcgUG9zaXRpb24oY2hhbmdlLnJhbmdlLnN0YXJ0TGluZU51bWJlciwgY2hhbmdlLnJhbmdlLnN0YXJ0Q29sdW1uKSwgY2hhbmdlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZlcnNpb25JZCA9IGUudmVyc2lvbklkO1xuICAgIH07XG4gICAgTWlycm9yVGV4dE1vZGVsLnByb3RvdHlwZS5fZW5zdXJlTGluZVN0YXJ0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9saW5lU3RhcnRzKSB7XG4gICAgICAgICAgICB2YXIgZW9sTGVuZ3RoID0gdGhpcy5fZW9sLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBsaW5lc0xlbmd0aCA9IHRoaXMuX2xpbmVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBsaW5lU3RhcnRWYWx1ZXMgPSBuZXcgVWludDMyQXJyYXkobGluZXNMZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZVN0YXJ0VmFsdWVzW2ldID0gdGhpcy5fbGluZXNbaV0ubGVuZ3RoICsgZW9sTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbGluZVN0YXJ0cyA9IG5ldyBQcmVmaXhTdW1Db21wdXRlcihsaW5lU3RhcnRWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbGwgY2hhbmdlcyB0byBhIGxpbmUncyB0ZXh0IGdvIHRocm91Z2ggdGhpcyBtZXRob2RcbiAgICAgKi9cbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLl9zZXRMaW5lVGV4dCA9IGZ1bmN0aW9uIChsaW5lSW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xpbmVzW2xpbmVJbmRleF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2xpbmVTdGFydHMpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcmVmaXggc3VtXG4gICAgICAgICAgICB0aGlzLl9saW5lU3RhcnRzLmNoYW5nZVZhbHVlKGxpbmVJbmRleCwgdGhpcy5fbGluZXNbbGluZUluZGV4XS5sZW5ndGggKyB0aGlzLl9lb2wubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWlycm9yVGV4dE1vZGVsLnByb3RvdHlwZS5fYWNjZXB0RGVsZXRlUmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgaWYgKHJhbmdlLnN0YXJ0TGluZU51bWJlciA9PT0gcmFuZ2UuZW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKHJhbmdlLnN0YXJ0Q29sdW1uID09PSByYW5nZS5lbmRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRlbGV0ZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlbGV0ZSB0ZXh0IG9uIHRoZSBhZmZlY3RlZCBsaW5lXG4gICAgICAgICAgICB0aGlzLl9zZXRMaW5lVGV4dChyYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxLCB0aGlzLl9saW5lc1tyYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxXS5zdWJzdHJpbmcoMCwgcmFuZ2Uuc3RhcnRDb2x1bW4gLSAxKVxuICAgICAgICAgICAgICAgICsgdGhpcy5fbGluZXNbcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKHJhbmdlLmVuZENvbHVtbiAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUYWtlIHJlbWFpbmluZyB0ZXh0IG9uIGxhc3QgbGluZSBhbmQgYXBwZW5kIGl0IHRvIHJlbWFpbmluZyB0ZXh0IG9uIGZpcnN0IGxpbmVcbiAgICAgICAgdGhpcy5fc2V0TGluZVRleHQocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIC0gMSwgdGhpcy5fbGluZXNbcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKDAsIHJhbmdlLnN0YXJ0Q29sdW1uIC0gMSlcbiAgICAgICAgICAgICsgdGhpcy5fbGluZXNbcmFuZ2UuZW5kTGluZU51bWJlciAtIDFdLnN1YnN0cmluZyhyYW5nZS5lbmRDb2x1bW4gLSAxKSk7XG4gICAgICAgIC8vIERlbGV0ZSBtaWRkbGUgbGluZXNcbiAgICAgICAgdGhpcy5fbGluZXMuc3BsaWNlKHJhbmdlLnN0YXJ0TGluZU51bWJlciwgcmFuZ2UuZW5kTGluZU51bWJlciAtIHJhbmdlLnN0YXJ0TGluZU51bWJlcik7XG4gICAgICAgIGlmICh0aGlzLl9saW5lU3RhcnRzKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgcHJlZml4IHN1bVxuICAgICAgICAgICAgdGhpcy5fbGluZVN0YXJ0cy5yZW1vdmVWYWx1ZXMocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLCByYW5nZS5lbmRMaW5lTnVtYmVyIC0gcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWlycm9yVGV4dE1vZGVsLnByb3RvdHlwZS5fYWNjZXB0SW5zZXJ0VGV4dCA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgaW5zZXJ0VGV4dCkge1xuICAgICAgICBpZiAoaW5zZXJ0VGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gaW5zZXJ0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluc2VydExpbmVzID0gaW5zZXJ0VGV4dC5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcbiAgICAgICAgaWYgKGluc2VydExpbmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gSW5zZXJ0aW5nIHRleHQgb24gb25lIGxpbmVcbiAgICAgICAgICAgIHRoaXMuX3NldExpbmVUZXh0KHBvc2l0aW9uLmxpbmVOdW1iZXIgLSAxLCB0aGlzLl9saW5lc1twb3NpdGlvbi5saW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKDAsIHBvc2l0aW9uLmNvbHVtbiAtIDEpXG4gICAgICAgICAgICAgICAgKyBpbnNlcnRMaW5lc1swXVxuICAgICAgICAgICAgICAgICsgdGhpcy5fbGluZXNbcG9zaXRpb24ubGluZU51bWJlciAtIDFdLnN1YnN0cmluZyhwb3NpdGlvbi5jb2x1bW4gLSAxKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIG92ZXJmbG93aW5nIHRleHQgZnJvbSBmaXJzdCBsaW5lIHRvIHRoZSBlbmQgb2YgdGV4dCB0byBpbnNlcnRcbiAgICAgICAgaW5zZXJ0TGluZXNbaW5zZXJ0TGluZXMubGVuZ3RoIC0gMV0gKz0gdGhpcy5fbGluZXNbcG9zaXRpb24ubGluZU51bWJlciAtIDFdLnN1YnN0cmluZyhwb3NpdGlvbi5jb2x1bW4gLSAxKTtcbiAgICAgICAgLy8gRGVsZXRlIG92ZXJmbG93aW5nIHRleHQgZnJvbSBmaXJzdCBsaW5lIGFuZCBpbnNlcnQgdGV4dCBvbiBmaXJzdCBsaW5lXG4gICAgICAgIHRoaXMuX3NldExpbmVUZXh0KHBvc2l0aW9uLmxpbmVOdW1iZXIgLSAxLCB0aGlzLl9saW5lc1twb3NpdGlvbi5saW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKDAsIHBvc2l0aW9uLmNvbHVtbiAtIDEpXG4gICAgICAgICAgICArIGluc2VydExpbmVzWzBdKTtcbiAgICAgICAgLy8gSW5zZXJ0IG5ldyBsaW5lcyAmIHN0b3JlIGxlbmd0aHNcbiAgICAgICAgdmFyIG5ld0xlbmd0aHMgPSBuZXcgVWludDMyQXJyYXkoaW5zZXJ0TGluZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgaW5zZXJ0TGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2xpbmVzLnNwbGljZShwb3NpdGlvbi5saW5lTnVtYmVyICsgaSAtIDEsIDAsIGluc2VydExpbmVzW2ldKTtcbiAgICAgICAgICAgIG5ld0xlbmd0aHNbaSAtIDFdID0gaW5zZXJ0TGluZXNbaV0ubGVuZ3RoICsgdGhpcy5fZW9sLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGluZVN0YXJ0cykge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHByZWZpeCBzdW1cbiAgICAgICAgICAgIHRoaXMuX2xpbmVTdGFydHMuaW5zZXJ0VmFsdWVzKHBvc2l0aW9uLmxpbmVOdW1iZXIsIG5ld0xlbmd0aHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWlycm9yVGV4dE1vZGVsO1xufSgpKTtcbmV4cG9ydCB7IE1pcnJvclRleHRNb2RlbCB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIFVTVUFMX1dPUkRfU0VQQVJBVE9SUyA9ICdgfiFAIyQlXiYqKCktPStbe119XFxcXHw7OlxcJ1wiLC48Pi8/Jztcbi8qKlxuICogQ3JlYXRlIGEgd29yZCBkZWZpbml0aW9uIHJlZ3VsYXIgZXhwcmVzc2lvbiBiYXNlZCBvbiBkZWZhdWx0IHdvcmQgc2VwYXJhdG9ycy5cbiAqIE9wdGlvbmFsbHkgcHJvdmlkZSBhbGxvd2VkIHNlcGFyYXRvcnMgdGhhdCBzaG91bGQgYmUgaW5jbHVkZWQgaW4gd29yZHMuXG4gKlxuICogVGhlIGRlZmF1bHQgd291bGQgbG9vayBsaWtlIHRoaXM6XG4gKiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcI1xcJFxcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2dcbiAqL1xuZnVuY3Rpb24gY3JlYXRlV29yZFJlZ0V4cChhbGxvd0luV29yZHMpIHtcbiAgICBpZiAoYWxsb3dJbldvcmRzID09PSB2b2lkIDApIHsgYWxsb3dJbldvcmRzID0gJyc7IH1cbiAgICB2YXIgc291cmNlID0gJygtP1xcXFxkKlxcXFwuXFxcXGRcXFxcdyopfChbXic7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBVU1VBTF9XT1JEX1NFUEFSQVRPUlNfMSA9IFVTVUFMX1dPUkRfU0VQQVJBVE9SUzsgX2kgPCBVU1VBTF9XT1JEX1NFUEFSQVRPUlNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHNlcCA9IFVTVUFMX1dPUkRfU0VQQVJBVE9SU18xW19pXTtcbiAgICAgICAgaWYgKGFsbG93SW5Xb3Jkcy5pbmRleE9mKHNlcCkgPj0gMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgc291cmNlICs9ICdcXFxcJyArIHNlcDtcbiAgICB9XG4gICAgc291cmNlICs9ICdcXFxcc10rKSc7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoc291cmNlLCAnZycpO1xufVxuLy8gY2F0Y2hlcyBudW1iZXJzIChpbmNsdWRpbmcgZmxvYXRpbmcgbnVtYmVycykgaW4gdGhlIGZpcnN0IGdyb3VwLCBhbmQgYWxwaGFudW0gaW4gdGhlIHNlY29uZFxuZXhwb3J0IHZhciBERUZBVUxUX1dPUkRfUkVHRVhQID0gY3JlYXRlV29yZFJlZ0V4cCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVZhbGlkV29yZERlZmluaXRpb24od29yZERlZmluaXRpb24pIHtcbiAgICB2YXIgcmVzdWx0ID0gREVGQVVMVF9XT1JEX1JFR0VYUDtcbiAgICBpZiAod29yZERlZmluaXRpb24gJiYgKHdvcmREZWZpbml0aW9uIGluc3RhbmNlb2YgUmVnRXhwKSkge1xuICAgICAgICBpZiAoIXdvcmREZWZpbml0aW9uLmdsb2JhbCkge1xuICAgICAgICAgICAgdmFyIGZsYWdzID0gJ2cnO1xuICAgICAgICAgICAgaWYgKHdvcmREZWZpbml0aW9uLmlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgICAgICBmbGFncyArPSAnaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod29yZERlZmluaXRpb24ubXVsdGlsaW5lKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MgKz0gJ20nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdvcmREZWZpbml0aW9uLnVuaWNvZGUpIHtcbiAgICAgICAgICAgICAgICBmbGFncyArPSAndSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgUmVnRXhwKHdvcmREZWZpbml0aW9uLnNvdXJjZSwgZmxhZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gd29yZERlZmluaXRpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldFdvcmRBdFBvc0Zhc3QoY29sdW1uLCB3b3JkRGVmaW5pdGlvbiwgdGV4dCwgdGV4dE9mZnNldCkge1xuICAgIC8vIGZpbmQgd2hpdGVzcGFjZSBlbmNsb3NlZCB0ZXh0IGFyb3VuZCBjb2x1bW4gYW5kIG1hdGNoIGZyb20gdGhlcmVcbiAgICB2YXIgcG9zID0gY29sdW1uIC0gMSAtIHRleHRPZmZzZXQ7XG4gICAgdmFyIHN0YXJ0ID0gdGV4dC5sYXN0SW5kZXhPZignICcsIHBvcyAtIDEpICsgMTtcbiAgICB3b3JkRGVmaW5pdGlvbi5sYXN0SW5kZXggPSBzdGFydDtcbiAgICB2YXIgbWF0Y2g7XG4gICAgd2hpbGUgKG1hdGNoID0gd29yZERlZmluaXRpb24uZXhlYyh0ZXh0KSkge1xuICAgICAgICB2YXIgbWF0Y2hJbmRleCA9IG1hdGNoLmluZGV4IHx8IDA7XG4gICAgICAgIGlmIChtYXRjaEluZGV4IDw9IHBvcyAmJiB3b3JkRGVmaW5pdGlvbi5sYXN0SW5kZXggPj0gcG9zKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdvcmQ6IG1hdGNoWzBdLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiB0ZXh0T2Zmc2V0ICsgMSArIG1hdGNoSW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kQ29sdW1uOiB0ZXh0T2Zmc2V0ICsgMSArIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldFdvcmRBdFBvc1Nsb3coY29sdW1uLCB3b3JkRGVmaW5pdGlvbiwgdGV4dCwgdGV4dE9mZnNldCkge1xuICAgIC8vIG1hdGNoZXMgYWxsIHdvcmRzIHN0YXJ0aW5nIGF0IHRoZSBiZWdpbm5pbmdcbiAgICAvLyBvZiB0aGUgaW5wdXQgdW50aWwgaXQgZmluZHMgYSBtYXRjaCB0aGF0IGVuY2xvc2VzXG4gICAgLy8gdGhlIGRlc2lyZWQgY29sdW1uLiBzbG93IGJ1dCBjb3JyZWN0XG4gICAgdmFyIHBvcyA9IGNvbHVtbiAtIDEgLSB0ZXh0T2Zmc2V0O1xuICAgIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG1hdGNoO1xuICAgIHdoaWxlIChtYXRjaCA9IHdvcmREZWZpbml0aW9uLmV4ZWModGV4dCkpIHtcbiAgICAgICAgdmFyIG1hdGNoSW5kZXggPSBtYXRjaC5pbmRleCB8fCAwO1xuICAgICAgICBpZiAobWF0Y2hJbmRleCA+IHBvcykge1xuICAgICAgICAgICAgLy8gfG5XIC0+IG1hdGNoZWQgb25seSBhZnRlciB0aGUgcG9zXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3b3JkRGVmaW5pdGlvbi5sYXN0SW5kZXggPj0gcG9zKSB7XG4gICAgICAgICAgICAvLyBXfFcgLT4gbWF0Y2ggZW5jbG9zZXMgcG9zXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdvcmQ6IG1hdGNoWzBdLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiB0ZXh0T2Zmc2V0ICsgMSArIG1hdGNoSW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kQ29sdW1uOiB0ZXh0T2Zmc2V0ICsgMSArIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JkQXRUZXh0KGNvbHVtbiwgd29yZERlZmluaXRpb24sIHRleHQsIHRleHRPZmZzZXQpIHtcbiAgICAvLyBpZiBgd29yZHNgIGNhbiBjb250YWluIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHdlIGhhdmUgdG8gdXNlIHRoZSBzbG93IHZhcmlhbnRcbiAgICAvLyBvdGhlcndpc2Ugd2UgdXNlIHRoZSBmYXN0IHZhcmlhbnQgb2YgZmluZGluZyBhIHdvcmRcbiAgICB3b3JkRGVmaW5pdGlvbi5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBtYXRjaCA9IHdvcmREZWZpbml0aW9uLmV4ZWModGV4dCk7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gdG9kb0Bqb2ggdGhlIGBtYXRjaGAgY291bGQgYWxyZWFkeSBiZSB0aGUgKGZpcnN0KSB3b3JkXG4gICAgdmFyIHJldCA9IG1hdGNoWzBdLmluZGV4T2YoJyAnKSA+PSAwXG4gICAgICAgIC8vIGRpZCBtYXRjaCBhIHdvcmQgd2hpY2ggY29udGFpbnMgYSBzcGFjZSBjaGFyYWN0ZXIgLT4gdXNlIHNsb3cgd29yZCBmaW5kXG4gICAgICAgID8gZ2V0V29yZEF0UG9zU2xvdyhjb2x1bW4sIHdvcmREZWZpbml0aW9uLCB0ZXh0LCB0ZXh0T2Zmc2V0KVxuICAgICAgICAvLyBzYW5lIHdvcmQgZGVmaW5pdGlvbiAtPiB1c2UgZmFzdCB3b3JkIGZpbmRcbiAgICAgICAgOiBnZXRXb3JkQXRQb3NGYXN0KGNvbHVtbiwgd29yZERlZmluaXRpb24sIHRleHQsIHRleHRPZmZzZXQpO1xuICAgIC8vIGJvdGggKGdldFdvcmRBdFBvc0Zhc3QgYW5kIGdldFdvcmRBdFBvc1Nsb3cpIGxlYXZlIHRoZSB3b3JkRGVmaW5pdGlvbi1SZWdFeHBcbiAgICAvLyBpbiBhbiB1bmRlZmluZWQgc3RhdGUgYW5kIHRvIG5vdCBjb25mdXNlIG90aGVyIHVzZXJzIG9mIHRoZSB3b3JkRGVmaW5pdGlvblxuICAgIC8vIHdlIHJlc2V0IHRoZSBsYXN0SW5kZXhcbiAgICB3b3JkRGVmaW5pdGlvbi5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiByZXQ7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IENoYXJhY3RlckNsYXNzaWZpZXIgfSBmcm9tICcuLi9jb3JlL2NoYXJhY3RlckNsYXNzaWZpZXIuanMnO1xuaW1wb3J0IHsgVWludDhNYXRyaXggfSBmcm9tICcuLi9jb3JlL3VpbnQuanMnO1xudmFyIFN0YXRlTWFjaGluZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGF0ZU1hY2hpbmUoZWRnZXMpIHtcbiAgICAgICAgdmFyIG1heENoYXJDb2RlID0gMDtcbiAgICAgICAgdmFyIG1heFN0YXRlID0gMCAvKiBJbnZhbGlkICovO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWRnZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGVkZ2VzW2ldLCBmcm9tID0gX2FbMF0sIGNoQ29kZSA9IF9hWzFdLCB0byA9IF9hWzJdO1xuICAgICAgICAgICAgaWYgKGNoQ29kZSA+IG1heENoYXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgbWF4Q2hhckNvZGUgPSBjaENvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnJvbSA+IG1heFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbWF4U3RhdGUgPSBmcm9tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvID4gbWF4U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBtYXhTdGF0ZSA9IHRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1heENoYXJDb2RlKys7XG4gICAgICAgIG1heFN0YXRlKys7XG4gICAgICAgIHZhciBzdGF0ZXMgPSBuZXcgVWludDhNYXRyaXgobWF4U3RhdGUsIG1heENoYXJDb2RlLCAwIC8qIEludmFsaWQgKi8pO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWRnZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBfYiA9IGVkZ2VzW2ldLCBmcm9tID0gX2JbMF0sIGNoQ29kZSA9IF9iWzFdLCB0byA9IF9iWzJdO1xuICAgICAgICAgICAgc3RhdGVzLnNldChmcm9tLCBjaENvZGUsIHRvKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZXMgPSBzdGF0ZXM7XG4gICAgICAgIHRoaXMuX21heENoYXJDb2RlID0gbWF4Q2hhckNvZGU7XG4gICAgfVxuICAgIFN0YXRlTWFjaGluZS5wcm90b3R5cGUubmV4dFN0YXRlID0gZnVuY3Rpb24gKGN1cnJlbnRTdGF0ZSwgY2hDb2RlKSB7XG4gICAgICAgIGlmIChjaENvZGUgPCAwIHx8IGNoQ29kZSA+PSB0aGlzLl9tYXhDaGFyQ29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIDAgLyogSW52YWxpZCAqLztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVzLmdldChjdXJyZW50U3RhdGUsIGNoQ29kZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RhdGVNYWNoaW5lO1xufSgpKTtcbmV4cG9ydCB7IFN0YXRlTWFjaGluZSB9O1xuLy8gU3RhdGUgbWFjaGluZSBmb3IgaHR0cDovLyBvciBodHRwczovLyBvciBmaWxlOi8vXG52YXIgX3N0YXRlTWFjaGluZSA9IG51bGw7XG5mdW5jdGlvbiBnZXRTdGF0ZU1hY2hpbmUoKSB7XG4gICAgaWYgKF9zdGF0ZU1hY2hpbmUgPT09IG51bGwpIHtcbiAgICAgICAgX3N0YXRlTWFjaGluZSA9IG5ldyBTdGF0ZU1hY2hpbmUoW1xuICAgICAgICAgICAgWzEgLyogU3RhcnQgKi8sIDEwNCAvKiBoICovLCAyIC8qIEggKi9dLFxuICAgICAgICAgICAgWzEgLyogU3RhcnQgKi8sIDcyIC8qIEggKi8sIDIgLyogSCAqL10sXG4gICAgICAgICAgICBbMSAvKiBTdGFydCAqLywgMTAyIC8qIGYgKi8sIDYgLyogRiAqL10sXG4gICAgICAgICAgICBbMSAvKiBTdGFydCAqLywgNzAgLyogRiAqLywgNiAvKiBGICovXSxcbiAgICAgICAgICAgIFsyIC8qIEggKi8sIDExNiAvKiB0ICovLCAzIC8qIEhUICovXSxcbiAgICAgICAgICAgIFsyIC8qIEggKi8sIDg0IC8qIFQgKi8sIDMgLyogSFQgKi9dLFxuICAgICAgICAgICAgWzMgLyogSFQgKi8sIDExNiAvKiB0ICovLCA0IC8qIEhUVCAqL10sXG4gICAgICAgICAgICBbMyAvKiBIVCAqLywgODQgLyogVCAqLywgNCAvKiBIVFQgKi9dLFxuICAgICAgICAgICAgWzQgLyogSFRUICovLCAxMTIgLyogcCAqLywgNSAvKiBIVFRQICovXSxcbiAgICAgICAgICAgIFs0IC8qIEhUVCAqLywgODAgLyogUCAqLywgNSAvKiBIVFRQICovXSxcbiAgICAgICAgICAgIFs1IC8qIEhUVFAgKi8sIDExNSAvKiBzICovLCA5IC8qIEJlZm9yZUNvbG9uICovXSxcbiAgICAgICAgICAgIFs1IC8qIEhUVFAgKi8sIDgzIC8qIFMgKi8sIDkgLyogQmVmb3JlQ29sb24gKi9dLFxuICAgICAgICAgICAgWzUgLyogSFRUUCAqLywgNTggLyogQ29sb24gKi8sIDEwIC8qIEFmdGVyQ29sb24gKi9dLFxuICAgICAgICAgICAgWzYgLyogRiAqLywgMTA1IC8qIGkgKi8sIDcgLyogRkkgKi9dLFxuICAgICAgICAgICAgWzYgLyogRiAqLywgNzMgLyogSSAqLywgNyAvKiBGSSAqL10sXG4gICAgICAgICAgICBbNyAvKiBGSSAqLywgMTA4IC8qIGwgKi8sIDggLyogRklMICovXSxcbiAgICAgICAgICAgIFs3IC8qIEZJICovLCA3NiAvKiBMICovLCA4IC8qIEZJTCAqL10sXG4gICAgICAgICAgICBbOCAvKiBGSUwgKi8sIDEwMSAvKiBlICovLCA5IC8qIEJlZm9yZUNvbG9uICovXSxcbiAgICAgICAgICAgIFs4IC8qIEZJTCAqLywgNjkgLyogRSAqLywgOSAvKiBCZWZvcmVDb2xvbiAqL10sXG4gICAgICAgICAgICBbOSAvKiBCZWZvcmVDb2xvbiAqLywgNTggLyogQ29sb24gKi8sIDEwIC8qIEFmdGVyQ29sb24gKi9dLFxuICAgICAgICAgICAgWzEwIC8qIEFmdGVyQ29sb24gKi8sIDQ3IC8qIFNsYXNoICovLCAxMSAvKiBBbG1vc3RUaGVyZSAqL10sXG4gICAgICAgICAgICBbMTEgLyogQWxtb3N0VGhlcmUgKi8sIDQ3IC8qIFNsYXNoICovLCAxMiAvKiBFbmQgKi9dLFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIF9zdGF0ZU1hY2hpbmU7XG59XG52YXIgX2NsYXNzaWZpZXIgPSBudWxsO1xuZnVuY3Rpb24gZ2V0Q2xhc3NpZmllcigpIHtcbiAgICBpZiAoX2NsYXNzaWZpZXIgPT09IG51bGwpIHtcbiAgICAgICAgX2NsYXNzaWZpZXIgPSBuZXcgQ2hhcmFjdGVyQ2xhc3NpZmllcigwIC8qIE5vbmUgKi8pO1xuICAgICAgICB2YXIgRk9SQ0VfVEVSTUlOQVRJT05fQ0hBUkFDVEVSUyA9ICcgXFx0PD5cXCdcXFwi44CB44CC772h772k77yM77yO77ya77yb77yf77yB77yg77yD77yE77yF77yG77yK4oCY4oCc44CI44CK44CM44CO44CQ44CU77yI77y7772b772i772j772d77y977yJ44CV44CR44CP44CN44CL44CJ4oCd4oCZ772A772e4oCmJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBGT1JDRV9URVJNSU5BVElPTl9DSEFSQUNURVJTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfY2xhc3NpZmllci5zZXQoRk9SQ0VfVEVSTUlOQVRJT05fQ0hBUkFDVEVSUy5jaGFyQ29kZUF0KGkpLCAxIC8qIEZvcmNlVGVybWluYXRpb24gKi8pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBDQU5OT1RfRU5EX1dJVEhfQ0hBUkFDVEVSUyA9ICcuLDsnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENBTk5PVF9FTkRfV0lUSF9DSEFSQUNURVJTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfY2xhc3NpZmllci5zZXQoQ0FOTk9UX0VORF9XSVRIX0NIQVJBQ1RFUlMuY2hhckNvZGVBdChpKSwgMiAvKiBDYW5ub3RFbmRJbiAqLyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2lmaWVyO1xufVxudmFyIExpbmtDb21wdXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMaW5rQ29tcHV0ZXIoKSB7XG4gICAgfVxuICAgIExpbmtDb21wdXRlci5fY3JlYXRlTGluayA9IGZ1bmN0aW9uIChjbGFzc2lmaWVyLCBsaW5lLCBsaW5lTnVtYmVyLCBsaW5rQmVnaW5JbmRleCwgbGlua0VuZEluZGV4KSB7XG4gICAgICAgIC8vIERvIG5vdCBhbGxvdyB0byBlbmQgbGluayBpbiBjZXJ0YWluIGNoYXJhY3RlcnMuLi5cbiAgICAgICAgdmFyIGxhc3RJbmNsdWRlZENoYXJJbmRleCA9IGxpbmtFbmRJbmRleCAtIDE7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHZhciBjaENvZGUgPSBsaW5lLmNoYXJDb2RlQXQobGFzdEluY2x1ZGVkQ2hhckluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaENsYXNzID0gY2xhc3NpZmllci5nZXQoY2hDb2RlKTtcbiAgICAgICAgICAgIGlmIChjaENsYXNzICE9PSAyIC8qIENhbm5vdEVuZEluICovKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0SW5jbHVkZWRDaGFySW5kZXgtLTtcbiAgICAgICAgfSB3aGlsZSAobGFzdEluY2x1ZGVkQ2hhckluZGV4ID4gbGlua0JlZ2luSW5kZXgpO1xuICAgICAgICAvLyBIYW5kbGUgbGlua3MgZW5jbG9zZWQgaW4gcGFyZW5zLCBzcXVhcmUgYnJhY2tldHMgYW5kIGN1cmx5cy5cbiAgICAgICAgaWYgKGxpbmtCZWdpbkluZGV4ID4gMCkge1xuICAgICAgICAgICAgdmFyIGNoYXJDb2RlQmVmb3JlTGluayA9IGxpbmUuY2hhckNvZGVBdChsaW5rQmVnaW5JbmRleCAtIDEpO1xuICAgICAgICAgICAgdmFyIGxhc3RDaGFyQ29kZUluTGluayA9IGxpbmUuY2hhckNvZGVBdChsYXN0SW5jbHVkZWRDaGFySW5kZXgpO1xuICAgICAgICAgICAgaWYgKChjaGFyQ29kZUJlZm9yZUxpbmsgPT09IDQwIC8qIE9wZW5QYXJlbiAqLyAmJiBsYXN0Q2hhckNvZGVJbkxpbmsgPT09IDQxIC8qIENsb3NlUGFyZW4gKi8pXG4gICAgICAgICAgICAgICAgfHwgKGNoYXJDb2RlQmVmb3JlTGluayA9PT0gOTEgLyogT3BlblNxdWFyZUJyYWNrZXQgKi8gJiYgbGFzdENoYXJDb2RlSW5MaW5rID09PSA5MyAvKiBDbG9zZVNxdWFyZUJyYWNrZXQgKi8pXG4gICAgICAgICAgICAgICAgfHwgKGNoYXJDb2RlQmVmb3JlTGluayA9PT0gMTIzIC8qIE9wZW5DdXJseUJyYWNlICovICYmIGxhc3RDaGFyQ29kZUluTGluayA9PT0gMTI1IC8qIENsb3NlQ3VybHlCcmFjZSAqLykpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgZW5kIGluICkgaWYgKCBpcyBiZWZvcmUgdGhlIGxpbmsgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgZW5kIGluIF0gaWYgWyBpcyBiZWZvcmUgdGhlIGxpbmsgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgZW5kIGluIH0gaWYgeyBpcyBiZWZvcmUgdGhlIGxpbmsgc3RhcnRcbiAgICAgICAgICAgICAgICBsYXN0SW5jbHVkZWRDaGFySW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICAgICBzdGFydExpbmVOdW1iZXI6IGxpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgc3RhcnRDb2x1bW46IGxpbmtCZWdpbkluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICBlbmRMaW5lTnVtYmVyOiBsaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIGVuZENvbHVtbjogbGFzdEluY2x1ZGVkQ2hhckluZGV4ICsgMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogbGluZS5zdWJzdHJpbmcobGlua0JlZ2luSW5kZXgsIGxhc3RJbmNsdWRlZENoYXJJbmRleCArIDEpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBMaW5rQ29tcHV0ZXIuY29tcHV0ZUxpbmtzID0gZnVuY3Rpb24gKG1vZGVsLCBzdGF0ZU1hY2hpbmUpIHtcbiAgICAgICAgaWYgKHN0YXRlTWFjaGluZSA9PT0gdm9pZCAwKSB7IHN0YXRlTWFjaGluZSA9IGdldFN0YXRlTWFjaGluZSgpOyB9XG4gICAgICAgIHZhciBjbGFzc2lmaWVyID0gZ2V0Q2xhc3NpZmllcigpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBsaW5lQ291bnQgPSBtb2RlbC5nZXRMaW5lQ291bnQoKTsgaSA8PSBsaW5lQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSBtb2RlbC5nZXRMaW5lQ29udGVudChpKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaW5lLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgICAgIHZhciBsaW5rQmVnaW5JbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgbGlua0JlZ2luQ2hDb2RlID0gMDtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IDEgLyogU3RhcnQgKi87XG4gICAgICAgICAgICB2YXIgaGFzT3BlblBhcmVucyA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGhhc09wZW5TcXVhcmVCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaGFzT3BlbkN1cmx5QnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBsZW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzZXRTdGF0ZU1hY2hpbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgY2hDb2RlID0gbGluZS5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMTMgLyogQWNjZXB0ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaENsYXNzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MCAvKiBPcGVuUGFyZW4gKi86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3BlblBhcmVucyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hDbGFzcyA9IDAgLyogTm9uZSAqLztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDEgLyogQ2xvc2VQYXJlbiAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gKGhhc09wZW5QYXJlbnMgPyAwIC8qIE5vbmUgKi8gOiAxIC8qIEZvcmNlVGVybWluYXRpb24gKi8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5MSAvKiBPcGVuU3F1YXJlQnJhY2tldCAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNPcGVuU3F1YXJlQnJhY2tldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hDbGFzcyA9IDAgLyogTm9uZSAqLztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTMgLyogQ2xvc2VTcXVhcmVCcmFja2V0ICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSAoaGFzT3BlblNxdWFyZUJyYWNrZXQgPyAwIC8qIE5vbmUgKi8gOiAxIC8qIEZvcmNlVGVybWluYXRpb24gKi8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjMgLyogT3BlbkN1cmx5QnJhY2UgKi86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3BlbkN1cmx5QnJhY2tldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hDbGFzcyA9IDAgLyogTm9uZSAqLztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI1IC8qIENsb3NlQ3VybHlCcmFjZSAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gKGhhc09wZW5DdXJseUJyYWNrZXQgPyAwIC8qIE5vbmUgKi8gOiAxIC8qIEZvcmNlVGVybWluYXRpb24gKi8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogVGhlIGZvbGxvd2luZyB0aHJlZSBydWxlcyBtYWtlIGl0IHRoYXQgJyBvciBcIiBvciBgIGFyZSBhbGxvd2VkIGluc2lkZSBsaW5rcyBpZiB0aGUgbGluayBiZWdhbiB3aXRoIGEgZGlmZmVyZW50IG9uZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOSAvKiBTaW5nbGVRdW90ZSAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gKGxpbmtCZWdpbkNoQ29kZSA9PT0gMzQgLyogRG91YmxlUXVvdGUgKi8gfHwgbGlua0JlZ2luQ2hDb2RlID09PSA5NiAvKiBCYWNrVGljayAqLykgPyAwIC8qIE5vbmUgKi8gOiAxIC8qIEZvcmNlVGVybWluYXRpb24gKi87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM0IC8qIERvdWJsZVF1b3RlICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSAobGlua0JlZ2luQ2hDb2RlID09PSAzOSAvKiBTaW5nbGVRdW90ZSAqLyB8fCBsaW5rQmVnaW5DaENvZGUgPT09IDk2IC8qIEJhY2tUaWNrICovKSA/IDAgLyogTm9uZSAqLyA6IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTYgLyogQmFja1RpY2sgKi86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hDbGFzcyA9IChsaW5rQmVnaW5DaENvZGUgPT09IDM5IC8qIFNpbmdsZVF1b3RlICovIHx8IGxpbmtCZWdpbkNoQ29kZSA9PT0gMzQgLyogRG91YmxlUXVvdGUgKi8pID8gMCAvKiBOb25lICovIDogMSAvKiBGb3JjZVRlcm1pbmF0aW9uICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gY2xhc3NpZmllci5nZXQoY2hDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBjaGFyYWN0ZXIgdGVybWluYXRlcyBsaW5rXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaENsYXNzID09PSAxIC8qIEZvcmNlVGVybWluYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKExpbmtDb21wdXRlci5fY3JlYXRlTGluayhjbGFzc2lmaWVyLCBsaW5lLCBpLCBsaW5rQmVnaW5JbmRleCwgaikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRTdGF0ZU1hY2hpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAxMiAvKiBFbmQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoQ2xhc3MgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaENvZGUgPT09IDkxIC8qIE9wZW5TcXVhcmVCcmFja2V0ICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyBmb3IgdGhlIGF1dGhvcml0eSBwYXJ0IHRvIGNvbnRhaW4gaXB2NiBhZGRyZXNzZXMgd2hpY2ggY29udGFpbiBbIGFuZCBdXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNPcGVuU3F1YXJlQnJhY2tldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gMCAvKiBOb25lICovO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hDbGFzcyA9IGNsYXNzaWZpZXIuZ2V0KGNoQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY2hhcmFjdGVyIHRlcm1pbmF0ZXMgbGlua1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hDbGFzcyA9PT0gMSAvKiBGb3JjZVRlcm1pbmF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldFN0YXRlTWFjaGluZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDEzIC8qIEFjY2VwdCAqLztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZU1hY2hpbmUubmV4dFN0YXRlKHN0YXRlLCBjaENvZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IDAgLyogSW52YWxpZCAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRTdGF0ZU1hY2hpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNldFN0YXRlTWFjaGluZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDEgLyogU3RhcnQgKi87XG4gICAgICAgICAgICAgICAgICAgIGhhc09wZW5QYXJlbnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaGFzT3BlblNxdWFyZUJyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaGFzT3BlbkN1cmx5QnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZWNvcmQgd2hlcmUgdGhlIGxpbmsgc3RhcnRlZFxuICAgICAgICAgICAgICAgICAgICBsaW5rQmVnaW5JbmRleCA9IGogKyAxO1xuICAgICAgICAgICAgICAgICAgICBsaW5rQmVnaW5DaENvZGUgPSBjaENvZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMTMgLyogQWNjZXB0ICovKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goTGlua0NvbXB1dGVyLl9jcmVhdGVMaW5rKGNsYXNzaWZpZXIsIGxpbmUsIGksIGxpbmtCZWdpbkluZGV4LCBsZW4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIExpbmtDb21wdXRlcjtcbn0oKSk7XG5leHBvcnQgeyBMaW5rQ29tcHV0ZXIgfTtcbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgbGlua3MgY29udGFpbnMgaW4gdGhlIHByb3ZpZGVkXG4gKiBkb2N1bWVudC4gKk5vdGUqIHRoYXQgdGhpcyBvcGVyYXRpb24gaXMgY29tcHV0YXRpb25hbFxuICogZXhwZW5zaXZlIGFuZCBzaG91bGQgbm90IHJ1biBpbiB0aGUgVUkgdGhyZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUxpbmtzKG1vZGVsKSB7XG4gICAgaWYgKCFtb2RlbCB8fCB0eXBlb2YgbW9kZWwuZ2V0TGluZUNvdW50ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBtb2RlbC5nZXRMaW5lQ29udGVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVbmtub3duIGNhbGxlciFcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gTGlua0NvbXB1dGVyLmNvbXB1dGVMaW5rcyhtb2RlbCk7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBCYXNpY0lucGxhY2VSZXBsYWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJhc2ljSW5wbGFjZVJlcGxhY2UoKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRWYWx1ZVNldCA9IFtcbiAgICAgICAgICAgIFsndHJ1ZScsICdmYWxzZSddLFxuICAgICAgICAgICAgWydUcnVlJywgJ0ZhbHNlJ10sXG4gICAgICAgICAgICBbJ1ByaXZhdGUnLCAnUHVibGljJywgJ0ZyaWVuZCcsICdSZWFkT25seScsICdQYXJ0aWFsJywgJ1Byb3RlY3RlZCcsICdXcml0ZU9ubHknXSxcbiAgICAgICAgICAgIFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ10sXG4gICAgICAgIF07XG4gICAgfVxuICAgIEJhc2ljSW5wbGFjZVJlcGxhY2UucHJvdG90eXBlLm5hdmlnYXRlVmFsdWVTZXQgPSBmdW5jdGlvbiAocmFuZ2UxLCB0ZXh0MSwgcmFuZ2UyLCB0ZXh0MiwgdXApIHtcbiAgICAgICAgaWYgKHJhbmdlMSAmJiB0ZXh0MSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZG9OYXZpZ2F0ZVZhbHVlU2V0KHRleHQxLCB1cCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlMSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmdlMiAmJiB0ZXh0Mikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZG9OYXZpZ2F0ZVZhbHVlU2V0KHRleHQyLCB1cCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlMixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBCYXNpY0lucGxhY2VSZXBsYWNlLnByb3RvdHlwZS5kb05hdmlnYXRlVmFsdWVTZXQgPSBmdW5jdGlvbiAodGV4dCwgdXApIHtcbiAgICAgICAgdmFyIG51bWJlclJlc3VsdCA9IHRoaXMubnVtYmVyUmVwbGFjZSh0ZXh0LCB1cCk7XG4gICAgICAgIGlmIChudW1iZXJSZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFJlcGxhY2UodGV4dCwgdXApO1xuICAgIH07XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5wcm90b3R5cGUubnVtYmVyUmVwbGFjZSA9IGZ1bmN0aW9uICh2YWx1ZSwgdXApIHtcbiAgICAgICAgdmFyIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCB2YWx1ZS5sZW5ndGggLSAodmFsdWUubGFzdEluZGV4T2YoJy4nKSArIDEpKTtcbiAgICAgICAgdmFyIG4xID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgdmFyIG4yID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4objEpICYmICFpc05hTihuMikgJiYgbjEgPT09IG4yKSB7XG4gICAgICAgICAgICBpZiAobjEgPT09IDAgJiYgIXVwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIGRvbid0IGRvIG5lZ2F0aXZlXG4gICAgICAgICAgICAgICAgLy9cdFx0XHR9IGVsc2UgaWYobjEgPT09IDkgJiYgdXApIHtcbiAgICAgICAgICAgICAgICAvL1x0XHRcdFx0cmV0dXJuIG51bGw7IC8vIGRvbid0IGluc2VydCAxMCBpbnRvIGEgbnVtYmVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuMSA9IE1hdGguZmxvb3IobjEgKiBwcmVjaXNpb24pO1xuICAgICAgICAgICAgICAgIG4xICs9IHVwID8gcHJlY2lzaW9uIDogLXByZWNpc2lvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKG4xIC8gcHJlY2lzaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEJhc2ljSW5wbGFjZVJlcGxhY2UucHJvdG90eXBlLnRleHRSZXBsYWNlID0gZnVuY3Rpb24gKHZhbHVlLCB1cCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVNldHNSZXBsYWNlKHRoaXMuX2RlZmF1bHRWYWx1ZVNldCwgdmFsdWUsIHVwKTtcbiAgICB9O1xuICAgIEJhc2ljSW5wbGFjZVJlcGxhY2UucHJvdG90eXBlLnZhbHVlU2V0c1JlcGxhY2UgPSBmdW5jdGlvbiAodmFsdWVTZXRzLCB2YWx1ZSwgdXApIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZVNldHMubGVuZ3RoOyByZXN1bHQgPT09IG51bGwgJiYgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnZhbHVlU2V0UmVwbGFjZSh2YWx1ZVNldHNbaV0sIHZhbHVlLCB1cCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIEJhc2ljSW5wbGFjZVJlcGxhY2UucHJvdG90eXBlLnZhbHVlU2V0UmVwbGFjZSA9IGZ1bmN0aW9uICh2YWx1ZVNldCwgdmFsdWUsIHVwKSB7XG4gICAgICAgIHZhciBpZHggPSB2YWx1ZVNldC5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICBpZHggKz0gdXAgPyArMSA6IC0xO1xuICAgICAgICAgICAgaWYgKGlkeCA8IDApIHtcbiAgICAgICAgICAgICAgICBpZHggPSB2YWx1ZVNldC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWR4ICU9IHZhbHVlU2V0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVNldFtpZHhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5JTlNUQU5DRSA9IG5ldyBCYXNpY0lucGxhY2VSZXBsYWNlKCk7XG4gICAgcmV0dXJuIEJhc2ljSW5wbGFjZVJlcGxhY2U7XG59KCkpO1xuZXhwb3J0IHsgQmFzaWNJbnBsYWNlUmVwbGFjZSB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IG1lcmdlU29ydCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL2FycmF5cy5qcyc7XG5pbXBvcnQgeyBzdHJpbmdEaWZmIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jb21tb24vZGlmZi9kaWZmLmpzJztcbmltcG9ydCB7IEZJTiB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL2l0ZXJhdG9yLmpzJztcbmltcG9ydCB7IGdsb2JhbHMgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi9wbGF0Zm9ybS5qcyc7XG5pbXBvcnQgeyBVUkkgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi91cmkuanMnO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9jb3JlL3Bvc2l0aW9uLmpzJztcbmltcG9ydCB7IFJhbmdlIH0gZnJvbSAnLi4vY29yZS9yYW5nZS5qcyc7XG5pbXBvcnQgeyBEaWZmQ29tcHV0ZXIgfSBmcm9tICcuLi9kaWZmL2RpZmZDb21wdXRlci5qcyc7XG5pbXBvcnQgeyBNaXJyb3JUZXh0TW9kZWwgYXMgQmFzZU1pcnJvck1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvbWlycm9yVGV4dE1vZGVsLmpzJztcbmltcG9ydCB7IGVuc3VyZVZhbGlkV29yZERlZmluaXRpb24sIGdldFdvcmRBdFRleHQgfSBmcm9tICcuLi9tb2RlbC93b3JkSGVscGVyLmpzJztcbmltcG9ydCB7IGNvbXB1dGVMaW5rcyB9IGZyb20gJy4uL21vZGVzL2xpbmtDb21wdXRlci5qcyc7XG5pbXBvcnQgeyBCYXNpY0lucGxhY2VSZXBsYWNlIH0gZnJvbSAnLi4vbW9kZXMvc3VwcG9ydHMvaW5wbGFjZVJlcGxhY2VTdXBwb3J0LmpzJztcbmltcG9ydCB7IGNyZWF0ZU1vbmFjb0Jhc2VBUEkgfSBmcm9tICcuLi9zdGFuZGFsb25lL3N0YW5kYWxvbmVCYXNlLmpzJztcbmltcG9ydCB7IGdldEFsbFByb3BlcnR5TmFtZXMgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi90eXBlcy5qcyc7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgTWlycm9yTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1pcnJvck1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1pcnJvck1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNaXJyb3JNb2RlbC5wcm90b3R5cGUsIFwidXJpXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWlycm9yTW9kZWwucHJvdG90eXBlLCBcInZlcnNpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZXJzaW9uSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNaXJyb3JNb2RlbC5wcm90b3R5cGUsIFwiZW9sXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW9sO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRleHQoKTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5nZXRMaW5lc0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lcy5zbGljZSgwKTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5nZXRMaW5lQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lcy5sZW5ndGg7XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuZ2V0TGluZUNvbnRlbnQgPSBmdW5jdGlvbiAobGluZU51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGluZXNbbGluZU51bWJlciAtIDFdO1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLmdldFdvcmRBdFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB3b3JkRGVmaW5pdGlvbikge1xuICAgICAgICB2YXIgd29yZEF0VGV4dCA9IGdldFdvcmRBdFRleHQocG9zaXRpb24uY29sdW1uLCBlbnN1cmVWYWxpZFdvcmREZWZpbml0aW9uKHdvcmREZWZpbml0aW9uKSwgdGhpcy5fbGluZXNbcG9zaXRpb24ubGluZU51bWJlciAtIDFdLCAwKTtcbiAgICAgICAgaWYgKHdvcmRBdFRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmFuZ2UocG9zaXRpb24ubGluZU51bWJlciwgd29yZEF0VGV4dC5zdGFydENvbHVtbiwgcG9zaXRpb24ubGluZU51bWJlciwgd29yZEF0VGV4dC5lbmRDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLmdldFdvcmRVbnRpbFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB3b3JkRGVmaW5pdGlvbikge1xuICAgICAgICB2YXIgd29yZEF0UG9zaXRpb24gPSB0aGlzLmdldFdvcmRBdFBvc2l0aW9uKHBvc2l0aW9uLCB3b3JkRGVmaW5pdGlvbik7XG4gICAgICAgIGlmICghd29yZEF0UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd29yZDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRDb2x1bW46IHBvc2l0aW9uLmNvbHVtbixcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHBvc2l0aW9uLmNvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd29yZDogdGhpcy5fbGluZXNbcG9zaXRpb24ubGluZU51bWJlciAtIDFdLnN1YnN0cmluZyh3b3JkQXRQb3NpdGlvbi5zdGFydENvbHVtbiAtIDEsIHBvc2l0aW9uLmNvbHVtbiAtIDEpLFxuICAgICAgICAgICAgc3RhcnRDb2x1bW46IHdvcmRBdFBvc2l0aW9uLnN0YXJ0Q29sdW1uLFxuICAgICAgICAgICAgZW5kQ29sdW1uOiBwb3NpdGlvbi5jb2x1bW5cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5jcmVhdGVXb3JkSXRlcmF0b3IgPSBmdW5jdGlvbiAod29yZERlZmluaXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9iajtcbiAgICAgICAgdmFyIGxpbmVOdW1iZXIgPSAwO1xuICAgICAgICB2YXIgbGluZVRleHQ7XG4gICAgICAgIHZhciB3b3JkUmFuZ2VzSWR4ID0gMDtcbiAgICAgICAgdmFyIHdvcmRSYW5nZXMgPSBbXTtcbiAgICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAod29yZFJhbmdlc0lkeCA8IHdvcmRSYW5nZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbGluZVRleHQuc3Vic3RyaW5nKHdvcmRSYW5nZXNbd29yZFJhbmdlc0lkeF0uc3RhcnQsIHdvcmRSYW5nZXNbd29yZFJhbmdlc0lkeF0uZW5kKTtcbiAgICAgICAgICAgICAgICB3b3JkUmFuZ2VzSWR4ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IHZhbHVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmoudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxpbmVOdW1iZXIgPj0gX3RoaXMuX2xpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBGSU47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaW5lVGV4dCA9IF90aGlzLl9saW5lc1tsaW5lTnVtYmVyXTtcbiAgICAgICAgICAgICAgICB3b3JkUmFuZ2VzID0gX3RoaXMuX3dvcmRlbml6ZShsaW5lVGV4dCwgd29yZERlZmluaXRpb24pO1xuICAgICAgICAgICAgICAgIHdvcmRSYW5nZXNJZHggPSAwO1xuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBuZXh0OiBuZXh0IH07XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuZ2V0TGluZVdvcmRzID0gZnVuY3Rpb24gKGxpbmVOdW1iZXIsIHdvcmREZWZpbml0aW9uKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5fbGluZXNbbGluZU51bWJlciAtIDFdO1xuICAgICAgICB2YXIgcmFuZ2VzID0gdGhpcy5fd29yZGVuaXplKGNvbnRlbnQsIHdvcmREZWZpbml0aW9uKTtcbiAgICAgICAgdmFyIHdvcmRzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcmFuZ2VzXzEgPSByYW5nZXM7IF9pIDwgcmFuZ2VzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSByYW5nZXNfMVtfaV07XG4gICAgICAgICAgICB3b3Jkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB3b3JkOiBjb250ZW50LnN1YnN0cmluZyhyYW5nZS5zdGFydCwgcmFuZ2UuZW5kKSxcbiAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogcmFuZ2Uuc3RhcnQgKyAxLFxuICAgICAgICAgICAgICAgIGVuZENvbHVtbjogcmFuZ2UuZW5kICsgMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmRzO1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLl93b3JkZW5pemUgPSBmdW5jdGlvbiAoY29udGVudCwgd29yZERlZmluaXRpb24pIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgbWF0Y2g7XG4gICAgICAgIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA9IDA7IC8vIHJlc2V0IGxhc3RJbmRleCBqdXN0IHRvIGJlIHN1cmVcbiAgICAgICAgd2hpbGUgKG1hdGNoID0gd29yZERlZmluaXRpb24uZXhlYyhjb250ZW50KSkge1xuICAgICAgICAgICAgaWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGl0IGRpZCBtYXRjaCB0aGUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IHN0YXJ0OiBtYXRjaC5pbmRleCwgZW5kOiBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLmdldFZhbHVlSW5SYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICByYW5nZSA9IHRoaXMuX3ZhbGlkYXRlUmFuZ2UocmFuZ2UpO1xuICAgICAgICBpZiAocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyID09PSByYW5nZS5lbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGluZXNbcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0Q29sdW1uIC0gMSwgcmFuZ2UuZW5kQ29sdW1uIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxpbmVFbmRpbmcgPSB0aGlzLl9lb2w7XG4gICAgICAgIHZhciBzdGFydExpbmVJbmRleCA9IHJhbmdlLnN0YXJ0TGluZU51bWJlciAtIDE7XG4gICAgICAgIHZhciBlbmRMaW5lSW5kZXggPSByYW5nZS5lbmRMaW5lTnVtYmVyIC0gMTtcbiAgICAgICAgdmFyIHJlc3VsdExpbmVzID0gW107XG4gICAgICAgIHJlc3VsdExpbmVzLnB1c2godGhpcy5fbGluZXNbc3RhcnRMaW5lSW5kZXhdLnN1YnN0cmluZyhyYW5nZS5zdGFydENvbHVtbiAtIDEpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0TGluZUluZGV4ICsgMTsgaSA8IGVuZExpbmVJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRMaW5lcy5wdXNoKHRoaXMuX2xpbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRMaW5lcy5wdXNoKHRoaXMuX2xpbmVzW2VuZExpbmVJbmRleF0uc3Vic3RyaW5nKDAsIHJhbmdlLmVuZENvbHVtbiAtIDEpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdExpbmVzLmpvaW4obGluZUVuZGluZyk7XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUub2Zmc2V0QXQgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLl92YWxpZGF0ZVBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5fZW5zdXJlTGluZVN0YXJ0cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbGluZVN0YXJ0cy5nZXRBY2N1bXVsYXRlZFZhbHVlKHBvc2l0aW9uLmxpbmVOdW1iZXIgLSAyKSArIChwb3NpdGlvbi5jb2x1bW4gLSAxKTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5wb3NpdGlvbkF0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSBNYXRoLmZsb29yKG9mZnNldCk7XG4gICAgICAgIG9mZnNldCA9IE1hdGgubWF4KDAsIG9mZnNldCk7XG4gICAgICAgIHRoaXMuX2Vuc3VyZUxpbmVTdGFydHMoKTtcbiAgICAgICAgdmFyIG91dCA9IHRoaXMuX2xpbmVTdGFydHMuZ2V0SW5kZXhPZihvZmZzZXQpO1xuICAgICAgICB2YXIgbGluZUxlbmd0aCA9IHRoaXMuX2xpbmVzW291dC5pbmRleF0ubGVuZ3RoO1xuICAgICAgICAvLyBFbnN1cmUgd2UgcmV0dXJuIGEgdmFsaWQgcG9zaXRpb25cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEgKyBvdXQuaW5kZXgsXG4gICAgICAgICAgICBjb2x1bW46IDEgKyBNYXRoLm1pbihvdXQucmVtYWluZGVyLCBsaW5lTGVuZ3RoKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLl92YWxpZGF0ZVJhbmdlID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuX3ZhbGlkYXRlUG9zaXRpb24oeyBsaW5lTnVtYmVyOiByYW5nZS5zdGFydExpbmVOdW1iZXIsIGNvbHVtbjogcmFuZ2Uuc3RhcnRDb2x1bW4gfSk7XG4gICAgICAgIHZhciBlbmQgPSB0aGlzLl92YWxpZGF0ZVBvc2l0aW9uKHsgbGluZU51bWJlcjogcmFuZ2UuZW5kTGluZU51bWJlciwgY29sdW1uOiByYW5nZS5lbmRDb2x1bW4gfSk7XG4gICAgICAgIGlmIChzdGFydC5saW5lTnVtYmVyICE9PSByYW5nZS5zdGFydExpbmVOdW1iZXJcbiAgICAgICAgICAgIHx8IHN0YXJ0LmNvbHVtbiAhPT0gcmFuZ2Uuc3RhcnRDb2x1bW5cbiAgICAgICAgICAgIHx8IGVuZC5saW5lTnVtYmVyICE9PSByYW5nZS5lbmRMaW5lTnVtYmVyXG4gICAgICAgICAgICB8fCBlbmQuY29sdW1uICE9PSByYW5nZS5lbmRDb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyOiBzdGFydC5saW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiBzdGFydC5jb2x1bW4sXG4gICAgICAgICAgICAgICAgZW5kTGluZU51bWJlcjogZW5kLmxpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgZW5kQ29sdW1uOiBlbmQuY29sdW1uXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYW5nZTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5fdmFsaWRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICBpZiAoIVBvc2l0aW9uLmlzSVBvc2l0aW9uKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgcG9zaXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGluZU51bWJlciA9IHBvc2l0aW9uLmxpbmVOdW1iZXIsIGNvbHVtbiA9IHBvc2l0aW9uLmNvbHVtbjtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpbmVOdW1iZXIgPCAxKSB7XG4gICAgICAgICAgICBsaW5lTnVtYmVyID0gMTtcbiAgICAgICAgICAgIGNvbHVtbiA9IDE7XG4gICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsaW5lTnVtYmVyID4gdGhpcy5fbGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsaW5lTnVtYmVyID0gdGhpcy5fbGluZXMubGVuZ3RoO1xuICAgICAgICAgICAgY29sdW1uID0gdGhpcy5fbGluZXNbbGluZU51bWJlciAtIDFdLmxlbmd0aCArIDE7XG4gICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXhDaGFyYWN0ZXIgPSB0aGlzLl9saW5lc1tsaW5lTnVtYmVyIC0gMV0ubGVuZ3RoICsgMTtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPCAxKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gMTtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbiA+IG1heENoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IG1heENoYXJhY3RlcjtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IGxpbmVOdW1iZXI6IGxpbmVOdW1iZXIsIGNvbHVtbjogY29sdW1uIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNaXJyb3JNb2RlbDtcbn0oQmFzZU1pcnJvck1vZGVsKSk7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgQmFzZUVkaXRvclNpbXBsZVdvcmtlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYXNlRWRpdG9yU2ltcGxlV29ya2VyKGZvcmVpZ25Nb2R1bGVGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX2ZvcmVpZ25Nb2R1bGVGYWN0b3J5ID0gZm9yZWlnbk1vZHVsZUZhY3Rvcnk7XG4gICAgICAgIHRoaXMuX2ZvcmVpZ25Nb2R1bGUgPSBudWxsO1xuICAgIH1cbiAgICAvLyAtLS0tIEJFR0lOIGRpZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBCYXNlRWRpdG9yU2ltcGxlV29ya2VyLnByb3RvdHlwZS5jb21wdXRlRGlmZiA9IGZ1bmN0aW9uIChvcmlnaW5hbFVybCwgbW9kaWZpZWRVcmwsIGlnbm9yZVRyaW1XaGl0ZXNwYWNlKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbCA9IHRoaXMuX2dldE1vZGVsKG9yaWdpbmFsVXJsKTtcbiAgICAgICAgdmFyIG1vZGlmaWVkID0gdGhpcy5fZ2V0TW9kZWwobW9kaWZpZWRVcmwpO1xuICAgICAgICBpZiAoIW9yaWdpbmFsIHx8ICFtb2RpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3JpZ2luYWxMaW5lcyA9IG9yaWdpbmFsLmdldExpbmVzQ29udGVudCgpO1xuICAgICAgICB2YXIgbW9kaWZpZWRMaW5lcyA9IG1vZGlmaWVkLmdldExpbmVzQ29udGVudCgpO1xuICAgICAgICB2YXIgZGlmZkNvbXB1dGVyID0gbmV3IERpZmZDb21wdXRlcihvcmlnaW5hbExpbmVzLCBtb2RpZmllZExpbmVzLCB7XG4gICAgICAgICAgICBzaG91bGRDb21wdXRlQ2hhckNoYW5nZXM6IHRydWUsXG4gICAgICAgICAgICBzaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzOiB0cnVlLFxuICAgICAgICAgICAgc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2U6IGlnbm9yZVRyaW1XaGl0ZXNwYWNlLFxuICAgICAgICAgICAgc2hvdWxkTWFrZVByZXR0eURpZmY6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjaGFuZ2VzID0gZGlmZkNvbXB1dGVyLmNvbXB1dGVEaWZmKCk7XG4gICAgICAgIHZhciBpZGVudGljYWwgPSAoY2hhbmdlcy5sZW5ndGggPiAwID8gZmFsc2UgOiB0aGlzLl9tb2RlbHNBcmVJZGVudGljYWwob3JpZ2luYWwsIG1vZGlmaWVkKSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgaWRlbnRpY2FsOiBpZGVudGljYWwsXG4gICAgICAgICAgICBjaGFuZ2VzOiBjaGFuZ2VzXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQmFzZUVkaXRvclNpbXBsZVdvcmtlci5wcm90b3R5cGUuX21vZGVsc0FyZUlkZW50aWNhbCA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbW9kaWZpZWQpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsTGluZUNvdW50ID0gb3JpZ2luYWwuZ2V0TGluZUNvdW50KCk7XG4gICAgICAgIHZhciBtb2RpZmllZExpbmVDb3VudCA9IG1vZGlmaWVkLmdldExpbmVDb3VudCgpO1xuICAgICAgICBpZiAob3JpZ2luYWxMaW5lQ291bnQgIT09IG1vZGlmaWVkTGluZUNvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbGluZSA9IDE7IGxpbmUgPD0gb3JpZ2luYWxMaW5lQ291bnQ7IGxpbmUrKykge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsTGluZSA9IG9yaWdpbmFsLmdldExpbmVDb250ZW50KGxpbmUpO1xuICAgICAgICAgICAgdmFyIG1vZGlmaWVkTGluZSA9IG1vZGlmaWVkLmdldExpbmVDb250ZW50KGxpbmUpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsTGluZSAhPT0gbW9kaWZpZWRMaW5lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgQmFzZUVkaXRvclNpbXBsZVdvcmtlci5wcm90b3R5cGUuY29tcHV0ZU1vcmVNaW5pbWFsRWRpdHMgPSBmdW5jdGlvbiAobW9kZWxVcmwsIGVkaXRzKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuX2dldE1vZGVsKG1vZGVsVXJsKTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlZGl0cyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgbGFzdEVvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZWRpdHMgPSBtZXJnZVNvcnQoZWRpdHMsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYS5yYW5nZSAmJiBiLnJhbmdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJhbmdlLmNvbXBhcmVSYW5nZXNVc2luZ1N0YXJ0cyhhLnJhbmdlLCBiLnJhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVvbCBvbmx5IGNoYW5nZXMgc2hvdWxkIGdvIHRvIHRoZSBlbmRcbiAgICAgICAgICAgIHZhciBhUm5nID0gYS5yYW5nZSA/IDAgOiAxO1xuICAgICAgICAgICAgdmFyIGJSbmcgPSBiLnJhbmdlID8gMCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gYVJuZyAtIGJSbmc7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGVkaXRzXzEgPSBlZGl0czsgX2kgPCBlZGl0c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIF9hID0gZWRpdHNfMVtfaV0sIHJhbmdlID0gX2EucmFuZ2UsIHRleHQgPSBfYS50ZXh0LCBlb2wgPSBfYS5lb2w7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVvbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBsYXN0RW9sID0gZW9sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFJhbmdlLmlzRW1wdHkocmFuZ2UpICYmICF0ZXh0KSB7XG4gICAgICAgICAgICAgICAgLy8gZW1wdHkgY2hhbmdlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWwgPSBtb2RlbC5nZXRWYWx1ZUluUmFuZ2UocmFuZ2UpO1xuICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxyXFxufFxcbnxcXHIvZywgbW9kZWwuZW9sKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbCA9PT0gdGV4dCkge1xuICAgICAgICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBkaWZmIHdvbid0IHRha2UgdG9vIGxvbmdcbiAgICAgICAgICAgIGlmIChNYXRoLm1heCh0ZXh0Lmxlbmd0aCwgb3JpZ2luYWwubGVuZ3RoKSA+IEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIuX2RpZmZMaW1pdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgcmFuZ2U6IHJhbmdlLCB0ZXh0OiB0ZXh0IH0pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29tcHV0ZSBkaWZmIGJldHdlZW4gb3JpZ2luYWwgYW5kIGVkaXQudGV4dFxuICAgICAgICAgICAgdmFyIGNoYW5nZXMgPSBzdHJpbmdEaWZmKG9yaWdpbmFsLCB0ZXh0LCBmYWxzZSk7XG4gICAgICAgICAgICB2YXIgZWRpdE9mZnNldCA9IG1vZGVsLm9mZnNldEF0KFJhbmdlLmxpZnQocmFuZ2UpLmdldFN0YXJ0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIGNoYW5nZXNfMSA9IGNoYW5nZXM7IF9iIDwgY2hhbmdlc18xLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzXzFbX2JdO1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IG1vZGVsLnBvc2l0aW9uQXQoZWRpdE9mZnNldCArIGNoYW5nZS5vcmlnaW5hbFN0YXJ0KTtcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gbW9kZWwucG9zaXRpb25BdChlZGl0T2Zmc2V0ICsgY2hhbmdlLm9yaWdpbmFsU3RhcnQgKyBjaGFuZ2Uub3JpZ2luYWxMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdFZGl0ID0ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LnN1YnN0cihjaGFuZ2UubW9kaWZpZWRTdGFydCwgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHsgc3RhcnRMaW5lTnVtYmVyOiBzdGFydC5saW5lTnVtYmVyLCBzdGFydENvbHVtbjogc3RhcnQuY29sdW1uLCBlbmRMaW5lTnVtYmVyOiBlbmQubGluZU51bWJlciwgZW5kQ29sdW1uOiBlbmQuY29sdW1uIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbC5nZXRWYWx1ZUluUmFuZ2UobmV3RWRpdC5yYW5nZSkgIT09IG5ld0VkaXQudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXdFZGl0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsYXN0RW9sID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBlb2w6IGxhc3RFb2wsIHRleHQ6ICcnLCByYW5nZTogeyBzdGFydExpbmVOdW1iZXI6IDAsIHN0YXJ0Q29sdW1uOiAwLCBlbmRMaW5lTnVtYmVyOiAwLCBlbmRDb2x1bW46IDAgfSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfTtcbiAgICAvLyAtLS0tIEVORCBtaW5pbWFsIGVkaXRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmNvbXB1dGVMaW5rcyA9IGZ1bmN0aW9uIChtb2RlbFVybCkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLl9nZXRNb2RlbChtb2RlbFVybCk7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb21wdXRlTGlua3MobW9kZWwpKTtcbiAgICB9O1xuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLnRleHR1YWxTdWdnZXN0ID0gZnVuY3Rpb24gKG1vZGVsVXJsLCBwb3NpdGlvbiwgd29yZERlZiwgd29yZERlZkZsYWdzKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuX2dldE1vZGVsKG1vZGVsVXJsKTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VlbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBzdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgd29yZERlZlJlZ0V4cCA9IG5ldyBSZWdFeHAod29yZERlZiwgd29yZERlZkZsYWdzKTtcbiAgICAgICAgdmFyIHdvcmRVbnRpbCA9IG1vZGVsLmdldFdvcmRVbnRpbFBvc2l0aW9uKHBvc2l0aW9uLCB3b3JkRGVmUmVnRXhwKTtcbiAgICAgICAgdmFyIHdvcmRBdCA9IG1vZGVsLmdldFdvcmRBdFBvc2l0aW9uKHBvc2l0aW9uLCB3b3JkRGVmUmVnRXhwKTtcbiAgICAgICAgaWYgKHdvcmRBdCkge1xuICAgICAgICAgICAgc2Vlblttb2RlbC5nZXRWYWx1ZUluUmFuZ2Uod29yZEF0KV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGl0ZXIgPSBtb2RlbC5jcmVhdGVXb3JkSXRlcmF0b3Iod29yZERlZlJlZ0V4cCksIGUgPSBpdGVyLm5leHQoKTsgIWUuZG9uZSAmJiBzdWdnZXN0aW9ucy5sZW5ndGggPD0gQmFzZUVkaXRvclNpbXBsZVdvcmtlci5fc3VnZ2VzdGlvbnNMaW1pdDsgZSA9IGl0ZXIubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgd29yZCA9IGUudmFsdWU7XG4gICAgICAgICAgICBpZiAoc2Vlblt3b3JkXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2Vlblt3b3JkXSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih3b3JkKSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIGtpbmQ6IDE4IC8qIFRleHQgKi8sXG4gICAgICAgICAgICAgICAgbGFiZWw6IHdvcmQsXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogd29yZCxcbiAgICAgICAgICAgICAgICByYW5nZTogeyBzdGFydExpbmVOdW1iZXI6IHBvc2l0aW9uLmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uOiB3b3JkVW50aWwuc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXI6IHBvc2l0aW9uLmxpbmVOdW1iZXIsIGVuZENvbHVtbjogd29yZFVudGlsLmVuZENvbHVtbiB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgc3VnZ2VzdGlvbnM6IHN1Z2dlc3Rpb25zIH0pO1xuICAgIH07XG4gICAgLy8gLS0tLSBFTkQgc3VnZ2VzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vI3JlZ2lvbiAtLSB3b3JkIHJhbmdlcyAtLVxuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmNvbXB1dGVXb3JkUmFuZ2VzID0gZnVuY3Rpb24gKG1vZGVsVXJsLCByYW5nZSwgd29yZERlZiwgd29yZERlZkZsYWdzKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuX2dldE1vZGVsKG1vZGVsVXJsKTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd29yZERlZlJlZ0V4cCA9IG5ldyBSZWdFeHAod29yZERlZiwgd29yZERlZkZsYWdzKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGZvciAodmFyIGxpbmUgPSByYW5nZS5zdGFydExpbmVOdW1iZXI7IGxpbmUgPCByYW5nZS5lbmRMaW5lTnVtYmVyOyBsaW5lKyspIHtcbiAgICAgICAgICAgIHZhciB3b3JkcyA9IG1vZGVsLmdldExpbmVXb3JkcyhsaW5lLCB3b3JkRGVmUmVnRXhwKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgd29yZHNfMSA9IHdvcmRzOyBfaSA8IHdvcmRzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdvcmQgPSB3b3Jkc18xW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih3b3JkLndvcmQpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFycmF5ID0gcmVzdWx0W3dvcmQud29yZF07XG4gICAgICAgICAgICAgICAgaWYgKCFhcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbd29yZC53b3JkXSA9IGFycmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyOiBsaW5lLFxuICAgICAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogd29yZC5zdGFydENvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgZW5kTGluZU51bWJlcjogbGluZSxcbiAgICAgICAgICAgICAgICAgICAgZW5kQ29sdW1uOiB3b3JkLmVuZENvbHVtblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9O1xuICAgIC8vI2VuZHJlZ2lvblxuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLm5hdmlnYXRlVmFsdWVTZXQgPSBmdW5jdGlvbiAobW9kZWxVcmwsIHJhbmdlLCB1cCwgd29yZERlZiwgd29yZERlZkZsYWdzKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuX2dldE1vZGVsKG1vZGVsVXJsKTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd29yZERlZlJlZ0V4cCA9IG5ldyBSZWdFeHAod29yZERlZiwgd29yZERlZkZsYWdzKTtcbiAgICAgICAgaWYgKHJhbmdlLnN0YXJ0Q29sdW1uID09PSByYW5nZS5lbmRDb2x1bW4pIHtcbiAgICAgICAgICAgIHJhbmdlID0ge1xuICAgICAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlcjogcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiByYW5nZS5zdGFydENvbHVtbixcbiAgICAgICAgICAgICAgICBlbmRMaW5lTnVtYmVyOiByYW5nZS5lbmRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIGVuZENvbHVtbjogcmFuZ2UuZW5kQ29sdW1uICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZWN0aW9uVGV4dCA9IG1vZGVsLmdldFZhbHVlSW5SYW5nZShyYW5nZSk7XG4gICAgICAgIHZhciB3b3JkUmFuZ2UgPSBtb2RlbC5nZXRXb3JkQXRQb3NpdGlvbih7IGxpbmVOdW1iZXI6IHJhbmdlLnN0YXJ0TGluZU51bWJlciwgY29sdW1uOiByYW5nZS5zdGFydENvbHVtbiB9LCB3b3JkRGVmUmVnRXhwKTtcbiAgICAgICAgaWYgKCF3b3JkUmFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdvcmQgPSBtb2RlbC5nZXRWYWx1ZUluUmFuZ2Uod29yZFJhbmdlKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IEJhc2ljSW5wbGFjZVJlcGxhY2UuSU5TVEFOQ0UubmF2aWdhdGVWYWx1ZVNldChyYW5nZSwgc2VsZWN0aW9uVGV4dCwgd29yZFJhbmdlLCB3b3JkLCB1cCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9O1xuICAgIC8vIC0tLS0gQkVHSU4gZm9yZWlnbiBtb2R1bGUgc3VwcG9ydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmxvYWRGb3JlaWduTW9kdWxlID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBjcmVhdGVEYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjdHggPSB7XG4gICAgICAgICAgICBnZXRNaXJyb3JNb2RlbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX2dldE1vZGVscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fZm9yZWlnbk1vZHVsZUZhY3RvcnkpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmVpZ25Nb2R1bGUgPSB0aGlzLl9mb3JlaWduTW9kdWxlRmFjdG9yeShjdHgsIGNyZWF0ZURhdGEpO1xuICAgICAgICAgICAgLy8gc3RhdGljIGZvcmVpbmcgbW9kdWxlXG4gICAgICAgICAgICB2YXIgbWV0aG9kcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGdldEFsbFByb3BlcnR5TmFtZXModGhpcy5fZm9yZWlnbk1vZHVsZSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9mb3JlaWduTW9kdWxlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1ldGhvZHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVTTS1jb21tZW50LWJlZ2luXG4gICAgICAgIC8vIFx0XHRyZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIFx0XHRcdHJlcXVpcmUoW21vZHVsZUlkXSwgKGZvcmVpZ25Nb2R1bGU6IHsgY3JlYXRlOiBJRm9yZWlnbk1vZHVsZUZhY3RvcnkgfSkgPT4ge1xuICAgICAgICAvLyBcdFx0XHRcdHRoaXMuX2ZvcmVpZ25Nb2R1bGUgPSBmb3JlaWduTW9kdWxlLmNyZWF0ZShjdHgsIGNyZWF0ZURhdGEpO1xuICAgICAgICAvLyBcbiAgICAgICAgLy8gXHRcdFx0XHRsZXQgbWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgLy8gXHRcdFx0XHRmb3IgKGNvbnN0IHByb3Agb2YgZ2V0QWxsUHJvcGVydHlOYW1lcyh0aGlzLl9mb3JlaWduTW9kdWxlKSkge1xuICAgICAgICAvLyBcdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLl9mb3JlaWduTW9kdWxlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFx0XHRcdFx0XHRcdG1ldGhvZHMucHVzaChwcm9wKTtcbiAgICAgICAgLy8gXHRcdFx0XHRcdH1cbiAgICAgICAgLy8gXHRcdFx0XHR9XG4gICAgICAgIC8vIFxuICAgICAgICAvLyBcdFx0XHRcdHJlc29sdmUobWV0aG9kcyk7XG4gICAgICAgIC8vIFxuICAgICAgICAvLyBcdFx0XHR9LCByZWplY3QpO1xuICAgICAgICAvLyBcdFx0fSk7XG4gICAgICAgIC8vIEVTTS1jb21tZW50LWVuZFxuICAgICAgICAvLyBFU00tdW5jb21tZW50LWJlZ2luXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHVzYWdlXCIpKTtcbiAgICAgICAgLy8gRVNNLXVuY29tbWVudC1lbmRcbiAgICB9O1xuICAgIC8vIGZvcmVpZ24gbWV0aG9kIHJlcXVlc3RcbiAgICBCYXNlRWRpdG9yU2ltcGxlV29ya2VyLnByb3RvdHlwZS5mbXIgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5fZm9yZWlnbk1vZHVsZSB8fCB0eXBlb2YgdGhpcy5fZm9yZWlnbk1vZHVsZVttZXRob2RdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdNaXNzaW5nIHJlcXVlc3RIYW5kbGVyIG9yIG1ldGhvZDogJyArIG1ldGhvZCkpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2ZvcmVpZ25Nb2R1bGVbbWV0aG9kXS5hcHBseSh0aGlzLl9mb3JlaWduTW9kdWxlLCBhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gLS0tLSBFTkQgZGlmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIC0tLS0gQkVHSU4gbWluaW1hbCBlZGl0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBCYXNlRWRpdG9yU2ltcGxlV29ya2VyLl9kaWZmTGltaXQgPSAxMDAwMDA7XG4gICAgLy8gLS0tLSBCRUdJTiBzdWdnZXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQmFzZUVkaXRvclNpbXBsZVdvcmtlci5fc3VnZ2VzdGlvbnNMaW1pdCA9IDEwMDAwO1xuICAgIHJldHVybiBCYXNlRWRpdG9yU2ltcGxlV29ya2VyO1xufSgpKTtcbmV4cG9ydCB7IEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIgfTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cbnZhciBFZGl0b3JTaW1wbGVXb3JrZXJJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFZGl0b3JTaW1wbGVXb3JrZXJJbXBsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVkaXRvclNpbXBsZVdvcmtlckltcGwoZm9yZWlnbk1vZHVsZUZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZm9yZWlnbk1vZHVsZUZhY3RvcnkpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9tb2RlbHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEVkaXRvclNpbXBsZVdvcmtlckltcGwucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX21vZGVscyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfTtcbiAgICBFZGl0b3JTaW1wbGVXb3JrZXJJbXBsLnByb3RvdHlwZS5fZ2V0TW9kZWwgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlbHNbdXJpXTtcbiAgICB9O1xuICAgIEVkaXRvclNpbXBsZVdvcmtlckltcGwucHJvdG90eXBlLl9nZXRNb2RlbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhbGwgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fbW9kZWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGFsbC5wdXNoKF90aGlzLl9tb2RlbHNba2V5XSk7IH0pO1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH07XG4gICAgRWRpdG9yU2ltcGxlV29ya2VySW1wbC5wcm90b3R5cGUuYWNjZXB0TmV3TW9kZWwgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLl9tb2RlbHNbZGF0YS51cmxdID0gbmV3IE1pcnJvck1vZGVsKFVSSS5wYXJzZShkYXRhLnVybCksIGRhdGEubGluZXMsIGRhdGEuRU9MLCBkYXRhLnZlcnNpb25JZCk7XG4gICAgfTtcbiAgICBFZGl0b3JTaW1wbGVXb3JrZXJJbXBsLnByb3RvdHlwZS5hY2NlcHRNb2RlbENoYW5nZWQgPSBmdW5jdGlvbiAoc3RyVVJMLCBlKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW9kZWxzW3N0clVSTF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLl9tb2RlbHNbc3RyVVJMXTtcbiAgICAgICAgbW9kZWwub25FdmVudHMoZSk7XG4gICAgfTtcbiAgICBFZGl0b3JTaW1wbGVXb3JrZXJJbXBsLnByb3RvdHlwZS5hY2NlcHRSZW1vdmVkTW9kZWwgPSBmdW5jdGlvbiAoc3RyVVJMKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW9kZWxzW3N0clVSTF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW3N0clVSTF07XG4gICAgfTtcbiAgICByZXR1cm4gRWRpdG9yU2ltcGxlV29ya2VySW1wbDtcbn0oQmFzZUVkaXRvclNpbXBsZVdvcmtlcikpO1xuZXhwb3J0IHsgRWRpdG9yU2ltcGxlV29ya2VySW1wbCB9O1xuLyoqXG4gKiBDYWxsZWQgb24gdGhlIHdvcmtlciBzaWRlXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IEVkaXRvclNpbXBsZVdvcmtlckltcGwobnVsbCk7XG59XG5pZiAodHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBSdW5uaW5nIGluIGEgd2ViIHdvcmtlclxuICAgIGdsb2JhbHMubW9uYWNvID0gY3JlYXRlTW9uYWNvQmFzZUFQSSgpO1xufVxuIiwiLyohXG5Db3B5cmlnaHQgKGMpIDIwMTQgVGF5bG9yIEhha2VzXG5Db3B5cmlnaHQgKGMpIDIwMTQgRm9yYmVzIExpbmRlc2F5XG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG5cdFx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0XHRcdChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIEB0aGlzIHtQcm9taXNlfVxuXHQgKi9cblx0ZnVuY3Rpb24gZmluYWxseUNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0ZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdFx0XHRyZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gY29uc3RydWN0b3IucmVqZWN0KHJlYXNvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBwcm9taXNlLXBvbHlmaWxsIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuXHQvLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcblx0dmFyIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dDtcblxuXHRmdW5jdGlvbiBub29wKCkgeyB9XG5cblx0Ly8gUG9seWZpbGwgZm9yIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5cdGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0Zm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuXHQgKi9cblx0ZnVuY3Rpb24gUHJvbWlzZShmbikge1xuXHRcdGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSlcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuXHRcdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0LyoqIEB0eXBlIHshbnVtYmVyfSAqL1xuXHRcdHRoaXMuX3N0YXRlID0gMDtcblx0XHQvKiogQHR5cGUgeyFib29sZWFufSAqL1xuXHRcdHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcblx0XHQvKiogQHR5cGUge1Byb21pc2V8dW5kZWZpbmVkfSAqL1xuXHRcdHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdC8qKiBAdHlwZSB7IUFycmF5PCFGdW5jdGlvbj59ICovXG5cdFx0dGhpcy5fZGVmZXJyZWRzID0gW107XG5cblx0XHRkb1Jlc29sdmUoZm4sIHRoaXMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlKHNlbGYsIGRlZmVycmVkKSB7XG5cdFx0d2hpbGUgKHNlbGYuX3N0YXRlID09PSAzKSB7XG5cdFx0XHRzZWxmID0gc2VsZi5fdmFsdWU7XG5cdFx0fVxuXHRcdGlmIChzZWxmLl9zdGF0ZSA9PT0gMCkge1xuXHRcdFx0c2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcblx0XHRQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgY2IgPSBzZWxmLl9zdGF0ZSA9PT0gMSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcblx0XHRcdGlmIChjYiA9PT0gbnVsbCkge1xuXHRcdFx0XHQoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciByZXQ7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXQgPSBjYihzZWxmLl92YWx1ZSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCByZXQpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuXHRcdFx0aWYgKG5ld1ZhbHVlID09PSBzZWxmKVxuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdWYWx1ZSAmJlxuXHRcdFx0XHQodHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpXG5cdFx0XHQpIHtcblx0XHRcdFx0dmFyIHRoZW4gPSBuZXdWYWx1ZS50aGVuO1xuXHRcdFx0XHRpZiAobmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0XHRcdFx0c2VsZi5fc3RhdGUgPSAzO1xuXHRcdFx0XHRcdHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG5cdFx0XHRcdFx0ZmluYWxlKHNlbGYpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGRvUmVzb2x2ZShiaW5kKHRoZW4sIG5ld1ZhbHVlKSwgc2VsZik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZWxmLl9zdGF0ZSA9IDE7XG5cdFx0XHRzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdFx0ZmluYWxlKHNlbGYpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJlamVjdChzZWxmLCBlKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByZWplY3Qoc2VsZiwgbmV3VmFsdWUpIHtcblx0XHRzZWxmLl9zdGF0ZSA9IDI7XG5cdFx0c2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcblx0XHRmaW5hbGUoc2VsZik7XG5cdH1cblxuXHRmdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuXHRcdGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICghc2VsZi5faGFuZGxlZCkge1xuXHRcdFx0XHRcdFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aGFuZGxlKHNlbGYsIHNlbGYuX2RlZmVycmVkc1tpXSk7XG5cdFx0fVxuXHRcdHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRmdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG5cdFx0dGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcblx0XHR0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuXHRcdHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG5cdH1cblxuXHQvKipcblx0ICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcblx0ICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG5cdCAqXG5cdCAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cblx0ICovXG5cdGZ1bmN0aW9uIGRvUmVzb2x2ZShmbiwgc2VsZikge1xuXHRcdHZhciBkb25lID0gZmFsc2U7XG5cdFx0dHJ5IHtcblx0XHRcdGZuKFxuXHRcdFx0XHRmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRcdHJlc29sdmUoc2VsZiwgdmFsdWUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0XHRyZWplY3Qoc2VsZiwgcmVhc29uKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0cmVqZWN0KHNlbGYsIGV4KTtcblx0XHR9XG5cdH1cblxuXHRQcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcblx0fTtcblxuXHRQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHZhciBwcm9tID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cblx0XHRoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb20pKTtcblx0XHRyZXR1cm4gcHJvbTtcblx0fTtcblxuXHRQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddID0gZmluYWxseUNvbnN0cnVjdG9yO1xuXG5cdFByb21pc2UuYWxsID0gZnVuY3Rpb24gKGFycikge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRpZiAoIWFyciB8fCB0eXBlb2YgYXJyLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXknKTtcblx0XHRcdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcblx0XHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuXHRcdFx0dmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG5cdFx0XHRmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0XHRcdHZhciB0aGVuID0gdmFsLnRoZW47XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0dGhlbi5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdHZhbCxcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXMoaSwgdmFsKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHJlamVjdFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFyZ3NbaV0gPSB2YWw7XG5cdFx0XHRcdFx0aWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGFyZ3MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXgpIHtcblx0XHRcdFx0XHRyZWplY3QoZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRyZXMoaSwgYXJnc1tpXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0UHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRcdHJlc29sdmUodmFsdWUpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHJlamVjdCh2YWx1ZSk7XG5cdFx0fSk7XG5cdH07XG5cblx0UHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKHZhbHVlcykge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlc1tpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gVXNlIHBvbHlmaWxsIGZvciBzZXRJbW1lZGlhdGUgZm9yIHBlcmZvcm1hbmNlIGdhaW5zXG5cdFByb21pc2UuX2ltbWVkaWF0ZUZuID1cblx0XHQodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0ZnVuY3Rpb24gKGZuKSB7XG5cdFx0XHRcdHNldEltbWVkaWF0ZShmbik7XG5cdFx0XHR9KSB8fFxuXHRcdGZ1bmN0aW9uIChmbikge1xuXHRcdFx0c2V0VGltZW91dEZ1bmMoZm4sIDApO1xuXHRcdH07XG5cblx0UHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4gPSBmdW5jdGlvbiBfdW5oYW5kbGVkUmVqZWN0aW9uRm4oZXJyKSB7XG5cdFx0aWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0XHR9XG5cdH07XG5cblx0LyoqIEBzdXBwcmVzcyB7dW5kZWZpbmVkVmFyc30gKi9cblx0dmFyIGdsb2JhbE5TID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcblx0XHQvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcblx0XHQvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cblx0XHRpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gc2VsZjtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93O1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBnbG9iYWw7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG5cdH0pKCk7XG5cblx0aWYgKCEoJ1Byb21pc2UnIGluIGdsb2JhbE5TKSkge1xuXHRcdGdsb2JhbE5TWydQcm9taXNlJ10gPSBQcm9taXNlO1xuXHR9IGVsc2UgaWYgKCFnbG9iYWxOUy5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XG5cdFx0Z2xvYmFsTlMuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IGZpbmFsbHlDb25zdHJ1Y3Rvcjtcblx0fVxuXG59KSkpO1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgJy4vcHJvbWlzZS1wb2x5ZmlsbC9wb2x5ZmlsbC5qcyc7XG5pbXBvcnQgeyBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL2NhbmNlbGxhdGlvbi5qcyc7XG5pbXBvcnQgeyBFbWl0dGVyIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jb21tb24vZXZlbnQuanMnO1xuaW1wb3J0IHsgS2V5Q2hvcmQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi9rZXlDb2Rlcy5qcyc7XG5pbXBvcnQgeyBVUkkgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi91cmkuanMnO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9jb3JlL3Bvc2l0aW9uLmpzJztcbmltcG9ydCB7IFJhbmdlIH0gZnJvbSAnLi4vY29yZS9yYW5nZS5qcyc7XG5pbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tICcuLi9jb3JlL3NlbGVjdGlvbi5qcyc7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4uL2NvcmUvdG9rZW4uanMnO1xuaW1wb3J0ICogYXMgc3RhbmRhbG9uZUVudW1zIGZyb20gJy4vc3RhbmRhbG9uZUVudW1zLmpzJztcbnZhciBLZXlNb2QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2V5TW9kKCkge1xuICAgIH1cbiAgICBLZXlNb2QuY2hvcmQgPSBmdW5jdGlvbiAoZmlyc3RQYXJ0LCBzZWNvbmRQYXJ0KSB7XG4gICAgICAgIHJldHVybiBLZXlDaG9yZChmaXJzdFBhcnQsIHNlY29uZFBhcnQpO1xuICAgIH07XG4gICAgS2V5TW9kLkN0cmxDbWQgPSAyMDQ4IC8qIEN0cmxDbWQgKi87XG4gICAgS2V5TW9kLlNoaWZ0ID0gMTAyNCAvKiBTaGlmdCAqLztcbiAgICBLZXlNb2QuQWx0ID0gNTEyIC8qIEFsdCAqLztcbiAgICBLZXlNb2QuV2luQ3RybCA9IDI1NiAvKiBXaW5DdHJsICovO1xuICAgIHJldHVybiBLZXlNb2Q7XG59KCkpO1xuZXhwb3J0IHsgS2V5TW9kIH07XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9uYWNvQmFzZUFQSSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlZGl0b3I6IHVuZGVmaW5lZCxcbiAgICAgICAgbGFuZ3VhZ2VzOiB1bmRlZmluZWQsXG4gICAgICAgIENhbmNlbGxhdGlvblRva2VuU291cmNlOiBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZSxcbiAgICAgICAgRW1pdHRlcjogRW1pdHRlcixcbiAgICAgICAgS2V5Q29kZTogc3RhbmRhbG9uZUVudW1zLktleUNvZGUsXG4gICAgICAgIEtleU1vZDogS2V5TW9kLFxuICAgICAgICBQb3NpdGlvbjogUG9zaXRpb24sXG4gICAgICAgIFJhbmdlOiBSYW5nZSxcbiAgICAgICAgU2VsZWN0aW9uOiBTZWxlY3Rpb24sXG4gICAgICAgIFNlbGVjdGlvbkRpcmVjdGlvbjogc3RhbmRhbG9uZUVudW1zLlNlbGVjdGlvbkRpcmVjdGlvbixcbiAgICAgICAgTWFya2VyU2V2ZXJpdHk6IHN0YW5kYWxvbmVFbnVtcy5NYXJrZXJTZXZlcml0eSxcbiAgICAgICAgTWFya2VyVGFnOiBzdGFuZGFsb25lRW51bXMuTWFya2VyVGFnLFxuICAgICAgICBVcmk6IFVSSSxcbiAgICAgICAgVG9rZW46IFRva2VuXG4gICAgfTtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFLiBETyBOT1QgRURJVCBESVJFQ1RMWS5cbmV4cG9ydCB2YXIgTWFya2VyVGFnO1xuKGZ1bmN0aW9uIChNYXJrZXJUYWcpIHtcbiAgICBNYXJrZXJUYWdbTWFya2VyVGFnW1wiVW5uZWNlc3NhcnlcIl0gPSAxXSA9IFwiVW5uZWNlc3NhcnlcIjtcbn0pKE1hcmtlclRhZyB8fCAoTWFya2VyVGFnID0ge30pKTtcbmV4cG9ydCB2YXIgTWFya2VyU2V2ZXJpdHk7XG4oZnVuY3Rpb24gKE1hcmtlclNldmVyaXR5KSB7XG4gICAgTWFya2VyU2V2ZXJpdHlbTWFya2VyU2V2ZXJpdHlbXCJIaW50XCJdID0gMV0gPSBcIkhpbnRcIjtcbiAgICBNYXJrZXJTZXZlcml0eVtNYXJrZXJTZXZlcml0eVtcIkluZm9cIl0gPSAyXSA9IFwiSW5mb1wiO1xuICAgIE1hcmtlclNldmVyaXR5W01hcmtlclNldmVyaXR5W1wiV2FybmluZ1wiXSA9IDRdID0gXCJXYXJuaW5nXCI7XG4gICAgTWFya2VyU2V2ZXJpdHlbTWFya2VyU2V2ZXJpdHlbXCJFcnJvclwiXSA9IDhdID0gXCJFcnJvclwiO1xufSkoTWFya2VyU2V2ZXJpdHkgfHwgKE1hcmtlclNldmVyaXR5ID0ge30pKTtcbi8qKlxuICogVmlydHVhbCBLZXkgQ29kZXMsIHRoZSB2YWx1ZSBkb2VzIG5vdCBob2xkIGFueSBpbmhlcmVudCBtZWFuaW5nLlxuICogSW5zcGlyZWQgc29tZXdoYXQgZnJvbSBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L3dpbmRvd3MvZGVza3RvcC9kZDM3NTczMSh2PXZzLjg1KS5hc3B4XG4gKiBCdXQgdGhlc2UgYXJlIFwibW9yZSBnZW5lcmFsXCIsIGFzIHRoZXkgc2hvdWxkIHdvcmsgYWNyb3NzIGJyb3dzZXJzICYgT1Ngcy5cbiAqL1xuZXhwb3J0IHZhciBLZXlDb2RlO1xuKGZ1bmN0aW9uIChLZXlDb2RlKSB7XG4gICAgLyoqXG4gICAgICogUGxhY2VkIGZpcnN0IHRvIGNvdmVyIHRoZSAwIHZhbHVlIG9mIHRoZSBlbnVtLlxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVua25vd25cIl0gPSAwXSA9IFwiVW5rbm93blwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkJhY2tzcGFjZVwiXSA9IDFdID0gXCJCYWNrc3BhY2VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJUYWJcIl0gPSAyXSA9IFwiVGFiXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRW50ZXJcIl0gPSAzXSA9IFwiRW50ZXJcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJTaGlmdFwiXSA9IDRdID0gXCJTaGlmdFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkN0cmxcIl0gPSA1XSA9IFwiQ3RybFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkFsdFwiXSA9IDZdID0gXCJBbHRcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJQYXVzZUJyZWFrXCJdID0gN10gPSBcIlBhdXNlQnJlYWtcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJDYXBzTG9ja1wiXSA9IDhdID0gXCJDYXBzTG9ja1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkVzY2FwZVwiXSA9IDldID0gXCJFc2NhcGVcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJTcGFjZVwiXSA9IDEwXSA9IFwiU3BhY2VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJQYWdlVXBcIl0gPSAxMV0gPSBcIlBhZ2VVcFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlBhZ2VEb3duXCJdID0gMTJdID0gXCJQYWdlRG93blwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkVuZFwiXSA9IDEzXSA9IFwiRW5kXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiSG9tZVwiXSA9IDE0XSA9IFwiSG9tZVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkxlZnRBcnJvd1wiXSA9IDE1XSA9IFwiTGVmdEFycm93XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVXBBcnJvd1wiXSA9IDE2XSA9IFwiVXBBcnJvd1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlJpZ2h0QXJyb3dcIl0gPSAxN10gPSBcIlJpZ2h0QXJyb3dcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJEb3duQXJyb3dcIl0gPSAxOF0gPSBcIkRvd25BcnJvd1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkluc2VydFwiXSA9IDE5XSA9IFwiSW5zZXJ0XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRGVsZXRlXCJdID0gMjBdID0gXCJEZWxldGVcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfMFwiXSA9IDIxXSA9IFwiS0VZXzBcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfMVwiXSA9IDIyXSA9IFwiS0VZXzFcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfMlwiXSA9IDIzXSA9IFwiS0VZXzJcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfM1wiXSA9IDI0XSA9IFwiS0VZXzNcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfNFwiXSA9IDI1XSA9IFwiS0VZXzRcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfNVwiXSA9IDI2XSA9IFwiS0VZXzVcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfNlwiXSA9IDI3XSA9IFwiS0VZXzZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfN1wiXSA9IDI4XSA9IFwiS0VZXzdcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfOFwiXSA9IDI5XSA9IFwiS0VZXzhcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfOVwiXSA9IDMwXSA9IFwiS0VZXzlcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfQVwiXSA9IDMxXSA9IFwiS0VZX0FcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfQlwiXSA9IDMyXSA9IFwiS0VZX0JcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfQ1wiXSA9IDMzXSA9IFwiS0VZX0NcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfRFwiXSA9IDM0XSA9IFwiS0VZX0RcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfRVwiXSA9IDM1XSA9IFwiS0VZX0VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfRlwiXSA9IDM2XSA9IFwiS0VZX0ZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfR1wiXSA9IDM3XSA9IFwiS0VZX0dcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfSFwiXSA9IDM4XSA9IFwiS0VZX0hcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfSVwiXSA9IDM5XSA9IFwiS0VZX0lcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfSlwiXSA9IDQwXSA9IFwiS0VZX0pcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfS1wiXSA9IDQxXSA9IFwiS0VZX0tcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfTFwiXSA9IDQyXSA9IFwiS0VZX0xcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfTVwiXSA9IDQzXSA9IFwiS0VZX01cIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfTlwiXSA9IDQ0XSA9IFwiS0VZX05cIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfT1wiXSA9IDQ1XSA9IFwiS0VZX09cIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfUFwiXSA9IDQ2XSA9IFwiS0VZX1BcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfUVwiXSA9IDQ3XSA9IFwiS0VZX1FcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfUlwiXSA9IDQ4XSA9IFwiS0VZX1JcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfU1wiXSA9IDQ5XSA9IFwiS0VZX1NcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfVFwiXSA9IDUwXSA9IFwiS0VZX1RcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfVVwiXSA9IDUxXSA9IFwiS0VZX1VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfVlwiXSA9IDUyXSA9IFwiS0VZX1ZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfV1wiXSA9IDUzXSA9IFwiS0VZX1dcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfWFwiXSA9IDU0XSA9IFwiS0VZX1hcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfWVwiXSA9IDU1XSA9IFwiS0VZX1lcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfWlwiXSA9IDU2XSA9IFwiS0VZX1pcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJNZXRhXCJdID0gNTddID0gXCJNZXRhXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiQ29udGV4dE1lbnVcIl0gPSA1OF0gPSBcIkNvbnRleHRNZW51XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjFcIl0gPSA1OV0gPSBcIkYxXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjJcIl0gPSA2MF0gPSBcIkYyXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjNcIl0gPSA2MV0gPSBcIkYzXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjRcIl0gPSA2Ml0gPSBcIkY0XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjVcIl0gPSA2M10gPSBcIkY1XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjZcIl0gPSA2NF0gPSBcIkY2XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjdcIl0gPSA2NV0gPSBcIkY3XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjhcIl0gPSA2Nl0gPSBcIkY4XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjlcIl0gPSA2N10gPSBcIkY5XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjEwXCJdID0gNjhdID0gXCJGMTBcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJGMTFcIl0gPSA2OV0gPSBcIkYxMVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkYxMlwiXSA9IDcwXSA9IFwiRjEyXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjEzXCJdID0gNzFdID0gXCJGMTNcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJGMTRcIl0gPSA3Ml0gPSBcIkYxNFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkYxNVwiXSA9IDczXSA9IFwiRjE1XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjE2XCJdID0gNzRdID0gXCJGMTZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJGMTdcIl0gPSA3NV0gPSBcIkYxN1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkYxOFwiXSA9IDc2XSA9IFwiRjE4XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjE5XCJdID0gNzddID0gXCJGMTlcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOdW1Mb2NrXCJdID0gNzhdID0gXCJOdW1Mb2NrXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiU2Nyb2xsTG9ja1wiXSA9IDc5XSA9IFwiU2Nyb2xsTG9ja1wiO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1pc2NlbGxhbmVvdXMgY2hhcmFjdGVyczsgaXQgY2FuIHZhcnkgYnkga2V5Ym9hcmQuXG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICc7Oicga2V5XG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVVNfU0VNSUNPTE9OXCJdID0gODBdID0gXCJVU19TRU1JQ09MT05cIjtcbiAgICAvKipcbiAgICAgKiBGb3IgYW55IGNvdW50cnkvcmVnaW9uLCB0aGUgJysnIGtleVxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnPSsnIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0VRVUFMXCJdID0gODFdID0gXCJVU19FUVVBTFwiO1xuICAgIC8qKlxuICAgICAqIEZvciBhbnkgY291bnRyeS9yZWdpb24sIHRoZSAnLCcga2V5XG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICcsPCcga2V5XG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVVNfQ09NTUFcIl0gPSA4Ml0gPSBcIlVTX0NPTU1BXCI7XG4gICAgLyoqXG4gICAgICogRm9yIGFueSBjb3VudHJ5L3JlZ2lvbiwgdGhlICctJyBrZXlcbiAgICAgKiBGb3IgdGhlIFVTIHN0YW5kYXJkIGtleWJvYXJkLCB0aGUgJy1fJyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19NSU5VU1wiXSA9IDgzXSA9IFwiVVNfTUlOVVNcIjtcbiAgICAvKipcbiAgICAgKiBGb3IgYW55IGNvdW50cnkvcmVnaW9uLCB0aGUgJy4nIGtleVxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnLj4nIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0RPVFwiXSA9IDg0XSA9IFwiVVNfRE9UXCI7XG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgbWlzY2VsbGFuZW91cyBjaGFyYWN0ZXJzOyBpdCBjYW4gdmFyeSBieSBrZXlib2FyZC5cbiAgICAgKiBGb3IgdGhlIFVTIHN0YW5kYXJkIGtleWJvYXJkLCB0aGUgJy8/JyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19TTEFTSFwiXSA9IDg1XSA9IFwiVVNfU0xBU0hcIjtcbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBtaXNjZWxsYW5lb3VzIGNoYXJhY3RlcnM7IGl0IGNhbiB2YXJ5IGJ5IGtleWJvYXJkLlxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnYH4nIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0JBQ0tUSUNLXCJdID0gODZdID0gXCJVU19CQUNLVElDS1wiO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1pc2NlbGxhbmVvdXMgY2hhcmFjdGVyczsgaXQgY2FuIHZhcnkgYnkga2V5Ym9hcmQuXG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICdbeycga2V5XG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVVNfT1BFTl9TUVVBUkVfQlJBQ0tFVFwiXSA9IDg3XSA9IFwiVVNfT1BFTl9TUVVBUkVfQlJBQ0tFVFwiO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1pc2NlbGxhbmVvdXMgY2hhcmFjdGVyczsgaXQgY2FuIHZhcnkgYnkga2V5Ym9hcmQuXG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICdcXHwnIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0JBQ0tTTEFTSFwiXSA9IDg4XSA9IFwiVVNfQkFDS1NMQVNIXCI7XG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgbWlzY2VsbGFuZW91cyBjaGFyYWN0ZXJzOyBpdCBjYW4gdmFyeSBieSBrZXlib2FyZC5cbiAgICAgKiBGb3IgdGhlIFVTIHN0YW5kYXJkIGtleWJvYXJkLCB0aGUgJ119JyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19DTE9TRV9TUVVBUkVfQlJBQ0tFVFwiXSA9IDg5XSA9IFwiVVNfQ0xPU0VfU1FVQVJFX0JSQUNLRVRcIjtcbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBtaXNjZWxsYW5lb3VzIGNoYXJhY3RlcnM7IGl0IGNhbiB2YXJ5IGJ5IGtleWJvYXJkLlxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnJ1wiJyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19RVU9URVwiXSA9IDkwXSA9IFwiVVNfUVVPVEVcIjtcbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBtaXNjZWxsYW5lb3VzIGNoYXJhY3RlcnM7IGl0IGNhbiB2YXJ5IGJ5IGtleWJvYXJkLlxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk9FTV84XCJdID0gOTFdID0gXCJPRU1fOFwiO1xuICAgIC8qKlxuICAgICAqIEVpdGhlciB0aGUgYW5nbGUgYnJhY2tldCBrZXkgb3IgdGhlIGJhY2tzbGFzaCBrZXkgb24gdGhlIFJUIDEwMi1rZXkga2V5Ym9hcmQuXG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiT0VNXzEwMlwiXSA9IDkyXSA9IFwiT0VNXzEwMlwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8wXCJdID0gOTNdID0gXCJOVU1QQURfMFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8xXCJdID0gOTRdID0gXCJOVU1QQURfMVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8yXCJdID0gOTVdID0gXCJOVU1QQURfMlwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8zXCJdID0gOTZdID0gXCJOVU1QQURfM1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF80XCJdID0gOTddID0gXCJOVU1QQURfNFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF81XCJdID0gOThdID0gXCJOVU1QQURfNVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF82XCJdID0gOTldID0gXCJOVU1QQURfNlwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF83XCJdID0gMTAwXSA9IFwiTlVNUEFEXzdcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOVU1QQURfOFwiXSA9IDEwMV0gPSBcIk5VTVBBRF84XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiTlVNUEFEXzlcIl0gPSAxMDJdID0gXCJOVU1QQURfOVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF9NVUxUSVBMWVwiXSA9IDEwM10gPSBcIk5VTVBBRF9NVUxUSVBMWVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF9BRERcIl0gPSAxMDRdID0gXCJOVU1QQURfQUREXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiTlVNUEFEX1NFUEFSQVRPUlwiXSA9IDEwNV0gPSBcIk5VTVBBRF9TRVBBUkFUT1JcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOVU1QQURfU1VCVFJBQ1RcIl0gPSAxMDZdID0gXCJOVU1QQURfU1VCVFJBQ1RcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOVU1QQURfREVDSU1BTFwiXSA9IDEwN10gPSBcIk5VTVBBRF9ERUNJTUFMXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiTlVNUEFEX0RJVklERVwiXSA9IDEwOF0gPSBcIk5VTVBBRF9ESVZJREVcIjtcbiAgICAvKipcbiAgICAgKiBDb3ZlciBhbGwga2V5IGNvZGVzIHdoZW4gSU1FIGlzIHByb2Nlc3NpbmcgaW5wdXQuXG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiS0VZX0lOX0NPTVBPU0lUSU9OXCJdID0gMTA5XSA9IFwiS0VZX0lOX0NPTVBPU0lUSU9OXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiQUJOVF9DMVwiXSA9IDExMF0gPSBcIkFCTlRfQzFcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJBQk5UX0MyXCJdID0gMTExXSA9IFwiQUJOVF9DMlwiO1xuICAgIC8qKlxuICAgICAqIFBsYWNlZCBsYXN0IHRvIGNvdmVyIHRoZSBsZW5ndGggb2YgdGhlIGVudW0uXG4gICAgICogUGxlYXNlIGRvIG5vdCBkZXBlbmQgb24gdGhpcyB2YWx1ZSFcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJNQVhfVkFMVUVcIl0gPSAxMTJdID0gXCJNQVhfVkFMVUVcIjtcbn0pKEtleUNvZGUgfHwgKEtleUNvZGUgPSB7fSkpO1xuLyoqXG4gKiBUaGUgZGlyZWN0aW9uIG9mIGEgc2VsZWN0aW9uLlxuICovXG5leHBvcnQgdmFyIFNlbGVjdGlvbkRpcmVjdGlvbjtcbihmdW5jdGlvbiAoU2VsZWN0aW9uRGlyZWN0aW9uKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGlvbiBzdGFydHMgYWJvdmUgd2hlcmUgaXQgZW5kcy5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb25EaXJlY3Rpb25bU2VsZWN0aW9uRGlyZWN0aW9uW1wiTFRSXCJdID0gMF0gPSBcIkxUUlwiO1xuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3Rpb24gc3RhcnRzIGJlbG93IHdoZXJlIGl0IGVuZHMuXG4gICAgICovXG4gICAgU2VsZWN0aW9uRGlyZWN0aW9uW1NlbGVjdGlvbkRpcmVjdGlvbltcIlJUTFwiXSA9IDFdID0gXCJSVExcIjtcbn0pKFNlbGVjdGlvbkRpcmVjdGlvbiB8fCAoU2VsZWN0aW9uRGlyZWN0aW9uID0ge30pKTtcbmV4cG9ydCB2YXIgU2Nyb2xsYmFyVmlzaWJpbGl0eTtcbihmdW5jdGlvbiAoU2Nyb2xsYmFyVmlzaWJpbGl0eSkge1xuICAgIFNjcm9sbGJhclZpc2liaWxpdHlbU2Nyb2xsYmFyVmlzaWJpbGl0eVtcIkF1dG9cIl0gPSAxXSA9IFwiQXV0b1wiO1xuICAgIFNjcm9sbGJhclZpc2liaWxpdHlbU2Nyb2xsYmFyVmlzaWJpbGl0eVtcIkhpZGRlblwiXSA9IDJdID0gXCJIaWRkZW5cIjtcbiAgICBTY3JvbGxiYXJWaXNpYmlsaXR5W1Njcm9sbGJhclZpc2liaWxpdHlbXCJWaXNpYmxlXCJdID0gM10gPSBcIlZpc2libGVcIjtcbn0pKFNjcm9sbGJhclZpc2liaWxpdHkgfHwgKFNjcm9sbGJhclZpc2liaWxpdHkgPSB7fSkpO1xuLyoqXG4gKiBWZXJ0aWNhbCBMYW5lIGluIHRoZSBvdmVydmlldyBydWxlciBvZiB0aGUgZWRpdG9yLlxuICovXG5leHBvcnQgdmFyIE92ZXJ2aWV3UnVsZXJMYW5lO1xuKGZ1bmN0aW9uIChPdmVydmlld1J1bGVyTGFuZSkge1xuICAgIE92ZXJ2aWV3UnVsZXJMYW5lW092ZXJ2aWV3UnVsZXJMYW5lW1wiTGVmdFwiXSA9IDFdID0gXCJMZWZ0XCI7XG4gICAgT3ZlcnZpZXdSdWxlckxhbmVbT3ZlcnZpZXdSdWxlckxhbmVbXCJDZW50ZXJcIl0gPSAyXSA9IFwiQ2VudGVyXCI7XG4gICAgT3ZlcnZpZXdSdWxlckxhbmVbT3ZlcnZpZXdSdWxlckxhbmVbXCJSaWdodFwiXSA9IDRdID0gXCJSaWdodFwiO1xuICAgIE92ZXJ2aWV3UnVsZXJMYW5lW092ZXJ2aWV3UnVsZXJMYW5lW1wiRnVsbFwiXSA9IDddID0gXCJGdWxsXCI7XG59KShPdmVydmlld1J1bGVyTGFuZSB8fCAoT3ZlcnZpZXdSdWxlckxhbmUgPSB7fSkpO1xuLyoqXG4gKiBFbmQgb2YgbGluZSBjaGFyYWN0ZXIgcHJlZmVyZW5jZS5cbiAqL1xuZXhwb3J0IHZhciBFbmRPZkxpbmVQcmVmZXJlbmNlO1xuKGZ1bmN0aW9uIChFbmRPZkxpbmVQcmVmZXJlbmNlKSB7XG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBlbmQgb2YgbGluZSBjaGFyYWN0ZXIgaWRlbnRpZmllZCBpbiB0aGUgdGV4dCBidWZmZXIuXG4gICAgICovXG4gICAgRW5kT2ZMaW5lUHJlZmVyZW5jZVtFbmRPZkxpbmVQcmVmZXJlbmNlW1wiVGV4dERlZmluZWRcIl0gPSAwXSA9IFwiVGV4dERlZmluZWRcIjtcbiAgICAvKipcbiAgICAgKiBVc2UgbGluZSBmZWVkIChcXG4pIGFzIHRoZSBlbmQgb2YgbGluZSBjaGFyYWN0ZXIuXG4gICAgICovXG4gICAgRW5kT2ZMaW5lUHJlZmVyZW5jZVtFbmRPZkxpbmVQcmVmZXJlbmNlW1wiTEZcIl0gPSAxXSA9IFwiTEZcIjtcbiAgICAvKipcbiAgICAgKiBVc2UgY2FycmlhZ2UgcmV0dXJuIGFuZCBsaW5lIGZlZWQgKFxcclxcbikgYXMgdGhlIGVuZCBvZiBsaW5lIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICBFbmRPZkxpbmVQcmVmZXJlbmNlW0VuZE9mTGluZVByZWZlcmVuY2VbXCJDUkxGXCJdID0gMl0gPSBcIkNSTEZcIjtcbn0pKEVuZE9mTGluZVByZWZlcmVuY2UgfHwgKEVuZE9mTGluZVByZWZlcmVuY2UgPSB7fSkpO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBlbmQgb2YgbGluZSB0byB1c2Ugd2hlbiBpbnN0YW50aWF0aW5nIG1vZGVscy5cbiAqL1xuZXhwb3J0IHZhciBEZWZhdWx0RW5kT2ZMaW5lO1xuKGZ1bmN0aW9uIChEZWZhdWx0RW5kT2ZMaW5lKSB7XG4gICAgLyoqXG4gICAgICogVXNlIGxpbmUgZmVlZCAoXFxuKSBhcyB0aGUgZW5kIG9mIGxpbmUgY2hhcmFjdGVyLlxuICAgICAqL1xuICAgIERlZmF1bHRFbmRPZkxpbmVbRGVmYXVsdEVuZE9mTGluZVtcIkxGXCJdID0gMV0gPSBcIkxGXCI7XG4gICAgLyoqXG4gICAgICogVXNlIGNhcnJpYWdlIHJldHVybiBhbmQgbGluZSBmZWVkIChcXHJcXG4pIGFzIHRoZSBlbmQgb2YgbGluZSBjaGFyYWN0ZXIuXG4gICAgICovXG4gICAgRGVmYXVsdEVuZE9mTGluZVtEZWZhdWx0RW5kT2ZMaW5lW1wiQ1JMRlwiXSA9IDJdID0gXCJDUkxGXCI7XG59KShEZWZhdWx0RW5kT2ZMaW5lIHx8IChEZWZhdWx0RW5kT2ZMaW5lID0ge30pKTtcbi8qKlxuICogRW5kIG9mIGxpbmUgY2hhcmFjdGVyIHByZWZlcmVuY2UuXG4gKi9cbmV4cG9ydCB2YXIgRW5kT2ZMaW5lU2VxdWVuY2U7XG4oZnVuY3Rpb24gKEVuZE9mTGluZVNlcXVlbmNlKSB7XG4gICAgLyoqXG4gICAgICogVXNlIGxpbmUgZmVlZCAoXFxuKSBhcyB0aGUgZW5kIG9mIGxpbmUgY2hhcmFjdGVyLlxuICAgICAqL1xuICAgIEVuZE9mTGluZVNlcXVlbmNlW0VuZE9mTGluZVNlcXVlbmNlW1wiTEZcIl0gPSAwXSA9IFwiTEZcIjtcbiAgICAvKipcbiAgICAgKiBVc2UgY2FycmlhZ2UgcmV0dXJuIGFuZCBsaW5lIGZlZWQgKFxcclxcbikgYXMgdGhlIGVuZCBvZiBsaW5lIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICBFbmRPZkxpbmVTZXF1ZW5jZVtFbmRPZkxpbmVTZXF1ZW5jZVtcIkNSTEZcIl0gPSAxXSA9IFwiQ1JMRlwiO1xufSkoRW5kT2ZMaW5lU2VxdWVuY2UgfHwgKEVuZE9mTGluZVNlcXVlbmNlID0ge30pKTtcbi8qKlxuICogRGVzY3JpYmVzIHRoZSBiZWhhdmlvciBvZiBkZWNvcmF0aW9ucyB3aGVuIHR5cGluZy9lZGl0aW5nIG5lYXIgdGhlaXIgZWRnZXMuXG4gKiBOb3RlOiBQbGVhc2UgZG8gbm90IGVkaXQgdGhlIHZhbHVlcywgYXMgdGhleSB2ZXJ5IGNhcmVmdWxseSBtYXRjaCBgRGVjb3JhdGlvblJhbmdlQmVoYXZpb3JgXG4gKi9cbmV4cG9ydCB2YXIgVHJhY2tlZFJhbmdlU3RpY2tpbmVzcztcbihmdW5jdGlvbiAoVHJhY2tlZFJhbmdlU3RpY2tpbmVzcykge1xuICAgIFRyYWNrZWRSYW5nZVN0aWNraW5lc3NbVHJhY2tlZFJhbmdlU3RpY2tpbmVzc1tcIkFsd2F5c0dyb3dzV2hlblR5cGluZ0F0RWRnZXNcIl0gPSAwXSA9IFwiQWx3YXlzR3Jvd3NXaGVuVHlwaW5nQXRFZGdlc1wiO1xuICAgIFRyYWNrZWRSYW5nZVN0aWNraW5lc3NbVHJhY2tlZFJhbmdlU3RpY2tpbmVzc1tcIk5ldmVyR3Jvd3NXaGVuVHlwaW5nQXRFZGdlc1wiXSA9IDFdID0gXCJOZXZlckdyb3dzV2hlblR5cGluZ0F0RWRnZXNcIjtcbiAgICBUcmFja2VkUmFuZ2VTdGlja2luZXNzW1RyYWNrZWRSYW5nZVN0aWNraW5lc3NbXCJHcm93c09ubHlXaGVuVHlwaW5nQmVmb3JlXCJdID0gMl0gPSBcIkdyb3dzT25seVdoZW5UeXBpbmdCZWZvcmVcIjtcbiAgICBUcmFja2VkUmFuZ2VTdGlja2luZXNzW1RyYWNrZWRSYW5nZVN0aWNraW5lc3NbXCJHcm93c09ubHlXaGVuVHlwaW5nQWZ0ZXJcIl0gPSAzXSA9IFwiR3Jvd3NPbmx5V2hlblR5cGluZ0FmdGVyXCI7XG59KShUcmFja2VkUmFuZ2VTdGlja2luZXNzIHx8IChUcmFja2VkUmFuZ2VTdGlja2luZXNzID0ge30pKTtcbmV4cG9ydCB2YXIgU2Nyb2xsVHlwZTtcbihmdW5jdGlvbiAoU2Nyb2xsVHlwZSkge1xuICAgIFNjcm9sbFR5cGVbU2Nyb2xsVHlwZVtcIlNtb290aFwiXSA9IDBdID0gXCJTbW9vdGhcIjtcbiAgICBTY3JvbGxUeXBlW1Njcm9sbFR5cGVbXCJJbW1lZGlhdGVcIl0gPSAxXSA9IFwiSW1tZWRpYXRlXCI7XG59KShTY3JvbGxUeXBlIHx8IChTY3JvbGxUeXBlID0ge30pKTtcbi8qKlxuICogRGVzY3JpYmVzIHRoZSByZWFzb24gdGhlIGN1cnNvciBoYXMgY2hhbmdlZCBpdHMgcG9zaXRpb24uXG4gKi9cbmV4cG9ydCB2YXIgQ3Vyc29yQ2hhbmdlUmVhc29uO1xuKGZ1bmN0aW9uIChDdXJzb3JDaGFuZ2VSZWFzb24pIHtcbiAgICAvKipcbiAgICAgKiBVbmtub3duIG9yIG5vdCBzZXQuXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIk5vdFNldFwiXSA9IDBdID0gXCJOb3RTZXRcIjtcbiAgICAvKipcbiAgICAgKiBBIGBtb2RlbC5zZXRWYWx1ZSgpYCB3YXMgY2FsbGVkLlxuICAgICAqL1xuICAgIEN1cnNvckNoYW5nZVJlYXNvbltDdXJzb3JDaGFuZ2VSZWFzb25bXCJDb250ZW50Rmx1c2hcIl0gPSAxXSA9IFwiQ29udGVudEZsdXNoXCI7XG4gICAgLyoqXG4gICAgICogVGhlIGBtb2RlbGAgaGFzIGJlZW4gY2hhbmdlZCBvdXRzaWRlIG9mIHRoaXMgY3Vyc29yIGFuZCB0aGUgY3Vyc29yIHJlY292ZXJzIGl0cyBwb3NpdGlvbiBmcm9tIGFzc29jaWF0ZWQgbWFya2Vycy5cbiAgICAgKi9cbiAgICBDdXJzb3JDaGFuZ2VSZWFzb25bQ3Vyc29yQ2hhbmdlUmVhc29uW1wiUmVjb3ZlckZyb21NYXJrZXJzXCJdID0gMl0gPSBcIlJlY292ZXJGcm9tTWFya2Vyc1wiO1xuICAgIC8qKlxuICAgICAqIFRoZXJlIHdhcyBhbiBleHBsaWNpdCB1c2VyIGdlc3R1cmUuXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIkV4cGxpY2l0XCJdID0gM10gPSBcIkV4cGxpY2l0XCI7XG4gICAgLyoqXG4gICAgICogVGhlcmUgd2FzIGEgUGFzdGUuXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIlBhc3RlXCJdID0gNF0gPSBcIlBhc3RlXCI7XG4gICAgLyoqXG4gICAgICogVGhlcmUgd2FzIGFuIFVuZG8uXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIlVuZG9cIl0gPSA1XSA9IFwiVW5kb1wiO1xuICAgIC8qKlxuICAgICAqIFRoZXJlIHdhcyBhIFJlZG8uXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIlJlZG9cIl0gPSA2XSA9IFwiUmVkb1wiO1xufSkoQ3Vyc29yQ2hhbmdlUmVhc29uIHx8IChDdXJzb3JDaGFuZ2VSZWFzb24gPSB7fSkpO1xuZXhwb3J0IHZhciBSZW5kZXJNaW5pbWFwO1xuKGZ1bmN0aW9uIChSZW5kZXJNaW5pbWFwKSB7XG4gICAgUmVuZGVyTWluaW1hcFtSZW5kZXJNaW5pbWFwW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgUmVuZGVyTWluaW1hcFtSZW5kZXJNaW5pbWFwW1wiU21hbGxcIl0gPSAxXSA9IFwiU21hbGxcIjtcbiAgICBSZW5kZXJNaW5pbWFwW1JlbmRlck1pbmltYXBbXCJMYXJnZVwiXSA9IDJdID0gXCJMYXJnZVwiO1xuICAgIFJlbmRlck1pbmltYXBbUmVuZGVyTWluaW1hcFtcIlNtYWxsQmxvY2tzXCJdID0gM10gPSBcIlNtYWxsQmxvY2tzXCI7XG4gICAgUmVuZGVyTWluaW1hcFtSZW5kZXJNaW5pbWFwW1wiTGFyZ2VCbG9ja3NcIl0gPSA0XSA9IFwiTGFyZ2VCbG9ja3NcIjtcbn0pKFJlbmRlck1pbmltYXAgfHwgKFJlbmRlck1pbmltYXAgPSB7fSkpO1xuLyoqXG4gKiBEZXNjcmliZXMgaG93IHRvIGluZGVudCB3cmFwcGVkIGxpbmVzLlxuICovXG5leHBvcnQgdmFyIFdyYXBwaW5nSW5kZW50O1xuKGZ1bmN0aW9uIChXcmFwcGluZ0luZGVudCkge1xuICAgIC8qKlxuICAgICAqIE5vIGluZGVudGF0aW9uID0+IHdyYXBwZWQgbGluZXMgYmVnaW4gYXQgY29sdW1uIDEuXG4gICAgICovXG4gICAgV3JhcHBpbmdJbmRlbnRbV3JhcHBpbmdJbmRlbnRbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICAvKipcbiAgICAgKiBTYW1lID0+IHdyYXBwZWQgbGluZXMgZ2V0IHRoZSBzYW1lIGluZGVudGF0aW9uIGFzIHRoZSBwYXJlbnQuXG4gICAgICovXG4gICAgV3JhcHBpbmdJbmRlbnRbV3JhcHBpbmdJbmRlbnRbXCJTYW1lXCJdID0gMV0gPSBcIlNhbWVcIjtcbiAgICAvKipcbiAgICAgKiBJbmRlbnQgPT4gd3JhcHBlZCBsaW5lcyBnZXQgKzEgaW5kZW50YXRpb24gdG93YXJkIHRoZSBwYXJlbnQuXG4gICAgICovXG4gICAgV3JhcHBpbmdJbmRlbnRbV3JhcHBpbmdJbmRlbnRbXCJJbmRlbnRcIl0gPSAyXSA9IFwiSW5kZW50XCI7XG4gICAgLyoqXG4gICAgICogRGVlcEluZGVudCA9PiB3cmFwcGVkIGxpbmVzIGdldCArMiBpbmRlbnRhdGlvbiB0b3dhcmQgdGhlIHBhcmVudC5cbiAgICAgKi9cbiAgICBXcmFwcGluZ0luZGVudFtXcmFwcGluZ0luZGVudFtcIkRlZXBJbmRlbnRcIl0gPSAzXSA9IFwiRGVlcEluZGVudFwiO1xufSkoV3JhcHBpbmdJbmRlbnQgfHwgKFdyYXBwaW5nSW5kZW50ID0ge30pKTtcbi8qKlxuICogVGhlIGtpbmQgb2YgYW5pbWF0aW9uIGluIHdoaWNoIHRoZSBlZGl0b3IncyBjdXJzb3Igc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgdmFyIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlO1xuKGZ1bmN0aW9uIChUZXh0RWRpdG9yQ3Vyc29yQmxpbmtpbmdTdHlsZSkge1xuICAgIC8qKlxuICAgICAqIEhpZGRlblxuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1RleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1wiSGlkZGVuXCJdID0gMF0gPSBcIkhpZGRlblwiO1xuICAgIC8qKlxuICAgICAqIEJsaW5raW5nXG4gICAgICovXG4gICAgVGV4dEVkaXRvckN1cnNvckJsaW5raW5nU3R5bGVbVGV4dEVkaXRvckN1cnNvckJsaW5raW5nU3R5bGVbXCJCbGlua1wiXSA9IDFdID0gXCJCbGlua1wiO1xuICAgIC8qKlxuICAgICAqIEJsaW5raW5nIHdpdGggc21vb3RoIGZhZGluZ1xuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1RleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1wiU21vb3RoXCJdID0gMl0gPSBcIlNtb290aFwiO1xuICAgIC8qKlxuICAgICAqIEJsaW5raW5nIHdpdGggcHJvbG9uZ2VkIGZpbGxlZCBzdGF0ZSBhbmQgc21vb3RoIGZhZGluZ1xuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1RleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1wiUGhhc2VcIl0gPSAzXSA9IFwiUGhhc2VcIjtcbiAgICAvKipcbiAgICAgKiBFeHBhbmQgY29sbGFwc2UgYW5pbWF0aW9uIG9uIHRoZSB5IGF4aXNcbiAgICAgKi9cbiAgICBUZXh0RWRpdG9yQ3Vyc29yQmxpbmtpbmdTdHlsZVtUZXh0RWRpdG9yQ3Vyc29yQmxpbmtpbmdTdHlsZVtcIkV4cGFuZFwiXSA9IDRdID0gXCJFeHBhbmRcIjtcbiAgICAvKipcbiAgICAgKiBOby1CbGlua2luZ1xuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1RleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1wiU29saWRcIl0gPSA1XSA9IFwiU29saWRcIjtcbn0pKFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlIHx8IChUZXh0RWRpdG9yQ3Vyc29yQmxpbmtpbmdTdHlsZSA9IHt9KSk7XG4vKipcbiAqIFRoZSBzdHlsZSBpbiB3aGljaCB0aGUgZWRpdG9yJ3MgY3Vyc29yIHNob3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IHZhciBUZXh0RWRpdG9yQ3Vyc29yU3R5bGU7XG4oZnVuY3Rpb24gKFRleHRFZGl0b3JDdXJzb3JTdHlsZSkge1xuICAgIC8qKlxuICAgICAqIEFzIGEgdmVydGljYWwgbGluZSAoc2l0dGluZyBiZXR3ZWVuIHR3byBjaGFyYWN0ZXJzKS5cbiAgICAgKi9cbiAgICBUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbVGV4dEVkaXRvckN1cnNvclN0eWxlW1wiTGluZVwiXSA9IDFdID0gXCJMaW5lXCI7XG4gICAgLyoqXG4gICAgICogQXMgYSBibG9jayAoc2l0dGluZyBvbiB0b3Agb2YgYSBjaGFyYWN0ZXIpLlxuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JTdHlsZVtUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbXCJCbG9ja1wiXSA9IDJdID0gXCJCbG9ja1wiO1xuICAgIC8qKlxuICAgICAqIEFzIGEgaG9yaXpvbnRhbCBsaW5lIChzaXR0aW5nIHVuZGVyIGEgY2hhcmFjdGVyKS5cbiAgICAgKi9cbiAgICBUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbVGV4dEVkaXRvckN1cnNvclN0eWxlW1wiVW5kZXJsaW5lXCJdID0gM10gPSBcIlVuZGVybGluZVwiO1xuICAgIC8qKlxuICAgICAqIEFzIGEgdGhpbiB2ZXJ0aWNhbCBsaW5lIChzaXR0aW5nIGJldHdlZW4gdHdvIGNoYXJhY3RlcnMpLlxuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JTdHlsZVtUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbXCJMaW5lVGhpblwiXSA9IDRdID0gXCJMaW5lVGhpblwiO1xuICAgIC8qKlxuICAgICAqIEFzIGFuIG91dGxpbmVkIGJsb2NrIChzaXR0aW5nIG9uIHRvcCBvZiBhIGNoYXJhY3RlcikuXG4gICAgICovXG4gICAgVGV4dEVkaXRvckN1cnNvclN0eWxlW1RleHRFZGl0b3JDdXJzb3JTdHlsZVtcIkJsb2NrT3V0bGluZVwiXSA9IDVdID0gXCJCbG9ja091dGxpbmVcIjtcbiAgICAvKipcbiAgICAgKiBBcyBhIHRoaW4gaG9yaXpvbnRhbCBsaW5lIChzaXR0aW5nIHVuZGVyIGEgY2hhcmFjdGVyKS5cbiAgICAgKi9cbiAgICBUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbVGV4dEVkaXRvckN1cnNvclN0eWxlW1wiVW5kZXJsaW5lVGhpblwiXSA9IDZdID0gXCJVbmRlcmxpbmVUaGluXCI7XG59KShUZXh0RWRpdG9yQ3Vyc29yU3R5bGUgfHwgKFRleHRFZGl0b3JDdXJzb3JTdHlsZSA9IHt9KSk7XG5leHBvcnQgdmFyIFJlbmRlckxpbmVOdW1iZXJzVHlwZTtcbihmdW5jdGlvbiAoUmVuZGVyTGluZU51bWJlcnNUeXBlKSB7XG4gICAgUmVuZGVyTGluZU51bWJlcnNUeXBlW1JlbmRlckxpbmVOdW1iZXJzVHlwZVtcIk9mZlwiXSA9IDBdID0gXCJPZmZcIjtcbiAgICBSZW5kZXJMaW5lTnVtYmVyc1R5cGVbUmVuZGVyTGluZU51bWJlcnNUeXBlW1wiT25cIl0gPSAxXSA9IFwiT25cIjtcbiAgICBSZW5kZXJMaW5lTnVtYmVyc1R5cGVbUmVuZGVyTGluZU51bWJlcnNUeXBlW1wiUmVsYXRpdmVcIl0gPSAyXSA9IFwiUmVsYXRpdmVcIjtcbiAgICBSZW5kZXJMaW5lTnVtYmVyc1R5cGVbUmVuZGVyTGluZU51bWJlcnNUeXBlW1wiSW50ZXJ2YWxcIl0gPSAzXSA9IFwiSW50ZXJ2YWxcIjtcbiAgICBSZW5kZXJMaW5lTnVtYmVyc1R5cGVbUmVuZGVyTGluZU51bWJlcnNUeXBlW1wiQ3VzdG9tXCJdID0gNF0gPSBcIkN1c3RvbVwiO1xufSkoUmVuZGVyTGluZU51bWJlcnNUeXBlIHx8IChSZW5kZXJMaW5lTnVtYmVyc1R5cGUgPSB7fSkpO1xuLyoqXG4gKiBBIHBvc2l0aW9uaW5nIHByZWZlcmVuY2UgZm9yIHJlbmRlcmluZyBjb250ZW50IHdpZGdldHMuXG4gKi9cbmV4cG9ydCB2YXIgQ29udGVudFdpZGdldFBvc2l0aW9uUHJlZmVyZW5jZTtcbihmdW5jdGlvbiAoQ29udGVudFdpZGdldFBvc2l0aW9uUHJlZmVyZW5jZSkge1xuICAgIC8qKlxuICAgICAqIFBsYWNlIHRoZSBjb250ZW50IHdpZGdldCBleGFjdGx5IGF0IGEgcG9zaXRpb25cbiAgICAgKi9cbiAgICBDb250ZW50V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW0NvbnRlbnRXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbXCJFWEFDVFwiXSA9IDBdID0gXCJFWEFDVFwiO1xuICAgIC8qKlxuICAgICAqIFBsYWNlIHRoZSBjb250ZW50IHdpZGdldCBhYm92ZSBhIHBvc2l0aW9uXG4gICAgICovXG4gICAgQ29udGVudFdpZGdldFBvc2l0aW9uUHJlZmVyZW5jZVtDb250ZW50V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW1wiQUJPVkVcIl0gPSAxXSA9IFwiQUJPVkVcIjtcbiAgICAvKipcbiAgICAgKiBQbGFjZSB0aGUgY29udGVudCB3aWRnZXQgYmVsb3cgYSBwb3NpdGlvblxuICAgICAqL1xuICAgIENvbnRlbnRXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbQ29udGVudFdpZGdldFBvc2l0aW9uUHJlZmVyZW5jZVtcIkJFTE9XXCJdID0gMl0gPSBcIkJFTE9XXCI7XG59KShDb250ZW50V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlIHx8IChDb250ZW50V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlID0ge30pKTtcbi8qKlxuICogQSBwb3NpdGlvbmluZyBwcmVmZXJlbmNlIGZvciByZW5kZXJpbmcgb3ZlcmxheSB3aWRnZXRzLlxuICovXG5leHBvcnQgdmFyIE92ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2U7XG4oZnVuY3Rpb24gKE92ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2UpIHtcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiB0aGUgb3ZlcmxheSB3aWRnZXQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXJcbiAgICAgKi9cbiAgICBPdmVybGF5V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW092ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbXCJUT1BfUklHSFRfQ09STkVSXCJdID0gMF0gPSBcIlRPUF9SSUdIVF9DT1JORVJcIjtcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiB0aGUgb3ZlcmxheSB3aWRnZXQgaW4gdGhlIGJvdHRvbSByaWdodCBjb3JuZXJcbiAgICAgKi9cbiAgICBPdmVybGF5V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW092ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbXCJCT1RUT01fUklHSFRfQ09STkVSXCJdID0gMV0gPSBcIkJPVFRPTV9SSUdIVF9DT1JORVJcIjtcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiB0aGUgb3ZlcmxheSB3aWRnZXQgaW4gdGhlIHRvcCBjZW50ZXJcbiAgICAgKi9cbiAgICBPdmVybGF5V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW092ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbXCJUT1BfQ0VOVEVSXCJdID0gMl0gPSBcIlRPUF9DRU5URVJcIjtcbn0pKE92ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2UgfHwgKE92ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2UgPSB7fSkpO1xuLyoqXG4gKiBUeXBlIG9mIGhpdCBlbGVtZW50IHdpdGggdGhlIG1vdXNlIGluIHRoZSBlZGl0b3IuXG4gKi9cbmV4cG9ydCB2YXIgTW91c2VUYXJnZXRUeXBlO1xuKGZ1bmN0aW9uIChNb3VzZVRhcmdldFR5cGUpIHtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgYW4gdW5rbm93biBlbGVtZW50LlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJVTktOT1dOXCJdID0gMF0gPSBcIlVOS05PV05cIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgdGhlIHRleHRhcmVhIHVzZWQgZm9yIGlucHV0LlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJURVhUQVJFQVwiXSA9IDFdID0gXCJURVhUQVJFQVwiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0aGUgZ2x5cGggbWFyZ2luXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIkdVVFRFUl9HTFlQSF9NQVJHSU5cIl0gPSAyXSA9IFwiR1VUVEVSX0dMWVBIX01BUkdJTlwiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0aGUgbGluZSBudW1iZXJzXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIkdVVFRFUl9MSU5FX05VTUJFUlNcIl0gPSAzXSA9IFwiR1VUVEVSX0xJTkVfTlVNQkVSU1wiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0aGUgbGluZSBkZWNvcmF0aW9uc1xuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJHVVRURVJfTElORV9ERUNPUkFUSU9OU1wiXSA9IDRdID0gXCJHVVRURVJfTElORV9ERUNPUkFUSU9OU1wiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0aGUgd2hpdGVzcGFjZSBsZWZ0IGluIHRoZSBndXR0ZXIgYnkgYSB2aWV3IHpvbmUuXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIkdVVFRFUl9WSUVXX1pPTkVcIl0gPSA1XSA9IFwiR1VUVEVSX1ZJRVdfWk9ORVwiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0ZXh0IGluIHRoZSBjb250ZW50LlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJDT05URU5UX1RFWFRcIl0gPSA2XSA9IFwiQ09OVEVOVF9URVhUXCI7XG4gICAgLyoqXG4gICAgICogTW91c2UgaXMgb24gdG9wIG9mIGVtcHR5IHNwYWNlIGluIHRoZSBjb250ZW50IChlLmcuIGFmdGVyIGxpbmUgdGV4dCBvciBiZWxvdyBsYXN0IGxpbmUpXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIkNPTlRFTlRfRU1QVFlcIl0gPSA3XSA9IFwiQ09OVEVOVF9FTVBUWVwiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiBhIHZpZXcgem9uZSBpbiB0aGUgY29udGVudC5cbiAgICAgKi9cbiAgICBNb3VzZVRhcmdldFR5cGVbTW91c2VUYXJnZXRUeXBlW1wiQ09OVEVOVF9WSUVXX1pPTkVcIl0gPSA4XSA9IFwiQ09OVEVOVF9WSUVXX1pPTkVcIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgYSBjb250ZW50IHdpZGdldC5cbiAgICAgKi9cbiAgICBNb3VzZVRhcmdldFR5cGVbTW91c2VUYXJnZXRUeXBlW1wiQ09OVEVOVF9XSURHRVRcIl0gPSA5XSA9IFwiQ09OVEVOVF9XSURHRVRcIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgdGhlIGRlY29yYXRpb25zIG92ZXJ2aWV3IHJ1bGVyLlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJPVkVSVklFV19SVUxFUlwiXSA9IDEwXSA9IFwiT1ZFUlZJRVdfUlVMRVJcIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgYSBzY3JvbGxiYXIuXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIlNDUk9MTEJBUlwiXSA9IDExXSA9IFwiU0NST0xMQkFSXCI7XG4gICAgLyoqXG4gICAgICogTW91c2UgaXMgb24gdG9wIG9mIGFuIG92ZXJsYXkgd2lkZ2V0LlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJPVkVSTEFZX1dJREdFVFwiXSA9IDEyXSA9IFwiT1ZFUkxBWV9XSURHRVRcIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvdXRzaWRlIG9mIHRoZSBlZGl0b3IuXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIk9VVFNJREVfRURJVE9SXCJdID0gMTNdID0gXCJPVVRTSURFX0VESVRPUlwiO1xufSkoTW91c2VUYXJnZXRUeXBlIHx8IChNb3VzZVRhcmdldFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBEZXNjcmliZXMgd2hhdCB0byBkbyB3aXRoIHRoZSBpbmRlbnRhdGlvbiB3aGVuIHByZXNzaW5nIEVudGVyLlxuICovXG5leHBvcnQgdmFyIEluZGVudEFjdGlvbjtcbihmdW5jdGlvbiAoSW5kZW50QWN0aW9uKSB7XG4gICAgLyoqXG4gICAgICogSW5zZXJ0IG5ldyBsaW5lIGFuZCBjb3B5IHRoZSBwcmV2aW91cyBsaW5lJ3MgaW5kZW50YXRpb24uXG4gICAgICovXG4gICAgSW5kZW50QWN0aW9uW0luZGVudEFjdGlvbltcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIC8qKlxuICAgICAqIEluc2VydCBuZXcgbGluZSBhbmQgaW5kZW50IG9uY2UgKHJlbGF0aXZlIHRvIHRoZSBwcmV2aW91cyBsaW5lJ3MgaW5kZW50YXRpb24pLlxuICAgICAqL1xuICAgIEluZGVudEFjdGlvbltJbmRlbnRBY3Rpb25bXCJJbmRlbnRcIl0gPSAxXSA9IFwiSW5kZW50XCI7XG4gICAgLyoqXG4gICAgICogSW5zZXJ0IHR3byBuZXcgbGluZXM6XG4gICAgICogIC0gdGhlIGZpcnN0IG9uZSBpbmRlbnRlZCB3aGljaCB3aWxsIGhvbGQgdGhlIGN1cnNvclxuICAgICAqICAtIHRoZSBzZWNvbmQgb25lIGF0IHRoZSBzYW1lIGluZGVudGF0aW9uIGxldmVsXG4gICAgICovXG4gICAgSW5kZW50QWN0aW9uW0luZGVudEFjdGlvbltcIkluZGVudE91dGRlbnRcIl0gPSAyXSA9IFwiSW5kZW50T3V0ZGVudFwiO1xuICAgIC8qKlxuICAgICAqIEluc2VydCBuZXcgbGluZSBhbmQgb3V0ZGVudCBvbmNlIChyZWxhdGl2ZSB0byB0aGUgcHJldmlvdXMgbGluZSdzIGluZGVudGF0aW9uKS5cbiAgICAgKi9cbiAgICBJbmRlbnRBY3Rpb25bSW5kZW50QWN0aW9uW1wiT3V0ZGVudFwiXSA9IDNdID0gXCJPdXRkZW50XCI7XG59KShJbmRlbnRBY3Rpb24gfHwgKEluZGVudEFjdGlvbiA9IHt9KSk7XG5leHBvcnQgdmFyIENvbXBsZXRpb25JdGVtS2luZDtcbihmdW5jdGlvbiAoQ29tcGxldGlvbkl0ZW1LaW5kKSB7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIk1ldGhvZFwiXSA9IDBdID0gXCJNZXRob2RcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRnVuY3Rpb25cIl0gPSAxXSA9IFwiRnVuY3Rpb25cIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiQ29uc3RydWN0b3JcIl0gPSAyXSA9IFwiQ29uc3RydWN0b3JcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRmllbGRcIl0gPSAzXSA9IFwiRmllbGRcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiVmFyaWFibGVcIl0gPSA0XSA9IFwiVmFyaWFibGVcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiQ2xhc3NcIl0gPSA1XSA9IFwiQ2xhc3NcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiU3RydWN0XCJdID0gNl0gPSBcIlN0cnVjdFwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJJbnRlcmZhY2VcIl0gPSA3XSA9IFwiSW50ZXJmYWNlXCI7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIk1vZHVsZVwiXSA9IDhdID0gXCJNb2R1bGVcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiUHJvcGVydHlcIl0gPSA5XSA9IFwiUHJvcGVydHlcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRXZlbnRcIl0gPSAxMF0gPSBcIkV2ZW50XCI7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIk9wZXJhdG9yXCJdID0gMTFdID0gXCJPcGVyYXRvclwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJVbml0XCJdID0gMTJdID0gXCJVbml0XCI7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIlZhbHVlXCJdID0gMTNdID0gXCJWYWx1ZVwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJDb25zdGFudFwiXSA9IDE0XSA9IFwiQ29uc3RhbnRcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRW51bVwiXSA9IDE1XSA9IFwiRW51bVwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJFbnVtTWVtYmVyXCJdID0gMTZdID0gXCJFbnVtTWVtYmVyXCI7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIktleXdvcmRcIl0gPSAxN10gPSBcIktleXdvcmRcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiVGV4dFwiXSA9IDE4XSA9IFwiVGV4dFwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJDb2xvclwiXSA9IDE5XSA9IFwiQ29sb3JcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRmlsZVwiXSA9IDIwXSA9IFwiRmlsZVwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJSZWZlcmVuY2VcIl0gPSAyMV0gPSBcIlJlZmVyZW5jZVwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJDdXN0b21jb2xvclwiXSA9IDIyXSA9IFwiQ3VzdG9tY29sb3JcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRm9sZGVyXCJdID0gMjNdID0gXCJGb2xkZXJcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiVHlwZVBhcmFtZXRlclwiXSA9IDI0XSA9IFwiVHlwZVBhcmFtZXRlclwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJTbmlwcGV0XCJdID0gMjVdID0gXCJTbmlwcGV0XCI7XG59KShDb21wbGV0aW9uSXRlbUtpbmQgfHwgKENvbXBsZXRpb25JdGVtS2luZCA9IHt9KSk7XG5leHBvcnQgdmFyIENvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGU7XG4oZnVuY3Rpb24gKENvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUpIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3Qgd2hpdGVzcGFjZS9pbmRlbnRhdGlvbiBvZiBtdWx0aWxpbmUgaW5zZXJ0IHRleHRzIHRvXG4gICAgICogbWF0Y2ggdGhlIGN1cnJlbnQgbGluZSBpbmRlbnRhdGlvbi5cbiAgICAgKi9cbiAgICBDb21wbGV0aW9uSXRlbUluc2VydFRleHRSdWxlW0NvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGVbXCJLZWVwV2hpdGVzcGFjZVwiXSA9IDFdID0gXCJLZWVwV2hpdGVzcGFjZVwiO1xuICAgIC8qKlxuICAgICAqIGBpbnNlcnRUZXh0YCBpcyBhIHNuaXBwZXQuXG4gICAgICovXG4gICAgQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZVtDb21wbGV0aW9uSXRlbUluc2VydFRleHRSdWxlW1wiSW5zZXJ0QXNTbmlwcGV0XCJdID0gNF0gPSBcIkluc2VydEFzU25pcHBldFwiO1xufSkoQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZSB8fCAoQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZSA9IHt9KSk7XG4vKipcbiAqIEhvdyBhIHN1Z2dlc3QgcHJvdmlkZXIgd2FzIHRyaWdnZXJlZC5cbiAqL1xuZXhwb3J0IHZhciBDb21wbGV0aW9uVHJpZ2dlcktpbmQ7XG4oZnVuY3Rpb24gKENvbXBsZXRpb25UcmlnZ2VyS2luZCkge1xuICAgIENvbXBsZXRpb25UcmlnZ2VyS2luZFtDb21wbGV0aW9uVHJpZ2dlcktpbmRbXCJJbnZva2VcIl0gPSAwXSA9IFwiSW52b2tlXCI7XG4gICAgQ29tcGxldGlvblRyaWdnZXJLaW5kW0NvbXBsZXRpb25UcmlnZ2VyS2luZFtcIlRyaWdnZXJDaGFyYWN0ZXJcIl0gPSAxXSA9IFwiVHJpZ2dlckNoYXJhY3RlclwiO1xuICAgIENvbXBsZXRpb25UcmlnZ2VyS2luZFtDb21wbGV0aW9uVHJpZ2dlcktpbmRbXCJUcmlnZ2VyRm9ySW5jb21wbGV0ZUNvbXBsZXRpb25zXCJdID0gMl0gPSBcIlRyaWdnZXJGb3JJbmNvbXBsZXRlQ29tcGxldGlvbnNcIjtcbn0pKENvbXBsZXRpb25UcmlnZ2VyS2luZCB8fCAoQ29tcGxldGlvblRyaWdnZXJLaW5kID0ge30pKTtcbmV4cG9ydCB2YXIgU2lnbmF0dXJlSGVscFRyaWdnZXJLaW5kO1xuKGZ1bmN0aW9uIChTaWduYXR1cmVIZWxwVHJpZ2dlcktpbmQpIHtcbiAgICBTaWduYXR1cmVIZWxwVHJpZ2dlcktpbmRbU2lnbmF0dXJlSGVscFRyaWdnZXJLaW5kW1wiSW52b2tlXCJdID0gMV0gPSBcIkludm9rZVwiO1xuICAgIFNpZ25hdHVyZUhlbHBUcmlnZ2VyS2luZFtTaWduYXR1cmVIZWxwVHJpZ2dlcktpbmRbXCJUcmlnZ2VyQ2hhcmFjdGVyXCJdID0gMl0gPSBcIlRyaWdnZXJDaGFyYWN0ZXJcIjtcbiAgICBTaWduYXR1cmVIZWxwVHJpZ2dlcktpbmRbU2lnbmF0dXJlSGVscFRyaWdnZXJLaW5kW1wiQ29udGVudENoYW5nZVwiXSA9IDNdID0gXCJDb250ZW50Q2hhbmdlXCI7XG59KShTaWduYXR1cmVIZWxwVHJpZ2dlcktpbmQgfHwgKFNpZ25hdHVyZUhlbHBUcmlnZ2VyS2luZCA9IHt9KSk7XG4vKipcbiAqIEEgZG9jdW1lbnQgaGlnaGxpZ2h0IGtpbmQuXG4gKi9cbmV4cG9ydCB2YXIgRG9jdW1lbnRIaWdobGlnaHRLaW5kO1xuKGZ1bmN0aW9uIChEb2N1bWVudEhpZ2hsaWdodEtpbmQpIHtcbiAgICAvKipcbiAgICAgKiBBIHRleHR1YWwgb2NjdXJyZW5jZS5cbiAgICAgKi9cbiAgICBEb2N1bWVudEhpZ2hsaWdodEtpbmRbRG9jdW1lbnRIaWdobGlnaHRLaW5kW1wiVGV4dFwiXSA9IDBdID0gXCJUZXh0XCI7XG4gICAgLyoqXG4gICAgICogUmVhZC1hY2Nlc3Mgb2YgYSBzeW1ib2wsIGxpa2UgcmVhZGluZyBhIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIERvY3VtZW50SGlnaGxpZ2h0S2luZFtEb2N1bWVudEhpZ2hsaWdodEtpbmRbXCJSZWFkXCJdID0gMV0gPSBcIlJlYWRcIjtcbiAgICAvKipcbiAgICAgKiBXcml0ZS1hY2Nlc3Mgb2YgYSBzeW1ib2wsIGxpa2Ugd3JpdGluZyB0byBhIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIERvY3VtZW50SGlnaGxpZ2h0S2luZFtEb2N1bWVudEhpZ2hsaWdodEtpbmRbXCJXcml0ZVwiXSA9IDJdID0gXCJXcml0ZVwiO1xufSkoRG9jdW1lbnRIaWdobGlnaHRLaW5kIHx8IChEb2N1bWVudEhpZ2hsaWdodEtpbmQgPSB7fSkpO1xuLyoqXG4gKiBBIHN5bWJvbCBraW5kLlxuICovXG5leHBvcnQgdmFyIFN5bWJvbEtpbmQ7XG4oZnVuY3Rpb24gKFN5bWJvbEtpbmQpIHtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJGaWxlXCJdID0gMF0gPSBcIkZpbGVcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJNb2R1bGVcIl0gPSAxXSA9IFwiTW9kdWxlXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiTmFtZXNwYWNlXCJdID0gMl0gPSBcIk5hbWVzcGFjZVwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIlBhY2thZ2VcIl0gPSAzXSA9IFwiUGFja2FnZVwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIkNsYXNzXCJdID0gNF0gPSBcIkNsYXNzXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiTWV0aG9kXCJdID0gNV0gPSBcIk1ldGhvZFwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIlByb3BlcnR5XCJdID0gNl0gPSBcIlByb3BlcnR5XCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiRmllbGRcIl0gPSA3XSA9IFwiRmllbGRcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJDb25zdHJ1Y3RvclwiXSA9IDhdID0gXCJDb25zdHJ1Y3RvclwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIkVudW1cIl0gPSA5XSA9IFwiRW51bVwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIkludGVyZmFjZVwiXSA9IDEwXSA9IFwiSW50ZXJmYWNlXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiRnVuY3Rpb25cIl0gPSAxMV0gPSBcIkZ1bmN0aW9uXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiVmFyaWFibGVcIl0gPSAxMl0gPSBcIlZhcmlhYmxlXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiQ29uc3RhbnRcIl0gPSAxM10gPSBcIkNvbnN0YW50XCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiU3RyaW5nXCJdID0gMTRdID0gXCJTdHJpbmdcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJOdW1iZXJcIl0gPSAxNV0gPSBcIk51bWJlclwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIkJvb2xlYW5cIl0gPSAxNl0gPSBcIkJvb2xlYW5cIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJBcnJheVwiXSA9IDE3XSA9IFwiQXJyYXlcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJPYmplY3RcIl0gPSAxOF0gPSBcIk9iamVjdFwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIktleVwiXSA9IDE5XSA9IFwiS2V5XCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiTnVsbFwiXSA9IDIwXSA9IFwiTnVsbFwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIkVudW1NZW1iZXJcIl0gPSAyMV0gPSBcIkVudW1NZW1iZXJcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJTdHJ1Y3RcIl0gPSAyMl0gPSBcIlN0cnVjdFwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIkV2ZW50XCJdID0gMjNdID0gXCJFdmVudFwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIk9wZXJhdG9yXCJdID0gMjRdID0gXCJPcGVyYXRvclwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIlR5cGVQYXJhbWV0ZXJcIl0gPSAyNV0gPSBcIlR5cGVQYXJhbWV0ZXJcIjtcbn0pKFN5bWJvbEtpbmQgfHwgKFN5bWJvbEtpbmQgPSB7fSkpO1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyB0b1VpbnQzMiB9IGZyb20gJy4uL2NvcmUvdWludC5qcyc7XG52YXIgUHJlZml4U3VtSW5kZXhPZlJlc3VsdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQcmVmaXhTdW1JbmRleE9mUmVzdWx0KGluZGV4LCByZW1haW5kZXIpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnJlbWFpbmRlciA9IHJlbWFpbmRlcjtcbiAgICB9XG4gICAgcmV0dXJuIFByZWZpeFN1bUluZGV4T2ZSZXN1bHQ7XG59KCkpO1xuZXhwb3J0IHsgUHJlZml4U3VtSW5kZXhPZlJlc3VsdCB9O1xudmFyIFByZWZpeFN1bUNvbXB1dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByZWZpeFN1bUNvbXB1dGVyKHZhbHVlcykge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy5wcmVmaXhTdW0gPSBuZXcgVWludDMyQXJyYXkodmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMucHJlZml4U3VtVmFsaWRJbmRleCA9IG5ldyBJbnQzMkFycmF5KDEpO1xuICAgICAgICB0aGlzLnByZWZpeFN1bVZhbGlkSW5kZXhbMF0gPSAtMTtcbiAgICB9XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLmdldENvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLmluc2VydFZhbHVlcyA9IGZ1bmN0aW9uIChpbnNlcnRJbmRleCwgaW5zZXJ0VmFsdWVzKSB7XG4gICAgICAgIGluc2VydEluZGV4ID0gdG9VaW50MzIoaW5zZXJ0SW5kZXgpO1xuICAgICAgICB2YXIgb2xkVmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHZhciBvbGRQcmVmaXhTdW0gPSB0aGlzLnByZWZpeFN1bTtcbiAgICAgICAgdmFyIGluc2VydFZhbHVlc0xlbiA9IGluc2VydFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGlmIChpbnNlcnRWYWx1ZXNMZW4gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBVaW50MzJBcnJheShvbGRWYWx1ZXMubGVuZ3RoICsgaW5zZXJ0VmFsdWVzTGVuKTtcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG9sZFZhbHVlcy5zdWJhcnJheSgwLCBpbnNlcnRJbmRleCksIDApO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQob2xkVmFsdWVzLnN1YmFycmF5KGluc2VydEluZGV4KSwgaW5zZXJ0SW5kZXggKyBpbnNlcnRWYWx1ZXNMZW4pO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQoaW5zZXJ0VmFsdWVzLCBpbnNlcnRJbmRleCk7XG4gICAgICAgIGlmIChpbnNlcnRJbmRleCAtIDEgPCB0aGlzLnByZWZpeFN1bVZhbGlkSW5kZXhbMF0pIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSA9IGluc2VydEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZpeFN1bSA9IG5ldyBVaW50MzJBcnJheSh0aGlzLnZhbHVlcy5sZW5ndGgpO1xuICAgICAgICBpZiAodGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID49IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4U3VtLnNldChvbGRQcmVmaXhTdW0uc3ViYXJyYXkoMCwgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLmNoYW5nZVZhbHVlID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBpbmRleCA9IHRvVWludDMyKGluZGV4KTtcbiAgICAgICAgdmFsdWUgPSB0b1VpbnQzMih2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlc1tpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIGlmIChpbmRleCAtIDEgPCB0aGlzLnByZWZpeFN1bVZhbGlkSW5kZXhbMF0pIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSA9IGluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyLnByb3RvdHlwZS5yZW1vdmVWYWx1ZXMgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCwgY250KSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSB0b1VpbnQzMihzdGFydEluZGV4KTtcbiAgICAgICAgY250ID0gdG9VaW50MzIoY250KTtcbiAgICAgICAgdmFyIG9sZFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICB2YXIgb2xkUHJlZml4U3VtID0gdGhpcy5wcmVmaXhTdW07XG4gICAgICAgIGlmIChzdGFydEluZGV4ID49IG9sZFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4Q250ID0gb2xkVmFsdWVzLmxlbmd0aCAtIHN0YXJ0SW5kZXg7XG4gICAgICAgIGlmIChjbnQgPj0gbWF4Q250KSB7XG4gICAgICAgICAgICBjbnQgPSBtYXhDbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNudCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IFVpbnQzMkFycmF5KG9sZFZhbHVlcy5sZW5ndGggLSBjbnQpO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQob2xkVmFsdWVzLnN1YmFycmF5KDAsIHN0YXJ0SW5kZXgpLCAwKTtcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG9sZFZhbHVlcy5zdWJhcnJheShzdGFydEluZGV4ICsgY250KSwgc3RhcnRJbmRleCk7XG4gICAgICAgIHRoaXMucHJlZml4U3VtID0gbmV3IFVpbnQzMkFycmF5KHRoaXMudmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIGlmIChzdGFydEluZGV4IC0gMSA8IHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID0gc3RhcnRJbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeFN1bS5zZXQob2xkUHJlZml4U3VtLnN1YmFycmF5KDAsIHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyLnByb3RvdHlwZS5nZXRUb3RhbFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QWNjdW11bGF0ZWRWYWx1ZSh0aGlzLnZhbHVlcy5sZW5ndGggLSAxKTtcbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyLnByb3RvdHlwZS5nZXRBY2N1bXVsYXRlZFZhbHVlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGluZGV4ID0gdG9VaW50MzIoaW5kZXgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QWNjdW11bGF0ZWRWYWx1ZShpbmRleCk7XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlci5wcm90b3R5cGUuX2dldEFjY3VtdWxhdGVkVmFsdWUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDw9IHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlZml4U3VtW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSArIDE7XG4gICAgICAgIGlmIChzdGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeFN1bVswXSA9IHRoaXMudmFsdWVzWzBdO1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy52YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8PSBpbmRleDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeFN1bVtpXSA9IHRoaXMucHJlZml4U3VtW2kgLSAxXSArIHRoaXMudmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSA9IE1hdGgubWF4KHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSwgaW5kZXgpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVmaXhTdW1baW5kZXhdO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLmdldEluZGV4T2YgPSBmdW5jdGlvbiAoYWNjdW11bGF0ZWRWYWx1ZSkge1xuICAgICAgICBhY2N1bXVsYXRlZFZhbHVlID0gTWF0aC5mbG9vcihhY2N1bXVsYXRlZFZhbHVlKTsgLy9AcGVyZlxuICAgICAgICAvLyBDb21wdXRlIGFsbCBzdW1zICh0byBnZXQgYSBmdWxseSB2YWxpZCBwcmVmaXhTdW0pXG4gICAgICAgIHRoaXMuZ2V0VG90YWxWYWx1ZSgpO1xuICAgICAgICB2YXIgbG93ID0gMDtcbiAgICAgICAgdmFyIGhpZ2ggPSB0aGlzLnZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgbWlkID0gMDtcbiAgICAgICAgdmFyIG1pZFN0b3AgPSAwO1xuICAgICAgICB2YXIgbWlkU3RhcnQgPSAwO1xuICAgICAgICB3aGlsZSAobG93IDw9IGhpZ2gpIHtcbiAgICAgICAgICAgIG1pZCA9IGxvdyArICgoaGlnaCAtIGxvdykgLyAyKSB8IDA7XG4gICAgICAgICAgICBtaWRTdG9wID0gdGhpcy5wcmVmaXhTdW1bbWlkXTtcbiAgICAgICAgICAgIG1pZFN0YXJ0ID0gbWlkU3RvcCAtIHRoaXMudmFsdWVzW21pZF07XG4gICAgICAgICAgICBpZiAoYWNjdW11bGF0ZWRWYWx1ZSA8IG1pZFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgaGlnaCA9IG1pZCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY2N1bXVsYXRlZFZhbHVlID49IG1pZFN0b3ApIHtcbiAgICAgICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcmVmaXhTdW1JbmRleE9mUmVzdWx0KG1pZCwgYWNjdW11bGF0ZWRWYWx1ZSAtIG1pZFN0YXJ0KTtcbiAgICB9O1xuICAgIHJldHVybiBQcmVmaXhTdW1Db21wdXRlcjtcbn0oKSk7XG5leHBvcnQgeyBQcmVmaXhTdW1Db21wdXRlciB9O1xudmFyIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlKHZhbHVlcykge1xuICAgICAgICB0aGlzLl9jYWNoZUFjY3VtdWxhdGVkVmFsdWVTdGFydCA9IDA7XG4gICAgICAgIHRoaXMuX2NhY2hlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fYWN0dWFsID0gbmV3IFByZWZpeFN1bUNvbXB1dGVyKHZhbHVlcyk7XG4gICAgICAgIHRoaXMuX2J1c3RDYWNoZSgpO1xuICAgIH1cbiAgICBQcmVmaXhTdW1Db21wdXRlcldpdGhDYWNoZS5wcm90b3R5cGUuX2J1c3RDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVBY2N1bXVsYXRlZFZhbHVlU3RhcnQgPSAwO1xuICAgICAgICB0aGlzLl9jYWNoZSA9IG51bGw7XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlcldpdGhDYWNoZS5wcm90b3R5cGUuaW5zZXJ0VmFsdWVzID0gZnVuY3Rpb24gKGluc2VydEluZGV4LCBpbnNlcnRWYWx1ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdHVhbC5pbnNlcnRWYWx1ZXMoaW5zZXJ0SW5kZXgsIGluc2VydFZhbHVlcykpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1c3RDYWNoZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlcldpdGhDYWNoZS5wcm90b3R5cGUuY2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3R1YWwuY2hhbmdlVmFsdWUoaW5kZXgsIHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fYnVzdENhY2hlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5yZW1vdmVWYWx1ZXMgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCwgY250KSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3R1YWwucmVtb3ZlVmFsdWVzKHN0YXJ0SW5kZXgsIGNudCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1c3RDYWNoZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlcldpdGhDYWNoZS5wcm90b3R5cGUuZ2V0VG90YWxWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdHVhbC5nZXRUb3RhbFZhbHVlKCk7XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlcldpdGhDYWNoZS5wcm90b3R5cGUuZ2V0QWNjdW11bGF0ZWRWYWx1ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0dWFsLmdldEFjY3VtdWxhdGVkVmFsdWUoaW5kZXgpO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXJXaXRoQ2FjaGUucHJvdG90eXBlLmdldEluZGV4T2YgPSBmdW5jdGlvbiAoYWNjdW11bGF0ZWRWYWx1ZSkge1xuICAgICAgICBhY2N1bXVsYXRlZFZhbHVlID0gTWF0aC5mbG9vcihhY2N1bXVsYXRlZFZhbHVlKTsgLy9AcGVyZlxuICAgICAgICBpZiAodGhpcy5fY2FjaGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZUluZGV4ID0gYWNjdW11bGF0ZWRWYWx1ZSAtIHRoaXMuX2NhY2hlQWNjdW11bGF0ZWRWYWx1ZVN0YXJ0O1xuICAgICAgICAgICAgaWYgKGNhY2hlSW5kZXggPj0gMCAmJiBjYWNoZUluZGV4IDwgdGhpcy5fY2FjaGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FjaGUgaGl0IVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtjYWNoZUluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDYWNoZSBtaXNzIVxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0dWFsLmdldEluZGV4T2YoYWNjdW11bGF0ZWRWYWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHaXZlcyBhIGhpbnQgdGhhdCBhIGxvdCBvZiByZXF1ZXN0cyBhcmUgYWJvdXQgdG8gY29tZSBpbiBmb3IgdGhlc2UgYWNjdW11bGF0ZWQgdmFsdWVzLlxuICAgICAqL1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS53YXJtVXBDYWNoZSA9IGZ1bmN0aW9uIChhY2N1bXVsYXRlZFZhbHVlU3RhcnQsIGFjY3VtdWxhdGVkVmFsdWVFbmQpIHtcbiAgICAgICAgdmFyIG5ld0NhY2hlID0gW107XG4gICAgICAgIGZvciAodmFyIGFjY3VtdWxhdGVkVmFsdWUgPSBhY2N1bXVsYXRlZFZhbHVlU3RhcnQ7IGFjY3VtdWxhdGVkVmFsdWUgPD0gYWNjdW11bGF0ZWRWYWx1ZUVuZDsgYWNjdW11bGF0ZWRWYWx1ZSsrKSB7XG4gICAgICAgICAgICBuZXdDYWNoZVthY2N1bXVsYXRlZFZhbHVlIC0gYWNjdW11bGF0ZWRWYWx1ZVN0YXJ0XSA9IHRoaXMuZ2V0SW5kZXhPZihhY2N1bXVsYXRlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jYWNoZSA9IG5ld0NhY2hlO1xuICAgICAgICB0aGlzLl9jYWNoZUFjY3VtdWxhdGVkVmFsdWVTdGFydCA9IGFjY3VtdWxhdGVkVmFsdWVTdGFydDtcbiAgICB9O1xuICAgIHJldHVybiBQcmVmaXhTdW1Db21wdXRlcldpdGhDYWNoZTtcbn0oKSk7XG5leHBvcnQgeyBQcmVmaXhTdW1Db21wdXRlcldpdGhDYWNoZSB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyBTaW1wbGVXb3JrZXJTZXJ2ZXIgfSBmcm9tICcuLi9iYXNlL2NvbW1vbi93b3JrZXIvc2ltcGxlV29ya2VyLmpzJztcbmltcG9ydCB7IEVkaXRvclNpbXBsZVdvcmtlckltcGwgfSBmcm9tICcuL2NvbW1vbi9zZXJ2aWNlcy9lZGl0b3JTaW1wbGVXb3JrZXIuanMnO1xudmFyIGluaXRpYWxpemVkID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZShmb3JlaWduTW9kdWxlKSB7XG4gICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHZhciBlZGl0b3JXb3JrZXIgPSBuZXcgRWRpdG9yU2ltcGxlV29ya2VySW1wbChmb3JlaWduTW9kdWxlKTtcbiAgICB2YXIgc2ltcGxlV29ya2VyID0gbmV3IFNpbXBsZVdvcmtlclNlcnZlcihmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UobXNnKTtcbiAgICB9LCBlZGl0b3JXb3JrZXIpO1xuICAgIHNlbGYub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2ltcGxlV29ya2VyLm9ubWVzc2FnZShlLmRhdGEpO1xuICAgIH07XG59XG5zZWxmLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gSWdub3JlIGZpcnN0IG1lc3NhZ2UgaW4gdGhpcyBjYXNlIGFuZCBpbml0aWFsaXplIGlmIG5vdCB5ZXQgaW5pdGlhbGl6ZWRcbiAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICAgIGluaXRpYWxpemUobnVsbCk7XG4gICAgfVxufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=