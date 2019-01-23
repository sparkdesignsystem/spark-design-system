import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkLink, SprkButton } from '@sparkdesignsystem/spark-core-react';

const SprkPromo = (props) => {
  const { 
    title,
    subtitle,
    additionalClasses,
    additionalClassesContent,
    cta,
    ctaText,
    ctaHref,
    ctaAnalytics,
    ctaIdString,
    imgSrc,
    imgAlt,
    imgLinkHref,
    imgLinkAnalytics,
    imgLinkIdString,
    additionalClassesImgLink,
    idString,
    isFlag,
    mediaRev,
    hasBorder,
    children,
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
          href={imgLinkHref}
          additionalClasses={
            classnames(
              'sprk-o-Stack__item--fourth@s',
              'sprk-o-Stack__item',
              additionalClassesImgLink
            )}
          analyticsString={imgLinkAnalytics}
          idString={imgLinkIdString} >

          <img
              className="sprk-c-Promo__image--flag"
              alt={imgAlt}
              src={imgSrc} />
        </SprkLink>
      }

      {imgSrc && !mediaRev && !isFlag && 
        <SprkLink
          variant="plain"
          href={imgLinkHref}
          additionalClasses={
            classnames(
              'sprk-o-Stack__item',
              'sprk-o-Stack__item--half@s',
              additionalClassesImgLink
            )}
          analyticsString={imgLinkAnalytics}
          idString={imgLinkIdString} >

          <img
            className="sprk-c-Promo__image"
            alt={imgAlt}
            src={imgSrc} />
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
        )} >
        
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
              href={ctaHref}
              analyticsString={ctaAnalytics}
              idString={ctaIdString} >

              {ctaText}
            </SprkButton>
          </div>
        }

        {cta === 'link' &&
          <div class="sprk-o-Stack__item">
            <SprkLink
              variant="base"
              href={ctaHref}
              analyticsString={ctaAnalytics}
              idString={ctaIdString} >
              
                {ctaText}  
            </SprkLink>
          </div>
        }
      </div>

      {isFlag && mediaRev && 

        <SprkLink 
          variant="plain"
          href={imgLinkHref}
          additionalClasses={
            classnames(
              'sprk-o-Stack__item--fourth@s',
              'sprk-o-Stack__item',
              additionalClassesImgLink
            )}
          analyticsString={imgLinkAnalytics}
          idString={imgLinkIdString} >

          <img
              className="sprk-c-Promo__image--flag"
              alt={imgAlt}
              src={imgSrc} />

        </SprkLink>
      }

      {imgSrc && mediaRev && !isFlag && 
      
        <SprkLink
          variant="plain"
          href={imgLinkHref}
          additionalClasses={
            classnames(
              'sprk-o-Stack__item',
              'sprk-o-Stack__item--half@s',
              additionalClassesImgLink
            )}
          analyticsString={imgLinkAnalytics}
          idString={imgLinkIdString} >

            <img
              className="sprk-c-Promo__image"
              alt={imgAlt}
              src={imgSrc} />

        </SprkLink>
      }
    </div>
  );
}

SprkPromo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,

  additionalClasses: PropTypes.string, 
  additionalClassesContent: PropTypes.string,
  
  cta: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  ctaAnalytics: PropTypes.string,
  ctaIdString: PropTypes.string,

  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgLinkHref: PropTypes.string,
  imgLinkAnalytics: PropTypes.string,
  imgLinkIdString: PropTypes.string,
  additionalClassesImgLink: PropTypes.string,
  
  idString: PropTypes.string,

  isFlag: PropTypes.bool,
  mediaRev: PropTypes.bool,
  hasBorder: PropTypes.bool,
};

export default SprkPromo;