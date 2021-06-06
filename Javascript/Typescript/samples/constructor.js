var Taxi = /** @class */ (function () {
    //..
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: " + this.location.x + ", Y: " + this.location.y + " noktas\u0131ndan X: " + point.x + ", Y: " + point.y + " noktas\u0131na gidiyor");
    };
    return Taxi;
}());
// Taxi 1
var taxi_1 = new Taxi({ x: 2, y: 5 }, 'red');
taxi_1.travelTo({ x: 1, y: 2 });
// Taxi 2
var taxi_2 = new Taxi({ x: 1, y: 5 });
taxi_1.travelTo({ x: 2, y: 9 });
