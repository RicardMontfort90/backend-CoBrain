/* require('dotenv').config();
const mongoose = require('mongoose');
// Import the model
/*const Knowledge = require('../models/Knowledge'); */
// Place the array you want to seed
/*
const knowledges = 
  {
    category: "Music",
      users: "User"
  },
    title: "Piano's teacher",
    knowledgeImage: "https://media.istockphoto.com/id/1283026440/es/foto/joven-aprendiendo-a-tocar-el-piano-teniendo-lecci%C3%B3n-de-la-profesora.jpg?s=612x612&w=0&k=20&c=svxyq5W6s9RlGDnS6clfTXrGnC7W2OCqToM1v7Gmcz8=",
    timeOfActivity: "1h",
    location: "Barcelona",
    description: "Hey! I'm a piano teacher who wants to change my time to try to learn Greek, so We can try to spend are hours and change are knowledge!"
  },


mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    // return Model.create(array)
    return  /* Knowledge.create(knowledges) 
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

// Run npm run seed */




require('dotenv').config();
const mongoose = require('mongoose');
// Import the model
const Knowledge = require('../models/Knowledge');
// Place the array you want to seed
const knowledges = [{

    category: "Music",
    users: "User",
    title: "Piano's teacher",
    knowledgeImage: "https://media.istockphoto.com/id/1283026440/es/foto/joven-aprendiendo-a-tocar-el-piano-teniendo-lecci%C3%B3n-de-la-profesora.jpg?s=612x612&w=0&k=20&c=svxyq5W6s9RlGDnS6clfTXrGnC7W2OCqToM1v7Gmcz8=",
    timeOfActivity: "1h",
    location: "Barcelona",
    description: "Hey! I'm a piano teacher who wants to change my time to try to learn Greek, so We can try to spend are hours and change are knowledge!",
  }]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Knowledge.create(knowledges) // Model.create(array) 
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

// Run npm run seed 