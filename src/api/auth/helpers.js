const config = require('../../../config')
const sha256 = require('crypto-js/sha256');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const hashForPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

const comparePasswords = async (oldPassword, newPassword) => {
    const result = await bcrypt.compare(oldPassword, newPassword)
    return result
}

const signJWTTokenWithUserObj = (userObj) => {
    const token = jwt.sign({
        user: userObj
    }, config.AUTH_TOKEN_SECRECT, { expiresIn: 60 * 60 });
    console.log({ token })
    return token

}

// middleware
const verifyJWTToken = (req, res, next) => {
    const token =
        req.body.authorization || req.query.authorization || req.headers["authorization"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.AUTH_TOKEN_SECRECT);
        console.log(decoded)
        req.user = decoded.user;
    } catch (err) {
        console.log(err)
        return res.status(401).send("Invalid Token");
    }
    return next();

}

module.exports = { hashForPassword, comparePasswords, signJWTTokenWithUserObj, verifyJWTToken }