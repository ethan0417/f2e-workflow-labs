var gulp = require('gulp');
var del = require('del');

gulp.task('default',['mystask1', 'mystask2'], function(){
  console.log('my default task');
});

gulp.task('mystask1', function(cb){
  console.log('task 1');
  cb();
})

gulp.task('mystask2', function(cb){
  console.log('task 2');
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
    .pipe(gulp.dest('output1'));
});

// 這個dest出來的目錄，會從 assets/vendor 以下開始輸出到output2
gulp.task('output2', function(){
  gulp.src('./assets/vendor/bootstrap/**/*.js', {base:'assets/vendor'})
    .pipe(gulp.dest('output2'));
});
// src 可以讀取陣列，所以變成陣列就可以取得 js 和 css
gulp.task('output3', function(){
  gulp.src(['./assets/vendor/**/*.js', './assets/vendor/**/*.css'], {base:'assets/vendor'})
    .pipe(gulp.dest('output3'));
});

// clean files
gulp.task('clean', function(){
  del(['output2/bootstrap/**', '!output2/bootstrap']);
});

// first clean output2 and create output2
gulp.task('cleanAndCreate', ['clean_output2'], function(){
  gulp.src('./assets/vendor/bootstrap/**/*.js', {base:'assets/vendor'})
    .pipe(gulp.dest('cleanAndCreate'));
})
gulp.task('clean_output2', function(cb){
  del(['output2/bootstrap/**', '!output2/bootstrap'])
    .then(function(paths){
      console.log('del done.')
      // console.log('Deleted files/folders:\n', paths.join('\n'));
      cb();
    });
    // .then(function(){
    //   console.log('ddd')
    //   cb();
    // })
});

// Add watch function
gulp.task('watch', function(){
  gulp.watch(['./app/**/*.js'], ['cleanAndCreate']);
});



