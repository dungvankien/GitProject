function footToMeter(foot) {
    return 0.305 * foot;
}
function meterToFoot(meter) {
    return 3.279 * meter;
}
let feet=2;
let meter=25;
console.log(feet +' feet= '+footToMeter(feet)+' meter');
console.log(meter+' meter= '+meterToFoot(meter)+' feet');