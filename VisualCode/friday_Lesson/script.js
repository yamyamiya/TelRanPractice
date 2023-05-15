const users =[
    {
    id: 1,
    fisrtName: "Ira",
    lastName: "ivanova",
    age: 22,
    country: "Germany"
    },
    {
    id: 2,
    fisrtName: "Masha",
    lastName: "Popova",
    age: 25,
    country: "Ausria"
    },
    {
    id: 3,
    fisrtName: "Elena",
    lastName: "Surokova",
    age: 12,
    country: "Poland"
    },
    {
    id: 4,
    fisrtName: "Lera",
    lastName: "Sidorova",
    age: 18,
    country: "France"
    }  
]
const newArr = []
for (let index = 0; index < users.length; index++) {
    if(users[index].age>=18){
        newArr.push(users[index])
    }
}
console.log(newArr)