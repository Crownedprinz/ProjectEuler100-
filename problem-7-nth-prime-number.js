//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
//we can see that the 6th prime is 13.
//What is the nth prime number?

//The Idea is to test all odd numbers (even numbers are NOT prime, so…why test them?).
//Generate on-the-go an array with each prime number detected, so, while testing forward (from 3 to sqrt(n), 
//against that array, you will dramatically reduce the amount of tests. 
//variable j could come from that array. 
//The array will grow every time you find a new prime.
function nthPrime(n) {
    let primes = [2];
    let higherDivisorLimit;
    let isPrime;
    //This loops over n to produce the prime factors for n numbers
    for(let i = 3; primes.length < n; i+=2) {
      higherDivisorLimit = Math.sqrt(i) + 1;
      isPrime = true;
      //This checks if i is a prime factor
      for(let j = 0; primes[j] < higherDivisorLimit; j++) {
        if(i % primes[j] === 0) {
          isPrime = false;
          break;
        }
      }
      //This returns the highest prime factor in the array
      if(isPrime) primes.push(i);
    }
    return primes[primes.length - 1];
}

console.log(nthPrime(6));
