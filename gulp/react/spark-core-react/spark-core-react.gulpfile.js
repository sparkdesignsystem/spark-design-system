const gulp = require('gulp');
const { exec } = require('child_process');
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

// assumes previous run of setup-spark-packages
gulp.task('setup-spark-core-react', (cb) => {
  runSequence(
    'build-spark-core-react',
    'link-spark-core-react',
    'link-spark-core-react-to-react-dir',
    cb,
  );
});

gulp.task('build-spark-core-react', (cb) => {
  exec('cd src/react/projects/spark-core-react && npm run build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-spark-core-react', () => gulp.src(['src/react/dist/spark-core-react'], { read: false })
  .pipe(clean()));

gulp.task('link-spark-core-react', (cb) => {
  exec('cd src/react/dist/spark-core-react && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('link-spark-core-react-to-react-dir', (cb) => {
  gulp.src(['./src/react/node_modules/@sparkdesignsystem/spark-core-react'], { read: false })
    .pipe(clean());
  exec('cd src/react && npm link @sparkdesignsystem/spark-core-react', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});