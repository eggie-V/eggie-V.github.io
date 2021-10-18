
/* getInput(): Create a form to take in user input for the two variables
 * Parameter: none
 * Return: An array with index 0 = x, index 1 = y
*/

function getInput(proceed){
	event.preventDefault();
	var x = document.getElementById("x_Var").value;
	var y = document.getElementById("y_Var").value;
	if (proceed) {
		var amicable = isFactor(x,y);
		// "The numbers you entered are: " + amicable);
		if (amicable) {
		document.getElementById("answer_statement").innerHTML = " The numbers " + x + " and " + y +" are amicable";
		} else {
			document.getElementById("answer_statement").innerHTML = " The numbers " + x + " and " + y +" are not amicable";
		}
	}

	} 


/* validate(): Ensure both variables are stored with a nonempty value.
 * Parameter: none
 * Return: error or none
 */

 function validate() {
 	err = false;
 	document.getElementById("errVariable_x").style.display = "none";
 	document.getElementById("errVariable_y").style.display = "none";
 	with(document.collect)
 	{
 		if (variable_X.value == ""){
 			document.getElementById("errVariable_x").style.display = "inline-block";
 			variable_X.focus();
 			err = true;
 		}
 		if (variable_Y.value == ""){
 			document.getElementById("errVariable_y").style.display = "inline-block";
 			variable_Y.focus();
 			err = true;
 		}
 	}
 }

/* isFactor(): Check whether these two variables are amicable
 * Parameter: x, y 
 * Return: boolena - true if they are amicable, false if they aren't
*/
function isFactor(x,y){
	var factor_x = []; //store all factors of x
	var factor_y = []; //store all factors of y
	var sum_x = 0;
	var sum_y = 0;
	let index_x = 0;
	let index_y = 0;

	for (let i = 1; i < x; i++) {
		if (x%i == 0 && i != x){
			factor_x[index_x] = i;
			sum_x += i;
			index_x++;
		}
	}

	for (let j = 1; j < y; j++){
		if (y%j == 0 && j != y){
			factor_y[index_y] = j;
			sum_y += j;
			index_y++;
		}

	}
	alert("Factors of " + x + " is:" + factor_x +"\n"+
		  "Factors of " + y + " is:" + factor_y);
	if (sum_x == y && sum_y == x){
		return true;
	} else {
		return false;
	}
}

/* find(): Main function, if not input nothing is run, else run
 * Parameter: none
 * Return: none
 */
 function find(){
 	var proceed = !validate();
 	if (proceed){
 		getInput(proceed);
 	}
 	return false;
 }