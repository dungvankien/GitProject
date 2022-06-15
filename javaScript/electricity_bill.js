function payment() {
    let elnumber=Number(document.getElementById('number').value);
    let sumpay;
    if (elnumber>400) {
        document.getElementById('number1').value=50;
        document.getElementById('level1').value=(50*1678);
        document.getElementById('number2').value=50;
        document.getElementById('level2').value=(50*1734);
        document.getElementById('number3').value=100;
        document.getElementById('level3').value=(100*2014);
        document.getElementById('number4').value=100;
        document.getElementById('level4').value=(100*2536);
        document.getElementById('number5').value=100;
        document.getElementById('level5').value=(100*2834);
        document.getElementById('number6').value=(elnumber - 400);
        document.getElementById('level6').value=((elnumber - 400)*2927);
        sumpay=(50*1678)+(50*1734)+(100*2014)+(100*2536)+(100*2834)+((elnumber - 400)*2927);
    }
        else if (elnumber>300) {
            document.getElementById('number1').value=50;
            document.getElementById('level1').value=(50*1678);
            document.getElementById('number2').value=50;
            document.getElementById('level2').value=(50*1734);
            document.getElementById('number3').value=100;
            document.getElementById('level3').value=(100*2014);
            document.getElementById('number4').value=100;
            document.getElementById('level4').value=(100*2536);
            document.getElementById('number5').value=(elnumber-300);
            document.getElementById('level5').value=((elnumber-300)*2834);
            sumpay=(50*1678)+(50*1734)+(100*2014)+(100*2536)+((elnumber-300)*2834);
            document.getElementById('number6').value=null;
            document.getElementById('level6').value=null;
        }
            else if (elnumber>200) {
                document.getElementById('number1').value=50;
                document.getElementById('level1').value=(50*1678);
                document.getElementById('number2').value=50;
                document.getElementById('level2').value=(50*1734);
                document.getElementById('number3').value=100;
                document.getElementById('level3').value=(100*2014);
                document.getElementById('number4').value=(elnumber-200);
                document.getElementById('level4').value=((elnumber-200)*2536);
                sumpay=(50*1678)+(50*1734)+(100*2014)+((elnumber-200)*2536);
                document.getElementById('number5').value=null;
                document.getElementById('level5').value=null;
                document.getElementById('number6').value=null;
                document.getElementById('level6').value=null;
            }
                else if (elnumber>100) {
                    document.getElementById('number1').value=50;
                    document.getElementById('level1').value=(50*1678);
                    document.getElementById('number2').value=50;
                    document.getElementById('level2').value=(50*1734);
                    document.getElementById('number3').value=(elnumber-100);
                    document.getElementById('level3').value=((elnumber-100)*2014);
                    sumpay=(50*1678)+(50*1734)+((elnumber-100)*2014) 
                    document.getElementById('number4').value=null;
                    document.getElementById('level4').value=null;
                    document.getElementById('number5').value=null;
                    document.getElementById('level5').value=null;
                    document.getElementById('number6').value=null;
                    document.getElementById('level6').value=null;  
                }
                    else if (elnumber>50) {
                        document.getElementById('number1').value=50;
                        document.getElementById('level1').value=(50*1678);
                        document.getElementById('number2').value=(elnumber-50);
                        document.getElementById('level2').value=((elnumber-50)*1734);
                        sumpay=(50*1678)+((elnumber-50)*1734);
                        document.getElementById('number3').value=null;
                        document.getElementById('level3').value=null;
                        document.getElementById('number4').value=null;
                        document.getElementById('level4').value=null;
                        document.getElementById('number5').value=null;
                        document.getElementById('level5').value=null;
                        document.getElementById('number6').value=null;
                        document.getElementById('level6').value=null;  
                    }
                        else if (elnumber>0) {
                            document.getElementById('number1').value=elnumber;
                            document.getElementById('level1').value=(elnumber*1.678);
                            sumpay=(elnumber*1678); 
                            document.getElementById('number2').value=null;
                            document.getElementById('level2').value=null;
                            document.getElementById('number3').value=null;
                            document.getElementById('level3').value=null;
                            document.getElementById('number4').value=null;
                            document.getElementById('level4').value=null;
                            document.getElementById('number5').value=null;
                            document.getElementById('level5').value=null;
                            document.getElementById('number6').value=null;
                            document.getElementById('level6').value=null; 
                        }
                            else {
                                window.alert('undefined');
                            }
    document.getElementById('payment').value=sumpay;
    document.getElementById('paymenttax').value=(sumpay*(1+0.1));
}  
function reset() {
        document.getElementById('number').value=null
        document.getElementById('number1').value=null;
        document.getElementById('level1').value=null;
        document.getElementById('number2').value=null;
        document.getElementById('level2').value=null;
        document.getElementById('number3').value=null;
        document.getElementById('level3').value=null;
        document.getElementById('number4').value=null;
        document.getElementById('level4').value=null;
        document.getElementById('number5').value=null;
        document.getElementById('level5').value=null;
        document.getElementById('number6').value=null;
        document.getElementById('level6').value=null;
        document.getElementById('payment').value=null;
        document.getElementById('paymenttax').value=null;
}