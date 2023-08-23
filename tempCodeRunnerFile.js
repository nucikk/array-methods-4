let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let wordsContains = words.filter(word => /m/i.test(word));

console.log('M/m found in words',wordsContains); //^ Output: [ 'Madrid', 'Rome', 'Milan' ]