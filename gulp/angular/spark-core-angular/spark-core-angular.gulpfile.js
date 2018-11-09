const gulp = require('gulp');
const exec = require('child_process').exec;
const clean = require('gulp-clean');

gulp.task('build-spark-core-angular', (cb) => {
  exec('cd src/angular/projects/spark-core-angular && ng build spark-core-angular', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('build-spark-core-angular-silent', (cb) => {
  exec('cd src/angular/projects/spark-core-angular && ng build spark-core-angular', (err, stdout, stderr) => {
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

