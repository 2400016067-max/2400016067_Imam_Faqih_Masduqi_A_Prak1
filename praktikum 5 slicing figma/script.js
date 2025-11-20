const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

menuBtn.addEventListener('click', () => {
  // Toggle menu visibility
  const isHidden = mobileMenu.classList.toggle('hidden');

  // Update aria-expanded state
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));

  // Toggle icons
  menuOpenIcon.classList.toggle('hidden');
  menuCloseIcon.classList.toggle('hidden');
});
