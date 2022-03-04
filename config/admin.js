module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a66d84b0a505e3055f4a72049dc4d01f'),
  },
});
