let fruits = ["apple", "mango", "avocado", "kiwi"];
// fruits.splice(fruits.length -1,1, 'strawberry') //? splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მავის მავივრად ჩასვით “strawberry”. 
fruits.splice(fruits.length - 2, 1, 'strawberry');
console.log('updated fruits:',fruits); //^Output - updated fruits: [ 'apple', 'mango', 'avocado', 'strawberry' ]