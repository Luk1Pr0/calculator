const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-button");

let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

const sendNumberValue = (num) => {
    // Replace current display values if the first value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = num;
        awaitingNextValue = false;
    } else {
        // If current display value is 0, then replace with entered numbers, else only add numbers to display
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === "0" ? num : displayValue + num;
    }
}

const addDecimal = () => {
    // If the operator is pressed, then do not add a decimal
    if (awaitingNextValue) return;
    // If no decimal, then add only 1
    if (!calculatorDisplay.textContent.includes(".")) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

const useOperator = (operator) => {
    const currentValue = Number(calculatorDisplay.textContent);
    // Assign firstValue as the currentValue if firstValue doesn't already exist
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log("currentValue", currentValue);
    }
    // Ready for the next value
    awaitingNextValue = true;
    operatorValue = operator;
    console.log("First value", firstValue, "operator:", operator);
}

// Add event listeners for numbers, operators and decimal point buttons
inputBtns.forEach(btn => {
    if (!btn.classList.length) {
        btn.addEventListener("click", () => sendNumberValue(btn.value));
    } else if (btn.classList.contains("operator")) {
        btn.addEventListener("click", () => useOperator(btn.value));
    } else if (btn.classList.contains("decimal")) {
        btn.addEventListener("click", () => addDecimal());
    }
})

// Reset all values and the display
const resetAll = () => {
    calculatorDisplay.textContent = "0";
    firstValue = 0;
    operatorValue = ""
    awaitingNextValue = false;
}

// Event listener
clearBtn.addEventListener("click", resetAll); 