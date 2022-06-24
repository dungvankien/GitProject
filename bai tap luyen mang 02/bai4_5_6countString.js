let myString1='codegym Rasing the ban';
let count=0;
let myString2='codegym Rasing the bar';
let myString3='codegym-Rasing-the-bar'
let changeString="";
for(let i in myString1){
    count++;
}
console.log(count);
if(myString1===myString2){
    console.log('Hai chuỗi bằng nhau');
}
else {
    console.log('Hai chuỗi khác nhau');
}
for(let i=0;i<myString3.length;i++){
    if(myString3[i]=="-"){
        changeString+='_'
    }
    else{
        changeString+=myString3[i];
    }
}
console.log(changeString);
