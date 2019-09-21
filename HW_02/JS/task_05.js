'use strict';

const checkForSpam = function (str) { 
  let arrStr = str.toLowerCase().split(' ');


  for (let i = 0; i < arrStr.length; i += 1) { 
    let word = arrStr[i];
    if (arrStr[i].includes('spam') || arrStr[i].includes('sale')) {
      return true;
    } 
  }
  return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true