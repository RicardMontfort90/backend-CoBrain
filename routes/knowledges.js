const router = require('express').Router();
const Knowledge = require("../models/Knowledge");
const { isAuthenticated } = require('../middlewares/jwt') 

// @desc    Get all knowledges
// @route   GET /knowledges
// @access  Public
router.get('/', isAuthenticated, async (req, res, next) => {
    try {
        const knowledges = await Knowledge.find();
        res.status(200).json(knowledges);
    } catch (error) {
        next(error)
    }
});

  // @desc    Get one knowledge
  // @route   GET /knowledges/:knowledgeId
  // @access  Private
router.get('/:knowledgeId', isAuthenticated, async (req, res, next) => {
    const { knowledgeId } = req.params;
    try {
        const knowledge = await Knowledge.findById(knowledgeId);
        res.status(200).json(knowledge);
    } catch (error) {
        next(error)
    }
});

  // @desc    Create one knowledge
  // @route   POST /knowledge
  // @access  Private
router.post('/', isAuthenticated, async (req, res, next) => { 

    const { category, title, knowledgeImage, timeOfActivity, location, description } = req.body;
    if (!category === "" || !title === "" ||  !knowledgeImage === "" || !timeOfActivity === "" || !location === "" || !description === ""  ) {
        res.status(400).json({message: "Please check your fields"})
        return;
    }

    const userId = req.payload._id;
    try {
        const newKnowledge = await Knowledge.create({ userId: userId, category, title, knowledgeImage, timeOfActivity, location, description }); 
        res.status(201).json({ data: newKnowledge});
    } catch (error) {
        next(error)
    }
});

  // @desc    Edit one knowledge
  // @route   PUT /knowledges/:knowledgeId
  // @access  Private
router.put('/:knowledgeId', isAuthenticated, async (req, res, next) => { // IS AUTHENTICATED
   /* const userId = req.payload._id; */
    const { knowledgeId } = req.params;
    const { category, title, knowledgeImage, timeOfActivity, location, description } = req.body;
    try {
        // CONST KNOWLEDGE = KNOWLEDGE.FINDBYID
        // IF (KNOWLEDGE.USER !== REQ.PAYLOAD._ID) RETORNAR ERROR "UNAUTHORIZED TO EDIT"
        const editKnowledge = await Knowledge.findByIdAndUpdate(knowledgeId, { /*userId: userId, */ category, title, knowledgeImage, timeOfActivity, location, description }, { new: true }); // INSTEAD OF PASSING BODY GLOBALLY, DESTRUCTURE, CHECK ALL EXPECTED FIELDS ARE PRESENT, IF NOT RES.STATUS AND ERROR.
        
        res.status(204).json({ data: editKnowledge, message: 'OK' });
    } catch (error) {
        next(error)
    }
});

  // @desc    Delete one knowledge
  // @route   DELETE /knowledges/:knowledgesId
  // @access  Private
router.delete('/:knowledgeId', isAuthenticated, async (req, res, next) => {
    const { knowledgeId } = req.params;
    try {
        const knowledge = await Knowledge.findById(knowledgeId);
        if (knowledge.userId != req.payload._id){
            res.status(400).json({message: "Cannot delete this knowledge"})
            return 
        }
        const deletedKnowledge = await Knowledge.findByIdAndDelete(knowledgeId);
        res.status(200).json({deletedKnowledge, message: "OK"}); 
    } catch (error) {
        next(error)
    }
});

module.exports = router;