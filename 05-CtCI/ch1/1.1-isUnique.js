// function checkUnique(string) {
//   let inventory = {};
//   for (let i = 0; i < string.length; i++) {
//     if (inventory[string[i]]) {
//       return false
//     } else {
//       inventory[string[i]] = true;
//     }
//   }
//   return true
// }

//No helper data structure
function checkUnique(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (i !== j && string[i] === string[j]) {
          return false
        }
      }
    }  
  return true
}

console.log(checkUnique('asdfg'));
console.log(checkUnique('aasdfg'));