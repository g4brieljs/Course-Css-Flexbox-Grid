const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', () => {
    gulp.src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }) )
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('css'));
});


gulp.task('watch', ['sass'], () => {
    gulp.watch(["scss/*.scss"], ['sass']);
});