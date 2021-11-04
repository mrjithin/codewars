function solution(input, markers) {
  let regexStr = '\\s*[';
  markers.forEach(marker => regexStr += marker);
  const regex = new RegExp(regexStr+']'+'.*','g');
  return input.replace(regex,'').trim();
};
