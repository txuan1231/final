document.addEventListener("DOMContentLoaded", function () {
  fetch("data/ethicalhacker.json")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load");
      return response.json();
    })
    .then((data) => {
      document.getElementById(
        "hackerImage1"
      ).src = `thomasimages/${data.images[0].filename}`;
      document.getElementById("hackerImage1").alt = data.images[0].description;
      document.getElementById(
        "hackerImage2"
      ).src = `thomasimages/${data.images[1].filename}`;
      document.getElementById("hackerImage2").alt = data.images[1].description;
    })
    .catch((error) => {
      document.getElementById("hackerImage1").src =
        "thomasimages/ethicalhacking1.jpg";
      document.getElementById("hackerImage2").src =
        "thomasimages/ethicalhacker2.jpg";
    });

  const authBtn = document.getElementById("auth-btn");
  const logoutBtn = document.getElementById("logout-btn");

  authBtn.addEventListener("click", handleAuth);
  logoutBtn.addEventListener("click", handleLogout);
  updateAuthUI();

  document
    .getElementById("checkBtn")
    .addEventListener("click", checkPasswordStrength);
  document.getElementById("clearBtn").addEventListener("click", clearPasswords);
  document
    .getElementById("toggleInfoBtn")
    .addEventListener("click", toggleMoreInfo);
  loadSavedPasswords();
});

function handleAuth() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    document.getElementById("auth-message").textContent =
      "Please enter both fields";
    return;
  }

  if (password.length < 6) {
    document.getElementById("auth-message").textContent =
      "Password must be 6+ characters";
    return;
  }

  localStorage.setItem(
    "authUser",
    JSON.stringify({
      username,
      loggedIn: true,
      lastLogin: new Date().toISOString(),
    })
  );

  updateAuthUI();
  document.getElementById("auth-message").textContent = "";
}

function handleLogout() {
  localStorage.removeItem("authUser");
  updateAuthUI();
}

function updateAuthUI() {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const loginForm = document.getElementById("login-form");
  const userGreeting = document.getElementById("user-greeting");

  if (authUser?.loggedIn) {
    loginForm.classList.add("hidden");
    userGreeting.classList.remove("hidden");
    document.getElementById("display-name").textContent = authUser.username;
  } else {
    loginForm.classList.remove("hidden");
    userGreeting.classList.add("hidden");
  }
}

function isAuthenticated() {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  return authUser?.loggedIn === true;
}

function checkPasswordStrength() {
  const password = document.getElementById("passwordInput").value;
  const strength = calculateStrength(password);
  displayResult(strength);
  savePassword(password, strength);
}

function calculateStrength(password) {
  if (!password) return "empty";
  if (password.length < 6) return "weak";
  if (password.length < 10) return "medium";
  if (/[!@#$%^&*]/.test(password)) return "strong";
  return "good";
}

function displayResult(strength) {
  const resultDiv = document.getElementById("strengthResult");
  const messages = {
    empty: "Please enter a password",
    weak: "🔴 Weak (easily cracked)",
    medium: "🟡 Medium (could be stronger)",
    good: "🔵 Good (decent protection)",
    strong: "🟢 Strong (excellent!)",
  };
  resultDiv.textContent = messages[strength];
  resultDiv.style.color =
    strength === "weak"
      ? "#dc3545"
      : strength === "strong"
      ? "#28a745"
      : "#ffc107";
}

function savePassword(password, strength) {
  if (!isAuthenticated()) {
    alert("Please login to save password tests");
    return;
  }

  if (!password) return;

  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const passwords = JSON.parse(localStorage.getItem("passwords")) || [];

  passwords.push({
    user: authUser.username,
    password: "*".repeat(password.length),
    strength: strength,
    timestamp: new Date().toLocaleString(),
  });

  localStorage.setItem("passwords", JSON.stringify(passwords));
  loadSavedPasswords();
}

function loadSavedPasswords() {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const allPasswords = JSON.parse(localStorage.getItem("passwords")) || [];

  const userPasswords = isAuthenticated()
    ? allPasswords.filter((p) => p.user === authUser.username)
    : [];

  const list = document.getElementById("savedPasswords");
  list.innerHTML =
    userPasswords.length > 0
      ? userPasswords
          .map(
            (pwd, index) => `
        <li>
            ${pwd.password} (${pwd.strength}) at ${pwd.timestamp}
            <button onclick="deletePassword(${index})">Delete</button>
        </li>`
          )
          .join("")
      : "<li>No saved tests" +
        (isAuthenticated() ? "" : " - login to save") +
        "</li>";
}

function deletePassword(index) {
  const passwords = JSON.parse(localStorage.getItem("passwords")) || [];
  passwords.splice(index, 1);
  localStorage.setItem("passwords", JSON.stringify(passwords));
  loadSavedPasswords();
}

function clearPasswords() {
  if (confirm("Clear all saved password tests?")) {
    localStorage.removeItem("passwords");
    loadSavedPasswords();
  }
}

function toggleMoreInfo() {
  const content = document.getElementById("more-info-content");
  const btn = document.getElementById("toggleInfoBtn");
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    btn.textContent = "Hide Details";
  } else {
    content.classList.add("hidden");
    btn.textContent = "Show More About Ethical Hacking";
  }
}
