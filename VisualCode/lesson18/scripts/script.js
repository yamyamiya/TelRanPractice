const taskInput = document.querySelector("#new-item-input")
const form = document.querySelector("form")
const list = document.querySelector("#todo-list")
const dateInput = document.querySelector("#new-item-date")
const todoItems=[]

form.addEventListener("submit", function(event){

    event.preventDefault()
    let text = taskInput.value.trim()
    if(text===""){
        alert("ERROR:empty value")
        form.reset()
        return
    }
    let taskDate = dateInput.value
    const item={
        name:text,
        status:false,
        date: taskDate
    }
    todoItems.push(item)
 
    console.log(todoItems);
    rerender()
    form.reset()

})

function rerender(){
    list.innerHTML=""
    for (let index = 0; index < todoItems.length; index++) {
        // const {name, status} = todoItems[index]
        const taskNode =creatTaskNode(todoItems[index], index)
        list.append(taskNode)      
    }
}

function creatTaskNode({name, status, date}, index){
    const itemList = document.createElement("li")
    itemList.setAttribute("data-date", date)
    const taskStatus = document.createElement("input")
    taskStatus.setAttribute("type","checkbox")
    taskStatus.setAttribute("id", `item_${index}`)
    taskStatus.checked = status


    const label = document.createElement("label")
    label.setAttribute("for", `item_${index}`)
    label.innerText = name
    if(status) label.classList.add("checked")
    taskStatus.addEventListener("change", function(){
        todoItems[index].status = !todoItems[index].status
        label.classList.toggle("checked")

    })

    const editInput = document.createElement("input")
    editInput.setAttribute("type","text")
    editInput.value=name
    editInput.classList.add("hidden")

    const btnsDiv = document.createElement("div")
    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.addEventListener("click", function(){
        label.classList.toggle("hidden")
        editInput.classList.toggle("hidden")
        if(editInput.classList.contains("hidden")){
            if(editInput.value.trim()===""){
                alert("ERROR:empty value")
                editInput.value = name
                return 
            }
            todoItems[index].name = editInput.value
            label.innerText = editInput.value
        }
    })


    const removeButton = document.createElement("button")
    removeButton.innerText="Remove"
    removeButton.addEventListener("click", function(){
        todoItems.splice(index, 1)
        console.log(todoItems);
        rerender()
    })
    btnsDiv.append(editButton, removeButton)
    itemList.append(taskStatus,label, editInput, btnsDiv)
    return itemList
}




