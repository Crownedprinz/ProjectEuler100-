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

largestPrimeFactor(13195);
