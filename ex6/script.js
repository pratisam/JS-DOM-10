// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
let nameInput = document.getElementById("firstname")
nameInput.addEventListener('keyup',nameFunction)
let spanName = document.getElementById("display-firstname")
function nameFunction(){
  spanName.innerText= nameInput.value 
}

// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.


let ageInput = document.getElementById("age");
ageInput.addEventListener('keyup',ageFunction);
let hardTruth = document.getElementById('a-hard-truth');
function ageFunction(){
    let ageValue = ageInput.value
    if(ageValue>18)
    hardTruth.style.visibility="visible";
    else
    hardTruth.style.visibility="hidden";
}
// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

let pwdInput = document.getElementById('pwd');
let confirmPwdInput = document.getElementById('pwd-confirm');
pwdInput.addEventListener('keyup',pwdFunction);
confirmPwdInput.addEventListener('keyup',pwdCheckFunction);
let a = document.querySelectorAll('section')[3].querySelector('p').style;
let b = a
function pwdFunction(){
    let pwdText = pwdInput.value;
    let pwdlength = pwdText.length;
    if((pwdText=="")||(pwdlength<6)){
       b.color ="red";
    }
    else  b.color ="black";

}
function pwdCheckFunction(){
    let pwdText = pwdInput.value;
    let pwdCheckText = confirmPwdInput.value;
    if(pwdText!=pwdCheckText){
        b.color ="red";
     }
     else  b.color ="black";

}
// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
// let bodyJs = document.getElementsByTagName("body")
let modeInput = document.getElementById('toggle-darkmode');
modeInput.addEventListener('click',darkFunction)

function darkFunction(){
    let optionInput = modeInput.value
    if(optionInput=="dark"){    
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}