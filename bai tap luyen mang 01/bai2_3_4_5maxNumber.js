let myArray = [];
let size = 10;
let min = -30;
let max = 100;
var findIndex = 0
var Max;
let sum=0;
let medium;
let count=0;
for (let i = 0; i < size; i++) {
    myArray[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(myArray);
Max = myArray[0];
for (let index in myArray) {
    if (Max < myArray[index]) {
        Max = myArray[index];
        findIndex = index;
    }
}
console.log(`So lớn nhất trong mảng ${Max} ở vị trí ${findIndex}`);
for(let index in myArray){
    sum+=myArray[index];
} 
medium=sum/myArray.length;
console.log('giá trị trung bình '+ medium);
console.log('Đảo ngược thứ tự trong mảng  '+ myArray.reverse());
for(let index in myArray){
    if(myArray[index]<0){
        count++;
    }
}
console.log('Có các số nguyên âm '+ count+ ' Số');