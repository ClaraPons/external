const express = require("express")
const app = express()
const port = 5001

const gotCharacterRoutes = require('./routes/json.js')

app.use('/games-of-thrones', gotCharacterRoutes)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})