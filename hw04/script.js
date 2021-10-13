		var num_hotdog = 0;
		var num_fries  = 0;
		var num_drinks = 0;
		var tax = 0;
		var flat_total = 0;
		var tax_total = 0;
		var found = 0;
		// var item;
		const available_item = ["hotdogs", "fries", "drinks"];

		function cashier_order() {
			alert("Welcome to Joe's Pizza. \nPlease enter what you would like to order.");
			var order_item = prompt("What would you like to order？ \nIf you are done, type check.", "We offer fries, hotdogs and drinks.");
			while (order_item != "check") {
				for (i = 0; i < available_item.length; i++){
					if (order_item == available_item[i]) {
						found = 1;
						if (i == 0) {
							order_hot_dogs();
						} else if (i == 1) {
							order_french_fries();
						} else if (i == 2) {
							order_drinks();
						}
					}
				}
				if (found!= 1) {
					alert("Sorry we don't currently have your order.");
				}
				order_item = prompt("What would you like to order？ \n If you are done, type check.", "We offer french fries, hotdogs and drinks.");
			}
			alert("Please click on \"I am ready to pay\" for your receipt");
		}


		// function order_hamburger(): Users are prompted to input the number of hot dogs one would like to order
		function order_hot_dogs(){
			num_hotdog = prompt("How many hot dogs would you like to order?", "2");
			if (num_hotdog <= 0) {
				alert("Please re-enter your order.");
			} else{
				alert("Order Successfully placed!");
			}
		}

		// function order_french_fries(): Users are prompted to input the number of french fries one would like to order 
		function order_french_fries() {
			num_fries = prompt("How many french fries would you like to order?", "2");
			if (num_fries <= 0) {
				alert("Please re-enter your order.");
			} else {
				alert("Order Successfully placed!");
			}
		}

		// function order_drinks(): Users are prompted to input the number of drinks one would like to order 
		function order_drinks() {
			num_drinks = prompt("How many soda would you like to order?", "3");
			if (num_drinks <= 0) {
				alert("Please re-enter your order.");
			} else{
				alert("Order Successfully placed!");
			}
		
		}

		// function calc_total(): Internal calculations of the flat total without special discount
		function calc_total(){
			flat_total = num_hotdog*(3.75) + num_fries*(2.0) + num_drinks*(1.50);
			if (flat_total >= 20){
				flat_total = flat_total * (1-0.10);
			}
			tax_total = flat_total*(1 + 0.0625);
			tax = flat_total*(0.0625);
		}

		function display(){
			calc_total();
			alert("You are about to see the receipt.");
			document.write("Items ordered: " + "<br>" +
                   "- Hotdog: x" + num_hotdog + "<br>" +
                   "- Fries: x" + num_fries + "<br>" +
                   "- Drink: x" + num_drinks + "<br>" + "<br>")
			document.write("----------------------------" + "<br>" +
                   "SUBTOTAL: $" + flat_total.toFixed(2) + "<br>" +
                   "TAX: $" + tax.toFixed(2) + "<br>" +
                   "TOTAL DUE: $" + tax_total.toFixed(2) + 
                   "<br>");
			document.write("Refresh page to place more orders. Thank you for shopping with Joe's Hot Dog.");
		}
			

