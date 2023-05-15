const formElem = document.querySelector("form")
const cardsElem = document.querySelector(".cards")
const questionInput = document.querySelector("#question-input")
const answerInput = document.querySelector("#answer-input")

const flashCards = []

formElem.addEventListener("submit", function(event){
    event.preventDefault()
    let question = questionInput.value.trim()
    let answer = answerInput.value.trim()
    if(question==="" || answer===""){
        alert("ERROR:empty value")
        formElem.reset()
        return
    }
    
    
    const card = {
        question,
        answer
    }
    flashCards.push(card)
    console.log(flashCards);
    rerender()
    formElem.reset()
})


function rerender(){
    cardsElem.innerHTML=""
    for (let index = 0; index < flashCards.length; index++) {
        const cardElem = createCardElem(flashCards[index])
        cardsElem.append(cardElem)


    }
}



function createCardElem({question, answer}){
const cardElem = document.createElement("div")
cardElem.classList.add("card")
const cardFront = document.createElement("div")
const cardFrontP = document.createElement("p")
cardFront.classList.add("card-front")
cardFrontP.innerText = question
cardFront.append(cardFrontP)
const cardBack = document.createElement("div")
cardBack.classList.add("card-back")
const cardBackP = document.createElement("p")
cardBackP.innerText = answer
cardBack.append(cardBackP)
cardElem.append(cardFront, cardBack)
return cardElem


}