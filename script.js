// function getFormvalue() {
//     //Write your code here

// }
// script.js

// script.js

function getFormvalue() {
  // Get the form element
  var form = document.getElementById("myForm");
  
  // Get the values of the first name and last name fields
  var firstName = form.elements["firstName"].value;
  var lastName = form.elements["lastName"].value;
  
  // Display the first name and last name using alert
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

