// Assignment Code

const generateBtn = document.querySelector("#generate");

//DO NOT TOUCH ABOVE - STARTER CODE

//allowed values in password
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerals = "0123456789";
const symbols = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//prompt user to enter password
const getPasswordLength = () => {
  const passLength = prompt(
    "Enter the length of password you would like.\nIt must be between 8 and 128 characters."
  );

  //change string to number
  const numericPasswordLength = parseInt(passLength, 10);
  console.log(typeof numericPasswordLength);

  //Checking that user input is a number
  const isNumber = Number.isInteger(numericPasswordLength);
  console.log(isNumber);

  //if password length does not equal between 8 and 128, user gets an alert
  if (numericPasswordLength < 8 || numericPasswordLength > 128 || !isNumber) {
    alert(
      "Oops! Something went wrong.  Please re-enter password length of between 8 and 128 characters"
    );
  } else {
    return numericPasswordLength;
  }
};

//user needs to choose between 4 types of characters for their password
const getPasswordCriteria = () => {
  //declare array for criteria
  const criteriaArray = [];

  //user is asked to choose if they want lowercase in their password
  const lowercaseCriteria = confirm(
    "Would you like any lowercase characters in your password?"
  );

  //if user inputs yes
  if (lowercaseCriteria) {
    criteriaArray.push(lowercase);
  }

  //user is asked to choose if they want uppercase in their password
  const uppercaseCriteria = confirm(
    "Would you like any uppercase characters in your password?"
  );

  //if user inputs yes
  if (uppercaseCriteria) {
    criteriaArray.push(uppercase);
  }

  //user is asked to choose if they want numbers in their password
  const numeralsCriteria = confirm(
    "Would you like any numbers in your password?"
  );

  //if user inputs yes
  if (numeralsCriteria) {
    criteriaArray.push(numerals);
  }

  //user is asked to choose if they want symbols in their password
  const symbolCriteria = confirm(
    "Would you like any special characters in your password?"
  );

  //if user inputs yes
  if (symbolCriteria) {
    criteriaArray.push(symbols);
  }
  return criteriaArray;
};

//create random password section
const createRandomPassword = (passwordLength, passwordCriteria) => {

  //create an array 
  const  passwordArray= []

  // for loop for password length
  for (let i = 0; i < passwordLength; i += 1) {


;



//DO NOT TOUCH CODE BELOW -STARTER CODE

// main function to generate the random password
const generatePassword = () => {

  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  //check if password criteria is not empty

  if (passwordCriteria.length !== 0) {
    // create random password
    const password = createRandomPassword(passwordLength, passwordCriteria);

    return password;
  } else {
  }
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
