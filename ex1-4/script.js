console.log(document.title)
document.title = "Modifying the DOM";
document.body.style.backgroundColor = "#FF69B4";
// document.body.style.backgroundColor = '#AA0000';
// document.body.style.background = '#000000';
// document.body.style.backgroundColor = "red";
// document.getElementById(bodyID).style.background = "red";
// var r = Math.floor(Math.random() * 255);
// var g = Math.floor(Math.random() * 255);
// var b = Math.floor(Math.random() * 255);   
// console.log(r,g,b)
// function rgb(r, g, b){

//     var rgb = `rgb(${r},${g},${b})`;
//     console.log(rgb)
//     return rgb;
// }
// document.body.style.backgroundColor = rgb(r,g,b);
const color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
console.log(color);
document.body.style.backgroundColor = color;
// Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)
console.log(document.querySelectorAll('body *'));
const myElement = document.body;
element2 = document.body

for (const child of myElement.children) {
    console.log(child.tagName);
}

// Select all the img tags and loop through them. If they have no important class, turn their display property to none



let imgJs = document.getElementsByTagName("img");
for(const e of imgJs){
    (e.className === "important")? console.log(e): e.style.display = "none";
}
// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
let paraJs = document.getElementsByTagName("p");
for(const e of paraJs){
    console.log(e.innerText);
    (e.className)? console.log(e.className) : console.log("no class");
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
    (e.className)? e.style.backgroundColor = "red" :  e.style.backgroundColor = "none";

}

// Find a way so that everytime you load the page the order of the elements changes!


let sp1 =Math.floor(Math.random() * 20)
let sp2 =Math.floor(Math.random() * 20)
const swapPositions = (johnsonMember, a ,b) => {
    [johnsonMember[a], johnsonMember[b]] = [johnsonMember[b], johnsonMember[a]]
  }
  

  let johnsonMember =["Andrii", "Anna","Arsenia","Audric","Aurore","Ben","Daria","Edouard","Egide","Estime","geal","Hanna","Harold","Hassan","Jiacinto","Kawtar","Kyubra","Munise","Nattyjojo","Carmen","Nicolas","Obaida"," Pranavi", "Prathima", "Yunese","Youssef",]
swapPositions(johnsonMember,sp1,sp2);
console.log(johnsonMember,sp1,sp2);

let articleJs = document.getElementById("johnsonA")


// Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
for(const element of johnsonMember) {
    var para = document.createElement('p');
    para.innerHTML =`${element}` ;
    articleJs.appendChild(para);
}
// articleJs.style.display ="none";

const nodeList = document.querySelectorAll(".johnsonS article p")
for(let i=0;i<26;i++){
    if(i%2==0){
        let r =Math.floor(Math.random() * 255);
        let g=Math.floor(Math.random() * 255);
        let b =Math.floor(Math.random() * 255);
        let fontColor 
        let bgColor =`rgb(${r},${g},${b})`;
        nodeList[i].style.backgroundColor = `rgb(${r},${g},${b})`;
        hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b) );
        
            // Using the HSP value, determine whether the color is light or dark
            if (hsp>127.5) {
                fontColor =  'black';
            } 
            else {
                fontColor =  'white';     
            }
            nodeList[i].style.color = fontColor;
    }
    else {
        nodeList[i].style.backgroundColor = "white";

    }
}

// Select the last child of the <ol> tag and put it at the beginning of the list
// $(document).ready(function(){
//       $("ol").prepend("<li>just trial</li>");
// })

var list = document.getElementsByTagName('ul')[0],
    itemsFirst = list.getElementsByTagName('li')[0],
    itemsLast = list.getElementsByTagName('li')[4];
// let tempItem = itemsFirst;
//     itemsFirst =itemsLast;
//     itemsLast = tempItem;
// list.getElementsByTagName('li')[0].innerHTML = itemsFirst;
// list.getElementsByTagName('li')[4].innerHTML = itemsLast;
itemsLast.appendChild(itemsFirst);
// Move the <h2> of the third section in the second one and vice-versa
var sectionBody1 = document.getElementsByTagName('h2')[0];
var sectionBody2= document.getElementsByTagName('h2')[1];
var section1H = document.getElementsByTagName('section')[0];
var section2H = document.getElementsByTagName('section')[1];
// console.log(section1H,section2H)
section1H.appendChild(sectionBody2);
section2H.appendChild(sectionBody1);
// Delete the last section from the DOM, we don't need it anyways
var sectionDelete = document.getElementsByTagName('section')[3]
sectionDelete.style.display ="none";