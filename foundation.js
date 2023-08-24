const { type } = require("jquery");

//! #TASK 1 ------------------------:მოცემულია მასივი: let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
const programLanguage = ['html', 'css', 'javascript', 'python', 'php'];

//? ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
const lengthLanguage = programLanguage.filter(quantity => quantity.length > 3)

console.log('3-ზე მეტი სიბოლოების რაოდენობის არის',lengthLanguage); //^ Output: 3-ზე მეტი სიბოლოების რაოდენობის არის ['html', 'javascript', 'python' ]

//! #TASK 2 ------------------------:შეამოწმეთ მოცემულ მასივში A 
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

//! #TASK 6 ------------------------:მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];
const array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];

//? გამოიტანეთ მარტო ციფრები
const filterOfNumber = array.filter(num => typeof num === 'number')

console.log('Filter numbers from array: ',filterOfNumber); //^Output: Filter numbers from array:  [ 100, 25, 10, 11 ]
 
//! #TASK 7 ------------------------:მოცემულია მასიცი:let array2 = [14, 150, 'css', null, 'javascript', 25];
//!შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
//!თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

const array2 = [14, 150, 'css', null, 'javascript', 25];


const existingArray = array2.map(e => 
    typeof e === 'number' ? e ** 2 :
    typeof e === 'string' ? e.toUpperCase() : e
    )

console.log(existingArray);//^Output: [ 196, 22500, 'CSS', null, 'JAVASCRIPT', 625 ]


//! #TASK 8 ------------------------:მოცემულია სტრინგი - ‘javascript’, მიიღეთ შემოტრიალებული ვარიანტი მეთოდების გარეშე ( for loop ით)

const programName = 'javascript';

function turnBack(namespace) {
    let reverseName = "";
    for (let i = namespace.length - 1; i >= 0; i--) {
        reverseName += namespace.charAt(i);
    }
    return reverseName
}

const turnedBack = turnBack(programName)
console.log(turnedBack); //tpircsavaj

//! #TASK 9 ------------------------:მოცემულია სტრინგი: let info= ‘Good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუელებით

let info= "Good day"

let removeInfoWord = info.slice(5); //* Remove 'day'
let newInfo = info.slice(0, info) + info.slice(info + 3); //* Add 'Good day'

console.log('Removed:',removeInfoWord);   //^Output - Removed: day
console.log('Updated:',newInfo);         //^Output - Updated: Good day

//! #TASK 10 ------------------------:დაწერეთ ფუნქცია, რომელიც პარამეტრსდ იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

function randomstring(itemName) {
    return itemName.length
} 

const greetingsText = "Welcome to the javascript game"
const lenghtTextGreetings = randomstring(greetingsText)
console.log('greetingsText Length:', lenghtTextGreetings); //^ greetingsText Length: 30

