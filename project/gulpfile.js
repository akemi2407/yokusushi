var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('nunjucks', function() {
	return gulp.src('app/pages/**/*.njk')
		// Renders template with nunjucks
		.pipe(nunjucksRender({
	    	path: ['app/templates', 'app/templates/partials']
       	}))
        // output files in app folder
	    .pipe(gulp.dest('dist'))
});

gulp.task('sass', function() { 
	return gulp.src("app/scss/main.scss") 
		.pipe(sass({ errLogToConsole: true })) 
		.pipe(concat('style.css'))
		.pipe(gulp.dest("dist/css"))});

gulp.task('default', ['sass', 'nunjucks']);