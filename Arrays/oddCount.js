function oddCount(n,A){
  //write your code here
  let count = 0;
  
  for(let i = 0; i < n; i++) {
    if(A[i] % 2 !== 0) {
      count++;
    }
  }
  
  if(count % 2 !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

oddCount(2, [1, 101]);