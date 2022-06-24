function qenerateArray(size,min,max){
    let myElement=[];
    for(let i=0;i<size;i++){
        myElement[i]=Math.floor(Math.random()*(max-min+1)+min);
    }
    return myElement;
}
// let number=qenerateArray(20,1,9);
// console.log(number);
// let number2=qenerateArray(15,10,90);
// console.log(number2);
function sum(araay){
    let sum=0;
    for (let i=0;i<araay.lenght;i++){
        sum+=araay[i];
    }
    console.log(sum);
}
function getEven(araay){
    let count=0;
    for(let i=0;i<araay.lenght;i++){
        if (araay[i]%2==0){
            count++;
        }
    }
    console.log(count);
}
function findNumber(array,Number){
    for(let i=0;i<araay.lenght;i++){
        if(array[i]==Number){
            console.log('Có chữ số 15');
            break;
        }
    }
}