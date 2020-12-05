const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-button");

const sendNumberValue = (num) => {
    // If current display value is 0, then replace with entered numbers, else only add number to display
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === "0" ? num : displayValue + num;
}

// Add event listeners for numbers, operators and decimal point buttons
inputBtns.forEach(btn => {
    if (!btn.classList.length) {
        btn.addEventListener("click", () => sendNumberValue(btn.value));
    } else if (btn.classList.contains("operator")) {
        btn.addEventListener("click", () => sendNumberValue(btn.value));
    } else if (btn.classList.contains("decimal")) {
        btn.addEventListener("click", () => sendNumberValue(btn.value));
    }
})