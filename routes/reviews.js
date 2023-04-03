const router = require('express').Router();
const Review = require('../models/Review');
const { isAuthenticated, isAdmin } = require('../middlewares/jwt')

// @desc    GET all the review
// @route   GET /reviews
// @access  Public
router.get('/', isAuthenticated , async (req, res, next) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews)
    } 
    catch (error) {
        next(error);
    }
});


// @desc    GET my reviews
// @route   GET /mine
// @access  Public
router.get('/mine', isAuthenticated, isAdmin, async (req, res, next) => {
    try {
        const reviews = await Review.find({userId: req.payload._id});
        res.status(200).json(reviews)
    } 
    catch (error) {
        next(error);
    }
});

// @desc    GET single review
// @route   GET /reviews/:reviewId
// @access  Public
router.get('/:reviewId', isAuthenticated, isAdmin, async (req, res, next) => {
    const { reviewId } = req.params;
    try {
        const review = await Review.findById(reviewId);
            res.status(200).json(review)
    } 
    catch (error) {
        next(error);
    }
});


// @desc    Create a review
// @route   POST /reviews
// @access  Public
router.post('/', isAuthenticated, isAdmin, async (req, res, next) => {
    const { imageUrl, title, description } = req.body;
    const userId = req.payload._id;
    try {
        const review = await Review.create({ userId: userId, imageUrl, title, description });
        res.status(201).json({ data: review })
    } 
    catch (error) {
        next(error);
    }
});

// @desc    Edit a review
// @route   PUT /reviews/:reviewId
// @access  Private
router.put('/:id', isAuthenticated, isAdmin, async (req, res, next) => {
    const { id } = req.params;
    const { image, title, description } = req.body;
    try {
        const review = await Review.findById(id);
            const updatedReview = await Review.findByIdAndUpdate(id, { image, title, description }, {new: true});
            res.status(202).json({ data: review, updatedReview })
    } catch (error) {
        next(error);
    }
});

// @desc    Delete a review
// @route   DELETE /reviews/:reviewId
// @access  Private
router.delete('/:reviewId', isAuthenticated, isAdmin, async (req, res, next) => {
    const { reviewId } = req.params;
    try {
        const deletedReview = await Review.findByIdAndDelete(reviewId);
        res.status(200).json(deletedReview);
    } catch (error) {
        next(error)
    }
});

module.exports = router;