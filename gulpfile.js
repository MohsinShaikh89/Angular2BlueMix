const gulp = require('gulp');
const sysBuilder = require('systemjs-builder');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('bundle:libs', function () {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/jquery/dist/jquery.js'
      ])
        .pipe(concat('polyfill.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/lib/js'));
});

gulp.task('bundle:js', function() {
  var builder = new sysBuilder('', './systemjs.config.js');
  return builder.buildStatic('app', 'public/dist/js/app.min.js');
});