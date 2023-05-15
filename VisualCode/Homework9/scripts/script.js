// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль
// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
const form = document.querySelector("form")
const nameInput = document.querySelector("#name")
const surnameInput = document.querySelector("#surname")
const ageInput = document.querySelector("#age")
const div = document.querySelector(".cards-of-users")
div.style.display = "flex"
const users = []

form.addEventListener("submit", function(event){

    event.preventDefault()
    let name = nameInput.value.trim()
    if(name===""){
        alert("ERROR:empty value")
        form.reset()
        return
    }
    let surname = surnameInput.value.trim()
    if(surname===""){
        alert("ERROR:empty value")
        form.reset()
        return
    }
    let age = ageInput.value.trim()
    if(age===""){
        alert("ERROR:empty value")
        form.reset()
        return
    }
    const user={
        name: name,
        surname: surname,
        age: age
    }
    users.push(user)
    console.log(users);
    rerender();
    form.reset()
})

// Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.

function rerender(){
    div.innerHTML=""
    for (let index = 0; index < users.length; index++) {
        const userCard =createUserCard(users[index], index)
        div.append(userCard) 
        userCard.addEventListener("dblclick", function(){
            users.splice(index,1)
            rerender()
        })     
    }
}

function createUserCard({name, surname, age}, index){

        const div = document.createElement("div")
        div.style.width = "20%"
        div.style.padding="10px"
        div.style.margin = "10px"
        div.style.border = "1px solid black"
        const pId = document.createElement("p")
        pId.innerText = `id: ${index+1}`
        const pName = document.createElement("p")
        pName.innerText = `Name: ${name}`
        const pSecondName = document.createElement("p")
        pSecondName.innerText = `Last name: ${surname}`
        const pAge = document.createElement("p")
        pAge.innerText = `Age: ${age}`
        div.append(pId,pName,pSecondName,pAge)
        return div
    }

   
