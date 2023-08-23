//! #TASK 1 ------------------------:მოცემულია მასივი: let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
const programLanguage = ['html', 'css', 'javascript', 'python', 'php'];

//? ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
const lengthLanguage = programLanguage.filter(quantity => quantity.length > 3)

console.log('3-ზე მეტი სიბოლოების რაოდენობის არის',lengthLanguage); //^ Output: 3-ზე მეტი სიბოლოების რაოდენობის არის ['html', 'javascript', 'python' ]

//! #TASK 2 ------------------------: შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; 
const numbersArray = [-1, -2, -3, 4];

// ? არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.
const numNeatPositives = numbersArray.some(positiveNum => positiveNum > 0)

console.log(numNeatPositives ? "Positive number found!" : "No positive number"); //^ Output: true: Positive number found!

