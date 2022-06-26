let myProduct=['Sony Xperia','Nokia 6','Samsung Galaxy','Apple iPhone 6S','Xiaomi Mi4'];
let newAddProduct=document.getElementById('newProduct');
let tableNew=document.getElementById('mytable');
addTable(myProduct);
function addTable(array){
    let myTable="<table border='1'>";
                myTable+="<tbody>";
                    myTable+="<tr>";
                        myTable+="<th >Ordinal<br>Numbers</th>";
                        myTable+="<th class='mycenter'>Product Name</th>";
                        myTable+="<th>Edit</th>";
                        myTable+="<th>Delete</th>";
                    myTable+="</tr>";
                    for(let i=0;i<array.length;i++){
                    myTable+="<tr>";
                        myTable+=`<td>${i+1}</td>`;
                        myTable+=`<td class='mycenter'>${array[i]}</td>`;
                        myTable+=`<td onclick='editProduct(${i})'><button>Edit</button></td>`;
                        myTable+=`<td onclick='deleteProduct(${i})'><button>Delete</button></td>`;
                    myTable+="</tr>";
                    }
                myTable+="</tbody>";
    myTable+="</table>";
    tableNew.innerHTML=myTable;
}
function addProduct(){
    let flag=false;
    let newProduct=newAddProduct.value;
    for(let i in myProduct){
        if (myProduct[i]==newProduct){
            flag=true;
            break;
        }
    }
    if(flag){
        alert('The product is already in the list');
    } else{
        myProduct.push(newProduct);
        addTable(myProduct);
    }
    newAddProduct.value=null;
}
function deleteProduct(number){
    let result=confirm(`Do you want to remove ${myProduct[number]} from the list?`);
    if (result==true){
    myProduct.splice(number,1);
    addTable(myProduct);
    }
}
function editProduct(number){
    newAddProduct.value=myProduct[number];
    document.getElementById('save').style.display="none";
    document.getElementById('update').style.display="inline-block";
    document.getElementById("idexHidden").value=number;
}
function myUpdate(){
    let flag=false;
    let newProduct=newAddProduct.value;
    for(let i in myProduct){
        if (myProduct[i]==newProduct){
            flag=true;
            break;
        }
    }
    if(flag){
        alert('The product is already in the list');
    } else{
        let index=document.getElementById("idexHidden").value;
        myProduct[index]=newProduct;
        addTable(myProduct);
    }
    document.getElementById('save').style.display="inline-block";
    document.getElementById('update').style.display="none";
    newAddProduct.value=null;
}