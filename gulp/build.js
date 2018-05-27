var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function() {
    runSequence(
                'sass',
                'html',
                'js',
                'fonts',
                'img',
                'libs'
            );
  });