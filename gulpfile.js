
/*
*Dependencias
*/

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	ts = require('gulp-typescript');

/*
* Configuracion de la tarea 'demo'
*/

gulp.task( 'ts', function () {
	gulp.src('js/source/*.ts')
	.pipe(ts({
		noImplicitAny: true,
		out: 'program.js'
	}))
	.pipe(gulp.dest('js/build'));
});

gulp.task('default', function (){
	gulp.watch('js/source/*.ts', ['ts'])
})

/*

gulp.task('js', function () {
	gulp.src('js/source/*.js')
	.pipe(concat('todo.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js/build/'))
});

gulp.task('sass', function() {
 gulp.src('css/source/*.scss')
 .pipe(sass())
 .pipe(gulp.dest('css/min/'))
});

gulp.task('js', ['sass'], function() {
	console.log('js');
});

gulp.task('watch', function () {
	gulp.watch('js/source/*.js', ['js']);
	gulp.watch('css/source/*.scss', ['sass']);
});

gulp.task('default', ['watch']);

*/
