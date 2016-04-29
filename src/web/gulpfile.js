var gulp = require('gulp');
var gutil = require('gulp-util');
var mainBowerFiles = require('gulp-main-bower-files');
var gulpDebug = require('gulp-debug');
var inject = require('gulp-inject');

var publishFolder = 'public';

gulp.task('bower', function() {  
  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(gulpDebug({title:'mainbowerfiles'}))
    .pipe(gulp.dest(publishFolder));
});

gulp.task('injectcss', ['bower'], function() {

  var sources = gulp.src('**/*.css', { read: false, cwd: __dirname + '/public'} )
    .pipe(gulpDebug({title:'src'}));
 
  // copy any html files in source/ to public/
  gutil.log('moving index.html file and auto-include');
  return gulp.src('index.html')
    .pipe(inject(sources))
    .pipe(gulp.dest(publishFolder));
});

gulp.task('publish', ['bower','injectcss'], function() {
    gutil.log('publish started');
    return;
})
