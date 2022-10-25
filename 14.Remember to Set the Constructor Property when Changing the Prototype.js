//TASK: Define the constructor property on the Dog prototype.

function Dog(name) {
    this.name = name;
  }

  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  //There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten

  //To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property