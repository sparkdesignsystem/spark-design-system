import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import warning from 'warning';
import SprkCardHighlightedHeader from './components/SprkCardHighlightedHeader/SprkCardHighlightedHeader';
import SprkCardTeaser from './components/SprkCardTeaser/SprkCardTeaser';

const SprkCard = props => {
  const {
    additionalClasses,
    additionalContentClasses,
    children,
    highlightedHeaderConfig,
    idString,
    isStandout,
    teaserConfig,
  } = props;

  const highlightedHeaderConfigCount = Object.keys(highlightedHeaderConfig)
    .length;
  const teaserConfigCount = Object.keys(teaserConfig).length;

  /*
   TeaserConfigCount has some default props
   so it'll always have a count of 2 by default
  */
  const onlyHasHighlightedHeader =
    highlightedHeaderConfigCount > 0 && teaserConfigCount <= 2;
  const onlyHasTeaser =
    teaserConfigCount > 2 && highlightedHeaderConfigCount <= 0;
  const hasNoVariant =
    highlightedHeaderConfigCount <= 0 && teaserConfigCount <= 2;

  // Card can either only be base, teaser, or highlighted header
  warning(
    onlyHasTeaser || onlyHasHighlightedHeader || hasNoVariant,
    `SprkCard: cannot have teaserConfig and highlightedHeaderConfig propTypes
    at the same time.`,
  );

  const GetCardContent = () => {
    if (onlyHasHighlightedHeader) {
      return (
        <SprkCardHighlightedHeader
          highlightedHeaderConfig={highlightedHeaderConfig}
        />
      );
    }

    if (onlyHasTeaser) {
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
  additionalClasses: PropTypes.string,
  additionalContentClasses: PropTypes.string,
  children: PropTypes.node,
  highlightedHeaderConfig: PropTypes.shape({
    // Text inside of highlighted card
    bodyText: PropTypes.string,
    // Sub-headline of card
    description: PropTypes.string,
    // Headline of card
    title: PropTypes.string,
  }),
  // data-id
  idString: PropTypes.string,
  // Shadow darker than normal
  isStandout: PropTypes.bool,
  // Configures teaser
  teaserConfig: PropTypes.shape({
    // Text in the main body
    bodyText: PropTypes.string,
    cta: PropTypes.shape({
      // Extra classes on the Call to Action of Teaser
      additionalCtaIconClasses: PropTypes.string,
      // CTA Analytics
      ctaAnalytics: PropTypes.string,
      // Icon next to CTA
      ctaIcon: PropTypes.string,
      // Anchor tag, or router link at user discretion
      mediaLinkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      // Link or Button
      ctaVariant: PropTypes.oneOf(['link', 'button']),
      // Where the cta navigates to
      href: PropTypes.string,
      // Text of the CTA
      text: PropTypes.string,
    }),
    // Configs for the main media of the teaser card
    media: PropTypes.shape({
      // Additional classes if it's an icon
      additionalMediaIconClasses: PropTypes.string,
      // Where media navigates to
      href: PropTypes.string,
      // Anchor tag, or router link at user discretion
      mediaLinkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      // Reference name of SprkIcon
      iconName: PropTypes.string,
      // Alternative text for image
      imgAlt: PropTypes.string,
      // src for image
      imgSrc: PropTypes.string,
      // Analytics id tag for image
      mediaAnalyticsString: PropTypes.string,
      // Chooses if main media is img or SprkIcon
      mediaVariant: PropTypes.oneOf(['img', 'icon']),
    }),
    title: PropTypes.string,
    titleFirst: PropTypes.bool,
  }),
};

SprkCard.defaultProps = {
  additionalClasses: '',
  highlightedHeaderConfig: {},
  children: null,
  idString: null,
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
