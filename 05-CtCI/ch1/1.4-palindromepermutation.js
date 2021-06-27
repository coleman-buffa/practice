function palidromePermutation (str) {
  let charInventory = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (charInventory[char]) {
      charInventory[char]++;
    } else {
      charInventory[char] = 1;
    }
  }
  let oddFlag = false;
  for (const char in charInventory) {
    if (oddFlag) {
      return false
    }
    if (charInventory[char] % 2 > 0) {
      oddFlag = true;
    }
  }
  return true
}

console.log(palidromePermutation('tacocat'));