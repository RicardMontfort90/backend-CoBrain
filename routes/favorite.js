const router = require('express').Router();
const Knowledge = require('../models/Knowledge');
const { isAuthenticated } = require('../middlewares/jwt');  
const Favorite = require('../models/Favorite');

// @desc    GET all favorites
// @route   GET /mine
// @access  Public
router.get('/', isAuthenticated, async (req, res, next) => {
    const userId = req.payload._id;
    try {
        const favorites = await Favorite.find({userId: userId}).populate("knowledgeId"); // 
        if(favorites.length === 0) {
            return next(new ErrorResponse('No favorites found', 204));
        } 
        res.status(200).json({ data: favorites })
    } catch (error) {
        next(error);
    }
});

// @desc    Save my Favourites knowledges
// @route   POST /api/v1/favorite
// @access  Public
router.post('/:knowledgeId', isAuthenticated, async (req, res, next) => {
    const { knowledgeId } = req.params;
    const userId = req.payload._id;
    console.log(knowledgeId, userId) // remove
    try {
        const knowledgeIsFavorite = await Favorite.find({userId:userId, knowledgeId:knowledgeId});
        if (knowledgeIsFavorite.length === 0){ // if it's more than 0, return error saying "this is already favorite"
        const newFavorite = await Favorite.create({ userId: userId, knowledgeId: knowledgeId });
        res.status(201).json({ data: newFavorite})
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;
