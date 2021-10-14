class Passenger {
  name: string; 
  passportNumber: number;
  seatNumber: string;
  isGold: boolean;
  bags: Array;
  bagLimit: number;
   
  constructor(name, passportNumber, seatNumber, isGold, bags=[]) {
    if (
      typeof name !== 'string' ||
      typeof passportNumber !== 'number' ||
      typeof seatNumber !== 'string' ||
      typeof isGold !== 'boolean' ||
      Array.isArray(bags)
    )
  
      this.name = name
      this.passportNumber = passportNumber
      this.seatNumber = seatNumber
      this.isGold = isGold
      this.bagLimit: number = isGold ? 3 : 1;
      this.bags = bags
  
      if (bags.length > this.bagLimit) {
        throw new Error(`Too many bags, this passenger can have maximum of ${this.bagLimit} bags`)
      }

  }

  addBag(bag) {
    if (bag.isOverLimit()) {
      throw new Error('Bag is over the weight limit')
    } else if (this.bags.length === this.bagLimit) {
      throw new Error('Passenger not allowed any more bags')
    } else {
      this.bags.push(bag)
    }
  }
}

class Bag {
  constructor(weight) {
    this.weight = weight
  }

  isOverLimit() {
    return this.weight > 20
  }

}

class Airport {

}

class Plane {
  constructor(type, capacity) {
    this.type = type
    this.capacity = capacity
  }

}

class CrewMember extends Passenger {
  constructor(name, passportNumber, bags=[]) {
    if (typeof name !== 'string' || typeof passportNumber !== 'number' || Array.isArray(bags) !== true) {
      throw new Error('invalid arguments given')
    }

    super(name, passportNumber, "CREW", true, bags)
  }
}

module.exports = { Passenger, Bag, Airport, Plane, CrewMember }