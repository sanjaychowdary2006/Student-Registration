document.getElementById("studentForm").addEventListener("submit", function(event) {

    let name = document.getElementsByName("name")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let phone = document.getElementsByName("phone")[0].value;

    // Phone validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        event.preventDefault(); // Stop form submission
        return;
    }

    if (name === "" || email === "") {
        alert("Please fill all required fields.");
        event.preventDefault();
        return;
    }

    alert("Registration Successful!");
});