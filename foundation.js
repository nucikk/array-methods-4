
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

const containerDivElement = document.getElementById('conatiner'); //* html-ში გაწერილი მშობელი ელემენტი

//* მშობელი ელემენტის შექმნა დინამიურად & კლასის დამატება
const wrapperDivElement = document.createElement('div');
wrapperDivElement.classList.add("wraper")

//* ფოტოს ტეგის შექმნა: scr & alt ატრიბუტით
const imageElement = document.createElement('img')
imageElement.src = "https://i.pinimg.com/564x/9d/2b/04/9d2b04a381fe509b5f19f26dba6b1d1c.jpg"
imageElement.alt = "code image"

//* სათაურის ტეგის შექმნა: კლასის & კონტენტის დამატება
const titleElement = document.createElement("h2")
titleElement.classList.add("title")
titleElement.textContent = "image title"

//* wrapperDivElement-ს დაემატა img & h2 ტეგი
wrapperDivElement.appendChild(imageElement)
wrapperDivElement.appendChild(titleElement)

containerDivElement.appendChild(wrapperDivElement) //* containerDivElement-ს დაემატა wrapperDivElement რადგან გამოჩნდეს კონტენტი


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
console.log('greetingsText Length:', lenghtTextGreetings); //^Output - greetingsText Length: 30


//! #TASK 11 ------------------------:Prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი?
//? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, 

const question = prompt("სქართველოს დედაქალაქი?");

const correctAnswers = ["თბილისი","tbilisi"]; 

const cityNameLowercase = question.toLowerCase();   //? გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს.
const isCorrectAnswer = correctAnswers.includes(cityNameLowercase); //? თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

console.log(isCorrectAnswer); 


//! #TASK 12 ------------------------:მოცემულია: let link = “https://google.com”. 
//? დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ indexof მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. 
//? თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს.

const linkChecked = "https://google.com";

const linkIncludeCheck = link => link.indexOf('https://') !== -1;
console.log(linkIncludeCheck(linkChecked) ? "კი მოიცავს" : "არა, არ მოიცავს"); //^Output - კი მოიცავს


//! #TASK 13 ------------------------:მოცემულია მასივი,  მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. 
//!splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მავივრად ჩასვით “strawberry”

let fruits = ["apple", "mango", "avocado", "kiwi"];

fruits.splice(fruits.length - 2, 1, 'strawberry');//? splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მავივრად ჩასვით “strawberry”. 
console.log('updated fruits:',fruits); //^Output - updated fruits: [ 'apple', 'mango', 'strawberry', 'kiwi' ]