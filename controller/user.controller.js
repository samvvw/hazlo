const User = require('../models/userSchema');

exports.createUser = async (req, res, next) => {
    try {
        const { email, userName } = req.body.signup;

        const data = {
            _id: req.uid,
            name: userName,
            email: email,
        };

        const response = await User.create(data);

        return res.status(201).json({
            success: true,
            data: response,
            token: req.token,
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const data = {
            _id: req.uid,
        };

        const response = await User.findOne(data);

        return res.status(200).json({
            success: true,
            data: response,
            token: req.token,
        });
    } catch (err) {
        console.log(`Error: ${err}`);
        next(err);
    }
};
