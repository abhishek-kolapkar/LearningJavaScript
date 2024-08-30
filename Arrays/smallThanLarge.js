function smallerThanLargest(N,arr){
  //write your code here
  let max = arr[0];
  let bag = '';
  
  for(let i = 0; i < N; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  
  for(let i = 0; i < N; i++) {
    if(arr[i] < max) {
      bag += '-1 ';
    } else {
      bag += arr[i] + ' ';
    }
  }
  
  console.log(bag);
}

smallerThanLargest(3, [1, 3, 2]);