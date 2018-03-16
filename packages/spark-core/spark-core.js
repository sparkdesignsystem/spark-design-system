// Import all Spark-Core components
import {ssnInput} from './base/ssnInput';
import {passwordInput} from './base/passwordInput';
import {monetaryInputs} from './base/monetaryInput';
import {phoneInput} from './base/phoneInput';
import modals from './components/modals';

// Init
ssnInput();
passwordInput();
monetaryInputs();
phoneInput();
modals();

