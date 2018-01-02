const gulp = require('gulp');
const webserver = require('gulp-webserver');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
gulp.task('copy', () => {
    gulp.src('./App/Controller/data_format.js')
        .pipe(gulp.dest('./dist'));
});
gulp.task('minifyCss', () => {
    gulp.src('./Content/style/style.css')
        .pipe(concat('style.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./Content/style'));
});
gulp.task('server', () => {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            fillback: 'index.html'
        }));
});
gulp.task('uglify', () => {
    gulp.src('./App/Controller/data_format.js')
        .pipe(concat('data_format.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./App/Controller'));
});
gulp.task('callback', () => {
    return watch('./Controller/data_format.js', () => {
        gulp.src('./Controller/data_format.js')
            .pipe(gulp.dest('./bulid'));
    });
});
gulp.task('default', ['copy', 'minifyCss', 'server', 'uglify', 'callback']);