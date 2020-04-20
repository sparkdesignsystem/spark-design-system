// 1. role="checkbox"

// Could this be a utility? checkElementRole with parameter passed in to check?
const checkRoleEqualsCheckbox = () => {
  /**
   * Get array of checkbox inputs
   * map through array
   * if item has role=checkbox, great
   * if not, add it
   *  */ 
}

// 2. aria-checked="true || false"

// Should these be two separate functions? Initial and Updating?
const isAriaChecked = () => {
  /**
   * on load:
   * get array of checkbox inputs
   * map through array
   * if item is checked add aria-checked="true"
   * it not, add aria-checked="false"
   * 
   * on change:
   * update current checkbox aria-checked to true or false
   */
}

// 3. id of input matches for of label

// Need some help naming this one.
const generateIdForCheckbox = () => {
  /**
   * Using the same idea as the generateAriaControls function:
   * 
   * Get array of checkbox inputs
   * map through array
   * get id of input
   * get for of sibling label
   * 
   * Warn if for exists but the id does not
   * 
   * Warn if for and id both exist but don't match
   * 
   * If we don't have a valid id, generate one with lodash
   * set the value of for
   * 
   */
}

// Get the array of checkbox inputs one time
// When mapping, do each of these checks on each item
// Separate function to update aria-checked on change 