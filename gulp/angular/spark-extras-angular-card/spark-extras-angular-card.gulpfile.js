const gulp = require('gulp');
const exec = require('child_process').exec;
const clean = require('gulp-clean');

gulp.task('build-spark-extras-angular-card', (cb) => {
  exec('cd src/angular/projects/spark-extras-angular-card && ng build spark-extras-angular-card', (err, stdout, stderr) => {
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

