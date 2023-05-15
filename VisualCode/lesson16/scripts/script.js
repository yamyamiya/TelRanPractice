// const mainDiv = document.createElement("div")

// mainDiv.classList.add("main")
// console.log(mainDiv.classList)
// document.body.append(mainDiv)
// console.log(mainDiv.classList.contains("test"));
// mainDiv.classList.replace("main", "test")
// console.log(mainDiv.classList);

// const div = document.querySelector("div")
// div.classList.replace("test2", "hello")
// console.log(div.classList);
// // div.classList.remove("test2")

// div.classList.toggle("hello")
// console.log(div.classList);

// const div = document.querySelector(".main")
// const addColor = document.querySelector(".addColor")
// const removeColor = document.querySelector(".removeColor")

// addColor.addEventListener("click", function(){
//     div.classList.add("color")
// })


// removeColor.addEventListener("click", function() {
//     div.classList.remove("color")
    
// })
// const switchBut = document.querySelector(".switch")
// switchBut.addEventListener("click", function(){
//     // div.classList.toggle("color")

//     if(div.classList.contains("color")){
//         div.classList.remove("color")
//     }else{
//         div.classList.add("color")
//     }
// })

// const cards = document.querySelector(".cards")
// for (let index = 1; index < 11; index++) {
//     const card = document.createElement("div")
//     card.innerText = index
//     card.classList.add("card")
//     card.addEventListener("click", function(){
//         card.classList.toggle("active")
//     })
//     cards.append(card)
// }

const cards = document.querySelector(".cards")
// const cardsElem = []
// for (let index = 1; index < 11; index++) {
//     const card = document.createElement("div")
//     card.innerText = index
//     card.classList.add("card")
//     card.addEventListener("click", callback)
//     cardsElem.push(card)
//     cards.append(card)
    
// }

// function callback(event){
//     // console.log(event);
//     for (let index = 0; index < cardsElem.length; index++) {
//         cardsElem[index].classList.remove("active")
//     }
//     event.target.classList.add("active")
// }

const words = [
    {
        en:"cat",
        ru:"кот"
    },
    {
        en:"dog",
        ru:"собака"
    },
    {
        en:"bird",
        ru:"птица"
    },
    {
        en:"flower",
        ru:"цветок"
    }
]

for (let index = 0; index < words.length; index++) {
    const div = document.createElement("div")
    div.classList.add("card")
    const {en, ru} = words[index]
    const pRu = document.createElement("p")
    pRu.classList.add("ru")
    pRu.innerText = ru
    const pEn = document.createElement("p")
    pEn.classList.add("en")
    pEn.innerText = en
    pEn.classList.add("hidden")
    div.append(pRu, pEn)
    cards.append(div)

}

const ru = document.querySelectorAll(".ru")
const en = document.querySelectorAll(".en")

const ruButton = document.querySelector("#ruB")

ruButton.addEventListener("click", function(){
    // for (let index = 0; index < ru.length; index++) {
    //     ru[index].classList.remove("hidden") 
    // }
    // for (let index = 0; index < en.length; index++) {
    //     en[index].classList.add("hidden");
        
    // }

    for (let index = 0; index < words.length; index++) {
        ru[index].classList.remove("hidden");
        en[index].classList.add("hidden");
        
    }
})
const enButton = document.querySelector("#enB")
enButton.addEventListener("click", function(){ 
    // for (let index = 0; index < ru.length; index++) {
    //     ru[index].classList.add("hidden") 
    // }
    // for (let index = 0; index < en.length; index++) {
    //     en[index].classList.remove("hidden");
        
    // }

    for (let index = 0; index < words.length; index++) {
        ru[index].classList.add("hidden");
        en[index].classList.remove("hidden");
        
    }
})


