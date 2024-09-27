function inputTextField(id) {
    const text = document.getElementById(id).value;  // Use .value instead of .innerText for input fields
    return text;
}

function inputNumber(id) {
    const pin = document.getElementById(id).value;
    const pinNumber = parseInt(pin);
    return pinNumber;
}

// Login section 
document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    const inputemail = inputTextField('input-email');
    const inputpin = inputNumber('input-pin');
    
    // Ensure the email and pin match the expected values
    if (inputemail === "digontosikder123@gmail.com" && inputpin === 1234) {
        // Change the URL to your desired path if needed
        window.location.href = '/banks/home.html';
    } else {
        alert('Invalid email or password');
    }
});



