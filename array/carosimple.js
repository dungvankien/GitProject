let b=document.getElementById('caro');
let board=[];
let data="";
for (let i=0;i<5;i++){
    board[i]=[0,0,0,0,0];
}
for (let i=0;i<5;i++){
    data +='<br>';
    for(let j=0;j<5;j++){
        data+=board[i][j] +'&nbsp;&nbsp;&nbsp;';
    }
}
data +="<br><br><input type='button' value='Chang Value' onclick='changeValue()'>";
b.innerHTML=data;
function changeValue(){
    let positionX=prompt('X:');
    let positiomY=prompt('Y:');
    data="";
    board[positionX][positiomY]="x";
    for(let i=0;i<5;i++){
        data +='<br>';
        for(let j=0;j<5;j++){
            data+=board[i][j]+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        }
    }
    data +="<br><br><input type='button' value='Chang Value' onclick='changeValue()'>";
    b.innerHTML=data;
}