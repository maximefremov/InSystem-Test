// ================== Copy HTML =================
module.exports = function (gulp, plugins, bs, settings) {
  return function () {
    return gulp.src(settings.development.html_Path + '**/*' + settings.extHtml).pipe(plugins.debug({title: 'src html: '}))
    // Обрабатываем ошибки
    //.pipe(plugins.if(settings.isDev, plugins.plumber()))
    // Пишем файлы в Prod директорию
    .pipe(gulp.dest(settings.production.html_Path)).pipe(plugins.debug({title: 'dest html: '}))
    // Обновляем данные в браузере
    .pipe(plugins.if(settings.isDev, bs.stream()));
  };
};
