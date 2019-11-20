//creating function to play Lucky Sevens
function luckySevens(){
//declaring variables
var startingBet = document.getElementById("startingBet").value;
var money = 0;
var money = startingBet;
var moneyArr = [startingBet];
var die1 = 0;
var die2 = 0;
var dice = 0;
var win = 4;
var loss = 1;
var rollCounter = 0;


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

} // end of lucky sevens function