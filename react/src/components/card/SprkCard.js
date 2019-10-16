import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SprkCardHighlightedHeader from './components/SprkCardHighlightedHeader/SprkCardHighlightedHeader';
import SprkCardTeaser from './components/SprkCardTeaser/SprkCardTeaser';

const SprkCard = (props) => {
  const {
    additionalClasses,
    additionalContentClasses,
    children,
    highlightedHeaderConfig,
    idString,
    isStandout,
    teaserConfig,
    variant,
  } = props;

  const GetCardContent = () => {
    if (variant === 'highlightedHeader') {
      return (
        <SprkCardHighlightedHeader
          highlightedHeaderConfig={highlightedHeaderConfig}
        />
      );
    }

    if (variant === 'teaser') {
      return <SprkCardTeaser teaserConfig={teaserConfig} />;
    }

    return (
      <div
        className={cx(
          'sprk-c-Card__content sprk-o-Stack__item',
          additionalContentClasses,
        )}
      >
        {children}
      </div>
    );
  };

  return (
    <div
      className={cx('sprk-c-Card sprk-o-Stack', additionalClasses, {
        'sprk-c-Card--standout': isStandout,
        'sprk-u-TextAlign--center': teaserConfig.mediaType === 'icon',
      })}
      data-id={idString}
    >
      <GetCardContent />
    </div>
  );
};

SprkCard.propTypes = {
  /** Additional classes for */
  additionalClasses: PropTypes.string,
  /** Additional classes for content container */
  additionalContentClasses: PropTypes.string,
  /** Takes content for a base card */
  children: PropTypes.node,
  /** data-id */
  idString: PropTypes.string,
  /** Shadow darker than normal */
  isStandout: PropTypes.bool,
  /** Additional Card types (highlightedHeader, teaser) */
  variant: PropTypes.string,
  /** Configures highlighted header */
  highlightedHeaderConfig: PropTypes.shape({
    /** Text inside of highlighted card */
    bodyText: PropTypes.string,
    /** Sub-headline of card */
    description: PropTypes.string,
    /** Headline of card */
    title: PropTypes.string,
  }),
  /** Configures teaser */
  teaserConfig: PropTypes.shape({
    /** Text in the main body */
    bodyText: PropTypes.string,
    cta: PropTypes.shape({
      /** Extra classes on the Call to Action of Teaser */
      additionalCtaIconClasses: PropTypes.string,
      /** CTA Analytics */
      ctaAnalytics: PropTypes.string,
      /** Icon next to CTA */
      ctaIcon: PropTypes.string,
      /** Anchor tag, or router link at user discretion */
      mediaLinkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /** Link or Button */
      ctaVariant: PropTypes.oneOf(['link', 'button']),
      /** Where the cta navigates to */
      href: PropTypes.string,
      /** Text of the CTA */
      text: PropTypes.string,
    }),
    /** Configs for the main media of the teaser card */
    media: PropTypes.shape({
      /** Additional classes if it's an icon */
      additionalMediaIconClasses: PropTypes.string,
      /** Where media navigates to */
      href: PropTypes.string,
      /** Anchor tag, or router link at user discretion */
      mediaLinkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /** Reference name of SprkIcon */
      iconName: PropTypes.string,
      /** Alternative text for image */
      imgAlt: PropTypes.string,
      /** src for image */
      imgSrc: PropTypes.string,
      /** Analytics id tag for image */
      mediaAnalyticsString: PropTypes.string,
      /** Chooses if main media is img or SprkIcon */
      mediaVariant: PropTypes.oneOf(['img', 'icon']),
    }),
    /** title of teaser card */
    title: PropTypes.string,
    /** Decides if title goes first */
    titleFirst: PropTypes.bool,
  }),
};

SprkCard.defaultProps = {
  isStandout: false,
  teaserConfig: {
    cta: {
      ctaVariant: 'link',
      ctaLinkElement: 'SprkLink',
    },
    media: {
      mediaVariant: 'img',
      mediaLinkElement: 'a',
    },
  },
};

export default SprkCard;
