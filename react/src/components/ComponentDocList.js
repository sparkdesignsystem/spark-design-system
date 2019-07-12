import React from 'react';
import PropTypes from 'prop-types';
import {
  SprkList,
  SprkListItem
} from '@sparkdesignsystem/spark-react';

const ComponentDocList = ({ heading, list, ...rest }) =>
(
  <div className="sprk-o-Box" {...rest }>
    <h2 className="sprk-b-TypeDisplayThree sprk-u-mbm">
      { heading }
    </h2>

    <SprkList element="ul">
      {list.map((item, i) =>(<SprkListItem key={i}>{item}</SprkListItem>))}
    </SprkList>
  </div>
);

export default ComponentDocList;

ComponentDocList.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.array,
};
