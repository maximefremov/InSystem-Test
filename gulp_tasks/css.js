// ================ Sass > Css ==================
const sass = require('gulp-sass')(require('sass'));

module.exports = function(gulp, plugins, bs, settings) {
  return function () {
    return gulp.src(settings.development.css_Path + '**/!(_)*' + settings.extCss).pipe(plugins.debug({title: 'src sass: '}))
    // Обрабатываем ошибки
    //.pipe(plugins.if(settings.isDev, plugins.plumber()))
    // Инициализируем Sourcemap (для Dev режима)
    .pipe(plugins.if(settings.isDev, plugins.sourcemaps.init()))
    // Компилируем Sass в Css
    .pipe(sass.sync({
      outputStyle: function() { return (settings.isDev) ? null : 'compressed'}()
    })).pipe(plugins.debug({title: 'sass: '}))
    // Добавляем вендорные префиксы
    .pipe(plugins.autoprefixer({cascade: false})).pipe(plugins.debug({title: 'autoprefixer: '}))
    // Добавляем суффикс
    .pipe(plugins.rename({suffix: '.min'}))
    // Пишем на диск Sourcemap (для Dev режима)
    .pipe(plugins.if(settings.isDev, plugins.sourcemaps.write('.'))).pipe(plugins.if(settings.isDev, plugins.debug({title: 'sourcemaps: '})))
    // Пишем файлы в Prod директорию
    .pipe(gulp.dest(settings.production.css_Path)).pipe(plugins.debug({title: 'dest css: '}))
    // Обновляем данные в браузере
    .pipe(plugins.if(settings.isDev, bs.stream()));
  };
};
