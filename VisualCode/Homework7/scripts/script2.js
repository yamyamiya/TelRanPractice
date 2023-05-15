// Создайте элемент select с 5 опциями с текстом "Опция 1", "Опция 2" и т.д., и добавьте его на страницу:
const select = document.createElement("select")
document.body.append(select)

for (let index = 0; index < 5; index++) {
    const option = document.createElement("option");
    option.innerText = "Option "+(index+1);
    select.append(option)
}

// **Создайте таблицу с 3 столбцами и 3 строками и заполните ее следующими числами соотвественно:
// 1 2 3
// 4 5 6
// 7 8 9

const table = document.createElement("table")
document.body.append(table)
table.style.border= "1px solid black";
table.style.borderCollapse= "collapse";
table.style.marginTop="15px";
const rowsText = [1,4,7]
for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr")
    table.append(row)
    row.style.border = "1px solid black";
    for(let j = 0; j < 3; j++){
        const colomn = document.createElement("td")
        colomn.innerText = 1+i*3+j
        row.append(colomn)
        colomn.style.border = "1px solid black";
    }
}

