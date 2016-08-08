// TO DO LIST
// Make a cheat sheet of string manipulation functions for students

//Globals
var word, wordL, currentWord, letters, iteration;

var alphabet = "abcdefghijklmnopqrstuvwxyz 1234567890~!@#$%^&*()_+`-=[]{}|;':,.<>/?" //notice including space

var letters = [];
for (letter in alphabet){
	letters.push(alphabet[letter]);
}

//word="To be, or not to be: that is the question";
//word="Now is the winter of our discontent";
//word="O Romeo, Romeo! wherefore art thou Romeo?";
word="Mahdi Shadkamfarrokhi";
wordL=word.length;

function setup(){
	createCanvas(800,800);
	iteration=0;
}

function draw(){
	background(0);
	iteration++

	fill(225);
	textSize(30);
	textAlign(CENTER,CENTER);
	text(word,width/2,100);
	text("Iteration: " + iteration,width/2,200);

	text("Current Word: " + currentWord,width/2,300);

	/////////////////////////////////////////////////////
	//Dictating how to handle current word not matching//
	/////////////////////////////////////////////////////









	}else{
		fill(225,0,0);
		text("Done!",width/2,400);
		noLoop();
	}
}