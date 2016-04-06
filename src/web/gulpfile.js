var gulp = require('gulp');
var gutil = require('gulp-util');
var mainBowerFiles = require('gulp-main-bower-files');
var plumber = require('gulp-plumber');
var gulpDebug = require('gulp-debug');

gulp.task('default', function() {
  // place code for your default task here
  gutil.log('gulp started')  
});

gulp.task('copyHtmlandCSS', ['default'], function(copyHtml) {
   
  // copy any html files in source/ to public/
  gutil.log('copying html files');
  gulp.src('*.html').pipe(gulp.dest('dist'));
  gutil.log('copying css')
  //that's nasty
  gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('dist/css'));
});

gulp.task('publish', function() {
    return gulp.src('bower_components/**/*.css')
    .pipe(gulp.dest('public'));
});

gulp.task('bower', function() {
    return gulp.src('./bower.json')
        .pipe(gulpDebug({title:'debug-src'}))
        .pipe(mainBowerFiles( ))
        .pipe(gulpDebug({title:'debug-mainBowerFiles'}))
        .pipe(gulp.dest('temp'))
        .pipe(gulpDebug({title:'dest'}));
});

gulp.task('failing', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles( ))
        .pipe(gulp.dest('temp'));
});

