Convert numbers to Tamil words (தமிழ் எழுத்துக்கள்)

## Installation

```bash
npm install number-to-tamil-words
```

## Usage

```js
const { numberToTamilWords } = require('number-to-tamil-words');

console.log(numberToTamilWords(123)); // Output: நூற்று இருபத்து மூன்று
```

## API

### numberToTamilWords(number)

**Parameters:**

- `number` (string | number): The number to convert to Tamil words. Accepts up to 10 digits.

**Returns:**

- `string`: The Tamil words representation of the number.

**Example:**

```js
numberToTamilWords(2024); // இரு ஆயிரத்தி இருபத்து நான்கு
```

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Issues

Please report issues at [https://github.com/Natchathra/number-to-tamil-words/issues](https://github.com/Natchathra/number-to-tamil-words/issues)