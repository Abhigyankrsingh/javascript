const PI = 3.14;

let radius;

let circum;

document.getElementById("mySubmit").onclick = function(){


    radius = document.getElementById("myText").value;

    radius = Number(radius);

    circum = 2 *PI * radius;
}