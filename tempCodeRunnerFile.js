//! #TASK 2 ------------------------: შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; 
const numbersArray = [-1, -2, -3, 4];

// ? არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.
const numNeatPositives = numbersArray.some(positiveNum => positiveNum > 0)

console.log('',numNeatPositives);  
console.log(numNeatPositives ? "Positive number found!" : "No positive number.");