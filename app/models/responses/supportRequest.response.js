const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = {
   requestorPersonId: Joi.string().required(),
   _id: Joi.objectId(),
   createdById: Joi.any(),
   modifiedById: Joi.any(),
   createdDate: Joi.date().iso()
      .default(() => new Date(), "Created date/time"),
   modifiedDate: Joi.date().iso()
      .default(() => new Date(), "Modified date/time")
}

module.exports = Joi.object().keys(schema)