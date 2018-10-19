/* global document Promise */
const FontFaceObserver = require('fontfaceobserver');

const typeLoader = ({ bodyFontName, headingFontName } = {}) => {
  let bodyFont;
  let headingFont;

  if (bodyFontName) {
    bodyFont = new FontFaceObserver(bodyFontName);
    Promise.all([
      bodyFont.load(null, 10000),
    ]).then(() => {
      document.documentElement.className += ' sprk-u-Fonts__body--loaded';
    });
  }

  if (headingFontName) {
    headingFont = new FontFaceObserver(headingFontName);
    Promise.all([
      headingFont.load(null, 10000),
    ]).then(() => {
      document.documentElement.className += ' sprk-u-Fonts__heading--loaded';
    });
  }
};

export { typeLoader as default };
