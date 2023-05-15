

// function printHello(userName){
//     console.log(`Hello ${userName}`);
// }

// function printBye(userName){
//     console.log(`Bye ${userName}`);
// }

// function getNameOfUser(helloCallback, byeCallback){
//     const name = prompt("Write your name")
//     helloCallback(name)
//     byeCallback(name)

// }
// getNameOfUser(printHello, printBye)

// function forEach(array, callback){
//     for (let index = 0; index < array.length; index++) {
//         callback(array[index])
//     }
// }

// const arrayOfNumbers = [5, 26, 33, 5]

// function print(value){
//     console.log(value);
// }
// function pow(value){
//     console.log(value**2);
// }

// forEach(arrayOfNumbers, print)
// forEach(arrayOfNumbers, pow)

// const pElem = document.querySelector("p")
// function clicked() {
//     console.log(`clicked`);   
// }
// pElem.addEventListener("click", clicked)

// const incrButton = document.querySelector("#inc")
// const decrButton = document.querySelector("#dec")

// const pElem = document.querySelector("p")
// let counter = 0;
// function clickHandlerIncr(){
//     counter++
// pElem.innerText = counter
// }
// function clickHandlerDecr(){
//     counter--
// pElem.innerText = counter
// }

// incrButton.addEventListener("click", clickHandlerIncr)
// decrButton.addEventListener("click", clickHandlerDecr) 

// const pElem = document.querySelector("p")
// document.addEventListener("keydown", function(event){
// console.log(event.key)
// pElem.innerText += event.key
// })

// const pElem = document.createElement("p")
// pElem.innerText="Click"

const strArr = ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4", "Paragraph 5"]


    // const mainDiv = document.querySelector(".main")
    //     for (let index = 0; index < strArr.length; index++) {
    //         const p = document.createElement("p")
    //         p.innerText = strArr[index]
            
    //         p.addEventListener("click", function(){
    //             p.innerText = "****"
    //         })
    //         mainDiv.append(p)

    //     }

    // ========= второй вариант

    // function create(text){
    //     const p = document.createElement("p")
    //     p.innerText = text
    //     return p
    // } 
    
    // const mainDiv = document.querySelector(".main")


    
    // function forEach(array, callback){
    //     for (let index = 0; index < array.length; index++) {
    //         callback(array[index]);
    //     }
    // }

    //  forEach(strArr, function(arrEl){
    //    const p =  create(arrEl);
    //         p.addEventListener("click", function(){
    //             p.innerText = "*****"
    //         })
    //         mainDiv.append(p)
            
    //     })

   



    


   


    
        const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg', 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'];

        // const thumbnailsDiv = document.querySelector("#thumbnails")
        // const previwDiv = document.querySelector("#preview")
        // const emptyImgElem = document.createElement("img")
        // previwDiv.append(emptyImgElem)

        // for (let index = 0; index < images.length; index++) {
        //     const newImg = document.createElement("img")
        //     newImg.setAttribute("src", images[index])
        //     newImg.addEventListener("click", function(){
        //         emptyImgElem.setAttribute("src", images[index])

        //     })
        //     thumbnailsDiv.append(newImg)
        // }
        
   
    const thumNailsDiv = document.querySelector("#thumbnails")
    const previewDiv = document.querySelector("#preview")
    const emptyImg = document.createElement("img")
    previewDiv.append(emptyImg)

    for (let index = 0; index < images.length; index++) {
        const newImg = document.createElement("img");
        newImg.setAttribute("src", images[index])
        newImg.addEventListener("click", function(){
            emptyImg.setAttribute("src", images[index])
        })
        thumNailsDiv.append(newImg)
    }