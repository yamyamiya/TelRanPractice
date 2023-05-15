// **Создать кнопку и таблицу с 9 ячейками. При клике на кнопку случайным образом менять цвет и содержимое каждой ячейки.

const table = document.createElement("table")
document.body.append(table)
const button = document.createElement("button")
document.body.append(button)
button.innerText = "Click"
table.style.border= "1px solid black";
table.style.borderCollapse= "collapse";
const newArray = []
for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr")
    table.append(row)
    row.style.border = "1px solid black";
    for(let j = 0; j < 3; j++){
        const colomn = document.createElement("td")
        colomn.innerText = Math.floor(Math.random()*1000)
        row.append(colomn)
        colomn.style.border = "1px solid black";
        colomn.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    }
}
button.addEventListener("click", function() {
 
let cells = document.body.getElementsByTagName("td")

for (let cellIndex in cells) {
    cells[cellIndex].innerText = Math.floor(Math.random()*1000)
    cells[cellIndex].style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}
        
})

