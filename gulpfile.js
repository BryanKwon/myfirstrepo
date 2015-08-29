var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass');

// Scripts Task
// Uglifies
gulp.task('scripts', function() {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('minjs'));
});

// Styles Task
// Uglifies
gulp.task('styles', function() {
	gulp.src('scss/*.scss')
		.pipe(sass({
			style: 'compressed'
		}))
		.pipe(gulp.dest('css/'));
});

// Watch Task
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
