const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: { //Red Printed T-Shirt by HRX
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    details: {
        type: Array
    },
    category: { // Shirt, Jeans, or Sneakers
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    productImages: {
        type: Array
    },
    price: { // 100
        type: Number,
        required: true
    },
    salePrice: { // 75
        type: Number,
        required: true
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
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true    
})

//methods ==> for methods on single item
//statics ==> for methods on entire Item model
itemSchema.statics.getItemsPerPage = (page = 1, category) => {
    const PAGE_SIZE = 20; //limit the single page size to 20
    const skip = (page - 1) * PAGE_SIZE //skip 0 for 1st page, 20 for 2nd page, 40 for ...
    if(category === 'shirts') {
        return Item.find({category: {$in: ['t-shirt', 'shirt', 'sweatshirt']}})
            .skip(skip)
            .limit(PAGE_SIZE)
    } else if (category === 'pants') {
        return Item.find({category: {$in: ['jeans', 'sweatpants']}})
            .skip(skip)
            .limit(PAGE_SIZE)
    } else if (category === 'shoes') {
        return Item.find({category: {$in: ['shoes', 'sneakers']}})
            .skip(skip)
            .limit(PAGE_SIZE)
    }
    return Item.find({})
            .skip(skip)
            .limit(PAGE_SIZE)
}

const Item = mongoose.model('Item', itemSchema)

module.exports = Item