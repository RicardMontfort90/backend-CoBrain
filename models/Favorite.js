const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const favoriteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  KnowledgeId: {
    type: Schema.Types.ObjectId,
    ref: "Knowledge",
    required: true
  }
},
  {
    timestamps: true
  });

module.exports = model("Favorite", favoriteSchema);