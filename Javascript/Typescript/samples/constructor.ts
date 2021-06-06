interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    //..

    constructor(private location?: Point,private color?: string) { }

    travelTo(point: Point): void {
        console.log(`Taksi X: ${this.location.x}, Y: ${this.location.y} noktasından X: ${point.x}, Y: ${point.y} noktasına gidiyor`);

    }
}

// Taxi 1
let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, 'red');
taxi_1.travelTo({ x: 1, y: 2 });

// Taxi 2
let taxi_2: Taxi = new Taxi({ x: 1, y: 5 });
taxi_1.travelTo({ x: 2, y: 9 });
