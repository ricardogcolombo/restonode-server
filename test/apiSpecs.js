import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import { dropDb } from './helpers'
import app from '../src/server'

chai.use(chaiHttp)

const createApiSpec = (model, resourceName, newResource) => {
    describe(`/${resourceName}`, () => {
        afterEach(async () => {
            await dropDb()
        })

        describe(`GET /${resourceName}`, () => {
            it(`should get all ${resourceName}`, async () => {
                const result = await chai.request(app)
                    .get(`/api/${resourceName}`)

                expect(result).to.have.status(200)
                expect(result).to.be.json
            })
        })

    })
}

export default createApiSpec
