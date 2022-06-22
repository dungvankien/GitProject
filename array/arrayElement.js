let i=0;
let array=[];
function myAdd(){
    array[i]=document.getElementById('myNumber').value;
    alert('Element: '+ array[i] + 'Added at index '+ i);
    i++;
    document.getElementById('myNumber').value=null;
}
function myDisplay(){
    let e="";
    for (i=0;i<array.length;i++){
        e +='Element'+ i + '=' + array[i]+'<br>';
    }
    document.getElementById('result').innerHTML=e;
}