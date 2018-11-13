const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

gulp.task('setup-spark-extras-angular-card', (cb) => {
  runSequence(
    'build-spark-extras-angular-card',
    'link-spark-extras-angular-card',
    cb,
  );
});

gulp.task('build-spark-extras-angular-card', (cb) => {
  exec('cd src/angular/projects/spark-extras-angular-card && ../../node_modules/.bin/ng build spark-extras-angular-card', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('test-spark-extras-angular-card', (cb) => {
  exec('cd src/angular/projects/spark-extras-angular-card && ../../node_modules/.bin/ng test spark-extras-angular-card --watch=false', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-extras-angular-card', () => gulp.src(['src/angular/dist/spark-extras-angular-card'], { read: false })
  .pipe(clean()));

gulp.task('link-spark-extras-angular-card', (cb) => {
  exec('cd src/angular/dist/spark-extras-angular-card && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

