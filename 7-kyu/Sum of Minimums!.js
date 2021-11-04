function sumOfMinimums(arr) {
  let min = [];
  for(let elem of arr){
    min.push(Math.min(...elem));
  }
  return min.reduce((a,b)=> a+b,0);
}
