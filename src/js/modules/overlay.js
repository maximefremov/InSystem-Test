class Overlay {

  constructor(hideElementsClasses) {
    // Классы
    this.overlayClass = 'overlay';
    this.overlayActiveClass = this.overlayClass + '--active';

    // Элементы
    this.bodyEl = document.getElementsByTagName('body')[0];
    this.overlayEl = document.querySelector('.' + this.overlayClass);

    // События
    this.overlayEl.addEventListener('click', ()=> {
      this.hide();

      if (hideElementsClasses.length) {
        for(let i = 0; i < hideElementsClasses.length; i++) {
          document.getElementsByClassName(hideElementsClasses[i])[0].classList.remove(hideElementsClasses[i]);
        }
      }
    });
  }

  toggle() {
    this.overlayEl.classList.toggle(this.overlayActiveClass);
    this.bodyEl.classList.toggle('fixed');
  }

  show() {

    if (!this.overlayEl.classList.contains(this.overlayActiveClass)) this.toggle();
  }

  hide() {
    if (this.overlayEl.classList.contains(this.overlayActiveClass)) this.toggle();
  }

}
