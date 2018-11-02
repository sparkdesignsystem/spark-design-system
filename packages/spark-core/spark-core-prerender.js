import detectJS from './utilities/detectJS';
import typeLoader from './base/typography';

const SparkCorePrerender = ({ typeConfig = {} } = {}) => {
  detectJS();
  typeLoader(typeConfig);
};

export { SparkCorePrerender as default };
