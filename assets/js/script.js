"use strict";

// Navbar toggle in mobile

const $navToggler = document.querySelector("[data-nav-toggler]");
const $navBar = document.querySelector("[data-navbar]");
const $navIcon = document.querySelector("[data-nav-toggler]");

const $header = document.querySelector("[data-header]");

$navToggler.addEventListener("click", () => {
  // Show and Hide the Navbar on Button Click
  $navBar.classList.toggle("active");
  // Changes the Icon as per the Navbar visibility
  $navIcon.classList.toggle("active");
});

// Header scroll State

window.addEventListener("scroll", (e) => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});
