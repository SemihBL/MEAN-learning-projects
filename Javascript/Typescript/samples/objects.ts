interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    //..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Taksi X: ${point.x}, Y: ${point.y}`);
    }
}

class Bus implements Vehicle {
    //..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Otobüs X: ${point.x}, Y: ${point.y}`);
    }
}

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 5 };