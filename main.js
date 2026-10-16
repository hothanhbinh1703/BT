// // BT1

// // function arr(sumArr){
// //     return sumArr.reduce((a,b)=> a + b ,0);
// // }
// // console.log(arr([1,2,3,4])); 

// // BT2

// // function countOccurrences(arr, value){
// //     return arr.filter(item => item ===value).length;
// // }
// // console.log(countOccurrences([1, 2, 2, 3, 2], 2));

// // BT3

// // function removeDuplicates(arr) {
// //   return [...new Set(arr)];
// // }

// // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));

// // BT4

// // function flattenArray(arr) {
// //   return arr.flat();
// // }

// // console.log(flattenArray([[1, 2], [3, 4]])); 

// // BT5

// // function isSymmetric(arr) {
// //   return arr.join() === [...arr].reverse().join();
// // }

// // const arr = [1, 2, 3, 2, 1];
// // console.log(isSymmetric(arr)); 

// // BT6
// // function findSecondLargest(arr) {
// //   const unique = [...new Set(arr)].sort((a, b) => b - a);
// //   return unique[1];
// // }

// // console.log(findSecondLargest([3, 1, 4, 2, 4]));

// // BT7

// // function sortProductsByPrice(products) {
// //   return [...products].sort((a, b) => a.price - b.price);
// // }

// // const products = [
// //   { name: 'Product A', price: 30 },
// //   { name: 'Product B', price: 20 },
// //   { name: 'Product C', price: 50 }
// // ];

// // console.log(sortProductsByPrice(products));

// // BT8

// // function findMostExpensiveProduct(products) {
// //   return products.reduce((max, product) =>
// //     product.price > max.price ? product : max
// //   );
// // }

// // const products = [
// //   { name: 'Product A', price: 30 },
// //   { name: 'Product B', price: 20 },
// //   { name: 'Product C', price: 50 }
// // ];

// // console.log(findMostExpensiveProduct(products));

// BT9

// function groupByType(arr) {
//   return arr.reduce((result, item) => {
//     if (!result[item.type]) result[item.type] = [];
//     result[item.type].push(item.name);
//     return result;
//   }, {});
// }


// console.log('Bài 9:', groupByType([
//   { type: 'fruit', name: 'apple' },
//   { type: 'vegetable', name: 'carrot' },
//   { type: 'fruit', name: 'banana' }
// ]));

// // Bài 10
// function isSubset(arr1, arr2) {
//   return arr2.every(x => arr1.includes(x));
// }
// console.log('Bài 10:', isSubset([1, 2, 3, 4], [2, 4])); // true
 
// // Bài 11
// function findMaxKey(obj) {
//   let maxKey;
//   for (const key in obj) {
//     if (maxKey === undefined || obj[key] > obj[maxKey]) {
//       maxKey = key;
//     }
//   }
//   return maxKey;
// }
// console.log('Bài 11:', findMaxKey({ a: 10, b: 20, c: 15 })); // b
 

// // Bài 11
// function findMaxKey(obj) {
//   let maxKey;
//   for (const key in obj) {
//     if (maxKey === undefined || obj[key] > obj[maxKey]) {
//       maxKey = key;
//     }
//   }
//   return maxKey;
// }
// console.log('Bài 11:', findMaxKey({ a: 10, b: 20, c: 15 })); // b

// // Bài 12
// function mergeObjectsSumValues(obj1, obj2) {
//   const result = { ...obj1 };
//   for (const key in obj2) {
//     result[key] = (result[key] || 0) + obj2[key];
//   }
//   return result;
// }
// console.log('Bài 12:', mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 }));
// // { a: 10, b: 50, c: 40 }

// // Bài 13
// function countElements(arr) {
//   const count = {};
//   for (const item of arr) {
//     count[item] = (count[item] || 0) + 1;
//   }
//   return count;
// }
// console.log('Bài 13:', countElements(['a', 'b', 'a', 'c', 'b', 'a']));
// // { a: 3, b: 2, c: 1 }

// // Bài 14
// function cleanObject(obj) {
//   const result = {};
//   for (const key in obj) {
//     if (obj[key] !== null && obj[key] !== undefined) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }
// console.log('Bài 14:', cleanObject({ a: 1, b: null, c: undefined, d: 4 }));
// // { a: 1, d: 4 }

