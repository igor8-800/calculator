"use strict";

// import class
const importTeg = document.createElement("div");
const calculatorBody = document.createElement("form")
const buttonSume = document.createElement("button")

// Attribute class body
calculatorBody.setAttribute("class", "calculator__body")
importTeg.setAttribute("class", "calculator")
buttonSume.setAttribute("class", "calculator__sum")

// pushe in dody element
document.body.appendChild(importTeg)
importTeg.appendChild(calculatorBody)


// input two creature
for (let i = 0; i < 2; i++) {
	const calculatorInput = document.createElement("input")
	calculatorInput.setAttribute("class", "calculator__input")
	calculatorInput.setAttribute("style", "flex: 1 1 100%; font-size: 30px; padding: 10px 5px; text-align: right;");
	if (i == 0) {
		calculatorInput.setAttribute("placeholder", "Введите 1 чилосло");
	}
	else if (i == 1) {
		calculatorInput.setAttribute("placeholder", "Введите 2 чилосло");
	}

	calculatorBody.appendChild(calculatorInput)
}
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

	calculatorBody.appendChild(createTeg)
}

// button sum number
calculatorBody.appendChild(buttonSume)
buttonSume.innerHTML = "Посчитать";

// import markup style

importTeg.setAttribute("style", "max-width:400px; margin: 0 auto; padding-top:350px;");
calculatorBody.setAttribute("style", "display: flex; flex-wrap: wrap;");
buttonSume.setAttribute("style", "flex: 1 1 100%; padding:10px 0 5px 0; font-size: 30px;");


// hushe on gitHab 