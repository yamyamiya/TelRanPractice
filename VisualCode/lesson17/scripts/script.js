// const divElem = document.createElement("div")
// divElem.style.width = "100px"
// divElem.style.height = "100px"
// divElem.style.backgroundColor = "green"
// console.log(divElem.style.cssText);
// divElem.style.cssText += "border: 1px solid black; box-shadow: 2px 2px 10px black;"
// // divElem.setAttribute("style", "width: 100px; height: 100px; background-color: green; border: 1px solid black; box-shadow: black 2px 2px 10px;") 
// document.body.append(divElem)
// divElem.addEventListener("mouseover", function(){
//     const r = Math.floor(Math.random()*255)
//     const g = Math.floor(Math.random()*255)
//     const b = Math.floor(Math.random()*255)
//     console.log(r, g, b);
//     const rgb = `rgb(${r},${g},${b})`

//     divElem.style.backgroundColor = rgb
// })

// divElem.addEventListener("mouseout", function(){
//     divElem.style.backgroundColor = "red"
// })

// console.log(Math.floor(Math.random()*255))

// const mainDiv = document.querySelector(".main")
// for (let index = 0; index < 5; index++) {
//     const newDiv = document.createElement("div")
//     newDiv.style.width = "150px"
//     newDiv.style.height = "150px"
//     const b = Math.floor(Math.random()*255)
//     const rgb = `rgb(128,128,${b})`
//     newDiv.style.backgroundColor = rgb
//     mainDiv.append(newDiv)
    
// }

const form = document.querySelector('form')
const productNameInp = document.querySelector("#product_name")
const productPriceInp = document.querySelector("#productPrice")
const products=[]
const productsDiv = document.querySelector(".products")

form.addEventListener("submit", function(event){
    event.preventDefault()
    const productsCards = {
        name:productNameInp.value,
        price:productPriceInp.value
    }
   products.push(productsCards)
   rerender()
    console.log(products);
    form.reset()
})

function createProductCard(name, price){
    const card = document.createElement("div")
    card.classList.add("card")
    const pName = document.createElement("p")
    pName.innerText = `Product: ${name}`
    const pPrice = document.createElement("p")
    pPrice.innerText = `Price: ${price}`
    card.append(pName, pPrice)
    return card
}

function rerender(){
    productsDiv.innerHTML = ""
    for (let index = 0; index < products.length; index++) {
        const {name, price} = products[index]
        const card = createProductCard(name, price)
        productsDiv.append(card)    
    }
}

// console.log(productNameInp.value);
    // console.log(productPriceInp.value);
    // form.reset()


