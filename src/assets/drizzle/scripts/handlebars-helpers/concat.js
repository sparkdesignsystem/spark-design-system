function concatHelper(...args) {
  let outStr = '';
  args.forEach((arg) => {
    outStr += arg;
  });
  return outStr;
}

module.exports = concatHelper;
