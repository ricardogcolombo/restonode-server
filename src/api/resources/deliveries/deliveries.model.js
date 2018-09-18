import mongoose from 'mongoose'

const DeliverySchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },
    lat:{
        type: String,
        required: true
    },

    long:{
        type: String,
        required: true
    },

    meals: [
        {
            name: String,
            quantity: String,
        }
    ]
});

export const deliveries = mongoose.model('deliveries', DeliverySchema);
