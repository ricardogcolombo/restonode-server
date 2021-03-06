import bodyParser from 'body-parser'

const setGlobalMiddleware = (app) => {
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.json())
}

export default setGlobalMiddleware
