const configClassModifierJsonProcessor = (classModifierJSON, componentName) => {
  const docs = classModifierJSON
    .filter((item) => {
      return item.group.indexOf(componentName) !== -1;
    })
    .map((item) => {
      return {
        selector: item.context.name,
        ...item,
      };
    });
  return docs;
};

export { configClassModifierJsonProcessor };
