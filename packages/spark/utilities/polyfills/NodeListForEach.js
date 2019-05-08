/* eslint-disable */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    const arg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(arg, this[i], i, this);
    }
  };
}
/* eslint-enable */
