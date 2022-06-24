let myArray1 = [];
let myArray2=[];
let totalArray=[];
let size = 10;
let min = 1;
let max = 100;
let count = 0;
for (let i = 0; i < size; i++) {
    myArray1[i] = Math.floor(Math.random() * (max - min + 1) + min);
    myArray2[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(myArray1);
console.log(myArray2);
totalArray=totalArray.concat(myArray1,myArray2);
console.log(totalArray);
