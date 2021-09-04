// ============== Copy CSS Npm Libs =============
module.exports = function (gulp, plugins, bs, settings) {
  return function (cb) {
    if (!settings.cssVendors.length) { cb(); return; }
    return gulp.src(settings.cssVendors).pipe(plugins.debug({title: 'src cssVendor: '}))
    // Пишем файлы в Prod директорию
    .pipe(gulp.dest(settings.production.css_Path)).pipe(plugins.debug({title: 'dest cssVendor: '}))
  };
};
