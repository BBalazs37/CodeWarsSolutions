//https://www.codewars.com/kata/5535572c1de94ba2db0000f6/
/*
Practical info:
The .bark() method of a dog should return the string 'Woof!'.

The contructor you made (it is preloaded) looks like this:

function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}
*/

Dog.prototype.bark = function(){
  return 'Woof!'
}