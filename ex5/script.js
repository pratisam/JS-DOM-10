// Open the script.js file and edit it, so that:

// Everytime the user clicks on one of the action squares
// Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

const disWrapp = document.querySelector(".displayedsquare-wrapper");
let logJs = document.querySelector('.actionLog');
function myFunction(element){
    let squareNew = document.createElement('div')
    squareNew.classList.add("square");
    squareNew.innerHTML ="";
    squareNew.style.cssText=`   height: 250px;
                                width: 250px;
                                background-color: ${element};
                                margin: 50px;`
    disWrapp.appendChild(squareNew);
// Create a new <li> in the log below to state when the action was done
    let listJs = document.createElement('LI')
    listJs.innerHTML = `create a ${element} square`
    logJs.appendChild(listJs);
    squareNew.setAttribute('onclick',`alertFunction('${element}')`)

}
function alertFunction(e){
    alert(`${e} square` )
}

// Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)

const bodyJs = document.querySelector('body');
bodyJs.addEventListener('keypress', logKey);

function logKey(e) {
// Log when the spacebar is used the same way you used for the generated squares.
  if(`${e.code}`=="Space"){
    bodyJs.style.backgroundColor=`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    let listJs = document.createElement('LI')
    listJs.innerHTML = `create a space-bar`;
    logJs.appendChild(listJs);
  }
// When the s key is pressed the squares get deleted (erases the generated squares)
  if(`${e.code}`== `KeyS`){
    let listJs = document.createElement('LI');
    listJs.innerHTML = `create a s`;
    logJs.appendChild(listJs);
    let deleteSqLength = document.querySelectorAll('.square');
    let deleteSq =document.querySelector('.square');
    let length = deleteSqLength.length
    if(length>0){
    deleteSq.parentNode.removeChild(deleteSq);
    }
    else listJs.innerHTML = `nothing to delete`
  }
// When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
  if(`${e.code}`== `KeyL`){
    let deleteListLength = document.querySelectorAll('LI')
    let deleteList = document.querySelector('li');
    let lengthList = deleteListLength.length
    if(lengthList>0)
    deleteList.parentNode.removeChild(deleteList) ;
  }
}

