import {
  dateInput,
  formatDate,
  bindUIEvents as bindDateInputUIEvents,
} from './base/inputs/dateInput';
import {
  datePicker,
  bindUIEvents as bindDatePickerUIEvents,
} from './base/inputs/datePicker';
import {
  monetaryInput,
  formatMonetary,
  bindUIEvents as bindMonetaryUIEvents,
} from './base/inputs/monetaryInput';
import passwordInput from './base/inputs/passwordInput';
import {
  phoneInput,
  formatPhone,
  bindUIEvents as bindPhoneInputUIEvents,
} from './base/inputs/phoneInput';
import {
  requiredSelect,
  runValidation as runRequiredSelectValidation,
} from './base/inputs/requiredSelect';
import {
  requiredTextInput,
  runValidation as runRequiredTextInputValidation,
  bindUIEvents as bindRequiredTextInputUIEvents,
} from './base/inputs/requiredTextInput';
import {
  requiredTick,
  runValidation as runRequiredTickValidation,
  bindUIEvents as bindRequiredTickUIEvents,
} from './base/inputs/requiredTick';
import {
  ssnInput,
  formatSSN,
  bindUIEvents as bindSSNInputUIEvents,
} from './base/inputs/ssnInput';
import {
  hugeInput,
  hugeInput as hugeTextInput,
  bindUIEventsHugeInput,
  bindUIEvents as bindUIEventsHugeInputOld,
} from './base/inputs/hugeInput';
import {
  alerts,
  dismissAlert,
  bindUIEvents as bindAlertUIEvents,
} from './components/alerts';
import {
  masthead,
  toggleMobileNav,
  hideMobileNavs,
  focusTrap,
  addClassOnScroll,
  hideSelectorMask,
  showSelectorMask,
  toggleScrollEvent,
  checkScrollDirection,
  toggleMenu,
  bindUIEvents as bindMastheadUIEvents,
} from './components/masthead';
import {
  modals,
  showModal,
  hideModal,
  isMaskClicked,
  isWaitModal,
  handleModalKeyEvents,
  handleMaskEvents,
  currentOpenModal,
  bindUIEvents as bindModalUIEvents,
} from './components/modals';
import {
  setItemLabels,
  setAriaLabel,
  pagination,
} from './components/pagination';
import {
  spinners,
  getSpinnerClasses,
  setSpinning,
  cancelSpinning,
} from './components/spinners';
import {
  tabs,
  bindUIEvents,
  ariaOrientation,
  resetTabs,
  setActiveTab,
  advanceTab,
  retreatTab,
  getActiveTabIndex,
} from './components/tabs';
import {
  toggle,
  toggleIconType,
  toggleAriaExpanded,
  handleToggleClick,
  bindToggleUIEvents,
} from './components/toggle';
import { tooltip } from './components/tooltip';
import isValidDate from './utilities/validation/isValidDate';
import isValidMonetary from './utilities/validation/isValidMonetary';
import isValidPhone from './utilities/validation/isValidPhone';
import isValidSSN from './utilities/validation/isValidSSN';
import setInvalidSelect from './utilities/validation/setInvalidSelect';
import setInvalidTextInput from './utilities/validation/setInvalidTextInput';
import setInvalidTick from './utilities/validation/setInvalidTick';
import setValidSelect from './utilities/validation/setValidSelect';
import setValidTextInput from './utilities/validation/setValidTextInput';
import setValidTick from './utilities/validation/setValidTick';
import runValidation from './utilities/validation/validation-runner';
import detectJS from './utilities/detectJS';
import addClassIfNotEmpty from './utilities/addClassIfNotEmpty';
import toggleClassWithValue from './utilities/toggleClassWithValue';
import {
  getFocusableEls,
  focusFirstEl,
  isActiveElement,
} from './utilities/elementState';
import getElements from './utilities/getElements';
import {
  isTabPressed,
  isEscPressed,
  isEnterPressed,
  isSpacePressed,
  isDownPressed,
  isUpPressed,
  isLeftPressed,
  isRightPressed,
} from './utilities/keypress';
import toggleValue from './utilities/toggleValue';
import {
  dropdowns,
  bindUIEvents as bindDropdownUIEvents,
  toggleDropDown,
  hideDropDown,
  showDropDown,
  removeActiveStatus,
} from './components/dropdown';
import {
  stepper,
  bindUIEvents as bindStepperUIEvents,
} from './components/stepper';
import { carousel } from './components/carousel';
import { highlightBoard } from './components/highlight-board';
import toggleAriaExpandedAttribute from './utilities/toggleAriaExpanded';
import generateAriaControls from './utilities/generateAriaControls';
import isElementVisible from './utilities/isElementVisible';
import scrollYDirection from './utilities/scrollYDirection';
import { checkbox, bindCheckboxUIEvents } from './base/inputs/checkbox';
import generateIdForInput from './utilities/generateIdForInput';
import { radioInput, bindRadioUIEvents } from './base/inputs/radioInput';

