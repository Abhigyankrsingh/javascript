

const myButton = document.getElementById("myButton");

const lable1 = document.getElementById("Label");

const lable2 = document.getElementById("Label");

const lable3 = document.getElementById("Label");



const min = 1;

const max = 6;


let randomNum;


myButton.onclick = function(){

    randomNum = Math.floor(Math.random() *max) + min;

    myLable.textContent = randomNum;





}