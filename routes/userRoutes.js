const express = require('express')
const router = express.Router()

const { dataUser } = require('../data')

/* GET ALL USER */
router.get('/',(req,res)=>{
    res.json(dataUser)
})

/* GET USER BY USERNAME */
router.get('/:username',(req,res)=>{

    const user = dataUser.find(u=>u.username === req.params.username)

    if(!user) return res.status(404).json({message:"User not found"})

    res.json(user)
})

/* CREATE USER */
router.post('/',(req,res)=>{

    const user = req.body

    dataUser.push(user)

    res.json({
        message:"Create user success",
        user
    })
})

/* UPDATE USER */
router.put('/:username',(req,res)=>{

    const index = dataUser.findIndex(u=>u.username === req.params.username)

    if(index === -1) return res.status(404).json({message:"User not found"})

    dataUser[index] = req.body

    res.json({
        message:"Update success"
    })
})

/* DELETE USER */
router.delete('/:username',(req,res)=>{

    const index = dataUser.findIndex(u=>u.username === req.params.username)

    if(index === -1) return res.status(404).json({message:"User not found"})

    dataUser.splice(index,1)

    res.json({
        message:"Delete success"
    })
})

module.exports = router