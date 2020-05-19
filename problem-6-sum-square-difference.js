//The sum of the squares of the first ten natural numbers is,
//12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,
//(1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
  // Good luck!
  let a = 0,b=0,c=0;
  for(let i = 1;i<=n;i++){
    a+= (Math.pow(i,2));
    b+=i
  }
c=Math.pow(b,2)-a

console.log(a);
console.log(b);
  return c;
}

console.log(sumSquareDifference(100));
