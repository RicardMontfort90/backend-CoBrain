require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Knowledge = require('../models/Knowledge');

const knowledges = [
{
    "category": "Music",
    "userId": "User",         
    "title": "Piano's teacher",
    "knowledgeImage": "https://media.istockphoto.com/id/1283026440/es/foto/joven-aprendiendo-a-tocar-el-piano-teniendo-lecci%C3%B3n-de-la-profesora.jpg?s=612x612&w=0&k=20&c=svxyq5W6s9RlGDnS6clfTXrGnC7W2OCqToM1v7Gmcz8=",
    "timeOfActivity": "1h",
    "location": "Barcelona",
    "description": "Hey! I'm a piano teacher who wants to change my time to try to learn Greek, so We can try to spend are hours and change are knowledge!",
}]

mongoose.connect(process.env.MONGO_URL)
.then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
})
.then(() => {
    return Knowledge.deleteMany({})
})
.then(() => {
    return Knowledge.create(knowledges)
})
.then((created) => {
    console.log(`Created ${created.length} knowledges`)
})
.catch((err) => {
    console.error("Error connecting to mongo: ", err);
})
.finally(() => {
    mongoose.connection.close()
})