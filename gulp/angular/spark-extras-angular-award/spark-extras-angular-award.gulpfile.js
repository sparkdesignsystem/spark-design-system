const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

gulp.task('setup-spark-extras-angular-award', (cb) => {
  runSequence(
    'build-spark-extras-angular-award',
    'link-spark-extras-angular-award',
    cb,
  );
});

gulp.task('build-spark-extras-angular-award', (cb) => {
  exec('cd src/angular/projects/spark-extras-angular-award && ng build spark-extras-angular-award', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-extras-angular-award', () => gulp.src(['src/angular/dist/spark-extras-angular-award'], { read: false })
  .pipe(clean()));

gulp.task('link-spark-extras-angular-award', (cb) => {
  exec('cd src/angular/dist/spark-extras-angular-award && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

