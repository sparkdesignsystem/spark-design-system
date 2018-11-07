const gulp = require('gulp');
const runSequence = require('run-sequence');

require('./gulp/spark-core/spark-core.gulpfile.js');
require('./gulp/drizzle/drizzle.gulpfile.js');

gulp.task('pre-publish', (cb) => {
  runSequence(
    'setup-spark-core',
    cb,
  );
});

gulp.task('setup-spark-core', (cb) => {
  runSequence('clean-spark-core', 'install-spark-core', 'link-spark-core', cb);
});

gulp.task('dev-spark-core', (cb) => {
  runSequence('setup-spark-core', 'build', ['watch-spark-core', 'watch', 'serve'], cb);
});

gulp.task('watch-spark-core', () => {
  gulp.watch([
    './packages/spark-core/{base,components,objects,settings,tools,utilities}/**/*.js',
    './packages/spark-core/*.js',
  ], ['build-spark-core']);
});
