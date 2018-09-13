function concatHelper(...args) {
  let outStr = '';
  args.forEach((arg) => {
    if (typeof arg === 'string') {
      outStr += arg;
    }
  });
  return outStr;
}

module.exports = concatHelper;
