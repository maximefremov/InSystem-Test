class App {

  constructor() {
    const BREAKPOINTS = {
      'XS': 576,
      'SM': 769,
      'MD': 992,
      'LG': 1220
    };
    const HEADER_OFFSET = {
      'XS': 70,
      'MD': 80,
      'LG': 90,
      'XL': 100
    };

    let windowWidth = 0;
    let isSM = false;

    const headerMenu = new HeaderMenu();
    const scrollTo = new ScrollTo();

    window.onresize = function() {
      windowWidth = this.innerWidth;

      if (windowWidth < BREAKPOINTS.XS) scrollTo.setOffset = HEADER_OFFSET.XS;
      else if (windowWidth < BREAKPOINTS.MD) scrollTo.setOffset = HEADER_OFFSET.MD;
      else if (windowWidth < BREAKPOINTS.LG) scrollTo.setOffset = HEADER_OFFSET.LG;
      else scrollTo.setOffset = HEADER_OFFSET.XL;

      if (windowWidth < BREAKPOINTS.SM) {
        isSM = false;
      }
      if (windowWidth >= BREAKPOINTS.SM) {
        if (!isSM) headerMenu.hide();
        isSM = true;
      }
    }
    window.dispatchEvent(new Event('resize'));

    this._heroAnimate();
    this._formFile();
    this._formRange();
  }

  _heroAnimate() {
    document.querySelector('.hero').classList.add('hero--animated');
  }

  _formFile() {
    const iconEl = '<i class="form__file-icon"></i>';
    const buttonEls = document.querySelectorAll('.form__file-button');
    const fileEls = document.querySelectorAll('.form__file');

    buttonEls.forEach(el => el.addEventListener('click', function(e) {
      e.preventDefault();
      el.parentNode.querySelector('.form__file').click();
    }));
    fileEls.forEach(el => el.addEventListener('change', () => {
      if (!this.files.length) return;

      const buttonEl = el.parentNode.querySelector('.form__file-button');
      buttonEl.innerHTML = iconEl + this.files[0].name;
      buttonEl.classList.add('form__file--changed');
    }));
  }

  _formRange() {
    const rangeEls = document.querySelectorAll('.form__range');
    const onInput = function(el) {
      const percentEl = el.parentNode.querySelector('.form__range-percent');
      percentEl.textContent = el.value + '%';
    };

    rangeEls.forEach((el) => {
      el.addEventListener('input', () => {
        onInput(el);
      });
      onInput(el);
    });
  }

}

window.addEventListener('load', () => {
  new App();
});
