import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import "./blog.scss";
import SEO from "../components/SEO";

export default function Blog({ data }) {
  const {
    html,
    frontmatter: { title, subtitle, coverImage, slug },
  } = data.markdownRemark;

  const seo = {
    title,
    subtitle,
    image: coverImage,
    url: `/blogs/${slug}`,
  };

  return (
    <Layout seo={seo}>
      <SEO {...seo} />
      {/* <h1>{title}</h1> */}
      <div className="blog-content">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        subtitle
        coverImage
      }
    }
  }
`;
