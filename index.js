const display = document.getElementById("display");

function appendToDisplay (input){//Access value and display.
    display.value += input;
}

function clearDisplay(){ 
    display.value = "";//Empty string - Clears the display.
}

function calculate(){ //Function to do calculatation.
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}