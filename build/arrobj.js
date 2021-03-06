(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["arrobj"] = factory();
	else
		root["arrobj"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	/*
	********************** Every Conversion and checks from Arrays starts here **************************
	*/
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.isFlat = isFlat;
	exports.isEqual = isEqual;
	exports.isSame = isSame;
	exports.Arr = Arr;
	exports.toObj = toObj;
	exports.isObj = isObj;
	exports.toArr = toArr;
	function isFlat(arr) {
	  if (!this.Arr(arr)) {
	    return false;
	  }
	
	  for (var i = 0; i < arr.length; i++) {
	    if (this.Arr(arr[i])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	function isEqual(arr1, arr2) {
	  if (!this.Arr(arr1) || !this.Arr(arr2)) {
	    return false;
	  }
	  return arr1.length === arr2.length;
	}
	
	function isSame(arr1, arr2) {
	  if (!this.Arr(arr1) || !this.Arr(arr2)) {
	    return false;
	  }
	
	  return JSON.stringify(arr1) === JSON.stringify(arr2);
	};
	
	function Arr(arr) {
	  return Array.isArray(arr);
	}
	
	function toObj(arr) {
	  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	  var res = {};
	
	  // is keys array empty?
	  var keysVal = keys === [];
	
	  if (!this.Arr(arr) || !keysVal && !this.Arr(keys)) {
	    return res;
	  }
	
	  var keysLength = keys.length;
	  var arrLength = arr.length;
	
	  var callback = function callback(val, i) {
	    keys[i] !== undefined ? res[keys[i]] = val : res[i] = val;
	  };
	
	  if (keysVal || arrLength > keysLength) {
	    callback = function callback(val, i) {
	      res[i] = val;
	    };
	  }
	  arr.forEach(callback);
	
	  return res;
	};
	
	/*
	********************** Conversion and checks from Objects starts here **************************
	*/
	
	function isObj(obj) {
	  if (obj === null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || this.Arr(obj)) {
	    return false;
	  }
	  return true;
	};
	
	function toArr(obj) {
	  var res = [];
	  if (!this.isObj(obj)) {
	    return res;
	  }
	
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      if (this.isObj(obj[key])) {
	        res.push(this.toArr(obj[key]));
	      } else {
	        res.push(obj[key]);
	      }
	    }
	  }
	
	  return res;
	};
	
	console.log('arrObj Loaded!');

/***/ }
/******/ ])
});
;
//# sourceMappingURL=arrobj.js.map