
//initial number of cookies    
var num = 0; //curent money
var score = 1; 
    //stats variables
var totalBoost = 0; 
var numAssociatesDegree = 0;
var numBachelorsDegree = 0;
var numAMastersDegree = 0;
var numPhD = 0;
var numProfessors = 0;
    //boost per degree declarations
var associatesBoost = 50;
var bachelorsBoost = 100;
var mastersBoost = 200;
var PhDBoost = 400;
var professorBoost = 1000;
    //initiates Dps mult
var dps = 0;
var dpsMult = 1;
var dpsNoMult = 0; // dollars per seconds
    //base prestige costs
var associatesCost = 50000;
var bachelorsCost = 100000;
var mastersCost = 250000;
var PhDCost = 400000;
var professorCost = 1000000;
var randNum;
    //prestige results
var prestigeResult = "";
var inp = 0; //= prompt("Please enter DD amount: ");
window.onload = function () {
        setInterval(updatenum, 10);
        setInterval(randomEvents, 30000); 
        setInterval(function() {
            document.getElementById("assno").innerHTML = numAssociatesDegree;
        document.getElementById("bachno").innerHTML = numBachelorsDegree;
        document.getElementById("masterno").innerHTML = numAMastersDegree;
        document.getElementById("phdno").innerHTML = numPhD;
        document.getElementById("proffno").innerHTML = numProfessors;
        document.getElementById("multip").innerHTML = dpsMult * 100 - 100;
        }, 1000);
        
}

var cookie = document.getElementById("cookie");

