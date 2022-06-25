function isPrime(number) {
    let flag = true;
    if (number > 1 && Number.isInteger(number)) {
        for (let i = 2; i < number; i++) {
            flag = true;
            if (number % i == 0) {
                flag = false;
                break;
            }
        }
    } else {
        flag = false;
    }
    if (flag) {
        return `${number}: This is Prime`
    } else {
        return `${number}: This is not  Prime`
    }
}
console.log(isPrime(0));
console.log(isPrime(4.234));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(-23));
console.log(isPrime(23));
console.log(isPrime(51));
console.log(isPrime(54));
console.log(isPrime(-34));
console.log(isPrime(34));