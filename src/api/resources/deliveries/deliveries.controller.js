import { controllers, generateControllers } from '../../modules/query'
import { deliveries } from './deliveries.model';
const axios = require('axios');

const createOneTime = (req, res, next) => {
    // this should be in some properties file
    const latlongOrigin = '-34.6036416,-58.3816917'
    // call gdirections api to get time
    return Promise.all([controllers.createOne(deliveries, req.body)])
        .then(doc => {
            const {name,lastname,lat,long,meals} = doc[0]._doc
            const formatedMeals = meals.map(item=>({name:item.name,quantity:item.quantity}))
            return res.status(201).json({name,lastname,lat,long,time:'30 min',meals:formatedMeals})
        })
        .catch(error => next(error))
}

export default generateControllers( deliveries, {createOneTime:createOneTime})