function cookieClick() { 

    num = num + score;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function tarkBought() { 

    num = num + 0.25 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function owenBought() { 

    num = num + 0.5 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function meridithBought() { 

    num = num + 1.25 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function mccutcheonBought() { 

    num = num + 2.5 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function earhartBought() { 

    num = num + 5 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function shreveBought() { 

    num = num + 10 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function carryBought() { 

    num = num + 25 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function harrisonBought() { 

    num = num + 50 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function hawkinsBought() { 

    num = num + 100 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function HonorsBought() { 

    num = num + 250 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function windsorBought() { 

    num = num + 500 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function parkerBought() { 

    num = num + 1000 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function hillenbrandBought() { 

    num = num + 5000 * dpsMult;
   var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;

    var dollps = document.getElementById("dpsps");
     dollps.innerHTML = dps;
     getPicture();
    if (inp) {
        num = parseInt(inp);
        inp = null;
    }
}

function updatenum() {
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;
}

var arr = [];

function tark() {
    if(num >= 20){
        num = num - 21;
        dpsNoMult = dpsNoMult + 0.25;
        updateDps();
        cookieClick();
        arr.push(setInterval(tarkBought, 1000));
    }
}

function owen() {
    if(num >= 50){
        num = num - 50;
       dpsNoMult = dpsNoMult + 0.5;
       updateDps();
       cookieClick();
       arr.push(setInterval(owenBought, 1000));
    }
}

function meredith() {
    if(num >= 250){
        num = num - 250;
       dpsNoMult = dpsNoMult +1.25;
       updateDps();
       cookieClick();
       arr.push(setInterval(meridithBought, 1000));
    }
}

function mccutch() {
    if(num >= 500){
        num = num-500;
        dpsNoMult = dpsNoMult + 2.5;
        updateDps();
        cookieClick();
        arr.push(setInterval(mccutcheonBought, 1000));    
    }
}

function ear() {
    if(num >= 1250){
        num = num-1250;
        dpsNoMult = dpsNoMult + 5;
        updateDps();
        cookieClick();
        arr.push(setInterval(earhartBought, 1000));
    }
}

function shreve() {
    if(num >= 5000){
        num = num - 5000;
       dpsNoMult = dpsNoMult + 10;
       updateDps();
       cookieClick();
       arr.push(setInterval(shreveBought, 1000));    
    }
}

function carry() {
    if(num >= 12500){
        num = num - 12500;
        dpsNoMult = dpsNoMult + 25;
        updateDps();
        cookieClick();
        arr.push(setInterval(carryBought, 1000));
    }
}

function harrison() {
    if(num >= 40000){
        num = num-40000;
       dpsNoMult = dpsNoMult + 50;
       updateDps();
       cookieClick();
       arr.push(setInterval(harrisonBought, 1000));
    }
}

function hawkins() {
    if(num >= 100000){
        num = num-100000;
        dpsNoMult = dpsNoMult + 100;
        updateDps();
        cookieClick();
        arr.push(setInterval(hawkinsBought, 1000));
    }
}

function honors() {
    if(num >= 300000){
        num = num-300000;
        dpsNoMult = dpsNoMult + 250;
        updateDps();
        cookieClick();
        arr.push(setInterval(honorsBought, 1000));
    }
}

function windsor() {
    if(num >= 750000){
        num = num-750000;
      dpsNoMult = dpsNoMult + 500;
        updateDps();
      cookieClick();
      arr.push(setInterval(windsorBought, 1000));
    }
}

function parker() {
    if(num >= 2000000){
        num = num-2000000;
        dpsNoMult = dpsNoMult + 1000;
        updateDps();
        cookieClick();
        arr.push(setInterval(parkerBought, 1000));
    }
}

function hillenbrand() {
    if(num >= 10000000){
        num = num-10000000;
       dpsNoMult = dpsNoMult + 5000;
       updateDps();
       cookieClick();
       arr.push(setInterval(hillenbrandBought, 1000));
    }
    
}

function updateDps() {
    dps = dpsNoMult * dpsMult;
}

//Stats and Prestige
//<ins> button and GUI

    //logic
function updateDpsBoost() {
    dpsMult = 1 + (totalBoost / 100);
}

function updatePrestigeCost(){
    associatesCost = associatesCost + 0.9 * (dpsMult);
    bachelorsCost = bachelorsCost + 0.9 * (dpsMult);
    mastersCost = mastersCost + 0.9 * (dpsMult);
    PhDCost = PhDCost + 0.9 * (dpsMult);
    professorCost = professorCost + 0.9 * (dpsMult);
}

function gainAssociatesDegree() {
    numAssociatesDegree++;
    totalBoost += 50;
    updateDpsBoost();
    updatePrestigeCost();
}

function gainBachelorsDegree() {
    numBachelorsDegree++;
    totalBoost += 100;
    updateDpsBoost();
    updatePrestigeCost();
}

function gainMastersDegree() {
    numMastersDegree++;
    totalBoost += 200;
    updateDpsBoost();
    updatePrestigeCost();
}

function gainPhD() {
    numPhD++;
    totalBoost += 400;
    updateDpsBoost();
    updatePrestigeCost();
}

function gainProffesor() {
    numProfessors++;
    totalBoost += 1000;
    updateDpsBoost();
    updatePrestigeCost();
}

function prestigecheck() {
    if (num > associatesCost) {
        if (num > bachelorsCost) {
            if (num > mastersCost) {
                if (num > PhDCost) {
                    if (num > professorCost) {
                        alert("Professor!")
                    } else {
                        alert("PhD!")
                    }
                } else {
                    alert("Master's Degree!")
                }
            } else {
                alert("Bachelor's Degree!")
            }
        } else {
            alert("Associate's Degree!")
        }
    } else {
        alert("Nothing!")
    }
}

function prestige() {
    if (num > associatesCost) {
        if (num > bachelorsCost) {
            if (num > mastersCost) {
                if (num > PhDCost) {
                    if (num > professorCost) {
                        gainProffesor();
                    } else {
                        gainPhD();
                    }
                } else {
                    gainMastersDegree();
                }
            } else {
                gainBachelorsDegree();
            }
        } else {
            gainAssociatesDegree();
        } 
    } else {
        console.log("BRUHHHH");
    }
    num = 0;
    dps = 0;
    dpsNoMult = 0;
    arr.map((a) => {
        console.log(a)
        clearInterval(a);
        arr = [];
      })
    document.getElementById("assno") = numAssociatesDegree;
    document.getElementById("bachno") = numBachelorsDegree;
    document.getElementById("masterno") = numAMastersDegree;
    document.getElementById("phdno") = numPhD;
    document.getElementById("proffno") = numProfessors;
    }

//finding the picture
function getPicture() {
    if(num > 1000000) {
        document.getElementById("pete").src = "img/reallyhappy.png";
    } else {
        if(num > 100000) {
            document.getElementById("pete").src = "img/bithappy.png";
        } else {
            if(num > 10000) {
                document.getElementById("pete").src = "img/slightlypissed.png";
            } else {
                if(num > 100) {
                    document.getElementById("pete").src = "img/lessSad.png";
                } else {
                    document.getElementById("pete").src = "img/sad.png";
                }
            }
        }
    }
   
}

function randomEvents() {

randNum =  Math.random();
if (randNum < 0.1) {
callRandomEvent();

}
}

function callRandomEvent() {

   if (randNum < .033) {
    
    document.getElementById("starship").hidden = false;
   }else if(randNum < .066) {

    document.getElementById("daniels").hidden = false;
   }else if(randNum < 0.1){
    
    document.getElementById("iusucks").hidden = false;
   }
}

function clickstar() {
    num = 2* num;
    document.getElementById("starship").hidden = true;

}
function clickdanny() {
    num = 2* num;
    document.getElementById("daniels").hidden = true;
}
function clickiu() {
    num = 2* num;
    document.getElementById("iusucks").hidden = true;
}

/*


function loadGame() {
    
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeOf (savedGame.score != "undefined")) num = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) score = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) totalBoost = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) numAssociatesDegree = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) numBachelorsDegree = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) numAMastersDegree = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) numPhD = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) numProfessors = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) associatesBoost = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) bachelorsBoost = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) mastersBoost = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) PhDBoost = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) professorBoost = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) dpsMult = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) dps = savedGame.score;
    if (typeOf (savedGame.score != "undefined")) associatesCost = savedGame.score;  
    if (typeOf (savedGame.score != "undefined")) bachelorsCost = savedGame.score; 
    if (typeOf (savedGame.score != "undefined")) mastersCost = savedGame.score; 
    if (typeOf (savedGame.score != "undefined")) PhDCost = savedGame.score; 
    if (typeOf (savedGame.score != "undefined")) professorCost = savedGame.score; 
    if (typeOf (savedGame.score != "undefined")) prestigeResult = savedGame.score; 
    if (typeOf (savedGame.score != "undefined")) randNum = savedGame.score;

}




function saveGame() {
var gameSave = {
num: num,
score: score,
totalBoost: totalBoost,
numAssociatesDegree: numAssociatesDegree,
numBachelorsDegree: numBachelorsDegree,
numAMastersDegree: numAMastersDegree,
numPhD: numPhD,
numProfessors: numProfessors,
associatesBoost: associatesBoost,
bachelorsBoost: bachelorsBoost,
mastersBoost: mastersBoost,
PhDBoost: PhDBoost,
professorBoost: professorBoost,
dpsMult: dpsMult,
dps: dps,
associatesCost: associatesCost,
bachelorsCost: bachelorsCost,
mastersCost: mastersCost,
PhDCost: PhDCost,
professorCost: professorCost,
prestigeResult: prestigeResult,
randNum: randNum,
};
localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

window.onload = function() {

    loadGame();

};

window.onbeforeunload = function() {
                savegame();
            }

setInterval(function() {

    saveGame();
}, 30000); // 30,000ms is 30 seconds; saves game every 30 seconds




// <button onclick="saveGame()">Save Game</button>

<<<<<<< HEAD

//rules
Welcome to Pete's Paradise!
Click on Pete's face to begin earning dining dollars! Dining dollars can be used to buy dorms and gain Purdue victories to improve your money making ability. Your goal is
to pay off your college tuition and get your degree! Click the 'Check Prestige' button to see which degree you can get and the 'Prestige' button to cash out and earn your
degree. Degrees will reset all of your stats except for your multipliers to aid you in earning your next degree. Now begin by clicking 'Ok' and begin earning your degree!
*/
