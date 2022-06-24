let myArray=[1,5,6,"v",8,9,10,11,23,0];
let flag=false;
let index;
for(let i in myArray){
    if(myArray[i]=="v"){
        flag=true;
        break
    }
}
if(flag){
    console.log('V is in the array');
}
else {
    console.log ('V is not in the array');
}
for(let i in myArray){
    if(myArray[i]=="v"){
        index=i;
        break
    }
}
myArray.splice(index,1);
console.log(myArray);
console.log(myArray.sort(function(a,b){
    return b-a;
}));