# Constant Case Strings

Constant case a string (digits will be glued).

Supports Unicode (non-ASCII characters) and non-string entities, such as objects with a `toString` property, numbers and booleans. Empty values (`null` and `undefined`) will result in an empty string.

## Installation

```
npm install constant-case-strings --save
```

## Usage

```javascript
var constantCaseStrings = require('constant-case-strings')

constantCaseStrings('string')        //=> "STRING"
constantCaseStrings('camelCase')     //=> "CAMEL_CASE"
constantCaseStrings('sentence case') //=> "SENTENCE_CASE"

constantCaseStrings('sentence case12') //=> "SENTENCE_CASE12"
constantCaseStrings('sentence case12order') //=> "SENTENCE_CASE12_ORDER"


```

## License

MIT
