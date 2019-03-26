const gulp = require('gulp');
const { exec } = require('child_process');
const runSequence = require('run-sequence');
const clean = require('gulp-clean');

// assumes previous run of setup-spark-packages
gulp.task('setup-spark-react', cb => {
  runSequence(
    'install-spark-react',
    'build-spark-react',
    'link-spark-react',
    'link-spark-react-to-react-dir',
    cb,
  );
});

gulp.task('build-spark-react', cb => {
  exec(
    'cd src/react/projects/spark-react && npm run build',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    },
  );
});

gulp.task('install-spark-react', cb => {
  exec(
    'cd src/react/projects/spark-react && npm install',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    },
  );
});

gulp.task('clean-spark-react', () =>
  gulp.src(['src/react/dist/spark-react'], { read: false }).pipe(clean()),
);

gulp.task('link-spark-react', cb => {
  exec(
    'cd src/react/dist/spark-react && npm unlink && npm link',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    },
  );
});

gulp.task('test-spark-react', cb => {
  exec(
    'cd src/react/projects/spark-react && npx jest spark-react --coverage',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    },
  );
});

gulp.task('link-spark-react-to-react-dir', cb => {
  gulp
    .src(['./src/react/node_modules/@sparkdesignsystem/spark-react'], {
      read: false,
    })
    .pipe(clean());
  exec(
    'cd src/react && npm link @sparkdesignsystem/spark-react',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    },
  );
});
