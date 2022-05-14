let navBtn = document.getElementById("nav-btn");
let header = document.getElementById("nav");
let closeIcon = document.getElementById("close-icon");
let submitBtn = document.getElementById("submitBtn");
let input = document.getElementById("inputName");
let inputMail = document.getElementById("inputEmail");
let inputs = document.querySelectorAll(".input");
let textarea = document.getElementById("textarea");

navBtn.onclick = function () {
  navBtn.classList.add("hide");
  let menu = document.getElementById("menu");
  menu.classList.remove("hide");
  header.style.margin = 0;
  header.style.padding = 0;
};

closeIcon.onclick = function () {
  menu.classList.add("hide");
  navBtn.classList.remove("hide");
  header.style.padding = "3rem";
};

function isValid() {
  let inputName = document.getElementById("inputName").value;
  let inputEmail = document.getElementById("inputEmail").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let valid = true;
  if (!inputName || inputName === "Please enter your name") {
    input.value = "Please enter your name";
    input.style.color = "#bb2525";
    valid = false;
  }
  if (!inputEmail.match(mailformat)) {
    inputMail.value = "Please enter valid email";
    inputMail.style.color = "#bb2525";
    valid = false;
  }
  if (!inputEmail || inputEmail === "Please enter your email") {
    inputMail.value = "Please enter your email";
    inputMail.style.color = "#bb2525";
    valid = false;
  }
  if (!textarea.value || textarea.value === "Please enter your message") {
    textarea.innerText = "Please enter your message";
    textarea.style.color = "#bb2525";
    valid = false;
  }
  return valid;
}

submitBtn.onclick = function () {
  if (isValid()) {
    alert("your message was successfully sent");
  }
};

inputs.forEach(function (item) {
  item.addEventListener("click", function () {
    item.style.color = "#102a42";
    item.value = "";
  });
});
textarea.onclick = function () {
  textarea.style.color = "#102a42";
};
