//Responsive navbar
//icon fa-bars e fa-times
const btnMenu = document.querySelector('.btn-menu');
const navMenu = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');

function openCloseMenu() {
  navMenu.classList.toggle('active');
  btnMenu.classList.toggle('active');
}

function onlyCloseMenu() {
  btnMenu.classList.remove('active');
  navMenu.classList.remove('active');
}

navItem.forEach((n) => n.addEventListener('click', onlyCloseMenu));

btnMenu.addEventListener('click', openCloseMenu);

// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
