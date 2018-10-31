/* global document Promise */
const FontFaceObserver = require('fontfaceobserver');

const typeLoader = ({ bodyFontName, headingFontName, alternateFontName } = {}) => {
  let bodyFont;
  let headingFont;
  let alternateFont;

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

  if (alternateFontName) {
    alternateFont = new FontFaceObserver(alternateFontName);
    Promise.all([
      alternateFont.load(null, 10000),
    ]).then(() => {
      document.documentElement.className += ' sprk-u-Fonts__alternate--loaded';
    });
  }
};

export { typeLoader as default };
