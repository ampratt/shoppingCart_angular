var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver');

gulp.task('js', function() {
    gulp.src('app/**/*.js');
});

gulp.task('html', function() {
    gulp.src('*.html');
    gulp.src('app/**/*.html');
});

gulp.task('css', function() {
    gulp.src('assets/css/*.css');
});

gulp.task('watch', function() {
    gulp.watch('app/**/*', ['js']);
    gulp.watch('app/css/*.css', ['css']);
    gulp.watch(['*.html',
      'app/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
    gulp.src('.')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);