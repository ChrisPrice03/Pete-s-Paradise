
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
window.onload = function () {
        setInterval(updatenum, 10);
        setInterval(randomEvents(), 30000); 
        document.getElementById("assno").innerHTML = toString(numAssociatesDegree);
        document.getElementById("bachno").innerHTML = toString(numBachelorsDegree);
        document.getElementById("masterno").innerHTML = toString(numAMastersDegree);
        document.getElementById("phdno").innerHTML = toString(numPhD);
        document.getElementById("proffno").innerHTML = toString(numProfessors);
        
}

var cookie = document.getElementById("cookie");

function cookieClick() { 

    num = num + score;
    var numbers = document.getElementById("numbers");
     numbers.innerHTML = num;
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

function tark() {
    if(num >= 20){
        num = num-20;
        dpsNoMult = dpsNoMult + 0.25;
        updateDps();
        cookieClick();
        setInterval(cookieClick, 1000/0.25);
    }
}

function owen() {
    if(num >= 50){
        num = num-50;
       dpsNoMult = dpsNoMult +0.5;
       updateDps();
       cookieClick();
       setInterval(cookieClick, 1000/0.5);
    }
}

function meredith() {
    if(num >= 250){
        num = num - 250;
       dpsNoMult = dpsNoMult +1.25;
       updateDps();
       cookieClick();
       setInterval(cookieClick, 1000/1.25);
    }
}

function mccutch() {
    if(num >= 500){
        num = num-500;
        dpsNoMult = dpsNoMult + 2.5;
        updateDps();
        cookieClick();
        setInterval(cookieClick, 1000/2.5);
    }
}

function ear() {
    if(num >= 1250){
        num = num-1250;
        dpsNoMult = dpsNoMult + 0.5;
        updateDps();
        cookieClick();
        setInterval(cookieClick, 1000/0.5);
    }

function shreve() {
    if(num >= 5000){
        num = num - 5000;
       dpsNoMult = dpsNoMult + 10;
       updateDps();
       cookieClick();
       setInterval(cookieClick, 1000/10);
    }
}

function carry() {
    if(num >= 12500){
        num = num - 12500;
        dpsNoMult = dpsNoMult + 25;
        updateDps();
        cookieClick();
        setInterval(cookieClick, 1000/25);
    }
}

function harrison() {
    if(num >= 40000){
        num = num-40000;
       dpsNoMult = dpsNoMult + 50;
       updateDps();
       cookieClick();
       setInterval(cookieClick, 1000/50);
    } 
}

function hawkins() {
    if(num >= 100000){
        num = num-100000;
        dpsNoMult = dpsNoMult + 100;
        updateDps();
        cookieClick();
        setInterval(cookieClick, 1000/100);
    }
}

function honors() {
    if(num >= 300000){
        num = num-300000;
        dpsNoMult = dpsNoMult + 250;
        updateDps();
        cookieClick();
        setInterval(cookieClick, 1000/250);
    } 
}

function windsor() {
    if(num >= 750000){
        num = num-750000;
      dpsNoMult = dpsNoMult + 500;
        updateDps();
      cookieClick();
      setInterval(cookieClick, 1000/500);
    } 
}

function parker() {
    if(num >= 2000000){
        num = num-2000000;
        dpsNoMult = dpsNoMult + 1000;
        updateDps();
        cookieClick();
        setInterval(cookieClick, 1000/1000);
    } 
}

function hillenbrand() {
    if(num >= 10000000){
        num = num-10000000;
       dpsNoMult = dpsNoMult + 5000;
       updateDps();
       cookieClick();
       setInterval(cookieClick, 1000/5000);
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
    
    document.getElementById("iusuck").hidden = false;
   }
}
}