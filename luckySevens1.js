/* Javascript code for luckySevens file goes here */
// using layout for clickToAddItems; eliminating num2 and changing
// appropriate variables, classes, id's
		
//code to validate, clear, and reset data entered where needed so game can be played and
// values are 
function clearErrors() {   
    for (var loopCounter = 0; 
        loopCounter < document.forms["startGame"].elements.length; 
        loopCounter++) {
        if (document.forms["startGame"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["startGame"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["startGame"]["startingBet"].value = "$0.00";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.forms["startingBet"]["num"].focus();
}

function validateItems() {
    clearErrors();
    var money = document.forms["startGame"]["StartingBet"].value;
    if (money <= 0 || isNaN(money)) {
        alert("input must be filled in with a positive integer.");
        document.forms["startGame"]["startingBet"]
           .parentElement.className = "form-group has-error";
        document.forms["startGame"]["startingBet"].focus();
    }
	
	
	
	
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again";
   document.getElementById("startingBet").innerText = Number(num);
   document.getElementById("totalRolls").innerText = rollCounter;
   document.getElementById("maxMoney").innerText = totalMax;
   document.getElementById("rollsOfMax").innerText = numRolls;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
	return false;


}	
	
