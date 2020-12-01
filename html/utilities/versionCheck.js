/* global SPRK_CURRENT_VERSION */
const versionCheck = () => {
  if (window) {
    window.sprk = {
      version: { vanilla: SPRK_CURRENT_VERSION },
    };
  }
};

export default versionCheck;
