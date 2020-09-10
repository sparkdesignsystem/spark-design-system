const fetch = require('node-fetch');

exports.sourceNodes = ({ actions, createContentDigest }, configOptions) => {
  const { createNode } = actions;
  console.log(configOptions, 'url');

  return (
    // Fetch a response from the apiUrl
    fetch(configOptions.url)
      // Parse the response as JSON
      .then((response) => response.text())
      // Process the JSON data into a node
      .then((data) => {
        console.log(data, 'data from us!!!!!!');
        createNode({
          id: '1',
          internal: {
            type: 'SparkIconSetV14',
            content: data,
            contentDigest: createContentDigest(data),
          },
        });
      })
  );
};
