// bai 1
function calculateSquare (number){
    return number*number
}
// bai 2
function calculateAreaCircle(radius){
    return ((Math.PI)*radius*radius);
}
function calculateCircleCircumference(radius){
    return 2*radius*Math.PI;
}
// bai 3
function calculateFactorial (number){
    let result=1;
    for(let i=2;i<=number;i++){
        result=result*i;
    }
    return result;
}
// bai 4
function checkCharacterNumber(character){
    let flag=false;
    for (let i=0;i<10;i++){
        if (character==i){
            flag=true;
            break;
        }
    }
    return flag
}
// bai 5
function findSmallNumber(number1,number2,number3){
    return (number1<number2&&number1<number3)?number1:(number2<number3)?number2:number3;
}
console.log(findSmallNumber(6,7,2));
// bai 6
function checkPositiveNumber(number){
    if(number>=0&&Number.isInteger(number)){
        return true;
    } else{
        return false;
    }
}
console.log(checkPositiveNumber(-4));
// bai 7
function changePositionNumber(number1,number2){
    let number=number1;
    number1=number2;
    number2=number;
    return `${number1} ${number2}`
}
console.log(changePositionNumber(4,5));
// bai 8
function reverseArray(array){
    let number;
    for(let i=0;i<(array.length-1-i);i++){
        number=array[i];
        array[i]=array[array.length-1-i]
        array[array.length-1-i]=number;
    }
    return array;
}
let array=[2,3,5,7,8,0,9];
console.log(reverseArray(array));
// bai 9
function checkCountCharacterInArray(character,array){
    let count=0;
    for(let i in array){
        if (array[i]===character){
            count++;
        }
    }
    if (count>0){
        return count;
    } else{
        return -1;
    }
}
let array1=[1,3,5,6,7,8,"-","-","+"];
console.log(checkCountCharacterInArray("/",array1));