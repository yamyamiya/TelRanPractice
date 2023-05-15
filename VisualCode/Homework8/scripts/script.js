// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const divNumbers = document.createElement("div")
divNumbers.classList.add("numbers")
document.body.append(divNumbers)
divNumbers.style.padding="10px"
createPar()

function createPar(){
    for (let index = 100; index > 40; index-=10) {
        const p = document.createElement("p")
        p.innerText = index
        divNumbers.append(p)
    }
    
}

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const divStrings = document.createElement("div")
divStrings.classList.add("strings_container")
document.body.append(divStrings)
divStrings.style.padding="10px"
const arrayOfStrings = ["FFFF","GGGG","HHHH"]
createStrings()

function createStrings(){
for (let index = 0; index < arrayOfStrings.length; index++) {
    const p = document.createElement("p")
        p.innerText = arrayOfStrings[index]
        divStrings.append(p)
}
}

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const divUsers = document.createElement("div")
divUsers.classList.add("users_container")
document.body.append(divUsers)
const users =[
    {
    firstName: "Ira",
    lastName: "Ivanova",
    age: 22,
    },
    {
    firstName: "Masha",
    lastName: "Popova",
    age: 25,
    },
    {
    firstName: "Elena",
    lastName: "Surokova",
    age: 12,
    },
    {
    firstName: "Lera",
    lastName: "Sidorova",
    age: 18,
    }  
]


for (let index = 0; index < users.length; index++) {
    if(users[index].age>=18){
        const{firstName, lastName, age}= users[index]
        const div = document.createElement("div")   
        divUsers.append(div) 
        div.style.padding="10px"
        const pName = document.createElement("p")
        pName.innerText = `Name: ${firstName}`
        const pSecondName = document.createElement("p")
        pSecondName.innerText = `Last name: ${lastName}`
        const pAge = document.createElement("p")
        pAge.innerText = `Age: ${age}`
        div.append(pName,pSecondName,pAge)
    }
}
