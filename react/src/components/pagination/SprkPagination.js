import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkLink from '../../base/links/SprkLink';
import SprkIcon from '../icons/SprkIcon';

const SprkPagination = (props) => {
  const goToPage = (e, page) => {
    e.preventDefault();

    const { totalItems, itemsPerPage, onChangeCallback } = props;

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    let newPage = page;
    if (page > totalPages) {
      newPage = totalPages;
    }
    if (page < 1) {
      newPage = 1;
    }

    onChangeCallback({ e, newPage });
  };

  const {
    variant,
    totalItems,
    itemsPerPage,
    currentPage,
    onChangeCallback,
    additionalClasses,
    nextLinkText,
    prevLinkText,
    analyticsStringPage,
    analyticsStringNext,
    analyticsStringPrev,
    idString,
    nextIcon,
    prevIcon,
    ...other
  } = props;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // the "long" variant is used if there are more than 3 total pages
  const longVariant = variant === 'default' && totalPages > 3;

  let leftLinkClasses = 'sprk-c-Pagination__icon';
  let rightLinkClasses = 'sprk-c-Pagination__icon';

  if (currentPage === 1) {
    leftLinkClasses += ' sprk-b-Link--disabled';
  }

  if (currentPage === totalPages) {
    rightLinkClasses += ' sprk-b-Link--disabled';
  }

  return (
    <nav aria-label="Pagination Navigation" data-id={idString}>
      <ul
        className={classnames(
          'sprk-c-Pagination',
          'sprk-o-HorizontalList',
          'sprk-o-HorizontalList--spacing-medium',
          additionalClasses,
        )}
        {...other}
      >
        <li>
          <SprkLink
            onClick={(e) => goToPage(e, currentPage - 1)}
            additionalClasses={leftLinkClasses}
            variant="plain"
            analyticsString={analyticsStringPrev}
            aria-label="Previous Page"
          >
            <span className="sprk-u-ScreenReaderText">{prevLinkText}</span>
            <SprkIcon
              iconName={prevIcon}
              additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
            />
          </SprkLink>
        </li>

        {variant === 'default' && (
          <li key={uniqueId('sprk_page_')}>
            <SprkLink
              onClick={(e) => goToPage(e, 1)}
              additionalClasses={classnames('sprk-c-Pagination__link', {
                'sprk-c-Pagination__link--current': currentPage === 1,
              })}
              aria-label="Page 1"
              aria-current={currentPage === 1}
              data-analytics={analyticsStringPage}
            >
              1
            </SprkLink>
          </li>
        )}

        {longVariant && currentPage > 2 && (
          <li key={uniqueId('sprk_page_')}>...</li>
        )}

        {longVariant && currentPage > 1 && currentPage < totalPages && (
          <li key={uniqueId('sprk_page_')}>
            <SprkLink
              onClick={(e) => goToPage(e, currentPage)}
              additionalClasses={classnames(
                'sprk-c-Pagination__link',
                'sprk-c-Pagination__link--current',
              )}
              aria-label={`Page ${currentPage}`}
              aria-current="true"
              data-analytics={analyticsStringPage}
            >
              {currentPage}
            </SprkLink>
          </li>
        )}

        {longVariant && currentPage < totalPages - 1 && (
          <li key={uniqueId('sprk_page_')}>...</li>
        )}

        {longVariant && (
          <li key={uniqueId('sprk_page_')}>
            <SprkLink
              onClick={(e) => goToPage(e, totalPages)}
              additionalClasses={classnames('sprk-c-Pagination__link', {
                'sprk-c-Pagination__link--current': currentPage === totalPages,
              })}
              aria-label={`Page ${totalPages}`}
              aria-current={currentPage === totalPages}
              data-analytics={analyticsStringPage}
            >
              {totalPages}
            </SprkLink>
          </li>
        )}

        {variant === 'default' &&
          !longVariant &&
          totalItems / itemsPerPage > 1 && (
            <li key={uniqueId('sprk_page_')}>
              <SprkLink
                onClick={(e) => goToPage(e, 2)}
                additionalClasses={classnames('sprk-c-Pagination__link', {
                  'sprk-c-Pagination__link--current': currentPage === 2,
                })}
                aria-label="Page 2"
                aria-current={currentPage === 2}
                data-analytics={analyticsStringPage}
              >
                2
              </SprkLink>
            </li>
          )}

        {variant === 'default' &&
          !longVariant &&
          totalItems / itemsPerPage > 2 && (
            <li key={uniqueId('sprk_page_')}>
              <SprkLink
                onClick={(e) => goToPage(e, 3)}
                additionalClasses={classnames('sprk-c-Pagination__link', {
                  'sprk-c-Pagination__link--current': currentPage === 3,
                })}
                aria-label="Page 3"
                aria-current={currentPage === 3}
                data-analytics={analyticsStringPage}
              >
                3
              </SprkLink>
            </li>
          )}

        <li>
          <SprkLink
            onClick={(e) => goToPage(e, currentPage + 1)}
            additionalClasses={rightLinkClasses}
            variant="plain"
            analyticsString={analyticsStringNext}
            aria-label="Next Page"
          >
            <span className="sprk-u-ScreenReaderText">{nextLinkText}</span>
            <SprkIcon
              iconName={nextIcon}
              additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
            />
          </SprkLink>
        </li>
      </ul>
    </nav>
  );
};

SprkPagination.propTypes = {
  /**
   * This determines what style of pagination to render.
   */
  variant: PropTypes.oneOf(['default', 'pager']),
  /**
   * The total number of items that the pagination component will contain.
   */
  totalItems: PropTypes.number.isRequired,
  /**
   * The number of items to display per page
   */
  itemsPerPage: PropTypes.number.isRequired,
  /**
   * The current visible page of the component.
   */
  currentPage: PropTypes.number,
  /**
   * This function will be called every time the component updates.
   * The function should accept a single object
   * parameter with a property called newPage
   * containing the current page number of the pagination component.
   *
   * Ex: `{ newPage: 3 }`
   */
  onChangeCallback: PropTypes.func.isRequired,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Screenreader text for the 'previous page' icon.
   */
  nextLinkText: PropTypes.string,
  /**
   * Screenreader text for the 'next page' icon.
   */
  prevLinkText: PropTypes.string,
  /** The data-analytics string for the individual page links. */
  analyticsStringPage: PropTypes.string,
  /** The data-analytics string for the 'previous page' link. */
  analyticsStringNext: PropTypes.string,
  /** The data-analytics string for the 'next page' link. */
  analyticsStringPrev: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /** The icon name to be rendered for the previous link. */
  prevIcon: PropTypes.string,
  /** The icon name to be rendered for the next link. */
  nextIcon: PropTypes.string,
};

SprkPagination.defaultProps = {
  variant: 'default',
  currentPage: 1,
  nextLinkText: 'Next Page',
  prevLinkText: 'Previous Page',
  prevIcon: 'chevron-left',
  nextIcon: 'chevron-right',
};

export default SprkPagination;
