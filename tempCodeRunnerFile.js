//! #TASK 6 ------------------------:მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];
let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];

//? გამოიტანეთ მარტო ციფრები
const filterOfNumber = array.filter(num => typeof num === 'number')

console.log('Filter numbers from array: ',filterOfNumber); 