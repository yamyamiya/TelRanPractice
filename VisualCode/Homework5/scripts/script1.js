// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

let number = prompt("Please enter your number")
while(true){
if(isNaN(number)) number = prompt("Incorrect input. Please enter a number.");
else break;
}
console.log(0.1*number);
