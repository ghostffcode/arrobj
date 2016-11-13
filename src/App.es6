"use strict";

/*
********************** Every Conversion and checks from Arrays starts here **************************
*/
export function isFlat(arr) {
  if (!this.Arr(arr)) {
    return false
  }

  for (var i = 0; i < arr.length; i++) {
    if (this.Arr(arr[i])) {
      return false;
    }
  }

  return true;
}

export function isEqual(arr1, arr2) {
  if (!this.Arr(arr1) || !this.Arr(arr2)) {
    return false;
  }
  return (arr1.length === arr2.length);
}

export function isSame(arr1, arr2) {
  if (!this.Arr(arr1) || !this.Arr(arr2)) {
    return false;
  }

  return (JSON.stringify(arr1) === JSON.stringify(arr2));
};

export function Arr(arr) {
  return Array.isArray(arr);
}

export function toObj (arr, keys = null) {
  let res = {};

  // is keys array null?
  let keysVal = (keys === null);

  if (!this.Arr(arr) || (!keysVal && !this.Arr(keys))) {
    return res;
  }

  let keysLength = keys.length;
  let arrLength = arr.length;

  (arrLength < keysLength) ? console.log("val < keys") : '';
  (arrLength > keysLength) ? console.log("val > keys: using indexes instead") : '';

  let callback = function (val, i) {
    (keys[i] !== undefined) ? res[keys[i]] = val : res[i] = val;
  };

  if (keysVal || (arrLength > keysLength)) {
    callback = function (val, i) {
      res[i] = val;
    }
  }
  arr.forEach(callback);

  return res;
};


console.log('arrObj Loaded!');
