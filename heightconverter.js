


const heightinput = document.querySelector('#heightinput');
const cmOutput= document.getElementById("centimeterResult");
const inOutput= document.getElementById("InchesResult");
const results = document.querySelector('.result');

results.style.visibility='hidden';





heightinput.addEventListener('input', e=>{
    e.preventDefault();


    results.style.visibility='visible';
    //capturing the input value and converting to cm
   
    let feetValue= heightinput.value;
    let toCm=feetValue*30.48;
    let toIn=feetValue*12;
    //attaching to output 
    inOutput.innerHTML=toIn;
    cmOutput.innerHTML=toCm;
    console.log(cmOutput);


})