// Import all Spark-Core components
import { ssnInput } from './base/ssnInput';
import passwordInput from './base/passwordInput';
import { monetaryInput } from './base/monetaryInput';
import { phoneInput } from './base/phoneInput';
import { dateInput } from './base/dateInput';
import datePicker from './base/datePicker';
import modals from './components/modals';
import { requiredTextInput } from './base/requiredTextInput';
import { requiredTick } from './base/requiredTick';
import pagination from './components/pagination';

// Init
requiredTick();
requiredTextInput();
ssnInput();
passwordInput();
monetaryInput();
phoneInput();
dateInput();
datePicker();
modals();
pagination();
