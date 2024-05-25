const Joi = require('joi');

module.exports.addCategory = {
    body: Joi.object().keys({
        name:Joi.string().required(),
        image:Joi.string().optional().allow(null, ""),
        description:Joi.string().optional().allow(null, ""),
    })
}
module.exports.allCategories = {
    body: Joi.object().keys({
        filters: Joi.object().required()
    })
}
module.exports.categoryDetails = {
    body: Joi.object().keys({
        categoryId: Joi.object().required()
    })
}