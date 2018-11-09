const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

gulp.task('setup-spark-extras-angular-highlight-board', (cb) => {
  runSequence(
    'build-spark-extras-angular-highlight-board',
    'link-spark-extras-angular-highlight-board',
    cb,
  );
});

gulp.task('build-spark-extras-angular-highlight-board', (cb) => {
  exec('cd src/angular/projects/spark-extras-angular-highlight-board && ../../node_modules/.bin/ng build spark-extras-angular-highlight-board', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('test-spark-extras-angular-highlight-board', (cb) => {
  exec('cd src/angular/projects/spark-extras-angular-highlight-board && ../../node_modules/.bin/ng test spark-extras-angular-highlight-board --watch=false', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-extras-angular-highlight-board', () => gulp.src(['src/angular/dist/spark-extras-angular-highlight-board'], { read: false })
  .pipe(clean()));

gulp.task('link-spark-extras-angular-highlight-board', (cb) => {
  exec('cd src/angular/dist/spark-extras-angular-highlight-board && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

