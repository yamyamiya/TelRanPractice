// const arr = [2,38,786,10,26]
// let sum =0
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
// }
// console.log(sum);

// const arr = [2, -38, 895, -10, 26, -9, 52, 99, -62]
// let sum =0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){
//     sum+=arr[i]
// }
// }
// console.log(sum);

// const arr = [2, 38, 895, 10, 26, 9, 52, 99, 62, 5, 7, 16, 24]
// let sumEven = 0
// let sumOdd = 0
// let difference = 0
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]%2==0){
//         sumEven=sumEven+arr[index]
//     }else{
//         sumOdd=sumOdd+arr[index]
//     }
// }
// if(sumEven>sumOdd){
//     difference = sumEven -sumOdd

// }else{
//     difference = sumOdd - sumEven
// }
// difference = Math.abs(sumEven-sumOdd)

// console.log(difference);

// const arr = [1, 34, 52, 4, 9, -5, 6, 59, 52, 9]
// let sum = 0
// for (let index = 0; index < arr.length; index++) {
//     if( arr[index]===index){
//         sum = sum+arr[index]
//     }
// }
// console.log(sum);

// const user = ["Nana", "Smith", 35, 4500]
// console.log(`Name of person ${user[0]}`)
// console.log(`Surname of person ${user[1]}`)
// console.log(`Age of person ${user[2]}`);

const user = {
    name: "John", 
    lastName: "Smith",
    age: 35,
    salary: 4500,
    'life events':'test'
}

console.log(user);
// console.log(`Name of person ${user['name']}`)
// console.log(`Surname of person ${user['lastName']}`)
// console.log(`Age of person ${user['age']}`);

// console.log(`Name of person ${user.name}`)
// console.log(`Surname of person ${user.lastName}`)
// console.log(`Age of person ${user.age}`);
// console.log(user["life events"]);

// user.name = "Jack"
// user.profession = "Developer"
// console.log(user.gender);

const products = [
    {
        name: "Product 1",
        price: 1500,
        type:"a",
        discount: 50
    },
    {
        name: "Product 2",
        price: 2000,
        type:"b",
        discount: 5
    },
    {
        name: "Product 3",
        price: 500,
        type:"c",
        discount: 7
    },
    {
        name: "Product 4",
        price: 3200,
        type:"b",
        discount: 10
    }
]

// for (let index = 0; index < products.length; index++) {
//      console.log(`Имя продукта ${products[index].name}`)
    
// }
// let totalPrice=0
// for (let index = 0; index < products.length; index++) {
//     totalPrice = products[index].price+ totalPrice

   
// }
// console.log(`Общая цена всех продуктов: ${totalPrice}`)

// let arrNew = []

// for (let index = 0; index < products.length; index++) {
//     if(products[index].type === "b"){
//         arrNew.push(products[index])
//     }   
// }
// console.log(arrNew);

let newPrice = 0
for (let index = 0; index < products.length; index++) {
// newPrice = products[index].price - (products[index].price *  products[index].discount/100)
    // console.log(`Цена после скидки у ${products[index].name}: ${newPrice} `)
    const {name, price, discount} = products[index]
    // console.log(`Цена после скидки у ${products[index].name}: ${products[index].price - (products[index].price *  products[index].discount/100)}`)
    console.log(`Цена после скидки у ${name} : ${price - price*discount/100}`)
}

