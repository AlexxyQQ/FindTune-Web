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
  var x = document.getElementById("listening-btn");
  var y = document.getElementById("listening-btn-layer1");
  var z = document.getElementById("listening-btn-layer2");
  var a = document.getElementById("listening-btn-layer3");

  if (x.className === "listening-btn") {
    x.className += " listening";
    setTimeout(function () {
      document.getElementById("listening-btn").disabled = false;
      x.className = "listening-btn";
    }, 10000);
  }
  if (y.className === "listening-btn-layer1") {
    y.className += " listening";
    setTimeout(function () {
      document.getElementById("listening-btn-layer1").disabled = false;
      y.className = "listening-btn-layer1";
    }, 10000);
  }
  if (z.className === "listening-btn-layer2") {
    z.className += " listening";
    setTimeout(function () {
      document.getElementById("listening-btn-layer2").disabled = false;
      z.className = "listening-btn-layer2";
    }, 10000);
  }
  if (a.className === "listening-btn-layer3") {
    document.getElementById("listening-btn-layer3").disabled = true;
    setTimeout(function () {
      document.getElementById("listening-btn-layer3").disabled = false;
      a.className += " listening";
      a.className = "listening-btn-layer3";
    }, 10000);
  } else {
    a.className = "listening-btn-layer3";
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
