// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

const name = prompt("Please enter your name:")
let age = prompt("Please enter your age:")
for(;isNaN(+age);){
    age = prompt("Please enter your age:")
}
if(age>18){
    console.log(`Hello, ${name}`);
} else{
    console.log(`Hi, ${name}`);
}