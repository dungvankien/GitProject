function check(){
    var arrayNumber=[];
    let size=Number(document.getElementById('size').value);
    let min=Number(document.getElementById('min').value);
    let max=Number(document.getElementById('max').value);
    let sumOdd=0;
    let countPrime=0;
    let countSquare=0;
    let i;
    let flag=true;
    document.getElementById('odd').value=null;
    document.getElementById('prime').value=null;
    document.getElementById('square').value=null;
    for(i=0;i<size;i++){
        arrayNumber[i]=Math.floor(Math.random()*(max-min+1))+min;
    }
    document.getElementById('myarray').value=arrayNumber.toString();
    for (i=0;i<arrayNumber.length;i++){
        if (arrayNumber[i]%2!=0){
            document.getElementById('odd').value +=(arrayNumber[i]+',').toString();
            sumOdd += arrayNumber[i];
        }
    }
    document.getElementById('sum').value=sumOdd.toString();
    for(i=0;i<arrayNumber.length;i++){
        if (arrayNumber[i]>1){
            for(let j=2;j<arrayNumber[i];j++){
                if(arrayNumber[i]%j==0){
                    flag=false;
                    break;
                }
            }
            if (flag){
                document.getElementById('prime').value +=(arrayNumber[i]+',').toString();
                countPrime +=1;
            }
            else{
                flag=true; 
            }
        }    
    }
    document.getElementById('countPrime').value=countPrime.toString();
    for (i=0;i<arrayNumber.length;i++){
        if (Number.isInteger(Math.sqrt(arrayNumber[i]))){
            countSquare +=1;
            document.getElementById('square').value +=(arrayNumber[i]+',').toString();
        }
    }
    document.getElementById('countSquare').value=countSquare.toString();
}
function reset() {
    document.getElementById('size').value=null;
    document.getElementById('min').value=null;
    document.getElementById('max').value=null;
    document.getElementById('myarray').value=null;
    document.getElementById('odd').value=null;
    document.getElementById('sum').value=null;
    document.getElementById('prime').value=null;
    document.getElementById('countPrime').value=null;
    document.getElementById('square').value=null;
    document.getElementById('countSquare').value=null;
}