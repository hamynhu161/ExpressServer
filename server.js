//express.js palvelin//
const path = require('path')
const express = require('express')

const app = express()

const herkut = require('./Herkut.json')

// GET ALL etsitään kaikki herkut jsonista
app.get('/api/herkut', (req,res) => {
    res.json(herkut)
})

//tehdään polkumääritys public kansioon
const polku = path.join(__dirname, './public')

//sanotaan että em.polussa on tiedostosisältö jota palvelin käytää kun se saa http requestin
app.use(express.static(polku))

app.listen(3300,() => {
    console.log('Server is up on port 3300.')
})