const nunjucksRender  = require('gulp-nunjucks-render');
const gsass = require('gulp-sass');
const concat = require('gulp-concat');
const { series, src, dest } = require('gulp');

function nunjucks() {
    return src('app/pages/**/*.njk')
               .pipe(nunjucksRender({
                   path: ['app/templates', 'app/templates/partials']
               }))
	       .pipe(dest('dist'))
};

function sass() { 
    return src("app/scss/main.scss") 
	       .pipe(gsass({ errLogToConsole: true })) 
	       .pipe(concat('style.css'))
	       .pipe(dest("dist/css"))
};

exports.default = series(sass, nunjucks);
