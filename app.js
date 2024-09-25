//! Tanveer

const totalcharater = document.getElementById("totalcharater"); // input Tag
const charaterLength = document.getElementById("charaterLength"); // Span Tag
const capitalLetters = document.getElementById("capitalLetters"); // capitalLetters
const smalLetters = document.getElementById("smalLetters"); //smalLetters
const number = document.getElementById("number"); //number
const specialCharater = document.getElementById("specialCharater"); // specialCharater
const generatePassword = document.getElementById("generatePassword"); // generatePassword
const weakTag = document.getElementById("weakTag");
const strongTag = document.getElementById("strongTag");

// Change the length to the default value
charaterLength.innerText = totalcharater.value;

// Change Character Length on onchange
function changeCharacterLength() {
  charaterLength.innerText = totalcharater.value;
}

// This function is used to generate the password
function generatePasswordFunc() {
  let include = "";
  let newPassword = "";

  if (capitalLetters.checked) {
    include += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (smalLetters.checked) {
    include += "abcdefghijklmnopqrstuvwxyz";
  }
  if (number.checked) {
    include += "0123456789";
  }
  if (specialCharater.checked) {
    include += "!@#$%^&*()";
  }

  for (let i = 0; i < totalcharater.value; i++) {
    const randomNumber = Math.floor(Math.random() * include.length);
    newPassword += include.substring(randomNumber, randomNumber + 1);
  }

  generatePassword.value = newPassword;
  if (totalcharater.value < 8) {
    weakTag.style.display = "block";
    strongTag.style.display = "none";
    return;
  }

  if (capitalLetters.checked == false) {
    weakTag.style.display = "block";
    strongTag.style.display = "none";
    return;
  }
  if (smalLetters.checked == false) {
    weakTag.style.display = "block";
    strongTag.style.display = "none";
    return;
  }
  if (number.checked == false) {
    weakTag.style.display = "block";
    strongTag.style.display = "none";
    return;
  }
  if (specialCharater.checked == false) {
    weakTag.style.display = "block";
    strongTag.style.display = "none";
    return;
  }

  strongTag.style.display = "block";
  weakTag.style.display = "none";
}

function eyepass(eyeStatus) {
  const eyeOpen = document.getElementById("eyeOpen");
  const eyeClose = document.getElementById("eyeClose");
  if (eyeStatus == true) {
    generatePassword.type = "password";
    eyeOpen.style.display = "none";
    eyeClose.style.display = "block";
  }
  if (eyeStatus == false) {
    generatePassword.type = "text";
    eyeOpen.style.display = "block";
    eyeClose.style.display = "none";
  }
}

function copyPassword() {
  navigator.clipboard.writeText(generatePassword.value);
  const copyStyle = document.getElementById("copyStyle");
  copyStyle.className = "fa-regular fa-circle-check";
  setTimeout(() => (copyStyle.className = "fa-regular fa-copy"), 1000); //1 sec
}
