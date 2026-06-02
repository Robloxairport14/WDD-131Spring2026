
//retrieve the form from the DOM, print the result
const form = document.querySelector('#fsyform');

console.log(form);

// add an event listener to the form to detect submit
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event);
    console.log(form.firstName.value);
    // print last name and email
    console.log(form.lastName.value);
    console.log(form.email.value);
});