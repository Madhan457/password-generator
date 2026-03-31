const Password = document.getElementById("password");
const Copy = document.getElementById("copy-button");
const Generate = document.getElementById("generate-button");
const Ranges = document.getElementById("range-value");
const RangeValue = document.getElementById("range");
Generate.addEventListener("click", output);
Ranges.addEventListener("input", () => {
  RangeValue.textContent = Ranges.value;
});
function output() {
  const PasswordLength = parseInt(Ranges.value);

  RangeValue.textContent = PasswordLength;
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let RandomPassword = "";
  for (let i = 0; i < PasswordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    RandomPassword += characters[randomIndex];
  }
  Password.value = RandomPassword;
}
Copy.addEventListener("click", () => {
  navigator.clipboard.writeText(Password.value);
  alert("Password Copied");
});
