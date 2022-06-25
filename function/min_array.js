function foundMinNumberArray(array){
    let result;
    let min=array[0];
    if (array.length!==0){
        for( let index in array){
            if(min>array[index]){
                min=array[index]
            }
        }
        result=min;
    } else{
        result="Null";
    }
    return result;
}
let arr1=[3, 5, 1, 8, -3, 7, 8]
let arr2=[7, 12, 6, 9, 20, 56, 89]
let arr3=[]
let arr4=[0, 0, 0, 0, 0, 0]
console.log('min in array: '+ foundMinNumberArray(arr1));
console.log('min in array: '+ foundMinNumberArray( arr2));
console.log('min in array: '+ foundMinNumberArray(arr3));
console.log('min in array: '+ foundMinNumberArray( arr4));