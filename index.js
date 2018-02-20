var calculator_choice = prompt("What kind of calculator would you like to use?: (1)Basic (2)Advanced");

if (calculator_choice=="Basic") {
alert("You have chosen the basic calculator");
	var num1 = parseInt (prompt("Enter your first number"));
	var num2 = parseInt (prompt ("Enter your second number"));
	var operate = prompt ("what operator would you like to use");
}
else if (calculator_choice=="Advanced") {
alert("You have chose then advanced calculator");
}

if (operate = "+"){
	alert (num1 + num2);
} else if (operate = "-") {
	alert (num1 - num2);
} else if (operate = "*") {
	alert (num1 * num2);
} else if (operate = "/"); {
	alert (num1 / num2);
}



