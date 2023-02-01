// Assignment 3 - Conditional Statements & Loops

// a. A JavaScript program that accepts two integers and displays the larger of the two

var number1, number2;

number1 = prompt(`What is the first number?`);
number2 = prompt(`What is the second number?`);

if(parseInt(number1) > parseInt(number2)){
  console.log(`${number1} is larger than ${number2}.`)
}else if(parseInt(number2) > parseInt(number1)){
  console.log(`${number2} is larger than ${number1}.`)
}else{
  console.log(`Both numbers are equal.`)
};

// b. A JavaScript program that checks whether an integer is an even or an odd number.

const number = prompt(`Enter a number: `);

if(number % 2 == 0){
  console.log(`${number} is even.`)
}else{
  console.log(`${number} is odd.`)
};