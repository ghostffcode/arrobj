# arrobj
---
## Easily modify Arrays and Objects in javascript

## Installation
- via npm:
```bash
npm install arrobj
```
- via bower
```bash
bower install arrobj
```

## Usage
- In node:
```javascript
// vanilla javascript
const arrobj = require("arrobj");
// es6 syntax
import * as arrobj from "arrobj";
```

- In browser:
```html
<script src="path/to/arrobj.js"></script>
```

### Convert Array to Object
Below code:
```javascript
var values = ['bliss', 21, ['soccer', 'basketball']];
var key = ['name', 'age', 'sports'];
console.log(arrobj.toObj(values, key));
```
Will create object:
```javascript
{
  name: 'bliss',
  age: 21,
  sports: ['soccer', 'basketball']
}
```
If the key array is shorter than the values array, the index of the values in the array will used instead. The produced array for the above use case will be:
```javascript
{
  0: 'bliss',
  1: 21,
  2: ['soccer', 'basketball']
}
```

### Convert Object to Array
To convert an object to an array, the below case:
```javascript
var obj = {
  name: 'bliss',
  age: 21,
  sports: ['soccer', 'basketball']
};

console.log(arr.toArr(obj));
```
Will produce array:
```javascript
['bliss', 21, ['soccer', 'basketball']]
```

## Other Methods
### Arrays

* __isFlat(array)__: Checks if an array has a nested array.

* __isEqual(array1, array2)__: Compares two arrays by length.

* __isSame(array1, array2)__: Checks if the values in the array are the same, works for deep level comparison.

* __Arr(array)__: Checks if an argument is an array.

### Objects

* __isObj(obj)__: Checks if argument is an object, returns true or false.


## Contributing
- Fork this repo.
- clone and do you.
- send a pull request.
