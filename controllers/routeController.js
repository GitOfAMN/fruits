// Start our router
// Import express
const express = require('express')
// only the router none of the other app stuff
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
const apiController = require('./apiController')

// API Routes
// Index
router.get('/api', dataController.index, apiController.index)
// Delete
router.delete('/api/:id', dataController.destroy, apiController.show)
// Update
router.put('/api/:id', dataController.update, apiController.show)
// Create
router.post('/api', dataController.create, apiController.show)
// Show
router.get('/api/:id', dataController.show, apiController.show)

// Non API Routes
// Index
router.get('/', dataController.index, viewController.index)
// New
router.get('/new', viewController.newView)
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
router.put('/:id', dataController.update, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectShow)
// Edit
router.get('/:id/edit', dataController.show, viewController.edit)
// Show
router.get('/:id', dataController.show, viewController.show)

module.exports = router

// CODE BELOW FROM FIRST HALF OF CLASS ON WK12D2 \\

// Need the model because the job of the model is to give us access to the data base
// const Fruit = require('../models/fruit')

// Routes

// INDEX

// router.get('/', (req, res) => {
//     Fruit.find({}, (err, foundFruits) => {
//         if (err) {
//             console.error(err)
//             res.status(400).send(err)
//         } else {
//             res.render('fruits/Index', {
//                 fruits: foundFruits
//             })
//         }
//     })
// })

// //NEW

// router.get('/new', (req, res) => {
//     res.render('fruits/New')
// })

// //DELETE

// router.delete('/:id', (req, res) => {
//     Fruit.findByIdAndDelete(req.params.id, (err, deleteFruit) => {
//         if (err) {
//             console.error(err)
//             res.status(400).send(err)
//         } else {
//             res.redirect('/fruits')
//         }
//     })
// })

// //UPDATE

// router.put('/:id', (req, res) => {
//     req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
//     Fruit.findByIdAndUpdate(req.params, id, req.body, { new: true }, (err, updatedFruit) => {
//         if (err) {
//             console.error(err)
//             res.status(400).send(err)
//         } else {
//             res.redirect(`/fruits/${createdFruit._id}`)
//         }
//     })
// })

// //CREATE

// router.post('/', (req, res) => {
//     req.body.readyToEat = req.body.readyToEat === 'on'? true : false;
//     Fruit.create(req.body, (err, createdFruit) => {
//         if(err){
//             console.error(err)
//             res.status(400).send(err)
//         } else {
//             res.redirect(`/fruits/${createdFruit._id}`)
//         }
//     })
// })

// //EDIT

// router.get('/:id/edit', (req, res) => {
//     Fruit.findById(req.params.id, (err, foundFruit) => {
//         if (err) {
//             console.error(err) // this err message is for us inside the terminal
//             res.status(400).send(err) // this is for the client. this one is a MUST
//         } else {
//             res.render('fruits/Edit', {
//                 fruit: foundFruit
//             })
//         }
//     })
// })

// //////***** NOTES ABOUT HOW THIS WORKS BELOW *****\\\\\\

// // router.get('/:id/edit', (req, res) => {
// //     Fruit.findById(req.params.id, (errorMessageTheDBGaveUs, thingIGotFromTheDB) => {
// //         if(errorMessageTheDBGaveUs){
// //             console.error(errorMessageTheDBGaveUs)
// //             res.status(400).send(errorMessageTheDBGaveUs)
// //         } else {
// //             const props = {
// //                 fruit: thingIGotFromTheDB
// //             }
// //             res.render('fruits/Edit', props)
// //         }
// //     })
// // })

// //SHOW

// router.get('/:id', (req, res) => {
//     Fruit.findById(req.params.id, (err, foundFruit) => {
//         if(err){
//             console.error(err)
//             res.status(400).send(err)
//         } else {
//             res.render('fruits/Show', {
//                 fruit: foundFruit
//             })
//         }
//     })
// })