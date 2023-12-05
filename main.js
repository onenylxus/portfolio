// Elements
const header = document.querySelector('.header');
const navMenu = document.querySelector('.nav-menu');
const navThemeChanger = document.querySelector('.nav-theme-changer');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');
const navLink = document.querySelectorAll('.nav-link');
const contributions = document.querySelector('.contributions');
const publicProjects = document.querySelector('.public-projects');
const followers = document.querySelector('.followers');
const skillsHeader = document.querySelectorAll('.skills-header');
const skillsContent = document.querySelectorAll('.skills-content');
const scrollup = document.querySelector('.scrollup');

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

// Fill in dynamic data in about section
(async () => {
  // Format number function
  const formatNumber = (value) => {
    value = +value;
    let p = 10 ** (Math.floor(Math.log10(value)) - 1);
    return value < 10 ? `${value}` : `${Math.floor(Math.floor(value / p) / 5) * 5 * p}+`;
  };

  // Get data from API sources
  const data1 = await (await fetch('https://github-contributions-api.deno.dev/onenylxus.json')).json();
  const data2 = await (await fetch('https://api.github.com/users/onenylxus')).json();

  // Apply values to about information
  contributions.innerHTML = formatNumber(data1.totalContributions);
  publicProjects.innerHTML = formatNumber(data2.public_repos);
  followers.innerHTML = formatNumber(data2.followers);
})();

// Toggle skills
skillsHeader.forEach((header) => header.addEventListener('click', () => {
  skillsContent.forEach((content) => {
    content.className = 'skills-content skills-close';
  });
  if (header.parentNode.className === 'skills-content skills-close') {
    header.parentNode.className = 'skills-content skills-open';
  }
}));

// Set up swiper
const swiper = new Swiper('.projects-container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// Show and hide scroll header
window.addEventListener('scroll', () => {
  header.classList[window.scrollY >= 80 ? 'add': 'remove']('scroll-header');
});

// Show and hide scroll up button
window.addEventListener('scroll', () => {
  scrollup.classList[window.scrollY >= 600 ? 'add' : 'remove']('show-scrollup');
});

// Change theme mode
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  document.body.classList[storedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
  navThemeChanger.classList[storedTheme === 'dark' ? 'add' : 'remove']('uil-sun');
}

navThemeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  navThemeChanger.classList.toggle('uil-sun');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});
