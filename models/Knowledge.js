const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const knowledgeSchema = new Schema (
    {
                category: {
                    type: String,
                    enum: [
                        "Music",
                        "Cooking",
                        "Health",
                        "Sport",
                        "Crafts",
                        "Circus",
                        "Languages",
                        "Animals",
                        "Others",
                    ],
                    required: [true, "Category is required"],
                },
                user: {
                    type: Schema.Types.ObjectId,
                    red: "User",
                },
        title: {
            type: String,
            required: [true, "Title is required."],
        },
        knowledgeImage: {
            type: String,
            default:"https://thumbs.dreamstime.com/z/conexi%C3%B3n-del-cerebro-32729762.jpg",
            required: [true, "Image is required."],
        },
        timeOfActivity: {
            type: Number,
            default: 0,
            required: [true, "Time in hours and/or minutes approximately is required."]
        },
        location: {
            type: String,
        description: {
            type: String,
            required: [true, "Description is required."]
        }
    },
},
    {
        timestamps: true
    },
);

module.exports = model("Knowledge", knowledgeSchema); 