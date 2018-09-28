/* alters an id to start with 'pattern' */
function patternIdGen(initialID) {
  const splitID = initialID.split('.');
  splitID.shift();
  splitID.unshift('patterns');
  return splitID.join('.');
}

module.exports = patternIdGen;
