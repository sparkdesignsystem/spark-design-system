/* global arguments */
function alternateIdGen(initialID, alternateDir) {
  const splitID = initialID.split('.');
  const dir = splitID.slice(0, -1);
  const pattern = splitID[splitID.length - 1];
  dir.push(alternateDir);
  dir.push(pattern);
  return dir.join('.');
}

module.exports = alternateIdGen;
