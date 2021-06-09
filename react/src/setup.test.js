/* eslint-disable no-unused-vars */
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
/* eslint-enable no-unused-vars */
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

const matchMediaStub = sinon.stub();

matchMediaStub.returns({
  matches: false,
  addListener() {},
  removeListener() {},
});

window.matchMedia = window.matchMedia || matchMediaStub;
global.Enzyme = Enzyme;
global.Adapter = Adapter;
global.mount = mount;
global.shallow = shallow;
global.sinon = sinon;
