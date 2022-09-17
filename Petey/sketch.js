//initial number of cookies    
var num = 0;
var score = 1;

window.onload = function () {
        document.getElementById("space").innerHTML = "Pete's Paradise";
}

var cookie = document.getElementById("cookie");

function cookieClick() { 
    num = num + score;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;        
}

function tark() {
    if(num >= 50){
        num = num-50;
        setInterval(cookieClick, 200);
    }
}

function ear() {
    if(num >= 200){
        num = num-200;
        setInterval(cookieClick, 100);
    }
}

function harrison() {
    if(num >= 500){
        num = num-500;
        setInterval(cookieClick, 20);
    }
}

function parker() {
    if(num >= 1000){
        num = num-1000;
        setInterval(cookieClick, 10);
    }
}

function hillenbrand() {
    if(num >= 3000){
        num = num-3000;
        setInterval(cookieClick, 2);
    }
}

function starShip() {
    if(num >= 1){
        num = num - 1;
        score = 2; 
    }
}

function hammer(){
    if(num >= 5000)
}
