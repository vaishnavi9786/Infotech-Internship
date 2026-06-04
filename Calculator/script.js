function appendValue(value){

    let display = document.getElementById("display");

    display.value += value;

    console.log("Value =", value);
    console.log("Data Type =", typeof value);
}

function clearDisplay(){

    document.getElementById("display").value = "";

    console.log("Display Cleared");
}

function calculate(){

    let expression = document.getElementById("display").value;

    console.log("Expression =", expression);
    console.log("Expression Type =", typeof expression);

    let result = eval(expression);

    console.log("Result =", result);
    console.log("Result Type =", typeof result);

    document.getElementById("display").value = result;
}