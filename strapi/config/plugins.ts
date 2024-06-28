module.exports = ({ env }) => ({
  // ...
  // upload: {
  //   config: {
  //     provider: "aws-s3",
  //     providerOptions: {
  //       s3Options: {
  //         credentials: {
  //           accessKeyId: env("AWS_ACCESS_KEY_ID"),
  //           secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
  //         },
  //         region: env("AWS_REGION"),
  //         endpoint: env("AWS_ENDPOINT_URL_S3"),
  //         params: {
  //           Bucket: env("BUCKET_NAME"),
  //         },
  //       },
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {},
  //     },
  //   },
  // },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  }
  // ...
});
