const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

gulp.task('setup-spark-extras-dictionary', (cb) => {
  runSequence('link-spark-extras-dictionary', cb);
});

gulp.task('link-spark-extras-dictionary', (cb) => {
  exec('cd packages/spark-extras-dictionary && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
