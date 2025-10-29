// =======================
// CircleEats Authentication Logic (No Roles)
// =======================

// Handle Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      alert("An account with this email already exists. Please log in.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully! Please log in.");
    window.location.href = "login.html";
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      alert("No account found. Please sign up first.");
      return;
    }

    // Save login session
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert(`Welcome back, ${user.name}!`);
    window.location.href = "dvs.html";
  });
}

// Logout Helper
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
