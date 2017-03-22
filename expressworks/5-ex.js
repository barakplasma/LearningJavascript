const port = process.argv[2]
const folder = process.argv[3]

const express = require('express')
const stylus = require('stylus').middleware(folder)

const app = express()

app.use(stylus)
app.use(express.static(folder))

app.listen(port)