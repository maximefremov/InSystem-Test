class FormEls {

  constructor() {
    this._formFile();
    this._formRange();
    this._formSelect();
  }

  _formFile() {
    const formFileClass = 'form__file';
    const formFileChangedClass = formFileClass + '--changed';
    const formFileButtonClass = formFileClass + '-button';

    const iconHtmlEl = '<i class="form__file-icon"></i>';
    const fileEls = document.querySelectorAll('.' + formFileClass);
    const buttonEls = document.querySelectorAll('.' + formFileButtonClass);

    buttonEls.forEach(el => el.addEventListener('click', function(e) {
      e.preventDefault();
      el.parentNode.querySelector('.' + formFileClass).click();
    }));
    fileEls.forEach(el => el.addEventListener('change', function() {
      if (!this.files.length) return;

      const buttonEl = el.parentNode.querySelector('.' + formFileButtonClass);
      buttonEl.innerHTML = iconHtmlEl + this.files[0].name;
      buttonEl.classList.add(formFileChangedClass);
    }));
  }

  _formRange() {
    const formRangeClass = 'form__range';
    const formRangePercentClass = formRangeClass + '-percent';

    const rangeEls = document.querySelectorAll('.' + formRangeClass);
    const onInput = el => {
      const percentEl = el.parentNode.querySelector('.' + formRangePercentClass);
      percentEl.textContent = el.value + '%';
    };

    rangeEls.forEach(el => {
      el.addEventListener('input', () => {
        onInput(el);
      });
      onInput(el);
    });
  }

  _formSelect() {
    const formSelectClass = 'form__select';

    customSelect('.' + formSelectClass, {
      containerClass: formSelectClass + '-container',
      openerClass: formSelectClass + '-opener',
      panelWrapperClass: formSelectClass + '-panel-wrapper',
      panelClass: formSelectClass + '-panel',
      optionClass: formSelectClass + '-item',
      isSelectedClass: formSelectClass + '-item--selected',
      hasFocusClass: formSelectClass + '-item--focus',
      isOpenClass: formSelectClass + '--open'
    });
  }

}
