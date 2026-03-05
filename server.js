const express = require('express')
const app = express()

app.use(express.json())

const roleRoutes = require('./routes/roleRoutes')
const userRoutes = require('./routes/userRoutes')

app.use('/roles', roleRoutes)
app.use('/users', userRoutes)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})