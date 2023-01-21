let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array to Pick 4 random numbers using fischer yatche shuffling algorithm
let result = ""; //To stare Final answer
let randomNum1 = document.getElementById("Randomnumber1"); // Random Number 1
let randomNum2 = document.getElementById("Randomnumber2"); // Random Number 2
let randomNum3 = document.getElementById("Randomnumber3"); // Random Number 3
let randomNum4 = document.getElementById("Randomnumber4"); // Random Number 4
let mainDiv = document.getElementById("mainDiv");
let answerDiv = document.getElementById("answerDiv");
let answerShownDiv = document.getElementById("answer");
let indexForNum = 0; // Variable to set ID for number Div
let indexForSign = 0; // Variable to set ID for Sign Div
let ansArray = []; // aArray to calculate the operations for given variables
let operation3 ; // Variable to store Final answer calculated by four random numbers
let scoreNumber = localStorage.getItem('scoreForEndless1'); // Variable to store score of endless mode
document.getElementById("score").innerText=scoreNumber;
let increseNumForScore = 1 ;
let winSound = new Audio("win.wav");
let bgm = new Audio("bgm.mp3");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('DOMContentLoaded', (event) => {
	themeChange()
	if(localStorage.getItem("sound")=="true"){
		bgm.play();
	}
	 $( function() {
        $( "#numberDiv" ).sortable();
      } );
	  $( function() {
        $( "#signDiv" ).sortable();
      } );
	  $( function() {
        $( "#mainDiv" ).sortable();
      } ); 

});

// Function create four random numbers

function createRandomNum() { 
	$("#start").fadeOut(1000);
	let currentIndex = numbers.length;
	let temp;
	let randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temp = numbers[currentIndex];
		numbers[currentIndex] = numbers[randomIndex];
		numbers[randomIndex] = temp;
	}
	let finalArr = [numbers[0], numbers[1], numbers[2], numbers[3]];
	randomNum1.setAttribute("onclick", "insertNumInMainDiv(" + numbers[0] + ",id)");
	randomNum1.innerText = numbers[0];
	randomNum2.setAttribute("onclick", "insertNumInMainDiv(" + numbers[1] + ",id)");
	randomNum2.innerText = numbers[1];
	randomNum3.setAttribute("onclick", "insertNumInMainDiv(" + numbers[2] + ",id)");
	randomNum3.innerText = numbers[2];
	randomNum4.setAttribute("onclick", "insertNumInMainDiv(" + numbers[3] + ",id)");
	randomNum4.innerText = numbers[3];
	randomAnswerCalc(finalArr);
}

//Function used you insert Numbers in the Main Div

function insertNumInMainDiv(number, idForNumInBottom) {
    let numberButtonInMainDiv = document.createElement("div");
	numberButtonInMainDiv.setAttribute("class", "classForNumButtonInMainDiv themeForPink hoverAnime classForMainDiv");
	numberButtonInMainDiv.setAttribute("onclick", "removeButton(id," + idForNumInBottom + ")");
	numberButtonInMainDiv.setAttribute("onmouseup", "newFunc()");
	numberButtonInMainDiv.setAttribute("id", "number" + indexForNum + "");
	if(localStorage.getItem("theme")=="theme2"){
		numberButtonInMainDiv.style.backgroundColor ="#19647E";
		numberButtonInMainDiv.style.color = "#BCB7A5";
	}
	else if(localStorage.getItem("theme")=="theme1"){
		numberButtonInMainDiv.style.backgroundColor = "#E8567C";
		numberButtonInMainDiv.style.color = "white";
	}
	else if(localStorage.getItem("theme")=="theme3"){
		numberButtonInMainDiv.style.backgroundColor ="#333333";
		numberButtonInMainDiv.style.color = "#AAAAAA";
	}
	else if(localStorage.getItem("theme")=="theme4"){
		numberButtonInMainDiv.style.backgroundColor ="#86425A";
		numberButtonInMainDiv.style.color = "#DCD5BF";
	}
	else if(localStorage.getItem("theme")=="theme5"){
		numberButtonInMainDiv.style.backgroundColor ="#865476";
		numberButtonInMainDiv.style.color = "#DFD1DB";
	}
	indexForNum++;
	numberButtonInMainDiv.innerText = number;
	mainDiv.appendChild(numberButtonInMainDiv);
	document.getElementById(idForNumInBottom).style.display = "none";
    finalAnsCalc(number, "add");
}

//Function used you insert Sign in the Main Div

