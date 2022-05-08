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
  var TC = document.getElementById("Theme-Changer");
}

function Listening() {
  var bsl = document.getElementById("big-screen-listening");
  var Rl = document.getElementById("Rotating-logo");

  if (bsl.className == "Listening-circle") {
    bsl.classList.add("listening");
    Rl.classList.add("listening");

    setTimeout(function () {
      document.getElementById("big-screen-listenin").disabled = false;
      bsl.classList.remove("listening");
    }, 3000);
  } else {
    bsl.classList.remove("listening");
    Rl.classList.remove("listening");
  }
}

function smalllsn() {
  var b = document.getElementById("lb");

  if (b.className === "listening-bars") {
    b.className += " listening";
    document.getElementById("one").className += " listening";
    document.getElementById("two").className += " listening";
    document.getElementById("three").className += " listening";
    document.getElementById("four").className += " listening";
    document.getElementById("five").className += " listening";
    document.getElementById("six").className += " listening";
    document.getElementById("seven").className += " listening";
    document.getElementById("eight").className += " listening";
    document.getElementById("gooey").className += " listening";

    document.getElementById("rs").disabled = true;
    setTimeout(function () {
      document.getElementById("rs").disabled = false;
      b.className = "listening-bars";
      document.getElementById("one").className += "one";
      document.getElementById("two").className += "two";
      document.getElementById("three").className += "three";
      document.getElementById("four").className += "four";
      document.getElementById("five").className += "five";
      document.getElementById("six").className += "six";
      document.getElementById("seven").className += "seven";
      document.getElementById("eight").className += "eight";
      document.getElementById("gooey").className += "gooey";
    }, 10000);
  }
}

function MovingpillSignup(params) {
  var Sp = document.getElementById("SP");
  var SpF = document.getElementById("SPF");
  var LpF = document.getElementById("LPF");
  document.getElementById("Login-Pill").style.color = "white";
  document.getElementById("Login-Pill").style.fontWeight = "400";

  document.getElementById("Signup-Pill").style.color = "black";
  document.getElementById("Signup-Pill").style.fontWeight = "700";

  if (Sp.className == "Selection-pill") {
    Sp.classList.add("move-Signup");
    SpF.style.display = "flex";
    LpF.style.display = "none";
  }
}
function MovingpillLogin(params) {
  var Sp = document.getElementById("SP");
  var LpF = document.getElementById("LPF");
  var SpF = document.getElementById("SPF");
  document.getElementById("Login-Pill").style.color = "black";
  document.getElementById("Login-Pill").style.fontWeight = "700";

  document.getElementById("Signup-Pill").style.color = "white";
  document.getElementById("Signup-Pill").style.fontWeight = "400";

  Sp.classList.remove("move-Signup");
  SpF.style.display = "none";
  LpF.style.display = "flex";
}

function disableScroll() {
  // To get the scroll position of current webpage
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
    // if scroll happens, set it to the previous value
    (window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

function RevealPassword() {
  var LpF = document.getElementById("LPF");
  var SpF = document.getElementById("SPF");
  if (LpF.style.display != "none") {
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
  if (SpF.style.display != "none") {
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

const username = document.getElementById("Signup-Username");
const email = document.getElementById("Signup-Email");
const password = document.getElementById("Signup-Password");
const cpassword = document.getElementById("Signup-CPassword");

//Show input error messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success colour
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Email is not invalid");
  }
}

//checkRequired fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
}

//check input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be les than ${max} characters`
    );
  } else {
    showSucces(input);
  }
}

//get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
    console.log("MOFO");
  }
}

//Event Listeners
// document.getElementById("Form-Btn").addEventListener("click", function (e) {
//   e.preventDefault();
// });
function aa() {
  // checkRequired([username, email, password, cpassword]);
  // checkLength(username, 3, 15);
  // checkLength(password, 6, 25);
  // checkEmail(email);
  checkPasswordMatch(password, cpassword);
}
