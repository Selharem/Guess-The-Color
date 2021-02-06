//document.getElementsByTagName('button').bgcolor="white";
var a = randomColor();
var b = randomColor();
var c = randomColor();
var colorArray = [a,b,c];
var color = 'rgb(1,2,255)'

document.getElementById("button1").style.backgroundColor= a;
document.getElementById("button2").style.backgroundColor= b;
document.getElementById("button3").style.backgroundColor= c;

var choosen = colorArray[Math.floor(Math.random() * 2)];


document.getElementById('colorguess').innerHTML = choosen;

function randomColor(){
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    return 'rgb('+ x +','+ y +','+ z+')'
}