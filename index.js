const express = require("express")
const app = express()
const port = 5001

const gotCharacterRoutes = require('./routes/Got.js')
const gotPokemonRoutes = require('./routes/Pokemon.js')


app.use('/games-of-thrones', gotCharacterRoutes)
app.use('/pokemon', gotPokemonRoutes)

app.use('/*', (req, res) => {
    res.json('All routes - Erreur 404')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
