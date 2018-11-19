const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

gulp.task('setup-spark-extras', (cb) => {
  runSequence('clean-spark-extras', 'install-spark-extras', 'build-spark-extras', 'link-spark-extras', cb);
});

gulp.task('build-spark-extras', (cb) => {
  exec('cd packages/spark-extras/components/highlight-board && npm run build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-extras', () => gulp.src(['./packages/spark-extras/components/highlight-board/node_modules', './packages/spark-extras/components/highight-board/es5'], { read: false })
  .pipe(clean()));

gulp.task('install-spark-extras', ['clean-spark-extras'], (cb) => {
  exec('cd packages/spark-extras/components/highlight-board && npm install', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('link-spark-extras', (cb) => {
  exec(`
    cd packages/spark-extras/components/card && npm unlink && npm link &&
    cd ../dictionary && npm unlink && npm link &&
    cd ../highlight-board && npm unlink && npm link`,
  (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
