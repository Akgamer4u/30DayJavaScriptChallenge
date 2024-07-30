const calculation = (a, b) => {
    const sum = a + b;
    const difference = a - b;
    const multiplication = a * b;
    const division = a / b;
    const reminder = a % b;

    return { sum, difference, multiplication, division, reminder };
};

console.log(calculation(10, 5));

const reassign=(a,b) => {
    a+=b
    b-=a
    return{a,b}
};

console.log(reassign(10,5))

const conditional=(a,b) => {
   return {
    greater: a>b,
    less: a<b,
    equal: a==b
    }
};

console.log(conditional(5,5))

const moreConditional=(a,b) => {
    return {
        greaterOrEqual: a>=b,
        lessOrEqual: a<=b,
        strictEqual: a===b
    }
}

console.log(moreConditional(10,5))

const operators=(a,b) => {
    return {
        twoAndConditional: a>b && b<a ,
        twoOrConditional: a>b || b<a,
        notEqual: a!=b
    }
}

console.log(operators(1,5))

const ternaryvalue=(a) => {
    return (a>=0) ? `${a} is positive`:`${a} is negative` 
};  
console.log(ternaryvalue(-2))
console.log(ternaryvalue(2))
console.log(ternaryvalue(0))

