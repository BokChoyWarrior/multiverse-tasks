class Passenger {
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
    this.bagLimit = isGold ? 3 : 1;
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
  constructor(name) {
    this.name = name
  }
}

class Plane {
  constructor(type, remainingCapacity) {
    this.type = type
    this.remainingCapacity = remainingCapacity
    this.passengers = []
  }

  board(passenger) {
    if (!(passenger instanceof Passenger)) {
      throw new Error('The plane can only board passengers')
    } else if (this.remainingCapacity === 0) {
      throw new Error('Plane is at maximum capacity')
    } else {
      this.remainingCapacity -= 1
      this.passengers.push(passenger)
    }
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