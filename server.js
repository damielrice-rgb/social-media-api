require('dotenv').config();
const express = require("express");
const app = express();
const {MongoClient} = require('mongodb');

const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);


// DATABASE 

//mongodb Connection

async function mongodbConnection () {
  try {
    await client.connect();
    console.log('data base connection made!');
    const db = client.db('test');
    console.log(`connected to ${db.databaseName} database`);
  } catch (error) {
    console.log('Mongo DB connection error: ', error)
  }
}

//MIDDLEWARE


// ROUTES

app.get('/', async (req, res) => {
  try {
    await client.connect();
    res.json({
      message: "Successfully connected to the database!"
    });

  } catch (error){
    res.status(500).json({
      message: 'Failed to connect to the database.'
    });
  }
});

//PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})