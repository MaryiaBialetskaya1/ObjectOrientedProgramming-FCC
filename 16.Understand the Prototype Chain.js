//TASK: Modify the code to show the correct prototype chain.

function Dog(name) {
    this.name = name;
  }

  let beagle = new Dog("Snoopy");

  Dog.prototype.isPrototypeOf(beagle);  // yields true

  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);

//All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

//Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Dog.prototype is Object.prototype

//The hasOwnProperty method is defined in Object.prototype, which can be accessed by Dog.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Dog is the supertype for 'beagle', while 'beagle' is the subtype. Object is a supertype for both Dog and 'beagle''. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

