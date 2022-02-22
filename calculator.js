"use strict";

// import class
const importTeg = document.createElement("div");
const calculatorBody = document.createElement("form")
const calculatorInput = document.createElement("input")

// Attribute class body
calculatorBody.setAttribute("class", "calculator__body")
importTeg.setAttribute("class", "calculator")
calculatorInput.setAttribute("class", "calculator__input")

// pushe in dody element
document.body.appendChild(importTeg)
importTeg.appendChild(calculatorBody)
calculatorBody.appendChild(calculatorInput)

// button create
for (let i = 0; i < 16; i++) {
	const createTeg = document.createElement("button")
	createTeg.setAttribute("classs", "calculator__button")

	// import markup style
	createTeg.setAttribute("style", "flex: 1 1 25%; padding:35px 0;")

	calculatorBody.appendChild(createTeg)
}

// import markup style

importTeg.setAttribute("style", "max-width:400px; margin: 0 auto; padding-top:350px;");
calculatorBody.setAttribute("style", "display: flex; flex-wrap: wrap;");
calculatorInput.setAttribute("style", "flex: 1 1 100%; font-size: 30px; padding: 10px 5px; text-align: right;");

// hushe on gitHab 