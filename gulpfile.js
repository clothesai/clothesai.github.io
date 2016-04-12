var gulp = require('gulp'),
    concat = require('gulp-concat'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed'),
    cache = require('gulp-cached'),
    remember = require('gulp-remember');

gulp.task('default', function () {
});

gulp.task('assets', function () {
    const DEST = './master.js';
    const SRC = [
        './node_modules/es6-shim/es6-sham.js',
        './node_modules/systemjs/dist/system-polyfills.js',
        './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
        './node_modules/angular2/bundles/angular2-polyfills.js',
        './node_modules/systemjs/dist/system.js',
        './node_modules/typescript/lib/typescript.js',
        './node_modules/rxjs/Rx.js',
        './node_modules/angular2/bundles/angular2.dev.js',
        './node_modules/angular2/bundles/router.dev.js',
        './node_modules/angular2/bundles/http.dev.js'
    ];

    return gulp.src(SRC)
        // .pipe(cache('scripts'))
        // .pipe(stripDebug())
        // .pipe(cache('scripts'))
        // .pipe(uglify())
        .pipe(concat('master.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(rename('master.min.js'))
        .pipe(gulp.dest('./build/js'));
});
