const express = require('express')
const router = express.Router()

const { dataRole, dataUser } = require('../data')

/* GET ALL ROLE */
router.get('/', (req, res) => {
    res.json(dataRole)
})

/* GET ROLE BY ID */
router.get('/:id', (req, res) => {

    const role = dataRole.find(r => r.id === req.params.id)

    if(!role) return res.status(404).json({message:"Role not found"})

    res.json(role)
})

/* CREATE ROLE */
router.post('/', (req,res)=>{

    const role = req.body

    dataRole.push(role)

    res.json({
        message:"Create role success",
        role
    })
})

/* UPDATE ROLE */
router.put('/:id',(req,res)=>{

    const index = dataRole.findIndex(r=>r.id === req.params.id)

    if(index === -1) return res.status(404).json({message:"Role not found"})

    dataRole[index] = req.body

    res.json({
        message:"Update role success"
    })
})

/* DELETE ROLE */
router.delete('/:id',(req,res)=>{

    const index = dataRole.findIndex(r=>r.id === req.params.id)

    if(index === -1) return res.status(404).json({message:"Role not found"})

    dataRole.splice(index,1)

    res.json({
        message:"Delete role success"
    })
})

/* GET USERS BY ROLE */
router.get('/:id/users',(req,res)=>{

    const users = dataUser.filter(u=>u.role.id === req.params.id)

    res.json(users)

})

module.exports = router