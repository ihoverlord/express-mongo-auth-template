const express = require('express')
const router = express.Router()
const authController = require('./controller')
const authValidator = require('./validator')
const authHelpers = require('./helpers')
const validator = require('express-joi-validation').createValidator({ passError: true })

const sample = (req, res, next) => {
    console.log(req.headers)
    next()
}
router.post('/login', [validator.body(authValidator.loginSchema, { joi: { allowUnknown: false } }), authController.login])
router.post('/register', [validator.body(authValidator.registerSchema, { joi: { allowUnknown: false } }), authController.register])
router.get('/authenticate', [validator.headers(authValidator.authenticateSchema), authHelpers.verifyJWTToken, authController.authenticate])
router.post('/update-password', [validator.body(authValidator.updatePasswordSchema, { joi: { allowUnknown: false } }), authHelpers.verifyJWTToken, authController.updatePassword])

module.exports = router
