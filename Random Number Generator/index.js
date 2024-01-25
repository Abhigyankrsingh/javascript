

const myButton = document.getElementById("myButton");

const lable1 = document.getElementById("label");

const lable2 = document.getElementById("label");

const lable3 = document.getElementById("label");



const min = 1;

const max = 6;


let randomNum;


myButton.onclick = function(){

    randomNum = Math.floor(Math.random() *max) + min;

    myLable.textContent = randomNum;





}