let form = document.getElementById("register__form");
let errMsg = document.getElementById("error");

let fname = document.getElementById("fname");
let username = document.getElementById("username");
let phoneNumber = document.getElementById("pnumber");
let email = document.getElementById("email");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let check = document.getElementById("check");

let containers = document.getElementsByClassName("form__input");

if (document.getElementById) {
  // Swap the native alert for the custom
  // alert
  window.alert = function (alert_message) {
    custom_alert(alert_message);
  };
}

function validateForm() {
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  let usernameCondition = username.value.trim();

  // Full name conditions
  if (fname.value.length > 70) {
    showAlert("Name has exceeded maximum allowable characters.");
    errorContainer(containers, "fname__container");
    return false;
  }

  if (fname.value.search("'") >= 0) {
    showAlert("Name should not contain apostrophe (') ");
    errorContainer(containers, "fname__container");

    return false;
  }

  if (fname.value.search(" ") <= 0) {
    showAlert("The name must be complete!");
    errorContainer(containers, "fname__container");

    return false;
  }

  // Username Conditions
  if (usernameCondition.length > 50) {
    showAlert("Username has exceeded maximum allowable characters.");
    errorContainer(containers, "username__container");

    return false;
  }
  // if (usernameCondition.search(" ") >= 0) {
  //   errMsg.textContent = "Username should not contain space";
  //   errorContainer(containers, "username__container");

  //   return false;
  // }

  //Phone Number Conditions
  if (phoneNumber.value.length > 11) {
    showAlert("Phone number must not exceed 11 digits");

    errorContainer(containers, "pnumber__container");
    return false;
  }
  if (phoneNumber.value.length < 11) {
    showAlert("Incomplete phone number");

    errorContainer(containers, "pnumber__container");
    return false;
  }

  //Email Conditions
  if (!pattern.test(email.value) || email.value.endsWith(".com") === false) {
    showAlert("Invalid email address");
    errorContainer(containers, "email__container");

    return false;
  }

  //Password Conditions
  if (pass1.value !== pass2.value) {
    showAlert("Password mismatch");
    errorContainer(containers, "pass2__container");
    return false;
  }
  if (pass1.value.length < 6) {
    showAlert("Password must be at least 6 characters.");
    errorContainer(containers, "pass1__container");
    return false;
  }
  if (pass1.value.length > 15) {
    showAlert("Password must not be greater than 15 characters.");
    errMsg.textContent = "Password must not be greater than 15 characters.";
    errorContainer(containers, "pass1__container");

    return false;
  }
  //Check Conditions
  if (check.checked !== true) {
    errMsg.textContent = "Accept our Terms and Condtions to proceed";
    return false;
  }

  if (
    fname.value.length < 1 ||
    username.value.length < 1 ||
    email.value.length < 1 ||
    pass1.value.length < 1 ||
    pass2.value.length < 1 ||
    phoneNumber.value.length < 1
  ) {
    errMsg.textContent = "Required field is missing.";
    return false;
  }

  return true;
}

function validateLoginForm() {
  //Phone Number Conditions
  if (phoneNumber.value.length > 11) {
    errMsg.textContent = "Phone number must not exceed 11 digits.";
    showAlert("Phone number must not exceed 11 digits");
    errorContainer(containers, "pnumber__container");
    return false;
  }
  if (phoneNumber.value.length < 11) {
    errMsg.textContent = "Incomplete phone number.";
    showAlert("Incomplete phone number");
    errorContainer(containers, "pnumber__container");
    return false;
  }

  //Password Conditions
  if (pass1.value.length < 6) {
    errMsg.textContent = "Password must be at least 6 characters.";
    showAlert("Password must be at least 6 characters.");
    errorContainer(containers, "pass__container");
    return false;
  }
  if (pass1.value.length > 15) {
    errMsg.textContent = "Password must not be greater than 15 characters.";
    showAlert("Password must not be greater than 15 characters.");
    errorContainer(containers, "pass__container");

    return false;
  }

  if (pass1.value.length < 1 || phoneNumber.value.length < 1) {
    showAlert("Required field is missing.");

    return false;
  }

  return true;
}

function validateForgotForm() {
  //Phone Number Conditions
  if (phoneNumber.value.length > 11) {
    showAlert("Phone number must not exceed 11 digits");

    errorContainer(containers, "pnumber__container");
    return false;
  }
  if (phoneNumber.value.length < 11) {
    showAlert("Incomplete phone number");

    errorContainer(containers, "pnumber__container");
    return false;
  }
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

function custom_alert(alert_message) {
  /* You can utilize the web page address
   * for the alert message by doing the following:

   const ALERT_TITLE = "The page at " + document.location.href + " says: ";
   */
  const ALERT_TITLE = "Error Message";
  const ALERT_BUTTON_TEXT = "OK";

  // Check if there is an HTML element with
  // an ID of "alert_container".If true, abort
  // the creation of the custom alert.
  let is_alert_container_exist = document.getElementById("alert_container");
  if (is_alert_container_exist) {
    return;
  }

  // Create a div to serve as the alert
  // container. Afterward, attach it to the body
  // element.
  let get_body_element = document.querySelector("body");
  let div_for_alert_container = document.createElement("div");
  let alert_container = get_body_element.appendChild(div_for_alert_container);

  // Add an HTML ID and a class name for the
  // alert container
  alert_container.id = "alert_container";
  alert_container.className = "alert_container";

  // Create the div for the alert_box and attach
  // it to the alert container.
  let div_for_alert_box = document.createElement("div");
  let alert_box = alert_container.appendChild(div_for_alert_box);
  alert_box.className = "alert_box";

  // Set the position of the alert box using
  // scrollTop, scrollWidth, and offsetWidth
  alert_box.style.top = document.documentElement.scrollTop + "px";
  alert_box.style.left =
    (document.documentElement.scrollWidth - alert_box.offsetWidth) / 2 + "px";

  // Create h1 to hold the alert title
  let alert_header_tag = document.createElement("h1");
  let alert_title_text = document.createTextNode(ALERT_TITLE);
  let alert_title = alert_box.appendChild(alert_header_tag);
  alert_title.appendChild(alert_title_text);

  // Create a paragraph element to hold the
  // alert message
  let alert_paragraph_tag = document.createElement("p");
  let alert_message_container = alert_box.appendChild(alert_paragraph_tag);
  alert_message_container.textContent = alert_message;

  // Create the OK button
  let ok_button_tag = document.createElement("button");
  let ok_button_text = document.createTextNode(ALERT_BUTTON_TEXT);
  let ok_button = alert_box.appendChild(ok_button_tag);
  ok_button.className = "close_btn";
  ok_button.appendChild(ok_button_text);

  // Add an event listener that'll close the
  // custom alert
  ok_button.addEventListener(
    "click",
    function () {
      remove_custom_alert();
    },
    false
  );
}

function remove_custom_alert() {
  let HTML_body = document.querySelector("body");
  let alert_container = document.getElementById("alert_container");
  HTML_body.removeChild(alert_container);
}

function showAlert(title) {
  swal({
    text: title,
    dangerMode: true,
    buttons: true,
    closeOnClickOutside: false,
    timer: 6000,
  });
}
