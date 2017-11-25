let gulp = require('gulp')
let es = require('event-stream')
let htmlLint = require('gulp-html-lint')
let eslint = require('gulp-eslint')
let lesshint = require('gulp-lesshint')
let coffeelint = require('gulp-coffeelint')
let stylelint = require('gulp-stylelint')

gulp.task('htmllint', () => {
    return es.concat(
        gulp.src('./src/html/*.html')
            .pipe(htmlLint({
                htmllintrc: './.htmllintrc',
                useHtmllintrc: true
            }))
            .pipe(htmlLint.format())
            .pipe(htmlLint.failOnError())
    )
})

gulp.task('stylelint', () => {
    return es.concat(
        gulp.src('./src/css/*.css')
            .pipe(stylelint())
    )
})

gulp.task('js', () => {
    return es.concat(
        gulp.src('./src/js/*.js')
            .pipe(eslint('./.eslintrc'))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
    )
})

gulp.task('less', () => {
    return es.concat(
        gulp.src('./src/less/*.less')
            .pipe(lesshint('./.lesshintrc'))
            .pipe(lesshint.reporter())
            .pipe(lesshint.failOnError())
    )
})

gulp.task('coffee', () => {
    return es.concat(
        gulp.src('./src/coffee/*.coffee')
            .pipe(coffeelint('./coffeelint.json'))
            .pipe(coffeelint.reporter())
            .pipe(coffeelint.reporter('fail'))
    )
})
