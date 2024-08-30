function profilePic(L, W, lengthUploaded, widthUploaded){
  //write your code here
  if((lengthUploaded >= L) && (widthUploaded >= W)) {
    console.log("Upload");
  } else if((lengthUploaded <= L) && (widthUploaded >= W)) {
    console.log("Increase Length");
  } else {
    console.log("Increase Width");
  }
}

profilePic(12, 14, 8, 19);