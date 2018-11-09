const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

// assumes previous run of setup-spark-packages
gulp.task('setup-spark-core-angular', (cb) => {
  runSequence(
    'link-spark-to-angular-dir',
    'build-spark-core-angular',
    'link-spark-core-angular',
    'link-spark-core-angular-to-angular-dir',
    cb,
  );
});

gulp.task('build-spark-core-angular', (cb) => {
  exec('cd src/angular/projects/spark-core-angular && ng build spark-core-angular', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-core-angular', () => gulp.src(['src/angular/dist/spark-core-angular'], { read: false })
  .pipe(clean()));

gulp.task('link-spark-core-angular', (cb) => {
  exec('cd src/angular/dist/spark-core-angular && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

