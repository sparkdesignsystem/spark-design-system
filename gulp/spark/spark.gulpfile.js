const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

gulp.task('setup-spark', cb => {
  runSequence('clean-spark', 'install-spark', 'build-spark', 'link-spark', cb);
});

gulp.task('build-spark', cb => {
  exec('cd packages/spark && npm run build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark', () =>
  gulp
    .src(['./packages/spark/node_modules', './packages/spark/es5'], {
      read: false,
    })
    .pipe(clean()),
);

gulp.task('install-spark', ['clean-spark'], cb => {
  exec('cd packages/spark && npm install', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('link-spark', cb => {
  exec('cd packages/spark && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
