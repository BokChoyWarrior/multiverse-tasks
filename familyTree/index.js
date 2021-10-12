// naive approach (pure objects)

// initialise people objects
const princePhilip = {}
const queenElizabeth = {}
const princessMargaret = {}
const camila = {}
const charles = {}
const diana = {}
const anne = {}
const princeAndrew = {}
const princeEdward = {}
const catherine = {}
const princeWilliam = {}
const princeHarry = {}
const meghan = {}

// then split them into generations,
const gen1 = [princePhilip, queenElizabeth, princessMargaret]
const gen2 = [camila, charles, diana, anne, princeAndrew, princeEdward]
const gen3 = [catherine, princeWilliam, princeHarry, meghan]

// let's keep a nice array of them all,
const people = [...gen1, ...gen2, ...gen3]

// also they need names,
princePhilip.name = "Prince Philip"
queenElizabeth.name = "Queen Elizabeth"
princessMargaret.name = "Princess Margaret"
camila.name = "Camila"
charles.name = "Charles"
diana.name = "Diana"
anne.name = "Anne"
princeAndrew.name = "Prince Andrew"
princeEdward.name = "Prince Edward"
catherine.name = "Catherine"
princeWilliam.name = "Prince William"
princeHarry.name = "Prince Harry"
meghan.name = "Meghan"

// let's also create a function to give us the person's parents
const childOf = function() {
  return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    // NOTE: if using an arrow function as value, `this` keyword will not work because arrow functions reference `this` of parent scope

    // EXAMPLE :
    // const childOf = () => {
    //   return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    // }
    // In the example, `this` would not refer to `person`, but the globally scoped `this`
}

// and assign this function as a method for all `people`
for (let person of people) {
  // We can also give a default empty `parents` array
  person.parents = []
  person.childOf = childOf
}

// and finally, connect the parents to their kids!
princeWilliam.parents = [charles, diana]
princeHarry.parents = [charles, diana]
charles.parents = [queenElizabeth, princePhilip]
anne.parents = [queenElizabeth, princePhilip]
princeAndrew.parents = [queenElizabeth, princePhilip]
princeEdward.parents = [queenElizabeth, princePhilip]


// tests
console.log(princeWilliam.childOf())
console.log(princeAndrew.childOf())