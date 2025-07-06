// Wrap entire script in DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Form Selection - select the form with id="registration-form"
    const form = document.getElementById('registration-form');
    
    // Feedback Division Selection - select the feedback div
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        // Prevent form from submitting to server
        event.preventDefault();
        
        // Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Validation Logic
        // Initialize validation variables
        let isValid = true;
        const messages = [];
        
        // Username Validation - must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        
        // Email Validation - must include both '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }
        
        // Password Validation - must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        
        // Displaying Feedback
        // Make feedback div visible
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            // Success message
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            // Error messages
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
