function add(x){
  const sum = y => add(x+y);
  sum.valueOf = () => x;
  return sum;
}
