const programLanguage = ['html', 'css', 'javascript', 'python', 'php'];

//? ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
const lengthLanguage = programLanguage.filter(quantity => quantity.length > 3)

console.log('3-ზე მეტი სიბოლოების რაოდენობის არის',lengthLanguage); 