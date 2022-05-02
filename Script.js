window.onscroll = function () {
  console.log(window.pageYOffset);
  var nav = document.getElementById("nav");
  if (window.pageYOffset > 10) {
    nav.classList.add("navbar-transform");
  } else {
    nav.classList.remove("navbar-transform");
  }
};

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
  document.getElementById("Signup-Pill").style.color = "black";

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
  document.getElementById("Signup-Pill").style.color = "white";

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

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

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
  }
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
