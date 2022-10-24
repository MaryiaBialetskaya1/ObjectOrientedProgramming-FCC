//TASK: Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

function Dog(){
    this.name = "Diego",
    this.color = "white",
    this.numLegs = 4
  }

//1. Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
//2. Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
//3. Constructors define properties and behaviors instead of returning a value as other functions might.