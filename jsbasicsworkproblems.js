var person = {
name: name,
age: 99
 };
 
// Create a function called `greet`,
// it should take a 1 parameter, `name`
 // * and it should print "Hello, my name is {name}"
 // */
 function greet(name){
  console.log("Hello, my name is " + name);
 }

/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */

var canDrive;
if(person.age >= 16){
  canDrive = true;
}else{
  canDrive = false;
}

/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */

 var dataTypes = ["a", 2, 3>2, person, undefined, null];