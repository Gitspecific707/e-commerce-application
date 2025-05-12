//we have created a db table/collection with products name now we are going to create model for products table


const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
});

module.exports=mongoose.model('products',productSchema)

// model me hum wo data lete h jo hame us table me store karwana hota h