document.getElementById("register-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous validation messages
    const validationMessages = document.querySelector('.validation-messages');
    validationMessages.innerHTML = '';

    // Get input values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true; // Flag for validation

    // Validate First Name
    if (!firstName) {
        validationMessages.innerHTML += '<p>First name is required.</p>';
        isValid = false;
    }

    // Validate Last Name
    if (!lastName) {
        validationMessages.innerHTML += '<p>Last name is required.</p>';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        validationMessages.innerHTML += '<p>Please enter a valid email address.</p>';
        isValid = false;
    }

    // Validate Phone Number
    const phonePattern = /^[0-9]{10}$/; // Adjust pattern based on your phone number format
    if (!phone || !phonePattern.test(phone)) {
        validationMessages.innerHTML += '<p>Please enter a valid phone number (10 digits).</p>';
        isValid = false;
    }

    // Validate Password
    if (password.length < 8) {
        validationMessages.innerHTML += '<p>Password must be at least 8 characters long.</p>';
        isValid = false;
    }

    // If valid, log the data
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phone,
            email: email,
            password: password
        };
        console.log(formData); // Log the form data
        alert("Form submitted successfully! Check console for data."); // Alert for success
        // Optionally, reset the form


        document.getElementById("first-name").value = '';
        document.getElementById("last-name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("phone").value = '';
        document.getElementById("password").value = '';
        document.querySelector(".sign").reset(); // Clear the form fields (remove if not needed)
    }
});
