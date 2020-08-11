
function changeColor(newColor) {
    let elem = document.getElementById('para');
    elem.style.color = newColor;
}

function changeTSize() {
    document.getElementById("size1").style.fontSize = "50px";
}

function changeTSize2() {
    document.getElementById("size1").style.fontSize = "10px";
}
    
document.getElementById("fish").addEventListener("mousedown", mouseDown);
document.getElementById("fish").addEventListener("mouseup", mouseUp);

function mouseDown() {
  document.getElementById("fish").innerHTML = "BB-BAKA!!";
}

function mouseUp() {
  document.getElementById("fish").innerHTML = "I LOVE YOU SENPAI!!";
}

let x = function (a,b) {return a*b};
document.getElementById("wosh").innerHTML = x(4,3);



