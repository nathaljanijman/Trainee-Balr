var gulp       = require('gulp');
var less       = require('gulp-less');

gulp.task('default', function() {
  gulp.src('./css/trainee.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'));
});
