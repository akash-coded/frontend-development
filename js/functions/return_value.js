/**
 * Function with a return value
 * @param {Number} a
 * @param {Number} b
 * @returns Number
 */
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);

/**
 * Function with multiple return directives
 * @param {Number} age
 * @returns Boolean
 */
function checkAge(age) {
  return age >= 18;
}

if (checkAge(17)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

/**
 * Function with an empty return
 * @param {Number} age
 * @returns undefined
 */
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  console.log("Showing you the movie");
}

let valueObtained1 = showMovie(19);
console.log(valueObtained1);

/**
 * Function without a return statement
 * @param {Number} age
 * @returns undefined
 */
function displayAge(age) {
  console.log(age + " years old");
}

let valueObtained2 = displayAge(5);
console.log(valueObtained2);
