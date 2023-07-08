// path: ./src/api/task/controllers/task.js

"use strict";
/**
 * task controller
 */
const { createCoreController } = require("@strapi/strapi").factories;
// import moment
const moment = require("moment");
module.exports = createCoreController("api::task.task", ({ strapi }) => ({
  async create(ctx) {
    const { data } = ctx.request.body;
    // convert to date with Moment
    const dateCreated = moment(new Date());
    // convert to string
    data.dateCreated = dateCreated.toString();
    // create or save task
    let newTask = await strapi.service("api::task.task").create({ data });
    // @ts-ignore
    const sanitizedEntity = await this.sanitizeOutput(newTask, ctx);
    // @ts-ignore
    return this.transformResponse(sanitizedEntity);
  },
}));