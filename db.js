const mongoose = require("mongoose");
const connectionString = process.env.DATABASE_URL
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://mike:mike@cluster0.uu2vrin.mongodb.net/michael' , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose