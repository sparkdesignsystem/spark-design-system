import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx';
import Layout from '../components/layout';

const ComponentPage = ({ data }) => {
  const page = data.mdx;

  return (
    <Layout>
      <h1>{page.frontmatter.title}</h1>
      {typeof window !== 'undefined' && (
        <MDXRenderer>{page.code.body}</MDXRenderer>
      )}
    </Layout>
  )
};

export default ComponentPage;

export const query = graphql`
  query pageData {
    mdx {
      code {
        body
      }
      frontmatter {
        title
      }
    }
  }
`
