const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const itemRouter = require('./routers/item')

const app = express()

app.use(express.json()) //automatically parse the incoming json for us --> trasform it to object
app.use(userRouter)
app.use(itemRouter) //to use the routers on this file

module.exports = app