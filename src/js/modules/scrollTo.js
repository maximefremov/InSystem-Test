class ScrollTo {

  constructor() {
    const self = this;
    this.offset = 0;

    const linksEl = document.querySelectorAll('a[href^="#"]');

    linksEl.forEach((el) => el.addEventListener('click',function (e) {
      e.preventDefault();

      let y = 0;
      const id = e.target.hash.substr(1);
      if (id) y = document.getElementById(id).getBoundingClientRect().top + window.scrollY;

      window.scroll({
        top: y - self.offset,
        behavior: 'smooth'
      });
    }))
  }

  set setOffset(offset) {
    this.offset = offset;
  }

}
