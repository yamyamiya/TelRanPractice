// const paragrath = document.querySelector("p")
// // console.log(paragrath);
// const paragraths = document.querySelectorAll("p")
// console.log(paragraths);
// for (let index = 0; index < paragraths.length; index++) {
//     console.log(paragraths[index])
    
// }

// const par = document.querySelector(".second-box p")
// console.log(par);
// const p = document.querySelector(".f-paragraph")
// console.log(p.innerText);
// p.innerText = "Hello world"



// const div = document.querySelector(".second-box")
// console.log(p.innerHTML);
// div.innerHTML = `<a href="#">Test</a>`

// const text = document.querySelectorAll("p.item")
// for(let i = 0; i<text.length; i++){
// text[i].innerText = "Hello"
// }
// console.log(text)

// const text = document.querySelectorAll("p.item")
// const arr = []
// for(let i = 0; i<text.length; i++){
// arr.push(text[i].innerText)
// }
// console.log(arr);

// const imgElem = document.querySelector("img")
// console.log(imgElem.src);
// console.log(imgElem.alt);

// imgElem.setAttribute("src", "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg")
// imgElem.setAttribute("alt", "image")
// imgElem.setAttribute("data-content", "new")

// const imgEl = document.querySelectorAll("img")
// for(let i = 0; i<4; i++){
//     imgEl[i].setAttribute("src", "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg")
// }

// const pElem = document.createElement("p")
// const pElem2 = document.createElement("p")
// const divElem = document.querySelector(".main")
// pElem.innerText = "1"
// pElem2.innerText = "2"
// // divElem.append(pElem, pElem2)
// // divElem.prepend(pElem)
// divElem.appendChild(pElem)

const paragraphsTexts = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]
const divElem = document.querySelector("#paragraphs")

for(let i=0; i<paragraphsTexts.length; i++){
    const par = document.createElement("p")
    par.innerText = paragraphsTexts[i]
    divElem.append(par)
}
