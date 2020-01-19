function largestPalindromeProduct(n) {
  // Good luck!
  let product = 0, largestPalindromeProduct = 0;
const lowerBound = Number(`1${Array.from({length:n}).join(0)}`);
  const upperBound= Number(`${Array.from({length: n+1}).join(9)}`);
console.log(lowerBound)
console.log(upperBound)
for(let i = lowerBound; i<=upperBound; i++)
    for(let j = lowerBound; j<=upperBound; j++){
      product = i * j;
      if(isPalindrom(product) && product>largestPalindromeProduct)
      largestPalindromeProduct = product
    }

console.log(largestPalindromeProduct)
  return largestPalindromeProduct;
}

function isPalindrom(n){
  
  const numbertoString = n.toString();
  return (Array.from(numbertoString).reverse().toString()
  === Array.from(numbertoString).toString());
}

largestPalindromeProduct(3);
