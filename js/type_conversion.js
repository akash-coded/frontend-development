/**
 * Examples
 */

/**
 * String Conversion
 */
let value = true;
console.log(typeof value); // boolean
value = String(value); // value becomes the string "true"
console.log(typeof value); // string

console.log("6" / "2"); // 3

// alert(true)

/**
 * Number Conversions
 */
let numstr = "123";
console.log(typeof numstr); // string
let num = Number(numstr); // becomes the number 123
console.log(typeof num); // number

let attemptedNumber = Number("ABC");
console.log(attemptedNumber); // NaN
console.log(typeof attemptedNumber); // number

/**
 * Boolean Conversions
 */
console.log(Boolean("hello")); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(2)); // true
console.log(Boolean(-2)); // true
console.log(Boolean(0)); // false: represents the number zero
console.log(Boolean("0")); // true: represents the string 0

if ("hello") {
  console.log("Non-empty string is treated as logical true");
}
