const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true 
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  /*
  profileImage: {
    type: String,
    default: "https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png"
  },
  skills: {
    type: String,
    required: [true, "Skills is required"]
  },
  country: {
    type: String,
  },
  city: {
    type:String,
  },
  contactInfo: {
    type: String,
  },
  description: {
    type: String,
  }
  */
},
  {
    timestamps: true
  });

module.exports = model("User", userSchema);