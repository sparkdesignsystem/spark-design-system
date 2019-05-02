const gulp = require('gulp');
const runSequence = require('run-sequence');

require('./gulp/spark/spark.gulpfile.js');
require('./gulp/drizzle/drizzle.gulpfile.js');
require('./gulp/angular/dev-app/angulardevapp.gulpfile.js');
require('./gulp/angular/spark-angular/spark-angular.gulpfile.js');
require('./gulp/react/dev-app/reactdevapp.gulpfile.js');
require('./gulp/react/spark-react/spark-react.gulpfile.js');

gulp.task('pre-publish', cb => {
  runSequence(
    'setup-spark-packages',
    'build-drizzle',
    ['install-angular-dev-app', 'install-react-dev-app'],
    'link-spark-to-react-dir',
    ['setup-spark-angular', 'setup-spark-react'],
    cb,
  );
});

gulp.task('setup-spark-packages', cb => {
  runSequence('setup-spark', cb);
});

gulp.task('clean-all', cb => {
  runSequence(
    [
      'clean',
      'clean-spark',
      'clean-angular-dev-app',
      'clean-react-dev-app',
      'clean-spark-react',
      'clean-spark-angular',
    ],
    cb,
  );
});

gulp.task('dev-spark-packages', cb => {
  runSequence('setup-spark-packages', 'build-drizzle', ['watch', 'serve'], cb);
});

gulp.task('dev-spark-angular', cb => {
  runSequence(
    'install-angular-dev-app',
    'setup-spark-packages',
    'setup-spark-angular',
    ['serve-angular-dev-app', 'watch'],
    cb,
  );
});

gulp.task('dev-spark-react', cb => {
  runSequence(
    'setup-spark-packages',
    'install-react-dev-app',
    'link-spark-to-react-dir',
    'setup-spark-react',
    ['serve-react-dev-app', 'watch'],
    cb,
  );
});

gulp.task('dev-all', cb => {
  runSequence(
    'setup-spark-packages',
    'install-angular-dev-app',
    'install-react-dev-app',
    'setup-spark-angular',
    'link-spark-to-react-dir',
    'setup-spark-react',
    'build-drizzle',
    ['serve-angular-dev-app', 'serve-react-dev-app', 'serve', 'watch'],
    cb,
  );
});

gulp.task('test-angular', cb => {
  runSequence('test-spark-angular', cb);
});

gulp.task('test-react', cb => {
  runSequence('test-spark-react', cb);
});

// netlify
gulp.task('build', cb => {
  runSequence('setup-spark-packages', 'build-drizzle', cb);
});

// netlify
gulp.task('build-angular', cb => {
  runSequence(
    'install-angular-dev-app',
    'setup-spark-packages',
    'setup-spark-angular',
    'build-angular-dev-app-netlify',
    cb,
  );
});

// netlify react
gulp.task('build-react', cb => {
  runSequence(
    'setup-spark-packages',
    'install-react-dev-app',
    'link-spark-to-react-dir',
    'setup-spark-react',
    'build-react-dev-app-netlify',
    cb,
  );
});
