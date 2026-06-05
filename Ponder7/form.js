
//retrieve the form from the DOM, print the result
const form = document.querySelector('#fsyForm');

console.log(form);

// If the user selects "one campus",
// but doesn't select ANY campuses,
// Dispay message "Select one campus"

// Helper function to return checked campus
function getCheckedCampus(campuses) {
    return Array.from(campuses)
            .filter(campus => campus.checked)
            .map(campus => campus.value);
}


// Helper function to return if date is valid
function isValidDate() {
    const date = document.getElementById("availableDate").value;
    const todaysDate = new Date();
    return date > todaysDate;
}

// add an event listener to the form to detect submit
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event);
    console.log(form.firstName.value);

    if(!isDateValid()) {
        document.getElementById("output").textContent = "Please enter a valid date.";
    }

    const numberOfCampuses = form.travelRange.value
    const campuses = form.campus;
    console.log(campuses);
    if (numberOfCampuses === "one" && getCheckedCampus(campuses).length == 0) {
        console.log("No campus checked");
        document.getElementById("output").textContent = "Please select one campus.";
    }
        
    // print last name and email
    console.log(form.lastName.value);
    console.log(form.email.value);
});