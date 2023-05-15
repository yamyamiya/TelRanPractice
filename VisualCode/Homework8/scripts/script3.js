// **Создать страницу с кнопкой и блоком с текстом. При клике на кнопку реализовать следующую логику:
// 1.Сгенерировать случайный цвет и установить его в качестве фона блока с текстом.
// 2.Создать массив из нескольких произвольных строк.
// 3.Сгенерировать случайный индекс элемента в массиве и выбрать соответствующую строку.
// 4.Вставить выбранную строку в блок с текстом.

const p = document.createElement("p")
document.body.append(p)
const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem omnis esse praesentium quidem non, eaque labore modi molestias voluptas odit porro cupiditate error, cumque vel natus doloremque, repellat quibusdam unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem omnis esse praesentium quidem non, eaque labore modi molestias voluptas odit porro cupiditate error, cumque vel natus doloremque, repellat quibusdam unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem omnis esse praesentium quidem non, eaque labore modi molestias voluptas odit porro cupiditate error, cumque vel natus doloremque, repellat quibusdam unde!"
p.innerText = text
const button = document.createElement("button")
document.body.append(button)
button.innerText = "Click"
const array = ["iiii", "jjjj", "kkkk", "mmmm"]

button.addEventListener("click", function(){
    p.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    const r = Math.floor(Math.random()*4)
    p.innerText = text+array[r]     
    }
)