
const question = prompt("საქართველოს დედაქალაქი?");

const isAnswerGe = "თბილისი";
const isAnswerEn = "tbilisi";

const cityNameLowercase = question.toLowerCase();

const isCorrectAnswer = cityNameLowercase === isAnswerGe || isAnswerEn;

console.log(isCorrectAnswer);