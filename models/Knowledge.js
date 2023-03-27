const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const knowledgeSchema = new Schema (
    {
        knowledge: [
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
                users: {
                    type: [Schema.Types.ObjectId],
                    red: "User",
                },
            },
        ],
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
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
        location: [
            {
                country: {
                    type: String,
                    default: "Spain",
                    required: [true, "Country is required."],
                },
                city: {
                    type: String,
                    default: "Barcelona",
                    required: [true, "City is required."],
                },
                where: {
                    type: String,
                    default: "Outside",
                    enum: [
                        "At Home",
                        "Outside",
                        "WorkShop",
                    ],
                    required: [true, "The place where will be is required."],
                },
            },
        ],
        description: {
            type: String,
            required: [true, "Description is required."]
        }
    },
    {
        timestamps: true
    },
);

module.exports = model("Knowledge", knowledgeSchema);