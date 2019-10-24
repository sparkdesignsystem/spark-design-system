const storyWrapper = templateFn => storyFn => {
  const story = storyFn();
  return {
    ...story,
    template: templateFn(story.template)
  };
};

export {
  storyWrapper,
};