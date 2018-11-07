const gulp = require('gulp');
const exec = require('child_process').exec;
const clean = require('gulp-clean');

gulp.task('link-spark-extras-dictionary', (cb) => {
  exec('cd packages/spark-extras-dictionary && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
