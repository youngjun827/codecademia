import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import "../../templates/blog.scss";

export default function Blog({ data }) {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  return (
    <Layout>
      <h1>{title}</h1>
      <div className="blog-content">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  );
}

/*What {MarkdownRemark.frontmatter__slug} file system is importing:
  query ($id: String) {
    allMarkdownRemark{
      nodes {
        id
        frontmatter {
          slug
        }
      }
    }
  }
*/

// Each blog is exported with a html element and title.
export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
