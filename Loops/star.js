function patternPrinting3(N){
  //write code here
  for(let i = 1; i <= N; i++) {
    let bag = '';
    
    for(let j = 1; j <= N; j++) {
      if((j <= N-1) && ((i > 1) && (i < N))) {
        bag += '  ';
      } else {
        bag += '* '
      }
    }
    
    console.log(bag);
  }
}

patternPrinting3(5);