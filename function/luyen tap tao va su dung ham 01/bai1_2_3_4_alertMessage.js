// bai1
function alertMessage() {
    window.alert("Xin Chao");
}
function myAlert() {
    alertMessage();
}
// bai2
function incrementOneUnit(number) {
    return number + 1;
}
function myNumber() {
    let number = Number(document.getElementById('number').value);
    document.getElementById('result').innerHTML = (incrementOneUnit(number));
}
// bai 3
function checkAndSum(number1, number2) {
    if (number1 > number2) {
        return alert(`Số thứ 1 là ${number1} lớn hơn số thứ 2 là ${number2}`);
    } else {
        return number1 + number2;
    }
}
function mySum() {
    let firt = Number(document.getElementById("number1").value);
    let second = Number(document.getElementById("number2").value);
    document.getElementById("resultSum").innerHTML = (checkAndSum(firt,second));
}
// bai 4
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert('Kết quả trước khi gọi hàm'+ result);
result = addNumbers(); 
alert('Kết quả sau khi gọi hàm '+ result);