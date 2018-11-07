const gulp = require('gulp');
const runSequence = require('run-sequence');

require('./gulp/spark-core/spark-core.gulpfile.js');
require('./gulp/spark-extras-card/spark-extras-card.gulpfile.js');
require('./gulp/spark-extras-dictionary/spark-extras-dictionary.gulpfile.js');
require('./gulp/spark-extras-highlight-board/spark-extras-highlight-board.gulpfile.js');
require('./gulp/drizzle/drizzle.gulpfile.js');

gulp.task('pre-publish', (cb) => {
  runSequence(
    'setup-spark-core',
    'setup-spark-extras-card',
    'setup-spark-extras-dictionary',
    'setup-spark-extras-highlight-board',
    cb,
  );
});

gulp.task('clean-all', (cb) => {
  runSequence('clean-spark-core', 'clean-spark-extras-highlight-board', cb);
});

gulp.task('setup-spark-core', (cb) => {
  runSequence('clean-spark-core', 'install-spark-core', 'build-spark-core', 'link-spark-core', cb);
});

gulp.task('setup-spark-extras-card', (cb) => {
  runSequence('link-spark-extras-card', cb);
});

gulp.task('setup-spark-extras-dictionary', (cb) => {
  runSequence('link-spark-extras-dictionary', cb);
});

gulp.task('setup-spark-extras-highlight-board', (cb) => {
  runSequence('clean-spark-extras-highlight-board', 'install-spark-extras-highlight-board', 'build-spark-extras-highlight-board', 'link-spark-extras-highlight-board', cb);
});

gulp.task('dev-spark-core', (cb) => {
  runSequence('pre-publish', 'build', ['watch-spark', 'watch', 'serve'], cb);
});

gulp.task('watch-spark', () => {
  gulp.watch([
    './packages/spark-core/{base,components,objects,settings,tools,utilities}/**/*.js',
    './packages/spark-core/*.js',
  ], ['build-spark-core']);
  gulp.watch([
    './packages/spark-extras-highlight-board/*.js',
  ], ['build-spark-extras-highlight-board']);
});
