const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@_$%*";
const spaces = " ";

const getRandom = () => {
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
};

const generatePassword = () => {
  const passwordInput = document.getElementById("password").value;
  const lowercaseCheckbox = document.getElementById("lowercase");
  const uppercaseCheckbox = document.getElementById("uppercase");
  const numbersCheckbox = document.getElementById("numbers");
  const symbolsCheckbox = document.getElementById("symbols");
  const excludeDuplicateCheckbox = document.getElementById("exclude-duplicate");
  const spacesCheckbox = document.getElementById("spaces");
};
