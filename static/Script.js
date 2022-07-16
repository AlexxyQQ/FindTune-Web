if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (registration) {
      console.log("Service Worker Registered");
      return registration;
    })
    .catch(function (err) {
      console.error("Unable to register service worker.", err);
    });
}

window.addEventListener(
  "online",
  function (e) {
    console.log("You are online");
  },
  false
);

// Navbar Transform on Scroll
window.onscroll = function () {
  var nav = document.getElementById("Nav-Bar");
  if (window.pageYOffset > 10) {
    console.log(window.pageYOffset);
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

// Audio Recorder
const recordAudio = () =>
  new Promise(async (resolve) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          function submit(blob) {
            var fd = new FormData();
            fd.append("file", blob, "audio.ogg");
            $.ajax({
              type: "POST",
              url: "/check",
              data: fd,
              cache: false,
              processData: false,
              contentType: false,
            }).done(function (data) {
              console.log(data);
              window.location.href = "http://127.0.0.1:5558/" + data;
            });
          }
          submit(audioBlob);
          // function uploadFile() {
          //   // define data and connections
          //   // var blob = new Blob([JSON.stringify(data)]);
          //   // var url = URL.createObjectURL(blob);
          //   var xhr = new XMLHttpRequest();
          //   xhr.open("POST", "http://127.0.0.1:8080/check", true);

          //   // define new form
          //   var formData = new FormData();
          //   formData.append("rec", audioBlob, "rec.mp3");

          //   // action after uploading happens
          //   xhr.onload = function (e) {
          //     console.log("File uploading completed!");
          //   };

          //   // do the uploading
          //   console.log("File uploading started!");
          //   xhr.send(formData);
          // }
          // uploadFile();
          // const uploadfile = (file) => {
          //   console.log(file);
          //   var formm = document.createElement("form");
          //   var inp = document.createElement("input");
          //   var bt = document.createElement("button");
          //   formm.action = "/check";
          //   formm.method = "POST";
          //   formm.style.display = "none";
          //   inp.id = "rec";
          //   inp.name = "rec";
          //   inp.type = "file";
          //   inp.value = file;
          //   btn.type = "submit";
          //   formm.appendChild(inp, btn);
          //   btn.click();
          // };
          // uploadfile(audioUrl);

          // const form = new FormData();
          // form.append("recorded", audioUrl);
          // axios.post("http://127.0.0.1:8080/check", form);
          resolve({ audioBlob, audioUrl });
          // const downloadFile = (file) => {
          //   console.log(file);
          //   var element = document.createElement("a");
          //   element.href = file;
          //   element.download = "recorded.mp3";
          //   element.style.display = "none";
          //   document.body.appendChild(element);
          //   element.click();
          //   document.body.removeChild(element);
          // };
          // downloadFile(audioUrl);
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const Listening = async () => {
  var Circular_Recorder = document.getElementById("Circular-Recorder");
  var Ellipse_One = document.getElementById("Ellipse-One");
  var Ellipse_Two = document.getElementById("Ellipse-Two");
  var Ellipse_Three = document.getElementById("Ellipse-Three");
  var Rotating_Logo = document.getElementById("Rotating-Logo");
  var recorder = await recordAudio();
  recorder.start();
  if (Circular_Recorder.className == "Circular-Recorder Button") {
    Ellipse_One.classList.add("Listening");
    Ellipse_Two.classList.add("Listening");
    Ellipse_Three.classList.add("Listening");
    Rotating_Logo.classList.add("Listening");
    Circular_Recorder.classList.add("Static");
    document.getElementById("Circular-Recorder").disabled = true;
  }
  await sleep(8000);
  const audio = await recorder.stop();
  document.getElementById("Circular-Recorder").disabled = false;
  Ellipse_One.classList.remove("Listening");
  Ellipse_Two.classList.remove("Listening");
  Ellipse_Three.classList.remove("Listening");
  Rotating_Logo.classList.remove("Listening");
  Circular_Recorder.classList.remove("Static");
  await sleep(8000);
  recorder.stop();
};

const Listening2 = async () => {
  var Bar_Recorder = document.getElementById("Bar-Recorder");
  var recorder = await recordAudio();
  recorder.start();
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
  }
  await sleep(8000);
  const audio = await recorder.stop();
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
  await sleep(8000);
  recorder.stop();
};

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

function SearchPreviewExpand() {
  var SIC = document.getElementById("Searched_Items_Card");
  if (SIC.className == "Searched-Items-Card") {
    SIC.classList.add("Expanded");
  }
}

// // Validation
// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = "Form-Title";
//   var small = formControl.querySelector("small");
//   small.style.visibility = "visible";
//   small.innerText = message;
// }
// function showSucces(input) {
//   const formControl = input.parentElement;
//   formControl.className = "Form-Title";
//   var small = formControl.querySelector("small");
//   small.style.visibility = "hidden";
// }
// function getFieldName(input) {
//   return input.name;
// }

// function CheckRequired(inputArr) {
//   inputArr.forEach(function (input) {
//     if (input.value.trim() === "") {
//       showError(input, `${getFieldName(input)} is required`);
//     } else {
//       showSucces(input);
//     }
//   });
// }
// function checkLength(input, min, max) {
//   if (input.value.length < min) {
//     showError(
//       input,
//       `${getFieldName(input)} must be at least ${min} characters`
//     );
//     return false;
//   } else if (input.value.length > max) {
//     showError(
//       input,
//       `${getFieldName(input)} must be les than ${max} characters`
//     );
//     return false;
//   } else {
//     showSucces(input);
//     return true;
//   }
// }
// function checkPasswordMatch(input1, input2) {
//   if (input1.value !== input2.value) {
//     showError(input2, "Passwords do not match");
//     return false;
//   }
//   return true;
// }
// function checkEmail(input) {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showSucces(input);
//     return true;
//   } else {
//     showError(input, "Email is not valid");
//     return false;
//   }
// }
// function checkPassword(input) {
//   const re =
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/;
//   if (re.test(input.value.trim())) {
//     showSucces(input);
//     return true;
//   } else {
//     showError(input, "Password is not valid");
//     return false;
//   }
// }
// function checkUsername(input) {
//   const re = /^[a-z0-9_.]+$/;
//   if (re.test(input.value.trim())) {
//     showSucces(input);
//     return true;
//   } else {
//     showError(input, "Username is not valid");
//     return false;
//   }
// }

// $(document).on("submit", "#Signup-Form", function (e) {
//   console.log("hello");
//   e.preventDefault();
//   $.ajax({
//     type: "POST",
//     url: "/LoginSignup",
//     data: {
//       params: 1,
//     },
//     success: function (response) {
//       pass;
//     },
//   });
// });
// function Submit_SignupForm() {
//   // var SignupName = document.Signup_Form.FullName;
//   // var SignupEmail = document.Signup_Form.Email;
//   // var SignupUsername = document.Signup_Form.Username;
//   // var SignupPassword = document.Signup_Form.Password;
//   // var SignupCPassword = document.Signup_Form.CPassword;
//   // CheckRequired([
//   //   SignupName,
//   //   SignupEmail,
//   //   SignupUsername,
//   //   SignupPassword,
//   //   SignupCPassword,
//   // ]);
//   // if (
//   //   checkLength(SignupUsername, 3, 15) &&
//   //   checkUsername(SignupUsername) &&
//   //   checkLength(SignupPassword, 5, 15) &&
//   //   checkPassword(SignupPassword) &&
//   //   checkEmail(SignupEmail) &&
//   //   checkPasswordMatch(SignupPassword, SignupCPassword)
//   // ) {
//   //   console.log("Ass");
//   //   document.getElementById("Form-Btn").type = "submit";
//   // }
// }
// function Submit_SigninForm() {
//   var LoginUsername = document.Login_Form.Username;
//   var LoginPassword = document.Login_Form.Password;
//   CheckRequired([LoginUsername, LoginPassword]);
//   if (
//     checkLength(LoginUsername, 3, 15) &&
//     checkUsername(LoginUsername) &&
//     checkLength(LoginPassword, 5, 15) &&
//     checkPassword(LoginPassword)
//   ) {
//     document.getElementById("Form-Btn").type = "submit";
//   }
// }
