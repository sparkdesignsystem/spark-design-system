import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import warning from 'warning';
import SprkButton from '../buttons/SprkButton';
import SprkStack from '../../objects/stack/SprkStack';
import SprkStackItem from '../../objects/stack/components/SprkStackItem/SprkStackItem';
import SprkHeading from '../../base/typography/SprkHeading/SprkHeading';

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
    ...other
  } = props;

  warning(
    !(ctaText2 !== null && ctaText === null),
    `
    Spark Design System Warning - SprkHighlightBoard Component:
    A secondary call-to-action (CTA)
    should not exist without a primary CTA.
    If there is only one CTA, it must be set on
    ctaText and ctaHref.
    `,
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

      <SprkStack
        itemSpacing="large"
        additionalClasses="sprk-c-HighlightBoard__content"
      >
        {heading && (
          <SprkStackItem>
            <SprkHeading
              variant="displayOne"
              additionalClasses="sprk-c-HighlightBoard__heading"
            >
              {heading}
            </SprkHeading>
          </SprkStackItem>
        )}

        {ctaText && (
          <SprkStack
            itemSpacing="medium"
            splitAt="tiny"
            additionalClasses={classnames(
              'sprk-o-Stack__item',
              'sprk-o-Stack--center-column',
              {
                'sprk-o-Stack--center-row':
                  variant === 'noImage' || variant === 'stacked',
              },
            )}
          >
            <SprkStackItem additionalClasses="sprk-c-HighlightBoard__cta">
              <SprkButton
                variant="secondary"
                element="a"
                href={ctaHref}
                analyticsString={ctaAnalytics}
                idString={ctaIdString}
                additionalClasses="sprk-c-Button--full@s"
              >
                {ctaText}
              </SprkButton>
            </SprkStackItem>

            {ctaText2 && (
              <SprkStackItem additionalClasses="sprk-c-HighlightBoard__cta">
                <SprkButton
                  element="a"
                  href={ctaHref2}
                  analyticsString={ctaAnalytics2}
                  idString={ctaIdString2}
                  additionalClasses="sprk-c-Button--full@s"
                >
                  {ctaText2}
                </SprkButton>
              </SprkStackItem>
            )}
          </SprkStack>
        )}
      </SprkStack>
    </div>
  );
};

SprkHighlightBoard.propTypes = {
  /**
   * The source for the main image.
   */
  imgSrc: PropTypes.string,
  /**
   * The `alt` text for the main image. If the image used is decorative and
   * does not present any important content, set this property to `""` so
   * the image will be hidden from assistive technology.
   */
  imgAlt: PropTypes.string,
  /**
   * The main headline for the section.
   */
  heading: PropTypes.string,
  /**
   * The Highlight Board will use this as
   * the text for the main call to action.
   */
  ctaText: PropTypes.string,
  /**
   * The Highlight Board will use this as the
   * `href` for the main call to action.
   */
  ctaHref: PropTypes.string,
  /**
   * The value supplied will be assigned to
   * the `data-analytics` attribute on the call to action.
   * Intended for an outside library to capture data.
   */
  ctaAnalytics: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a
   * unique selector for automated tools.
   */
  ctaIdString: PropTypes.string,
  /** The text for the second call to action. */
  ctaText2: PropTypes.string,
  /**
   * The `href` for the second call to action.
   */
  ctaHref2: PropTypes.string,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the second
   * call to action. Intended for an outside
   * library to capture data.
   */
  ctaAnalytics2: PropTypes.string,
  /**
   * The `data-id` for the second call to action.
   */
  ctaIdString2: PropTypes.string,
  /**
   * Determines the style of the Highlight Board that
   * is rendered.
   */
  variant: PropTypes.oneOf(['noImage', 'stacked']),
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to
   * the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkHighlightBoard;
