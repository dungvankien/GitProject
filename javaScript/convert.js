function myfunc() {
    var amount = Number(document.getElementById('amount').value);
    var unit1 = document.getElementById('unit1').value;
    var unit2 = document.getElementById('unit2').value;
    var result;
    if (unit1 == unit2) {
        result='Result: ' + amount +'  ' + unit1;
    }
    else
        if (unit1 == "vnd" && unit2 == "usd") {
            result='Result: ' +amount/23000+'  ' +unit2;
        }
        else {
            result='Result: ' + amount*23000 + '  ' +unit2;
        }
    document.getElementById('Result').innerText=result;
}
