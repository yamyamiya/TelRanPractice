// let name = prompt("Write your name")
// console.log(`Hello ${name}`);

// function printName(){
//     let name = prompt("Write your name")
// console.log(`Hello ${name}`);
// }

// printName()

// function checkNumber(){
//     let number = prompt("Please enter your number")
//     if(number%2===0){
//         console.log("Yes");
//     } else{
//         console.log("No");
//     }
// }
// checkNumber()

// let number = prompt("Please enter your number")
// function checkNumber(number){
//     if(number%2===0){
//                 console.log("Yes");
//             } else{
//                 console.log("No");
//             }
// }

// checkNumber(7)
// checkNumber(15)
// checkNumber(2)
// checkNumber(number)

// let number1 = prompt("Please enter your number")
// let number2 = prompt("Please enter your number")
// function checkMax(number1, number2){
//     if(number1>number2){
//         console.log(number1);
//             } else if(number2>number1){
//                 console.log(number2);
//             }
//     }
// checkMax(number1, number2)

// function pow(a,b=2){
//     let result = a**b;
//     return result

// }
// pow(2,3)
// pow(3,2)
// pow(2,5)
// pow(2)

// let c = pow(2,5)
// console.log(c);

// function pow(a,b=2){
//     let result = a**b;
//     return result

// }

// let a = 3
// let b = 4
// let c = pow((pow(a)+pow(b)),0.5)
// console.log(c);


// let number = prompt("Enter number")
// function check(number){
// if(number%2===0){
//     return true
// }else {
//     return false
// }
// }

// function check(number){
//    return number%2===0}
// console.log(check(number))


// const  createArr = function(number){
//     const array = []
//     for (let index = 0; index < number; index++) {
//         array.push(index);  
//     }
//     return array
// }
// console.log(createArr(6));

const printHello = function(){
    console.log("Hello");
}
    const obj = {
        print: printHello,
        cout: console.log,
        printWarn: console.warn,
        printError: console.error,
        printSecond: function(str){
            console.log(str);
        }
    }

    obj.printError("Hello from printError")
    obj.printSecond("Hello from Pringsecond")


    const cout = console.log
    cout("Log from cout")

    obj.print()
    obj.cout("Hello world")
    obj.printWarn("Hello world")

// const createArr = function(number1, number2){
//     const array=[]
//     let min
//     let max
//     if(number1>number2){
//         max=number1
//         min = number2
//     } else {
//         max=number2
//         min = number1
//     }

//     for (let index = max; index >= min; index--) {
//         array.push(index)
//     }

//    return array
// }

// console.log(createArr(7,10))
// console.log(createArr(60,55))

