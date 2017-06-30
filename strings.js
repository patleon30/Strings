
var string = document.getElementById("input");
var button = document.getElementById("button").addEventListner("click", doTheThing);
var gimmieIt = document.getElementById("box");


function doTheThing(){
	var newString = string.value.split("");
	var revString =reversal(newString);
	console.log(revString);
	alphabits(newString);
	palindrome(newString);
	gimmieIt.innerHTML += palindrome(newString, revString);
		
}
function reversal(str){
	var rev = str.reverse().join ("");
	gimmieIt.innerHTML += `<p>${str.reverse().join("")}</p>`;
	return str.reverse().join("")
}
function alaphabits(str){
	gimmieIt.innerHTML += `<p>${str.sort().join("")}</p>`;
}
function palindrome(str, revstr){
	if(revstr === string.value(){
	===string.value)
	} else 
		return `<p>This is not a palindrome</p>`
	} else 
	return `<p>This is not a palindrome</p>`
	}
}


