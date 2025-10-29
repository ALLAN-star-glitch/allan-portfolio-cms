module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  app: {
      name: 'pivota-cms',
    },
    
});
