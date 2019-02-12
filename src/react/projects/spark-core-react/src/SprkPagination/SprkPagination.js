import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkLink } from '@sparkdesignsystem/spark-core-react';
import * as _ from 'lodash';

const SprkPagination = (props) => {
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
        ...other
    } = props;

    let totalPages = Math.ceil(totalItems/itemsPerPage);
    var pages = [];

    for (var i = 1; i <= totalPages; i++){
        pages.push({
            pageNum: i,
            isCurrent: currentPage === i
        });
    }

    console.log(pages);

    const pagesMap = pages.map(page => {
        return (
            <li>
                <SprkLink
                    variant='plain'
                    additionalClasses= {
                        classnames (
                            'sprk-c-Pagination__link',
                            {'sprk-c-Pagination__link--current': page.isCurrent}
                        )
                    }>
                    {page.pageNum}
                </SprkLink>
            </li>
        )
    })

    console.log(pagesMap);

    return(
        <nav>
            <ul className='sprk-c-Pagination sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium'>
                <li>
                    <SprkLink additionalClasses='sprk-c-Pagination__icon' variant='plain'>
                        &lt;
                    </SprkLink>
                </li>

                {pagesMap}

                <li>
                    <SprkLink additionalClasses='sprk-c-Pagination__icon' variant='plain'>
                        &gt;
                    </SprkLink>
                </li>
            </ul>
        </nav>
    )
}

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
    additionalClasses: PropTypes.string
}

export default SprkPagination;