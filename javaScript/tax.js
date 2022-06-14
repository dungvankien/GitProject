var luong=5000000;
var tax;
if(luong>80000000){
    tax=luong*0.35;
else if(luong>52000000) {
        tax=luong*0.3;
     else if(luong>32000000){
            tax=luong*0.25;
          else if(luong>18000000){
                tax=luong*0.2;
                else if(luong>10000000){
                    tax=luong*0.1;
                else{
                        tax=luong*0.05;
                    }

                }
            }
        }
    }
}
console.log(tax);