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
            // LessLint
            .pipe(lesshint('./.lesshintrc')) // 使用 `.lesshintrc` 文件的配置
            .pipe(lesshint.reporter())
            .pipe(lesshint.failOnError()) // 出现 Error 时中断 Gulp Task
            // Less to CSS
            .pipe(less())
            // minify CSS
            .pipe(cleanCSS())
            .pipe(gulp.dest('./dest/')),
    )
})

gulp.task('js', () => {
    return es.concat(
        gulp.src('./node_modules/jquery/dist/jquery.js')
            .pipe(gulp.dest('./dest/')),
        gulp.src('./src/coffee/*.coffee')
            // CoffeeLint
            .pipe(coffeelint())
            .pipe(coffeelint.reporter('fail')) // 出现 Fail 时中断 Gulp Task
            // CoffeeScript to JavaScript
            .pipe(coffee())
            // Uglify JS
            .pipe(uglify())
            .pipe(gulp.dest('./dest/'))
    )
})
