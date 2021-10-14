export default class Bag {
  weight: number;

  constructor(weight: number) {
    this.weight = weight;
  }

  isOverLimit() {
    return this.weight > 20;
  }
}
