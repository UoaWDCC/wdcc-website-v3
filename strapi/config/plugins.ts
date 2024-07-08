module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        // Image sizes
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        thumbnail: 64,
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3, // Default is 5
    },
  },
  // ...
});
