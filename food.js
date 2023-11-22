const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form-close"),
loginBtn = document.querySelector(".form-close"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () =>home.classList.add("show"))
formCloseBtn.addEventListener("click", () =>home.classList.remove("show"))