import express from 'express'
import { deliveriesRouter } from './resources/deliveries'
import { apiErrorHandler } from './modules/errorHandler'

export const restRouter = express.Router()

restRouter.use('/deliveries', deliveriesRouter)
restRouter.use(apiErrorHandler)
