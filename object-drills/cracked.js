const decode = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

const testString = "craft block argon meter bells brown croon droop";

function decodeWords(string) {
    let emptyString = [];
    string.split('').map(word => {
        for (let key in decode) {
        if (key === word[0]) {
            emptyString.push(word[decode[key-1]]);
        }
    }
    });
    return emptyString.join('+');
}

console.log(decodeWords(testString));