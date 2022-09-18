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
var dpsMult = 1;
var dps = 0; // dollars per seconds
    //base prestige costs
var associatesCost = 50000;
var bachelorsCost = 100000;
var mastersCost = 250000;
var PhDCost = 400000;
var professorCost = 1000000;
var randNum;
    //prestige results
var prestigeResult = "";
window.onload = function () {
        setInterval(updatenum, 10);
        setInterval(randomEvents(), 30000); 
}

var cookie = document.getElementById("cookie");

function cookieClick() { 

    num = num + score;
    var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;
     getPicture();        
}

function updatenum() {
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;
}

function tark() {
    if(num >= 20){
        num = num-20;
        dps = dps + 0.25;
        cookieClick();
        setInterval(cookieClick, 1000/0.25);
    }
}

function owen() {
    if(num >= 50){
        num = num-50;
       dps = dps +0.5;
       cookieClick();
       setInterval(cookieClick, 1000/0.5);
    }
}

function meredith() {
    if(num >= 250){
        num = num - 250;
       dps = dps +1.25;
       cookieClick();
       setInterval(cookieClick, 1000/1.25);
    }
}

function mccutch() {
    if(num >= 500){
        num = num-500;
        dps = dps + 2.5;
        cookieClick();
        setInterval(cookieClick, 1000/2.5);
    }
}

function ear() {
    if(num >= 1250){
        num = num-1250;
        dps = dps + 0.5;
        cookieClick();
        setInterval(cookieClick, 1000/0.5);
    }
}

function shreve() {
    if(num >= 5000){
        num = num - 5000;
       dps = dps + 10;
       cookieClick();
       setInterval(cookieClick, 1000/10);
    }
}

function carry() {
    if(num >= 12500){
        num = num - 12500;
        dps = dps + 25;
        cookieClick();
        setInterval(cookieClick, 1000/25);
    }
}

function harrison() {
    if(num >= 40000){
        num = num-40000;
       dps = dps + 50;
       cookieClick();
       setInterval(cookieClick, 1000/50);
    }
}

function hawkins() {
    if(num >= 100000){
        num = num-100000;
        dps = dps + 100;
        cookieClick();
        setInterval(cookieClick, 1000/100);
    }
}

function honors() {
    if(num >= 300000){
        num = num-300000;
        dps = dps + 250;
        cookieClick();
        setInterval(cookieClick, 1000/250);
    }
}

function windsor() {
    if(num >= 750000){
        num = num-750000;
      dps = dps + 500;
      cookieClick();
      setInterval(cookieClick, 1000/500);
    }
}

function parker() {
    if(num >= 2000000){
        num = num-2000000;
        dps = dps + 1000;
        cookieClick();
        setInterval(cookieClick, 1000/1000);
    }
}

function hillenbrand() {
    if(num >= 10000000){
        num = num-10000000;
       dps = dps + 5000;
       cookieClick();
       setInterval(cookieClick, 1000/5000);
    }
    
}


//Stats and Prestige
//<ins> button and GUI

    //logic
function updateDpsBoost() {
    dpsMult = 1 + (totalBoost / 100);
}

function updatePrestigeCost(){
    associatesCost += 0.9(dpsMult);
    bachelorsCost += 0.9(dpsMult);
    mastersCost += 0.9(dpsMult);
    PhDCost += 0.9(dpsMult);
    ProfessorCost += 0.9(dpsMult);
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
   // call starship
   }else if(randNum < .066) {
   // call daddy daniels
   }else if(randNum < 0.1){
   // call IU Sucks 
   }
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

setInterval(function() {

    saveGame();
}, 30000); // 30,000ms is 30 seconds; saves game every 30 seconds




// <button onclick="saveGame()">Save Game</button>

*/