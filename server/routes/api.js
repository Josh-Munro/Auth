const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Item = require('../models/item')

const mongoose = require('mongoose');
//const db ="mongodb+srv://admin:root@eventsdb.nm4lh.mongodb.net/eventsdb?retryWrites=true&w=majority"
const db = "mongodb://127.0.0.1:27017/test"
mongoose.connect(db, err =>{
    if (err) {
        console.error('Error' + err)
    }
        else {
            console.log('Connected to MongoDB')
        }
})

router.get('/', (req, res) => {
    res.send('From API route');
});

//registration api
router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
            console.log('Registered');
            res.send('Registered');
        }
    })
})

//login api
router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({Email: userData.Email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if(!user) {
                res.status(401).send('Invalid Email')
            } else 
                if (user.Password !== userData.Password) {
                    res.status(401).send('Invalid password')
                } else {
                    res.status(200).send(user)
                }
            }
    })

})

//events api
router.get('/events', (req, res) => {
    
    // let events = [
    //     {
    //         "_id": "1",
    //         "name": "Auto Expo",
    //         "description": "Hello there"
    //     },

    //     {
    //         "_id": "2",
    //         "name": "6Six60",
    //         "description": "Hello again"
    //     }
    // ]

    //res.json(events)

    Item.find((error, item) => {
        if(error) {
            console.log(error)
        }
        else {
            res.json(item)
        }
    } )
    
})


//special events api

router.get('/specials', (req, res) => {
    
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "Hello there"
        },

        {
            "_id": "2",
            "name": "6Six60",
            "description": "Hello again"
        }
    ]

    res.json(events)
    
})


//add item api

router.post('/additem', (req, res) => {
    let itemData = req.body
    let item = new Item(itemData)
    item.save((error, addedItem) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(addedItem)
        }
    })
})

module.exports = router;

