let size = 10;
var myArray = [];
let count=1;
var myGame=document.getElementById('caroGame');
for (let i = 0; i < size; i++) {
        myArray[i] = [];
    for (let j = 0; j < size; j++) {
        myArray[i][j] = "(.)";
    }
}
let result = "<table>";
result += "<tbody>";
for (let i = 0; i < size; i++) {
    result += "<tr>";
    for (let j = 0; j < size; j++) {
        result += `<td>${myArray[i][j]}</td>`
    }
    result += "</tr>";
}
    result += "</tbody>";
    result += "</table>";
   myGame.innerHTML=result;
function Change(){
    let x=parseInt(prompt('Enter X'));
    let y=parseInt(prompt('Enter Y'));
    if (count%2==0){
        myArray[x][y]="X"; 
    } else{
        myArray[x][y]="O";
    }
    count++;
    result = "<table>";
    result += "<tbody>";
    for (let i = 0; i < size; i++) {
        result += "<tr>";
        for (let j = 0; j < size; j++) {
            result += `<td>${myArray[i][j]}</td>`
        }
        result += "</tr>";
    }
        result += "</tbody>";
        result += "</table>";
       myGame.innerHTML=result;
    for(let i=0; i<size; i++){
        for (let j=0; j<size; j++){
            if (myArray[i][j] === 'X' && myArray[i][j+1] === 'X' && myArray[i][j+2] === 'X' ||
                myArray[i][j] === 'X' && myArray[i+1][j] === 'X' && myArray[i+2][j] === 'X'){
            alert("X Thắng");
            }
            else if(myArray[i][j] === 'O' && myArray[i][j+1] === 'O' && myArray[i][j+2] === 'O' ||
                    myArray[i][j] === 'O' && myArray[i+1][j] === 'O' && myArray[i+2][j] === 'O'){
                    alert("O Thắng");
            }
        }
    }
}
