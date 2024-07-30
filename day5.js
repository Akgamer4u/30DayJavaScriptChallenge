function evenOrOdd(num) {
    console.log("even or odd");
    if (num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(5))

console.log("------------------------------------------------------")

function squared(num) {
    console.log("squared");
    return num * num;
}
console.log(squared(4));
console.log(squared(5))
console.log("------------------------------------------------------")
function findMaximumTowNumbers(num1, num2) {
    console.log("maximum number");
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(findMaximumTowNumbers(4, 5))
console.log(findMaximumTowNumbers(3, 4))
console.log("------------------------------------------------------")
function concatinateTwoStrings(str1, str2) {
    return str1 + str2;
}
console.log(concatinateTwoStrings("avinash", "kumar"))
console.log(concatinateTwoStrings("jhon", "kumar"))
console.log("------------------------------------------------------")

const sumOfTwoNumbers = (num1, num2) => {
    return num1 + num2;
};
console.log(sumOfTwoNumbers(4, 5));
console.log(sumOfTwoNumbers(3, 4))
console.log("------------------------------------------------------")

const checkingStringContaningCharacter = (str, char) => {
    return str.includes(char);
};
console.log(checkingStringContaningCharacter("avinash", "a"));
console.log(checkingStringContaningCharacter("avinash", "b"))
console.log("------------------------------------------------------")
const twoParameterProduct = (num1, num2=2) => {
    return num1 * num2;
};
console.log(twoParameterProduct(4 ));
console.log(twoParameterProduct(3, 4))
console.log("------------------------------------------------------")
const personGreerting = (name , age=18 ) => {
    return `Hello ${name} nice to meet you . You are ${age} year old`;
};
console.log(personGreerting("avinash", 20));
console.log(personGreerting("jhon"))
console.log("------------------------------------------------------")
const hashTag = (str) => {
   return `#${str}`
};

const highOrderFunction=(hashTag ,num) => {
    let result = [];
    for(let i=0;i<num;i++ ) {
      result[i] = hashTag("hello");
    }
    return result
}; 

console.log(highOrderFunction(hashTag, 5));
console.log("------------------------------------------------------")
const secondHighOrderFunction=(fun1,fun2,value) => {
    let result = fun1(value);
    fun2(result);
};
const fun1=(value) => {
    let a=value*value;
    return a
};
const fun2=(result) => {
    console.log(result+10);
};
secondHighOrderFunction(fun1,fun2,100);
