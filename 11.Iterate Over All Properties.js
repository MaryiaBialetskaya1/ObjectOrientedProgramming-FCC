//TASK: Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.


//own properties and prototype properties - Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype

//console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].


function Dog(name) {
    this.name = name;
  }

  Dog.prototype.numLegs = 4;

  let beagle = new Dog("Snoopy");

  let ownProps = [];
  let prototypeProps = [];

  for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property);
    } else{
      prototypeProps.push(property)
    }
  }
  console.log(ownProps);
  console.log(prototypeProps);