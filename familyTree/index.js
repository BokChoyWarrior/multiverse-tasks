const colors = require('colors')
const prompt = require('prompt-sync')({sigint: true})


function main() {
  let quit = false
  
  while (!quit) {
    console.log('Please select which approach you\'d like to run: (n)aive, (c)lasses, or (q)uit:')
    const answer = prompt('')
    
    if (answer === 'c' || (answer === 'n')) {
      console.log('====== OUTPUT ======'.green)
      
      switch (answer) {
        case 'c':
          classes(false)
          break;
          case 'n':
            naive()
            break;
          }
          
          console.log('====== OUTPUT ======'.green)
        } else if (answer === 'q') {
          quit = true
          console.log('        QUIT\n'.red)
        } else {
          console.log(`Option "${answer}" not found.\n`.red)
        }
      }
    }
    
    // naive approach (pure objects)
    function naive() {
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
      }
      
      function classes(runConsoleTests=true) {
        
        class Person {
          constructor(name, parents=[]) {
            this.name = name
            this.parents = parents
          }
          
          childOf() {
            const parentsString = this.parents.map(parent => parent.name).join(' & ') || "unknown"
            
            return `Parents of ${this.name}: \n${parentsString}`
          }
        }
        
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
        
        // tests
        if (runConsoleTests) {
          console.log(princeWilliam.childOf())
          console.log(princeAndrew.childOf())
        } else {
          module.exports = {Person}
        }
      }


// if we run the file specifically, execute the ask loop.
if (require.main === module) {
  main()
} else {
  classes(false)
}