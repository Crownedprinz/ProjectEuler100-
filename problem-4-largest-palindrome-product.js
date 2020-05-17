//A palindromic number reads the same both ways. The largest palindrome 
//made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two n-digit numbers.
function largestPalindromeProduct(n) {
  // Good luck!
  let product = 0, largestPalindromeProduct = 0;
const lowerBound = Number(`1${Array.from({length:n}).join(0)}`);
  const upperBound= Number(`${Array.from({length: n+1}).join(9)}`);
for(let i = lowerBound; i<=upperBound; i++)
    for(let j = lowerBound; j<=upperBound; j++){
      product = i * j;
      if(isPalindrom(product) && product>largestPalindromeProduct)
      largestPalindromeProduct = product
    }

  return largestPalindromeProduct;
}

function isPalindrom(n){
  
  const numbertoString = n.toString();
  return (Array.from(numbertoString).reverse().toString()
  === Array.from(numbertoString).toString());
}

console.log(largestPalindromeProduct(3));
