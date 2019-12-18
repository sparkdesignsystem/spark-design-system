const markdownDocumentationLinkBuilder = (component) => {
  return `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/${component})
  `;
};

export { markdownDocumentationLinkBuilder };
