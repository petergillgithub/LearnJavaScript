// Function to generate password
function generatePassword() {
  // Get the length from input
  const length = document.getElementById("length").value;

  // Get checkbox values
  const useLowercase = document.getElementById("lowercase").checked;
  const useUppercase = document.getElementById("uppercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  // Character sets
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Build the character set based on checkboxes
  let characters = "";

  if (useLowercase) {
    characters += lowercase;
  }
  if (useUppercase) {
    characters += uppercase;
  }
  if (useNumbers) {
    characters += numbers;
  }
  if (useSymbols) {
    characters += symbols;
  }

  // Check if at least one option is selected
  if (characters === "") {
    alert("Please select at least one character type!");
    return;
  }

  // Generate the password
  let password = "";
  for (let i = 0; i < length; i++) {
    // Pick a random character
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  // Display the password
  document.getElementById("passwordDisplay").textContent = password;
  document.getElementById("message").textContent = "";
}

// Function to copy password to clipboard
function copyPassword() {
  const password = document.getElementById("passwordDisplay").textContent;

  // Check if password exists
  if (password === "Click Generate!" || password === "") {
    alert("Generate a password first!");
    return;
  }

  // Copy to clipboard
  navigator.clipboard.writeText(password);

  // Show success message
  document.getElementById("message").textContent = "✓ Copied to clipboard!";

  // Clear message after 2 seconds
  setTimeout(function () {
    document.getElementById("message").textContent = "";
  }, 2000);
}
