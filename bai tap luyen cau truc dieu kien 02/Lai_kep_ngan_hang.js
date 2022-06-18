function check() {
let mymoney=Number(document.getElementById('money').value);
let mylaisuat=Number(document.getElementById('laiSuat').value);
let mymonth=Number(document.getElementById('soThang').value);
var result=0;
switch (mymonth) {
    case 1 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        break;
    case 2 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 3 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 4 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 5 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 6 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 7 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 8 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 9 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 10 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 11 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    case 12 :
        result=(mymoney*mylaisuat)/(12*100)+mymoney;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        result=(result*mylaisuat)/(12*100)+result;
        break;
    default:
        alert('chỉ dùng được 12 tháng')
}
document.getElementById('laiKep').value=result.toFixed(2);
}
function reset(){
    document.getElementById('money').value=null;
    document.getElementById('laiSuat').value=null;
    document.getElementById('soThang').value=null
    document.getElementById('laiKep').value=null;
}