// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// };

// console.log(bubbleSort([5, 4, 3, 2, 1,0,8,9,10,]));


// const selectionSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// };

// console.log(selectionSort([5, 4, 3, 2, 1,0,8,9,10,]));


// const quickSort = (arr) => {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// };

// console.log(quickSort([5, 4, 3, 2, 1,0,8,9,10,]));


// const linearSearch = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return `element found at index ${i}`;
//         }
//     }
//     return -1;
// };
// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,"5"], 5));


// const binarySearch = (arr, target) => {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             return `element found at index ${mid}`;
//         } else if (arr[mid] > target) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return -1;
// };
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,"5"], 10))


// const countOccurrence=(str)=>{
//     let obj={}
//     for(let i=0;i<str.length;i++){
//         if(obj[str[i]]){
//             obj[str[i]]+=1
//         }else{
//             obj[str[i]]=1
//         }
//     }
//     return obj
// }
// console.log(countOccurrence("manish"))

// const longestSubstring = (str) => {
//     let obj = {};
//     let left = 0;
//     let right = 0;
//     let max = 0;
//     while (right < str.length) {
//         if (!obj[str[right]]) {
//             obj[str[right]] = 1;
//         } else {
//             obj[str[right]] += 1;
//         }
//         while (Object.keys(obj).length > 2) {
//             obj[str[left]] -= 1;
//             if (obj[str[left]] === 0) {
//                 delete obj[str[left]];
//             }
//             left++;
//         }
//         max = Math.max(max, right - left + 1);
//         right++;
//     }
//     return max;
// };
// console.log(longestSubstring("abcabcbb"));
// console.log(longestSubstring("bbbbb"));

// const rotateArray = (arr, k) => {
//     let temp = [];
//     for (let i = 0; i < k; i++) {
//         temp.push(arr[i]);
//     }
//     for (let i = k; i < arr.length; i++) {
//         arr[i - k] = arr[i];
//     }
//     for (let i = 0; i < k; i++) {
//         arr[arr.length - k + i] = temp[i];
//     }
//     return arr;
// };
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));



// const mergeArrays = (arr1, arr2) => {
//     let merge= [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             merge.push(arr1[i]);
//             i++;
//         } else {
//             merge.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         merge.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         merge.push(arr2[j]);
//         j++;
//     }
//     return merge;
// };
// console.log(mergeArrays([1,6, 2, 3, 4, 5,2], [ 7, 8, 9, 1]));