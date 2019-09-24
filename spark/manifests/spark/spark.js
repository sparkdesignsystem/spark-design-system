// Import all Spark components
import { hugeInput } from '../../base/inputs/vanilla/hugeInput';
import { ssnInput } from '../../base/inputs/vanilla/ssnInput';
import passwordInput from '../../base/inputs/vanilla/passwordInput';
import { monetaryInput } from '../../base/inputs/vanilla/monetaryInput';
import { phoneInput } from '../../base/inputs/vanilla/phoneInput';
import { dateInput } from '../../base/inputs/vanilla/dateInput';
import { datePicker } from '../../base/inputs/vanilla/datePicker';
import { modals } from '../../components/modals/vanilla/modals';
import { requiredTextInput } from '../../base/inputs/vanilla/requiredTextInput';
import { requiredTick } from '../../base/inputs/vanilla/requiredTick';
import { requiredSelect } from '../../base/inputs/vanilla/requiredSelect';
import { pagination } from '../../components/pagination/vanilla/pagination';
import { tabs } from '../../components/tabs/vanilla/tabs';
import { toggle } from '../../components/toggle/vanilla/toggle';
import { spinners } from '../../components/spinners/vanilla/spinners';
import { masthead } from '../../components/masthead/vanilla/masthead';
import { alerts } from '../../components/alerts/vanilla/alerts';
import { dropdowns } from '../../components/dropdown/vanilla/dropdown';
import { stepper } from '../../components/stepper/vanilla/stepper';
import { highlightBoard } from '../../components/highlight-board/vanilla/highlight-board';
import versionCheck from '../../utilities/helpers/vanilla/versionCheck';

const Spark = ({ datePickerConfig = {} } = {}) => {
  requiredSelect();
  requiredTick();
  requiredTextInput();
  ssnInput();
  passwordInput();
  monetaryInput();
  phoneInput();
  dateInput();
  datePicker(datePickerConfig);
  modals();
  pagination();
  tabs();
  toggle();
  spinners();
  masthead();
  alerts();
  dropdowns();
  stepper();
  highlightBoard();
  hugeInput();
  // versionCheck(); //TODO get SPRK_CURRENT_VERSION var from webpack working
};

export { Spark as default };