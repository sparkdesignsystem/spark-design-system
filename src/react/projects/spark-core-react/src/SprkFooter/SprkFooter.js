import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SprkIcon from '../SprkIcon/SprkIcon';


const SprkFooter = (props) => {
  const { additionalClasses, idString } = props;
  const classNames = classnames(
    'sprk-o-Box sprk-o-Box--large sprk-u-BackgroundColor--gray',
    additionalClasses,
  );

  const globalItems = {
    heading: 'Global Links',
    items: [
      {
        mediaType: 'image',
        mediaSrc: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
        altText: 'Spark Logo',
        mediaAddClasses: 'drizzle-c-Logo drizzle-c-Logo--small',
        description: 'Lorem ipsum dolor sit amet, consectetur.',
      },
      {
        mediaType: 'image',
        mediaSrc: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
        altText: 'Spark Logo',
        mediaAddClasses: 'drizzle-c-Logo drizzle-c-Logo--small',
        description: 'Lorem ipsum dolor sit amet, consectetur.',
      },
      {
        mediaType: 'svg',
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        svg: (
          <svg className="drizzle-c-Logo drizzle-c-Logo--small" viewBox="0 0 303 274" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill="none">
              <path d="M243.26 251.3l53.21-92.78a44.36 44.36 0 0 0-.13-44.22l-14.91-25.65-37.08 63.82c1.89 20.91-9.628 40.735-28.73 49.45l-41.65 71.69 31.06-.09a44.35 44.35 0 0 0 38.23-22.22z" fill="#FF451A" />
              <path d="M215.62 201.92c-.14.06-.27.15-.41.21l-91.77 42-17.26 29.7 67.79-.2 41.65-71.71zM245.51 33.98l-43.06 74.11c22.6 3.227 39.977 21.632 41.9 44.38l37.08-63.82-29.86-51.38a6.63 6.63 0 0 0-6.06-3.29z" fill="#FF5C1C" />
              <path d="M120.32 245.52l-32.57 14.9a6.63 6.63 0 0 0 1.52 12.54 43.91 43.91 0 0 0 8.68.87H106.18l17.26-29.71-3.12 1.4zM202.45 108.09l43.06-74.11a6.57 6.57 0 0 0-2.36.56l-20.54 9.11-67.9 30.12-36.69 63.17 56.3-25.1a50.15 50.15 0 0 1 28.13-3.75z" fill="#FF721E" />
              <path d="M99.15 98.41c-10.77 4.81-15.93 17.38-11.48 28a21.47 21.47 0 0 0 28.51 11.33l1.84-.82 36.69-63.17-55.56 24.66z" fill="#FF8920" />
              <path d="M214.64 148.4a21.45 21.45 0 0 0-28.51-11.32l-.67.29-36.7 63.18 54.39-24.13c10.75-4.81 15.93-17.37 11.49-28.02z" fill="#FF5C1C" />
              <path d="M100.66 166.83l-42.92 73.89a6.25 6.25 0 0 0 1.42-.43l20.54-9.11 69.06-30.63 36.7-63.18-57.47 25.62a50 50 0 0 1-27.33 3.84zM181.98 29.31l32.57-14.89a6.64 6.64 0 0 0-1.51-12.59 44 44 0 0 0-8.68-.87h-7.37l-17 29.17 1.99-.82z" fill="#FF721E" />
              <path d="M62.21 138.59a49.58 49.58 0 0 1-4.14-14.86l-36.74 63.23 29.41 50.61a6.63 6.63 0 0 0 7 3.15l42.96-73.89a49.5 49.5 0 0 1-38.49-28.24zM87.93 72.32l92.16-42.15 16.94-29.15-67.79.2z" fill="#FF8920" />
              <path d="M60.9 100.47a49.15 49.15 0 0 1 26.2-27.76l.76-.35 41.32-71.14-31.9.09a44.34 44.34 0 0 0-38.23 22.22L5.84 116.31a44.34 44.34 0 0 0 .13 44.22l15.33 26.39 36.76-63.28a49.3 49.3 0 0 1 2.84-23.17z" fill="#FFA022" />
            </g>
          </svg>
        ),
      },
      {
        mediaType: 'icon',
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        mediaAddClasses: 'drizzle-c-Logo drizzle-c-Logo--small',
        iconName: 'house',
      },
    ],
  };

  const linkColumns = [
    {
      heading: 'Site Links',
      links: [
        {
          href: '#nogo',
          text: 'About This.',
        },
        {
          href: '#nogo',
          text: 'About This Other Thing',
        },
        {
          href: '#nogo',
          text: 'About That',
        },
        {
          href: '#nogo',
          text: 'Link Item',
        },
        {
          href: '#nogo',
          text: 'This Link Item',
        },
      ],
    },
    {
      heading: 'Learn More',
      links: [
        {
          href: '#nogo',
          text: 'About This Other Thing',
        },
        {
          href: '#nogo',
          text: 'About This',
        },
        {
          href: '#nogo',
          text: 'About That',
        },
        {
          href: '#nogo',
          text: 'Link Item',
        },
      ],
    },
    {
      heading: 'Support',
      links: [
        {
          href: '#nogo',
          text: 'Share Your Screen',
        },
        {
          href: '#nogo',
          text: 'Opt Out',
        },
        {
          href: '#nogo',
          text: 'Disclosures and Other Things',
        },
        {
          href: '#nogo',
          text: 'We Want Your Feedback',
        },
      ],
    },
  ];

  const connectIcons = {
    heading: 'Connect With Us',
    icons: [
      {
        href: '#nogo',
        name: 'facebook',
        screenReaderText: 'Facebook',
      },
      {
        href: '#nogo',
        name: 'instagram',
        screenReaderText: 'Instagram',
      },
      {
        href: '#nogo',
        name: 'twitter',
        screenReaderText: 'Twitter',
      },
      {
        href: '#nogo',
        name: 'youtube',
        screenReaderText: 'Youtube',
      },
    ],
  };

  const awards = {
    heading: 'Awards Heading Title',
    images: [
      {
        href: '#nogo',
        src: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
        altText: 'Spark Logo',
        addClasses: 'drizzle-c-Logo',
      },
      {
        href: '#nogo',
        src: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
        altText: 'Spark Logo',
        addClasses: 'drizzle-c-Logo',
      },
    ],
    disclaimerTitle: 'My Award Disclaimer',
    disclaimerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
  };

  const paragraphs = [
    { text: '*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    { text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur.' },
    { text: '**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur.' },
  ];

  const additionalIcons = [
    {
      name: 'house',
      href: '#nogo',
      addClasses: '',
      screenReaderText: 'House',
    },
    {
      name: 'house',
      href: '#nogo',
      addClasses: '',
      screenReaderText: 'House',
    },
    {
      name: 'house',
      href: '#nogo',
      addClasses: '',
      screenReaderText: 'House',
    },
  ];

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
                        && <img className={item.mediaAddClasses} src={item.mediaSrc} alt={item.altText} />
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
};

SprkFooter.propTypes = {
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
};

export default SprkFooter;
