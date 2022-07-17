import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function SEO({ title, image, description, meta = [] }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const defaultTitle = title ? `${title}` : site.siteMetadata?.title;
  const defaultDescription = description || site.siteMetadata?.description;
  const defaultImage =
    image ||
    "https://files.cdn.thinkific.com/courses/course_card_image_000/896/4641598445801.medium.png";

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={defaultTitle}
      meta={[
        {
          name: "description",
          content: defaultDescription,
        },
        // <meta name="google-site-verification" content="nw-_oViEDB0fPnAAzufuI9v92Plm3MlFgLxXhWpx5Gg" />
        {
          name: "google-site-verification",
          content: "nw-_oViEDB0fPnAAzufuI9v92Plm3MlFgLxXhWpx5Gg",
        },
        //<meta name=”robots” content=”index, follow”>
        {
          name: "robots",
          content: "index, follow",
        },
        // Open Graph
        {
          name: "og:title",
          content: defaultTitle,
        },
        {
          name: "og:description ",
          content: defaultDescription,
        },
        {
          name: "og:type ",
          content: "website",
        },
        {
          name: "og:image",
          content: defaultImage,
        },
        {
          name: "twitter:card  ",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: "Codecademia",
        },
        {
          name: "twitter:title",
          content: defaultTitle,
        },
        {
          name: "twitter:description",
          content: defaultDescription,
        },
        {
          name: "twitter:image",
          content: defaultImage,
        },
      ].concat(meta)}
    />
  );
}

export default SEO;
