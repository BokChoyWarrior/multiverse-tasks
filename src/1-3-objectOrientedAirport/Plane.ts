import Passenger from './Passenger';

export default class Plane {
    type: string;

    remainingCapacity: number;

    passengers: Array<Passenger>;

    constructor(type: string, remainingCapacity: number) {
      this.type = type;
      this.remainingCapacity = remainingCapacity;
      this.passengers = [];
    }

    board(passenger: Passenger) {
      if (!(passenger instanceof Passenger)) {
        throw new Error('The plane can only board passengers');
      } else if (this.remainingCapacity === 0) {
        throw new Error('Plane is at maximum capacity');
      } else {
        this.remainingCapacity -= 1;
        this.passengers.push(passenger);
      }
    }
}
