const vEn=["VietNam","Englan","Thailand","India","Singapore","China","Japan","Combodia"];
const vVN=["Viet nam","Anh","Thái Lan","Ấn Độ","Singapore","Trung quốc","Nhật bản","Campuchia"];
let myResult;
function myVocabulary(){
    let myDic=document.getElementById("myDictionary").value;
    myResult=vEn.indexOf(myDic);
    if (myResult!==-1){
        document.getElementById('result').innerHTML=vVN[myResult]; 
    }
        else{
            document.getElementById('result').innerHTML=('Not found');
        }
}