let score = 0;
let scorebooster = 1;
let is2locked = 0;
let is5locked = 1;
let is10locked = 1;
//ADD SCORE ()
function addScore(){
    score = score + scorebooster;
   document.getElementById("scored").innerHTML = score;
}
//SCORE PLUS ()
function scorePlus(count = 1){
    score = score + count;
    document.getElementById("scored").innerHTML = score;
}
//SCORE MULTIPLY ()
function scoreMultiply(count = 1){
    score = score * count;
    document.getElementById("scored").innerHTML = score;
}
//SCORE MINUS ()
function scoreMinus(count = 1) {
    score = score - count;
    document.getElementById("scored").innerHTML = score;
}
//SCORE DIVIDE ()
function scoreDivide(count = 1, isModule = 0) {
    if (isModule === 1) {
        score = score % count;
    } else if (isModule === 0) {
        score = score / count;
    } else {
        console.log("Argument \"IsModule\" > 1 or < 0. (isModule=" + isModule + ")");
    }
    document.getElementById("scored").innerHTML = score;
}
//SCORE CLEAR ()
function scoreClear(){
    score = 0;
    document.getElementById("scored").innerHTML = score;
}
//UPGRADE GET ()
function upgradeGet(){
    if (scorebooster === 2) {
        console.log("Player's upgrade number is 1. (scorebooster=" + scorebooster + ")");
    } else if (scorebooster === 5){
        console.log("Player's upgrade number is 2. (scorebooster=" + scorebooster + ")");
    } else {
        console.log("Error. Scorebooster == " + scorebooster)
    }
}
//UPGRADE SET ()
function upgradeSet(upgradeNumber = 1) {
    if (upgradeNumber === 1) {
        scorebooster = 2;
        console.log("Set to 1.");
        console.log("scorebooster=" + scorebooster);
    } else if (upgradeNumber === 2) {
        scorebooster = 5;
        console.log("Set to 2.");
        console.log("scorebooster=" + scorebooster);
    }
}
/*
            UPGRADE FUNCTION (upgrade(upgradeNumber))
*/
function upgrade(upgradeNumber = 1) {
    if (upgradeNumber === 1) {
        // FOR 2 //
        if (!(scorebooster === 2) && is2locked === 0 || !(scorebooster === 5) || !(scorebooster === 10)) {
            if (score >= 5500) {
                scorebooster = 2;
                document.getElementById("twoperclick").innerHTML = "+2 per click (bougth)";
                document.getElementById("twoperclick").onclick = "Empty()";
                score = score - 5500;
                document.getElementById("scored").innerHTML = score;
                is5locked = 0;
            } else {
                console.log("Not enough money for this buy. (un:" + upgradeNumber + ")");
            }
        }
        // FOR 2 //
    } else if (upgradeNumber === 2) {
        if (is5locked === 0 && !(scorebooster === 5)) {
            if (score >= 28000){
                scorebooster = 5;
                document.getElementById("fiveperclick").innerHTML = "+5 per click (bougth)";
                document.getElementById("fiveperclick").onclick = "Empty()";
                score = score - 28000;
                document.getElementById("scored").innerHTML = score;
                is10locked = 0;
            }
        }
    } else if (upgradeNumber === 3) {
        if (is5locked === 0 && !(scorebooster === 5)) {
            if (score >= 28000){
                scorebooster = 5;
                document.getElementById("fiveperclick").innerHTML = "+5 per click (bougth)";
                document.getElementById("fiveperclick").onclick = "Empty()";
                score = score - 28000;
                document.getElementById("scored").innerHTML = score;
                is10locked = 0;
            }
        }
    } else {
        console.log("Number that you entered doesent exists. (upgradeNumber=" + upgradeNumber + ")");
    }
}
// EMPTY ()
function Empty(){
    
}
