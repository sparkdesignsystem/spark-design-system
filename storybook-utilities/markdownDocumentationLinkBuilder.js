const markdownDocumentationLinkBuilder = (type, component) => {
  return `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/${type}/${component})
`;
};

export { markdownDocumentationLinkBuilder };
