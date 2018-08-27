/* global arguments */
function alternateIdGen(initialID, alternateDir, subDir) {
  const splitID = initialID.split('.');
  const dir = splitID.slice(0, -1);
  const pattern = splitID[splitID.length - 1];
  dir.push(alternateDir);
  if (subDir) {
    dir.push(subDir);
  }
  dir.push(pattern);
  return dir.join('.');
}

module.exports = alternateIdGen;
