/* global require */
const drizzle = require('drizzle-builder');
const gulp = require('gulp');
const helpers = require('@cloudfour/hbs-helpers');
const tasks = require('@cloudfour/gulp-tasks');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const critical = require('critical').stream;
const log = require('fancy-log');
const request = require('request');
const fs = require('fs');
const runSequence = require('run-sequence');
const config = require('./config');
const concatHelper = require('../../src/assets/drizzle/scripts/handlebars-helpers/concat');
const alternateIdGen = require('../../src/assets/drizzle/scripts/handlebars-helpers/alternateIdGen');
const toLowerCase = require('../../src/assets/drizzle/scripts/handlebars-helpers/toLowerCase');
const htmlEncode = require('../../src/assets/drizzle/scripts/handlebars-helpers/htmlEncode');
const patternIdGen = require('../../src/assets/drizzle/scripts/handlebars-helpers/patternIdGen');

// add helpers
helpers.concat = concatHelper;
helpers.alternateIdGen = alternateIdGen;
helpers.toLowerCase = toLowerCase;
helpers.htmlEncode = htmlEncode;
helpers.patternIdGen = patternIdGen;

// Append config
Object.assign(config.drizzle, { helpers });

// Register core tasks
['clean', 'copy', 'js', 'serve', 'watch'].forEach(name =>
  tasks[name](gulp, config[name]),
);

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
    .src('./src/assets/drizzle/styles/**/*.scss')
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
gulp.task('icons', done => {
  const fileStream = fs.createWriteStream(
    './src/templates/drizzle/spark-core-icons.hbs',
  );
  request
    .get({
      uri: 'https://spark-assets.netlify.com/spark-core-icons.svg',
      rejectUnauthorized: false,
    })
    .pipe(fileStream)
    .on('finish', done);
});

// copy images
gulp.task('images', () => {
  gulp.src(config.images.src).pipe(gulp.dest(config.images.dest));
});

// Register Drizzle builder task (Used by netlify)
gulp.task('drizzle', ['icons'], () => {
  const result = drizzle(config.drizzle);
  return result.done(); // makes sure that the icons are finished before the templates are processed
});

// Register build task (for continuous deployment via Netflify)
gulp.task('build-drizzle', done => {
  runSequence(
    'clean',
    'icons',
    'drizzle',
    'copy',
    'sass',
    'images',
    'js',
    'critical',
    done,
  );
});

// Generate & Inline Critical-path CSS
gulp.task('critical', () => {
  const cssFiles = [
    './dist/assets/toolkit/styles/toolkit.css',
    './dist/assets/drizzle/styles/main.css',
  ];
  return gulp
    .src('./dist/*.html')
    .pipe(
      critical({
        base: './dist/',
        inline: true,
        css: cssFiles,
      }),
    )
    .on('error', (err) => {
      log.error(err.message);
    })
    .pipe(gulp.dest('./dist'));
});

// Register default task
gulp.task('default', ['build-drizzle'], (done) => {
  gulp.start('serve');
  gulp.start('watch');
  done();
});
