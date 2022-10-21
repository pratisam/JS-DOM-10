// Use childNodes to list all the children from the <ul>

let ulJS = document.querySelector('ul')
ulChildNode = ulJS.childNodes
console.log(ulChildNode)
// let nodeType = ulChildNode[1].nodeType
// console.log(nodeType)

// Write a for loop to iterate over every child. In this loop:
ulChildNode.forEach(element => {
// Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
    if(element.nodeType === 1){
        console.log(element)
        element.addEventListener('click',clickAlert)
// (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).
        for(let i=0; i<11; i++){
            let x=ulJS.childNodes[i*2];
            let check = element.isEqualNode(x);
            if(check){
                element.remove();
            }
        }
    }
// Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
    if(element.innerHTML ==="Fast and Furious"){
        ulJS.prepend(element)
// Since Fast and Furious is the most important franchise ever, add a class .important to the element
        element.classList.add("important")
    }
// Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element

});
function clickAlert(e){
    var listSelector = e.currentTarget.innerHTML;

// Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.
    if(listSelector==="Fast and Furious"){
        console.log("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
    }
    else console.log(listSelector);
    // alert(listSelector);
}

// (*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, however Fast and Furious should remain the first element (most important franchise ever, remember?)
const bodyJs = document.querySelector('body');
bodyJs.addEventListener('keypress', logKey);
let listArray = document.querySelectorAll('LI')
function logKey(e) {
    if(`${e.code}`=="KeyR"){
        console.log(listArray)
        let sp1 =Math.floor(Math.random() * 10)
        let sp2 =Math.floor(Math.random() * 10)
        console.log(sp1,sp2)
        const swapPositions = (listArray, a ,b) => {
            ulJS.append(listArray[sp1]);
            ulJS.append(listArray[sp2]);

        }
        if(sp1==0|| sp2==0){
            swapPositions(listArray,sp1++,sp2++);

        }
        else
            swapPositions(listArray,sp1,sp2);
    }
// (*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
    if(`${e.code}`=="KeyD"){
        let listFF = document.querySelector('LI');
        let cloneFF = listFF.cloneNode(true);
        cloneFF.id ='cloneId';
        ulJS.appendChild(cloneFF);
        // listArray[0].appendChild(cloneFNF)
    }

}
// Create a new <div> before the list, using createElement and insertBefore
let divFromJs = document.createElement('div');
ulJS.prepend(divFromJs);
// Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"
let selectFromJs =document.createElement('select');
let option1 = document.createElement('option');
let option2 = document.createElement('option');
option1.innerText = "important franchises";
option2.innerText = "normal franchises";
selectFromJs.appendChild(option1)
selectFromJs.appendChild(option2)
divFromJs.appendChild(selectFromJs)
// Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')
selectFromJs.addEventListener('click',impFunction)
function impFunction(){
    let optionValue = selectFromJs.value;
    console.log(optionValue)
    if(optionValue=="important franchises"){
        listArray.forEach(element =>{
            // console.log(element.className)
            if(element.classList!="important"){
                element.style.visibility = 'hidden'
            }
        })
    }
}
// (`'${selectFromJs.value}'`)