import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import warning from 'warning';
import SprkButton from '../buttons/SprkButton';

const SprkHighlightBoard = (props) => {
  const {
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
    `SprkHighlightBoard: If imgSrc is provided, then imgAlt is required
    (and vice versa).`,
  );

  const classNames = classnames(
    'sprk-c-HighlightBoard',
    'sprk-u-mbm',
    additionalClasses,
    { 'sprk-c-HighlightBoard--has-image': imgSrc },
    { 'sprk-c-HighlightBoard--stacked': variant === 'stacked' },
  );

  return (
    <div className={classNames} data-id={idString} {...other}>
      {imgSrc && (
        <img
          className="sprk-c-HighlightBoard__image"
          src={imgSrc}
          alt={imgAlt}
        />
      )}

      <div
        className="sprk-c-HighlightBoard__content
        sprk-o-Stack sprk-o-Stack--large"
      >
        {heading && (
          <h1
            className="sprk-b-TypeDisplayOne
            sprk-c-HighlightBoard__heading sprk-o-Stack__item"
          >
            {heading}
          </h1>
        )}

        {(ctaText || ctaText2) && (
          <div
            className={classnames(
              'sprk-o-Stack__item',
              'sprk-o-Stack',
              'sprk-o-Stack--medium',
              'sprk-o-Stack--split@xs',
              'sprk-o-Stack--center-column',
              {
                'sprk-o-Stack--center-row':
                  variant === 'noImage' || variant === 'stacked',
              },
            )}
          >
            {ctaText && (
              <div className="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
                <SprkButton
                  element="a"
                  href={ctaHref}
                  analyticsString={ctaAnalytics}
                  idString={ctaIdString}
                  additionalClasses="sprk-c-Button--full@s"
                >
                  {ctaText}
                </SprkButton>
              </div>
            )}

            {ctaText2 && (
              <div className="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
                <SprkButton
                  variant="secondary"
                  element="a"
                  href={ctaHref2}
                  analyticsString={ctaAnalytics2}
                  idString={ctaIdString2}
                  additionalClasses="sprk-c-Button--full@s"
                >
                  {ctaText2}
                </SprkButton>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

SprkHighlightBoard.propTypes = {
  /**
   * The source for the main image.
   */
  imgSrc: PropTypes.string,
  /**
   * The `alt` text for the main image.
   */
  imgAlt: PropTypes.string,
  /**
   * The main headline for the section.
   */
  heading: PropTypes.string,
  /**
   * The text for the main call-to-action.
   */
  ctaText: PropTypes.string,
  /**
   * The `href` for the main call-to-action.
   */
  ctaHref: PropTypes.string,
  /**
   * The value supplied will be assigned to
   * the `data-analytics` attribute on the call-to-action.
   * Intended for an outside library to capture data.
   */
  ctaAnalytics: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  ctaIdString: PropTypes.string,
  /** The text for the second call-to-action. */
  ctaText2: PropTypes.string,
  /**
   * The `href` for the second call-to-action.
   */
  ctaHref2: PropTypes.string,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the second
   * call-to-action. Intended for an outside
   * library to capture data.
   */
  ctaAnalytics2: PropTypes.string,
  /**
   * The `data-id` for the second call-to-action.
   */
  ctaIdString2: PropTypes.string,
  /**
   * Determines the style of Highlight Board is rendered.
   */
  variant: PropTypes.oneOf(['noImage', 'stacked']),
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
};

SprkHighlightBoard.defaultProps = {
  imgSrc: null,
  imgAlt: null,
  heading: null,
  ctaText: null,
  ctaHref: null,
  ctaAnalytics: null,
  ctaIdString: null,
  ctaText2: null,
  ctaHref2: null,
  ctaAnalytics2: null,
  ctaIdString2: null,
  variant: null,
  idString: null,
  additionalClasses: null,
};

export default SprkHighlightBoard;
