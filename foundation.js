//! #TASK 1 ------------------------:მოცემულია მასივი: let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
const programLanguage = ['html', 'css', 'javascript', 'python', 'php'];

//? ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
const lengthLanguage = programLanguage.filter(quantity => quantity.length > 3)

console.log('3-ზე მეტი სიბოლოების რაოდენობის არის',lengthLanguage); //^ Output: 3-ზე მეტი სიბოლოების რაოდენობის არის ['html', 'javascript', 'python' ]

//! #TASK 2 ------------------------:შეამოწმეთ მოცემულ მასივში let arr = [-1, -2, -3, 4]; 
const numbersArray = [-1, -2, -3, 4];

//? არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.
const numNeatPositives = numbersArray.some(positiveNum => positiveNum > 0)

console.log(numNeatPositives ? "Positive number found!" : "No positive number"); //^ Output: true: Positive number found!

//! #TASK 3 ------------------------:Მოცემულია მასივი:let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

//? Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
let wordsContains = words.filter(word => /m/i.test(word))

console.log('M/m found in words',wordsContains); //^ Output: M/m found in words ['Madrid', 'Rome', 'Milan' ]

//! #TASK 4 ------------------------:შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
{/* <div class=“wraper”> <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”> <h2 class=“title”> image title </h2> </div> */}


//! #TASK 5 ------------------------:მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. 
//! ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში)

const numString = '12345';

const totalOfDigits = [...numString].reduce((count, num) => count + Number(num), 0);

console.log('Sum:',totalOfDigits); //^ Output: Sum: 15