export {
  dateInput,
  formatDate,
  bindDateInputUIEvents,
  datePicker,
  bindDatePickerUIEvents,
  monetaryInput,
  formatMonetary,
  bindMonetaryUIEvents,
  passwordInput,
  phoneInput,
  highlightBoard,
  formatPhone,
  bindPhoneInputUIEvents,
  requiredSelect,
  runRequiredSelectValidation,
  requiredTextInput,
  runRequiredTextInputValidation,
  bindRequiredTextInputUIEvents,
  requiredTick,
  runRequiredTickValidation,
  bindRequiredTickUIEvents,
  ssnInput,
  formatSSN,
  bindSSNInputUIEvents,
  alerts,
  dismissAlert,
  bindAlertUIEvents,
  masthead,
  toggleMobileNav,
  hideMobileNavs,
  focusTrap,
  addClassOnScroll,
  showSelectorMask,
  hideSelectorMask,
  bindMastheadUIEvents,
  modals,
  showModal,
  hideModal,
  isMaskClicked,
  isWaitModal,
  handleModalKeyEvents,
  handleMaskEvents,
  currentOpenModal,
  bindModalUIEvents,
  setItemLabels,
  setAriaLabel,
  pagination,
  spinners,
  getSpinnerClasses,
  setSpinning,
  cancelSpinning,
  tabs,
  bindUIEvents,
  ariaOrientation,
  resetTabs,
  setActiveTab,
  advanceTab,
  retreatTab,
  getActiveTabIndex,
  toggle,
  toggleIconType,
  toggleAriaExpanded,
  handleToggleClick,
  bindToggleUIEvents,
  tooltip,
  isValidDate,
  isValidMonetary,
  isValidPhone,
  isValidSSN,
  setInvalidSelect,
  setInvalidTextInput,
  setInvalidTick,
  setValidSelect,
  setValidTextInput,
  setValidTick,
  runValidation,
  detectJS,
  getFocusableEls,
  focusFirstEl,
  isActiveElement,
  getElements,
  isTabPressed,
  isEscPressed,
  isEnterPressed,
  isSpacePressed,
  isUpPressed,
  isDownPressed,
  isLeftPressed,
  isRightPressed,
  toggleValue,
  dropdowns,
  bindDropdownUIEvents,
  toggleDropDown,
  hideDropDown,
  showDropDown,
  removeActiveStatus,
  stepper,
  carousel,
  bindStepperUIEvents,
  toggleScrollEvent,
  isElementVisible,
  scrollYDirection,
  checkScrollDirection,
  toggleMenu,
  hugeTextInput,
  hugeInput,
  bindUIEventsHugeInput,
  bindUIEventsHugeInputOld,
  addClassIfNotEmpty,
  toggleClassWithValue,
  toggleAriaExpandedAttribute,
  generateAriaControls,
  checkbox,
  bindCheckboxUIEvents,
  generateIdForInput,
  radioInput,
  bindRadioUIEvents,
};
