var gulp = require('gulp');
var gutil = require('gulp-util');
var mainBowerFiles = require('gulp-main-bower-files');
var gulpDebug = require('gulp-debug');
var inject = require('gulp-inject');

var publishFolder = 'public';

 
gulp.task('index', function () {

});


gulp.task('default', function() {
  // place code for your default task here
  gutil.log('gulp started')  
});

gulp.task('publish', ['default'], function() {
   
  
  gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(gulpDebug())
    .pipe(gulp.dest(publishFolder));   

  var sources = gulp.src('**/*.css', { read: false, cwd: __dirname + '/public'} )
    .pipe(gulpDebug({title:'d'}));
 
  // copy any html files in source/ to public/
  gutil.log('moving index.html file and auto-include');
  gulp.src('index.html')
    .pipe(inject(sources))
    .pipe(gulp.dest(publishFolder));
});
