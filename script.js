// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like?"));

  // Check if length is a number
  if (isNaN(length)) {
    alert("Password length must be a number");
    return null;
  }

  // Check if length is between 8 and 128 characters
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters");
    return null;
  }

  var includeSpecial = confirm("Click OK to confirm including special characters.");
  var includeNumeric = confirm("Click OK to confirm including numeric characters.");
  var includeLowercase = confirm("Click OK to confirm including lowercase characters.");
  var includeUppercase = confirm("Click OK to confirm including uppercase characters.");

  // Check if at least one character type is selected
  if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
    alert("At least one character type must be selected");
    return null;
  }

  var passwordOptions = {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase
  };

  return passwordOptions;
}

//getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return "";
  }

  var password = "";

  var possibleCharacters = [];

  if (options.includeSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  if (options.includeNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }

  if (options.includeLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }

  if (options.includeUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    var randomCharacter = getRandom(possibleCharacters);
    password += randomCharacter;
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
