var gulp = require('gulp');
var gutil = require('gulp-util');
var mainBowerFiles = require('gulp-main-bower-files');
var gulpDebug = require('gulp-debug');

var publishFolder = 'public';
var libsFolder = 'libs';


gulp.task('default', function() {
  // place code for your default task here
  gutil.log('gulp started')  
});

gulp.task('publish', ['default'], function() {
   
  // copy any html files in source/ to public/
  gutil.log('copying html files');
  gulp.src('*.html').pipe(gulp.dest(publishFolder));  
  
  gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(gulpDebug({title:'debug-mainBowerFiles'}))
    .pipe(gulp.dest(publishFolder))
    .pipe(gulpDebug({title:publishFolder}));  
});
