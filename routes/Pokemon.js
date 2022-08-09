const express = require('express')
const app = express()
const axios = require('axios')

app.get('/allpokemon', async (req, res) => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    res.json(response.data)
})

app.get('/:id', async (req, res) => {

    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
        res.json(response.data)  
    }catch(e){
        res.status(e.response.status).send(e.response.data)
    }
})

module.exports = app