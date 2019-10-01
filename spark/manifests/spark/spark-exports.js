import {
  dateInput,
  formatDate,
  bindUIEvents as bindDateInputUIEvents,
} from '../../base/inputs/vanilla/dateInput';
import {
  datePicker,
  bindUIEvents as bindDatePickerUIEvents,
} from '../../base/inputs/vanilla/datePicker';
import {
  monetaryInput,
  formatMonetary,
  bindUIEvents as bindMonetaryUIEvents,
} from '../../base/inputs/vanilla/monetaryInput';
import passwordInput from '../../base/inputs/vanilla/passwordInput';
import {
  phoneInput,
  formatPhone,
  bindUIEvents as bindPhoneInputUIEvents,
} from '../../base/inputs/vanilla/phoneInput';
import {
  requiredSelect,
  runValidation as runRequiredSelectValidation,
} from '../../base/inputs/vanilla/requiredSelect';
import {
  requiredTextInput,
  runValidation as runRequiredTextInputValidation,
  bindUIEvents as bindRequiredTextInputUIEvents,
} from '../../base/inputs/vanilla/requiredTextInput';
import {
  requiredTick,
  runValidation as runRequiredTickValidation,
  bindUIEvents as bindRequiredTickUIEvents,
} from '../../base/inputs/vanilla/requiredTick';
import {
  ssnInput,
  formatSSN,
  bindUIEvents as bindSSNInputUIEvents,
} from '../../base/inputs/vanilla/ssnInput';
import {
  hugeInput,
  hugeInput as hugeTextInput,
  bindUIEventsHugeInput,
  bindUIEvents as bindUIEventsHugeInputOld,
} from '../../base/inputs/vanilla/hugeInput';
import {
  alerts,
  dismissAlert,
  bindUIEvents as bindAlertUIEvents,
} from '../../components/alerts/vanilla/alerts';
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
} from '../../components/masthead/vanilla/masthead';
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
} from '../../components/modals/vanilla/modals';
import {
  setItemLabels,
  setAriaLabel,
  pagination,
} from '../../components/pagination/vanilla/pagination';
import {
  spinners,
  getSpinnerClasses,
  setSpinning,
  cancelSpinning,
} from '../../components/spinners/vanilla/spinners';
import {
  tabs,
  bindUIEvents,
  ariaOrientation,
  resetTabs,
  setActiveTab,
  advanceTab,
  retreatTab,
  getActiveTabIndex,
} from '../../components/tabs/vanilla/tabs';
import {
  toggle,
  toggleIconType,
  toggleAriaExpanded,
  handleToggleClick,
  bindToggleUIEvents,
} from '../../components/toggle/vanilla/toggle';
import isValidDate from '../../utilities/validation/vanilla/isValidDate';
import isValidMonetary from '../../utilities/validation/vanilla/isValidMonetary';
import isValidPhone from '../../utilities/validation/vanilla/isValidPhone';
import isValidSSN from '../../utilities/validation/vanilla/isValidSSN';
import setInvalidSelect from '../../utilities/validation/vanilla/setInvalidSelect';
import setInvalidTextInput from '../../utilities/validation/vanilla/setInvalidTextInput';
import setInvalidTick from '../../utilities/validation/vanilla/setInvalidTick';
import setValidSelect from '../../utilities/validation/vanilla/setValidSelect';
import setValidTextInput from '../../utilities/validation/vanilla/setValidTextInput';
import setValidTick from '../../utilities/validation/vanilla/setValidTick';
import runValidation from '../../utilities/validation/vanilla/validation-runner';
import detectJS from '../../utilities/helpers/vanilla/detectJS';
import {
  getFocusableEls,
  focusFirstEl,
  isActiveElement,
} from '../../utilities/helpers/vanilla/elementState';
import getElements from '../../utilities/helpers/vanilla/getElements';
import { isTabPressed, isEscPressed } from '../../utilities/helpers/vanilla/keypress';
import toggleValue from '../../utilities/helpers/vanilla/toggleValue';
import {
  dropdowns,
  bindUIEvents as bindDropdownUIEvents,
  toggleDropDown,
  hideDropDown,
  showDropDown,
  removeActiveStatus,
} from '../../components/dropdown/vanilla/dropdown';
import {
  stepper,
  bindUIEvents as bindStepperUIEvents,
} from '../../components/stepper/vanilla/stepper';
import { carousel } from '../../components/carousel/vanilla/carousel';
import { highlightBoard } from '../../components/highlight-board/vanilla/highlight-board';
import isElementVisible from '../../utilities/helpers/vanilla/isElementVisible';
import scrollYDirection from '../../utilities/helpers/vanilla/scrollYDirection';

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
  hugeTextInput,
  hugeInput,
  bindUIEventsHugeInput,
  bindUIEventsHugeInputOld,
};
