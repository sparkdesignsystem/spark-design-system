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
    ...other
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
        'sprk-u-TextAlign--center': teaserConfig.media.mediaVariant === 'icon',
      })}
      data-id={idString}
      {...other}
    >
      <GetCardContent />
    </div>
  );
};

SprkCard.propTypes = {
  /**
   * A space-separated string of classes to
   * add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the card content container.
   */
  additionalContentClasses: PropTypes.string,
  /**
   * Content to render inside of SprkCard.
   */
  children: PropTypes.node,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Determines if card style has a deeper shadow.
   */
  isStandout: PropTypes.bool,
  // TODO: Turn this prop into a oneOf type and include
  // the possible possibilities.It could also need a
  // default/base variant style. Issue #2496
  /**
   * Determines the type of card.
   * If none provided, it defaults to
   * the base card style.
   */
  variant: PropTypes.oneOf(['highlightedHeader', 'teaser']),
  /**
   * Configurations that
   * populate the content of SprkCard
   * with a highlighted Header.
   */
  highlightedHeaderConfig: PropTypes.shape({
    /**
     * The Highlighted Header Card's main body text.
     */
    bodyText: PropTypes.string,
    /**
     * The Highlighted Header Card's description.
     */
    description: PropTypes.string,
    /**
     * The Card's title.
     */
    title: PropTypes.string,
  }),
  /**
   * Configuration that populate the
   * content of SprkCard teaser.
   */
  teaserConfig: PropTypes.shape({
    /**
     * Teaser Card's body text.
     */
    bodyText: PropTypes.string,
    /**
     * Configures the call to action of a Teaser Card.
     */
    cta: PropTypes.shape({
      /**
       * A space-separated string of classes to
       * add to the call-to-action icon.
       */
      additionalCtaIconClasses: PropTypes.string,
      /**
       * Value assigned to the
       * `data-analytics` attribute on the Call to Action.
       * Intended for an outside
       * library to capture data.
       */
      ctaAnalytics: PropTypes.string,
      /**
       * Determines what icon `SprkIcon` renders next to
       * the Call to Action.
       */
      ctaIcon: PropTypes.string,
      /**
       * Determines if link renders as an anchor
       * tag, or router link.
       */
      ctaLinkElement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
      ]),
      /**
       * Determinds if the CTA is a link or a button.
       * Will default to `link` if none provided.
       */
      ctaVariant: PropTypes.oneOf(['link', 'button']),
      /**
       * Determines the href of the media.
       */
      href: PropTypes.string,
      /** Text of the CTA. */
      text: PropTypes.string,
      /**
       * The button variant to use for the call to action.
       */
      buttonVariant: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
      ]),
    }),
    /**
     * Configures the main media of the Teaser Card.
     */
    media: PropTypes.shape({
      /**
       * A space-separated string of classes to add to the media icon.
       */
      additionalMediaIconClasses: PropTypes.string,
      /**
       * Determines the href of the media.
       */
      href: PropTypes.string,
      /**
       * Determines if link renders as an Anchor tag, or router link.
       */
      mediaLinkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * Determines what icon `SprkIcon` renders
       * as the main media of the Teaser Card.
       */
      iconName: PropTypes.string,
      /** Alternative text for the main media of Teaser Card. */
      imgAlt: PropTypes.string,
      /** The source link for the media. */
      imgSrc: PropTypes.string,
      /**
       * Assigned to the `data-analytics` attribute serving
       * as a unique selector for outside libraries to capture data.
       */
      mediaAnalyticsString: PropTypes.string,
      /**
       * Determines which type of media renders.
       * Defaults to `img` if none provided.
       */
      mediaVariant: PropTypes.oneOf(['img', 'icon']),
    }),
    /**
     * Text that will show as as
     * the main headline of the Teaser Card.
     */
    title: PropTypes.string,
    /**
     * Determines if the Teaser Card's
     * title is at the top or below the main media.
     */
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
