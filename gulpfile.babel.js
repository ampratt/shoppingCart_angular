var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
 
gulp.task('js', function() {
    gulp.src('app/**/*.js')
        // .pipe(print())                           // #2. print each file in the stream
        .pipe(babel({ presets: ['es2015'] }))    // #3. transpile ES2015 to ES5 using ES2015 preset
        .pipe(gulp.dest('builds'));               // #4. copy the results to the build folder
});

gulp.task('html', function() {
    gulp.src('*.html');
    gulp.src('app/**/*.html');
});

gulp.task('css', function() {
    gulp.src('assets/css/*.css');
});

gulp.task('sass', function () {
    gulp.src('assets/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('builds/css'));
});


gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['js']);
    // gulp.watch('app/css/*.css', ['css']);
    gulp.watch('assets/css/**/*.scss', ['sass']);
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

gulp.task('default', ['watch', 'html', 'js', 'sass', 'webserver']);