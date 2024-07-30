// task 1

var num=12
console.log(num)

// task 2

let str="Avinash"
console.log(str)

//task 3

const bool=1===1
console.log(bool)

//task 4

let num1=12
let str1="hello"
let bool1=true
let obj={name:"avinash"}
let arr=[1,2,3]
console.log(typeof(num1))
console.log(typeof(str1))
console.log(typeof(bool1))
console.log(typeof(obj))
console.log(typeof(arr))

//task 5

let value=10
console.log(value)
value=20
console.log(value)

//task 6

const value2=10
console.log(value2)
// value2=20      <- error
// console.log(value2)

let variabletype=(val)=>{
    return typeof(val)
}

console.log(variabletype(10))
console.log(variabletype("avinash"))
console.log(variabletype(true))
console.log(variabletype({name:"avinash"}))
console.log(variabletype([1,2,3,4]))

//task 7
// Example with let
let mutableVariable = 10;
console.log("Initial value of mutableVariable (let):", mutableVariable);

// Reassigning the value of mutableVariable
mutableVariable = 20;
console.log("Reassigned value of mutableVariable (let):", mutableVariable);

// Example with const
const immutableVariable = 30;
console.log("Initial value of immutableVariable (const):", immutableVariable);

// Attempting to reassign the value of immutableVariable
try {
    immutableVariable = 40; // This will cause an error
} catch (error) {
    console.log("Error when trying to reassign immutableVariable (const):", error.message);
}
