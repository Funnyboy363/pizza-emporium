// JavaScript Document
/*jslint browder:true */
"use strict";




var pizzaTopping = {
	topping1: "",
	topping2:  "",
	crust1: "",
	crust2: "",
	pizzaSmall: "",
	pizzabig: "",


toppingAdd: function() {
	var toppingAdd = "" +pizzaTopping.pizzaSmall + "" +pizzaTopping.topping2 +pizzaTopping.topping1+ "" +pizzaTopping.crust1+ ""; 
	document.getElementById('pizzatime').innerHTML = toppingAdd;
}
};

function pizzaTotal () {
 var greeting;
	if (pizzaTopping = pizzaTopping.topping2) {
   greeting = "1 can of pasta sauce, 1 bag of flour, 1 bag of cheese, half bag of meat";

}

else if (pizzaTopping = pizzaTopping.topping1) {
	greeting = "1 can of marinara sauce, 2 cans of meat, half a can of flour";
}

else {
   greeting = "3 Cans of Pasta Sauce, 2 bag of flour, 2 bag of cheese, 2 bags of meat";
} 
document.getElementById("total").innerHTML = greeting;
} 