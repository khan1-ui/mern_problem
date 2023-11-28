const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    ProductName : {type:String},
    ProductCode : {type:String},
    ProductImage : {type:String},
    UnitPrice : {type:String},
    Qty : {type:String},
    TotalPrice : {type:String},
    CreatedDate : {type:Date,default:Date.now()}
},{versionKey:false} )
const ProductModel =mongoose.model('products',dataSchema)
module.exports = ProductModel