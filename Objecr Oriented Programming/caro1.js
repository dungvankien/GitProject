let row = 10;
let col = 10;
document.getElementById("bodyCaro").innerHTML= getBody(row,col);
function getBody(row, col) {
    for (let i = 0; i < row; i++) {
        let tableCaro = `<tr>`;
        for (let i = 0; i < col; i++) {
            tableCaro += `<td style="width: 20px; height:20px;"></td>`;
        }
        tableCaro += `</tr>`;
    }
}