// Colorful Number - A number can be broken into substrings of various lengths: 3245, for example, can be broken into substrings 3,2,4,5, 32, 24, 45, 324, 245. A number is "colorful" if the product of the digits in each of its sub strings is distinct. 3245 is "colorful" for instance, because the substrings all have different products: 3, 2, 4, 5, 6  (32), 8  (24), 20 (45), and 40 (245). However 2346 is "not colorful" because there are cases where the product of on substring's digits (234=24) is equal to the product of another substrings digits (46=24). 

// write a function that takes a number as an input and returns if the number is "colorful" or "not colorful". Your Functionshould not assume a valid input (a positive whole number).

function colorfulNumbers(num) {
  let productInventory = {};
  let stringifiedNum = num.toString();
  let substring = '';
  let product;
  for (let i = 0; i < stringifiedNum.length; i++) {
    substring = '';
    if (i === 0) { 
      for (let j = i; j < stringifiedNum.length - 1; j++) {
        substring += stringifiedNum[j];
        product = 1;
        for (let k = 0; k < substring.length; k++) {
          product *= substring[k];
        }
        if (productInventory[product]) {
          return 'not colorful'
        } else {
          productInventory[product] = true;
        }
      }
    }
    else {
      for (let j = i; j < stringifiedNum.length; j++) {
        substring += stringifiedNum[j];
        product = 1;
        for (let k = 0; k < substring.length; k++) {
          product *= substring[k];
        }
        if (productInventory[product]) {
          return 'not colorful'
        } else {
          productInventory[product] = true;
        }
      }
    }
  }
  return 'colorful'
}

console.log(colorfulNumbers(3245));