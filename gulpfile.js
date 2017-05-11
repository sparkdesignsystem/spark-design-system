'use strict';

const drizzle = require('drizzle-builder');
const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const helpers = require('@cloudfour/hbs-helpers');
const tasks = require('@cloudfour/gulp-tasks');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const svgSprite = require('gulp-svg-sprite');
const env = require('gulp-util').env;
const config = require('./config');

// Append config
Object.assign(config.drizzle, { helpers });

// Register core tasks
[
  'clean',
  'copy',
  'js',
  'serve',
  'watch'
].forEach(name => tasks[name](gulp, config[name]));

// Register special CSS tasks
tasks.css(gulp, config['css:drizzle']);
gulp.task('css', ['css:drizzle']);

// Sass task
gulp.task('sass', () => {
  gulp.src('src/assets/toolkit/styles/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 1%','last 4 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/assets/toolkit/styles'));
});

// SVG icon task
gulp.task('icons', () => {
  gulp.src(config.icons.src)
    .pipe(svgSprite(config.icons))
    .pipe(gulp.dest(config.icons.dest));
});

// copy images
gulp.task('images', () => {
  gulp.src(config.images.src)
  .pipe(gulp.dest(config.images.dest));
});

// Register Drizzle builder task
gulp.task('drizzle', () => {
  const result = drizzle(config.drizzle);
  return result;
});

// Register frontend composite task
gulp.task('frontend', [
  'drizzle',
  'copy',
  'css',
  'sass',
  'icons',
  'images',
  'js'
]);

// Register build task (for continuous deployment via Netflify)
gulp.task('build', ['clean'], done => {
  gulp.start('frontend');
  done();
});

/**
 * Register demo task (deploy output to GitHub Pages)
 * NOTE: Run this after building.
 */
gulp.task('demo', () => {
  const buildDest = `${config.drizzle.dest.pages}/**/*`;
  return gulp.src(buildDest)
    .pipe(ghPages({
      cacheDir: 'demo'
    }));
});

// Register default task
gulp.task('default', ['frontend'], done => {
  gulp.start('serve');
  if (env.dev) {
    gulp.start('watch');
  }
  done();
});
