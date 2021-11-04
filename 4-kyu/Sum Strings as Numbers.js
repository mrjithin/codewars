function sumStrings(...ints) { 
  return ints.map(BigInt).reduce((a,b)=> a+b,0n).toString();
}
