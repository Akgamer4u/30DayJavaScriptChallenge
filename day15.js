// const outerFunction = () => {
//     const name = "avinash";
//    const innerFunction = () => {
//         return name
//     }
//     return innerFunction();
// }

// console.log(outerFunction())

// const impelementCounter = () => {
//   let counter = 0;

//   return {
//     increment: function () {
//       counter++;
//       console.log(counter);
//     },

//     getCurrentValue: function () {
//       return counter;
//     },
//   };
// };

// const counter = impelementCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log("current value is "+counter.getCurrentValue());

// const uniqueId = () => {
//     let id =Math.floor(Math.random()*10);
//     return () => {
//         id++;
//         const fixpram="MiT"
//         return fixpram+id.toString();
//     };
// };

// const generateId = uniqueId();

// console.log(generateId());
// console.log(generateId());
// console.log(generateId());

// const name = (user) => {
//     const greet = () => {
//         return (`hello ${user} nice to meet you`);
//     };
//     return greet();
// };
// console.log(name("avinash kumar"));


// const fillArray = () => {
//     let arr = [];
//     for(let i=0;i<10;i++){
//         arr[i]=function(){
//             return i
//         }
//     }
//     return arr
// }

// const arr = fillArray();

// console.log(arr[0]());


// function createItemManager(){
//     let items = [];    
//     return {
//         add(item){
//             if(items.indexOf(item) !== -1){
//                 console.log("Item already exist")
//                 return;
//             }
//            items.push(item);
//            console.log(`${item} added`); 
//         },

//         remove(item){
//             if(items.length == 0){
//                 console.log("list is empty");
//             }else if(items.indexOf(item) == -1){
//                 console.log("Item not found");
//             }else{
//                 items.splice(items.indexOf(item), 1);
//                 console.log(`${item} removed successfully`)
//             }
//         },
//         getItems(){
//             console.log(items);
//         }

//     }
// }

// const itemManger = createItemManager();
// itemManger.add("Item 1");
// itemManger.add("Item 2");
// itemManger.add("Item 3");
// itemManger.getItems();
// itemManger.remove("Item 2");
// itemManger.getItems();





// function memoize(fn) {
//     const cache = {};
//     return (x) =>{
//         if(x in cache){
//             console.log(`Value of ${x} is already calculated`);
//             return cache[x];
//         }else{
//             console.log(`Calculationg the value of ${x}`);
//             const val = fn(x);
//             cache[x] = val;
//             return val;
//         }
//     }
// }

// function square(n) {
//     return n * n;
// }

// const memoizedSquare = memoize(square);


// console.log(memoizedSquare(5)); 
// console.log(memoizedSquare(5));
// console.log(memoizedSquare(10)); 
// console.log(memoizedSquare(10));



function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);   
        if (cache[key]) {
            console.log(`Fetching from cache for key: ${key}`);
            return cache[key];
        } else {
            console.log(`Calculating result for key: ${key}`);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}


function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


const memoizedFibonacci = memoize(fibonacci);


console.log(memoizedFibonacci(10)); 
console.log(memoizedFibonacci(10)); 
console.log(memoizedFibonacci(15)); 
console.log(memoizedFibonacci(15)); 