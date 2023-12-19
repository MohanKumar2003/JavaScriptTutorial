/* 
    primitive : 
        string, number, boolean, null, undefined

    complex : 
        object array, functiin
*/
/* primitive Type */
// string
let name = "Mohan";
console.log(name);

// number
let age = 22;
console.log(age);

// boolean
let isStudent = true;
console.log(isStudent);


/* complex Type */
// object
let person = {
    name : "Madhu",
    age : 30
};
console.log("\n" + person.name + " : " + person.age);

// array
let numbers = [1, 2, 3];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}
// or else
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);