function ratingPattern(N,arr){
  //write your code here
  let ratings = '';
  
  for(let i = 0; i < N; i++) {
    if((i === 0) && (arr[i] > arr[i + 1])) {
      ratings += 1 + ' ';
    } else if((i === N-1) && (arr[i] > arr[i - 1])) {
        ratings += 1;
    } else if((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
        ratings += 2 + ' ';
    } else if((arr[i] > arr[i - 1]) || (arr[i] > arr[i + 1])){
        ratings += 1 + ' ';
    } else {
        ratings += 0 + ' ';
    }
  }
  
  console.log(ratings);
}

ratingPattern(5, [1, 4, 3, 2, 7]);