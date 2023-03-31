const router = require('express').Router();
const Knowledge = require("../models/Knowledge");

// @desc    Get all knowledges
// @route   GET /knowledges
// @access  Public
router.get('/', async (req, res, next) => {
    try {
        const knowledges = await Knowledge.find();
        res.status(200).json(knowledges);
    } catch (error) {
        next(error)
    }
});

  // @desc    Get one knowledge
  // @route   GET /knowledges/:knowledgeId
  // @access  Public
router.get('/:knowledgeId', async (req, res, next) => {
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
  // @access  Public
router.post('/', async (req, res, next) => { // IS AUTHENTICATED
    try {
        const newKnowledge = await Knowledge.create(req.body); // INSTEAD OF PASSING BODY GLOBALLY, DESTRUCTURE, CHECK ALL EXPECTED FIELDS ARE PRESENT, IF NOT RES.STATUS AND ERROR.
        // FIELD USER WILL NOT BE PASSED FROM REQ. BODY, BUT TAKEN FROM REQ.PAYLOAD
        res.status(201).json(newKnowledge);
    } catch (error) {
        next(error)
    }
});

  // @desc    Edit one knowledge
  // @route   PUT /knowledges/:knowledgeId
  // @access  Public
router.put('/:knowledgeId', async (req, res, next) => { // IS AUTHENTICATED
    const { knowledgeId } = req.params;
    try {
        // CONST KNOWLEDGE = KNOWLEDGE.FINDBYID
        // IF (KNOWLEDGE.USER !== REQ.PAYLOAD._ID) RETORNAR ERROR "UNAUTHORIZED TO EDIT"
        const response = await Knowledge.findByIdAndUpdate(knowledgeId, req.body, { new: true }); // INSTEAD OF PASSING BODY GLOBALLY, DESTRUCTURE, CHECK ALL EXPECTED FIELDS ARE PRESENT, IF NOT RES.STATUS AND ERROR.
        console.log(response) // REMOVE
      //res.redirect(`/knowledges/${knowledgesId}`) ==> only to see on Postman if we edited right
        res.status(204).json({ message: 'OK' });
    } catch (error) {
        next(error)
    }
});

  // @desc    Delete one knowledge
  // @route   DELETE /knowledges/:knowledgesId
  // @access  Public
router.delete('/:knowledgeId', async (req, res, next) => { // IS AUTHENTICATED
    const { knowledgeId } = req.params;
    // IF (KNOWLEDGE.USER !== REQ.PAYLOAD._ID) RETORNAR ERROR "UNAUTHORIZED TO EDIT"
    try {
        const deletedKnowledge = await Knowledge.findByIdAndDelete(knowledgeId);
        res.status(200).json(deletedKnowledge); // NOT NEEDED TO SEND DELETED KNOWLEDGE, JUST "OK"
    } catch (error) {
        next(error)
    }
});

module.exports = router;
