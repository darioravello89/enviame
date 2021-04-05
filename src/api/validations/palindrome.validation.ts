import { celebrate, Joi } from "celebrate";

export default {
    checkPalindrome: celebrate({
        body: Joi.object({
            Text: Joi.string().required(),
            MinSubstringLength: Joi.number().required(),
        })
    })
}