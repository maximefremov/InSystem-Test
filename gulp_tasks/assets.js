// ================ Copy assets =================
module.exports = function (gulp, plugins, bs, settings) {
  return function () {
    return gulp.src(settings.development.assets_Path + '**/*.*').pipe(plugins.debug({title: 'src assets: '}))
    // Пишем файлы в Prod директорию
    .pipe(gulp.dest(settings.production.assets_Path)).pipe(plugins.debug({title: 'dest assets: '}))
  };
};
