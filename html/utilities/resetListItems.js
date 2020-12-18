/* Remove activeClass and set aria-selected="false"
   on each item in the collection */
const resetListItems = (list, activeClass) => {
  list.forEach((listItem) => {
    listItem.classList.remove(activeClass);
    listItem.setAttribute('aria-selected', false);
  });
};

export { resetListItems as default };
