import React from 'react';
import Proptypes from 'prop-types';
import { MDXRenderer } from 'gatsby-mdx';
import {
  SprkDivider,
} from '@sparkdesignsystem/spark-react';
import Layout from '../components/layout';
import ComponentDocList from '../components/ComponentDocList';
import ComponentDocSample from '../components/ComponentDocSample';

const FundamentalPage = ({ pageContext }) => {
  const {
    title,
    description,
    body,
    restrictions,
    variants,
    information,
    sprkComponent,
    sourceCode
  } = pageContext;

  return (
    <Layout>
      <div className="sprk-o-Box">
        <h1 className="sprk-b-TypeDisplayOne sprk-u-mbm">
          { title } - Fundamental
        </h1>

        {description && (
          <p className="sprk-b-TypeBodyTwo">
            { description || 'Description will be added soon.' }
          </p>
        )}
      </div>

      {sprkComponent && (
        <div className="sprk-o-Box">
          <ComponentDocSample
            sprkComponent={sprkComponent}
            sourceCode={sourceCode}
          />
        </div>
      )}

      {restrictions && (
        <ComponentDocList list={restrictions} heading="Restrictions" />
      )}

      {information && (
        <ComponentDocList list={information} heading="Information" />
      )}

      <SprkDivider element="span"></SprkDivider>

      {variants && (
        <div className="sprk-o-Box">
          <h2 className="sprk-b-TypeDisplayThree sprk-u-mbm">
            Variants
          </h2>

          {variants.map(item => {
            const { name, description, sprkComponent, sourceCode } = item;
            return (
              <ComponentDocSample
                name={name}
                description={description}
                sprkComponent={sprkComponent}
                sourceCode={sourceCode}
              />
            )
          })}
        </div>
      )}

      <MDXRenderer>{ body }</MDXRenderer>
    </Layout>
  )
};

export default FundamentalPage;

FundamentalPage.propTypes = {
  pageContext: Proptypes.shape({}),
}