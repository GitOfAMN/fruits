require('dotenv').config()

const db = require('./db')
const Fruit = require('./fruit')

// Dummy code for demoing below
const starterFruits = [
    {
        name: "Apple", color: "red", readyToEat: true,
    },
    {
        name: "Orange", color: "orange", readyToEat: true,
    },
    {
        name: "Coconut", color: "brown", readyToEat: true,
    },
    {
        name: "Grapes", color: "purple", readyToEat: true,
    },
    {
        name: "Pear", color: "green", readyToEat: false,
    }
]


Fruit.deleteMany({})
    .then(() => {
        Fruit.create(starterFruits)
            .then((created) => {
                console.log('created fruits:', createdFruits)
                db.close()
            })
            .catch(err => {
                console.log(err)
                db.close()
            })
    }).catch(err => {
        console.log(err)
        db.close()
    })