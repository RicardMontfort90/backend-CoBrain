const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
},
imageUrl: {
    type: String,
    required: true
},
title: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
}
});

module.exports = model("Review", reviewSchema);