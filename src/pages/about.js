import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function about({ data }) {
  return (
    <Layout>
      <h1>{process.env.BASE_URL}</h1>
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>{data.site.siteMetadata.body.content}</h1>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        body {
          content
        }
      }
    }
  }
`;