function insertSignInMainDiv(signValue, signId) {
		let signButtonInMainDiv = document.createElement("div");
		signButtonInMainDiv.setAttribute("class", "classForSignButtonInMainDiv themeForBlue hoverAnime classForMainDiv");
		signButtonInMainDiv.setAttribute("onclick", "removeButton(id," + signValue + ")");
		signButtonInMainDiv.setAttribute("onmouseup", "newFunc()");
		signButtonInMainDiv.setAttribute("id", "sign" + indexForSign + "");
		if(localStorage.getItem("theme")=="theme2"){
			signButtonInMainDiv.style.backgroundColor ="#4B3F72";
			signButtonInMainDiv.style.color = "#BCB7A5";
		}
		else if(localStorage.getItem("theme")=="theme1"){
			signButtonInMainDiv.style.backgroundColor = "#19C3E2";
			signButtonInMainDiv.style.color = "white";
		}
		else if(localStorage.getItem("theme")=="theme3"){
			signButtonInMainDiv.style.backgroundColor ="#555555";
			signButtonInMainDiv.style.color = "#AAAAAA";
		}
		else if(localStorage.getItem("theme")=="theme4"){
			signButtonInMainDiv.style.backgroundColor ="#A48068";
			signButtonInMainDiv.style.color = "#DCD5BF";
		}
		else if(localStorage.getItem("theme")=="theme5"){
			signButtonInMainDiv.style.backgroundColor ="#DA6C95";
			signButtonInMainDiv.style.color = "#DFD1DB";
		}
		indexForSign++;

		if (signId == "add") {
			signButtonInMainDiv.innerText = "+";
		}
		if (signId == "sub") {
			signButtonInMainDiv.innerText = "-";
		}
		if (signId == "multiply") {
			signButtonInMainDiv.innerText = "×";
		}
		if (signId == "divide") {
			signButtonInMainDiv.innerText = "÷";
		}
        if (signId == "leftBracket") {
			signButtonInMainDiv.innerText = "(";
		}
        if (signId == "rightBracket") {
			signButtonInMainDiv.innerText = ")";
		}
		mainDiv.appendChild(signButtonInMainDiv);

		if (signId == "add") {
			finalAnsCalc("+", "add");
		}
		if (signId == "sub") {
			finalAnsCalc("-", "add");
		}
		if (signId == "multiply") {
			finalAnsCalc("*", "add");
		}
		if (signId == "divide") {
			finalAnsCalc("/", "add");
		}
        if (signId == "leftBracket") {
			finalAnsCalc("(", "add");
		}
        if (signId == "rightBracket") {
			finalAnsCalc(")", "add");
		}
	}

// Function used to remove elements for main Div

function removeButton(idName, idForNumInBottom) {
    finalAnsCalc(document.getElementById(idName).innerText, "sub");
	document.getElementById(idName).remove();	
	idForNumInBottom.style.display = "flex";   
}

// Function used to Calculate A number using 4 random numbers

function randomAnswerCalc(randomNumArr) {
	var num1 = randomNumArr[1];
	var num2 = randomNumArr[3];
	var num3 = randomNumArr[0];
	var num4 = randomNumArr[2];
	var operator1 = Math.floor(Math.random() * 3);
	var operator2 = Math.floor(Math.random() * 3);
	var operator3 = Math.floor(Math.random() * 3);

	// calculation for 1st operation
	if (operator1 == 0) {
		var operation1 = num1 + num2;
	} else if (operator1 == 1) {
		var operation1 = num1 - num2;
	} else if (operator1 == 2) {
		var operation1 = num1 * num2;
	} else if (operator1 == 3) {
		if (num1 / num2 == Math.round(num1 / num2)) {
			var operation1 = num1 / num2;
		} else if (num2 / num1 == Math.round(num2 / num1)) {
			var operation1 = num2 / num1;
		} else {
			var operation1 = num1 - num2;
		}
	}

	// calculation for 2nd operation

	if (operator2 == 0) {
		var operation2 = operation1 + num3;
	} else if (operator2 == 1) {
		var operation2 = operation1 - num3;
	} else if (operator2 == 2) {
		var operation2 = operation1 * num3;
	} else if (operator2 == 3) {
		if (operation1 / num3 == Math.round(operation1 / num3)) {
			var operation2 = operation1 / num3;
		} else if (num3 / operation1 == Math.round(num3 / operation1)) {
			var operation2 = num3 / operation1;
		} else {
			var operation2 = operation1 + num3;
		}
	}

	//calculation for 3rd operation

	if (operator3 == 0) {
		 operation3 = operation2 + num4;
	} else if (operator3 == 1) {
		 operation3 = operation2 - num4;
	} else if (operator3 == 2) {
		 operation3 = operation2 * num4;
	} else if (operator3 == 3) {
		if (operation2 / num4 == Math.round(operation2 / num4)) {
			 operation3 = operation2 / num4;
		} else if (num4 / operation2 == Math.round(num4 / operation2)) {
			 operation3 = num4 / operation2;
		} else {
			 operation3 = operation2 + num4;
		}
	}
	answerShownDiv.innerText = operation3;
}

