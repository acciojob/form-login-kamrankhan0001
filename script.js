// function getFormvalue() {
//     //Write your code here
// const firstName = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;
//   alert("First Name: " + firstName + "\nLast Name: " + lastName);
// }
// script.js
function getFormvalue() {
   event.preventDefault(); // prevent form from submitting
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// script.js

// function getFormvalue() {
//   // Get the form element
//   var form = document.getElementById("myForm");
  
//   // Get the values of the first name and last name fields
//   var firstName = form.elements["firstName"].value;
//   var lastName = form.elements["lastName"].value;
  
//   // Display the first name and last name using alert
//   alert("First Name: " + firstName + "\nLast Name: " + lastName);
// }

