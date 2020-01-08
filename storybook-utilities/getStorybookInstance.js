const getStorybookInstance = () => {
  const storybookUrl = window.location.href;
  let storybookInstance;

  if (storybookUrl.includes('6006') || storybookUrl.includes('sb-react')) {
    storybookInstance = 'react';
  } else if (
    storybookUrl.includes('8006') || storybookUrl.includes('sb-angular')
  ) {
    storybookInstance = 'angular';
  } else if (
    storybookUrl.includes('7006') || storybookUrl.includes('sb-html')
  ) {
    storybookInstance = 'html';
  } else {
    storybookInstance = undefined;
  }

  return storybookInstance;
};

export { getStorybookInstance };
