var a;
var b;
var c;
var colorArray;
var choosen_id;
var choosen_color;
var score = 0;
var choosens = [];
var clicks = 0;

startState();


function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return 'rgb('+ r +','+ g +','+ b +')'
}

function getIde(clicked_id) {
    choosen_id = clicked_id;
    choosen();
}

function choosen() {
    switch (choosen_id) {
        case 'button1':
            choosen_color = a;
            if (! (choosens.includes(choosen_id)) ) {
                choosens.push('button1');
            }            
            break;
        case 'button2':
            choosen_color = b;
            if (! (choosens.includes(choosen_id)) ) {
                choosens.push('button2');
            }            
            break;
        case 'button3':
            choosen_color = c;
            if (! (choosens.includes(choosen_id)) ) {
                choosens.push('button3');
            }
            break;
        default:
            break;
    }
    if(choosen_color == guess){
        document.getElementById("hna").innerHTML = 'Score : ' + ++score;
        startState();
    }
    else{
        clicks++;
        if(clicks <= 1){
            document.getElementById(choosen_id).style.backgroundColor= 'black';
        }
        if(clicks >= 2){
            startState();
        }
    }
    console.log(choosens);
}

function startState() {
    a = randomColor();
    b = randomColor();
    c = randomColor();
    colorArray = [a,b,c];
    choosen_id = null;
    choosen_color = null;
    clicks = 0;
    choosens = []
    document.getElementById("button1").style.backgroundColor = a;
    document.getElementById("button2").style.backgroundColor = b;
    document.getElementById("button3").style.backgroundColor = c;
    guess = colorArray[Math.floor(Math.random() * 2)];
    document.getElementById('colorguess').innerHTML = guess;
}

