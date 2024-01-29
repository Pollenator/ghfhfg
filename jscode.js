function findMissingNumber(nums) {
    // Calculate the expected sum using the formula: n * (n + 1) / 2
    const n = nums.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
  
    // Calculate the actual sum of the numbers in the array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
    // The missing number is the difference between the expected sum and the actual sum
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber;
  }
  
  // Example usage:
  const example1 = findMissingNumber([3, 0, 1]);
  console.log("Example 1:", example1);
  
  const example2 = findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
  console.log("Example 2:", example2);
  
  const example3 = findMissingNumber([0, 1]);
  console.log("Example 3:", example3);