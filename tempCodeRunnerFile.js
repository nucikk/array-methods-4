const array2 = [14, 150, 'css', null, 'javascript', 25];


const existingArray = array2.map(e => 
    typeof e === 'number' ? e ** 2 :
    typeof e === 'string' ? e.toUpperCase() : e
    )

console.log(existingArray);