(() => {
  Header.init();
  MenuToggle.init();
  Layout.init();
  document.addEventListener('click', (e) => {
    if(e.target.dataset.toggleMenu !== undefined) {
      document.querySelector('[data-menu]').classList.toggle("is-active");
    }
  })
})();
