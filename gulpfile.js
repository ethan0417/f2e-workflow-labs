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
