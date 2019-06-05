require('../../../manifests/spark/node_modules/@babel/register')({
  extends: './.babelrc',
  ignore: [/node_modules/],
});
require('./_setup');
