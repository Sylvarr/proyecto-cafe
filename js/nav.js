const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.menu-nav');

btn.addEventListener('click', function () {
  btn.classList.toggle('active');
  nav.classList.toggle('open');
});
