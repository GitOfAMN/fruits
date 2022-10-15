const mongoose = require('mongoose')

// Make a Schema - tells us what we cannot do (i.e cannot be missing a d name, color, etc)
const fruitSchema = new mongoose.Schema({
    name: { type: String, require: true },
    color: { type: String, required: true },
    readyToEat: Boolean
})


// Make a Model from the Schema - gives us all the methods to find the 'fruit' in this case. This model allows us to do all the CRUD capability necessary to items inside of a collection. Let's us update docs in the collection.

const Fruit = mongoose.model('Fruit', fruitSchema)

// Export the Model for Use in the App

module.exports = Fruit