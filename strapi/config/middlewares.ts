export default ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            `https://${env("BUCKET_NAME")}.fly.storage.tigris.dev`,
            env("AWS_ENDPOINT_URL_S3"),
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            `https://${env("BUCKET_NAME")}.fly.storage.tigris.dev`,
            env("AWS_ENDPOINT_URL_S3"),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
