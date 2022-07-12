import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import BlogListing from "../components/BlogListing";
import SEO from "../components/SEO";

export default function BlogsPaginated({ pageContext, data }) {
  const { currentPage, numOfPages } = pageContext;
  const { nodes } = data.allMarkdownRemark;

  const firstPage = currentPage === 1;
  const lastPage = currentPage === numOfPages;

  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextpage = (currentPage + 1).toString();

  return (
    <Layout>
      <SEO description="Collection of refined materials to reference" />
      <BlogListing blogs={nodes} />
      {!firstPage && (
        <Link
          className="button is-small mr-1"
          to={`/blogs/${prevPage}`}
          rel="prev"
        >
          Prev Page
        </Link>
      )}
      {!lastPage && (
        <Link className="button is-small" to={`/blogs/${nextpage}`} rel="next">
          Next Page
        </Link>
      )}
    </Layout>
  );
}

export const query = graphql`
  query BlogListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          subtitle
          title
          slug
          date(formatString: "DD MMMM, YYYY")
          author
        }
      }
    }
  }
`;
