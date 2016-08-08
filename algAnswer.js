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


function randLetter(){
	//will return a random letter that is 50/50 chance of being capital or lowercase
	letter = random(letters)
	if (random()>.5){
		return letter.toUpperCase();
	}else{
		return letter
	}

}

function randWord(num){
	//takes numeric argument and returns a word of length "num" with random letters
	var tempWord="";
	for (var i=0;i<num;i++){
		tempWord = tempWord.concat(randLetter());
	}
	return tempWord;
}

function keepMatch(badword){
	var tempWord="";
	for(var i in badword){
		if (badword[i]==word[i]){
			tempWord=tempWord.concat(word[i]);			
		}else{
			tempWord=tempWord.concat(randLetter());
		}
	}
	return tempWord;
}

function followCap(badword){
	var tempWord="";
	for(var i in badword){
		if (badword[i]==word[i]){
			tempWord=tempWord.concat(word[i]);			
		}else{
			if (i>0){
				if(badword[i-1]==word[i-1] && badword[i-1]!=badword[i-1].toLowerCase()){
					tempWord=tempWord.concat(randLetter().toLowerCase());
				}else{
					tempWord=tempWord.concat(randLetter());
				}
			}else{
				tempWord=tempWord.concat(randLetter());
			}
		}
	}
	return tempWord;
}
function setup(){
	createCanvas(800,800);
	iteration=0;
	currentWord=randWord(wordL);
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

	if (currentWord!=word){
	//PART 1: NOT SELECTION. ONLY RANDOM LETTERS	
	// currentWord=randWord(wordL);

	//PART 2: SELECTION FOR CORRECT LETTERS
	currentWord=keepMatch(currentWord);

	//PART 3: SELECTION FOR CORRECT LETTERS, AND IF PROCEEDING LETTER IS CAPITAL, NEXT RANDOM LETTER IS LOWERCASE
	// currentWord=followCap(currentWord);

	}else{
		fill(225,0,0);
		text("Done!",width/2,400);
		noLoop();
	}
}