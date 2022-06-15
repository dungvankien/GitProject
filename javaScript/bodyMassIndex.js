function myClick() {
    let myweight=Number(document.getElementById('wei').value);
    let myheight=Number(document.getElementById('hei').value);
    let bmi =myweight/(myheight*myheight);
    if (bmi>30) {
        document.getElementById('myresult').innerHTML=('BMI='+bmi+'Obese');
    }
        else if (bmi>25) {
            document.getElementById('myresult').innerHTML=('BMI='+bmi+'Overweight');
        }
            else if (bmi>18.5) {
                document.getElementById('myresult').innerHTML=('BMI='+bmi+'Normal');
            }
                else {
                    document.getElementById('myresult').innerHTML=('BMI='+bmi+'Underweight');
                }
}
function myReset() {
    document.getElementById('wei').value=null;
    document.getElementById('hei').value=null;
    document.getElementById('myresult').innerHTML=null;
}