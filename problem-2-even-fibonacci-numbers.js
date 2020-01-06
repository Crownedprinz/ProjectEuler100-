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
