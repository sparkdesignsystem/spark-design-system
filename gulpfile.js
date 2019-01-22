const gulp = require('gulp');
const runSequence = require('run-sequence');

require('./gulp/spark-core/spark-core.gulpfile.js');
require('./gulp/spark-extras/spark-card.gulpfile.js');
require('./gulp/spark-extras/spark-dictionary.gulpfile.js');
require('./gulp/spark-extras/spark-highlight-board.gulpfile.js');
require('./gulp/drizzle/drizzle.gulpfile.js');
require('./gulp/angular/dev-app/angulardevapp.gulpfile.js');
require('./gulp/angular/spark-core-angular/spark-core-angular.gulpfile.js');
require('./gulp/angular/spark-extras-angular-award/spark-extras-angular-award.gulpfile.js');
require('./gulp/angular/spark-extras-angular-card/spark-extras-angular-card.gulpfile.js');
require('./gulp/angular/spark-extras-angular-dictionary/spark-extras-angular-dictionary.gulpfile.js');
require('./gulp/angular/spark-extras-angular-highlight-board/spark-extras-angular-highlight-board.gulpfile.js');
require('./gulp/react/dev-app/reactdevapp.gulpfile.js');
require('./gulp/react/spark-core-react/spark-core-react.gulpfile.js');

gulp.task('pre-publish', (cb) => {
  runSequence(
    'setup-spark-packages',
    'build-drizzle',
    'install-angular-dev-app',
    'install-react-dev-app',
    'link-spark-to-react-dir',
    'setup-spark-angular-projects',
    'setup-spark-core-react',
    cb,
  );
});

gulp.task('setup-spark-packages', (cb) => {
  runSequence(
    'setup-spark-core',
    'setup-spark-card',
    'setup-spark-dictionary',
    'setup-spark-highlight-board',
    cb,
  );
});

// assumes that setup-spark-packages has been run
gulp.task('setup-spark-angular-projects', (cb) => {
  runSequence(
    'setup-spark-core-angular',
    [
      'setup-spark-extras-angular-award',
      'setup-spark-extras-angular-card',
      'setup-spark-extras-angular-dictionary',
      'setup-spark-extras-angular-highlight-board',
    ],
    cb,
  );
});

gulp.task('clean-all', (cb) => {
  runSequence(
    [
      'clean',
      'clean-spark-core',
      'clean-spark-highlight-board',
      'clean-angular-dev-app',
      'clean-react-dev-app',
      'clean-spark-core-react',
      'clean-spark-core-angular',
      'clean-spark-extras-angular-award',
      'clean-spark-extras-angular-card',
      'clean-spark-extras-angular-dictionary',
      'clean-spark-extras-angular-highlight-board',
    ],
    cb,
  );
});

gulp.task('dev-spark-packages', (cb) => {
  runSequence('setup-spark-packages', 'build-drizzle', ['watch', 'serve'], cb);
});

gulp.task('dev-spark-angular', (cb) => {
  runSequence(
    'install-angular-dev-app',
    'setup-spark-packages',
    'setup-spark-angular-projects',
    ['serve-angular-dev-app', 'watch'],
    cb,
  );
});

gulp.task('dev-spark-react', (cb) => {
  runSequence(
    'setup-spark-packages',
    'install-react-dev-app',
    'link-spark-to-react-dir',
    'setup-spark-core-react',
    ['serve-react-dev-app', 'watch'],
    cb,
  );
});

gulp.task('dev-all', (cb) => {
  runSequence(
    'setup-spark-packages',
    'install-angular-dev-app',
    'install-react-dev-app',
    'setup-spark-angular-projects',
    'link-spark-to-react-dir',
    'setup-spark-core-react',
    'build-drizzle',
    ['serve-angular-dev-app', 'serve-react-dev-app', 'serve', 'watch'],
    cb,
  );
});

gulp.task('test-angular', (cb) => {
  runSequence(
    'test-spark-core-angular',
    'test-spark-extras-angular-award',
    'test-spark-extras-angular-card',
    'test-spark-extras-angular-dictionary',
    'test-spark-extras-angular-highlight-board',
    cb,
  );
});

gulp.task('test-react', (cb) => {
  runSequence(
    'test-spark-core-react',
    cb,
  );
});

// netlify
gulp.task('build', (cb) => {
  runSequence(
    'pre-publish',
    cb,
  );
});

gulp.task('build-angular', (cb) => {
  runSequence(
    'install-angular-dev-app',
    'setup-spark-packages',
    'setup-spark-angular-projects',
    cb,
  );
});

gulp.task('build-react', (cb) => {
  runSequence(
    'setup-spark-packages',
    'install-react-dev-app',
    'link-spark-to-react-dir',
    'setup-spark-core-react',
    cb,
  );
});
