// Elements
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');
const navLink = document.querySelectorAll('.nav-link');

// Show menu after toggle button clicked
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu after close button clicked
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Hide menu after menu item clicked
navLink.forEach(element => {
  element.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});
