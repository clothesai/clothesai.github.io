var gulp = require('gulp');
var stripDebug = require('gulp-strip-debug');

gulp.task('default', function () {
});

gulp.task('assets', function () {
    gulp.src([
            'node_modules/es6-shim/es6-sham.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.js',
            'node_modules/typescript/lib/typescript.js',
            'node_modules/rxjs/Rx.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/router.dev.js',
            'node_modules/angular2/bundles/http.dev.js'
        ])
        .pipe(concat('public/master.min.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});
