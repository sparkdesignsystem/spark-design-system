const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

gulp.task('setup-spark-highlight-board', (cb) => {
  runSequence('link-spark-highlight-board', cb);
});

gulp.task('build-spark-highlight-board', (cb) => {
  exec('cd packages/spark-highlight-board && npm run build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-highlight-board', () => gulp.src(['./packages/spark-highlight-board/node_modules', './packages/spark-highight-board/es5'], { read: false })
  .pipe(clean()));

gulp.task('install-spark-highlight-board', ['clean-spark-extras'], (cb) => {
  exec('cd packages/spark-highlight-board && npm install', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('link-spark-highlight-board', (cb) => {
  exec('cd packages/spark-highlight-board && npm unlink && npm link',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
});
