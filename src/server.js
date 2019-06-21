const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

// config
const config = require('./config/config')

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/', require('./routes/'))

// server and database
mongoose
  .connect(config.URLDB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    app.listen(config.PORT, () => {
      console.log(`server on port ${config.PORT}`)
    })
    console.log('database connect')
  })
  .catch(err => console.log(err))
