let myArray= [ 'c', 's', 'c', '2', '6', '1' ];
console.log((myArray.reverse()).join(""));
myArray.forEach(function(value,index){
    console.log(index,value);
})