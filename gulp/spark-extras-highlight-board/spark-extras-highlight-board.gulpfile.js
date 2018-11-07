const gulp = require('gulp');
const exec = require('child_process').exec;
const clean = require('gulp-clean');

gulp.task('build-spark-extras-highlight-board', (cb) => {
  exec('cd packages/spark-extras-highlight-board && $(npm bin)/webpack', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-extras-highlight-board', () => gulp.src(['./packages/spark-extras-highlight-board/node_modules', './packages/spark-extras-highlight-board/es5'], { read: false })
  .pipe(clean()));

gulp.task('install-spark-extras-highlight-board', (cb) => {
  exec('cd packages/spark-extras-highlight-board && rm -rf node_modules && npm install', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('link-spark-extras-highlight-board', (cb) => {
  exec('cd packages/spark-extras-highlight-board && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
