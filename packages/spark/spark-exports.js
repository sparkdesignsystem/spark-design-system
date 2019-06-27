import {
  dateInput,
  formatDate,
  bindUIEvents as bindDateInputUIEvents,
} from './base/dateInput';
import {
  datePicker,
  bindUIEvents as bindDatePickerUIEvents,
} from './base/datePicker';
import {
  monetaryInput,
  formatMonetary,
  bindUIEvents as bindMonetaryUIEvents,
} from './base/monetaryInput';
import passwordInput from './base/passwordInput';
import {
  phoneInput,
  formatPhone,
  bindUIEvents as bindPhoneInputUIEvents,
} from './base/phoneInput';
import {
  requiredSelect,
  runValidation as runRequiredSelectValidation,
} from './base/requiredSelect';
import {
  requiredTextInput,
  runValidation as runRequiredTextInputValidation,
  bindUIEvents as bindRequiredTextInputUIEvents,
} from './base/requiredTextInput';
import {
  requiredTick,
  runValidation as runRequiredTickValidation,
  bindUIEvents as bindRequiredTickUIEvents,
} from './base/requiredTick';
import {
  ssnInput,
  formatSSN,
  bindUIEvents as bindSSNInputUIEvents,
} from './base/ssnInput';
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
import {
  getFocusableEls,
  focusFirstEl,
  isActiveElement,
} from './utilities/elementState';
import getElements from './utilities/getElements';
import { isTabPressed, isEscPressed } from './utilities/keypress';
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
import isElementVisible from './utilities/isElementVisible';
import scrollYDirection from './utilities/scrollYDirection';

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
};
