import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkButton } from '@sparkdesignsystem/spark-core-react';
import warning from 'warning';

const SprkHighlightBoard = (props) => {
  const {
    children,
    imgSrc,
    imgAlt,
    heading,
    ctaText,
    ctaHref,
    ctaAnalytics,
    ctaIdString,
    ctaText2,
    ctaHref2,
    ctaAnalytics2,
    ctaIdString2,
    variant,
    additionalClasses,
    idString,
    analyticsString,
    ...other
  } = props;

  warning(
    (imgSrc && imgAlt) || (!imgSrc && !imgAlt),
    'SprkHighlightBoard: If imgSrc is provided, then imgAlt is required (and vice versa).'
  );

  const classNames = classnames(
    'sprk-c-HighlightBoard',
    'sprk-u-mbm',
    additionalClasses,
    {'sprk-c-HighlightBoard--has-image': imgSrc},
    {'sprk-c-HighlightBoard--stacked': variant === 'stacked'},
  );

  return (
    <div className={classNames} data-id={idString} {...other}>
      {imgSrc &&
        <img
          className='sprk-c-HighlightBoard__image'
          src={imgSrc}
          alt={imgAlt} />
      }

      <div className='sprk-c-HighlightBoard__content sprk-o-Stack sprk-o-Stack--large'>
        { heading &&
          <h1 className="sprk-b-TypeDisplayOne sprk-c-HighlightBoard__heading sprk-o-Stack__item">
            {heading}
          </h1>
        }

        <div className='sprk-o-Stack__item'>
          { children }
        </div>

        { (ctaText || ctaText2) &&
        <div className= {
          classnames(
            'sprk-o-Stack__item',
            'sprk-o-Stack',
            'sprk-o-Stack--medium',
            'sprk-o-Stack--split@xs',
            'sprk-o-Stack--center-column',
            {'sprk-o-Stack--center-row' : variant === 'noImage' || variant === 'stacked'}
          )
        } >

          { ctaText &&
            <div className="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
              <SprkButton
                element="a"
                href={ctaHref}
                analyticsString={ctaAnalytics}
                idString={ctaIdString}
                additionalClasses='sprk-c-Button--full@sm' >

                {ctaText}
              </SprkButton>
            </div>
          }

          { ctaText2 &&
            <div className="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
              <SprkButton
                variant='secondary'
                element="a"
                href={ctaHref2}
                analyticsString={ctaAnalytics2}
                idString={ctaIdString2}
                additionalClasses='sprk-c-Button--full@sm' >

                {ctaText2}
              </SprkButton>
            </div>
          }
        </div>
        }
      </div>
    </div>
  );
}

SprkHighlightBoard.propTypes = {
  // Child elements are rendered in the content section of the component.
  children: PropTypes.node,
  // The source for the image - required if imgAlt is provided
  imgSrc: PropTypes.string,
  // The alt text for the image - required if imgSrc is provided
  imgAlt: PropTypes.string,
  // The heading text
  heading: PropTypes.string,
  // The text for the first CTA
  ctaText: PropTypes.string,
  // The href for the first CTA
  ctaHref: PropTypes.string,
  // The data-analytics for the first CTA
  ctaAnalytics: PropTypes.string,
  // The data-id for the first CTA
  ctaIdString: PropTypes.string,
  // The text for the second CTA
  ctaText2: PropTypes.string,
  // The href for the second CTA
  ctaHref2: PropTypes.string,
  // The data-analytics for the second CTA
  ctaAnalytics2: PropTypes.string,
  // The data-id for the second CTA
  ctaIdString2: PropTypes.string,
  // The variant that determines the class names
  variant: PropTypes.oneOf(['noImage', 'stacked']),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the highlight board
  additionalClasses: PropTypes.string
};

export default SprkHighlightBoard;
