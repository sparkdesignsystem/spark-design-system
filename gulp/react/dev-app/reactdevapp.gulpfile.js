const clean = require('gulp-clean');
const gulp = require('gulp');
const request = require('request');
const { exec } = require('child_process');
const fs = require('fs');

gulp.task('build-react-dev-app-netlify', ['fetch-icons'], (cb) => {
  exec('cd src/react && npm run build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('fetch-icons', () => {
  const iconset = request('https://spark-assets.netlify.com/spark-core-icons.svg', {strictSSL:false})
    .pipe(fs.createWriteStream('src/react/src/assets/sprk-icons.svg'));
});

gulp.task('clean-react-dev-app', () => gulp.src(['src/react/node_modules', './dist/react'], { read: false }).pipe(clean()));

gulp.task('install-react-dev-app', (cb) => {
  exec('cd src/react && npm install', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('serve-react-dev-app', (cb) => {
  exec('cd src/react && npm start', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('transfer-react-dev-app', () => {
  gulp.src('dist/react/build', { read: false }).pipe(clean());
  gulp.src('src/react/build/react/**/*').pipe(gulp.dest('dist/react'));
});

gulp.task('link-spark-to-react-dir', (cb) => {
  gulp
    .src(
      [
        'src/react/node_modules/@sparkdesignsystem/spark-core',
        'src/react/node_modules/@sparkdesignsystem/spark-card',
        'src/react/node_modules/@sparkdesignsystem/spark-dictionary',
        'src/react/node_modules/@sparkdesignsystem/spark-highlight-board',
      ],
      { read: false },
    )
    .pipe(clean());
  exec(
    'cd src/react && npm link @sparkdesignsystem/spark-core && npm link @sparkdesignsystem/spark-card && npm link @sparkdesignsystem/spark-dictionary && npm link @sparkdesignsystem/spark-highlight-board',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    },
  );
});
