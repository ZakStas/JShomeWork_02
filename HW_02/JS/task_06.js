'use strict';

let input;
const numbers = [];
let total = 0;
input = prompt('Введите число!'); 
console.log(input);

while (input !== null) {
  const numberInput = Number(input);
  console.log(numberInput);
  numbers.push(numberInput);
  input = prompt('Введите число:');
}

console.log(numbers);

const addSum = function(array) {
  let summ = 0;
  for (let element of array) {
    summ += element;
  }
  return summ;
}

total = addSum(numbers);

const message = `Общая сумма чисел равна ${total}`;
 
console.log(message);

