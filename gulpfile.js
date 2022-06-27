var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cssDest = 'style';
var cssInput = 'source/style.scss';
var watchedFiles = 'source/**/*.scss';
var stylesheet_path = 'source/**/*.scss';
var stylesheet = 'source/**/*.css';

gulp.task('buildcss', function(){
	return gulp.src(cssInput)
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(gulp.dest(cssDest));
}); 
gulp.task('watch', function (done) {
	gulp.watch([
		stylesheet_path,
		stylesheet,		
	], gulp.task('buildcss') );
	done();
});
 