// Function for calculate the given numbers and signs to find final value

function finalAnsCalc(value, condition) {
	
	// This function insert the value inside the calculation array

	if (condition == "add") {
		ansArray.push(value.toString());
		var temp = ansArray.join("");
		if (temp.endsWith("+") || temp.endsWith("-") || temp.endsWith("*") || temp.endsWith("/")|| temp.endsWith("(")) {
			answerDiv.innerText = "?";
		}
		else{
		result = calc(temp);
		answerDiv.innerText = result;
        }
	}

	// This function remove the value inside the calculation array

    if(condition == "sub"){
        if(value=="÷"){
			if(document.getElementById("mainDiv").lastChild.innerHTML=="÷"){
				var indexOfValueInAnsArr = ansArray.lastIndexOf("/");
				ansArray.splice(indexOfValueInAnsArr,1);
			}
			else{
            var indexOfValueInAnsArr = ansArray.indexOf("/");
			ansArray.splice(indexOfValueInAnsArr,1);
			}
        }
        else if(value=="×"){
			if(document.getElementById("mainDiv").lastChild.innerHTML=="×"){
				var indexOfValueInAnsArr = ansArray.lastIndexOf("*");
				ansArray.splice(indexOfValueInAnsArr,1);
			}
			else{
            var indexOfValueInAnsArr = ansArray.indexOf("*");
			ansArray.splice(indexOfValueInAnsArr,1);
			}
        }
        else if(value=="("){
            if(document.getElementById("mainDiv").lastChild.innerHTML=="("){
				var indexOfValueInAnsArr = ansArray.lastIndexOf("(");
				ansArray.splice(indexOfValueInAnsArr,1);
			}
			else{
            var indexOfValueInAnsArr = ansArray.indexOf("(");
			ansArray.splice(indexOfValueInAnsArr,1);
			}
        }
        else if(value==")"){
            if(document.getElementById("mainDiv").lastChild.innerHTML==")"){
				var indexOfValueInAnsArr = ansArray.lastIndexOf(")");
				ansArray.splice(indexOfValueInAnsArr,1);
			}
			else{
            var indexOfValueInAnsArr = ansArray.indexOf(")");
			ansArray.splice(indexOfValueInAnsArr,1);
			}
        }
		else if(value=="+"){
            if(document.getElementById("mainDiv").lastChild.innerHTML=="+"){
				var indexOfValueInAnsArr = ansArray.lastIndexOf("+");
				ansArray.splice(indexOfValueInAnsArr,1);
			}
			else{
            var indexOfValueInAnsArr = ansArray.indexOf("+");
			ansArray.splice(indexOfValueInAnsArr,1);
			}
        }
		else if(value=="-"){
			if(document.getElementById("mainDiv").lastChild.innerHTML=="-"){
				var indexOfValueInAnsArr = ansArray.lastIndexOf("-");
				ansArray.splice(indexOfValueInAnsArr,1);
			}
			else{
            var indexOfValueInAnsArr = ansArray.indexOf("-");
			ansArray.splice(indexOfValueInAnsArr,1);
			}
        }
		else{
		var indexOfValueInAnsArr = ansArray.indexOf(value);	
		ansArray.splice(indexOfValueInAnsArr,1);
		}
        var temp = ansArray.join("");
        if (temp.endsWith("+") || temp.endsWith("-") || temp.endsWith("*") || temp.endsWith("/")) {
			answerDiv.innerText = "?";
		}
		else{
        result = calc(temp);
        if(ansArray.length==0){
        answerDiv.innerText = " ";
        }
        else{
        answerDiv.innerText = result;
        }
	}
    }
    if(result==operation3){
        if(window.getComputedStyle(randomNum1).display=="none"&&window.getComputedStyle(randomNum2).display=="none"&&window.getComputedStyle(randomNum3).display=="none"&&window.getComputedStyle(randomNum4).display=="none"){
        answerDiv.innerText = "Answer Matched";
		if(localStorage.getItem("sound")=="true"){
		winSound.play();
		}
        let  scoreNumber1 = localStorage.getItem('scoreForEndless1');
        scoreNumber1++;
        localStorage.setItem('scoreForEndless1', scoreNumber1 );
        document.getElementById("score").innerText=scoreNumber1;
		document.getElementById("signDiv").style.display="none";
        document.getElementById("next").style.display = "block";
		document.getElementById("mainDiv").innerHTML=" ";
        }
    }
}


