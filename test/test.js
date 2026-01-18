const { numberToTamilWords } = require('../src/index.js');

// Basic test
console.log(numberToTamilWords("123")); // Should print Tamil words for 123
console.log(numberToTamilWords("3123wevw")); // Should print Tamil words for 123
console.log(numberToTamilWords("g2ew3")); // Should print Tamil words for 123
console.log(numberToTamilWords("31223r3")); // Should print Tamil words for 123
console.log(numberToTamilWords("613223")); // Should print Tamil words for 123
console.log(numberToTamilWords("7123g")); // Should print Tamil words for 123
