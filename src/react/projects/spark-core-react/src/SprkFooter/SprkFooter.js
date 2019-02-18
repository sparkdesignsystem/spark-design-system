import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkIcon from '../SprkIcon/SprkIcon';
import SprkFooterGlobalSection from './components/SprkFooterGlobalSection/SprkFooterGlobalSection';
import SprkFooterConnectIcons from './components/SprkFooterConnectIcons/SprkFooterConnectIcons';
import SprkFooterAwards from './components/SprkFooterAwards/SprkFooterAwards';

class SprkFooter extends Component {
  constructor(props) {
    super(props);
    const {
      linkColumns,
      additionalIcons,
      paragraphs,
    } = props;
    this.state = {
      linkColumnsHasIds: linkColumns.map(
        item => (
          {
            heading: item.heading,
            id: uniqueId(),
            links: item.links.map(link => (
              { id: uniqueId(), ...link }
            )),
          }
        ),
      ),
      additionalIconsHasIds: additionalIcons.map(
        icon => ({ id: uniqueId(), ...icon }),
      ),
      paragraphsHasIds: paragraphs.map(p => ({ id: uniqueId(), ...p })),
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
    } = this.props;

    const {
      linkColumnsHasIds,
      additionalIconsHasIds,
      paragraphsHasIds,
    } = this.state;
    const classNames = classnames(
      'sprk-o-Box sprk-o-Box--large sprk-u-BackgroundColor--gray',
      additionalClasses,
    );

    return (
      <div className={classNames}>
        <footer
          className="sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--misc-b"
          role="contentinfo"
          data-id={idString}
        >
          <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
            {globalItems
              && (
                <SprkFooterGlobalSection globalItems={globalItems} />
              )
            }
            <div className="sprk-o-Stack__item sprk-o-Stack__item--seven-tenths@m sprk-o-Stack sprk-o-Stack--medium">
              <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
                {linkColumnsHasIds.length > 0
                && (
                  linkColumnsHasIds.map(column => (
                    <div
                      key={column.id}
                      className="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-u-PaddingRight--a sprk-o-Stack sprk-o-Stack--large"
                    >
                      <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                        {column.heading}
                      </h3>

                      <ul className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare">
                        {column.links.map(columnLink => (
                          <li key={columnLink.id} className="sprk-o-Stack__item asfsdfasdf">
                            <a
                              className="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal"
                              href={columnLink.href}
                              data-analytics={columnLink.analyticsString}
                            >
                              {columnLink.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>

              {connectIcons
              && (
                <SprkFooterConnectIcons connectIcons={connectIcons} />
              )}
            </div>
          </div>

          <span className="sprk-c-Divider sprk-u-mvn sprk-u-mhm" />

          <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-PaddingTop--b">
            {awards
            && (
              <SprkFooterAwards awards={awards} />
            )}

            {paragraphs.length > 0
              && (
                paragraphsHasIds.map(p => (
                  <p key={p.id} className="sprk-o-Stack__item sprk-b-TypeBodyFour">
                    {p.text}
                  </p>
                ))
              )}

            {additionalIcons.length > 0
              && (
                <ul className="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
                  {additionalIconsHasIds.map(icon => (
                    <li key={icon.id} className="sprk-o-Stack__item">
                      <a className="sprk-b-Link sprk-b-Link--plain" href={icon.href}>
                        <SprkIcon iconName={icon.name} additionalClasses={`sprk-c-Icon--stroke-current-color sprk-c-Icon--l ${icon.addClasses}`} />
                        <span className="sprk-u-ScreenReaderText">{icon.screenReaderText}</span>
                      </a>
                    </li>
                  ))}
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
  // Additional CSS classes
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  // The data for the global site items
  globalItems: PropTypes.shape({
    // The main heading for the global section
    heading: PropTypes.string,
    // The global items
    items: PropTypes.arrayOf(PropTypes.shape({
      // The element to render for the global item's media
      mediaType: PropTypes.oneOf(['image', 'svg', 'SprkIcon']),
      // Assigned to src attribute of the image
      src: PropTypes.string,
      // Assigned to href
      mediaHref: PropTypes.string,
      // The alt text for the image
      altText: PropTypes.string,
      // Additional classes for the media
      mediaAddClasses: PropTypes.string,
      // The description of the image
      description: PropTypes.string,
    })),
  }),
  // The data for the columns of site links
  linkColumns: PropTypes.arrayOf(PropTypes.shape({
    // The main heading for the column
    heading: PropTypes.string,
    // The links for each column
    links: PropTypes.arrayOf(PropTypes.shape({
      // The link href
      href: PropTypes.string,
      // The link text
      text: PropTypes.string,
    })),
  })),
  // The icons to use in the connect section
  connectIcons: PropTypes.shape({
    // The main heading for the section
    heading: PropTypes.string,
    // The icons
    icons: PropTypes.arrayOf(PropTypes.shape({
      // The link href for the icon
      href: PropTypes.string,
      // The name of the icon
      name: PropTypes.string,
      // Text used for screen readers
      screenReaderText: PropTypes.string,
    })),
  }),
  // The awards section data
  awards: PropTypes.shape({
    // The main heading for the section
    heading: PropTypes.string,
    // The award images
    images: PropTypes.arrayOf(PropTypes.shape({
      // The link href for the image
      href: PropTypes.string,
      // The image src
      src: PropTypes.string,
      // Image alt text
      altText: PropTypes.string,
      // Additional classes for the image
      addClasses: PropTypes.string,
    })),
  }),
  // Data used for additional icons at bottom of footer
  additionalIcons: PropTypes.arrayOf(PropTypes.shape({
    // The icon name
    name: PropTypes.string,
    // The icon href
    href: PropTypes.string,
    // Additional classes for the icon
    addClasses: PropTypes.string,
    // Text used for screen readers
    screenReaderText: PropTypes.string,
  })),
  // The paragraphs, copyright info, etc
  paragraphs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
  })),
};

export default SprkFooter;
