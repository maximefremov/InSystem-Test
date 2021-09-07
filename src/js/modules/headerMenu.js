class HeaderMenu {

  constructor() {
    // Классы
    this.menuClass = 'header__menu';
    this.menuActiveClass = this.menuClass + '--active';
    this.menuToggleClass = 'header__menu-toggle';
    this.menuToggleActiveClass = this.menuToggleClass + '--active';

    // Элементы
    this.menuEl = document.querySelector('.' + this.menuClass);
    this.menuToggleEl = document.querySelector('.' + this.menuToggleClass);

    // События
    this.menuToggleEl.addEventListener('click', ()=> {
      this.toggle(this.menuActiveClass, this.menuToggleActiveClass);
    });

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
