import { controllers, generateControllers } from '../../modules/query'
import { deliveries } from './deliveries.model'
import axios from 'axios'

const createOneTime = (req, res, next) => {
    // this should be in some properties file
    const latlongOrigin = '-34.6036416,-58.3816917'
    // call gdirections api to get time
    let getTimeData = axios.get('https://maps.googleapis.com/maps/api/directions/json?origin='+latlongOrigin+'&destination='+req.body.lat+','+req.body.long+'&avoid=highways&mode=driving&key=AIzaSyAd-p6W--DeSwFBAIwnEBQGfnUzana88Hg');
    return Promise.all([controllers.createOne(deliveries, req.body),getTimeData])
        .then(doc => {
            const time = doc[1].data.routes[0].legs.reduce((acc,item)=>{
                return acc + item.duration.value;
            },0);
            let response = Object.assign({},doc[0]._doc,{time:time});
            return res.status(201).json(response)
        })
        .catch(error => next(error))
}

export default generateControllers( deliveries, {createOneTime:createOneTime})
