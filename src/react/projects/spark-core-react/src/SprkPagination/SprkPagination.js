import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkLink } from '@sparkdesignsystem/spark-core-react';

class SprkPagination extends Component {
  constructor(props) {
    super(props);
    this.goToPage = this.goToPage.bind(this);
    this.state = {
      currentPage: 1
      // isVisible: true
      // current page?
    };
  }

  goToPage(page) {
    this.state.currentPage = page;
    this.props.callback({ currentPage: page });
  };

  render() {
    const {
      paginationType,
      nextLinkText,
      prevLinktext,
      currentPage,
      totalItems,
      itemsPerPage,
      analyticsStringLinkNext,
      analyticsStringLinkPrev,
      additionalClasses,
      callback,
      ...other
    } = this.props;

    let totalPages = Math.ceil(totalItems / itemsPerPage);
    var pages = [];

    for (var i = 1; i <= totalPages; i++) {
      pages.push({
        pageNum: i,
        isCurrent: currentPage === i
      });
    }

    const pagesMap = pages.map(page => {
      return (
        <li key={'sprk_page_' + page.pageNum}>
          <SprkLink
            onClick={() => this.goToPage(page.pageNum)}
            href="#"
            additionalClasses={classnames('sprk-c-Pagination__link', {
              'sprk-c-Pagination__link--current': page.pageNum === this.state.currentPage
            })}
          >
            {page.pageNum}
          </SprkLink>
        </li>
      );
    });

    return (
      <nav>
        <ul className="sprk-c-Pagination sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium">
          <li>
            <SprkLink additionalClasses="sprk-c-Pagination__icon" variant="plain">
              &lt;
            </SprkLink>
          </li>

          {pagesMap}

          <li>
            <SprkLink additionalClasses="sprk-c-Pagination__icon" variant="plain">
              &gt;
            </SprkLink>
          </li>
        </ul>
      </nav>
    );
  }
};

SprkPagination.propTypes = {
  paginationType: PropTypes.oneOf(['long', 'pager']),
  nextLinkText: PropTypes.string,
  prevLinkText: PropTypes.string,
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  analyticsStringLinkNext: PropTypes.string,
  analyticsStringLinkPrev: PropTypes.string,
  idString: PropTypes.string,
  additionalClasses: PropTypes.string,
  // callback for any state changes
  callback: PropTypes.func
};

SprkPagination.defaultProps = {
  currentPage: 1
}

export default SprkPagination;
