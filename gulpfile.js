const gulp = require('gulp'),
      plugins = require('gulp-load-plugins')(),
      del = require('del'),
      bs = require('browser-sync').create();

// Настройки
class Settings {

  constructor() {
    // Флаги разработки
    this.isDev = false;

    // Расширения
    this.extHtml = '.html';
    this.extCss = '.scss';
    this.extJs = '.js';

    // Структура Development директорий
    this.development_Path = './src/';
    this.development = {
      html_Path:          this.development_Path + 'html/',
      css_Path:           this.development_Path + 'scss/',
      js_Path:            this.development_Path + 'js/',
      assets_Path:        this.development_Path + 'assets/'
    };
    // Структура Production директорий
    this.production_Path = './docs/';
    this.production = {
      html_Path:          this.production_Path + '',
      css_Path:           this.production_Path + 'css/',
      js_Path:            this.production_Path + 'js/',
      assets_Path:        this.production_Path + 'assets/'
    };

    this.cssVendors = [];
    this.jsVendors = ['src/vendors/js/custom-select/build/custom-select.min.js'];
  }

}

const settings = new Settings();
function getTask(task) {
  return require('./gulp_tasks/' + task)(gulp, plugins, bs, settings);
}


// ================== Copy HTML =================
gulp.task('_html', getTask('html'));
// ============== Copy CSS Vendor ===============
gulp.task('_cssVendor', getTask('css_vendor'));
// ================ Sass > Css ==================
gulp.task('_css', getTask('css'));
// ============== Copy JS Vendor ================
gulp.task('_jsVendor', getTask('js_vendor'));
// ================= Copy JS ====================
gulp.task('_js', getTask('js'));
// ================ Copy assets =================
gulp.task('_assets', getTask('assets'));


// Очистка Production дирректории
gulp.task('Clean', function () {
  return del(settings.production_Path + '**/*');
});

// Сборка проекта
gulp.task('Build',
  gulp.series('Clean',
    gulp.parallel('_html', '_assets'),
    gulp.parallel('_css', '_cssVendor'),
    gulp.parallel('_js', '_jsVendor')
  ));

// Watcher
gulp.task('Watch', function () {
  settings.isDev = true;

  bs.init({
    server: {
      baseDir: settings.production_Path
    },
    browser: (process.platform == 'darwin') ? 'google chrome' : 'chrome.exe',
    cors: true,
    reloadOnRestart: true,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    }
  });

  // Theme Wathers
  gulp.watch(settings.development.html_Path + '**/*' + settings.extHtml, gulp.series('_html'));
  gulp.watch(settings.development.css_Path + '**/*' + settings.extCss, gulp.series('_css'));
  gulp.watch(settings.development.js_Path + '**/*' + settings.extJs, gulp.series('_js'));
});

// Сборка проекта + Watcher
gulp.task('Watch_Build', gulp.series('Build', 'Watch'));
