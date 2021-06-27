function URLify (str) {
  let URL = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      URL += '%20';
    } else {
      URL += str[i];
    }
  }
  return URL
}

console.log(URLify('Mr John Smith'));