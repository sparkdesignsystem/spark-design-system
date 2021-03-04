import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SprkIcon from '../../../icons/SprkIcon';
import SprkButton from '../../../buttons/SprkButton';

const SprkCardTeaser = (props) => {
  const { teaserConfig } = props;
  const { bodyText, cta, media, title, titleFirst } = teaserConfig;

  const BodyText = () => (
    <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">{bodyText}</p>
  );

  const Title = () => (
    <h3
      className={cx('sprk-b-TypeDisplayFive sprk-o-Stack__item', {
        'sprk-c-Card__content': titleFirst,
        'sprk-u-TextAlign--center': media.mediaVariant === 'icon',
      })}
    >
      {title}
    </h3>
  );

  const Media = () => {
    const {
      additionalMediaIconClasses,
      href,
      mediaLinkElement,
      iconName,
      imgAlt,
      imgSrc,
      mediaAnalyticsString,
      mediaVariant,
      ...rest
    } = media;

    const TagName = mediaLinkElement || 'a';

    return (
      <TagName
        href={href}
        data-analytics={mediaAnalyticsString}
        className={cx('sprk-o-Stack__item', {
          'sprk-u-AbsoluteCenter': mediaVariant === 'icon',
        })}
        {...rest}
      >
        {mediaVariant === 'icon' ? (
          <SprkIcon
            iconName={iconName}
            additionalClasses={additionalMediaIconClasses}
          />
        ) : (
          <img
            className={cx({
              'sprk-c-Card__media': !titleFirst,
            })}
            alt={imgAlt}
            src={imgSrc}
          />
        )}
      </TagName>
    );
  };

  const CtaLink = () => {
    const {
      additionalCtaIconClasses,
      ctaAnalytics,
      ctaIcon,
      ctaLinkElement,
      ctaVariant,
      href,
      text,
      ...rest
    } = cta;

    const TagName = ctaLinkElement || 'a';

    return (
      <TagName
        className={cx('sprk-b-Link', {
          'sprk-b-Link--simple sprk-b-Link--has-icon': ctaIcon,
        })}
        data-analytics={ctaAnalytics}
        href={href}
        {...rest}
      >
        {text}
        {ctaIcon && (
          <SprkIcon
            iconName={ctaIcon}
            additionalClasses={additionalCtaIconClasses}
          />
        )}
      </TagName>
    );
  };

  const CtaButton = () => {
    const {
      ctaAnalytics,
      ctaIcon,
      ctaLinkElement,
      ctaVariant,
      href,
      buttonVariant,
      text,
      ...rest
    } = cta;

    const TagName = ctaLinkElement || SprkButton;

    return (
      <TagName
        data-analytics={ctaAnalytics}
        className={cx('sprk-c-Button', {
          'sprk-c-Button--secondary': buttonVariant === 'secondary',
          'sprk-c-Button--tertiary': buttonVariant === 'tertiary',
          'sprk-c-Button--quaternary': buttonVariant === 'quaternary',
        })}
        href={href}
        element="a"
        {...rest}
      >
        {text}
      </TagName>
    );
  };

  const CallToAction = () => (
    <div className="sprk-o-Stack__item">
      {cta.ctaVariant === 'link' ? <CtaLink /> : <CtaButton />}
    </div>
  );

  const GetTeaserContentOrder = () => {
    // Title at top
    if (titleFirst) {
      // with image
      return (
        <>
          <Title />
          <Media />
          <div
            className={cx(
              'sprk-o-Stack__item',
              'sprk-c-Card__content',
              'sprk-o-Stack',
              'sprk-o-Stack--large',
              {
                'sprk-u-TextAlign--center': media.mediaVariant === 'icon',
              },
            )}
          >
            <BodyText />
            <CallToAction />
          </div>
        </>
      );
    }

    // Icon at top
    if (media.mediaVariant === 'icon') {
      return (
        <>
          <div
            className="
              sprk-o-Stack__item
              sprk-c-Card__content
              sprk-o-Stack
              sprk-o-Stack--large
              sprk-u-TextAlign--center"
          >
            <Media />
            <Title />
            <BodyText />
            <CallToAction />
          </div>
        </>
      );
    }

    // Image at top
    return (
      <>
        <Media />
        <div
          className="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large"
        >
          <Title />
          <BodyText />
          <CallToAction />
        </div>
      </>
    );
  };

  return <GetTeaserContentOrder />;
};

SprkCardTeaser.propTypes = {
  /**
   * Configuration data for the Teaser.
   * Accepts data for the body text, the calls to action,
   * the media, and the title of the Card.
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
       * A space-separated string of classes
       * to add to the call-to-action icon.
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
       * Determines what icon `SprkIcon`
       * renders next to the Call to Action.
       */
      ctaIcon: PropTypes.string,
      /**
       * Determines if link renders as an
       * anchor tag, or router link.
       */
      ctaLinkElement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
      ]),
      /**
       * Determines if the call to action is a link or a button.
       * Will default to `link` if none provided.
       */
      ctaVariant: PropTypes.oneOf(['link', 'button']),
      /**
       * Determines the `href` of the media.
       */
      href: PropTypes.string,
      /** Text of the call to action. */
      text: PropTypes.string,
      /**
       * The variant to use for the call-to-action button.
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
       * A space-separated string of classes to
       * add to the media icon.
       */
      additionalMediaIconClasses: PropTypes.string,
      /**
       * Determines the href of the media.
       */
      href: PropTypes.string,
      /**
       * Determines if link renders as an
       * Anchor tag, or router link.
       */
      mediaLinkElement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
      ]),
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
       * Assigned to the `data-analytics` attribute
       * serving as a unique selector for outside
       * libraries to capture data.
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

SprkCardTeaser.defaultProps = {
  teaserConfig: {
    cta: {
      ctaVariant: 'link',
      ctaLinkElement: 'a',
    },
    media: {
      mediaVariant: 'img',
      mediaLinkElement: 'a',
    },
  },
};

export default SprkCardTeaser;
