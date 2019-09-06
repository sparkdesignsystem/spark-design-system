const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

// assumes previous run of setup-spark-packages
gulp.task('setup-spark-angular', (cb) => {
  runSequence(
    'link-spark-to-angular-dir',
    'build-spark-angular',
    'link-spark-angular',
    'link-spark-angular-to-angular-dir',
    cb,
  );
});

gulp.task('build-spark-angular', (cb) => {
  exec('cd src/angular/projects/spark-angular && npm run build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('test-spark-angular', (cb) => {
  exec('cd src/angular/projects/spark-angular && ../../node_modules/.bin/ng test spark-angular --watch=false', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-angular', () => gulp.src(['src/angular/dist/spark-angular'], { read: false })
  .pipe(clean()));

gulp.task('link-spark-angular', (cb) => {
  exec('cd src/angular/dist/spark-angular && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
