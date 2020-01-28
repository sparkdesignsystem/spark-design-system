const getStorybookInstance = () => {
  const storybookUrl = window.location.href;
  let storybookInstance;

  if (storybookUrl.includes('6006') || storybookUrl.includes('react.sparkdesignsystem')) {
    storybookInstance = 'react';
  } else if (
    storybookUrl.includes('8006') || storybookUrl.includes('angular.sparkdesignsystem')
  ) {
    storybookInstance = 'angular';
  } else if (
    storybookUrl.includes('7006') || storybookUrl.includes('html.sparkdesignsystem')
  ) {
    storybookInstance = 'html';
  } else {
    storybookInstance = undefined;
  }

  return storybookInstance;
};

export { getStorybookInstance };
