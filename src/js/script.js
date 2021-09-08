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
  }

  _heroAnimate() {
    document.querySelector('.hero').classList.add('hero--animated');
  }

}

window.addEventListener('DOMContentLoaded', function() {
  new App();
});
