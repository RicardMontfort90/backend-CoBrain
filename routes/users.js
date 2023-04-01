
const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Review = require('../models/Review');
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');
// REMOVED UNUSED VARIABLES
// FINISH ROUTES DOCUMENTATION

// @desc    Edit User
// @route   PUT /users/edit
// @access  User
router.put('/edit', isAuthenticated, async (req, res, next) => {
    const userId = req.payload._id;
    const { email, hashedPassword, username, profileImage, country, city, contactInfo, description } = req.body; // ADD MISSING FIELDS FROM USER MODEL
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { email, hashedPassword, username, profileImage, country, city, contactInfo, description }, {new: true});
        res.status(202).json({ data: updatedUser })
    } 
    catch (error) {
        next(error);
    }
});

// @desc    Delete User
// @route   DELETE /users/delete
// @access  Private
router.delete('/delete', isAuthenticated, async (req, res, next) => {
    const userId = req.payload._id;
    try {
        const user = await User.findById(userId);
        if(!user) {
            return next(new ErrorResponse(`User not found by ${userId}`, 404));
        } else {
            const deletedReview = await Review.deleteMany({userId});
            // REMOVE KNOWLEDGES FROM USER
            const deletedUser = await User.findByIdAndDelete(userId);
            res.status(202).json({ data: deletedReview, deletedUser }) // INSTEAD OF DATA, JUST MESSAGE: USER DELETED SUCCESFULLY
        }
    } catch (error) {
        next(error);
    }
});

// @desc    Admin can delete any users
// @route   DELETE /user/:userId/delete
// @access  Admin
router.delete('/:userId/delete', isAuthenticated, isAdmin, async (req,res,next) =>{
    const {userId} = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        res.status(202).json({data: deletedUser});
    } catch (error) {
        next(error);
    }
});

module.exports = router;
