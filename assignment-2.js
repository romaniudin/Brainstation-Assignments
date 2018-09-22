// Challenge 1 
for (var i = "#"; i.length<8; i +="#") {	
console.log(i);
}

/* here we assume that var i is equal to a # sign, then the code will take all i's 
to create the lines as many times until var i is less then 8 and by "+=" operator 
the code will add additional # sign to var i for each line -> that will create a triangle */

// Challenge 2
// part A -  all the parameters are numbers

function isEven(x) {
	if ( x % 2 === 0) {
		return "The number is even.";
	}
	else {
		return "The number is odd.";
	}
}
isEven(5);

// part B - if the parameters are not numbers at all

function isEven(x) {
	if ( x % 2 === 0) {
		return "The number is even.";
	}
	else if (isNaN(x)) {
		return "This is not a number!";
	}
	else {
         return "The number is odd.";
	}
}
isEven('hey');