function findIndexAraay(Number,array){
    for(let i=0;i<array.length;i++){
        if (Number==array[i]){
            return i;
        }
    }
    return `${Number} Không có trong mảng ${array}`
}
let array=[1,3,4,6,7,8,9]
let number=4;
findIndexAraay( number,array);