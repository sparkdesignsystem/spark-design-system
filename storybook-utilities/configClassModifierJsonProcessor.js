const configClassModifierJsonProcessor = (classModifierJSON, componentName) => {
  if (!classModifierJSON || !componentName) { return; }
  const componentNameLowerCase = componentName.toLowerCase();
  const docs = classModifierJSON
    .filter((item) => {
      return item.group.indexOf(componentNameLowerCase) !== -1;
    })
    .map((item) => {
      return {
        selector: item.context.name,
        ...item,
      };
    });
  if (docs.length > 0) {
    return docs;
  }
};

export { configClassModifierJsonProcessor };
