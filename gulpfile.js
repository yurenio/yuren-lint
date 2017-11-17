let gulp = require('gulp')
let coffeelint = require('gulp-coffeelint')
let uglify = require('gulp-uglify')
let cleanCSS = require('gulp-clean-css')
let less = require('gulp-less')
let es = require('event-stream')
let lesshint = require('gulp-lesshint')
let coffee = require('gulp-coffee')

gulp.task('default', ['css', 'js'])

gulp.task('css', () => {
    return es.concat(
        gulp.src('./src/less/*.less')
            .pipe(lesshint())
            .pipe(lesshint.reporter())
            .pipe(lesshint.failOnError())
            .pipe(less())
            .pipe(cleanCSS())
            .pipe(gulp.dest('./dest/')),
    )
})

gulp.task('js', () => {
    return es.concat(
        gulp.src('./node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('./dest/')),
        gulp.src('./src/coffee/*.coffee')
            .pipe(coffeelint())
            .pipe(coffeelint.reporter('fail'))
            .pipe(coffee())
            .pipe(uglify())
            .pipe(gulp.dest('./dest/'))
    )
})
