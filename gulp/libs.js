var gulp        = require('gulp');
var cnf         = require('../package.json').config;
var plumber     = require('gulp-plumber');
var notify      = require("gulp-notify");
var importCss   = require('gulp-import-css');
var cssnano     = require('gulp-cssnano');
var babel       = require('gulp-babel');
var include     = require("gulp-include");
var uglify      = require('gulp-uglify');

gulp.task('libs', function() {
    //gulp.src('src/css/libs.css')
    gulp.src('src/css/**/*.*')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        //.pipe(importCss())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));

    gulp.src('src/js/libs.js')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(babel())
        .pipe(include({
            extensions: "js",
            hardFail: true
        }))   
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('libs:watch', function () {
    gulp.watch('src/css/**/*.*', ['libs']);
    // следим за одним, для теста за всеми файлами в каталоге CSS
    //gulp.watch('src/css/libs.css', ['libs']);
    gulp.watch('src/js/libs.js', ['libs']);
});