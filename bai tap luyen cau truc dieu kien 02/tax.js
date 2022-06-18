//if else
var salary=50000000;
var tax;
// if (salary>80000000) {
//     tax=salary*0.35;}
// else if (salary>52000000) {
//     tax=salary*0.3;}
//     else if (salary>32000000) {
//         tax=salary*0.25;}
//         else if (salary>18000000) { 
//             tax=salary*0.2;}
//             else if (salary>10000000) {
//                 tax=salary*0.15;}
//                 else if (salary >5000000) {
//                     tax=salary*0.1;}
//                     else if (salary>0 {
//                         tax=salary*0.05;}
//                             else {
//                                 tax='undefined';}
// console.log('Pay tax: ' + tax);

// swith--case
// switch (true) {
//     case (salary>80000000):
//         tax=salary*0.35;
//         break;
//     case (salary>52000000):
//         tax=salary*0.3;
//         break;
//     case (salary>32000000):
//         tax=salary*0.25;
//         break;
//     case (salary>18000000):
//         tax=salary*0.2;
//         break;
//     case (salary>10000000):
//         tax=salary*0.15;
//         break;
//     case (salary>5000000):
//         tax=salary*0.1;
//         break;
//     case (salary>0):
//         tax=salary*0.05;
//         break;
//    }   
// console.log( 'Pay tax: ' + tax)  

// temary operator
console.log((salary>80000000)?(salary*0.35):
                (salary>52000000)?(salary*0.3):
                    (salary>32000000)?(salary*0.25):
                        (salary>18000000)?(salary*0.2):
                            (salary>1000000)?(salary*0.15):
                                (salary>5000000)?(salary*0.1):
                                    (salary>0)?(salary*0.05):
                                        (undefined));