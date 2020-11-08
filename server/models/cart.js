const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Item"
    },
    userOwnerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
        // min: [1, 'Quantity can not be less than 1.']
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart