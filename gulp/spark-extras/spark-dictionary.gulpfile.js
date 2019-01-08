const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

gulp.task('setup-spark-dictionary', (cb) => {
  runSequence('link-spark-dictionary', cb);
});

gulp.task('link-spark-dictionary', (cb) => {
  exec('cd packages/spark-dictionary && npm unlink && npm link',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
});
