const gulp = require('gulp')
const babel = require('gulp-babel')
const livereload = require('gulp-livereload')

// Compile From ES6 to CommonJS
gulp.task('scripts', () => {
  return gulp.src(['./src/**/*.js'])
    .pipe(babel({
        presets: ['react', 'es2015', 'stage-0']
    }))
    .pipe(gulp.dest('./build'))
    .pipe(livereload())
});

// Watch Files For Changes
gulp.task('watch', function() {
  livereload.listen()
  gulp.run(['scripts'])
  gulp.watch('./src/**/*.js', ['scripts'])
})

gulp.task('default', ['watch'])
