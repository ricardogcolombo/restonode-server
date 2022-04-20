import { dropDb } from '~/testhelpers'
import { controllers } from './query'
import { deliveries } from '../resources/deliveries/deliveries.model'

describe('Modules', () => {
    beforeEach(async () => {
        await dropDb()
    })

    afterEach(async () => {
        await dropDb()
    })

    describe('query', () => {
        describe('createOne', () => {
            it('should create a document', async () => {
                const result = await controllers.createOne(deliveries, {
                    name: 'student12',
                    lastname: 'test',
                    lat:'32,233',
                    long:'32,233',
                    meals:[{name:'Burger',quantity:'3'}]
                })
                expect(result).to.be.ok
                expect(result.id).to.be.ok
                expect(result.name).to.equal('student12')
            })
        })
     
    })
})
