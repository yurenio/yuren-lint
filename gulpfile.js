let gulp = require('gulp')
let es = require('event-stream')
let htmlLint = require('gulp-html-lint')
let csslint = require('gulp-csslint')
let eslint = require('gulp-eslint')
let lesshint = require('gulp-lesshint')
let coffeelint = require('gulp-coffeelint')

gulp.task('htmllint', () => {
    return es.concat(
        gulp.src('**/*.html')
            .pipe(htmlLint({
                htmllintrc: './.htmllintrc',
                useHtmllintrc: true
            }))
            .pipe(htmlLint.format())
            .pipe(htmlLint.failOnError())
    )
})

gulp.task('css', () => {
    return es.concat(
        gulp.src('**/*.css')
            .pipe(csslint('./csslintrc.json'))
            .pipe(csslint.formatter()),
        gulp.src('**/*.css')
            .pipe(csslint('./csslintrc.json'))
            .pipe(csslint.failFormatter())
    )
})

gulp.task('js', () => {
    return es.concat(
        gulp.src('**/*.js')
            .pipe(eslint('./.eslintrc'))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
    )
})

gulp.task('less', () => {
    return es.concat(
        gulp.src('**/*.less')
            .pipe(lesshint('./.lesshintrc'))
            .pipe(lesshint.reporter())
            .pipe(lesshint.failOnError())
    )
})

gulp.task('coffee', () => {
    return es.concat(
        gulp.src('**/*.coffee')
            .pipe(coffeelint('./coffeelint.json'))
            .pipe(coffeelint.reporter())
            .pipe(coffeelint.reporter('fail'))
    )
})
