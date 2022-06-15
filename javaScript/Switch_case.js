function mymonth() {
    let monthday=Number(document.getElementById('number').value);
    switch (monthday) {
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 :
            document.getElementById("numberday").innerHTML=('Tháng '+ monthday +' có 31 ngày');
            break;
        case 2:
            document.getElementById("numberday").innerHTML=('Tháng '+ monthday +' có 28 hoặc 29 ngày');
            break;
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            document.getElementById("numberday").innerHTML=('Tháng '+ monthday +' có 30 ngày');
            break;
        default:
            document.getElementById("numberday").innerHTML=('Nhập lại');
    }
}