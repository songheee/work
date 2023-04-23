
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
// const connect = require('gulp-connect');
// const webserver = require('gulp-webserver');


/*===========================*/
/*  html파일 인클루드         */
/*===========================*/
gulp.task('fileinclude', async function () {
gulp.src(['**/*.html'])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('../dist'));
});

/*===========================*/
/*  html파일 변경 감지        */
/*===========================*/
gulp.task('include:watch', function () {
    gulp.watch('**/*.html', gulp.series('fileinclude'));
    return
})

/*===========================*/
/*  compile scss into css    */
/*===========================*/
gulp.task('sass', function(){
    return gulp.src('../css_dev/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../css')) //해당 task의 결과물이 저장될 경로 지정
        .pipe(browserSync.reload({stream: true}));
});

/*===========================*/
/*  scss 파일 변경 감지       */
/*===========================*/
gulp.task('sass:watch', function(){
    gulp.watch('../css_dev/**/*.scss', gulp.series('sass'));
});

/*===========================*/
/*  liveserver               */
/*===========================*/
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "../", // 서버에 띄울 폴더 위치 지정 (베이스디렉토리)
            directory: true
        }
    });
    gulp.watch("page/**/*.html").on("change", browserSync.reload);
    // page 안의 파일들을 감시하고 있다가, 내용이 변동되면 재실행
});
gulp.task( "browser:watch", gulp.series("browserSync") );


/*===========================*/
/*  gulp watch               */
/*===========================*/
gulp.task(
    "default",
    gulp.parallel("include:watch", "browser:watch" , "sass:watch")
);




/* =========================================================================== */
// gulp 서버
// gulp.task('connect', function(){
//     connect.server({
//         root: '../',
//         livereload: true,
//         port: 8001
//     });
// });

// gulp.task('html', function(){
//     gulp.src('**/*.html')
//     .pipe(connect.reload());
// });

// gulp.task('watch', function(){
//     gulp.watch('**/*.html', gulp.series('fileinclude')); // html 리로드
//     gulp.watch('../css_dev/**/*.scss', gulp.series('sass')); // sass 자동 컴파일
// });

// gulp.task('default', gulp.parallel('connect', 'watch'));

// gulp 서버2
// gulp.task('webserver', function(){
//     gulp.src('../')
//     .pipe(webserver({
//         livereload: true,
//         open: true,
//         port: 8888
//     }));
// });
// gulp.task('default2', gulp.parallel('webserver'));\
/* =========================================================================== */