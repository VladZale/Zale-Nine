"use strict"


// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuClick);
  });

  function onMenuClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
          const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
            if (document.body.classList.contains('lock')) {
                document.body.classList.remove('lock');
                toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
            }

          window.scrollTo({
              top: gotoBlockValue
          });
          e.preventDefault();
      }
  }
}

const menuPrevius = document.querySelectorAll('.goto[data-goto]');
if (menuPrevius.length > 0) {
    menuPrevius.forEach(menuPreviu => {
        menuPreviu.addEventListener("click", onMenuClickPreviu);
  });

  function onMenuClickPreviu(e) {
      const menuPreviu = e.target;
      if (menuPreviu.dataset.goto && document.querySelector(menuPreviu.dataset.goto)) {
          const gotoBlockPreviu = document.querySelector(menuPreviu.dataset.goto);
        //   const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
          window.scrollTo({
              top: gotoBlockPreviu
          });
          e.preventDefault();
      }
  }
}