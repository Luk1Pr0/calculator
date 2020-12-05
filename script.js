const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-button");

const sendNumberValue = (num) => {
    // If current display value is 0, then replace with entered numbers, else only add numbers to display
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === "0" ? num : displayValue + num;
}

const addDecimal = () => {
    // If no decimal, then add only 1
    if (!calculatorDisplay.textContent.includes(".")) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// Add event listeners for numbers, operators and decimal point buttons
inputBtns.forEach(btn => {
    if (!btn.classList.length) {
        btn.addEventListener("click", () => sendNumberValue(btn.value));
    } else if (btn.classList.contains("operator")) {
        btn.addEventListener("click", () => sendNumberValue(btn.value));
    } else if (btn.classList.contains("decimal")) {
        btn.addEventListener("click", () => addDecimal());
    }
})

// Reset display
const resetAll = () => {
    calculatorDisplay.textContent = "0";
}

// Event listener
clearBtn.addEventListener("click", resetAll); 