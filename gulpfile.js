var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var riotify    = require('riotify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('browserify', function(){
  gulp.src('src/js/main.js')
  .pipe(browserify({transform: 'riotify'}))
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/'))
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});