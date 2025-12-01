const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://krsadarsh:Krsadarsh%403000@free-cluster.fedg58a.mongodb.net/";
//putting "/inotebook"creates the new folder in the mongo db database

const connectToMongo = async () => {
  await mongoose.connect(mongoURI, {});
  console.log("Connected to MongoDB successfully!");
};

module.exports = connectToMongo;
