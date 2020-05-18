//2520 is the smallest number that can be divided by each of the numbers
//from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of
//the numbers from 1 to n?
function smallestMult(n) {
    var numbers = [];
    for (let step = 1; step <= n; step++) {
        numbers.push(step);
      }
  function isDividable(num) {
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (num % numbers[i] !== 0) return false;
    }
    return true;
  }

  let counter = 1;
  while (true) {
    if (isDividable(counter)) break;
    counter++;
  }
  return counter;
}

console.log(smallestMult(5));
