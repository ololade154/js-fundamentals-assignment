let evenCount = 0;
let oddCount = 0;
let number = 1;
let result = '';
for (number; number <= 20; number++) {
  if (number % 2 === 0) {
    result += `${number} is even `;
    evenCount++;
  } else {
    result += `${number} is odd `;
    oddCount++;
  }
}
console.log(result);
console.log(`\nSummary: Even numbers: ${evenCount} Odd numbers: ${oddCount}`);
