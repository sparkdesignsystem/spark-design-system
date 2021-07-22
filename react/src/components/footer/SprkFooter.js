import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import SprkIcon from '../icons/SprkIcon';
import SprkFooterGlobalSection from './components/SprkFooterGlobalSection/SprkFooterGlobalSection';
import SprkFooterConnectIcons from './components/SprkFooterConnectIcons/SprkFooterConnectIcons';
import SprkDivider from '../dividers/SprkDivider';
import SprkFooterAwards from './components/SprkFooterAwards/SprkFooterAwards';

class SprkFooter extends Component {
  constructor(props) {
    super(props);
    const { linkColumns, additionalIcons, paragraphs } = props;
    this.state = {
      linkColumnsHasIds: linkColumns.map((item) => ({
        heading: item.heading,
        id: uniqueId(),
        links: item.links.map((link) => ({ id: uniqueId(), ...link })),
      })),
      additionalIconsHasIds: additionalIcons.map((icon) => ({
        id: uniqueId(),
        ...icon,
      })),
      paragraphsHasIds: paragraphs.map((p) => ({ id: uniqueId(), ...p })),
    };
  }

  render() {
    const {
      globalItems,
      connectIcons,
      additionalClasses,
      idString,
      awards,
      paragraphs,
      additionalIcons,
      additionalDisclaimer,
    } = this.props;

    const {
      linkColumnsHasIds,
      additionalIconsHasIds,
      paragraphsHasIds,
    } = this.state;
    const classNames = classnames(
      'sprk-o-Box sprk-o-Box--large sprk-c-Footer',
      additionalClasses,
    );

    return (
      <div className={classNames}>
        <footer
          className="sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--misc-b"
          role="contentinfo"
          data-id={idString}
        >
          <div
            className="sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--medium
              sprk-o-Stack--split@m"
          >
            {Object.keys(globalItems).length > 1 && (
              <SprkFooterGlobalSection globalItems={globalItems} />
            )}
            <div
              className="sprk-o-Stack__item
                sprk-o-Stack__item--seven-tenths@m
                sprk-o-Stack
                sprk-o-Stack--medium"
            >
              <div
                className="sprk-o-Stack__item
                  sprk-o-Stack
                  sprk-o-Stack--medium
                  sprk-o-Stack--split@m"
              >
                {linkColumnsHasIds.length > 0 &&
                  linkColumnsHasIds.map((column) => (
                    <div
                      key={column.id}
                      className="
                        sprk-o-Stack__item
                        sprk-o-Stack__item--third@m
                        sprk-c-Footer__local-links
                        sprk-o-Stack
                        sprk-o-Stack--large
                      "
                    >
                      <h3
                        className="
                          sprk-o-Stack__item
                          sprk-b-TypeBodyOne
                          sprk-c-Footer__text
                        "
                      >
                        {column.heading}
                      </h3>

                      <ul
                        className="
                          sprk-o-Stack__item
                          sprk-o-Stack
                          sprk-o-Stack--misc-a
                          sprk-b-List
                          sprk-b-List--bare
                        "
                      >
                        {column.links.map((columnLink) => {
                          const {
                            id,
                            href,
                            analyticsString,
                            text,
                            element,
                            ...rest
                          } = columnLink;
                          const TagName = element || 'a';
                          return (
                            <li key={id} className="sprk-o-Stack__item">
                              <TagName
                                className="
                                  sprk-c-Footer__link
                                  sprk-b-Link
                                  sprk-b-Link--light
                                "
                                href={
                                  TagName === 'a' ? href || '#nogo' : undefined
                                }
                                data-analytics={analyticsString}
                                {...rest}
                              >
                                {text}
                              </TagName>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
              </div>

              {Object.keys(connectIcons).length > 1 && (
                <SprkFooterConnectIcons connectIcons={connectIcons} />
              )}
            </div>
          </div>

          <SprkDivider element="span" additionalClasses="sprk-c-Footer__divider" />

          <div
            className="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--misc-b
              sprk-c-Footer__awards
            "
          >
            {Object.keys(awards).length > 1 && (
              <SprkFooterAwards awards={awards} />
            )}

            {paragraphs.length > 0 &&
              paragraphsHasIds.map((p) => (
                <p
                  key={p.id}
                  className="
                    sprk-o-Stack__item
                    sprk-b-TypeBodyFour
                    sprk-c-Footer__text
                  "
                >
                  {p.text}
                </p>
              ))}

            {/* To allow users to use inline links until
            compositional footer is available */}
            {additionalDisclaimer}
            {additionalIcons.length > 0 && (
              <ul
                className="
                  sprk-o-Stack__item
                  sprk-o-Stack__item--flex@m
                  sprk-o-Stack
                  sprk-o-Stack--split@xxs
                  sprk-o-Stack--medium
                  sprk-b-List sprk-b-List--bare
                "
              >
                {additionalIconsHasIds.map((icon) => {
                  const {
                    id,
                    href,
                    analyticsString,
                    name,
                    addClasses,
                    screenReaderText,
                    element,
                    ...rest
                  } = icon;
                  const TagName = element || 'a';
                  return (
                    <li key={id} className="sprk-o-Stack__item">
                      <TagName
                        className="sprk-b-Link sprk-b-Link--plain"
                        href={TagName === 'a' ? href || '#nogo' : undefined}
                        data-analytics={analyticsString}
                        {...rest}
                      >
                        <SprkIcon
                          iconName={name}
                          additionalClasses={classnames(
                            `sprk-c-Footer__icon`,
                            `sprk-c-Icon--xl`,
                            addClasses,
                          )}
                        />
                        <span className="sprk-u-ScreenReaderText">
                          {screenReaderText}
                        </span>
                      </TagName>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </footer>
      </div>
    );
  }
}

SprkFooter.defaultProps = {
  additionalClasses: '',
  idString: '',
  globalItems: {},
  linkColumns: [],
  connectIcons: {},
  awards: {},
  additionalIcons: [],
  paragraphs: [],
};

SprkFooter.propTypes = {
  /**
   * A node for additional disclaimers that have inline links.
   */
  additionalDisclaimer: PropTypes.node,
  /**
   * A space-separated string of classes
   * to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /** Object used to configure the global items section. */
  globalItems: PropTypes.shape({
    /** Main headline for the global section. */
    heading: PropTypes.string,
    /** Object used to configure each item in global items section such as
     * `mediaType`, `src`, `description` etc. */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /** The type of media element to render. */
        mediaType: PropTypes.oneOf(['image', 'svg', 'SprkIcon']),
        /**
         * Assigned to `src` attribute of the item's image.
         */
        src: PropTypes.string,
        /**
         * Assigned to `href` of item.
         */
        mediaHref: PropTypes.string,
        /**
         * The `alt` text for the image, icon, or `SprkIcon`.
         */
        altText: PropTypes.string.isRequired,
        /**
         * Expects a space separated string
         * of classes to be added to the
         * media of the item.
         */
        mediaAddClasses: PropTypes.string,
        /** The description of the image */
        description: PropTypes.string,
        /**
         * Assigned to the `data-analytics` attribute serving
         * as a unique selector for outside libraries to capture data.
         */
        analyticsString: PropTypes.string,
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      }),
    ),
  }),
  /** Constructs the columns of links in the Footer.
   * Maximum number of columns is 3. */
  linkColumns: PropTypes.arrayOf(
    PropTypes.shape({
      /** The main headline for the column. */
      heading: PropTypes.string,
      /**  The links for each column. */
      links: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * The link `href`.
           */
          href: PropTypes.string,
          /**
           * The link text.
           */
          text: PropTypes.string,
          /**
           * Determines if link renders as an anchor tag, or router link.
           */
          element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
          /**
           * Assigned to the `data-analytics` attribute serving
           * as a unique selector for outside libraries to capture data.
           */
          analyticsString: PropTypes.string,
        }),
      ),
    }),
  ),
  /** Constructs the Connect Icon Section. */
  connectIcons: PropTypes.shape({
    /** The main headline for the section. */
    heading: PropTypes.string,
    /** Configures the icons for the section. */
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        /** The link `href` for the icon. */
        href: PropTypes.string,
        /** Determines what icon `SprkIcon` renders */
        name: PropTypes.string,
        /** Text used for screen readers. */
        screenReaderText: PropTypes.string,
        /**
         * Assigned to the `data-analytics` attribute serving
         * as a unique selector for outside libraries to capture data.
         */
        analyticsString: PropTypes.string,
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      }),
    ),
  }),
  /** Configures the Awards Section. */
  awards: PropTypes.shape({
    /** The main headline for the section. */
    heading: PropTypes.string,
    /** Configures the images in the Awards Section. */
    images: PropTypes.arrayOf(
      PropTypes.shape({
        /** The link href for the image. */
        href: PropTypes.string,
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        /**
         * The image `src`.
         */
        src: PropTypes.string,
        /**
         * The `alt` text for the image, icon, or `SprkIcon`.
         */
        altText: PropTypes.string.isRequired,
        /**
         * Expects a space separated string of
         * classes to be added to the award image.
         */
        addClasses: PropTypes.string,
        /**
         * Assigned to the `data-analytics` attribute serving
         * as a unique selector for outside libraries to capture data.
         */
        analyticsString: PropTypes.string,
      }),
    ),
    /** The text rendered in the disclaimer. */
    disclaimerText: PropTypes.string,
    /**
     * The value supplied will be assigned to the
     * `data-analytics` attribute on the disclaimer.
     * Intended for an outside
     * library to capture data.
     */
    disclaimerAnalytics: PropTypes.string,
    /** The title text rendered in the disclaimer. */
    disclaimerTitle: PropTypes.string,
  }),
  /** Configuration used for additional icons at bottom of footer. */
  additionalIcons: PropTypes.arrayOf(
    PropTypes.shape({
      /** The icon name `SprkIcon` will use to render. */
      name: PropTypes.string,
      /** The icon `href`. */
      href: PropTypes.string,
      /**
       * Expects a space separated string of
       * classes to be added to the icon.
       */
      addClasses: PropTypes.string,
      /** Text used for screen readers. */
      screenReaderText: PropTypes.string,
      /**
       * Determines if link renders as an anchor tag, or router link.
       */
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * Assigned to the `data-analytics` attribute serving
       * as a unique selector for outside libraries to capture data.
       */
      analyticsString: PropTypes.string,
    }),
  ),
  /** Configuration for the paragraphs of copyright info, etc. */
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The text to render in the paragraphs section.
       */
      text: PropTypes.string,
    }),
  ),
};

export default SprkFooter;
