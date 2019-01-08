const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

gulp.task('setup-spark-card', (cb) => {
  runSequence('link-spark-card', cb);
});

gulp.task('link-spark-card', (cb) => {
  exec('cd packages/spark-card && npm unlink && npm link',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
});
