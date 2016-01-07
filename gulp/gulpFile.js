var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	conCat = require('gulp-concat'),
	jsMinify = require('gulp-minify'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass');

var jsSources = [
	'../js/funcs.js',
	'../js/conversion.js'
	];

gulp.task('minify-css', function() {
  return gulp.src('../css/style.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('../css/min'));
});

gulp.task('jsConcat', function(){
	gulp.src(jsSources)
		.pipe(conCat('script.js'))
		.pipe(gulp.dest('../js'))
});

gulp.task('minify-js', function(){
	gulp.src('../js/script.js')
		.pipe(gulp.dest('../js'))
});

gulp.task('sass', function () {
  gulp.src('../css/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../css'));
});