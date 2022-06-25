function converterTemperrature(valueNumber){
    let result =((valueNumber-32)/1.8);
    return result;
}
function converterTemper(){
    let myValue=Number(document.getElementById('myFahrenheit').value);
    let result=converterTemperrature(myValue);
    document.getElementById('result').innerText=result;
}