var a = randomColor();
var b = randomColor();
var c = randomColor();
var colorArray = [a,b,c];
var choosen_id;
var choosen_color;
var score = 0;

document.getElementById("button1").style.backgroundColor= a;
document.getElementById("button2").style.backgroundColor= b;
document.getElementById("button3").style.backgroundColor= c;

var guess = colorArray[Math.floor(Math.random() * 2)];

document.getElementById('colorguess').innerHTML = guess;

function randomColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return 'rgb('+ r +','+ g +','+ b +')'
}

function getIde(clicked_id) {
    choosen_id = clicked_id;
    choosen();
}

function choosen(){
    switch (choosen_id) {
        case 'button1':
            choosen_color = a;
            //alert(choosen_color);
            break;
        case 'button2':
            choosen_color = b;
            //alert(choosen_color);
            break;
        case 'button3':
            choosen_color = c;
            //alert(choosen_color);
            break;
        default:
            break;
    }
    if(choosen_color == guess){
        // alert('win!!');
        //score=;
        document.getElementById("hna").innerHTML = ++score;
        a = randomColor();
        b = randomColor();
        c = randomColor();
        colorArray = [a,b,c];
        choosen_id = null;
        choosen_color = null;
        document.getElementById("button1").style.backgroundColor= a;
        document.getElementById("button2").style.backgroundColor= b;
        document.getElementById("button3").style.backgroundColor= c;

        guess = colorArray[Math.floor(Math.random() * 2)];

        document.getElementById('colorguess').innerHTML = guess;
        //score = 0;
        //location.reload();
        //return false;
    }
     
    else{
        // alert('win!!');
        //score--;
        document.getElementById("hna").innerHTML = --score;
        document.getElementById(choosen_id).style.backgroundColor= 'black';

        //location.reload();
        //return false;
    }
}

