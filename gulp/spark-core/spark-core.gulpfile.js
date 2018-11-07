const gulp = require('gulp');
const exec = require('child_process').exec;
const clean = require('gulp-clean');

gulp.task('build-spark-core', (cb) => {
  exec('cd packages/spark-core && $(npm bin)/webpack', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-core', () => gulp.src(['./packages/spark-core/node_modules'], { read: false })
  .pipe(clean()));

gulp.task('install-spark-core', (cb) => {
  exec('cd packages/spark-core && rm -rf node_modules && npm install', (err, stdout, stderr) => {
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
