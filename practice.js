// capitalize

function capitalize(string) {
  const newString = string.charAt(0).toUpperCase() + string.slice(1);
  console.log(newString);
  return newString;
}

// reverse

function reverse(string) {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
}

// calculator

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

// caesarCipher

function caesarCipher(string) {
  const key = 3;
  let ciphertext = "";
  const regEx = /[a-zA-Z]/;

  for (let i = 0; i < string.length; i++) {
    if (regEx.test(string.charAt(i))) {
      ciphertext += String.fromCharCode(
        ((string.charCodeAt(i) - 97 + key) % 26) + 97
      );
    } else {
      ciphertext += string.charAt(i);
    }
    console.log(ciphertext);
  }
  console.log(ciphertext);
  return ciphertext;
}

// analyzing array

function analyzeArray(array) {
  const sum = array.reduce((total, item) => {
    return (total += item);
  }, 0);

  const average = sum / array.length;

  const min = Math.min(...array);

  const max = Math.max(...array);

  const length = array.length;

  const object = {
    average,
    min,
    max,
    length,
  };

  return object;
}

export { capitalize, reverse, calculator, caesarCipher, analyzeArray };
