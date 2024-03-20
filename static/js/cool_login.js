let form = document.getElementById("register__form");
let errMsg = document.getElementById("error");

let phoneNumber = document.getElementById("pnumber");
let pass = document.getElementById("pass");

let containers = document.getElementsByClassName("form__input");

function validateLoginForm() {
  //Phone Number Conditions
  if (phoneNumber.value.length > 11) {
    errMsg.textContent = "Phone number must not exceed 11 digits";
    errorContainer(containers, "pnumber__container");
    return false;
  }
  if (phoneNumber.value.length < 11) {
    // errMsg.textContent = "Incomplete phone number.";
    alert("Incomplete phone number.");
    errorContainer(containers, "pnumber__container");
    return false;
  }

  //Password Conditions
  if (pass.value.length < 6) {
    errMsg.textContent = "Password must be at least 6 characters.";
    errorContainer(containers, "pass__container");
    return false;
  }
  if (pass.value.length > 15) {
    errMsg.textContent = "Password must not be greater than 15 characters.";
    errorContainer(containers, "pass__container");

    return false;
  }

  if (pass.value.length < 1 || phoneNumber.value.length < 1) {
    errMsg.textContent = "Required field is missing.";
    return false;
  }

  return true;
}

function errorContainer(containers, containerId) {
  for (const c in containers) {
    if (Object.hasOwnProperty.call(containers, c)) {
      const element = containers[c];

      element.classList.remove("error__border");

      if (element.id === containerId) {
        element.classList.add("error__border");
      }
    }
  }
}
