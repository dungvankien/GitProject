class Mobiphone{
    constructor(energy){
        this.energy=energy;
        this.writeMessenger="write Messenger";
        this.saveFromMailbox="Save From Mailbox";
        this.saveToMailbox="Save To Mailbox";

    }
    turnOn (){
        return `Bat dien thoai/ ${this.energy-1}`;
    }
    turnoff (){
        return `Tắt dien thoai/ ${this.energy-1}`;
    }
    chargeBattery(){
        return `xac pin dien thoại/ ${this.energy-1}`;
    }
    writeMessenger0(){
        return this.writeMessenger+`/ ${this.energy-1}`;
    }
    toMessenger(){
        return `Nhan tin nhan/ ${this.energy-1}`;
    }
    fromMessenger(){
        return `Gui tin nhan/ ${this.energy-1}`;
    }
    seeToMessenger(){
        return `Xem tin nhan hop thu den/ ${this.energy-1}`;
    }
    seeFromMessenger(){
        return `Xem tin nhan da giui/ ${this.energy-1}`;
    }
}
let mobiphone= new Mobiphone(100);
function turnon(){
    alert(mobiphone.turnOn());
}
function turnoff(){
    alert(mobiphone.turnoff());
}
function sentMessenger(){
    alert(mobiphone.fromMessenger());
}
function writeMessenger0(){
    alert(mobiphone.writeMessenger0());
}
function turnon1(){
    alert(mobiphone.turnOn());
}
function turnoff1(){
    alert(mobiphone.turnoff());
}
function toMessenger1(){
    alert(mobiphone.toMessenger());
}
function seeToMessenger(){
    alert(mobiphone.seeToMessenger());
}