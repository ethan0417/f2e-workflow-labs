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