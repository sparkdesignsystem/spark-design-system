import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const SprkFooter = (props) => {
  const { additionalClasses, idString } = props;
  const classNames = classnames(
    'sprk-o-Box sprk-o-Box--large sprk-u-BackgroundColor--gray',
    additionalClasses,
  );

  return (
    <div className={classNames}>
      <footer className="sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--misc-b" role="contentinfo" data-id={idString}>
        <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
          <div className="sprk-o-Stack__item sprk-o-Stack__item--three-tenths@m sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-prh">
            <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
              Global Links
            </h3>

            <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div className="sprk-o-Stack__item">
                <a className="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                  <div className="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--medium">a</div>
                </a>
              </div>

              <p className="sprk-o-Stack__item sprk-b-TypeBodyFour">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="sprk-o-Stack__item sprk-o-Stack__item--seven-tenths@m sprk-o-Stack sprk-o-Stack--medium">
            <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
              <div className="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-u-PaddingRight--a sprk-o-Stack sprk-o-Stack--large">
                <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                  Site Links
                </h3>

                <ul className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare">
                  <li className="sprk-o-Stack__item">
                    <a className="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      About This
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-u-PaddingRight--a sprk-o-Stack sprk-o-Stack--large">
                <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                  Learn More
                </h3>

                <ul className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare">
                  <li className="sprk-o-Stack__item">
                    <a className="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      About This Other Thing
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-o-Stack sprk-o-Stack--large">
                <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                  Support
                </h3>

                <ul className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare">
                  <li className="sprk-o-Stack__item">
                    <a className="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      Share Your Screen
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
              <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
                Connect With Us
              </h3>

              <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@m">
                <ul className="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
                  <li className="sprk-o-Stack__item">
                    <a className="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                      <svg className="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l" viewBox="0 0 64 64">
                        <use xlinkHref="#facebook-two-color" />
                      </svg>
                      <span className="sprk-u-ScreenReaderText">Facebook</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <span className="sprk-c-Divider sprk-u-mvn sprk-u-mhm" data-id="divider-1" />

        <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-PaddingTop--b">
          <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large" data-id="award-1">
            <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
              Awards Heading Title
            </h3>

            <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-u-mbm">
              <div className="sprk-o-Stack__item">
                <a href="#nogo">
                  <div className="drizzle-c-Logo-placeholder">a</div>
                </a>
              </div>
            </div>

            <div className="sprk-o-Stack__item">
              <div>
                <a className="sprk-b-TypeBodyFour sprk-b-Link sprk-b-Link--simple sprk-b-Link--has-icon sprk-u-FontWeight--normal" href="#nogo">
                  <svg className="sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color sprk-c-Icon--toggle sprk-u-mrs" viewBox="0 0 64 64">
                    <use xlinkHref="#chevron-down-circle-two-color" />
                  </svg>
                  My Award Disclaimer
                </a>

                <div data-sprk-toggle="content">
                  <p className="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam in laoreet ante, non feugiat neque. Suspendisse
                    et ipsum leo. Quisque non consectetur justo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="sprk-o-Stack__item sprk-b-TypeBodyFour">
            &#42;Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>

          <ul className="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
            <li className="sprk-o-Stack__item">
              <a className="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                <svg className="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l" viewBox="0 0 64 64">
                  <use xlinkHref="#townhouse" />
                </svg>
                <span className="sprk-u-ScreenReaderText">Townhouse</span>
              </a>
            </li>
          </ul>
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
