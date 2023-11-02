const usernameUI = document.getElementById("login-username");
const passwordUI = document.getElementById("login-password");
const login = document.getElementById("register-btn");
const fnameUI = document.getElementById("first-name");
const lastnameUI = document.getElementById("last-name");
const emailUI = document.getElementById("email");
const passwordRegisterUI = document.getElementById("password");
const passwordConfirmUI = document.getElementById("password-confirm");
const genderUI = document.getElementsByName("gender");
const checkbox = document.getElementById("terms");

// fnameUI = fname.value.trim();
//   lastnameUI = lastnameUI.value.trim();
// console.log(
//   usernameUI,
//   passwordUI,
//   login,
//   fnameUI,
//   lastnameUI,
//   emailUI,
//   passwordRegisterUI,
//   genderUI
// );

const gValidator = (arr) => {
  let checked = false;
  arr.forEach((element) => {
    if (element.checked) {
      checked = true;
    }
  });
  return checked;
};

login.addEventListener("click", validateRegister);
function validateRegister(e) {
  /**
   * >> all fields must not be empty
   *
   * >>frist name and last name should not exceed 15 character and not less thatn 3
   *
   * >> user must check the agree checkbox
   *
   * > radio button must be selected
   */

  if (fnameUI.value.length < 3 || fnameUI.value.length > 15) {
    alert("First name must be between 3 and 15 characters");
  } else if (lastnameUI.value.length < 3 || lastnameUI.value.length > 15) {
    alert("Last name must be between 3 and 15 characters");
  } else if (checkbox.checked == 0) {
    alert("Agree to terms to continue!!!");
  } else if (passwordRegisterUI.value !== passwordConfirmUI.value) {
    alert("Password Didn't Match");
  } else if (!gValidator(genderUI)) {
    alert("please Select Gender");
  } else {
    alert("Registered Successfully");
    // redirecting to shop page after successful registeration
    window.location.replace("../HTML/shop.html");
  }

  e.preventDefault();
}
