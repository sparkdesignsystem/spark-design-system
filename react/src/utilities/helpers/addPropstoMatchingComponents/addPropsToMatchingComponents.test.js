import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addPropsToMatchingComponents from './addPropsToMatchingComponents';

Enzyme.configure({ adapter: new Adapter() });

describe('addPropsToMatchingComponents tests', () => {
  let collectionArray = null;

  beforeEach(() => {
    const MyComponent = () => {
      return <p>Component</p>;
    };
    const MyOtherComponent = () => {
      return <span>Other Component</span>;
    };
    const MyCollection = () => {
      return (
        <>
          <MyComponent />
          <MyComponent />
          <MyOtherComponent />
        </>
      );
    };

    const wrapper = mount(<MyCollection />);
    collectionArray = React.Children.toArray(
      wrapper.find(MyCollection).children(),
    );
  });

  it('should add a prop to a component with the correct name', () => {
    const modifiedArray = addPropsToMatchingComponents(
      collectionArray,
      'MyOtherComponent',
      {
        id: 'my-other-id',
      },
    );
    modifiedArray
      .filter((item) => item.type.name === 'MyOtherComponent')
      .map((item) => {
        expect(item.props.id).toEqual('my-other-id');
        return item;
      });
  });
});
