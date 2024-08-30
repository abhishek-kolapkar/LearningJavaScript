function averageOfAll(n, arr){
  //write code here
  let sum = 0;
  
  for(let i = 0; i < n; i++) {
    sum += arr[i];
  }
  
  let average = sum / n;
  
  console.log(Math.ceil(average));
}

averageOfAll(4, [2, 5, 0, 9]);