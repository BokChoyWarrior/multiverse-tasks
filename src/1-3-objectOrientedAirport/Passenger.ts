import Bag from './Bag'

export default class Passenger {
  name!: string;

  passportNumber: number;

  seatNumber: string;

  isGold: boolean;

  bags: Array<Bag>;

  bagLimit: number;

  constructor(
    name: string,
    passportNumber: number,
    seatNumber: string,
    isGold: boolean,
    bags: Array<Bag> = [],
  ) {
    this.name = name;
    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;
    this.isGold = isGold;
    this.bagLimit = isGold ? 3 : 1;
    this.bags = bags;

    if (bags.length > this.bagLimit) {
      throw new Error(
        `Too many bags, this passenger can have maximum of ${this.bagLimit} bags`,
      );
    }
  }

  addBag(bag: Bag) {
    if (bag.isOverLimit()) {
      throw new Error('Bag is over the weight limit');
    } else if (this.bags.length === this.bagLimit) {
      throw new Error('Passenger not allowed any more bags');
    } else {
      this.bags.push(bag);
    }
  }
}
