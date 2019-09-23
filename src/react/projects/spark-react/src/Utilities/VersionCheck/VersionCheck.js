const versionCheck = () => {
  if (window) {
    window.sprk = { version: { react: SPRK_REACT_CURRENT_VERSION } };
  }
};

export default versionCheck;
