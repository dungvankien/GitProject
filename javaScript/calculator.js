function addition() {
    var number1 =Number(document.getElementById('number1').value);
    var number2 =Number(document.getElementById('number2').value);
    var result;
    result='additon ' + (number1+number2);
    document.getElementById('Result').innerText=result;
}
function subtraction() {
    var number1 =Number(document.getElementById('number1').value);
    var number2 =Number(document.getElementById('number2').value);
    var result;
    result="subtraction "+ (number1-number2);
    document.getElementById('Result').innerText=result;
}
function multiplication() {
    var number1 =Number(document.getElementById('number1').value);
    var number2 =Number(document.getElementById('number2').value);
    var result;
    result='multiplication'+ number1*number2;
    document.getElementById('Result').innerText=result;
}
function division() {
    var number1 =Number(document.getElementById('number1').value);
    var number2 =Number(document.getElementById('number2').value);
    var result;
    result="division " + number1/number2;
    document.getElementById('Result').innerText=result;
}