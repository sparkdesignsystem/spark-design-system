const getStorybookInstance = () => {
  const storybookUrl = window.location.href;
  let storybookInstance;

  if (
    storybookUrl.includes('6006')
    || storybookUrl.includes('react.sparkdesignsystem')
    || storybookUrl.includes('spark-sb-react')
  ) {
    storybookInstance = 'react';
  } else if (
    storybookUrl.includes('8006')
    || storybookUrl.includes('angular.sparkdesignsystem')
    || storybookUrl.includes('spark-sb-angular')
  ) {
    storybookInstance = 'angular';
  } else if (
    storybookUrl.includes('7006')
    || storybookUrl.includes('html.sparkdesignsystem')
    || storybookUrl.includes('spark-sb-html')
  ) {
    storybookInstance = 'html';
  } else {
    storybookInstance = undefined;
  }

  return storybookInstance;
};

export { getStorybookInstance };
