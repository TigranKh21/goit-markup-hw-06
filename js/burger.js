(() => {
  const refs = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    burger: document.querySelector('[data-burger]'),
  };

  refs.openBurgerBtn.addEventListener('click', toggleBurger);
  refs.closeBurgerBtn.addEventListener('click', toggleBurger);

  function toggleBurger() {
    refs.burger.classList.toggle('burger-hidden');
    refs.openBurgerBtn.classList.toggle('burger-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
