const display = document.getElementById("display");

function appendToDisplay (input){//Access value and display.
    display.value += input;
}

function clearDisplay(){ 
    display.value = "";//Empty string - Clears the display.
}

function calculate(){ //Function to do calculatation.
    try{ //Try block 
        display.value = eval(display.value);
    }
    catch(error){//Catch block to catch any errors.
        display.value = "Error"
    }
}