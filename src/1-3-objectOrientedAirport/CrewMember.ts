import Passenger from "./Passenger";
import Bag from "./Bag";

export default class CrewMember extends Passenger {
  constructor(name: string, passportNumber: number, bags: Bag[] = []) {
    super(name, passportNumber, "CREW", true, bags);
  }
}
