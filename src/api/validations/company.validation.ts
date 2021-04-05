import { celebrate, Joi } from "celebrate";

export default {
    createCompanyValidation: celebrate({
        body: Joi.object({
            Name: Joi.string().required(),
            Address: Joi.string().required()
        })
    }),
    updateCompanyValidation: celebrate({
        body: Joi.object({
            Name: Joi.string().required(),
            Address: Joi.string().required()
        })
    }),
    saveCompanyValidation: celebrate({
        body: Joi.object({
            shipping_order: Joi.object({
                n_packages: Joi.string().required(),
                content_description: Joi.string().required(),
                imported_id: Joi.string().required(),
                order_price: Joi.string().required(),
                weight: Joi.string().required(),
                volume: Joi.string().required(),
                type: Joi.string().required()
            }),
            shipping_origin: Joi.object({
                warehouse_code: Joi.string().required()
            }),
            shipping_destination: Joi.object({
                customer: Joi.object({
                    name: Joi.string().required(),
                    email: Joi.string().required(),
                    phone: Joi.string().required()
                }),
                delivery_address: Joi.object({
                    home_address: Joi.object({
                        place: Joi.string().required(),
                        full_address: Joi.string().required()
                    }),
                }),
            }),
            carrier: Joi.object({
                carrier_code: Joi.string().required(),
                tracking_number: Joi.string().required()
            })
        })
    })
}