
// EXERCISE 15
// Please, read the exercise-info/concat.md to get the initial data of what is the expected result of this exercise.
// concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.concat() method in your code

export function concatArrays(arr1, arr2) {
  // Your code goes here...
  const concatResult = [];
  const concatSource1 = arr1;
  const concatSource2 = arr2;

  for (let i = 0; i < concatSource1.length; i++) {
    concatResult.push(concatSource1[i]);
  }
  
  for (let j = 0; j < concatSource2.length; j++) {
    concatResult.push(concatSource2[j]);
  } 
  return concatResult;  
}
console.log(concatArrays(['d', 'r', 'a'], ['f', 'y']));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
