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