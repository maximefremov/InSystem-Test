class HeaderMenu {

  constructor() {
    // Классы
    this.menuClass = 'header__menu';
    this.menuActiveClass = this.menuClass + '--active';
    this.menuToggleClass = 'header__menu_toggle';
    this.menuToggleActiveClass = this.menuToggleClass + '--active';

    // Элементы
    this.menuEl = document.querySelector('.' + this.menuClass);
    this.menuToggleEl = document.querySelector('.' + this.menuToggleClass);

    // События
    this.menuToggleEl.addEventListener('click', ()=> {
      this._toggle(this.menuActiveClass, this.menuToggleActiveClass);
    });
  }

  _toggle() {
    this.menuEl.classList.toggle(this.menuActiveClass);
    this.menuToggleEl.classList.toggle(this.menuToggleActiveClass);
  }

  hide() {
    if (this.menuEl.classList.contains(this.menuActiveClass)) this._toggle()
  }

}
