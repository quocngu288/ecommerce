const jwt = require('jsonwebtoken')
const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            password: user.password,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET || 'daylabimat',
        {
            expiresIn: '30d'
        })
}
const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    // console.log(authorization);
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        // console.log(token);
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'daylabimat',
            (err, decode) => {
                if (err) {
                    res.status.send('token is Valid')
                }
                else {
                    req.user = decode;
                    console.log(req.user);
                    next()
                }
            }
        )
    }
    else {
        res.status.send('token is Valid')
    }
}
module.exports = {
    generateToken,
    isAuth
}