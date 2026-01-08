const display = document.getElementById("display");

function printOnDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    try {
        eval(display.value)
    } catch(error) {
        display.value = "Error"
    }
}