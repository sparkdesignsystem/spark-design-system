import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkCarouselStep = props => {
  const {
    additionalClasses,
    children,
    idString,
    imgSrc,
    imgAlt,
    isSelected,
    ...other
  } = props;

  // validate that the image has an alt attribute and error as needed

  // console.log('rendering step ' + idString + ' with selected ' + isSelected);

  return (
    <li
      className={classnames(
        'sprk-c-Carousel__frame-item',
        isSelected ? 'active' : '',
      )}
      //data-id?
    >
      <img src={imgSrc} alt={imgAlt} />
    </li>
  );
};

SprkCarouselStep.propTypes = {
  // The children that will be rendered inside the component
  children: PropTypes.node,
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  idString: PropTypes.number,
  isSelected: PropTypes.bool,
};

SprkCarouselStep.defaultProps = {
};

export default SprkCarouselStep;
