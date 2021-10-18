
/* generate_lucky(): Randomly generates a list of 5 numbers \
 * as winning numbers and 1 lucky ball number
 * Parameter: none
 * Return: Array list -- containing the machine generated 5 numbers

*/
function generate_lucky(){
	// Generate 5 Lucky Number 
	let max = 48;
	let min = 1;
	var lottery_winner = Array(5);
	for (let i = 0; i < 5; i++){
		var insert = Math.floor(Math.random()*(max - min + 1)) + min;
		while (lottery_winner.includes(insert)){
			insert = Math.floor(Math.random()*(max - min + 1)) + min;
			if (!lottery_winner.includes(insert)){
				break;
			}
		}
		lottery_winner[i] = insert;
   	}
   	lottery_winner.sort(function(a, b){return a-b});
   	document.getElementById("win_num").innerHTML = "Winning Number sorted: " + lottery_winner.join(" ");
   	// Generate "Lucky Ball" between 1 to 18
   	let max_ball = 18
   	var lucky_ball = Math.floor(Math.random()*(max_ball - min + 1)) + min
   	document.getElementById("ball_num").innerHTML = "The lucky ball number machine generated: " + lucky_ball;
   	console.log(lottery_winner);
   	return lottery_winner;
}


/* get_num(): Create the prompt for user input in the lucky ball 
	Parameter: none
	Return: Boolean -- whether the user's input lucky ball number matches
			with the computer generated.
*/
function get_num(){
	var user_lucky_ball = prompt("Enter ONE lucky ball number","i.e 1-18");
	var winning_lucky_ball = 15;
	var lucky_ball_matched = false;
	if (user_lucky_ball == winning_lucky_ball) {
		lucky_ball_matched = true;
	}
	document.getElementById('luck').innerHTML = "The lucky ball number pick: " + user_lucky_ball;
	if (lucky_ball_matched){
		document.getElementById("ball_match").innerHTML = "The lucky ball MATCHES!";
	} else {
		document.getElementById("ball_match").innerHTML = "The lucky ball does not match.";
	}
	return lucky_ball_matched;
}

/* get_list(): Create the prompt for user input in the number list
 * Parameter: none
 * Return: integer variable -- number of elements matched between the 
 			user input list and the computer generated list
*/
function get_list(){
	var winning_numbers = generate_lucky();
	console.log(winning_numbers);
	var user_lists = prompt("Please enter 5 numbers, separate by space.","i.e:1,2,3,4,5");
	while (!user_lists) { 
		// keep running until something is entered
		// fewer than 5 values entered results in incorrect findings
		// alert("enter the while loop");
		user_lists = prompt("Please enter 5 numbers, separate by space.","i.e:1,2,3,4,5");
	}
	var user_choices_list = user_lists.split(/(\s+)/).filter( e => e.trim().length > 0);
	for (let i = 0; i < 5; i++) {
		console.log(user_choices_list[i]);
	}
	user_choices_list.sort(function(a, b){return a-b});
	var num_list_matched = 0;
	for(let i  = 0; i < winning_numbers.length; i++) {
		console.log(winning_numbers[i]);
		console.log(user_choices_list[i]);
		if (winning_numbers[i] == user_choices_list[i]){
			num_list_matched = num_list_matched + 1;
		}
	}
	// console.log(num_list_matched);
	document.getElementById("number_input").innerHTML = "Random pick: " + user_choices_list.join(" ");
	document.getElementById("match_times").innerHTML = "Numbers matching: " + num_list_matched;
	return num_list_matched;
}


/* calc(): call on calculation functions and to determine payout value
 * Parameter: none
 * Return: statement that displays payout
*/
function calc() {
	var num_matched = get_list(); //integer
	console.log(num_matched);
	// generate_lucky();
	var lucky_matched = get_num(); //boolean 
	var payout ="You didn't have any rewards, but thanks for playing.";
	if (num_matched == 5){
		if (lucky_matched) {
				payout = "$ 7000 and a WEEK for LIFE";
			} else {
				payout = "25,000 a YEAR for LIFE";
			}
	} else if (num_matched == 4) {
		if (lucky_matched) {
				payout = "$ 5,000";
			} else {
				payout = "$ 200";
			}	
	} else if (num_matched == 3) {
		if (lucky_matched) {
			payout = "$ 150";
		} else {
			payout = "$ 20";
		}
	} else if (num_matched == 2) {
		if (lucky_matched) {
			payout = "$ 25";
		} else {
			payout = "$ 3";
		}
	} else if (num_matched == 1) {
		if (lucky_matched) {
			payout = "$ 6";
		}
	} else if (num_matched == 0){
		if (lucky_matched) {
			payout = "$ 4";
		}
	} 
	return payout;		
}


/*  display(): Main function 
 *  Parameters: none
 *  Return: none 
*/
function display() {
	// get_list();
	// get_num(); 
	document.getElementById("payout").innerHTML = " Your winning: " + calc();
}



