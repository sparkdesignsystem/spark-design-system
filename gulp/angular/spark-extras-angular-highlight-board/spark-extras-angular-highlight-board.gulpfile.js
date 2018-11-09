const gulp = require('gulp');
const exec = require('child_process').exec;
const clean = require('gulp-clean');

gulp.task('build-spark-extras-angular-highlight-board', (cb) => {
  exec('cd src/angular/projects/spark-extras-angular-highlight-board && ng build spark-extras-angular-highlight-board', (err, stdout, stderr) => {
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

