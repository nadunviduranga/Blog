const authController = require('express').Router()
const User = require('../models/User.js')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

//! register function
authController.post('/register', async (req, res) => {
    try {
        const isExisting = await User.findOneAndDelete({ email: req.body.email })

        if (isExisting) {
            throw new Error("Already such an account. Try a different email")
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create({ ...req.body, password: hashPassword })

        const { password, ...others } = newUser._doc
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '2h' })

        return res.status(201).json({ user: others, token })

    } catch (error) {
        return res.status(500).json(error)
    }
})


//! log in function
authController.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            throw new Error("Invalied Email")
        }

        const comparePass = await bcrypt.compare(req.body.password, user.password)
        if (!comparePass) {
            throw new Error("Inavlied Password")
        }

        const { password, ...others } = user._doc
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' })

        return res.status(200).json({user: others , token})
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = authController