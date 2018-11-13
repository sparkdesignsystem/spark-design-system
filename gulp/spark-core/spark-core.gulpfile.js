const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

gulp.task('setup-spark-core', (cb) => {
  runSequence('clean-spark-core', 'install-spark-core', 'build-spark-core', 'link-spark-core', cb);
});

gulp.task('build-spark-core', (cb) => {
  exec('cd packages/spark-core && npm run webpack', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-core', () => gulp.src(['./packages/spark-core/node_modules', './packages/spark-core/es5'], { read: false })
  .pipe(clean()));

gulp.task('install-spark-core', ['clean-spark-core'], (cb) => {
  exec('cd packages/spark-core && npm install', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('link-spark-core', (cb) => {
  exec('cd packages/spark-core && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
