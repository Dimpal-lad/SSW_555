const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Get form elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Event listener for login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Authenticate user (you can replace this with your own logic)
  if (authenticateUser(email, password)) {
    alert("Login successful!"); // Redirect to dashboard or another page
  } else {
    alert("Invalid credentials. Please try again.");
  }
});

const nameInput = document.getElementById("signup-name");
const emailInput = document.getElementById("signup-email");
const passwordInput = document.getElementById("signup-password");
const submitButton = document.getElementById("submitButton");

const email = document.getElementById("login-email");
const password = document.getElementById("login-password");
const loginButton = document.getElementById("sign-in");

function checkLoginInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Enable submit button only if all fields have values
  if (emailValue !== "" && passwordValue !== "" && emailValue.includes("@")) {
    loginButton.disabled = false; // Enable button
  } else {
    loginButton.disabled = true; // Disable button
  }
}

// Function to check if any input field is empty
function checkInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Enable submit button only if all fields have values
  if (
    nameValue !== "" &&
    emailValue !== "" &&
    passwordValue !== "" &&
    emailValue.includes("@")
  ) {
    submitButton.disabled = false; // Enable button
  } else {
    submitButton.disabled = true; // Disable button
  }
}

// Add event listeners to input fields
nameInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

email.addEventListener("input", checkLoginInputs);
password.addEventListener("input", checkLoginInputs);

// Event listener for signup form submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Store user data (you can use local storage or send to a server)
  storeUserData(name, email, password);
  alert("Sign up successful!"); // Redirect to login page
});

// Example: Authenticate user (replace with your own logic)

// Example: Authenticate user (replace with your own logic)
// Example: Authenticate user based on stored data (replace with your own logic)
function authenticateUser(email, password) {
  try {
    // Retrieve user data from local storage (you can replace this with your own storage method)
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedUserData) {
      // User does not exist
      return false;
    }

    // Compare entered email and password with stored data
    return (
      email === storedUserData.email && password === storedUserData.password
    );
  } catch (error) {
    console.error("Error authenticating user:", error);
    return false;
  }
}

// Example usage:
const enteredEmail = "user@example.com"; // Get this from the login form
const enteredPassword = "userEnteredPassword"; // Get this from the login form

if (authenticateUser(enteredEmail, enteredPassword)) {
  console.log("User authenticated successfully.");
  // Redirect to dashboard or another page
} else {
  console.log("Invalid credentials. Please try again.");
}

// Example: Store user data (replace with your own storage method)
function storeUserData(name, email, password) {
  // Hash the password before storing it (use bcrypt or similar)

  // Store data in local storage (for demonstration purposes)
  const user = {
    name,
    email,
    password,
  };

  // Convert user object to JSON and store it
  localStorage.setItem("userData", JSON.stringify(user));
}
