// capitalize

function capitalize(string) {
   const newString = string.charAt(0).toUpperCase() + string.slice(1);
   console.log(newString);
   return newString
}

// reverse

function reverse(string) {
    const reversedString = string.split('').reverse().join("");
    return reversedString;
}

// calculator

const calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    divide(a, b) {
        return a / b
    },
    multiply(a, b) {
        return a * b
    }
}

// caesarCipher

function caesarCipher(string) {
    const key = 3;
    let ciphertext = '';
    const regEx = /[a-zA-Z]/;

    for(let i = 0; i < string.length; i++) {
        if(regEx.test(string.charAt(i))) {
            ciphertext += String.fromCharCode((string.charCodeAt(i) - 97 + key)%26 + 97);
        }   else {
            ciphertext += string.charAt(i);
        }
        console.log(ciphertext);
        
    }
    console.log(ciphertext);
    return ciphertext;
}

const ciphered = caesarCipher('some UpperCase, TOO!');
console.log(ciphered);

export { capitalize, reverse, calculator, caesarCipher }
