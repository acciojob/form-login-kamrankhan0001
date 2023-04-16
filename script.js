// function getFormvalue() {
//     //Write your code here

// }
// script.js

function getFormvalue() {
  // Get the input values from the form
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;

  // Concatenate the first and last name
  var fullName = firstName + " " + lastName;

  // Show an alert with the first and last name
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
