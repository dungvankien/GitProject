function isPalindrome (string){
    let flag=true;
    for(let i=0;i<((string.length)-i-1);i++){
        if(string[i]!=string[(string.length)-i-1]){
            flag=false;
            break;
        }
    }
    return flag;
}
let mytext='chchavahchc';
let mytext1='chuongtrinhhnirtgnouhc';
let mytext2='hakunamatatanukah';
console.log(isPalindrome(mytext));
console.log(isPalindrome(mytext1));
console.log(isPalindrome(mytext2));
