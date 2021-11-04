function generateHashtag(str) {
  if(!str.trim()) return false;
  const words = str.split(' ').map(word => titleCase(word.trim())[0]);
  const result = '#' + words.join('');
  if(result.length > 140 || !result) return false;
  return result;
}
function titleCase(...words){
  return words.map(word => {
    if(!word) return '';
    return word[0].toUpperCase() + word.substr(1);
  });
}
