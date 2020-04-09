const compareEdges = (a, b) => {
  if (a.node.frontmatter.title.toLowerCase() > b.node.frontmatter.title.toLowerCase()) {
    return 1;
  }
  return -1;
};

export default compareEdges;
