// ================ Babel > JS ==================
module.exports = function (gulp, plugins, bs, settings) {
  return function () {
    return gulp.src(settings.development.js_Path + '**/!(_)*' + settings.extJs).pipe(plugins.debug({title: 'src js: '}))
    // Обрабатываем ошибки
    .pipe(plugins.if(settings.isDev, plugins.plumber()))
    // Инициализируем Sourcemap (для Dev режима)
    .pipe(plugins.if(settings.isDev, plugins.sourcemaps.init()))
    // Babel
    .pipe(plugins.babel({
      presets: ['@babel/env']
    })).pipe(plugins.debug({title: 'babel: '}))
    // Добавляем суффикс
    .pipe(plugins.rename({ suffix: '.min' }))
    // Пишем на диск Sourcemap (для Dev режима)
    .pipe(plugins.if(settings.isDev, plugins.sourcemaps.write('.'))).pipe(plugins.if(settings.isDev, plugins.debug({title: 'sourcemaps: '})))
    // Пишем файлы в Prod директорию
    .pipe(gulp.dest(settings.production.js_Path)).pipe(plugins.debug({title: 'dest js: '}))
    // Обновляем данные в браузере
    .pipe(plugins.if(settings.isDev, bs.stream()));
  };
};
