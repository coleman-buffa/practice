//Function approach above the function
//More descriptive naming

function maximumOccurringCharacter(text) {

  let characterCounts = {};

  let maxCount = 0;
  let maxChar;
  for (let i = 0; i < text.length; i++) {
      let c = text[i];
      let count = characterCounts[c] ? characterCounts[c] + 1 : 1;
      characterCounts[c] = count;
      if (count > maxCount) {
        maxCount = count;
        maxChar = c;
      }
  }
  return maxChar
}

console.log(maximumOccurringCharacter('helloworld'));
