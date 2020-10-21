const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: { //Red Printed T-Shirt by HRX
        type: String,
        required: true,
        trim: true
    },
    category: { // Shirt, Jeans, or Sneakers
        type: String,
        required: true,
        trim: true
    },
    price: { // 100
        type: Number,
        required: true
    },
    salePrice: { // 75
        type: Number
    },
    colors: { // ['red', 'black', 'blue']
        type: Array,
        required: true,
        trim: true
    },
    sizes: { // ['xl', 'l', 'm']
        type: Array,
        required: true,
        trim: true
    },
    rating: { //4.2
        type: Number
    },
    reviews: { // ['good like it', 'love the item', 'it's bad']
        type: Array,
        trim: true
    },
    keywords:{ // ['shirt', 'summer', 'sea']
        type: Array,
        trim:true
    }
}, {
    timestamps: true
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item