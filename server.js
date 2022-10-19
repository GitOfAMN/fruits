require('dotenv').config() //this lets you read the dotenv file and makes it that we can use it in the rest of the file

// Require modules
const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')


// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) //read in form data and need this ti update and delete fruits. This code makes us have req.body on line 55 under the CREATE section - it makes us have req.body. You MUST do this line of code, it's so important, it's callled your body parser middleware. if you do not put this all the way at the top, it's the smarter decision especially as you continue to grow your code repitorie.
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})


/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/fruits', require('./controllers/routeController'))
/* END Middleware */


//////***** This is the code from class week 12 day 2 *****\\\\\\


// Mount Routes


/*Start Routes */

// Tell the app to listen on a port
app.listen(3000, () => {
  console.log('Listening on Port 3000')
})

























//////*****This is code with notes from lessons prior*****\\\\\\

// Mount Routes

/*Start Routes */


// INDEX --- READ --- GET

// app.get('/fruits', (req, res) => {
//   Fruit.find({}, (err, foundFruits) => {
//     if(err){
//       console.error(err)
//       res.status(400).send(err)
//     } else {
//       res.render('fruits/Index', {
//         fruits: foundFruits
//       })
//     }
//   })
// })

// // NEW (Not applicable in an api)
// app.get('/fruits/new', (req, res) => {
//   res.render('fruits/New')
// })

// // DELETE
// app.delete('/fruits/:id', (req, res) => {
//   Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
//     if(err){
//       console.error(err)
//       res.status(400).send(err)
//     } else {
//       res.redirect('/fruits')
//     }
//   })
// })

// // UPDATE
// app.put('/fruits/:id', (req, res) =>{
//   req.body.readyToEat === 'on' || req.body.readyToEat === true ? req.body.readyToEat === true : req.body.readyToEat = false
//   Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedFruit) => {
//     if(err){
//       console.error(err)
//       res.status(400).send(err)
//     } else {
//       res.redirect(`/fruits/${updatedFruit._id}`)
//     }
//   })
// })

// // CREATE
// app.post('/fruits', (req, res) => {
//   req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
//   // ^^^ req.body is an object where we get the body or form data of the request (that the user sends to us/ that we get from the user). So we take the req.body and essentailly what happens it doesn't return a true/false sitation like a Boolean so we have to do something called massaging out data
//   Fruit.create(req.body, (err, createdFruit) => {
//     if(err){
//       console.error(err)
//       res.status(400).send(err)
//     } else {
//       res.redirect(`/fruits/${createdFruit._id}`)
//       //res.send(createdFruit)
//     }
//   })
// })

// // EDIT (not applicable in an api)
// app.get('/fruits/:id/edit', (req, res) => {
//   Fruit.findById(req.params.id, (err, foundFruit) => {
//     if(err){
//      console.error(err)
//      res.status(400).send(err)
//     } else {
//      res.render('fruits/Edit', {
//        fruit: foundFruit
//      })
//     }
//   })
//  })


// // SHOW ---- READ ---- GET
// app.get('/fruits/:id', (req, res) => {
//   Fruit.findById(req.params.id, (err, foundFruit) => {
//     if(err){
//      console.error(err)
//      res.status(400).send(err)
//     } else {
//      res.render('fruits/Show', {
//        fruit: foundFruit
//      })
//     }
//   })
//  })



// /* END ROUTES */


// // Tell the app to listen on a port
// app.listen(3000, () => {
//     console.log('Listening on Port 3000')
// })