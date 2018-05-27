var gulp        = require('gulp');
var cnf         = require('../package.json').config;
var clean       = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src(cnf.dist.dist, {read: false})
        .pipe(clean());
});