
//    module.exports = ({ env }) => ({
//     // ...
//     upload: {
//       provider: "aws-s3-advanced",
//       providerOptions: {
//         accessKeyId: env("AWS_ACCESS_KEY_ID"),
//         secretAccessKey: env("AWS_ACCESS_SECRET"),
//         region: env("AWS_REGION"),
//         params: {
//           bucket: env("AWS_BUCKET_NAME"),
//         },
//         // baseUrl: env("CDN_BASE_URL"), // e.g. https://cdn.example.com, this is stored in strapi's database to point to the file
//         // prefix: env("BUCKET_PREFIX"), // e.g. strapi-assets, note the missing slash at the start
//       },
//     },
//     // ...
//   });
   

   module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });
