/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default  this is the  whole javascript you will get a error
* 2.  implicit binding is (this.e)  keyword where the object before this will be bound to
* 3.  New Binding set that new object as the this  for call functions
* 4. explicit binding this without putting  function on a object use call and apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myFunction = function() {
    console.log(this);
 }
 myFunction();

// Principle 2

// code example for Implicit Binding


const elijah = {
	name: 'Elijah',
	greet: function(person) {
      console.log(`Hi ${person}, my name is ${this.name}`);
	}
}

elijah.greet("Hacker");

// const greetBack = elijah.greet;
// greetBack('Elijah'); // add ahmed as a name do not know why 

// Principle 3

// code example for New Binding

function GreetToo(name) {
    this.greeting = `Hello I'm `;
    this.name = name;
    this.speak = function() {
        console.log(`${this.greeting}${this.name}`);
        console.log(this);
    }
};

const greetEnoch = new GreetToo('Enoch');
const greetDeanna = new GreetToo('Deanna');

greetEnoch.speak();
greetDeanna.speak();


// Principle 4

// code example for Explicit Binding

function greet2() {
    console.log(this.name);
}

const person = {
    name:'Elijah'
}
const person2 = {
    name:'aleciael'
}

greet2.call(person);
greet2.apply(person2);