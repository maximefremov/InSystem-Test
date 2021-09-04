// =============== Copy JS Npm Libs =============
module.exports = function (gulp, plugins, bs, settings) {
  return function (cb) {
    if (!settings.jsVendors.length) { cb(); return; }
    return gulp.src(settings.jsVendors).pipe(plugins.debug({title: 'src jsVendor: '}))
    // Пишем файлы в Prod директорию
    .pipe(gulp.dest(settings.production.js_Path)).pipe(plugins.debug({title: 'dest jsVendor: '}))
  };
};
