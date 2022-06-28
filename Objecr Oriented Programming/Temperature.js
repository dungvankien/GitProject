let isTemperature = function (cecius) {
    this.cecius = cecius;
    this.convertFahrenheit = function () {
        return ((9 * cecius / 5) + 32);
    }
    this.convertKelvin=function(){
        return cecius+273.15;
    }
}
let temperature=new isTemperature(25);
console.log(temperature.convertFahrenheit());
console.log(temperature.convertKelvin());