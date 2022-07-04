function findEquation2(a, b, c) {
    if (a == 0 && b == 0 && c == 0) {
        return "Phương trình vô số nghiệm"
    }
    if (a == 0 && b == 0) {
        return "phuong trình không xác định";
    }
    if (a == 0 && b != 0) {
        return `Phuong trinh co 1 nghiem x= ${(-c) / b} `;
    }
    let denta = b * b - 4 * a * c;
    if (denta < 0) {
        return "Phương trình vô nghiệm";
    }
    else if (denta == 0) {
        return "Phương trình có một nghiệm x= " + ((-b) / (2 * a));
    }
    else {
        return "Phương trình có 2 nghiệm x1= " + (-b + Math.sqrt(denta)) / (2 * a) + " Nhiệm x2= " + (-b - Math.sqrt(denta)) / (2 * a);
    }
}
let a=Number(prompt("input a"));
let b=Number(prompt("input b"));
let c=Number(prompt("input c"));
findEquation2(a, b, c);
