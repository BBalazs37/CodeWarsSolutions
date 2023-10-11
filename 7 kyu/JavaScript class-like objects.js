//https://www.codewars.com/kata/513e1e47c600c93cef000001/
/*
For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.
*/
// create your Animal class like object here
class Animal{
  constructor(name, type){
    this.type = type;
    this.name = name;
  }
  
  toString(){
    return `${this.name} is a ${this.type}`
  }
}