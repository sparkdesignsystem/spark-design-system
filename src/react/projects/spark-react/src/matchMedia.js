// window.matchMedia is referenced by a utility function in spark-core. This function
// is undefined in jsdom test environments. Any Spark component that imports from spark-core cannot
// be imported into a unit test unless window.matchMedia is stubbed. To use, import this
// file into the test file (BEFORE you import your component).
window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  };
};