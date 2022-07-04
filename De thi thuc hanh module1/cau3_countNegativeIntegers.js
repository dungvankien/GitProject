let array = ["a", "o", "e", "u", "i"];
function countNegativeIntegers(interger, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < interger.length; j++) {
            if (array[i] == interger[j]) {
                count++;
            }
        }
    }
    if (count == 0) {
        return false;
    } else {
        return count;
    }
}
let interger=prompt("nhập một chuổi ký tự bất kỳ");
countNegativeIntegers(interger,array);