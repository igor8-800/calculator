"use strict";

// import class
const importTeg = document.createElement("div");
const calculatorBody = document.createElement("form")
const buttonSume = document.createElement("button")

// Attribute class body
calculatorBody.setAttribute("class", "calculator__body")
calculatorBody.setAttribute("onsubmit", "return false;")
importTeg.setAttribute("class", "calculator")

buttonSume.setAttribute("class", "calculator__sum")

// pushe in dody element
document.body.appendChild(importTeg)
importTeg.appendChild(calculatorBody)


// input two creature
for (let i = 0; i < 2; i++) {
	const calculatorInput = document.createElement("input")
	calculatorInput.setAttribute("class", `calculator__input${i + 1}`)
	calculatorInput.setAttribute("style", "flex: 1 1 100%; font-size: 30px; padding: 10px 5px; text-align: right;");
	if (i == 0) {
		calculatorInput.setAttribute("placeholder", "Введите 1 чилосло");
	}
	else if (i == 1) {
		calculatorInput.setAttribute("placeholder", "Введите 2 чилосло");
	}

	calculatorBody.appendChild(calculatorInput)
}
// input answer 
const answer = document.createElement("div")
answer.setAttribute("class", "calculator__answer")
answer.setAttribute("style", "flex: 1 1 100%; padding:20px 0; font-size: 30px; border: 1px solid #000 ;")

answer.innerHTML = " ";
calculatorBody.appendChild(answer)


// button create
for (let i = 1; i < 17; i++) {
	const createTeg = document.createElement("button")
	createTeg.setAttribute("class", "calculator__button")

	// import markup style
	createTeg.setAttribute("style", "flex: 1 1 25%; padding:15px 0; font-size: 30px;")
	if (i <= 11) {
		createTeg.innerHTML = i;
		if (Number.isInteger(i / 4)) {
			if ((i / 4) == 1) {
				createTeg.innerHTML = "/";
			}
			else if ((i / 4) == 2) {
				createTeg.innerHTML = "x";
			}
		}
		else if (i == 5 || i == 6 || i == 7) {
			createTeg.innerHTML = i - 1;
		}
		else if (i == 9 || i == 10 || i == 11) {
			createTeg.innerHTML = i - 2;
		}
	}
	if (i == 12) {
		createTeg.innerHTML = "+";
	}
	if (i == 14) {
		createTeg.innerHTML = "0";
	}
	if (i == 16) {
		createTeg.innerHTML = "-";
	}

	// id button
	if (i) {
		createTeg.setAttribute("id", i)
	}
	calculatorBody.appendChild(createTeg)
}


// button sum number
calculatorBody.appendChild(buttonSume)
buttonSume.innerHTML = "Посчитать";

// import markup style
importTeg.setAttribute("style", "max-width:400px; margin: 0 auto; padding-top:350px;");
calculatorBody.setAttribute("style", "display: flex; flex-wrap: wrap;");
buttonSume.setAttribute("style", "flex: 1 1 100%; padding:10px 0 5px 0; font-size: 30px;");




// ui logik
let sing = "";

function inputText(t) {
	const inputValue = document.querySelector(".calculator__input1")
	const inputValue2 = document.querySelector(".calculator__input2")
	if (sing == "") {
		inputValue.value += (t);
	}
	else if (sing != "") {
		inputValue2.value += (t);
	}
}
//focus element
function fucusElement() {
	const inputValue = document.getElementById("4")
	const inputValue1 = document.getElementById("8")
	const inputValue2 = document.getElementById("12")
	const inputValue3 = document.getElementById("16")
	inputValue.setAttribute("style", "flex: 1 1 25%; padding:15px 0; font-size: 30px; border: 1px solid #000;");
	inputValue1.setAttribute("style", "flex: 1 1 25%; padding:15px 0; font-size: 30px; border: 1px solid #000;");
	inputValue2.setAttribute("style", "flex: 1 1 25%; padding:15px 0; font-size: 30px; border: 1px solid #000;");
	inputValue3.setAttribute("style", "flex: 1 1 25%; padding:15px 0; font-size: 30px; border: 1px solid #000;");

}
function fucusElementNuN(e) {
	if (e == 3) {
		const inputValue = document.getElementById("4")
		inputValue.setAttribute("style", "flex: 1 1 25%; padding:15px 0; font-size: 30px; border: 1px solid red;");
	}
	if (e == 7) {
		const inputValue = document.getElementById("8")
		inputValue.setAttribute("style", "flex: 1 1 25%; padding:15px 0; font-size: 30px; border: 1px solid red;");
	}
	if (e == 11) {
		const inputValue = document.getElementById("12")
		inputValue.setAttribute("style", "flex: 1 1 25%; padding:15px 0; font-size: 30px; border: 1px solid red;");
	}
	if (e == 15) {
		const inputValue = document.getElementById("16")
		inputValue.setAttribute("style", "flex: 1 1 25%; padding:15px 0; font-size: 30px; border: 1px solid red;");
	}
}


// chack id
function idi(e) {

	if (e == 0 || e == 1 || e == 2) {
		inputText(e + 1);
	}
	if (e == 4 || e == 5 || e == 6) {
		inputText(e);
	}
	if (e == 8 || e == 9 || e == 10) {
		inputText(e - 1);
	}
	if (e == 13) {
		inputText(0);
	}
	if (e == 3) {
		if (sing != "") {
			sing = ""
			fucusElement()
		}
		else if (sing == "") {
			sing = "/"
			fucusElementNuN(e)
		}
	}
	if (e == 7) {
		if (sing != "") {
			sing = ""
			fucusElement()
		}
		else if (sing == "") {
			sing = "x"
			fucusElementNuN(e)
		}
	}
	if (e == 11) {
		if (sing != "") {
			sing = ""
			fucusElement()
		}
		else if (sing == "") {
			sing = "+"
			fucusElementNuN(e)
		}
	}
	if (e == 15) {
		if (sing != "") {
			sing = ""
			fucusElement()
		}
		else if (sing == "") {
			sing = "-"
			fucusElementNuN(e)
		}
	}
	const inputValue = document.querySelector(".calculator__input1")
	console.log(inputValue.value)

}

const id = document.querySelectorAll(".calculator__button")
for (let i = 0; i < id.length; i++) {
	id[i].onclick = function (id) {
		idi(i)
	}
}

// answer calculator
const answerEnely = document.querySelector(".calculator__answer")
const answerSum = document.querySelector(".calculator__sum")

answerSum.onclick = function () {
	const inputValue = document.querySelector(".calculator__input1")
	const inputValue2 = document.querySelector(".calculator__input2")
	let sum;
	if (sing == "/") {
		sum = inputValue.value / inputValue2.value;
		answerEnely.innerHTML = sum.toFixed(2);
	}
	else if (sing == "x") {
		sum = inputValue.value * inputValue2.value;
		answerEnely.innerHTML = sum.toFixed(2);
	}
	else if (sing == "+") {
		sum = parseInt(inputValue.value) + parseInt(inputValue2.value);
		answerEnely.innerHTML = sum.toFixed(2);
	}
	else if (sing == "-") {
		sum = inputValue.value - inputValue2.value;
		answerEnely.innerHTML = sum.toFixed(2);
	}
}



