function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    alert("Email is required.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert(
      "Invalid email, please input the complete format of your email(...@gmail.com, etch.)."
    );
    return false;
  }

  return true;
}

function validatePassword(password) {
  if (!password) {
    alert("Password is required.");
    return false;
  }

  // Additional password complexity checks
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  if (password.length < minLength) {
    alert(`Password must be at least ${minLength} characters long.`);
    return false;
  }

  if (!(hasUppercase && hasLowercase && hasNumber)) {
    alert(
      "Password must include at least one uppercase letter, one lowercase letter, and one number."
    );
    return false;
  }

  return true;
}

function register() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  // Validate email and password
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  // Perform registration logic if validation passes
  if (isEmailValid && isPasswordValid) {
    alert(`User registered!\nEmail: ${email}\nPassword: ${password}`);
  }
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Validate email and password
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  // Perform login logic if validation passes
  if (isEmailValid && isPasswordValid) {
    alert(`User logged in!\nEmail: ${email}\nPassword: ${password}`);
  }
}

function showLogin() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("registerBox").style.display = "none";
}

function showRegister() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("registerBox").style.display = "block";
}
