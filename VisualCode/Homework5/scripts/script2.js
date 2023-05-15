// Написать программу, которая получает два числа и выводит наименьшее
let number1 = prompt("Please add the first number")
while(true){
    if(isNaN(number1)) number1 = prompt("Incorrect input. Please enter a number.");
    else break;
    }
let number2= prompt("Please add the second number")
while(true){
    if(isNaN(number2)) number2 = prompt("Incorrect input. Please enter a number.");
    else break;
    }
if(number1<number2) console.log(`The smaller number is first number: ${number1}`);
if(number2<number1) console.log(`The smaller number is second number: ${number2}`);
else console.log(`The numbers are equal.`);
