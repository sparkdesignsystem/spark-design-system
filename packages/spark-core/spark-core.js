// Import all Spark-Core components
import { ssnInput } from './base/ssnInput';
import passwordInput from './base/passwordInput';
import { monetaryInput } from './base/monetaryInput';
import { phoneInput } from './base/phoneInput';
import { dateInput } from './base/dateInput';
import datePicker from './base/datePicker';
import modals from './components/modals';
import pagination from './components/pagination';

// Init
ssnInput();
passwordInput();
monetaryInput();
phoneInput();
dateInput();
datePicker();
modals();
pagination();
