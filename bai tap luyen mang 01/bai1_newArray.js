let myArray = [];
let size = 10;
let min = 1;
let max = 100;
let count = 0;
for (let i = 0; i < size; i++) {
    myArray[i] = Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(myArray);
for (let index of myArray) {
    if (index >= 10) {
        count++
    }
}
console.log(`Có ${count} số tự nhiên lớn hơn hoặc bằng 10`);