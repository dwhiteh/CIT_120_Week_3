let firstNumber;
let secondNumber;
let operator;

if (isNaN(firstNumber = Number(prompt("Enter a number: ")))){
    document.body.innerHTML = "You must enter a number to proceed!"
}else if (isNaN(secondNumber = Number(prompt("Enter another number: ")))){
    document.body.innerHTML = "You must enter a number to proceed!"
}else{
    operator = prompt("Enter an operator: ")
    if (operator=== "+") {
        document.body.innerHTML = firstNumber+secondNumber;}
    else if(operator==="-"){
        document.body.innerHTML = firstNumber-secondNumber;}
    else if(operator==="/"){
        document.body.innerHTML = firstNumber/secondNumber;}
    else if(operator==="*"){
        document.body.innerHTML = firstNumber*secondNumber;}
    else if(operator==="%"){
        document.body.innerHTML = firstNumber%secondNumber;}
    else if (operator ==="**"){
        document.body.innerHTML = firstNumber**secondNumber;}
    else{
            document.body.innerHTML = "You must enter either +, -, *, /, %, or **"}

}



