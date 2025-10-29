// =======================
// CircleEats Authentication Logic
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
    const role = document.getElementById("role").value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Load existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user with same email and role exists
    const existingUser = users.find(u => u.email === email && u.role === role);
    if (existingUser) {
      alert(`An account with this email already exists as a ${role}. Please log in.`);
      return;
    }

    // Save new user
    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert(`Account created successfully as ${role}! Please log in.`);
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
    const role = document.getElementById("role").value;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email && u.password === password && u.role === role);

    if (!user) {
      alert(`No ${role} account found for this email. Please sign up first.`);
      return;
    }

    // Save current session
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Redirect based on role
    switch (role) {
      case "user":
        window.location.href = "user-dashboard.html";
        break;
      case "donor":
        window.location.href = "dvs.html";
        break;
      case "volunteer":
        window.location.href = "volunteer-dashboard.html";
        break;
      case "shelter":
        window.location.href = "shelter-dashboard.html";
        break;
      default:
        alert("Invalid role selected.");
    }
  });
}

// Logout Helper
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
