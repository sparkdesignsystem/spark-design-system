/* alters an id to start with 'patterns' */
function patternIdGen(initialID) {
  const splitID = initialID.split('.');
  splitID.shift();
  splitID.unshift('patterns');
  return splitID.join('.');
}

module.exports = patternIdGen;
