const { Person } = require('./index')

describe('Person class', () => {
  const princePhilip = new Person("Prince Philip")
  const queenElizabeth = new Person("Queen Elizabeth")
  const princessMargaret = new Person("Princess Margaret")
  const camila = new Person("Camila")
  const charles = new Person("Charles", [queenElizabeth, princePhilip])
  const diana = new Person("Diana")
  const anne = new Person("Anne", [queenElizabeth, princePhilip])
  const princeAndrew = new Person("Prince Andrew", [queenElizabeth, princePhilip])
  const princeEdward = new Person("Prince Edward", [queenElizabeth, princePhilip])
  const catherine = new Person("Catherine")
  const princeWilliam = new Person("Prince William", [charles, diana])
  const princeHarry = new Person("Prince Harry", [charles, diana])
  const meghan = new Person("Meghan")

  test('Instances should be type Person', () => {
    expect(diana instanceof Person).toBe(true)
  })

  test('Names should be typeof string', () => {
    expect(typeof diana.name).toBe('string')
  })

  test('childOf() should return the correct result', () => {
    expect(princeAndrew.childOf()).toBe("Parents of Prince Andrew: \nQueen Elizabeth & Prince Philip")
  })

  test('childOf() should return the correct result with no parents', () => {
    expect(meghan.childOf()).toBe("Parents of Meghan: \nunknown")
  })
})

