function DisplayUserEdit() {
  console.log("Apple");
  var usernameedit = document.getElementById("UsernameEditForm");
  if (usernameedit.className == "UserNameEdit") {
    usernameedit.classList.add("Hidden");
  } else {
    usernameedit.classList.remove("Hidden");
  }
}
