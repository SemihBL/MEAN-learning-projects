import{ Vehicle } from './Vehicle';
import{ Point } from './Point';

export class Taxi implements Vehicle {
    //..

    constructor(private _location?: Point, private _color?: string) { }

    travelTo(point: Point): void {
        console.log(`Taksi X: ${this._location.x}, Y: ${this._location.y} noktasından X: ${point.x}, Y: ${point.y} noktasına gidiyor`);

    }

    get location() {
        return this._location;
    }

    set location(value: Point) {
        if (value.x < 0 || value.y < 0) {
            throw new Error('Coordinate informations are wrong.');

        }
        this._location = value;
    }

}