const display = document.getElementById("display");
//TODO: Learn this Logic and understand it

function appendToDisplay(input) {
    display.value += input 
}


function clearDisplay() {
    display.value = ""
}


function calculate() {
    // Tried error catching
    try{
        display.value =eval(display.value) //!Use of eval() to evaluate
    } catch(error) {
        display.value = "Error"
    }
}
