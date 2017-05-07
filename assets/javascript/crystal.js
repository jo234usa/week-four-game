//naming variables
var wins = 0 ;
var losses = 0;

var RandomNumber = generateRandomNum(19,120);

var gemsArray = [];

var userScore = 0;

//functions
//---------------------------------------------
//pseudo code step 1: generate a random number btw. 19-120 & print it out to the screen
function generateRandomNum(min, max) {
	return Math.floor(Math.random () * (max - min+1)) + min;
}

function gameDisplays() {
	// $("#winsDisplay").append(wins);
	// $("#lossesDisplay").append(losses);
	$("#displayRandomNumber").append(RandomNumber);
	// $("#displaysYourTotalScore").append(userScore);
}

//pseudo code step 2: assign random number to gems btw. 1-12
function gemNum(){
	for (var i=0; i < gemsArray.length; i++) {
		$("img").each(function(){
			var id = $(this).attr('id');
    		$(gemsArray).push(id);
			generateRandomNum(1, 12);
			console.log(diffGems);
		});
		// gemsArray[i].value = generateRandomNum(1, 12);
	}
}

gemNum()

gameDisplays()
//pseudo code step 3: when player clicks on gems add randomly generated number to scoreboard
// $(gemsArray).on("click", function(){
// 	var gemVal = this.value;
// 	userScore = userScore + gemVal;
// })
//pseudo code step 4: if score = random no. increase win, else if score > random number increase loss
//pseudo code step 5: reset userscore & gem numbers & regenerate a new random number to the screen



