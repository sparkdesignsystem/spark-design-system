require('@babel/register/lib')({
  extends: './.babelrc',
  ignore: [/node_modules/],
});
require('./tests/_setup');
