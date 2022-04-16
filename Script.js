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
    }, 5000);
  }
  if (y.className === "listening-btn-layer1") {
    y.className += " listening";
    setTimeout(function () {
      document.getElementById("listening-btn-layer1").disabled = false;
      y.className = "listening-btn-layer1";
    }, 5000);
  }
  if (z.className === "listening-btn-layer2") {
    z.className += " listening";
    setTimeout(function () {
      document.getElementById("listening-btn-layer2").disabled = false;
      z.className = "listening-btn-layer2";
    }, 5000);
  }
  if (a.className === "listening-btn-layer3") {
    document.getElementById("listening-btn-layer3").disabled = true;
    setTimeout(function () {
      document.getElementById("listening-btn-layer3").disabled = false;
      a.className += " listening";
      a.className = "listening-btn-layer3";
    }, 5000);
  } else {
    a.className = "listening-btn-layer3";
  }
}

function smalllsn() {
  var b = document.getElementById("lb");

  if (b.className === "listening-bars") {
    b.className += " ras";
    document.getElementById("rs").disabled = true;
    setTimeout(function () {
      document.getElementById("rs").disabled = false;
      b.className = "listening-bars";
    }, 5000);
  }
}