// This function is similar to eval() in JS, This function calculate the operations while they are in string type

function calc(expr) {
    var expressionToParse = expr.replace(/\s+/g, '').split('');
    function peek() {
        return expressionToParse[0] || '';
    }
    function get() {
        return expressionToParse.shift();
    }
    function number() {
        var result = get();
        while (peek() >= '0' && peek() <= '9') {
            result += get();
        }
        return parseFloat(result);
    }
    function factor() {
        if (peek() >= '0' && peek() <= '9') {
            return number();
        } else if (peek() == '(') {
            get(); // '('
            var result = expression();
            get(); // ')'
            return result;
        } else if (peek() == '-') {
            get();
            return -factor();
        }
        return 0; // error
    }
    function term() {
        var result = factor();
        while (peek() == '*' || peek() == '/') {
            if (get() == '*') {
                result *= factor();
            } else {
                result /= factor();
            }
        }
        return result;
    }
    function expression() {
        var result = term();
        while (peek() == '+' || peek() == '-') {
            if (get() == '+') {
                result += term();
            } else {
                result -= term();
            }
        }
        return result;
    }
    return expression();
}

// This function is used to change theme in Timed HTML

function themeChange(){
    if(localStorage.getItem("theme")=="theme2"){
        document.body.style.backgroundColor = "#1F2041";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#19647E";
            document.querySelectorAll(".themeForPink")[i].style.color = "#BCB7A5";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#4B3F72";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#BCB7A5";
        }
		document.getElementById("wordDiv").style.color="#BCB7A5";
		document.getElementById("answerDiv").style.color="#BCB7A5";
		
    
    }
    else if(localStorage.getItem("theme")=="theme1"){
        document.body.style.backgroundColor = "white";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#E8567C";
            document.querySelectorAll(".themeForPink")[i].style.color = "white";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#19C3E2";
            document.querySelectorAll(".themeForBlue")[j].style.color = "white";
        }
		document.getElementById("wordDiv").style.color = "#E8567C";
		document.getElementById("answerDiv").style.color="#E8567C";
    }  
	else if(localStorage.getItem("theme")=="theme4"){
		document.body.style.backgroundColor = "#2B1B24";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#A48068";
            document.querySelectorAll(".themeForPink")[i].style.color = "#DCD5BF";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#86425A";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#DCD5BF";
        }
		document.getElementById("wordDiv").style.color = "#DCD5BF";
		document.getElementById("answerDiv").style.color="#DCD5BF";
	} 
	else if(localStorage.getItem("theme")=="theme3"){
		document.body.style.backgroundColor = "black";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#555555";
            document.querySelectorAll(".themeForPink")[i].style.color = "#AAAAAA";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#333333";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#AAAAAA";
        }
		document.getElementById("wordDiv").style.color = "#AAAAAA";
		document.getElementById("answerDiv").style.color="#AAAAAA";
 	}
	else if(localStorage.getItem("theme")=="theme5"){
		document.body.style.backgroundColor = "#11344B";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#DA6C95";
            document.querySelectorAll(".themeForPink")[i].style.color = "#DFD1DB";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#865476";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#DFD1DB";
        }
		document.getElementById("wordDiv").style.color = "#DFD1DB";
		document.getElementById("answerDiv").style.color="#DFD1DB";
	}
}


function newFunc () {
	// console.log(document.querySelectorAll(".classForMainDiv")[document.querySelectorAll(".classForMainDiv").length-1]);
	setTimeout(function(){
		for (let i = 0 ; i < document.querySelectorAll(".classForMainDiv").length; i++) {
			if(document.querySelectorAll(".classForMainDiv")[i].innerText=="×"){
				ansArray[i]="*";
			}
			else if(document.querySelectorAll(".classForMainDiv")[i].innerText=="÷"){
				ansArray[i]="/";
			}
			else{
			ansArray[i]=(document.querySelectorAll(".classForMainDiv")[i].innerText);	
			}
	}
	console.log(calc(ansArray.join("")));
	answerDiv.innerText = calc(ansArray.join(""));
	
	},200)
	
}