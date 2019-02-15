import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkIcon from '../SprkIcon/SprkIcon';
import SprkFooterGlobalSection from './components/SprkFooterGlobalSection/SprkFooterGlobalSection';
import SprkFooterConnectIcons from './components/SprkFooterConnectIcons/SprkFooterConnectIcons';

class SprkFooter extends Component {
  constructor(props) {
    super(props);
    const {
      linkColumns,
      awards,
      additionalIcons,
      paragraphs,
    } = props;
// connectIcons awards
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
      awardsImagesHasIds: awards.images.map(
        item => ({ id: uniqueId(), ...item }),
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
      awardsImagesHasIds,
      additionalIconsHasIds,
      paragraphsHasIds,
    } = this.state;
    const classNames = classnames(
      'sprk-o-Box sprk-o-Box--large sprk-u-BackgroundColor--gray',
      additionalClasses,
    );

    return (
      <div className={classNames}>
        <footer className="sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--misc-b" role="contentinfo" data-id={idString}>
          <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
            {globalItems.items.length > 0
              && (
                <SprkFooterGlobalSection globalItems={globalItems} />
              )}
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
                            <a className="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href={columnLink.href}>
                              {columnLink.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>

              {connectIcons.icons.length > 0
              && (
                <SprkFooterConnectIcons connectIcons={connectIcons} />
              )}
            </div>
          </div>

          <span className="sprk-c-Divider sprk-u-mvn sprk-u-mhm" />

          <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-PaddingTop--b">
            {awards.images.length > 0
            && (
              <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large">
                <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                  {awards.heading}
                </h3>

                <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-u-mbm">
                  {awardsImagesHasIds.map(image => (
                    <div key={image.id} className="sprk-o-Stack__item">
                      <a href={image.href}>
                        <img className={image.addClasses} src={image.src} alt={image.altText} />
                      </a>
                    </div>
                  ))}
                </div>

                <div className="sprk-o-Stack__item">
                  <div>
                    <a className="sprk-b-TypeBodyFour sprk-b-Link sprk-b-Link--simple sprk-b-Link--has-icon sprk-u-FontWeight--normal" href="#nogo">
                      <svg className="sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color sprk-c-Icon--toggle sprk-u-mrs" viewBox="0 0 64 64">
                        <use xlinkHref="#chevron-down-circle-two-color" />
                      </svg>
                      {awards.disclaimerTitle}
                    </a>

                    <div>
                      <p className="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
                        {awards.disclaimerText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  // The data for the global site items
  globalItems: PropTypes.shape({
    heading: PropTypes.string,
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
    heading: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      // The link href
      href: PropTypes.string,
      // The link text
      text: PropTypes.string,
    })),
  })),
  // The icons to use in the connect section
  connectIcons: PropTypes.shape({
    heading: PropTypes.string,
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
    heading: PropTypes.string,
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
    name: PropTypes.string,
    href: PropTypes.string,
    addClasses: PropTypes.string,
    screenReaderText: PropTypes.string,
  })),
  // The paragraphs, copyright info, etc
  paragraphs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
  })),
};

export default SprkFooter;
