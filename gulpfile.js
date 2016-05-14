/**
 * Created by Freeman on 2016/5/13.
 */
var gulp = require('gulp'),
    cleancss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

gulp.task('default',['clean'],function () {

    gulp.start('minifycss','minifyjs');
});

gulp.task('minifycss', function() {
    return gulp.src('src/css/*.css')      //压缩的文件
        .pipe(gulp.dest('dest/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cleancss({keepBreaks: false}))//执行压缩
        .pipe(gulp.dest('dest/css'));     //输出文件夹
});

gulp.task('minifyjs',function () {

    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dest/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'));
});

gulp.task('clean', function() {
    return gulp.src(['dest'], {read: false})
        .pipe(clean());
});