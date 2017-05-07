//naming variables
var wins = 0 ;
var losses = 0;

var RandomNumber = generateRandomNum(19,120);

var gemsArray = $(".gems");

var userScore = 0;

//functions
//---------------------------------------------
//pseudo code step 1: generate a random number btw. 19-120 & print it out to the screen
function generateRandomNum(min, max) {
	return Math.floor(Math.random () * (max - min+1)) + min;
}

//pseudo code step 2: assign random number to gems btw. 1-12
function gemNum(){
	for (var i=0; i < gemsArray.length; i++) {
		gemsArray[i].value = generateRandomNum(1, 12);
	}
}

function intGame() {
	$("#winsDisplay").append(wins);
	$("#lossesDisplay").append(losses);
	$("#displayRandomNumber").append(RandomNumber);
	$("#displaysYourTotalScore").append(userScore);
	gemNum();
}

//pseudo code step 4: if score = random no. increase win, else if score > random number increase loss
function winOrLose() {
	if (RandomNumber === userscore){
		wins++;
		$("#winsDisplay").append(wins);
		reset()
	}
	else if (RandomNumber < userscore){
		losses++;
		$("#lossesDisplay").append(losses);
		reset()
	}
}

//pseudo code step 5: reset userscore & gem numbers & regenerate a new random number to the screen
function reset(){
	userscore = 0;
	RandomNumber = generateRandomNum(19,120);
	gemNum();
	$("#winsDisplay").append(wins);
	$("#lossesDisplay").append(losses);
	$("#displayRandomNumber").append(RandomNumber);
	$("#displaysYourTotalScore").append(userScore);
}

//-----------MAIN PROGRAM---------------------------------
intGame()
//pseudo code step 3: when player clicks on gems add randomly generated number to scoreboard
$(gemsArray).on("click", function(event){
	console.log(event);
	console.log(this);
	console.log(this.value);
	var gemVal = this.value;
	userScore = userScore + gemVal;
	console.log(userscore);
	$("#displaysYourTotalScore").html(userscore)
	winOrLose();
});




