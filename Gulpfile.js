/**
*This is the default Gulpfile
*it contains all needed tasks
*/

var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	cssmin  = require('gulp-cssmin'),
	rename 	= require('gulp-rename'),
	coffee  = require('gulp-coffee'),
	uglify  = require('gulp-uglify'),
	clean 	= require('gulp-clean');

gulp.task('watch', function() {
	gulp.watch('./src/**/*.coffee', ['coffee', 'compress', 'clean']);
});

gulp.task('coffee',function() {
  return gulp.src('./src/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./dist/tmp'))
});

gulp.task('compress',['coffee'],function() {
  return gulp.src('./dist/tmp/**/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
});

gulp.task('clean', ['coffee', 'compress'] ,function() {
	 return gulp.src('./dist/tmp/**/*.js')
        .pipe(clean({force: true, read: false}))
        .pipe(gulp.dest('dist'));
    });
gulp.task('default', ['coffee', 'compress', 'clean' ,'watch']);
