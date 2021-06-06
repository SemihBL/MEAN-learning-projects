import { Taxi } from './Taxi';

// Taxi 1
let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, 'red');
taxi_1.travelTo({ x: 1, y: 2 });

let currentLocation = taxi_1.location;
taxi_1.location = { x: 10, y: 8 };
