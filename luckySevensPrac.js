function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.forms["numberFun"]["num1"].focus();
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    if (num1 == "" || num1 <=0 || isNaN(num1)) {
        alert("Dollar amount must be a positive integer.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
//function luckySevens(){
//declaring variables
var startingBet = document.getElementById("num1").value;
var money = 0;
var money = startingBet;
var moneyArr = [startingBet];
var die1 = 0;
var die2 = 0;
var dice = 0;
var rollCounter = 0;
var win = 4;
var loss = 1;



//Do/while loop for rolling dice and recording win/loss data
	

	do{
		// use dice rolling function
		rollCounter++;
		die1 = Math.floor(Math.random() * 6) + 1;
		die2 = Math.floor(Math.random() * 6) + 1;	
		dice = die1+die2;

			// if/else loop to determine actions program performs for a winning or losing roll
			if (dice == 7){
			money = money+win; 
			//variables to keep track of current amount of money and pushes value into moneyArr
			var previousMoney = moneyArr[moneyArr.length -1]; 
			var currentMoney = previousMoney + win; 
			moneyArr.push(currentMoney);

			// LOSE
			}else {
			money--;
			var previousMoney = moneyArr[moneyArr.length -1];
			var currentMoney = previousMoney - loss;
			moneyArr.push(currentMoney);
			rollCounter = rollCounter++;
			}
			

	//action continues while money > 0
	}while(money>0);
	
	var totalMax = 0;

	totalMax = Math.max.apply(Math, moneyArr); // finds max $ held
	numRolls = moneyArr.indexOf(totalMax); // finds number of rolls that Max $ was held
	if(numRolls<1){
		numRolls = 0;
	}
//} // end of lucky sevens function
	
	
	//transfer game data to results table
	
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again";
   document.getElementById("startBet").innerText = Number(num1);
   document.getElementById("totalRolls").innerText = rollCounter;
   document.getElementById("maxMoney").innerText = totalMax;
   document.getElementById("rollsOfMax").innerText = numRolls;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
	return false;
	
   }