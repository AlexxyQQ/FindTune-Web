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
