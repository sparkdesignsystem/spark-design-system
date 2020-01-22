const markdownDocumentationLinkBuilder = (component, type) => {
  const directory = !type ? 'components' : type;
  return `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/${directory}/${component})
`;
};

export { markdownDocumentationLinkBuilder };
