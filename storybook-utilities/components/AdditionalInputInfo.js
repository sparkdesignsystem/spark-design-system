import React from 'react';
import PropTypes from 'prop-types';
import {SprkList, SprkListItem} from '@sparkdesignsystem/spark-react';
import { getStorybookInstance } from '../getStorybookInstance';

const AdditionalInputInfo = (props) => {
  const {
    additionalHeaderClasses,
    additionalListClasses,
    additionalListItemClasses,
    headerElement,
    listElement,
    listVariant,
  } = props;

  const storybookInstance = getStorybookInstance();
  const isHTMLStorybook = (storybookInstance ===  'html');

  const TagName = headerElement;
  return (
    <React.Fragment>
      <TagName
        className={additionalHeaderClasses}
      >
        Additional Input Information
      </TagName>
      <SprkList
        element={listElement}
        additionalClasses={additionalListClasses}
      >
        <SprkListItem
          additionalClasses={additionalListItemClasses}
        >
          By default, Spark does not provide validation or formatting.
        </SprkListItem>
        <SprkListItem
          additionalClasses={additionalListItemClasses}
        >
          Special characters used in formatting (like the hyphens in the SSN field) are not automatically removed from the field value and may need to be manually removed. 
        </SprkListItem>
        <SprkListItem
          additionalClasses={additionalListItemClasses}
        >
          Each input element's id should be unique on the page.
        </SprkListItem>
        <SprkListItem
          additionalClasses={additionalListItemClasses}
        >
          The <code>type</code> attribute for an Input should be the most appropriate value that semantically matches your use case. 
        </SprkListItem>
        <SprkListItem
          additionalClasses={additionalListItemClasses}
        >
          The <code>data-id</code> property is provided as a hook for automated tools. If you have multiple instances of the same variant of a component on the same page, make sure each instance has a unique <code>data-id</code> property ("input-text-1", "input-text-2", "input-date-1", etc).
        </SprkListItem>
        {isHTMLStorybook && (
          <React.Fragment>
            <SprkListItem
              additionalClasses={additionalListItemClasses}
            >
              In Vanilla JS applications, if an input is required only, meaning that no validation is needed aside from a value being supplied, you can add the <code>data-sprk-required-only</code> attribute to the input container. The values that are available are 'text', 'select', and 'tick'. Text is for any input that accepts text as a value, Select is only for select inputs, and Tick is for radio buttons or checkboxes.
            </SprkListItem>
            <SprkListItem
              additionalClasses={additionalListItemClasses}
            >
              You should be providing your own validation for Inputs, not relying on the browser validation. Be sure to add the <code>novalidate</code> attribute to your form element to disable the browser implementation.
            </SprkListItem>
            <SprkListItem
              additionalClasses={additionalListItemClasses}
            >
              The Input Label <code>for</code> attribute must match the <code>id</code> attribute of the corresponding Input.
            </SprkListItem>
            <SprkListItem
              additionalClasses={additionalListItemClasses}
            >
              The value set in <code>aria-describedby</code> must match the <code>id</code> attribute on the error container.
            </SprkListItem>
          </React.Fragment>
        )}
      </SprkList>
    </React.Fragment>
  );
}

AdditionalInputInfo.defaultProps =  {
  additionalHeaderClasses: undefined,
  additionalListClasses: undefined,
  additionalListItemClasses: undefined,
  headerElement: 'h4',
  listElement: 'ul',
  listVariant: undefined,
}

AdditionalInputInfo.PropTypes = {
  /**
   * A space-separated string of classes to
   * add to the header.
   */
  additionalHeaderClasses: PropTypes.string,
  /**
   * A space-separated string of classes to
   * add to the list.
   */
  additionalListClasses: PropTypes.string,
  /**
   * A space-separated string of classes to
   * add to the list items.
   */
  additionalListItemClasses: PropTypes.string,
  /**
   * Determines the type of header element 
   * that will be rendered.
   */
  headerElement: PropTypes.string,
  /**
   * Determines the type of header element 
   * that will be rendered.
   */
  listElement: PropTypes.oneOf(['ol', 'ul']),
  /**
   * Will cause the appropriate list variant
   * type to render.
   */
  listVariant: PropTypes.oneOf(['indented', 'bare']),
}

export default AdditionalInputInfo;
