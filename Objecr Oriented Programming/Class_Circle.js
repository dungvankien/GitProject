let circle=function(radius){
    this.radius=radius;
    this.getRadius=function(){
        return radius;
    }
    this.getArea=function(){
        return (Math.PI*radius*radius).toFixed(2);
    }
}
let myCircle=new circle(9);
let radius=myCircle.getRadius();
let area=myCircle.getArea();
console.log(`radius: ${radius}. Area: ${area}`);
