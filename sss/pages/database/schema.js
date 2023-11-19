import mongoose from "mongoose"

import {Schema} from "mongoose"

const shopSchema =  new mongoose.Schema({
   
    name : String,
    brand: String,
    qty : Number

})



const ShopS =  mongoose.model("shop") || mongoose.model("shop", shopSchema) 

export default ShopS