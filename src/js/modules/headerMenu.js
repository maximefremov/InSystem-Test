class HeaderMenu {

  constructor() {
    // Классы
    this.menuClass = 'header__menu';
    this.menuActiveClass = this.menuClass + '--active';
    this.menuToggleClass = 'header__menu-toggle';
    this.menuToggleActiveClass = this.menuToggleClass + '--active';
    this.menuItemClass = 'header__menu-item';

    // Элементы
    this.menuEl = document.querySelector('.' + this.menuClass);
    this.menuItemsEl = document.querySelectorAll('.' + this.menuItemClass);
    this.menuToggleEl = document.querySelector('.' + this.menuToggleClass);

    // События
    this.menuToggleEl.addEventListener('click', () => {
      this.toggle(this.menuActiveClass, this.menuToggleActiveClass);
    });
    this.menuItemsEl.forEach(el => el.addEventListener('click', () => {
      this.hide();
    }));

    // Overlay init
    this.overlay = new Overlay([this.menuActiveClass, this.menuToggleActiveClass]);
  }

  toggle() {
    this.menuEl.classList.toggle(this.menuActiveClass);
    this.menuToggleEl.classList.toggle(this.menuToggleActiveClass);
    this.overlay.toggle();
  }

  show() {
    if (!this.menuEl.classList.contains(this.menuActiveClass)) this.toggle();
  }

  hide() {
    if (this.menuEl.classList.contains(this.menuActiveClass)) this.toggle();
  }

}
