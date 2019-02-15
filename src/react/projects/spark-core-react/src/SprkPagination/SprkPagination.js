import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkLink } from '@sparkdesignsystem/spark-core-react';
import * as _ from 'lodash';

class SprkPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: Math.ceil(this.props.totalItems / this.props.itemsPerPage)
    };
  }

  /*
    Updates the state of the pager and calls the callback (if provided). This only includes
    the current page in the pagination component; it doesn't do anything to do the data. Data
    is not passed into the pagination component and is not necessary to render the component.
  */
  goToPage(e, page) {
    e.preventDefault();

    if (page > this.state.totalPages) { page = this.state.totalPages; }

    if (page < 1) { page = 1 }

    this.setState({ currentPage: page, totalPages: this.state.totalPages })

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

    var pageLinks = [];

    if (this.props.variant == 'pager'){
      // none of the pages are links
    } else if (this.props.variant == 'long'){
      // first, current, and last pages are links

      pageLinks.push(
        <li key={_.uniqueId('sprk_page_')}>
          <SprkLink
            onClick={(e) => this.goToPage(e, page.pageNum)}
            href="#"
            additionalClasses=
            {
              classnames(
                'sprk-c-Pagination__link',
                {'sprk-c-Pagination__link--current': this.state.currentPage == 1}
                )
              }
              >
            1
          </SprkLink>
        </li>
      );

      if (this.state.currentPage > 2 && this.state.totalPages > 2){
        pageLinks.push(
          <li key={_.uniqueId('sprk_page_')}>
            ...
          </li>
        );
      }

      if (this.state.currentPage > 1 && this.state.currentPage < this.state.totalPages && this.state.totalPages > 2){
        pageLinks.push(
          <li key={_.uniqueId('sprk_page_')}>
            <SprkLink
              onClick={(e) => this.goToPage(e, this.state.currentPage)}
              href="#"
              additionalClasses=
              {
                classnames(
                  'sprk-c-Pagination__link',
                  'sprk-c-Pagination__link--current'
                  )
                }
                >
              {this.state.currentPage}
            </SprkLink>
          </li>
        );
      }

      if (this.state.totalPages > 3 && this.state.currentPage < this.state.totalPages - 1){
        pageLinks.push(
          <li key={_.uniqueId('sprk_page_')}>
            ...
          </li>
        );
      }

      if (this.state.totalPages > 1){
        pageLinks.push(
          <li key={_.uniqueId('sprk_page_')}>
            <SprkLink
              onClick={(e) => this.goToPage(e, this.state.totalPages)}
              href="#"
              additionalClasses=
              {
                classnames(
                  'sprk-c-Pagination__link',
                  {'sprk-c-Pagination__link--current': this.state.currentPage == this.state.totalPages}
                  )
                }
                >
              {this.state.totalPages}
            </SprkLink>
          </li>
        );
      }


    } else {
      // every page is a link

      var pages = [];

      for (var i = 1; i <= this.state.totalPages; i++) {
        pages.push({
          pageNum: i
        });
      }

      pageLinks = pages.map(page => {
        return (
          <li key={_.uniqueId('sprk_page_')}>
            <SprkLink
              onClick={(e) => this.goToPage(e, page.pageNum)}
              href="#"
              additionalClasses=
              {
                classnames(
                  'sprk-c-Pagination__link',
                  {'sprk-c-Pagination__link--current': page.pageNum === this.state.currentPage}
                  )
                }
                >
              {page.pageNum}
            </SprkLink>
          </li>
        );
      });
    };

    return (
      <nav>
        <ul className="sprk-c-Pagination sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium">
          <li>
            <SprkLink
              href="#"
              onClick={(e) => this.goToPage(e, this.state.currentPage - 1)}
              additionalClasses="sprk-c-Pagination__icon"
              variant="plain"
            >
              &lt;
            </SprkLink>
          </li>

          {pageLinks}

          <li>
            <SprkLink
              href="#"
              onClick={(e) => this.goToPage(e, this.state.currentPage + 1)}
              additionalClasses="sprk-c-Pagination__icon"
              variant="plain"
            >
              &gt;
            </SprkLink>
          </li>
        </ul>
      </nav>
    );
  }
};

SprkPagination.propTypes = {
  variant: PropTypes.oneOf(['long', 'pager']),
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
  currentPage: 1,
  callback: function(){},
}

export default SprkPagination;
