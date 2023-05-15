// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

let number = +prompt("Please enter your number:")
while(true){
    if(isNaN(number)) number = prompt("Incorrect input. Please enter a number.");
    else break;
    }
if(number===100) alert("The number is equal 100.");
if(number>100) alert("The number is more than 100.");
else alert("The number is less than 100.");

