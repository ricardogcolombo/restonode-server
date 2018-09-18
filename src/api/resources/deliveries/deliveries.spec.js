import createApiSpec from '~/apiSpecs'
import { deliveries } from './deliveries.model'

createApiSpec(
    deliveries,
    'deliveries',
    {name: 'ricardo', lastname: 'colombo',lat:'232',long:'123',meals:[{name:'Burger',quantity:'3'}]}
)
