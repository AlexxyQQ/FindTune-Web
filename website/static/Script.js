// Navbar Transform on Scroll
window.onscroll = function () {
  console.log(window.pageYOffset);
  var nav = document.getElementById("Nav-Bar");
  if (window.pageYOffset > 10) {
    nav.classList.add("Nav-Bar-Transform");
  } else {
    nav.classList.remove("Nav-Bar-Transform");
  }
};

function Themeing() {
  var ThemeToggler = document.getElementById("Theme-Toggler-Icon");
  if (ThemeToggler.className == "Img") {
    ThemeToggler.classList.add("ThemeChanged");
    document.getElementById("Toggle-Theme-Btn").disabled = true;
    setTimeout(function () {
      document.getElementById("Toggle-Theme-Btn").disabled = false;
    }, 2000);
  } else {
    ThemeToggler.classList.remove("ThemeChanged");
    document.getElementById("Toggle-Theme-Btn").disabled = true;
    setTimeout(function () {
      document.getElementById("Toggle-Theme-Btn").disabled = false;
    }, 2000);
  }
}

function Listening() {
  var Circular_Recorder = document.getElementById("Circular-Recorder");
  var Ellipse_One = document.getElementById("Ellipse-One");
  var Ellipse_Two = document.getElementById("Ellipse-Two");
  var Ellipse_Three = document.getElementById("Ellipse-Three");
  var Rotating_Logo = document.getElementById("Rotating-Logo");
  console.log(Circular_Recorder.className);
  if (Circular_Recorder.className == "Circular-Recorder Button") {
    Ellipse_One.classList.add("Listening");
    Ellipse_Two.classList.add("Listening");
    Ellipse_Three.classList.add("Listening");
    Rotating_Logo.classList.add("Listening");
    Circular_Recorder.classList.add("Static");
    document.getElementById("Circular-Recorder").disabled = true;
    setTimeout(function () {
      document.getElementById("Circular-Recorder").disabled = false;
      Ellipse_One.classList.remove("Listening");
      Ellipse_Two.classList.remove("Listening");
      Ellipse_Three.classList.remove("Listening");
      Rotating_Logo.classList.remove("Listening");
      Circular_Recorder.classList.remove("Static");
    }, 8000);
  }
}

function Listening2() {
  var Bar_Recorder = document.getElementById("Bar-Recorder");

  if (Bar_Recorder.className == "Bar-Recorder") {
    Bar_Recorder.classList.add("Listening");
    document.getElementById("RB-One").classList.add("Listening");
    document.getElementById("RB-Two").classList.add("Listening");
    document.getElementById("RB-Three").classList.add("Listening");
    document.getElementById("RB-Four").classList.add("Listening");
    document.getElementById("RB-Five").classList.add("Listening");
    document.getElementById("RB-Six").classList.add("Listening");
    document.getElementById("RB-Seven").classList.add("Listening");
    document.getElementById("RB-Eight").classList.add("Listening");
    document.getElementById("Gooey").classList.add("Listening");

    document.getElementById("Small-Record-Button").disabled = true;
    setTimeout(function () {
      document.getElementById("Small-Record-Button").disabled = false;
      Bar_Recorder.classList = "Bar-Recorder";
      document.getElementById("RB-One").classList.remove("Listening");
      document.getElementById("RB-Two").classList.remove("Listening");
      document.getElementById("RB-Three").classList.remove("Listening");
      document.getElementById("RB-Four").classList.remove("Listening");
      document.getElementById("RB-Five").classList.remove("Listening");
      document.getElementById("RB-Six").classList.remove("Listening");
      document.getElementById("RB-Seven").classList.remove("Listening");
      document.getElementById("RB-Eight").classList.remove("Listening");
      document.getElementById("Gooey").classList.remove("Listening");
    }, 10000);
  }
}

function MovePillToSignup(params) {
  var SelectionPill = document.getElementById("SelectionPill");
  var Login_Form = document.getElementById("Login-Form");
  var Signup_Form = document.getElementById("Signup-Form");
  document.getElementById("Login-Button").style.color = "white";
  document.getElementById("Login-Button").style.fontWeight = "400";

  document.getElementById("Signup-Button").style.color = "black";
  document.getElementById("Signup-Button").style.fontWeight = "700";

  if (SelectionPill.className == "LoginSignup__Pill--SelectionPill") {
    SelectionPill.classList.add("Signup");
    Signup_Form.style.display = "flex";
    Login_Form.style.display = "none";
  }
}
function MovePillToLogin(params) {
  var SelectionPill = document.getElementById("SelectionPill");
  var Login_Form = document.getElementById("Login-Form");
  var Signup_Form = document.getElementById("Signup-Form");
  document.getElementById("Login-Button").style.color = "black";
  document.getElementById("Login-Button").style.fontWeight = "700";

  document.getElementById("Signup-Button").style.color = "white";
  document.getElementById("Signup-Button").style.fontWeight = "400";
  SelectionPill.classList.remove("Signup");
  Signup_Form.style.display = "none";
  Login_Form.style.display = "flex";
}

