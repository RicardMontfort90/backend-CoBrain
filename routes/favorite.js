/*
const router = require('express').Router();
const Knowledge = require('../models/Knowledge');
const { isAuthenticated } = require('../middlewares/jwt');  
const Favorite = require('../models/Favorite');

// @desc    GET all favorites
// @route   GET /api/v1/favorite
// @access  Public
router.get('/', isAuthenticated, async (req, res, next) => {
    try {
        const favorites = await Favorite.find({}).populate("knowledgeId");
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
    console.log(knowledgeId, userId)
    try {
        const knowledgeIsFavorite = await Favorite.find({userId:userId, knowledgeId:knowledgeId});
        if (knowledgeIsFavorite.length === 0){
        const newFavorite = await Favorite.create({ userId: userId, knowledgeId: knowledgeId });
        res.status(201).json({ data: newFavorite})
        if(!newFavorite) {
            return next(new ErrorResponse('A error with this knowledge to my Favourites', 500));
          } 
    }
    
  
    
  } catch (error) {
      next(error);
  }
});

module.exports = router;

*/