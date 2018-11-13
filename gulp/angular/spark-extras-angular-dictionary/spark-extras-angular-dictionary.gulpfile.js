const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

gulp.task('setup-spark-extras-angular-dictionary', (cb) => {
  runSequence(
    'build-spark-extras-angular-dictionary',
    'link-spark-extras-angular-dictionary',
    cb,
  );
});

gulp.task('build-spark-extras-angular-dictionary', (cb) => {
  exec('cd src/angular/projects/spark-extras-angular-dictionary && ../../node_modules/.bin/ng build spark-extras-angular-dictionary', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('test-spark-extras-angular-dictionary', (cb) => {
  exec('cd src/angular/projects/spark-extras-angular-dictionary && ../../node_modules/.bin/ng test spark-extras-angular-dictionary --watch=false', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-extras-angular-dictionary', () => gulp.src(['src/angular/dist/spark-extras-angular-dictionary'], { read: false })
  .pipe(clean()));

gulp.task('link-spark-extras-angular-dictionary', (cb) => {
  exec('cd src/angular/dist/spark-extras-angular-dictionary && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

