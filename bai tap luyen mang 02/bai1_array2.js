let myArray2 = [];
let row = 6;
let column = 6;
let min = 0;
let max = 99;
for (let i = 0; i < row; i++) {
    myArray2[i] = [];
    for (let j = 0; j < column; j++) {
        myArray2[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}
console.log(myArray2);
for (let i in myArray2) {
    console.log("ROW" + i);
    for (let j in myArray2) {
        console.log(myArray2[i][j]);
    }
}