$('button').click (function() {
var total = $('#total').val();
var money = $('#money').val();
var change = money - total;

var dollars = Math.floor((change * 100) / 100);
	//display dollars 
	$('#output').text(dollars);
var return1 = (change * 100) % 100
var quarters = Math.floor(return1 / 25)
	// Display Quarters
	$('#output2').text(quarters);
var return2 = return1 % 25;
var dimes = Math.floor(return2 / 10);
	//Display dimes
	$('#output3').text(dimes);
var return3 = return2 % 10;
var nickels = Math.floor(return3 / 5);
	$('#output4').text(nickels);
var pennies = Math.round(return3 % 5);
	$('#output5').text(pennies);
});
