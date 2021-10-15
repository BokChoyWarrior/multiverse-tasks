export default class Airport {
  name: string;

  static airports: Airport[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
