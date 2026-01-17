// Quick test to debug getCachedDaysObject issue
const { getCachedDaysObject } = require('../utils/performance');

console.log('Testing getCachedDaysObject for February 2024:');
const result = getCachedDaysObject(undefined, undefined, 2024, 2);
console.log('Result length:', result.length);
console.log('Result array:', result.slice(0, 35)); // Show first 35 elements

if (result.length === 31) {
  console.log('ISSUE: February 2024 returns 31 days instead of 29!');
}
