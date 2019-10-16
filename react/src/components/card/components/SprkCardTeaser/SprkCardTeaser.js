import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SprkIcon from '../../../../icons/react/SprkIcon';
import SprkButton from '../../../../buttons/react/SprkButton';

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
      text,
      ...rest
    } = cta;

    const TagName = ctaLinkElement || SprkButton;

    return (
      <TagName
        data-analytics={ctaAnalytics}
        className="sprk-c-Button"
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
        <React.Fragment>
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
        </React.Fragment>
      );
    }

    // Icon at top
    if (media.mediaVariant === 'icon') {
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    }

    // Image at top
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  };

  return <GetTeaserContentOrder />;
};

SprkCardTeaser.propTypes = {
  teaserConfig: PropTypes.shape({
    bodyText: PropTypes.string,
    cta: PropTypes.shape({
      additionalCtaIconClasses: PropTypes.string,
      ctaAnalytics: PropTypes.string,
      ctaIcon: PropTypes.string,
      ctaLinkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      ctaVariant: PropTypes.oneOf(['link', 'button']),
      href: PropTypes.string,
      text: PropTypes.string,
    }),
    media: PropTypes.shape({
      additionalMediaIconClasses: PropTypes.string,
      href: PropTypes.string,
      mediaLinkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      iconName: PropTypes.string,
      imgAlt: PropTypes.string,
      imgSrc: PropTypes.string,
      mediaAnalyticsString: PropTypes.string,
      mediaVariant: PropTypes.oneOf(['img', 'icon']),
    }),
    title: PropTypes.string,
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
