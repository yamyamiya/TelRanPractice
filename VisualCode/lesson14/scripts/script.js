// const pElem = document.createElement("p")
// pElem.innerText = "Hello World"
const mainDiv = document.querySelector("#main")
// mainDiv.append(pElem)

// const paragraphsTexts = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]

// for(let i=0; i<paragraphsTexts.length; i++){
//     const paragraph = createPar(paragraphsTexts[i])
//     mainDiv.append(paragraph)
//     // mainDiv.append(createPar(paragraphsTexts[i]))
// }

// function createPar(text){
//     const p = document.createElement("p")
//     p.innerText = text
//     return p
// }

// const imgLink = prompt("Please enter link to your image")
// const postLink = prompt("Please enter link to your post")
// mainDiv.innerHTML = `
// <div>
//     <img src="${imgLink}" alt="post image">
//     <a href="${postLink}">Link to post</a>
// </div>
// `

// const newDiv = document.createElement("div")
// const image = prompt("Please enter link to your image")
// const link = prompt("Please enter link to your post")
// const imgElem = document.createElement("img")
// imgElem.setAttribute("src", image)
// imgElem.setAttribute("alt", "cat")
// const linkElem = document.createElement("a")
// linkElem.setAttribute = ("href", link)
// linkElem.innerText = "Link to post"
// newDiv.append(imgElem, linkElem)
// mainDiv.append(newDiv)


const products = [
    {
        name: "Laptop",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7",
        count: 15,
        price: 1500
    },
    {
        name: "Notebook",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71GZ9ZvNp7L.jpg",
        count: 10,
        price: 1050
    },
    {
        name: "Lightbook",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71GZ9ZvNp7L.jpg",
        count: 20,
        price: 500
    },
    {
        name: "Yogabook",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71GZ9ZvNp7L.jpg",
        count: 7,
        price: 5000
    }
]


function creatPar(text){
    const p = document.createElement("p")
    p.innerText = text
    return p
}

// for (let index = 0; index < products.length; index++) {
//     const newDiv = document.createElement("div")
//     const imgElem = document.createElement("img")
//     imgElem.setAttribute("src",products[index].img)
//     imgElem.setAttribute("alt",products[index].name)
//     newDiv.append(creatPar(`Product: ${products[index].name}`))
//     newDiv.append(creatPar(`Price: ${products[index].price}`))
//     newDiv.append(creatPar(`Count: ${products[index].count}`))
//     mainDiv.append(imgElem, newDiv)
// }


// for (let index = 0; index < products.length; index++) {
//     const {name, img, count, price} = products[index]
//     const newDiv = document.createElement("div")
// newDiv.innerHTML = `
//         <img src="${img}" alt="${name}">
//         <p>Product: ${name}</p>
//         <p>Price: ${price}$</p>
//         <p>Count: ${count}</p>
//     `
//     mainDiv.append(newDiv)

// }
let totalPrice=0;
let totalCount = 0;
for (let index = 0; index < products.length; index++) {
    const {name, img, count, price} = products[index]
    const newDiv = document.createElement("div")
    const imgElem = document.createElement("img")
    imgElem.setAttribute("src",img)
    imgElem.setAttribute("alt",name)
    const pName = creatPar(`Product: ${name}`)
    const pPrice = creatPar(`Price: ${price}`)
    const pCount = creatPar(`Count: ${count}`)
    newDiv.append(imgElem, pName, pPrice, pCount)

    mainDiv.append(newDiv)
    totalPrice = totalPrice+price;
    totalCount = totalCount+count;
}



const p1 = creatPar(`Total price: ${totalPrice}`)
const p2 = creatPar(`Total price: ${totalCount}`)
// document.body.append(p1,p2)
document.querySelector("body").append(p1,p2)













