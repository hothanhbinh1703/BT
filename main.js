// //BT1
// function productInfo( sanpham,gia){
//     return `Sản phẩm :${sanpham}, Giá :${gia.toLocaleString("en-US")} VNĐ`;

// }
// console.log(productInfo("Sách",20000));

// BT2
// function greet(names){
//     return `Xin chào , ${names}!`;
// }
// console.log(greet("An"));

// BT3
// function sumUpTo(n){
//     return (n* (n+1)) /2;
// }
// console.log(sumUpTo(5));

// c2

// function sumupto(n){
//     let tong = 0;
//     for(let i =1 ; i <=n ;i++){
//         tong += i;
//     }
//  return tong;
// }
// console.log(sumupto(5));

// BT4

// function square(n){
//     return n*n;
// }
// console.log(square(6));

// BT5

// function iseven(n){
//     if( n % 2 ===0){
//         return "chẵn"
//     }else{
//         return "lẻ"
//     }
// }
// console.log(iseven(8));

// BT6

// function firstElement(arr){
//     return arr[0];
    
// }
// console.log(firstElement([1,2,3]));

// BT7

// function sum(...numbers){
//     let tong = 0;
//     for(let i=0 ; i < numbers.length ; i++){
//         tong += numbers[i];
//     }
//     return tong;
// }
// console.log(sum(1,2,3,4));

// BT10

// function stringlength(n){
//     return n.length ; 
// }
// console.log(stringlength("Hello World!"));

// BT11

// function toUpperCase(n){
//     return n.toUpperCase() ;
// }
// console.log(toUpperCase("javascript"));

// BT12

// function formatCurrency(n){
//     return `${n.toLocaleString("en-US")} VNĐ` ;
// }
// console.log(formatCurrency(1000000));

// BT13

// có gợi ý AI

// function max(arr){
//     let lonnhat = arr[0];
//     for(let i = 1 ; i < arr.length ; i++){

//         if(arr[i] > lonnhat){

//             lonnhat = arr [i];
//         }
// }
// return lonnhat;
// }
// console.log(max([10,5,20,8]));

// BT14

// ** function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(7));

//BT15 

// function repeatString(str,n){
//     return  str.repeat(n);
// }
// console.log(repeatString("Hello" ,3));

// BT16

// function sumOdd(arr) {
//   let tong = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       tong += arr[i];
//     }
//   }
//   return tong;
// }

// console.log(sumOdd([1, 2, 3, 4]));

// BT17 

// function sumGreaterThan(arr, n) {
//   let tong = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > n) {
//       tong += arr[i];
//     }
//   }
//   return tong;
// }

// console.log(sumGreaterThan([1, 2, 3, 4], 2));


// BT18

// function formatDate(date) {
//   return date.split("-").reverse().join("/");
// }
// console.log(formatDate("2024-11-28"));

// BT19

// function firstThree(arr) {
//   return arr.slice(0, 3);
// }

// console.log(firstThree([1, 2, 3, 4, 5]));

// BT20

// function ktra(str,char){
//     return str.includes(char);
// }
// console.log(ktra("javascript", "d"));

// BT21 

// function noi( n,v){
//     return n.concat(v);
// }
// console.log(noi([1, 2], [3, 4]));

// BT22


// function countOccurrences(arr, num) {
//   return arr.filter(item => item === num).length;
// }

// console.log(countOccurrences([1, 2, 2, 3, 2], 2));

// BT23

// function  ktra (arr){
//     return arr.filter(num => num %2 !==0);
// }
// console.log(ktra([1, 2, 3, 4]));

// BT24


// function greaterThan(arr, num) {
//   return arr.filter(item => item > num);
// }

// console.log(greaterThan([1, 2, 3, 4], 2));

// BT25**


// function giaithua(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * giaithua(n - 1);
// }

// console.log(giaithua(5));

// BT26

// function separateEvenOdd(arr) {
//     return {
//         even: arr.filter(num => num % 2 === 0),
//         odd: arr.filter(num => num % 2 !== 0)
//     };
// }

// console.log(separateEvenOdd([1, 2, 3, 4]));

// BT27**


// function sortAsc(arr) {
//     return arr.sort((a, b) => a - b);
// }

// console.log(sortAsc([3, 1, 4, 2]));

// BT28**

// function sumEvenIndex(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// console.log(sumEvenIndex([1, 2, 3, 4]));

// BT29

// function multiplyByTwo (arr){
//     return arr.map(num => num*2);
// }
// console.log(multiplyByTwo([1, 2, 3]));

// BT30

function arrayToString(arr){
    return arr.join("");
}
console.log(arrayToString(["a", "b", "c"]));


