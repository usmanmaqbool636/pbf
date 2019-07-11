const mongoose = require('mongoose');
const { Schema } = mongoose;
const BrandSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})
const Brands = mongoose.model('Brand', BrandSchema)
module.exports = Brands;