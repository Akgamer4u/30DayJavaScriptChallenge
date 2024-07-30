// function factorial(n) {
//   if (n < 0) {
//     return `enter a positive number or greater than 0`;
//   } else if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(-1));
// console.log(factorial(1));

// const fibbonaci=(n)=>{
//    if(n<0) return "enter a positive number or greater than 0"
//    if(n===0 || n===1) return n
//    return fibbonaci(n-1)+fibbonaci(n-2)
// }

// console.log(fibbonaci(10))
// console.log(fibbonaci(0))
// console.log(fibbonaci(-1))
// console.log(fibbonaci(1))



// const sumOfArrayWithRecursion = (array, sum = 0) => {
//     if (array.length === 0) {
//         return sum;
//     }
//     return sumOfArrayWithRecursion(array.slice(1), sum + array[0]);
// };

// console.log(sumOfArrayWithRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// const maxOfArrayWithRecursion = (array, max = 0) => {
//     if (array.length === 0) {
//         return max;
//     }
//     return maxOfArrayWithRecursion(array.slice(1), Math.max(max, array[0]));
// };

// console.log(maxOfArrayWithRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// const reverseStringWithRecursion = (str) => {
//     if (str.length === 0) {
//         return "";
//     }
//     return reverseStringWithRecursion(str.slice(1)) + str[0];
// };
// console.log(reverseStringWithRecursion("hello"))


// const binarySearchWithRecursion = (arr, target, left=0 , right=arr.length-1) => {
//     if (left > right) {
//         return -1;
//     }
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//         return mid;
//     } else if (arr[mid] > target) {
//         return binarySearchWithRecursion(arr, target, left, mid - 1);
//     } else {
//         return binarySearchWithRecursion(arr, target, mid + 1, right);
//     }
// };

// console.log(binarySearchWithRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));


// const countOfOccurrenceWithRecursion = (arr, target, count = 0) => {
//     if (arr.length === 0) {
//         return count;
//     }
//     return countOfOccurrenceWithRecursion(arr.slice(1), target, count + (arr[0] === target ? 1 : 0));
// };
// console.log(countOfOccurrenceWithRecursion([1,1,1,2,2,2,3,3,3,4,4,4,4,4], 4));
