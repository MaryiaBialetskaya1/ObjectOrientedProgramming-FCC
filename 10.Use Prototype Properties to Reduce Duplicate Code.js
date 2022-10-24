//TASK: Add a numLegs property to the prototype of Dog

function Dog(name) {
    this.name = name;
  }

  Dog.prototype.numLegs = 4;
  let beagle = new Dog("Snoopy");
  let panda = new Dog("Panda");

console.log(beagle.numLegs);
console.log(panda.numLegs);

  //Properties in the prototype are shared among ALL instances

 //Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for beagle and panda is part of the Dog constructor as Dog.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.