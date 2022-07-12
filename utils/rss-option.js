module.exports = {
  options: {
    feeds: [
      {
        serialize: ({ query: { allMarkdownRemark } }) => {
          return allMarkdownRemark.nodes.map((node) => {
            const url = `${process.env.BASE_URL}/blogs/${node.frontmatter.slug}`;
            return Object.assign({}, node.frontmatter, {
              description: node.frontmatter.subtitle,
              url: url,
              guid: url,
              custom_elements: [{ "content:encoded": node.html }],
            });
          });
        },
        query: `
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
          ) {
            nodes {
              excerpt
              html
              frontmatter {
                title
                date
                slug
              }
            }
          }
        }
      `,
        title: "Codecademia",
        output: "/rss.xml",
      },
    ],
  },
};
