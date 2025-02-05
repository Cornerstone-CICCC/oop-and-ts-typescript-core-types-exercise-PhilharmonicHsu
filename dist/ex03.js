"use strict";
// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.
function logValues(values) {
    console.log(values[0], "(number)");
    console.log(values[1], "(string)");
    console.log(values[2], "(boolean)");
    console.log(values[3], "(object)");
}
logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)
