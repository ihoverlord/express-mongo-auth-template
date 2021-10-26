const authModel = require("./model");
const helpers = require('./helpers')

const register = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const user = await authModel.findOne({ email })
        if (user?.email) throw new Error('Email already registered')
        await authModel.create({ email, password: await helpers.hashForPassword(password) })
        const result = await authModel.findOne({ email })
        res.send({ error: false, message: 'Created Successfully!', token: helpers.signJWTTokenWithUserObj({ userId: result._id, email: result.email }) })
    } catch (error) {
        res.send({ error: true, message: error.message })
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await authModel.findOne({ email })
        if (!user?.email) throw new Error('Email not registered')
        const result = await helpers.comparePasswords(password, user.password)
        if (result) return res.send({ error: false, message: 'Logged in Successfully!', token: helpers.signJWTTokenWithUserObj({ userId: user._id, email: user.email }) })
        throw new Error('Email/Password do not match')
    } catch (error) {
        res.send({ error: true, message: error.message })
    }
}

// verify user and verify email id in the database is valid
const authenticate = async (req, res, next) => {
    const { email } = req.user
    try {
        const user = await authModel.findOne({ email })
        if (!user?.email) throw new Error('UnAuthorized')
        return res.send({ error: false, content: { user: { userId: user._id, email: user.email }, token: helpers.signJWTTokenWithUserObj({ userId: user._id, email: user.email }) } })
    } catch (error) {
        res.send({ error: true, message: error.message })
    }
}

const updatePassword = async (req, res, next) => {
    const { oldPassword, newPassword } = req.body
    const { email, userId } = req.user
    try {
        const user = await authModel.findOne({ email })
        if (!user?.email) throw new Error('Email not registered')
        const result = await helpers.comparePasswords(oldPassword, user.password)
        if (result) {
            await authModel.findOneAndUpdate({ _id: userId }, { password: await helpers.hashForPassword(newPassword) })
            return res.send({ error: false, message: 'Password updated Successfully!' })
        }
        throw new Error('Password do not match')
    } catch (error) {
        res.send({ error: true, message: error.message })
    }
}


module.exports = { register, login, authenticate, updatePassword }