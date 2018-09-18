import express from 'express'
import DeliveriesController from './deliveries.controller'
export const deliveriesRouter = express.Router()

deliveriesRouter.route('/')
    .get(DeliveriesController.getAll)
    .post(DeliveriesController.createOneTime)

deliveriesRouter.route('/:id')
    .get(DeliveriesController.getOne)
