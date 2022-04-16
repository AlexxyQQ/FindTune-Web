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
  } else {
    x.className = "listening-btn";
  }
  if (y.className === "listening-btn-layer1") {
    y.className += " listening";
  } else {
    y.className = "listening-btn-layer1";
  }
  if (z.className === "listening-btn-layer2") {
    z.className += " listening";
  } else {
    z.className = "listening-btn-layer2";
  }
  if (a.className === "listening-btn-layer3") {
    document.getElementById("listening-btn-layer3").disabled = true;
    setTimeout(function () {
      document.getElementById("listening-btn-layer3").disabled = false;
      a.className += " listening";
    }, 5000);
  } else {
    a.className = "listening-btn-layer3";
  }
}