function RevealPassword() {
  var Login_Form = document.getElementById("Login-Form");
  var Signup_Form = document.getElementById("Signup-Form");
  if (Login_Form.style.display != "none") {
    if (document.getElementById("Login-Pass").type == "password") {
      document.getElementById("Login-Pass").type = "text";
      document.getElementById("eye").classList.remove("fa-eye");
      document.getElementById("eye").classList.add("fa-eye-slash");
    } else {
      document.getElementById("Login-Pass").type = "password";
      document.getElementById("eye").classList.add("fa-eye");
      document.getElementById("eye").classList.remove("fa-eye-slash");
    }
  }
  if (Signup_Form.style.display != "none") {
    if (document.getElementById("Signup-Pass").type == "password") {
      document.getElementById("Signup-Pass").type = "text";
      document.getElementById("Signup-CPass").type = "text";
      document.getElementById("eye-C").classList.remove("fa-eye");
      document.getElementById("eye-C").classList.add("fa-eye-slash");
    } else {
      document.getElementById("Signup-Pass").type = "password";
      document.getElementById("Signup-CPass").type = "password";
      document.getElementById("eye-C").classList.add("fa-eye");
      document.getElementById("eye-C").classList.remove("fa-eye-slash");
    }
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "Form-Title";
  var small = formControl.querySelector("p");
  console.log(small);
  small.style.visibility = "visible";
  // small.innerText = message;
}
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function CheckRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
}

function Submit_SignupForm() {
  var SignupName = document.Signup_Form.FullName;
  var SignupEmail = document.Signup_Form.Email;
  var SignupUsername = document.Signup_Form.Username;
  var SignupPassword = document.Signup_Form.Password;
  var SignupCPassword = document.Signup_Form.CPassword;

  CheckRequired([
    SignupName,
    SignupEmail,
    SignupUsername,
    SignupPassword,
    SignupCPassword,
  ]);
}

// const form = document.getElementById("Signup-Form");
// var username = document.Signup_Form.Username;
// var email = document.Signup_Form.Email;
// var password = document.Signup_Form.Password;
// var password2 = document.Signup_Form.CPassword;
// //Show input error messages
// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control error";
//   const small = formControl.querySelector("small");
//   small.innerText = message;
// }

// //show success colour
// function showSucces(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

// //check email is valid
// function checkEmail(input) {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showSucces(input);
//   } else {
//     showError(input, "Email is not invalid");
//   }
// }

// //checkRequired fields
// function checkRequired(inputArr) {
//   inputArr.forEach(function (input) {
//     if (input.value.trim() === "") {
//       showError(input, `${getFieldName(input)} is required`);
//     } else {
//       showSucces(input);
//     }
//   });
// }

// //check input Length
// function checkLength(input, min, max) {
//   if (input.value.length < min) {
//     showError(
//       input,
//       `${getFieldName(input)} must be at least ${min} characters`
//     );
//   } else if (input.value.length > max) {
//     showError(
//       input,
//       `${getFieldName(input)} must be les than ${max} characters`
//     );
//   } else {
//     showSucces(input);
//   }
// }

// //get FieldName
// function getFieldName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// // check passwords match
// function checkPasswordMatch(input1, input2) {
//   if (input1.value !== input2.value) {
//     showError(input2, "Passwords do not match");
//   }
// }
// function Submit_SignupForm() {
//   var SignupName = document.Signup_Form.FullName;
//   var SignupEmail = document.Signup_Form.Email;
//   var SignupUsername = document.Signup_Form.Username;
//   var SignupPassword = document.Signup_Form.Password;
//   var SignupCPassword = document.Signup_Form.CPassword;
//   checkRequired([username, email, password, password2]);
//   checkLength(username, 3, 15);
//   checkLength(password, 6, 25);
//   checkEmail(email);
//   checkPasswordMatch(password, password2);

//   document.getElementById("Form-Btn").type = "submit";
// }
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Event Listeners
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   checkRequired([username, email, password, password2]);
//   checkLength(username, 3, 15);
//   checkLength(password, 6, 25);
//   checkEmail(email);
//   checkPasswordMatch(password, password2);
// });

// function disableScroll() {
//   // To get the scroll position of current webpage
//   TopScroll = window.pageYOffset || document.documentElement.scrollTop;
//   (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
//     // if scroll happens, set it to the previous value
//     (window.onscroll = function () {
//       window.scrollTo(LeftScroll, TopScroll);
//     });
// }

// function enableScroll() {
//   window.onscroll = function () {};
// }

// const username = document.getElementById("Signup-Username");
// const email = document.getElementById("Signup-Email");
// const password = document.getElementById("Signup-Password");
// const cpassword = document.getElementById("Signup-CPassword");

// //Show input error messages
// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control error";
//   const small = formControl.querySelector("small");
//   small.innerText = message;
// }

// //show success colour
// function showSucces(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

// //check email is valid
// function checkEmail(input) {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showSucces(input);
//   } else {
//     showError(input, "Email is not invalid");
//   }
// }

// //checkRequired fields
// function checkRequired(inputArr) {
//   inputArr.forEach(function (input) {
//     if (input.value.trim() === "") {
//       showError(input, `${getFieldName(input)} is required`);
//     } else {
//       showSucces(input);
//     }
//   });
// }

// //check input Length
// function checkLength(input, min, max) {
//   if (input.value.length < min) {
//     showError(
//       input,
//       `${getFieldName(input)} must be at least ${min} characters`
//     );
//   } else if (input.value.length > max) {
//     showError(
//       input,
//       `${getFieldName(input)} must be les than ${max} characters`
//     );
//   } else {
//     showSucces(input);
//   }
// }

// //get FieldName
// function getFieldName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// // check passwords match
// function checkPasswordMatch(input1, input2) {
//   if (input1.value !== input2.value) {
//     showError(input2, "Passwords do not match");
//     console.log("MOFO");
//   }
// }

//Event Listeners
// document.getElementById("Form-Btn").addEventListener("click", function (e) {
//   e.preventDefault();
// });
// function aa() {
// checkRequired([username, email, password, cpassword]);
// checkLength(username, 3, 15);
// checkEmail(email);
// checkPasswordMatch(password, cpassword);
// }
