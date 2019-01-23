import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkLink, SprkButton } from '@sparkdesignsystem/spark-core-react';

const SprkPromo = (props) => {
  const { 
    title,
    subtitle,
    children,
    cta,
    ctaText,
    buttonHref,
    buttonLinkAnalytics,
    ctaLinkHref,
    ctaLinkAnalytics,
    additionalClasses,
    additionalClassesContent,
    isFlag,
    additionalClassesFlagLink,
    flagLinkAnalytics,
    imgSrc,
    imgAlt,
    imgHref,
    imgLinkAnalytics,
    additionalClassesImgLink,
    mediaRev,
    hasBorder,
    idString,
    ...other
  } = props;
  
  return (
    <div
      className={
        classnames(
          'sprk-b-Promo',
          'sprk-o-Stack',
          {'sprk-c-Promo--flag': isFlag},
          {'sprk-c-Promo--bordered': hasBorder},
          additionalClasses
        )}
      data-id={idString}
      {...other} >
      {isFlag && !mediaRev && 

        <SprkLink 
          variant="plain"
          href={imgHref}
          additionalClasses={
            classnames(
              'sprk-o-Stack__item--fourth@s',
              'sprk-o-Stack__item',
              additionalClassesFlagLink
            )}
          analyticsString={flagLinkAnalytics}
        >
          <img
              className="sprk-c-Promo__image--flag"
              alt={imgAlt}
              src={imgSrc}
            />
        </SprkLink>
      }

      {imgSrc && !mediaRev && !isFlag && 

        <SprkLink
          variant="plain"
          href={imgHref}
          additionalClasses={
            classnames(
              'sprk-o-Stack__item',
              'sprk-o-Stack__item--half@s',
              additionalClassesImgLink
            )}
          analyticsString={imgLinkAnalytics}>
            <img
              className="sprk-c-Promo__image"
              alt={imgAlt}
              src={imgSrc}
            />
        </SprkLink>
      }

      <div className={
        classnames(
          'sprk-c-Promo__content',
          'sprk-o-Stack__item',
          'sprk-o-Stack',
          'sprk-o-Stack--large',
          {'sprk-o-Stack__item--three-fourths@s': isFlag},
          {'sprk-o-Stack__item--half@s': imgSrc},
          additionalClassesContent
        )
      } >
        {title && 
          <h3 className = "sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-c-Promo__title">
            {title}
          </h3>
        }

        {subtitle && 
          <div className="sprk-c-Promo__subtitle sprk-o-Stack__item">
            {subtitle}
          </div>
        }

        <div className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          {children}
        </div>

          {cta === 'button' && 
            <div className='sprk-o-Stack__item'>
              <SprkButton
                element="a"
                href={buttonHref}
                analyticsString={buttonLinkAnalytics}
                >
                {ctaText}
              </SprkButton>
            </div>
          }

          {cta === 'link' &&
            <SprkLink
              variant="plain"
              href={ctaLinkHref}
              additionalClasses={
                classnames(
                  'sprk-o-Stack__item',
                  'sprk-b-Link',
                  'sprk-b-Link--simple'
                )}
              analyticsString={ctaLinkAnalytics}>
                {ctaText}  
            </SprkLink>
          }
      </div>

      {isFlag && mediaRev && 

        <SprkLink 
          variant="plain"
          href={imgHref}
          additionalClasses={
            classnames(
              'sprk-o-Stack__item--fourth@s',
              'sprk-o-Stack__item',
              additionalClassesFlagLink
            )}
          analyticsString={flagLinkAnalytics}
          >
          <img
              className="sprk-c-Promo__image--flag"
              alt={imgAlt}
              src={imgSrc}
            />
        </SprkLink>
      }

      {imgSrc && mediaRev && !isFlag && 
        <SprkLink
          variant="plain"
          href={imgHref}
          additionalClasses={
            classnames(
              'sprk-o-Stack__item',
              'sprk-o-Stack__item--half@s',
              additionalClassesImgLink
            )}
          analyticsString={imgLinkAnalytics}>
            <img
              className="sprk-c-Promo__image"
              alt={imgAlt}
              src={imgSrc}
            />
        </SprkLink>
      }
    </div>
  );
}

SprkPromo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
  cta: PropTypes.string,
  ctaText: PropTypes.string,
  buttonHref: PropTypes.string,
  buttonLinkAnalytics: PropTypes.string,
  ctaLinkHref: PropTypes.string,
  ctaLinkAnalytics: PropTypes.string,
  additionalClasses: PropTypes.string, 
  additionalClassesContent: PropTypes.string,
  isFlag: PropTypes.bool,
  additionalClassesFlagLink: PropTypes.string,
  flagLinkAnalytics: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgHref: PropTypes.string,
  imgLinkAnalytics: PropTypes.string,
  additionalClassesImgLink: PropTypes.string,
  mediaRev: PropTypes.bool,
  hasBorder: PropTypes.bool,
  idString: PropTypes.string

  // The promo variant that determines the class names
  // variant: PropTypes.oneOf(['base', 'asdf']),
};

export default SprkPromo;