// // Bài 15
// function hasDuplicate(arr) {
//   return new Set(arr).size !== arr.length;
// }
// console.log('Bài 15:', hasDuplicate([1, 2, 3, 4, 2])); // true

// // Bài 16
// function sumByGroup(arr, key, valueKey = 'price') {
//   return arr.reduce((result, item) => {
//     result[item[key]] = (result[item[key]] || 0) + item[valueKey];
//     return result;
//   }, {});
// }
// console.log('Bài 16:', sumByGroup([
//   { type: 'fruit', price: 10 },
//   { type: 'vegetable', price: 20 },
//   { type: 'fruit', price: 30 }
// ], 'type'));
// // { fruit: 40, vegetable: 20 }

// // Bài 17
// function uniqueValues(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }
// console.log('Bài 17:', uniqueValues([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]

// // Bài 18
// function isPermutation(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   const a = [...arr1].sort();
//   const b = [...arr2].sort();
//   return a.every((x, i) => x === b[i]);
// }
// console.log('Bài 18:', isPermutation([1, 2, 3], [3, 2, 1])); // true

// // Bài 19
// function findLongestString(arr) {
//   return arr.reduce((longest, str) =>
//     str.length > longest.length ? str : longest
//   , '');
// }
// console.log('Bài 19:', findLongestString(['abc', 'abcd', 'a'])); // abcd

// // Bài 20
// function intersection(arr1, arr2) {
//   return [...new Set(arr1)].filter(x => arr2.includes(x));
// }
// console.log('Bài 20:', intersection([1, 2, 3], [2, 3, 4])); // [ 2, 3 ]

// // Bài 21
// function filterByMinValue(arr, minValue) {
//   return arr.filter(x => x >= minValue);
// }
// console.log('Bài 21:', filterByMinValue([5, 10, 15, 20], 12)); // [ 15, 20 ]

// // Bài 22
// function findLongestValue(obj) {
//   return Object.values(obj).reduce((longest, value) =>
//     value.length > longest.length ? value : longest
//   , '');
// }
// console.log('Bài 22:', findLongestValue({ a: 'cat', b: 'elephant', c: 'dog' })); // elephant

// // Bài 23
// function groupByFirstLetter(arr) {
//   return arr.reduce((result, str) => {
//     const letter = str[0].toLowerCase();
//     if (!result[letter]) result[letter] = [];
//     result[letter].push(str);
//     return result;
//   }, {});
// }
// console.log('Bài 23:', groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry']));
// // { a: [ 'apple', 'avocado' ], b: [ 'banana', 'blueberry' ] }

// // Bài 24
// function getAdults(people) {
//   return people.filter(person => person.age >= 18);
// }
// console.log('Bài 24:', getAdults([
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 16 },
//   { name: 'David', age: 22 }
// ]));
// // [ { name: 'Bob', age: 20 }, { name: 'David', age: 22 } ]

// // Bài 25
// function convertToArray(obj) {
//   return Object.entries(obj);
// }
// console.log('Bài 25:', convertToArray({ a: 1, b: 2, c: 3 }));
// // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// // Bài 26
// function sortStringsByLength(arr) {
//   return [...arr].sort((a, b) => a.length - b.length);
// }
// console.log('Bài 26:', sortStringsByLength(['a', 'ccc', 'bb'])); // [ 'a', 'bb', 'ccc' ]

// // Bài 27
// function sumByKey(arr, key) {
//   return arr.reduce((sum, item) => sum + item[key], 0);
// }
// console.log('Bài 27:', sumByKey([
//   { type: 'fruit', price: 10 },
//   { type: 'vegetable', price: 20 },
//   { type: 'fruit', price: 30 }
// ], 'price'));
// // 60

// // Bài 28
// function countWords(str) {
//   return str.trim().split(/\s+/).filter(Boolean).length;
// }
// console.log('Bài 28:', countWords("Hello world! Welcome to JavaScript")); // 5

// // Bài 29
// function findMinKey(obj) {
//   let minKey;
//   for (const key in obj) {
//     if (minKey === undefined || obj[key] < obj[minKey]) {
//       minKey = key;
//     }
//   }
//   return minKey;
// }
// console.log('Bài 29:', findMinKey({ a: 100, b: 20, c: 50 })); // b


