var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: " + point.x + ", Y: " + point.y);
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otob\u00FCs X: " + point.x + ", Y: " + point.y);
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 5 };
