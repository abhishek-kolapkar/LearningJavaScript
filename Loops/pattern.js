function patternOfN(N) {
  // Write code here
  for(let i = 0; i < N; i++) {
    let bag = '';
    
    for (let j = 1; j <= N; j++) {
      bag += ((i * N) + j) + ' ';
    }
    
    console.log(bag);
  }
}

patternOfN(3);