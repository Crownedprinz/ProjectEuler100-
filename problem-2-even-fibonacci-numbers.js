//Each new term in the Fibonacci sequence is generated by adding the 
//previous two terms. By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not
//exceed n, find the sum of the even-valued terms.
function fiboEvenSum(n) {
  // You can do it!
  let previous = 0, current = 1, result = 0;
  for(let i = 0;i<n ;i++){
    const next = previous + current;
    // if(next>4000000){
    //   break;
    // }
    if(next % 2 ===0){
    result += next;
    }
    
    previous = current;
    current = next;
  }
  return result;
}

fiboEvenSum(10);
