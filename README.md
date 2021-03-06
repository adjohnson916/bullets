# bullets [![NPM version](https://badge.fury.io/js/bullets.svg)](http://badge.fury.io/js/bullets)

> Generate a plain-text and markdown formatted lists or tables of contents, with proper indentation, bullets, numbers, letters, roman numerals or custom characters.

## Install with [npm](npmjs.org)

```bash
npm i bullets --save
```

## Usage

```js
var bullets = require('bullets');
```

## Example

**Roman numerals**

```js
var list = [
  {text: 'Item a...', lvl: 0}, 
  {text: 'Item b...', lvl: 1}, 
  {text: 'Item c...', lvl: 2},
  {text: 'Item d...', lvl: 2},
  {text: 'Item e...', lvl: 2},
];

// let's generate 100 numerals, in case our list grows.
var actual = bullets(list, {chars: '1..100'}, function (ch) {
  return romanize(ch) + '.';
});
```

Results in:

```
I. Item a...
  II. Item b...
    III. Item c...
    III. Item d...
    III. Item e...
```

## API
### [list](index.js#L55)

Pass an array of list-item objects to generate a formatted list or table of contents. Uses [list-item] for generating the actual items.

* `list` **{Array}**: Array of item objects with `text` and `lvl` properties    
* `opts` **{Object}**: Options to pass to [list-item].    
* `fn` **{Function}**: pass a function [expand-range] to modify the bullet for an item as it's generated.    

```js
var list = [
  {text: 'This is item 1', lvl: 0},
  {text: 'This is item 2', lvl: 0},
  {text: 'This is item 3', lvl: 0},
  {text: 'This is sub-item A', lvl: 2},
  {text: 'This is sub-item B', lvl: 2},
  {text: 'This is sub-item C', lvl: 2},
];
bullets([{text: 'This is a list item', lvl: 0}]);

// Results in
// '- This is item 1'
// '- This is item 2'
// '- This is item 3'
// '  * This is sub-item A'
// '  * This is sub-item B'
// '  * This is sub-item C'
```



## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/bullets/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the  license

***

_This file was generated by [verb](https://github.com/assemble/verb) on February 21, 2015._

[list-item]: https://github.com/jonschlinkert/list-item
[expand-range]: https://github.com/jonschlinkert/expand-range
