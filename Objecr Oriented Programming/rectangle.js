let myRectangle=function(Width, Height) {
        this.width = Width;
        this.height = Height;
        this.getWidth=function(){
            return this.width;
        }
        this.getHeight=function(){
            return this.height;
        }
        this.setWidth=function(Width){
            this.width = Width;
        }
        this.setHeight=function(Height){
            this.height = Height;
        }
        this.getArea = function () {
            return Height * Width;
        }
        this.getPerimeter = function () {
            return 2 * (Height + Width);
        }
}
function createRectangle(width,height){
    let ctx=document.getElementById('myCanvas');
        ctx=ctx.getContext('2d');
        ctx.fillStyle='rgb(45, 177, 85)';
        ctx.fillRect(0,0,width,height);
}
let rectangle=new myRectangle(500,400);
let width=rectangle.getWidth();
let height=rectangle.getHeight();
let area=rectangle.getArea();
let perimeter=rectangle.getPerimeter();
alert(`width=${width}, height=${height}, area=${area},perimeter=${perimeter}`);
createRectangle(width,height);
