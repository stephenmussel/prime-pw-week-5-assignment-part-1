console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Phaydara',
  lastName: 'Vongsavanthong',
  hasSiblings: false,
  shoeCount: 5,
  favThreeFoods: ['curry', 'mangos', 'ice cream']
}

console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/

let fullName = me.firstName + ' ' + me.lastName;
// let fullName = [me.firstName] + ' ' + [me.lastName];

console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[2]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log(`Current shoe count is: ${me.shoeCount}`); // logs current shoe count, 5
me.shoeCount += 1; // function to add 1 to shoe count

/* this was my original soluton because i thought i needed to create a function for the assignment.*/
// function addToShoeCount () {
//   me.shoeCount += 1; // function to add 1 to shoe count
// }
// addToShoeCount(); // calls addToShoeCount function

console.log(`Updated shoe count is: ${me.shoeCount}`); // logs updated shoe count: 6

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'white'; // adding new property to object
console.log(me); // logs object with new property (favoriteColor) added
