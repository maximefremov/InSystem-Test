class App {

  constructor() {
    const self = this;
    const BREAKPOINTS = {
      'XS': 576,
      'SM': 769,
      'MD': 992,
      'LG': 1220
    };
    const HEADER_OFFSET = {
      'XS': 70,
      'SM': 80,
      'MD': 90,
      'LG': 100
    };

    let windowWidth = 0;
    let isSM = false;

    const headerMenu = new HeaderMenu();
    const scrollTo = new ScrollTo();

    // Resize event
    window.onresize = function() {
      windowWidth = this.innerWidth;

      if (windowWidth <= BREAKPOINTS.XS) {
        scrollTo.setOffset = HEADER_OFFSET.XS;
      }
      if (windowWidth <= BREAKPOINTS.SM) {
        isSM = false;
      }
      if (windowWidth >= BREAKPOINTS.SM) {
        scrollTo.setOffset = HEADER_OFFSET.SM;

        if (!isSM) headerMenu.hide();
        isSM = true;
      }
      if (windowWidth >= BREAKPOINTS.MD) {
        scrollTo.setOffset = HEADER_OFFSET.MD;
      }
      if (windowWidth >= BREAKPOINTS.LG) {
        scrollTo.setOffset = HEADER_OFFSET.LG;
      }
    }
    window.dispatchEvent(new Event('resize'));
  }

}

window.addEventListener('DOMContentLoaded', function() {
  new App();
});
