console.log("Task 1")
// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function compareNum(number1, number2){
    return number1>number2 ? number2 : number1
}

console.log(compareNum(15, 66))

console.log("Task 2")
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function printEvenNumDesc(number1, number2){
    let start = (number1>number2)?number1:number2
    let end = (number1<number2)?number1:number2
    start -=start%2
    end -=end%2
    const numberOfIterrations = (start - end)/2
    for (let index = 0; index < numberOfIterrations; index++) {
        console.log(start-index*2);    
    }
}
//     if(number1>number2){
//         start = number1 - number1%2
//         end=number2
//     } else{
//         start = number2 -number2%2
//         end=number1
//     }
//     for (let index = start; index >= end; index-=2) {
//         console.log(index)
//     }
// }

printEvenNumDesc(1,11)

console.log("Task 3")
// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function pow(number, extent=2){
return number**extent
}

console.log(pow(3));
console.log(pow(3, 3));

console.log("Task 4")
// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumCalc(n){
    return (n*n+n)/2
}

console.log(sumCalc(5));

console.log("Task 5")
// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sumCalcOddEven(n, m){
  
    const start=(n>m)?m:n;
    const end=(n<m)?m:n;
      
    let sumEven=0
    let sumOdd=0

    for (let index = start; index <= end; index++) {

        if (index % 2 == 0) {
            sumEven = sumEven + index
        } else {
            sumOdd = sumOdd + index
        }
    }
    console.log(`The sum of even numbers is = ${sumEven}`);
    console.log(`The sum of odd numbers is = ${sumOdd}`);
}

sumCalcOddEven(4,20)

console.log("Task 6")
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'

function arrayFunc(array){
    // let length = array.length
    let elemLength = 0
    let longestElem= "null"
    for (let index = 0; index < array.length; index++) {
        if(array[index].length > elemLength){
            elemLength = array[index].length
            longestElem = array[index]
        }
    }
    console.log(longestElem);

}

arrayFunc([ 'one', 'two', 'three' ])
