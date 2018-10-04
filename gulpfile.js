/* global require */
const drizzle = require('drizzle-builder');
const gulp = require('gulp');
const helpers = require('@cloudfour/hbs-helpers');
const tasks = require('@cloudfour/gulp-tasks');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const svgSprite = require('gulp-svg-sprite');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const critical = require('critical').stream;
const log = require('fancy-log');
const { exec } = require('child_process');
const runSequence = require('run-sequence');
const config = require('./config');

const concatHelper = require('./src/assets/drizzle/scripts/handlebars-helpers/concat');
const alternateIdGen = require('./src/assets/drizzle/scripts/handlebars-helpers/alternateIdGen');
const toLowerCase = require('./src/assets/drizzle/scripts/handlebars-helpers/toLowerCase');
const htmlEncode = require('./src/assets/drizzle/scripts/handlebars-helpers/htmlEncode');

// add helpers
helpers.concat = concatHelper;
helpers.alternateIdGen = alternateIdGen;
helpers.toLowerCase = toLowerCase;
helpers.htmlEncode = htmlEncode;

const concatHelper = require('./src/assets/drizzle/scripts/handlebars-helpers/concat');
const patternIdGen = require('./src/assets/drizzle/scripts/handlebars-helpers/patternIdGen');

// add helpers
helpers.concat = concatHelper;
helpers.patternIdGen = patternIdGen;

// Append config
Object.assign(config.drizzle, { helpers });

// Register core tasks
['clean', 'copy', 'js', 'serve', 'watch'].forEach(name => tasks[name](gulp, config[name]));

// Sass task
gulp.task('sass', () => {
  gulp
    .src('src/assets/toolkit/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['> 1%', 'last 4 versions'],
        cascade: false,
      }),
    )
    .pipe(
      cssnano({
        zindex: false,
      }),
    )
    .pipe(gulp.dest('./dist/assets/toolkit/styles'));

  gulp
    .src('src/assets/drizzle/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['> 1%', 'last 4 versions'],
        cascade: false,
      }),
    )
    .pipe(
      cssnano({
        zindex: false,
      }),
    )
    .pipe(gulp.dest('./dist/assets/drizzle/styles'));
});

// SVG icon task
gulp.task('icons', (done) => {
  gulp
    .src(config.icons.src)
    .pipe(svgSprite(config.icons))
    .pipe(gulp.dest(config.icons.dest))
    .pipe(
      rename({
        extname: '.hbs',
      }),
    )
    .pipe(gulp.dest('./src/templates/drizzle'))
    .on('end', done);
});

// copy images
gulp.task('images', () => {
  gulp.src(config.images.src).pipe(gulp.dest(config.images.dest));
});

// Register Drizzle builder task
gulp.task('drizzle', ['icons'], () => {
  const result = drizzle(config.drizzle);
  return result.done(); // makes sure that the icons are finished before the templates are processed
});

// Register frontend composite task
gulp.task('frontend', ['icons', 'drizzle', 'copy', 'sass', 'images', 'js']);

// Register build task (for continuous deployment via Netflify)
gulp.task('build', (done) => {
  runSequence(
    'clean',
    'icons',
    'drizzle',
    'copy',
    'sass',
    'images',
    'build-es5',
    'js',
    'critical',
    done,
  );
});

// Generate & Inline Critical-path CSS
gulp.task('critical', () => {
  const cssFiles = [
    'dist/assets/toolkit/styles/toolkit.css',
    'dist/assets/drizzle/styles/main.css',
  ];
  return gulp
    .src('dist/*.html')
    .pipe(
      critical({
        base: 'dist/',
        inline: true,
        css: cssFiles,
      }),
    )
    .on('error', (err) => {
      log.error(err.message);
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('build-angular', (cb) => {
  const cmd = exec(`
    cd src/angular &&
    ng build spark-core-angular &&
    ng build spark-extras-angular-award &&
    ng build spark-extras-angular-card &&
    ng build spark-extras-angular-dictionary &&
    ng build spark-extras-angular-highlight-board
    `, {
    stdio: 'inherit',
  });
  return cmd.on('close', cb).on('error', (err) => {
    log.error(err.message);
  });
});

gulp.task('build-es5', (cb) => {
  const cmd = exec(`
    cd packages/spark-core &&
    npm install && npm build && cd .. &&
    cd spark-extras/components/highlight-board && npm install && npm build
    `, {
    stdio: 'inherit',
  });
  return cmd.on('close', cb).on('error', (err) => {
    log.error(err.message);
  });
});


gulp.task('pre-publish', ['build-angular'], () => {});

// Register default task
gulp.task('default', ['frontend'], (done) => {
  gulp.start('serve');
  gulp.start('watch');
  done();
});
