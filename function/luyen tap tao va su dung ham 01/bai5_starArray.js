const star1=['Polaris','Aldebaran','Deneb','Vega','Altair','Dubhe','Regulus'];
const star2=['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major','Leo'];
function checkStarArray(myStar){
    let result;
    let flag=false;
    for(let i=0;i<star1.length;i++){
        if(star1[i]==myStar){
            result=star2[i];
            flag=true;
            break;
        }
    }
    if(flag){
        return result;
    } else {
        result="Không tìm thấy tên ngôi sao trong mảng 1";
        return result;
    }
}
let Star=prompt('Nhập tên ngôi sao muốn tìm kiếm');
document.write(checkStarArray(Star));