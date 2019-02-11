import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import { SprkPagination } from '@sparkdesignsystem/spark-core-react';

const SprkPaginationDocs = () => {
    return (
        <CentralColumnLayout>
            <ExampleContainer heading="Base Paginator">
                <div className="sprk-u-mbm">
                    <SprkPagination />
                </div>
            </ExampleContainer>
        </CentralColumnLayout>
    );
};

export default SprkPaginationDocs;