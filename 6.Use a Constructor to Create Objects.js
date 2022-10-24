//TASK: Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  let hound = new Dog();

//this inside the constructor always refers to the object being created.
//Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance.