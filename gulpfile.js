var gulp       = require('gulp');
var lessImport = require('gulp-less-import');
var less       = require('gulp-less');
var uglifycss  = require('gulp-uglifycss');

gulp.task('default', function() {
  gulp.src('./styles/css/*.less')
    .pipe(lessImport('trainee.less'))
    .pipe(less())
    .pipe(uglifycss())
    .pipe(gulp.dest('./styles/css'));
});
