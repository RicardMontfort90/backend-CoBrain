const router = require('express').Router();
const Knowledge = require("../models/Knowledge");
const User = require("../models/User");
const { isAuthenticated } = require('../middlewares/jwt');

// @desc    GET all the knowledges
// @route   GET /api/v1/knowledge
// @access  Public
router.get('/', isAuthenticated, async (req, res, next) => {
    try {
        const knowledges = await Knowledge.find({});
            if(!bikes) {
                return next(new ErrorResponse('No bikes found', 204));
            } 
            res.status(200).json({ data: knowledges })
        } 
        catch (error) {
            next(error);
        }
});
