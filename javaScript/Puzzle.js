    let index1=1;
    let index2=1;
    let index3=1;
    let index4=1;
    function myclick1() { 
        let imgs1=['cat1.jpg','dog1.jpg','tho1.jpg' ];
        document.getElementById('img1').src=imgs1[index1];
        index1++;
        if(index1==3){
            index1=0;
        }
    }
    function myclick2() { 
        let imgs2=['cat2.jpg','dog2.jpg','tho2.jpg'];
        document.getElementById('img2').src=imgs2[index2];
        index2++;
        if(index2==3){
            index2=0;
        }
    }
    function myclick3() {
        let imgs3=['cat3.jpg','dog3.jpg','tho3.jpg'];
        document.getElementById('img3').src=imgs3[index3];
        index3++;
        if(index3==3){
            index3=0;
        }
    }
    function myclick4() {
        let imgs4=['cat4.jpg','dog4.jpg','tho4.jpg'];
        document.getElementById('img4').src=imgs4[index4];
        index4++;
        if(index4==3){
            index4=0;
        }
    }
