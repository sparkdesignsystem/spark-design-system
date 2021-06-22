// TODO: remove this file once react and html SBs are updated
const storyWrapper = (templateFn) => (storyFn) => {
  const story = storyFn();
  return {
    ...story,
    template: templateFn(story.template),
  };
};

export { storyWrapper };
