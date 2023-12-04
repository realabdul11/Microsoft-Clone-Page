let disp = document.querySelector('.menu-btn');

function ope() {
  document.querySelector('.main-menu').classList.toggle('show');
}

disp.addEventListener('click', ope);
