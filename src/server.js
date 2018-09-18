import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
// Declare an app from express
const app = express()

setupMiddware(app)
connect()
// setup basic routing for index route

app.use('/api', restRouter)

// catch all
app.all('*', (req, res) => {
    res.json({ok: true})
})

export default app
