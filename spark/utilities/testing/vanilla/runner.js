require('../../../../spark/manifests/spark/node_modules/@babel/register/lib')({
  extends: './.babelrc',
  ignore: [/node_modules/],
});
require('./_setup');
