let info= "Good day"

let removeInfoWord = info.slice(5); // Remove 'day'
let newInfo = info.slice(0, info) + info.slice(info + 3); //Add 'Good day'

console.log('Removed:',removeInfoWord);   //^Output:day
console.log('Updated: ',newInfo);         //^Output:Good day
