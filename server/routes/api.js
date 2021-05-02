const express = require('express');
const router = express.Router();
const User = require('../models/user')

const mongoose = require('mongoose');
const db ="mongodb+srv://admin:root@eventsdb.nm4lh.mongodb.net/eventsdb?retryWrites=true&w=majority"

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
        }
    })
})

//login api
router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if(!user) {
                res.status(401).send('Invalid Email')
            } else 
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password')
                } else {
                    res.status(200).send(user)
                }
            }
    })
})

//events api
router.get('/events', (req, res) => {
    
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

module.exports = router;

