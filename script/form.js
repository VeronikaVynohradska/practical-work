document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const validateEmailJSBtn = document.getElementById("validateEmailJSBtn");
    const validatePhoneBtn = document.getElementById("validatePhoneBtn");
    const submitBtn = document.getElementById("submitBtn");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");

    submitBtn.disabled = true;

    validateEmailJSBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (validateEmail(emailInput.value)) {
            emailError.textContent = "Validation successful (JavaScript).";
            emailError.className = "validation-success";
        } else {
            emailError.textContent = "Invalid email format. To input correctly, please delete existing information and check lightgrey hint in the box";
            emailError.className = "validation-error";
        }
        checkSubmitAvailability();
    });

    validatePhoneBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (validatePhone(phoneInput.value)) {
            phoneError.textContent = "Validation successful.";
            phoneError.className = "validation-success";
        } else {
            phoneError.textContent = "Invalid phone format. To input correctly, please delete existing information and check lightgrey hint in the box";
            phoneError.className = "validation-error";
        }
        checkSubmitAvailability();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        if (phone === '0000000000') {
            phoneError.textContent = "Phone number cannot be all zeros.";
            phoneError.className = "validation-error";
            return false;
        }

        if (!/^\d{10}$/.test(phone)) {
            phoneError.textContent = "Phone number must be exactly 10 digits.";
            phoneError.className = "validation-error";
            return false;
        }

        if (/^0{3}/.test(phone)) {
            phoneError.textContent = "Operator code (first three digits) cannot be all zeros.";
            phoneError.className = "validation-error";
            return false;
        }

        if (/0{7}$/.test(phone)) {
            phoneError.textContent = "Last seven digits cannot be all zeros.";
            phoneError.className = "validation-error";
            return false;
        }

        phoneError.textContent = "Validation successful.";
        phoneError.className = "validation-success";
        return true;
    }

    function checkSubmitAvailability() {
        if ((validateEmail(emailInput.value) && validatePhone(phoneInput.value)) || (emailInput.checkValidity() && validatePhone(phoneInput.value))) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }
});

document.documentElement.classList.remove('no-js');