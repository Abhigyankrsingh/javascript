

const myButton = document.getElementById("myButton");

const lable1 = document.getElementById("label");

const lable2 = document.getElementById("label");

const lable3 = document.getElementById("label");



const min = 1;

const max = 6;


let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){

    randomNum1 = Math.floor(Math.random() *max) + min;
    randomNum2 = Math.floor(Math.random() *max) + min;
    randomNum3 = Math.floor(Math.random() *max) + min;

    myLable.textContent = randomNum;





}