const numString = '12345';

const totalNumString = [...numString].reduce((count, num) => count + Number(num), 0);

console.log('Sum:',totalNumString);

