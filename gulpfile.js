var gulp = require('gulp');

gulp.task('default',['mystask1', 'mystask2'], function(){
  console.log('my default task')
});

gulp.task('mystask1', function(cb){
  console.log('task 1')
  cb();
})

gulp.task('mystask2', function(cb){
  console.log('task 2')
  cb();
})

/**
 *  請依序執行 mytask2, mytask1, default 工作
 */
// gulp.task('default',['mystask1'], function(){
//   console.log('my default task')
// });

// gulp.task('mystask1', ['mystask2'], function(cb){
//   console.log('task 1')
//   cb();
// })

// gulp.task('mystask2', function(cb){
//   console.log('task 2')
//   cb();
// })

// 這個dest出來的目錄，會從bootstrap以下開始輸出到output1
gulp.task('output1', function(){
  gulp.src('./assets/vendor/bootstrap/**/*.js')
    .pipe(gulp.dest('output1'))
})

// 這個dest出來的目錄，會從 assets/vendor 以下開始輸出到output2
gulp.task('output2', function(){
  gulp.src('./assets/vendor/bootstrap/**/*.js', {base:'assets/vendor'})
    .pipe(gulp.dest('output2'))
})