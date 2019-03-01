import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';
import SprkLink from '../SprkLink/SprkLink';
import SprkIcon from '../SprkIcon/SprkIcon';

const SprkPagination = (props) => {
  const goToPage = (e, page) => {
    e.preventDefault();

    const { totalItems, itemsPerPage, onChangeCallback } = props;

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    let newPage = page;
    if (page > totalPages) { newPage = totalPages; }
    if (page < 1) { newPage = 1; }

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
    analyticsStringNext,
    analyticsStringPrev,
    idString,
    ...other
  } = props;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
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
    <nav
      aria-label="Pagination Navigation"
      data-id={idString}
    >
      <ul
        className={
          classnames(
            'sprk-c-Pagination',
            'sprk-o-HorizontalList',
            'sprk-o-HorizontalList--spacing-medium',
            additionalClasses,
          )
        }
        {...other}
      >
        <li>
          <SprkLink
            href="#"
            onClick={e => goToPage(e, currentPage - 1)}
            additionalClasses={leftLinkClasses}
            variant="plain"
            analyticsString={analyticsStringPrev}
            aria-label="Previous Page"
          >
            <span className="sprk-u-ScreenReaderText">{prevLinkText}</span>
            <SprkIcon iconName="chevron-left" />
          </SprkLink>
        </li>

        { variant === 'default' && (
          <li key={uniqueId('sprk_page_')}>
            <SprkLink
              onClick={e => goToPage(e, 1)}
              href="#"
              additionalClasses={
                classnames(
                  'sprk-c-Pagination__link',
                  { 'sprk-c-Pagination__link--current': currentPage === 1 },
                )}
              aria-label="Page 1"
              aria-current={currentPage === 1}
            >
              1
            </SprkLink>
          </li>
        )}

        { longVariant && currentPage > 2 && (
          <li key={uniqueId('sprk_page_')}>
            ...
          </li>
        )}

        { longVariant && currentPage > 1 && currentPage < totalPages && (
          <li key={uniqueId('sprk_page_')}>
            <SprkLink
              onClick={e => goToPage(e, currentPage)}
              href="#"
              additionalClasses={
                classnames(
                  'sprk-c-Pagination__link',
                  'sprk-c-Pagination__link--current',
                )
              }
              aria-label={`Page ${currentPage}`}
              aria-current="true"
            >
              {currentPage}
            </SprkLink>
          </li>
        )}

        { longVariant && currentPage < totalPages - 1 && (
          <li key={uniqueId('sprk_page_')}>
            ...
          </li>
        )}

        { longVariant && (
          <li key={uniqueId('sprk_page_')}>
            <SprkLink
              onClick={e => goToPage(e, totalPages)}
              href="#"
              additionalClasses={
                classnames(
                  'sprk-c-Pagination__link',
                  { 'sprk-c-Pagination__link--current': currentPage === totalPages },
                )
              }
              aria-label={`Page ${totalPages}`}
              aria-current={currentPage === totalPages}
            >
              {totalPages}
            </SprkLink>
          </li>
        )}

        { variant === 'default' && !longVariant && (
          <li key={uniqueId('sprk_page_')}>
            <SprkLink
              onClick={e => goToPage(e, 2)}
              href="#"
              additionalClasses={
                classnames(
                  'sprk-c-Pagination__link',
                  { 'sprk-c-Pagination__link--current': currentPage === 2 },
                )}
              aria-label="Page 2"
              aria-current={currentPage === 2}
            >
              2
            </SprkLink>
          </li>
        )}

        { variant === 'default' && !longVariant && (
          <li key={uniqueId('sprk_page_')}>
            <SprkLink
              onClick={e => goToPage(e, 3)}
              href="#"
              additionalClasses={
                classnames(
                  'sprk-c-Pagination__link',
                  { 'sprk-c-Pagination__link--current': currentPage === 3 },
                )}
              aria-label="Page 3"
              aria-current={currentPage === 3}
            >
              3
            </SprkLink>
          </li>
        )}

        <li>
          <SprkLink
            href="#"
            onClick={e => goToPage(e, currentPage + 1)}
            additionalClasses={rightLinkClasses}
            variant="plain"
            analyticsString={analyticsStringNext}
            aria-label="Next Page"
          >
            <span className="sprk-u-ScreenReaderText">{nextLinkText}</span>
            <SprkIcon iconName="chevron-right" />
          </SprkLink>
        </li>
      </ul>
    </nav>
  );
};


SprkPagination.propTypes = {
  // The pagination variant
  variant: PropTypes.oneOf(['default', 'pager']),
  // The total number of items that the pagination component will page through
  totalItems: PropTypes.number.isRequired,
  // The number of items per page in the component
  itemsPerPage: PropTypes.number.isRequired,
  // The current visible page of the component
  currentPage: PropTypes.number,
  // callback for handling changes.
  onChangeCallback: PropTypes.func.isRequired,
  // Any additional classes to include on the component
  additionalClasses: PropTypes.string,
  // Screenreader text for the 'previous page' chevron
  nextLinkText: PropTypes.string,
  // Screenreader text for the 'next page' chevron
  prevLinkText: PropTypes.string,
  // The data-analytics string for the 'previous page' link
  analyticsStringNext: PropTypes.string,
  // The data-analytics string for the 'next page' link
  analyticsStringPrev: PropTypes.string,
  // The data-id string for the component
  idString: PropTypes.string,
};

SprkPagination.defaultProps = {
  variant: 'default',
  currentPage: 1,
  additionalClasses: '',
  nextLinkText: 'Next Page',
  prevLinkText: 'Previous Page',
  analyticsStringNext: '',
  analyticsStringPrev: '',
  idString: '',
};

export default SprkPagination;
