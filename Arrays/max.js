function maximumInArray(N,arr){
  //write code here
  let max = arr[0];
  
  for(let i = 0; i < N; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  
  console.log(max);
}


maximumInArray(5, [1, 2, 3, 4, 5]);