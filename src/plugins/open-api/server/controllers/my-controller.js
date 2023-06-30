'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('open-api')
      .service('myService')
      .getWelcomeMessage();
  },
});
