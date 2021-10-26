const Joi = require('joi')
const PasswordComplexity = require("joi-password-complexity");

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(8).max(16).required()
        .min(8).max(16)
        // .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/)
        .required()
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const authenticateSchema = Joi.object({
    authorization: Joi.string().required()
})

const updatePasswordSchema = Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().alphanum().min(8).max(16).required()
        .min(8).max(16)
        // .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/)
        .required()
})

module.exports = { registerSchema, loginSchema, authenticateSchema, updatePasswordSchema }