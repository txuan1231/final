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

  document
    .getElementById("checkBtn")
    .addEventListener("click", checkPasswordStrength);
  document.getElementById("clearBtn").addEventListener("click", clearPasswords);
  document
    .getElementById("toggleInfoBtn")
    .addEventListener("click", toggleMoreInfo);
  loadSavedPasswords();
});

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
  if (!password) return;
  const passwords = JSON.parse(localStorage.getItem("passwords")) || [];
  passwords.push({
    password: "*".repeat(password.length),
    strength: strength,
    timestamp: new Date().toLocaleTimeString(),
  });
  localStorage.setItem("passwords", JSON.stringify(passwords));
  loadSavedPasswords();
}

function loadSavedPasswords() {
  const savedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];
  const list = document.getElementById("savedPasswords");
  list.innerHTML = savedPasswords
    .map(
      (pwd, index) => `
        <li>
            ${pwd.password} (${pwd.strength}) at ${pwd.timestamp}
            <button onclick="deletePassword(${index})">Delete</button>
        </li>
    `
    )
    .join("");
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
