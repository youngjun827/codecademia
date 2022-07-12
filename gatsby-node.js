const searchIndex = require("./data/searchIndex.json");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path === "/") {
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        searchIndex,
      },
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // fetch data
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const { nodes } = result.data.allMarkdownRemark;
  // Set number of blog to display on each page.
  const itemsPerPage = 3;
  // numOfPages represents the total number of page.
  // Math.ceil() rounds up the value. In my case, when there are less than 2 blogs comming in, it wont return 0.5 but 1 page.
  const numOfPages = Math.ceil(nodes.length / itemsPerPage);

  Array.from({ length: numOfPages }).forEach((_, i) => {
    const page = i + 1;

    createPage({
      path: page === 1 ? `/blogs` : `/blogs/${page}`,
      component: require.resolve("./src/templates/blogsPaginated.js"),
      context: {
        limit: itemsPerPage,
        currentPage: page,
        numOfPages,
        skip: i * itemsPerPage,
      },
    });
  });

  nodes.forEach((node) => {
    createPage({
      path: `/blogs/${node.frontmatter.slug}`,
      component: require.resolve("./src/templates/blog.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
