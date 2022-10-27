require('dotenv').config()
// Require modules
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const db = require('./models/db')
const app = express()

// Configure the app (app.set)
/* Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body <=============
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.use(cors())
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})
/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/fruits', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))
/* END Middleware */

// Tell the app to listen on a port
app.listen(3000, () => {
  console.log('Listening on Port 3000')
})




/// ///*****This is code with notes from lessons prior*****\\\\\\

// Mount Routes

/* Start Routes */

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
