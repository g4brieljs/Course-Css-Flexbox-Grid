const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      autoprefixer = require('gulp-autoprefixer');

// ### gulp.task is out version ###
// ### gup 4 version is function ###

// Compile scss into css 
function app(){
    //1. Where is my scss file
    return gulp.src('./scss/**/*.scss')
    // add autoprefixer
    .pipe(autoprefixer())
    //2.  pass that file through sass compiler
    .pipe(sass())
    //3. where do i save the compiled css?
    .pipe(gulp.dest('./css'))
    //4. Stream changes to all browser
    .pipe(browserSync.stream());
    
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', app);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.app = app;
exports.watch = watch;