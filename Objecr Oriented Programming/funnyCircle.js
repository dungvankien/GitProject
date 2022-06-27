function mycircle(x,y,radius){
    this.x=x;
    this.y=y;
    this.radius=radius;
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}
function getRandomColor(){
    var red=getRandomHex();
    var green=getRandomHex();
    var blue=getRandomHex();
        return `rgb(${red}, ${blue}, ${green})`;
}
function createCircle(){
    let ctx=document.getElementById('myCanvas').getContext('2d');
    let radius=Math.floor(Math.random()*81);
    var color=getRandomColor();
    var x=Math.random()*window.innerWidth;
    var y=Math.random()*window.innerHeight;
    let circle=new mycircle(x,y,radius);
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill()
}
for(let i=0; i<40;i++){
    createCircle(); 
}
