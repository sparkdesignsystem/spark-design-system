// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
module.exports = function (phantom, ready) {
  // test interaction on the page
  phantom.evaluate(() => {
    const a = document.querySelector('.ns-panel__hotspot--2');
    const e = document.createEvent('MouseEvents');
    e.initMouseEvent(
      'click',
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null,
    );
    a.dispatchEvent(e);
    waitforload = true;
  });

  ready();
};
