function Staff(fullname, email) {
    this.fullname = fullname;
    this.email = email;
    this.setFullname = function (fullname) {
        this.fullname = fullname;
    }
    this.getFullname = function () {
        return this.fullname;
    }
    this.setEmail=function(email){
        this.email=email;
    }
    this.getEmail=function(){
        return this.email;
    }
    this.toString=function(){
        return `Fullname: ${this.fullname}  Email: ${this.email}`;
    }
}
let david=new Staff("David","david@gmail.com");
david.setFullname("David Do");
david.setEmail("david.do.@gmail.com");
console.log(david.toString());
const object=[
    new Staff("David","david@gmail.com"),
    new Staff("Huy Ngoc","huyngoc@gmail.com"),
    new Staff("Truc DO","trucdo@mmai.com")
]
for(let i=0; i<object.length;i++){
    console.log(object[i].toString());
}