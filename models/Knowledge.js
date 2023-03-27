const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const knowledgeSchema = new Schema (
    {
        knowledge: [
            {
                rol: {
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
                    required: [true, "Rol is required"],
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
    },

    {
        timestamps: true
    },
);

module.exports = model("Knowledge", knowledgeSchema);