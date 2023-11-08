//https://www.codewars.com/kata/5121303128ef4b495f000001/
/*
Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:

var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name           // should == 'Joe'
*/

class Person{
  constructor(name){
    this.name = name;
  }
  greet(yourName){
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}