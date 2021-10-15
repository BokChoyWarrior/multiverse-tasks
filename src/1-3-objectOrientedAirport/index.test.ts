import Bag from "./Bag";
import CrewMember from "./CrewMember";
import Airport from "./Airport";
import Passenger from "./Passenger";
import Plane from "./Plane";

function createValidObjects() {
  let validObjects: object;
  return (validObjects = {
    passengers: [
      new Passenger("normal pass 1", 543215, "E4", false, [new Bag(18)]),
      new Passenger("gold pass 1", 4321, "F5", true, [
        new Bag(10),
        new Bag(18.7),
      ]),
      new Passenger("normal pass 2", 55555555, "G1", false),
    ],
    bags: [new Bag(15), new Bag(25)],
    crewMembers: [
      new CrewMember("crew 1", 43221, [new Bag(15), new Bag(20), new Bag(7)]),
      new CrewMember("crew 2", 43241, [new Bag(13), new Bag(20)]),
    ],
    planes: [new Plane("boeing 747", 50)],
  });
}

describe("Passenger", () => {
  const passengers = createValidObjects().passengers;

  test("the passenger should be able to add bags", () => {
    expect(Array.isArray(passengers[0].bags)).toBeTruthy();
    expect(() => {
      passengers[0].addBag(new Bag(5));
    }).toThrow(Error);
    expect(() => {
      passengers[2].addBag(new Bag(25));
    }).toThrow(Error);

    const bagsBefore = passengers[1].bags.length;
    passengers[1].addBag(new Bag(5));
    const bagsAfter = passengers[1].bags.length;
    expect(bagsBefore + 1).toBe(bagsAfter);

    expect(() => {
      passengers[1].addBag(new Bag(5));
    }).toThrow(Error);
  });

  test("creation validation", () => {
    expect(
      () =>
        new Passenger("mary sue", 333, "E4", false, [new Bag(5), new Bag(20)])
    ).toThrow(Error);
  });
});

describe("Bag", () => {
  const bags = createValidObjects().bags;
  test("the bags can be over limit", () => {
    expect(bags[0].isOverLimit()).toBeFalsy();
    expect(bags[1].isOverLimit()).toBeTruthy();
  });
});

describe("Airport", () => {
  // test('', () => {
  // })
});

describe("Plane", () => {
  const validObjects = createValidObjects();
  const planes = validObjects.planes;
  const passengers = validObjects.passengers;
  // const airports = validObjects.airports

  test("the plane should be able to board passengers", () => {
    expect(() => planes[0].board(passengers[0])).toBeTruthy();
  });

  const capacityBefore = planes[0].remainingCapacity;
  planes[0].board(passengers[1]);
  const capacityAfter = planes[0].remainingCapacity;
  test("the plane's capacity should decrease with each passenger", () => {
    expect(capacityBefore).toBe(capacityAfter + 1);
  });
});

describe("CrewMember", () => {
  const crewMembers = createValidObjects().crewMembers;

  test("The crew members are made correctly", () => {
    expect(crewMembers[0].seatNumber).toBe("CREW");
    expect(crewMembers[0].bagLimit).toBe(3);
  });
});
