//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the given number?
function largestPrimeFactor(number) {
        let n = number;
        let largestPrimeFactor = number;
        let i = 2;
        while (i <= n && n != 1) {
            if (n % i == 0) {
                n = n / i;
                largestPrimeFactor = i;
            }
            else {
                i = i+1;
            }
        }
  return largestPrimeFactor;
}

console.log(largestPrimeFactor(13195));
