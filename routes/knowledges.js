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

// @desc    GET single bike
// @route   GET /api/v1/
// @access  Public
router.get('/:id', isAuthenticated, async (req, res, next) => {
    const { id } = req.params;
    try {
        const knowledge = await Knowledge.findById(id);
        if(!knowledge) {
            return next(new ErrorResponse('knowledge not found', 404));
        } 
        res.status(200).json({ data: knowledge })
    } 
    catch (error) {
        next(error);
    }
});


module.exports = router;
