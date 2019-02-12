import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import { SprkPagination } from '@sparkdesignsystem/spark-core-react';

const SprkPaginationDocs = () => {
    return (
        <CentralColumnLayout>
            <ExampleContainer heading="Default Paginator">
                <div className="sprk-u-mbm">
                    <SprkPagination
                        currentPage = {2}
                        totalItems = {30}
                        itemsPerPage = {10}
                    />
                </div>
            </ExampleContainer>
            <ExampleContainer heading="Long Paginator">
                <div className="sprk-u-mbm">
                    {/* <SprkPagination paginationType="long"/> */}
                </div>
            </ExampleContainer>
            <ExampleContainer heading="Pager">
                <div className="sprk-u-mbm">
                    {/* <SprkPagination paginationType="pager"/> */}
                </div>
            </ExampleContainer>
        </CentralColumnLayout>
    );
};

export default SprkPaginationDocs;