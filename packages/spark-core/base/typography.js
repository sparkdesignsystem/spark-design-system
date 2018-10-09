/* global document Promise */
// This file need to be loaded in the head
const FontFaceObserver = require('fontfaceobserver');

const typeLoader = (
  {
    bodyFullName, bodySubsetName, headingFullName, headingSubsetName,
  } = {},
) => {
  const bodySubsetFont = new FontFaceObserver(bodySubsetName);
  const bodyFullFont = new FontFaceObserver(bodyFullName);
  const headingFullFont = new FontFaceObserver(headingFullName);
  const headingSubsetFont = new FontFaceObserver(headingSubsetName);
  Promise.all([
    bodySubsetFont.load(null, 10000),
    headingSubsetFont.load(null, 10000),
  ]).then(() => {
    document.documentElement.className += ' sprk-b-Fonts--stage-one';
  });

  Promise.all([
    bodyFullFont.load(null, 10000),
    headingFullFont.load(null, 10000),
  ]).then(() => {
    document.documentElement.className += ' sprk-b-Fonts--stage-two';
  });
};

export { typeLoader as default };
