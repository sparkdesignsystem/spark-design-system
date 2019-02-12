import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SprkIcon from '../SprkIcon/SprkIcon';


const SprkFooter = (props) => {
  const {
    additionalClasses,
    idString,
    globalItems,
    linkColumns,
    connectIcons,
    additionalIcons,
    paragraphs,
    awards,
  } = props;
  const classNames = classnames(
    'sprk-o-Box sprk-o-Box--large sprk-u-BackgroundColor--gray',
    additionalClasses,
  );

  return (
    <div className={classNames}>
      <footer className="sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--misc-b" role="contentinfo" data-id={idString}>
        <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
          {globalItems
            && (
            <div className="sprk-o-Stack__item sprk-o-Stack__item--three-tenths@m sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-prh">
              <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                {globalItems.heading}
              </h3>

              {globalItems.items.map(item => (
                <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
                  <div className="sprk-o-Stack__item">
                    <a className="sprk-b-Link sprk-b-Link--plain" href={item.mediaHref}>
                      {item.mediaType === 'image'
                        && <img className={item.mediaAddClasses} src={item.src} alt={item.altText} />
                      }
                      {item.mediaType === 'icon'
                        && <SprkIcon iconName={item.iconName} additionalClasses={item.mediaAddClasses} />
                      }
                      {item.mediaType === 'svg'
                        && <span>{item.svg}</span>
                      }
                    </a>
                  </div>

                  <p className="sprk-o-Stack__item sprk-b-TypeBodyFour">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            )}
          <div className="sprk-o-Stack__item sprk-o-Stack__item--seven-tenths@m sprk-o-Stack sprk-o-Stack--medium">
            <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
              {linkColumns.length > 0
              && (
                linkColumns.map(column => (
                  <div className="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-u-PaddingRight--a sprk-o-Stack sprk-o-Stack--large">
                    <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                      {column.heading}
                    </h3>

                    <ul className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare">
                      {column.links.map(link => (
                        <li className="sprk-o-Stack__item">
                          <a className="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href={link.href}>
                            {link.text}
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
              <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
                <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                  {connectIcons.heading}
                </h3>

                <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@m">
                  <ul className="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
                    {connectIcons.icons.map(icon => (
                      <li className="sprk-o-Stack__item">
                        <a className="sprk-b-Link sprk-b-Link--plain" href={icon.href}>
                          <SprkIcon iconName={icon.name} additionalClasses={`sprk-c-Icon--stroke-current-color sprk-c-Icon--l ${icon.addClasses}`} />
                          <span className="sprk-u-ScreenReaderText">{icon.screenReaderText}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <span className="sprk-c-Divider sprk-u-mvn sprk-u-mhm" />

        <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-PaddingTop--b">
          {awards
          && (
            <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large">
              <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                {awards.heading}
              </h3>

              <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-u-mbm">
                {awards.images.map(image => (
                  <div className="sprk-o-Stack__item">
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

          {paragraphs
            && (
              paragraphs.map(p => (
                <p className="sprk-o-Stack__item sprk-b-TypeBodyFour">
                  {p.text}
                </p>
              ))
            )}

          {additionalIcons
            && (
              <ul className="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
                {additionalIcons.map(icon => (
                  <li className="sprk-o-Stack__item">
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
};

SprkFooter.defaultProps = {
  additionalClasses: '',
  idString: '',
  globalItems: {},
  linkColumns: {},
  connectIcons: {},
  awards: {},
};

SprkFooter.propTypes = {
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  // The data for the global site items
  globalItems: PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      // The element to render for the global item's media
      mediaType: PropTypes.oneOf(['image', 'svg']),
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
  linkColumns: PropTypes.shape({
    heading: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      // The link href
      href: PropTypes.oneOf(['image', 'svg']),
      // The link text
      text: PropTypes.string,
    })),
  }),
  // The icons to use in the connect section
  connectIcons: PropTypes.shape({
    heading: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.shape({
      // The link href for the icon
      href: PropTypes.oneOf(['image', 'svg']),
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
      href: PropTypes.oneOf(['image', 'svg']),
      // The image src
      src: PropTypes.string,
      // Image alt text
      altText: PropTypes.string,
      // Additional classes for the image
      addClasses: PropTypes.string,
    })),
  }),
};

export default SprkFooter;
