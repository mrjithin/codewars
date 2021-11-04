function solution(number){
  let arrayToSum = [];
  if(number < 0) return 0;
  for(let i = 1; i < number;i++){
    if(i % 3 ===0) arrayToSum.push(i);
    else if(i % 5 === 0) arrayToSum.push(i);
  }
  return arrayToSum.reduce((a,b)=> a+b,0);
}
