import React from 'react';
import Proptypes from 'prop-types';
import { MDXRenderer } from 'gatsby-mdx';
import {
  SprkList,
  SprkListItem,
  SprkDivider,
  SprkLink
} from '@sparkdesignsystem/spark-react';
import Layout from '../components/layout';

const ComponentPage = ({ pageContext }) => {
  const { title, description, body, restrictions, variants, information } = pageContext;

  return (
    <Layout>
      <div className="sprk-o-Box">
        <h1 className="sprk-b-TypeDisplayOne sprk-u-mbm">
          { title }
        </h1>

        {description && (
          <p className="sprk-b-TypeBodyTwo">
            { description || 'Description will be added soon.' }
          </p>
        )}
      </div>

      {restrictions && (
        <div className="sprk-o-Box">
          <h2 className="sprk-b-TypeDisplayThree sprk-u-mbm">
            Restrictions
          </h2>

          <SprkList element="ul">
            {restrictions.map((item, i) =>(<SprkListItem key={i}>{item}</SprkListItem>))}
          </SprkList>
        </div>
      )}

      {information && (
        <div className="sprk-o-Box">
          <h2 className="sprk-b-TypeDisplayThree sprk-u-mbm">
            Information
          </h2>

          <SprkList element="ul">
            {information.map((item, i) =>(<SprkListItem key={i}>{item}</SprkListItem>))}
          </SprkList>
        </div>
      )}

      <SprkDivider element="span"></SprkDivider>

      {variants && (
        <div className="sprk-o-Box">
          <h2 className="sprk-b-TypeDisplayThree sprk-u-mbm">
            Variants
          </h2>

          {variants.map(item => {
            const { name, description, component, sourceCode } = item;
            return (
              <div className="sprk-u-mbm" id={`#${ name }`} key={name}>
                <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
                  <SprkLink href={`#${ name }`} variant="simple">
                    { name }
                  </SprkLink>
                </h3>

                <p className="sprk-b-TypeBodyTwo sprk-u-mbm">
                  { description }
                </p>

                <div className="sprk-u-mbm">
                  Component:
                  { component }
                </div>

                <div className="sprk-u-mbm">
                  sourceCode:
                  { sourceCode }
                </div>
              </div>
            )
          })}
        </div>
      )}

      <MDXRenderer>{ body }</MDXRenderer>
    </Layout>
  )
};

export default ComponentPage;

ComponentPage.propTypes = {
  pageContext: Proptypes.shape({}),
}