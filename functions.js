function runGame() {
	
	let playerScore = 0;

	// for
	
	//
	for (let i=0; i<35; i++){
		let roll1 = rollDie(6);
		let roll2 = rollDie(5);
		let roll3 = rollDie(4);
		let roll4 = rollDie(3);
		let roll5 = rollDie(2);
		let roll6 = rollDie(1);
		let playerRollResults = [roll1, roll2, roll3, roll4, roll5, roll6];
			playerScore += determinePointsEarned(playerRollResults);
			console.log(playerScore)
			if (i === 34){	
				console.log("Your Final Score is " + playerScore)
			} ///console.log(" Total Points Earned " + playerScore)
		}
	}

function determinePointsEarned(playerRolls) {
	playerRolls = playerRolls.sort();
	let pointsEarned3000 = [1,2,3,4,5,6]
	for(let i =0; i<playerRolls.length; i++){
 		if (playerRolls[i] === pointsEarned3000[i]) {
 			if (playerRolls.length === i){
 				console.log("You collected 3000 points");
 					return 3000;
 			}
 		}
		else {
			break;
 		}
	}
	let countOfOnes = 0;
	for(let i =0; i<playerRolls.length; i++){
		if (playerRolls[i] === 1) {
			countOfOnes++;
			if (countOfOnes === 3){
				console.log("You collected 1000 points");
				return 1000;
			}	
		}
	}
	let countOfFours = 0;
	for(let i =0; i<playerRolls.length; i++){
		if (playerRolls[i] === 4) {
			countOfFours++;
			if (countOfFours === 3){
				console.log("You collected 400 points")
					return 400;
			}
		}
	}
	let countOfThrees = 0;
	for(let i =0; i<playerRolls.length; i++){
		if (playerRolls[i] === 3) {
			countOfThrees++;
			if (countOfThrees === 3){
				console.log("You collected 300 points")
				return 300;
			}
		}	
	}
	let countOfTwos = 0;
	for(let i =0; i<playerRolls.length; i++){
		if (playerRolls[i] === 2) {
			countOfTwos++;
			if (countOfTwos === 3){
				console.log("You collected 200 points")
				return 200;
			}
		}
	}

	return 0;
}

function rollDie(numberOfSides){
	let iRollDice = Math.floor(Math.random() * numberOfSides) + 1;
	console.log(iRollDice);
	return iRollDice 
}
runGame();

// 1-2-3-4-5-6 = 3000 Points
// Three 1's = 1000 Points
// Three 4's = 400 Points
// Three 3's = 300 Points
// Three 2's = 200 Points



// let	iRandomNumber;
	// let iRollDice;
	// let i;

	// iRollDice = prompt("How many times do you want to roll the dice?", 5);



// for (i=1; i<=iRollDice; i++){
// iRandomNumber = Math.ceil(Math.random()*6);
// document.writeIn(iRandomNumber+"<br>");
// }
// document.writeIn("----Finished ----")
