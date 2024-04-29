const inputField = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};

const validateInput = (value) => {
    if (!value) {
      return "Please enter a valid number";
    } else if (value <= 0) {
      return "Please enter a number greater than or equal to 1";
    } else if (value >= 4000) {
      return "Please enter a number less than or equal to 3999";
    }
    return null;
  }

const intToRoman = () => {
  const validationError = validateInput(inputField.value);
  if (validationError) {
    output.innerHTML = `<p class="output-text">${validationError}</p>`;
    return;
  }

  let result = '';
  let num = parseInt(inputField.value);
  const sortedNumerals = Object.entries(romanNumerals).sort((a, b) => b[0] - a[0]);

  for (const [value, symbol] of sortedNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  output.classList.remove("hidden")

  output.innerHTML = `<p class="output-text">${result}</p>`;
}

convertButton.addEventListener("click", intToRoman);